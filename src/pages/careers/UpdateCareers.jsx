/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import {
  Button,
  Container,
  TextField,
} from "@mui/material";

import { update } from "../../services/CareersServices";

const UpdateCareers = ({ setKeyDataGrid, handleCloseUpdM, dataEdit }) => {
  const { formData, formError, handdleChangeForm } = useFormValidator({
    amount: dataEdit.amount,
    name: dataEdit.name,
  });

  const handdleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData);
    //llamada a la api ok
    formData.id = dataEdit.id;
    const res = update(formData);
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseUpdM();
    }
  };

  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        <form onSubmit={handdleSubmit}>
          <TextField
            name="name"
            onChange={handdleChangeForm}
            value={formData.name}
            error={formError.name ? true : false}
            helperText={formError.name}
            fullWidth
            label="Nombre"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="amount"
            onChange={handdleChangeForm}
            value={formData.amount}
            error={formError.amount ? true : false}
            helperText={formError.amount}
            fullWidth
            label="Cantidad"
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

export default UpdateCareers;
