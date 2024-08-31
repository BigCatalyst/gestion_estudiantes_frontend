/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { add } from "../../services/StudentsService";

const AddStudents = ({ setKeyDataGrid, handleCloseAddM }) => {
  //Hook personalizado para validar los campor del formulario MUI

  const { formData, formError, handdleChangeForm, setFormError } =
    useFormValidator({
      ci: "",
      address: "",
      grade: 7,
      lastName: "",
      name: "",
      regNumber: "",
      sex: "",
    });

  const handdleSubmit = async(event) => {
    event.preventDefault();
    // if (formData.ci.length !== 11) {
    //   setFormError({ ...formError, ci: "EL CI debe ser de 11 caracterres" });
    // }

    if (formData.ci.length !== 11) {
      setFormError({ ...formError, ci: "EL CI debe tener 11 caracteres" });
    }
    if (formData.sex.length > 5) {
      setFormError({ ...formError, sex: "EL Sexo debe tener 5 caracteres" });
    } else {
      console.log(formData);
      const res = await add(formData);
      if (res) {
        setKeyDataGrid(Date.now());
        handleCloseAddM();
      }
    }
  };

  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        <form onSubmit={handdleSubmit}>
          <TextField
            name="ci"
            onChange={handdleChangeForm}
            value={formData.ci}
            error={formError.ci ? true : false}
            helperText={formError.ci}
            fullWidth
            label="CI"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="address"
            onChange={handdleChangeForm}
            value={formData.address}
            error={formError.address ? true : false}
            helperText={formError.address}
            fullWidth
            label="Dirección"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="gradeLabel">Grado</InputLabel>
            <Select
              labelId="gradeLabel"
              id="grade"
              name="grade"
              value={formData.grade}
              label="Grado"
              onChange={handdleChangeForm}
            >
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="lastName"
            onChange={handdleChangeForm}
            value={formData.lastName}
            error={formError.lastName ? true : false}
            helperText={formError.lastName}
            fullWidth
            label="Apellido"
            required
            sx={{ mb: 3 }}
          ></TextField>

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
            type="text"
          ></TextField>
          <TextField
            name="regNumber"
            onChange={handdleChangeForm}
            value={formData.regNumber}
            error={formError.regNumber ? true : false}
            helperText={formError.regNumber}
            fullWidth
            label="Reg Number"
            required
            sx={{ mb: 3 }}
            type="text"
          ></TextField>
          <TextField
            name="sex"
            onChange={handdleChangeForm}
            value={formData.sex}
            error={formError.sex ? true : false}
            helperText={formError.sex}
            fullWidth
            label="Sexo"
            required
            sx={{ mb: 3 }}
            type="text"
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

export default AddStudents;
