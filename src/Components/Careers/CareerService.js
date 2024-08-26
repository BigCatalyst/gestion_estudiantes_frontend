import axios from "axios";

const baseUrl = "http://localhost:8080/";

export async function getAll(){
   const res = await axios.get(baseUrl + "career")
   return res.data
}

export async function post(career) {
   await axios.post(baseUrl + "career", career)
}

export async function update(career) {
   await axios.post(baseUrl + "career/update", career)
}

export async function delet(id) {
   await axios.delete(baseUrl + "career/delete" + id, id)
}