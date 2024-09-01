import axios from "axios";

import { axiosCong } from "../config/env";

export const getAll = async () => axios.get("/Students/findAll", axiosCong());
export const getAllByGrade = async (grade = 7) =>
  axios.get(`/Students/findAll/${grade}`, axiosCong());
export const add = async (data) =>
  axios.post("/Students/create", data, axiosCong());
export const update = async (data) =>
  axios.put("/Students/update", data, axiosCong());
export const remove = async (id) =>
  axios.delete(`/Students/delete/${id}`, axiosCong());

export const subir_de_grado = async (data) =>
  axios.post("/Students/subirdegrado", data, axiosCong());
export const reportRequest = async () => {
  try {
    const res = await axios.get(`/Students/reporte`, {
      responseType: "blob",
      ...axiosCong(),
    });
    if (res) {
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
    }
  } catch (error) {
    console.log(error);
  }
};

export const reporte_escalafon = async () => {
  try {
    const res = await axios.get(`/Students/reporte/escalafon`, {
      responseType: "blob",
      ...axiosCong(),
    });
    if (res) {
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
    }
  } catch (error) {
    console.log(error);
  }
};
