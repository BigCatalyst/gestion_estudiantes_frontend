/* eslint-disable react/prop-types */
import { Button, Container, Grid } from "@mui/material";
import { remove, subir_de_grado_all } from "../../services/StudentsService";

const SubirDeGradoAll = ({ setKeyDataGrid, handleCloseDelM }) => {
  const handdleOk = async (event) => {
    event.preventDefault();

    const res = await subir_de_grado_all();

    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseDelM();
    }
  };
  return (
    <div style={{ maxHeight: 300 }}>
      <Container>
        <Grid display="flex" gap={2} flexDirection="column">
          <p>¿Estas seguro que desea de subir de grado a todos los estudiantes?</p>
          <Grid display="flex" gap={2} justifyContent="right" mt={2}>
            <Button
              variant="contained"
              size="large"
              className="buttom-login"
              sx={{ mb: 2 }}
              onClick={(e) => handdleOk(e)}
            >
              Ok
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

export default SubirDeGradoAll;
