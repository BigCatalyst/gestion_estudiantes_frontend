/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import { Autocomplete, Button, Container, TextField } from "@mui/material";

import { add } from "../../services/NotesServices";
import { useEffect, useState } from "react";
import { getAll,getAllByGrade } from "../../services/StudentsService";
import { getAllByGrade as getAllAsignaturas } from "../../services/SubjectsService";
import Alert from "../../components/mui/alert/Alert";

const AddNote = ({ setKeyDataGrid, handleCloseAddM,grade }) => {
  const [students, setStudents] = useState();
  const [studentCi, setCI] = useState();

  const [subjects, setSubjects] = useState();
  const [subjectId, setSubjectID] = useState();

  const [mapAsignaturas, setmapAsignaturas] = useState(new Map());

  const [showAlert, setShowAlert] = useState(false);
  const [keyAlert, setKeyAlert] = useState(Date.now());

  useEffect(() => {
    const getData = async () => {
      const res = await getAllByGrade(grade);//getAll();
      if (res) {
        const stud = res.data.map((el) => {
          return el.ci;
        });
        setStudents(stud);
        setCI(stud[0]);
      }

      const resS = await getAllAsignaturas(grade);
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

  const { formData, formError, handdleChangeForm } = useFormValidator({
    // studentCi: "",
    // subjectId: "",
    acs: "",
    tcp1: "",
    tcp2: "",
    finalExam: "",
    finalNote: "",
  });

  const handdleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      notesPK: {
        studentCi,
        subjectId: mapAsignaturas.get(subjectId),
      },
      ...formData,
    };

    try {
      const res = await add(data);
      if (res) {
        setKeyDataGrid(Date.now());
        handleCloseAddM();
      }
    } catch (error) {
      if (error.status === 400) {
        setShowAlert(true);
        setKeyAlert(Date.now());
      }
    }
  };

  return (
    <div
      style={{
        maxHeight: 500,
        overflowY: "auto",
        paddingTop: "7px",
        maxWidth: 600,
      }}
    >
      <Container>
        {showAlert && (
          <Alert
            key={keyAlert}
            title="Error"
            message="Esta Nota ya existe"
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
            sx={{ width: "100%", mb: 2 }}
            renderInput={(params) => (
              <TextField required fullWidth {...params} label="CI" />
            )}
          />

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

          <TextField
            name="acs"
            onChange={handdleChangeForm}
            value={formData.acs}
            error={
              formError.acs || formData.acs > 20 || formData.acs < 0
                ? true
                : false
            }
            helperText={
              formError.acs
                ? formError.acs
                : formData.acs > 20 || formData.acs < 0
                ? "El campo Acs debe ser mayor que cero y menor que 10"
                : ""
            }
            fullWidth
            label="Acs"
            required
            sx={{ mb: 3 }}
            type="number"
          ></TextField>
          <TextField
            name="tcp1"
            onChange={handdleChangeForm}
            value={formData.tcp1}
            error={
              formError.tcp1 || formData.tcp1 > 30 || formData.tcp1 < 0
                ? true
                : false
            }
            helperText={
              formError.tcp1
                ? formError.tcp1
                : formData.tcp1 > 30 || formData.tcp1 < 0
                ? "El campo Acs debe ser mayor que cero y menor que 30"
                : ""
            }
            fullWidth
            label="Tcp1"
            required
            sx={{ mb: 3 }}
            type="number"
          ></TextField>
          <TextField
            name="tcp2"
            onChange={handdleChangeForm}
            value={formData.tcp2}
            error={
              formError.tcp2 || formData.tcp2 > 30 || formData.tcp2 < 0
                ? true
                : false
            }
            helperText={
              formError.tcp2
                ? formError.tcp2
                : formData.tcp2 > 30 || formData.tcp2 < 0
                ? "El campo Acs debe ser mayor que cero y menor que 30"
                : ""
            }
            fullWidth
            label="Tcp2"
            required
            sx={{ mb: 3 }}
            type="number"
          ></TextField>
          <TextField
            name="finalExam"
            onChange={handdleChangeForm}
            value={formData.finalExam}
            error={
              formError.finalExam ||
              formData.finalExam > 50 ||
              formData.finalExam < 0
                ? true
                : false
            }
            helperText={
              formError.finalExam
                ? formError.finalExam
                : formData.finalExam > 50 || formData.exmane_final < 0
                ? "El campo Acs debe ser mayor que cero y menor que 50"
                : ""
            }
            fullWidth
            label="Examen Final"
            required
            sx={{ mb: 3 }}
            type="number"
          ></TextField>
          <TextField
            name="finalNote"
            onChange={handdleChangeForm}
            value={formData.finalNote}
            error={formError.finalNote ? true : false}
            helperText={formError.finalNote}
            fullWidth
            label="Nota Final"
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

export default AddNote;
