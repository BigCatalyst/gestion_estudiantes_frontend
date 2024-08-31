import axios from "axios";

import { axiosCong } from "../config/env";

export const getAll = async () => axios.get("/Subjects/findAll", axiosCong());

export const findid = async (id) =>
  axios.get(`/Subjects/find/${id}`, axiosCong());

export const add = async (data) =>
  axios.post("/Subjects/create", data, axiosCong());
export const update = async (data) =>
  axios.put("/Subjects/update", data, axiosCong());

export const remove = async (id) =>
  axios.delete(`/Subjects/delete/${id}`, axiosCong());

// export const reporte = async () => axios.get("/Users/reporte", axiosCong());

export const reporte = async () => {
  try {
    const res = await axios.get("/Subjects/reporte", {
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
