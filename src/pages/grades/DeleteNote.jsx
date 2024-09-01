import { Button, Container, Grid } from "@mui/material";
import { remove } from "../../services/NotagraduadoService";

const DeleteNote = () => {
  const handdleOk = async ({ setKeyDataGrid, handleCloseDelM, dataDel }) => {
    event.preventDefault();

    const res = await remove(dataDel.ci);

    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseDelM();
    }
  };
  return <div></div>;
};

export default DeleteNote;
