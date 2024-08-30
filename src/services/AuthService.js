import axios from "axios";
import { URL_API } from "../config/env";

export const login = async (data) => {
    return axios.post(`${URL_API}/login`, data);
};

export const logout = () => {};
