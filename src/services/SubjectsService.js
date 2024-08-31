import axios from "axios";

import { axiosCong } from "../config/env";

let rows = [
  {
    id: 1,
    grade: 7,
    name: "Matemática",
    tcp2: true,
  },
  {
    id: 2,
    grade: 7,
    name: "Historia",
    tcp2: false,
  },
  {
    id: 3,
    grade: 7,
    name: "Física",
    tcp2: true,
  },
  {
    id: 4,
    grade: 8,
    name: "Matemática",
    tcp2: true,
  },
  {
    id: 5,
    grade: 8,
    name: "Historia",
    tcp2: false,
  },
  {
    id: 6,
    grade: 8,
    name: "Física",
    tcp2: true,
  },
  {
    id: 7,
    grade: 9,
    name: "Matemática",
    tcp2: true,
  },
  {
    id: 8,
    grade: 9,
    name: "Historia",
    tcp2: false,
  },
  {
    id: 9,
    grade: 9,
    name: "Física",
    tcp2: true,
  },
];

export const getAll = async () => axios.get("/Subjects/findAll", axiosCong());
export const add = async (data) =>
  axios.post("/Subjects/create", data, axiosCong());
export const update = async (data) =>
  axios.put("/Subjects/update", data, axiosCong());
export const changepassword = async (data) =>
  axios.put("/Subjects/changepassword", data, axiosCong());
export const remove = async (id) =>
  axios.delete(`/Subjects/changepassword/${id}`, axiosCong());
export const findid = async (id) =>
  axios.get(`/Subjects/find/${id}`, axiosCong());

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
