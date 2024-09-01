/* eslint-disable react/prop-types */
import { Button, Container, Grid } from "@mui/material";
import { remove } from "../../services/NotesServices";

const DeleteNote = ({ setKeyDataGrid, handleCloseDelM, dataDel }) => {
  const handdleOk = async (event) => {
    event.preventDefault();

    const data = {
      studentCi: dataDel.ci,
      subjectId: dataDel.id_asignatura,
    };
    const res = await remove(data);

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

export default DeleteNote;
