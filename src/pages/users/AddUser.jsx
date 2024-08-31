/* eslint-disable react/prop-types */
import useFormValidator from "../../validators/FormValidator";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  styled,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { add } from "../../services/UserService";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddUser = ({ setKeyDataGrid, handleCloseAddM }) => {
  //Mostrar/Ocultar texto del Password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //Hook personalizado para validar los campor del formulario MUI
  const { formData, formError, handdleChangeForm } = useFormValidator({
    username: "",
    identificacion: "",
    nombre: "",
    email: "",
    password: "",
    enabled: false,
    descripcion: "",
  });

  const handdleSubmit = async (event) => {
    event.preventDefault();
    //console.log(formData);
    //llamada a la api ok
    const res = await add(formData);
    if (res) {
      setKeyDataGrid(Date.now());
      handleCloseAddM();
    }
  };
  return (
    <div style={{ maxHeight: 500, overflowY: "auto", paddingTop: "7px" }}>
      <Container>
        <form onSubmit={handdleSubmit}>
          <TextField
            name="username"
            onChange={handdleChangeForm}
            value={formData.username}
            error={formError.username ? true : false}
            helperText={formError.username}
            fullWidth
            label="Usuario"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="password"
            onChange={handdleChangeForm}
            value={formData.password}
            error={formError.password ? true : false}
            helperText={formError.password}
            fullWidth
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ marginRight: 1 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="identificacion"
            onChange={handdleChangeForm}
            value={formData.identificacion}
            error={formError.identificacion ? true : false}
            helperText={formError.identificacion}
            fullWidth
            label="Identificacion"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="nombre"
            onChange={handdleChangeForm}
            value={formData.nombre}
            error={formError.nombre ? true : false}
            helperText={formError.nombre}
            fullWidth
            label="Nombre"
            required
            sx={{ mb: 3 }}
          ></TextField>
          <TextField
            name="email"
            onChange={handdleChangeForm}
            value={formData.email}
            error={formError.email ? true : false}
            helperText={formError.email}
            fullWidth
            label="Email"
            required
            sx={{ mb: 3 }}
            type="email"
          ></TextField>

          <Grid item xs={6} mb={1} display="flex" justifyItems="flex-end">
            <Item>
              <FormControlLabel
                control={
                  <Switch
                    name="enabled"
                    onChange={handdleChangeForm}
                    checked={formData.enabled}
                  />
                }
                label="Habilitar Usuario"
              />
            </Item>
          </Grid>

          <TextField
            name="descripcion"
            onChange={handdleChangeForm}
            value={formData.descripcion}
            error={formError.descripcion ? true : false}
            helperText={formError.descripcion}
            fullWidth
            label="Descripcion"
            required
            sx={{ mb: 3 }}
            type="text"
          ></TextField>
          <Button
            variant="contained"
            size="large"
            className="buttom-login"
            type="submit"
            sx={{ mb: 2 }}
          >
            Adicionar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddUser;
