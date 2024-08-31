let rows = [
  {
    apellidos: "Cardew",
    grado: "7",
    asignatura: "Física",
    as: "null",
    id_asignatura: "2",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "7",
    asignatura: "Química",
    as: "null",
    id_asignatura: "3",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "7",
    asignatura: "Historia",
    as: "null",
    id_asignatura: "5",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "8",
    asignatura: "Física",
    as: "null",
    id_asignatura: "2",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "8",
    asignatura: "Química",
    as: "null",
    id_asignatura: "3",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "8",
    asignatura: "Historia",
    as: "null",
    id_asignatura: "5",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "9",
    asignatura: "Física",
    as: "null",
    id_asignatura: "2",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "9",
    asignatura: "Química",
    as: "null",
    id_asignatura: "3",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
  {
    apellidos: "Cardew",
    grado: "9",
    asignatura: "Historia",
    as: "null",
    id_asignatura: "5",
    ci: "456789123",
    tcp1: "null",
    tcp2: "null",
    exmane_final: "null",
    nombre: "Wynn",
    nota_final: "null",
  },
];

export const getAll = async (grade = 8) => {
  const res = [];
  rows.map((item) => {
    if (item.grado === grade + "") res.push({ ...item });
  });
  return res;
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
    if (row.ci === data.ci && row.subject === data.subject) {
      return { ...data };
    }
    return { ...row };
  });

  rows = updatedRows;

  return true;
};
export const remove = (data) => {
  let cop = [];
  rows.map((el) => {
    if (el.ci != data.ci && el.subject != data.subject) return cop.push(el);
  });
  rows = [...cop];
  return true;
};
