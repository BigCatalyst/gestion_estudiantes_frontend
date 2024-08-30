/* eslint-disable react/prop-types */
import { Button, Container, Grid } from "@mui/material";
import { remove } from "../../services/CareersServices";

const DeleteCareers = ({ setKeyDataGrid, handleCloseDelM, dataDel }) => {
  const handdleOk = (event) => {
    event.preventDefault();

    const res = remove(dataDel.id);
    console.log(res);
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseDelM();
    }
  };
  return (
    <div style={{ maxHeight: 300 }}>
      <Container>
        <Grid display="flex" gap={2} flexDirection="column">
          <p>¿Está seguro que desea eliminar esta fila?</p>
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

export default DeleteCareers;
