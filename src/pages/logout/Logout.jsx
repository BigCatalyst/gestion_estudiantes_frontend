/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("isLogin", "-1");
    navigate("/login", { replace: true });
  }, []);
  return <div>...</div>;
};

export default Logout;
