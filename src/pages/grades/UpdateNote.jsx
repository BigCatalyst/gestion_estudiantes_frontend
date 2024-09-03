/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import { Button, Container, TextField } from "@mui/material";

import { update } from "../../services/NotesServices";
import { useState } from "react";
import { useEffect } from "react";
import { findid } from "../../services/SubjectsService";



const UpdateNote = ({ setKeyDataGrid, handleCloseUpdM, dataEdit }) => {
  
const [disabletcp2, setDisabletcp2] = useState(false)

  useEffect(() => {
    const request = async()=>{
      try {
        const res = await findid(dataEdit.id_asignatura);

console.log(res.data.tcp2 === null ,res.data.tcp2 === false)
        if(res && (res.data.tcp2 === null || res.data.tcp2 === false) ) setDisabletcp2(true)
      } catch (error) {
    console.log(error)
        setDisabletcp2(false)
      }
    }

    request()
  
   
  }, [])
  
  
  
  const { formData, formError, handdleChangeForm } = useFormValidator({
    //  studentCi: dataEdit.studentCi,
    //  subjectId: dataEdit.subjectId,
    acs: dataEdit.as,
    tcp1: dataEdit.tcp1,
    tcp2: dataEdit.tcp2,
    finalExam: dataEdit.exmane_final,
    finalNote: dataEdit.nota_final,
  });

  const handdleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      notesPK: {
        studentCi: dataEdit.ci,
        subjectId: dataEdit.id_asignatura,
      },
      ...formData,
    };

    const res = await update(data);
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseUpdM();
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
        <form onSubmit={handdleSubmit}>
          <TextField
            name="ci"
            value={dataEdit.ci}
            fullWidth
            label="CI"
            required
            sx={{ mb: 3 }}
            disabled
          ></TextField>

          <TextField
            name="subjectId"
            value={dataEdit.asignatura}
            fullWidth
            label="ID Asignatura"
            required
            sx={{ mb: 3 }}
            disabled
          ></TextField>

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
                ? "El campo Acs debe ser mayor que cero y menor que 20"
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
            disabled={disabletcp2}
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
            Actualizar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default UpdateNote;
