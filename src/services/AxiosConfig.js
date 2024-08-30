import axios from "axios";
import { URL_API } from "../config/env";

const axiosT = axios.create({
  baseURL: URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosT;
