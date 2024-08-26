import axios from "axios";

const baseUrl = "http://localhost:8080/";

export async function getAll(){
   const res = await axios.get(baseUrl + "students")
   return res.data
}

export async function post(student) {
   console.log(student)
   await axios.post(baseUrl + "students", student)
}

export async function update(student) {
   await axios.post(baseUrl + "students/update", student)
}

export async function delet(ci) {
   await axios.delete(baseUrl + "students/delete" + ci, ci)
}

export async function getAllCareer(){
   const res = await axios.get(baseUrl + "career")
   return res.data
}

export async function getBolet(ci){
   const res = await axios.get(baseUrl + "career/bolet" + ci)
   console.log(res.data)
   return res.data
}

export async function updateBolet(bolet) {
   await axios.post(baseUrl + "career/bolet", bolet)
}

export async function getNotes(grade, ci){
   const res = await axios.get(baseUrl + "notes/student:" + ci + "/grade:" + grade)
   return res.data
}