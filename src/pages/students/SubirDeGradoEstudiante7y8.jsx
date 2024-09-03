/* eslint-disable react/prop-types */
import { Button, Container, Grid } from "@mui/material";
import { subir_de_grado_7_8 } from "../../services/StudentsService";

const SubirDeGradoEstudiante7y8 = ({ setKeyDataGrid, handleCloseDelM, data }) => {
  const handdleOk = async (event) => {
    event.preventDefault();

    const res = await subir_de_grado_7_8(data.ci);

    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseDelM();
    }
  };
  return (
    <div style={{ maxHeight: 300 }}>
      <Container>
        <Grid display="flex" gap={2} flexDirection="column">
          <p>¿Está seguro que desea Subir de Grado este estudiante?</p>
          <Grid display="flex" gap={2} justifyContent="right" mt={2}>
            <Button
              variant="contained"
              size="large"
              className="buttom-login"
              sx={{ mb: 2 }}
              onClick={(e) => handdleOk(e)}
            >
              Si
            </Button>
            <Button
              variant="contained"
              size="large"
              className="buttom-login"
              type="submit"
              sx={{ mb: 2 }}
              onClick={handleCloseDelM}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SubirDeGradoEstudiante7y8;
