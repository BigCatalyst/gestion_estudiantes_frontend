import { useState } from "react";
import Table from "../../../General/Table/Table";
import styles from "../../Students.module.css";
import { GoGear } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";

export function FormView({ onSubmit, DataN, idS, nameS, lastS}) {

  console.log(DataN)

  const [id, setId] = useState(idS);
  const [name, setName] = useState(nameS);
  const [last, setLast] = useState(lastS);
  const [grade, setGrade] = useState(7);
  const[gradeView, setGradeView] = useState(grade);
  const [as, setAs] = useState("---");
  const [tcp1, setTcp1] = useState("---");
  const [tcp2, setTcp2] = useState("---");
  const [final, setfinal] = useState("---");
  const [notef, setNotef] = useState("---");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({id, name, last, grade})
    }

    const columnsView = [
        {
          header: "Asignatura",
          accessorKey: 'name'
        },
        {
          header: "AS",
          accessorKey: 'as'
        },
        {
          header: "Tcp 1",
          accessorKey: 'tcp1'
        },
        {
          header: "Tcp 2",
          accessorKey: "tcp2"
         },
         {
          header: "Examen Final",
          accessorKey: "finalExam"
         },
         {
          header: "Nota Final",
          accessorKey: "finalNote"
         },
        {
          header: "Acciones",
          accessorKey: "action",
          cell: info => {
            return (
              <div className={styles.actionT}>
                <button className={styles.action}>
                  <span ><GoGear className={styles.icon} fontSize={35} /></span>
                </button>
                <div className={styles.option}>
                  <button className={styles.modV} onClick={() => {      
                    setName(info.row.original.name)
                    setAs(info.row.original.as)
                    setTcp1(info.row.original.tcp1)
                    setTcp2(info.row.original.alta)
                    setfinal(info.row.original.final)
                    setNotef(info.row.original.notef)
                    // alert("editar fila" + info.row.original.id)
                   // a
                  }} > <TfiWrite /> Modificar </button >       
                </div>
              </div>
            )
          }
        }
      ];

    return (
        <form className={styles.content} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Registro de Notas</h1>                           
          <div className={styles.formV}>
           <label className={styles.nameView}><b>Estudiante: </b>{name} {last}</label>          
           <label><b>Grado:</b> {grade}</label>
           <label className={styles.gradeView}>Grado a visualizar:
              <select className={styles.select} name="select2" value={gradeView}
                onChange={ev => setGradeView(ev.target.value)}
                >
                <option value={7}>7mo</option>
                <option value={8}>8vo</option>
                <option value={9}>9no</option>
              </select>
            </label>       
            <Table data={DataN} columns={columnsView}/>  
            </div>                
        </form>
    )
}