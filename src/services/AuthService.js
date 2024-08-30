import axios from "axios";
import { URL_API } from "../config/env";

export const login = async (data) => {
  return axios.post(`${URL_API}/auth/login`, data);
};

export const logout = () => {
  const data = {
    token: localStorage.getItem("token"),
  };
  return axios.post(`${URL_API}/auth/logout`, data);
};
