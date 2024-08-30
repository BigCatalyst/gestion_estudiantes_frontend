/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useFormValidator from "../../validators/FormValidator";
import Alert from "../../components/mui/alert/Alert";
import { login } from "../../services/AuthService";

const Login = () => {
  const [showAlertError, setShowAlertError] = useState(false);
  const [keyAlert, setKeyAlert] = useState(Date.now());

  const navigate = useNavigate();

  //Mostrar/Ocultar texto del Password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Verificar que el usuario está logueado
  useEffect(() => {
    if (localStorage.getItem("isLogin") === "1")
      navigate("/", { replace: true });
  }, []);

  //Hook personalizado para validar los campor del formulario MUI
  const { formData, formError, handdleChangeForm } = useFormValidator({
    username: "",
    password: "",
  });

  const handdleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    //llamada a la api ok

    const request=async () => {
      try {
        const res = await login(formData);
        if (res) {
          console.log(res);
          // localStorage.setItem("isLogin", "1");
          // localStorage.setItem("token", "1");
          // navigate("/", { replace: true });
        }
      } catch (error) {
        console.log(error);
        showAlertError && setShowAlertError(true);
        setKeyAlert(`alert${Date.now()}`);
      }
    };
    request();
  };

  return (
    <div className="login">
      {showAlertError && (
        <Alert
          key={keyAlert}
          title="Error en la Autenticación"
          message="Credenciales incorrectas. Verifique su usuario y su contraseña."
          severity="error"
        />
      )}
      <div className="container">
        <div className="title">
          <img src="imgs/Icon-t.png" alt="" />
          <h1>Login</h1>
        </div>
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
              sx={{ mb: 4 }}
            ></TextField>
            <Button
              variant="contained"
              size="large"
              className="buttom-login"
              type="submit"
              fullWidth
              sx={{ mb: 2 }}
            >
              Iniciar Seción
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
