/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import { Box, Divider, IconButton, Modal } from "@mui/material";

const ModalMUI = ({ open, handleClose, title, children }) => {
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
        {title && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "21px",
            }}
          >
            <h3
              style={{
                marginBottom: "5px",
              }}
            >
              {title}
            </h3>
            <Divider sx={{ width: "80%" }} />
          </div>
        )}
        <div>{children}</div>
        {!(title + "").includes("Eliminar") && (
          <IconButton
            style={{ position: "absolute", top: "7px", right: "7px" }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        )}
      </Box>
    </Modal>
  );
};

export default ModalMUI;
