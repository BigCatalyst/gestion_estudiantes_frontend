import { useNavigate } from "react-router-dom";

const ValidateRequest = (axiosFunction) => {
  const navigate = useNavigate();
  const requeste = async () => {
    try {
      return await axiosFunction();
    } catch (error) {
      if (error.status === 401 || error.status === 401) {
        navigate("/login", { replace: true });
      }
    }
  };
  return requeste;
};

export default ValidateRequest;
