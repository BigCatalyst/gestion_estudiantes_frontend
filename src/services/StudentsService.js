import axiosT from "./AxiosConfig";

let rows = [
  {
    ci: "8932763289",
    address: "direccion",
    grade: 7,
    lastName: "apellido",
    name: "nombre1",
    regNumber: "asd",
    sex: "hombre",
  },
  {
    ci: "8932763276",
    address: "direccion",
    grade: 8,
    lastName: "apellido",
    name: "nombre2",
    regNumber: "asd",
    sex: "hombre",
  },
  {
    ci: "8932763223",
    address: "direccion",
    grade: 9,
    lastName: "apellido",
    name: "nombre3",
    regNumber: "asd",
    sex: "hombre",
  },
];

export const getAll = async () => {
  // rows;
  return axiosT.get("/Students/findAll");
};
export const add = (data) => {
  rows = [...rows, { ...data }];
  //console.log(rows);
  return true;
};
export const update = (data) => {
  console.log(data);
  const updatedRows = rows.map((row) => {
    //console.log(row.username, data.username);
    if (row.ci === data.ci) {
      return { ...data };
    }
    return { ...row };
  });

  rows = updatedRows;

  return true;
};
export const remove = (ci) => {
  let cop = [];
  rows.map((el) => {
    if (el.ci != ci) return cop.push(el);
  });
  rows = [...cop];
  return true;
};

export const reportRequest = async () =>
  axiosT.get(`/Notes/reporte`, {
    responseType: "blob",
  });
