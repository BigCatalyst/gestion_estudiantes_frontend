/* eslint-disable react/prop-types */

import { Button, Container, TextField,Autocomplete } from "@mui/material";
import { subir_de_grado } from "../../services/StudentsService";
import useFormValidator from "../../validators/FormValidator";
import Alert from "../../components/mui/alert/Alert";
import { useState } from "react";
import { reporteAsignatura } from "../../services/NotesServices";
import { getAll as getAllAsignaturas } from "../../services/SubjectsService";
import { useEffect } from "react";

const ReporteAsignatura = ({
  setKeyDataGrid,
  handleCloseDelM,
  data_entrada,
}) => {
  const [mensageDeError, setMensageDeError] = useState();
  const [mostrarMensajeError, setMostrarMensajeError] = useState();
  const [keyAlert, setKeyAlert] = useState(Date.now());

  const [subjects, setSubjects] = useState();
  const [subjectId, setSubjectID] = useState();

  const [mapAsignaturas, setmapAsignaturas] = useState(new Map());

  const { formData, formError, handdleChangeForm, setFormError } =
    useFormValidator({
      
    });

  const handdleSubmit = async (event) => {
    console.log(mapAsignaturas.get(subjectId))
    await reporteAsignatura(mapAsignaturas.get(subjectId));
    //handleCloseDelM();
  };

  useEffect(() => {
    const getData = async () => {
      

      const resS = await getAllAsignaturas();
      const map = new Map();
      if (resS) {
        console.log(resS);
        const subj = resS.data.map((el) => {
          map.set(el.name, el.id);
          return el.name;
        });
        setmapAsignaturas(map);
        setSubjects(subj);
        setSubjectID(subj[0]);
      }
    };

    getData();
  }, []);

  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        {mostrarMensajeError && (
          <Alert
            key={keyAlert}
            severity="error"
            title="Campos Incorrectos"
            message={mensageDeError}
          />
        )}

        <form onSubmit={handdleSubmit}>
          <Autocomplete
            disablePortal
            options={subjects ? subjects : []}
            onChange={(event, newValue) => {
              setSubjectID(newValue);
            }}
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="Asignatura" />
            )}
          />
          
          <Button
            variant="contained"
            size="large"
            className="buttom-login"
            type="submit"
            sx={{ mb: 2 }}
          >
            Subir de Grado
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ReporteAsignatura;
