import axios from "axios";
import { axiosCong } from "../config/env";

let rows = [
  {
    baja: false,
    date: new Date(Date.now()),
    municipality: "Municipio",
    province: "Provincia",
    school: "Escuela",
    ci: "8932763289",
  },
  {
    baja: false,
    date: new Date(Date.now()),
    municipality: "Municipio1",
    province: "Provincia1",
    school: "Escuela1",
    ci: "8932763276",
  },
];

export const getAll = async () => axios.get("/AltasBajas/findAll", axiosCong());
export const add = async (data) =>
  axios.post("/AltasBajas/create", data, axiosCong());
export const update = async (data) =>
  axios.put("/AltasBajas/update", data, axiosCong());
export const remove = async (id) =>
  axios.delete(`/AltasBajas/delete/${id}`, axiosCong());
export const findid = async (id) =>
  axios.get(`/AltasBajas/find/${id}`, axiosCong());

// export const reporte = async () => axios.get("/Users/reporte", axiosCong());

export const reporte = async () => {
  try {
    const res = await axios.get("/AltasBajas/reporte", {
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

export const reportemensual = async (year, mes) => {
  try {
    const res = await axios.get(`/AltasBajas/reporte/pormes/${year}/${mes}`, {
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
