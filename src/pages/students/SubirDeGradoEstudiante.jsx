/* eslint-disable react/prop-types */

import { Button, Container, TextField } from "@mui/material";
import { subir_de_grado } from "../../services/StudentsService";
import useFormValidator from "../../validators/FormValidator";
import Alert from "../../components/mui/alert/Alert";
import { useState } from "react";

const SubirDeGradoEstudiante = ({
  setKeyDataGrid,
  handleCloseDelM,
  data_entrada,
}) => {
  const [mensageDeError, setMensageDeError] = useState();
  const [mostrarMensajeError, setMostrarMensajeError] = useState();
  const [keyAlert, setKeyAlert] = useState(Date.now());

  const { formData, formError, handdleChangeForm, setFormError } =
    useFormValidator({
      carrera: "",
      Nodematricula: 1,
      notaescalafon:0,
      noescalafon:0
    });

  const handdleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    try {
      const res = await subir_de_grado({
        carrera: formData.carrera,
        Nodematricula: formData.Nodematricula,
        ci: data_entrada.ci,
      });
      if (res) {
        setKeyDataGrid(Date.now());
        handleCloseDelM();
      }
    } catch (errors) {
      if (errors.status == 400) {
        setKeyAlert(Date.now());
        console.log(errors.response.data["error"]);
        setMensageDeError(errors.response.data["error"]);
        setMostrarMensajeError(true);
      }
    }
  };

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
          <TextField
            name="carrera"
            onChange={handdleChangeForm}
            value={formData.carrera}
            error={formError.carrera ? true : false}
            helperText={formError.carrera}
            fullWidth
            label="Carrera"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="Nodematricula"
            onChange={handdleChangeForm}
            value={formData.Nodematricula}
            error={formError.Nodematricula ? true : false}
            helperText={formError.Nodematricula}
            fullWidth
            label="No. Matricula"
            required
            sx={{ mb: 3 }}
          ></TextField>


          <TextField
            name="notaescalafon"
            onChange={handdleChangeForm}
            value={formData.notaescalafon}
            error={
              formError.notaescalafon || formData.notaescalafon > 30 || formData.notaescalafon < 0
                ? true
                : false
            }
            helperText={
              formError.notaescalafon
                ? formError.notaescalafon
                : formData.notaescalafon > 100 || formData.notaescalafon < 0
                ? "El promedio tiene que ser un numero menor o igual a 100"
                : ""
            }
            fullWidth
            label="Promedio"
            required
            sx={{ mb: 3 }}
            type="number"
          ></TextField>

          <TextField
            name="noescalafon"
            onChange={handdleChangeForm}
            value={formData.noescalafon}
            error={formError.noescalafon ? true : false}
            helperText={formError.noescalafon}
            fullWidth
            label="No. Escalafon"
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
            Subir de Grado
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SubirDeGradoEstudiante;
