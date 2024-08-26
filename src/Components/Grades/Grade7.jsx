import styles from "./Grades.module.css";
import Table from "../General/Table/Table";
import Modal2 from "../General/Modal/Modal2";
import { FormNote } from "./Comp/Form/FormNote";
import { useState, useEffect } from "react";
import { DataN } from "../../Data/DataN";
import { FaRegFilePdf } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";  //mod

const Grade7 = () =>{  
  const [estadoModalMod, cambiarEstadoModalMod] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [as, setAs] = useState("---");
  const [tcp1, setTcp1] = useState("---");
  const [tcp2, setTcp2] = useState("---");
  const [final, setfinal] = useState("---");
  const [notef, setNotef] = useState("---");
  const[subjects, setSubjects] = useState([]);
  const[subject, setSubject] = useState("");
  const [modalState, setModalState] = useState("idle");

  const closeModal = () => setModalState("idle")

  //  useEffect(() =>{
  //   if(!estadoModalMod){ Clean()}
  //   }, [estadoModalMod]
  //  )

  //  function CreateNote(){
  //   post(columns.info.row.original)
  //  }

  const columns = [
     {
      header: "CI",
      accessorKey: 'id'
     },
    {
      header: "Nombre",
      accessorKey: 'name'
    },
    {
      header: "Apellidos",
      accessorKey: "last"
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
      accessorKey: "final"
     },
     {
      header: "Nota Final",
      accessorKey: "notef"
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
              <button className={styles.mod} onClick={() => {      
                setId(info.row.original.id)
                setName(info.row.original.name)
                setLast(info.row.original.last)
                setAs(info.row.original.as)
                setTcp1(info.row.original.tcp1)
                setTcp2(info.row.original.tcp2)
                setfinal(info.row.original.final)
                setNotef(info.row.original.notef)                
                setModalState("add");               
              }} > <TfiWrite /> Modificar </button >       
            </div>
          </div>
        )
      }
    }
  ];

  return (
    <div className={styles.sts}>
      <label className={styles.subject}>Asignatura:
              <select className={styles.select} name="select" value={subject}
                onChange={ev => setSubject(ev.target.value)}>
                <option value={7}>Fisica</option>
                <option value={8}>Matematica</option>
                <option value={9}>Historia</option>
              </select>
            </label>
      <h1 className={styles.title}>7mo Grado      
        <button className={styles.btnpdf} onClick={() => alert("Seguro que quiere descargar el listado de estudiantes en formato PDF ")} 
        ><FaRegFilePdf fontSize={20} /> PDF</button>
      </h1>
      <Table data={DataN} columns={columns}/>
      <Modal2 isOpen={modalState !== "idle"} onClose={closeModal}>         
           <FormNote onSubmit={(note) =>{
                console.log(note);
                alert("Registro exitoso");
               }} idS={id} nameS={name} lastS={last} asS={as} finalS={final} notefS={notef} tcp1S={tcp1} tcp2S={tcp2}/> 
      </Modal2>
    </div>
  );
};

export default Grade7;