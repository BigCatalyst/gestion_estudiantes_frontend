import axios from "axios";
import { axiosCong } from "../config/env";

let rows = [
  {
    username: "admin",
    password: "admin",
    identificacion: "Admin",
    nombre: "admin",
    email: "admin@gmail.com",
    enabled: true,
    descripcion: "Usuario Administrador",
  },
  {
    username: "admin1",
    password: "admin1",
    identificacion: "Admin1",
    nombre: "admin1",
    email: "admin1@gmail.com",
    enabled: true,
    descripcion: "Usuario Administrador",
  },
];

// export const getAll = async () => rows;
export const getAll = async () => axios.get("/Users/findAll", axiosCong());
export const add = async (data) =>
  axios.post("/Users/create", data, axiosCong());
export const update = async (data) =>
  axios.put("/Users/update", data, axiosCong());
export const changepassword = async (data) =>
  axios.put("/Users/changepassword", data, axiosCong());
export const remove = async (id) =>
  axios.delete(`/Users/delete/${id}`, axiosCong());
export const findid = async (id) => axios.get(`/Users/find/${id}`, axiosCong());

// export const reporte = async () => axios.get("/Users/reporte", axiosCong());

export const reporte = async () => {
  try {
    const res = await axios.get("/Users/reporte", {
      responseType: "blob",
      ...axiosCong(),
    });

    if (res.status == 200) {
      console.log("respuesta");
      console.log(res);
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "reporte.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.log("no fue 200" + res.status);
    }
  } catch (error) {
    console.log(error);
  }
};
