import axios from "axios";

const baseUrl = "http://localhost:8080/";

export async function getAll(){
   const res = await axios.get(baseUrl + "notes")
   return res.data
}

export async function post(notes) {
   await axios.post(baseUrl + "notes", notes)
}