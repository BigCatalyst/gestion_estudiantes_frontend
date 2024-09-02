/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Autocomplete, Button, Container, TextField } from "@mui/material";

import { getAll } from "../../services/StudentsService.js";
import { getAll as getAllCarreras } from "../../services/CareersServices.js";

import { useEffect, useState } from "react";
import Alert from "../../components/mui/alert/Alert.jsx";
import { ubdateboletastr } from "../../services/EstudianteCarreraService.js";

const UpdateBoletas = ({ setKeyDataGrid, handleCloseUpdM, dataEdit }) => {
  const [students, setStudents] = useState();
  const [ci, setCI] = useState();

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

  const [showAlert, setShowAlert] = useState(false);
  const [keyAlert, setKeyAlert] = useState(Date.now());

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
      }
    };

    getData();
  }, []);

  const handdleSubmit = async (event) => {
    event.preventDefault();
    let a = [
      carrera1,
      carrera2,
      carrera3,
      carrera4,
      carrera5,
      carrera6,
      carrera7,
      carrera8,
      carrera9,
      carrera10,
    ];

    for (let index = 0; index < a.length; index++) {
      const element = a[index];
      if (element === undefined) a[index] = dataEdit.carreras[index];
    }

    let b = [];
    for (let index = 0; index < a.length; index++) {
      const element = a[index];
      if (b.find((el) => el === element)) {
        setShowAlert(true);
        setKeyAlert(Date.now());
        console.log(element);
        return;
      } else {
        b.push(element);
      }
    }
    const data = {
      ci,
      carreras: [...a],
    };
    console.log(data);
    const res = await ubdateboletastr(JSON.stringify(data));
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseUpdM();
    }
  };

  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        {showAlert && (
          <Alert
            key={keyAlert}
            title="Error"
            message="Las Carreras seleccionadas no pueden repetirse"
            severity="error"
          />
        )}
        <form onSubmit={handdleSubmit}>
          <Autocomplete
            disablePortal
            options={students ? students : []}
            onChange={(event, newValue) => {
              setCI(newValue);
            }}
            value={dataEdit.ci}
            inputValue={dataEdit.ci}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="CI" />
            )}
            disabled
          />

          <Autocomplete
            disablePortal
            options={carreras ? carreras : []}
            onChange={(event, newValue) => {
              setcarrera1(newValue);
            }}
            defaultValue={dataEdit.carreras[0]}
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
            defaultValue={dataEdit.carreras[1]}
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
            defaultValue={dataEdit.carreras[2]}
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
            defaultValue={dataEdit.carreras[3]}
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
            defaultValue={dataEdit.carreras[4]}
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
            defaultValue={dataEdit.carreras[5]}
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
            defaultValue={dataEdit.carreras[6]}
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
            defaultValue={dataEdit.carreras[7]}
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
            defaultValue={dataEdit.carreras[8]}
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
            defaultValue={dataEdit.carreras[9]}
          />

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

export default UpdateBoletas;
