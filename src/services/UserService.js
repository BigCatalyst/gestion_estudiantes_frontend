import axios from "axios";
import { axiosCong } from "../config/env";

let rows = [
  {
    username: "admin",
    password: "admin",
    identificacion: "Admin",
    nombre: "admin",
    email: "admin@gmail.com",
    enabled: true,
    descripcion: "Usuario Administrador",
  },
  {
    username: "admin1",
    password: "admin1",
    identificacion: "Admin1",
    nombre: "admin1",
    email: "admin1@gmail.com",
    enabled: true,
    descripcion: "Usuario Administrador",
  },
];

// export const getAll = async () => rows;
export const getAll = async () => axios.get("/Users/findAll", axiosCong());
export const add = (data) => {
  rows = [...rows, { ...data }];
  //console.log(rows);
  return true;
};
export const update = (data) => {
  console.log(data);
  const updatedRows = rows.map((row) => {
    //console.log(row.username, data.username);
    if (row.username === data.username) {
      return { ...data };
    }
    return { ...row };
  });

  rows = updatedRows;

  return true;
};
export const remove = (username) => {
  const index = rows.findIndex((el) => el.username === username);
  console.log(index);
  let cop = [];
  rows.map((el) => {
    if (el.username != username) return cop.push(el);
  });
  rows = [...cop];
  return true;
};
