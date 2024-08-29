let rows = [
  {
    baja: false,
    date: new Date(Date.now()),
    municipality: "Municipio",
    province: "Provincia",
    school: "Escuela",
    ci: "8934764587",
  },
  {
    baja: false,
    date: new Date(Date.now()),
    municipality: "Municipio1",
    province: "Provincia1",
    school: "Escuela1",
    ci: "8756984578",
  },
];

export const getAll = async () => rows;
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
  const index = rows.findIndex((el) => el.username === ci);
  console.log(index);
  let cop = [];
  rows.map((el) => {
    if (el.ci != ci) return cop.push(el);
  });
  rows = [...cop];
  return true;
};
