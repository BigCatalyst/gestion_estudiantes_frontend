/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/AuthService";

const Logout = () => {
  const [res, setRes] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setRes(0);
  }, []);

  useEffect(() => {
    const logoutRequest = async () => {
      try {
        const res = await logout();
        if (res) {
          localStorage.setItem("isLogin", -1);
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (res === 0) logoutRequest();
  }, [res]);

  return <div>...</div>;
};

export default Logout;
