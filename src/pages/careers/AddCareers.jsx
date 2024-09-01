/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import { Button, Container, TextField } from "@mui/material";

import { add } from "../../services/CareersServices";

const AddCareers = ({ setKeyDataGrid, handleCloseAddM }) => {
  const { formData, formError, handdleChangeForm } = useFormValidator({
    amount: 0,
    name: "",
  });

  const handdleSubmit = async (event) => {
    event.preventDefault();
    //console.log(formData);
    //llamada a la api ok
    const res = await add(formData);
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseAddM();
    }
  };

  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        <form onSubmit={handdleSubmit}>
          <TextField
            name="name"
            onChange={handdleChangeForm}
            value={formData.name}
            error={formError.name ? true : false}
            helperText={formError.name}
            fullWidth
            label="Nombre"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="amount"
            onChange={handdleChangeForm}
            value={formData.amount}
            error={formError.amount ? true : false}
            helperText={formError.amount}
            fullWidth
            label="Cantidad"
            required
            sx={{ mb: 3 }}
            type="number"
          ></TextField>

          <Button
            variant="contained"
            size="large"
            className="buttom-login"
            type="submit"
            sx={{ mb: 2 }}
          >
            Adicionar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddCareers;
