let rows = [
  {
    ci: "8932763289",
    acs: 1.0,
    tcp1: 7,
    tcp2: 8,
    finalExam: 2,
    finalNote: 2,
  },
  {
    ci: "8932763276",
    acs: 1.0,
    tcp1: 7,
    tcp2: 8,
    finalExam: 2,
    finalNote: 2,
  },
  {
    ci: "8932763223",
    acs: 1.0,
    tcp1: 7,
    tcp2: 8,
    finalExam: 2,
    finalNote: 2,
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
