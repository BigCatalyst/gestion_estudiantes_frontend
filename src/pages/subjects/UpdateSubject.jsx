/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Switch,
  TextField,
} from "@mui/material";

import { update } from "../../services/SubjectsService";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UpdateSubject = ({ setKeyDataGrid, handleCloseUpdM, dataEdit }) => {
  const { formData, formError, handdleChangeForm } = useFormValidator({
    grade: dataEdit.grade,
    name: dataEdit.name,
    tcp2: dataEdit.tcp2,
  });

  const handdleSubmit = async (event) => {
    event.preventDefault();
    //console.log(formData);
    //llamada a la api ok
    formData.id = dataEdit.id;
    const res = await update(formData);
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseUpdM();
    }
  };
  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        <form onSubmit={handdleSubmit}>
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

          <Grid item xs={6} mb={1} display="flex" justifyItems="flex-end">
            <Item>
              <FormControlLabel
                control={
                  <Switch
                    name="tcp2"
                    onChange={handdleChangeForm}
                    checked={formData.tcp2}
                  />
                }
                label="TCP 2"
              />
            </Item>
          </Grid>

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

export default UpdateSubject;
