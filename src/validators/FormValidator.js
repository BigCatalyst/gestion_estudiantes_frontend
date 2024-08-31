import { useState } from "react";

const useFormValidator = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState({});
  const handdleChangeForm = (event) => {
    const { name, value, checked } = event.target;

    if (value !== "on" && value !== "off") {
      // console.log(name, value, checked);
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: checked });
    }
    if (value.length === 0)
      setFormError({
        ...formError,
        [name]: `El campo '${name}' es requerido.`,
      });
    else setFormError({ ...formError, [name]: "" });
  };

  return { formData, formError, handdleChangeForm, setFormError };
};

export default useFormValidator;
