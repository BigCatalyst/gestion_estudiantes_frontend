import axios from "axios";

import { axiosCong } from "../config/env";

export const getAll = async (grade = 8) => {
  return axios.get(`Notes/notasestudiantes/${grade}`, axiosCong());
};
export const add = async (data) =>
  axios.post("/Notes/create", data, axiosCong());
export const update = async (data) =>
  axios.put("/Notes/update", data, axiosCong());
export const changepassword = async (data) =>
  axios.put("/Notes/changepassword", data, axiosCong());
export const remove = async (data) =>
  axios.delete(
    `/Notes/delete/${data.studentCi}/${data.subjectId}`,
    axiosCong()
  );
export const findid = async (id) => axios.get(`/Notes/find/${id}`, axiosCong());

// export const reporte = async () => axios.get("/Users/reporte", axiosCong());

export const reporte = async () => {
  try {
    const res = await axios.get("/Notes/reporte", {
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
