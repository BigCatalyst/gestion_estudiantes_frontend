/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  styled,
  Switch,
  TextField,
} from "@mui/material";

import { update } from "../../services/AltasBajasService.js";
import { getAll } from "../../services/StudentsService.js";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useEffect, useState } from "react";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UpdateAltaBajas = ({ setKeyDataGrid, handleCloseUpdM, dataEdit }) => {
  const [students, setStudents] = useState();
  const [ci, setCI] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await getAll();
      if (res) {
        const stud = res.data.map((el) => {
          return el.ci;
        });
        setStudents(stud);
        setCI(stud[0]);
      }
    };

    getData();

    //dataEdit.date && setFecha(dayjs(dataEdit.date));
  }, []);

  const { formData, formError, handdleChangeForm } = useFormValidator({
    baja: dataEdit.baja,
    date: dataEdit.date,
    municipality: dataEdit.municipality,
    province: dataEdit.province,
    school: dataEdit.school,
    ci: dataEdit.ci,
  });

  const [fecha, setFecha] = useState(dayjs());
  const handleChange = (newValue) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha(newValue);
  };

  const handdleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData);
    //llamada a la api ok
    formData.date = fecha.toDate();
    formData.ci = ci;
    console.log(formData);
    const res = update(formData);
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseUpdM();
    }
  };

  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        <form onSubmit={handdleSubmit}>
          <Autocomplete
            disabled
            disablePortal
            options={students ? students : []}
            value={formData.ci}
            onChange={(event, newValue) => {
              setCI(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="CI" />
            )}
          />
          <Grid item xs={6} mb={1} display="flex" justifyItems="flex-end">
            <Item>
              <FormControlLabel
                control={
                  <Switch
                    name="baja"
                    onChange={handdleChangeForm}
                    checked={formData.baja}
                  />
                }
                label="Baja"
              />
            </Item>
          </Grid>
          <Grid item mb={2} width="100%" display="flex" justifyItems="flex-end">
            <Item sx={{ width: "100%" }}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="es"
              >
                <DatePicker
                  name="fecha"
                  label="Fecha"
                  value={fecha}
                  onChange={handleChange}
                  sx={{ ml: -1, width: "103%" }}
                />
              </LocalizationProvider>
            </Item>
          </Grid>
          <TextField
            name="municipality"
            onChange={handdleChangeForm}
            value={formData.municipality}
            error={formError.municipality ? true : false}
            helperText={formError.municipality}
            fullWidth
            label="Municipio"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="province"
            onChange={handdleChangeForm}
            value={formData.province}
            error={formError.province ? true : false}
            helperText={formError.province}
            fullWidth
            label="Provincia"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="school"
            onChange={handdleChangeForm}
            value={formData.school}
            error={formError.school ? true : false}
            helperText={formError.school}
            fullWidth
            label="Escuela"
            required
            sx={{ mb: 3 }}
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

export default UpdateAltaBajas;
