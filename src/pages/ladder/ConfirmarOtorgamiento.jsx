import { Button, Container, Grid } from "@mui/material";
import { realizarotorgamiento } from "../../services/StudentsService";

// eslint-disable-next-line react/prop-types
const ConfirmarOtorgamiento = ({ handleCloseOtorgM }) => {
  const handdleOk = async (event) => {
    event.preventDefault();

    await realizarotorgamiento();

    handleCloseOtorgM();
  };
  return (
    <div style={{ maxHeight: 300 }}>
      <Container>
        <Grid display="flex" gap={2} flexDirection="column">
          <p>¿Está seguro que desea realizar el otorgamiento?</p>
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
              onClick={handleCloseOtorgM}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ConfirmarOtorgamiento;
