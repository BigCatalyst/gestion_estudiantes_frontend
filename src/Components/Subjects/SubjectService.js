import axios from "axios";

const baseUrl = "http://localhost:8080/";

export async function getAll(){
   const res = await axios.get(baseUrl + "subject")
   return res.data
}

export async function post(subject) {
   await axios.post(baseUrl + "subject", subject)
}

export async function update(subject) {
   console.log(subject + " js")
   await axios.post(baseUrl + "subject/update", subject)
}

export async function delet(id) {
   await axios.delete(baseUrl + "subject/delete" + id, id)
}