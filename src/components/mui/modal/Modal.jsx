/* eslint-disable react/prop-types */
import { Box, Modal } from "@mui/material";

const ModalMUI = ({ open, handleClose, children }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>{children}</div>
      </Box>
    </Modal>
  );
};

export default ModalMUI;
