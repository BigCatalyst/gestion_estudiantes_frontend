import axios from "axios";
import { axiosCong, URL_API } from "../config/env";

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

// export const getAll = async () => rows;
export const getAll = async () => {
  {
    // rows;
    return axios.get(URL_API + "/Subjects/findAll", axiosCong());
  }
};
export const add = (data) => {
  let id = rows[rows.length - 1].id + 1;
  rows = [...rows, { ...data, id }];
  //console.log(rows);
  return true;
};
export const update = (data) => {
  console.log(data);
  const updatedRows = rows.map((row) => {
    //console.log(row.username, data.username);
    if (row.id === data.id) {
      return { ...data };
    }
    return { ...row };
  });

  rows = updatedRows;

  return true;
};
export const remove = (id) => {
  let cop = [];
  rows.map((el) => {
    if (el.id != id) return cop.push(el);
  });
  rows = [...cop];
  return true;
};
