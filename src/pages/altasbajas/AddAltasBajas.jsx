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

import { add } from "../../services/AltasBajasService.js";
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

const AddAltasBajas = ({ setKeyDataGrid, handleCloseAddM }) => {
  const [students, setStudents] = useState();
  const [ci, setCI] = useState();

  useEffect(() => {
    const getData = async () => {
      // const res = (await getAll()).map((item) => {
      //   return item.ci;
      // });
      // setTimeout(() => {
      //   setStudents(res);
      //   setCI(res[0]);
      // }, 1000);
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
  }, []);

  const { formData, formError, handdleChangeForm } = useFormValidator({
    baja: false,
    date: Date.now(),
    municipality: "",
    province: "",
    school: "",
    ci: "",
  });

  const [fecha, setFecha] = useState(dayjs());
  const handleChange = (newValue) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha(newValue);
  };

  const handdleSubmit = async (event) => {
    event.preventDefault();
    //console.log(formData);
    //llamada a la api ok
    formData.date = fecha.toDate();
    formData.ci = ci;
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
          <Autocomplete
            disablePortal
            options={students ? students : []}
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
                  label="Fechade creación del formulario"
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

export default AddAltasBajas;
