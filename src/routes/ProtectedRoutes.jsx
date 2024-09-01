/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const [isLogin, setIsLogin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin"));
  }, []);

  useEffect(() => {
    //Define las condiciones para desloguear al usuario
    if (isLogin === "-1") navigate("/login", { replace: true });
  }, [isLogin]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
