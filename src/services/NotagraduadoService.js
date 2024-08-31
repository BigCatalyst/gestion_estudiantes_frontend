import axios from "axios";

import { axiosCong } from "../config/env";




export const getAll = async () => axios.get("/Notagraduado/findAll", axiosCong());
export const add =  async (data) => axios.post("/Notagraduado/create",data, axiosCong());
export const update = async (data) => axios.put("/Notagraduado/update",data, axiosCong());
export const changepassword = async (data) => axios.put("/Notagraduado/changepassword",data, axiosCong());
export const remove =  async (id) => axios.delete(`/Notagraduado/changepassword/${id}`, axiosCong());
export const findid =  async (id) => axios.get(`/Notagraduado/find/${id}`, axiosCong());

// export const reporte = async () => axios.get("/Users/reporte", axiosCong());

export const reporte =  async () =>{
  try{
    const res=await axios.get(
      "/Notagraduado/reporte", 
    {
      responseType: "blob",
      ...axiosCong()
    });
  
    if (res.status==200) {
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
    }else{
      console.log("no fue 200"+res.status);

    }

  }catch(error){
    console.log(error);
  }
  

};
