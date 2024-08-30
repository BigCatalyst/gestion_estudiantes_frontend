let rows = [
  {
    ci: "8932763289",
    
    subject: "1",
    acs: 1.0,
    tcp1: 7,
    tcp2: 8,
    finalExam: 2,
    finalNote: 2,
  },
  {
    ci: "8932763276",
    subject: "2",
    acs: 1.0,
    tcp1: 7,
    tcp2: 8,
    finalExam: 2,
    finalNote: 2,
  },
  {
    ci: "8932763223",
    subject: "3",
    acs: 1.0,
    tcp1: 7,
    tcp2: 8,
    finalExam: 2,
    finalNote: 2,
  },
];

import { getAll as getAllStudents } from "./StudentsService";

export const getAll = async (grade = 7) => {
  const students = await getAllStudents();
  const res = [];
  if (students) {
    rows.map((el) => {
      const index = students.findIndex(
        (stud) => el.ci === stud.ci && stud.grade === grade
      );

      if (index >= 0) {
        console.log(index);
        res.push({
          ...el,
          name: students[index].name,
          last_name: students[index].last_name,
        });
      }
    });
  }
  console.log(res);
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
