import axios from "axios";


import { axiosCong } from "../config/env";




export const getAll = async () => axios.get("/Careers/findAll", axiosCong());
export const add = async (data) => axios.post("/Careers/create",data, axiosCong());
export const update = async (data) => axios.put("/Careers/update",data, axiosCong());
export const remove =  async (id) => axios.delete(`/Careers/delete/${id}`, axiosCong());
export const reporte =  async () =>{
  try{
    const res=await axios.get(
      "/Careers/reporte", 
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
}
