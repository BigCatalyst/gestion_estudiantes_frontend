/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControlLabel,
  getAlertUtilityClass,
  Grid,
  styled,
  Switch,
  TextField,
} from "@mui/material";

import { add } from "../../services/AltasBajasService.js";
import { getAll } from "../../services/StudentsService.js";
import { getAll as getAllCarreras } from "../../services/CareersServices.js";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


import { useEffect, useState } from "react";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddBoleta = ({ setKeyDataGrid, handleCloseAddM }) => {
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

      const res2 = await getAllCarreras();
      if (res2) {
        const carreraRes = res2.data.map((el) => {
          return el.name;
        });
        setcarreras(carreraRes);
        if(carreraRes){
          setcarrera1(carreraRes[0]);
          setcarrera2(carreraRes[0]);
          setcarrera3(carreraRes[0]);
          setcarrera4(carreraRes[0]);
          setcarrera5(carreraRes[0]);
          setcarrera6(carreraRes[0]);
          setcarrera7(carreraRes[0]);
          setcarrera8(carreraRes[0]);
          setcarrera9(carreraRes[0]);
          setcarrera10(carreraRes[0]);
        }
      }

    };

    getData();
  }, []);

  const [carreras, setcarreras] = useState();
  const [carrera1, setcarrera1] = useState();
  const [carrera2, setcarrera2] = useState();
  const [carrera3, setcarrera3] = useState();
  const [carrera4, setcarrera4] = useState();
  const [carrera5, setcarrera5] = useState();
  const [carrera6, setcarrera6] = useState();
  const [carrera7, setcarrera7] = useState();
  const [carrera8, setcarrera8] = useState();
  const [carrera9, setcarrera9] = useState();
  const [carrera10, setcarrera10] = useState();


 

  const { formData, formError, handdleChangeForm } = useFormValidator({
    ci: "",
    carrera1: "",
    
  });

  const handdleSubmit = (event) => {
    event.preventDefault();
    

    formData.carrera1 = carrera1;
    formData.ci = ci;
    const res = add(formData);
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


          <Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera1(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 1" />
            )}
          />

<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera2(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 2" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera3(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 3" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera4(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 4" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera5(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 5" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera6(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 6" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera7(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 7" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera8(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 8" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera9(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 9" />
            )}
          />


<Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera10(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Opción 10" />
            )}
          />


          
          
          
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

export default AddBoleta;
