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

import { update } from "../../services/StudentsService";
const UpdateStudents = ({ setKeyDataGrid, handleCloseUpdM, dataEdit }) => {
  const { formData, formError, handdleChangeForm } = useFormValidator({
    ci: dataEdit.ci,
    address: dataEdit.address,
    grade: dataEdit.grade,
    last_name: dataEdit.last_name,
    name: dataEdit.name,
    regNumber: dataEdit.regNumber,
    sex: dataEdit.sex,
  });

  const handdleSubmit = (event) => {
    event.preventDefault();
    //llamada a la api ok
    const res = update({ ...formData, ci: dataEdit.ci });
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseUpdM();
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
            disabled
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
            name="last_name"
            onChange={handdleChangeForm}
            value={formData.last_name}
            error={formError.last_name ? true : false}
            helperText={formError.last_name}
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
            Actualizar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default UpdateStudents;
