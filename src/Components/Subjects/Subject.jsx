import styles from "./Subject.module.css";
import Table from "../General/Table/Table";
import Modal2 from "../General/Modal/Modal2"
import { FormAdd } from "./Comp/Form/FormAdd";
import { FormMod } from "./Comp/Form/FormMod";
import { DataS } from "../../Data/DataS";
import { IoAddCircleOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState, useEffect} from "react";
import { getAll, post, delet, update } from "./SubjectService";

const Subject = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(7);
  const [tcp2, setTcp2] = useState(false);
  const[data, setData] = useState([]);
  const [modalState, setModalState] = useState("idle")

  const closeModal = () => setModalState("idle")   

     useEffect ( ()=>{   
        getAll().then(setData);
      },[]);

      const refresh = () =>{
        getAll().then(setData);
        closeModal();      
      }

      

  //  function CreateSubject(){
  //   post(columns.info.row.original)
  //  }

  const columns = [
      // {
      //  header: "ID",
      //  accessorKey: 'id'
      // },
    {
      header: "Nombre",
      accessorKey: 'name'
    },
    {
      header: "Grade",
      accessorKey: 'grade'
    },
    {
      header: "Tcp2",
      accessorKey: 'tcp2'
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
                setGrade(info.row.original.grade)
                setName(info.row.original.name)
                setTcp2(info.row.original.tcp2)
                // alert("editar fila" + info.row.original.id)
                setModalState("mod")
              }} > <TfiWrite /> Modificar </button >
              <button className={styles.delete} onClick={() => {                     
                delet(info.row.original.id).then(refresh) 
              }}> <RiDeleteBin5Line /> Eliminar </button >
            </div>
          </div>        
        )
      }
    }
  ];

  return (
    <div className={styles.sts}>
      <h1 className={styles.titleS}>Asignaturas
        <button className={styles.btnadd} onClick={() => setModalState("add")}
        ><IoAddCircleOutline fontSize={20} /> Agregar</button>
      </h1>
      <Table data={data} columns={columns} />
      <Modal2 isOpen={modalState !== "idle"} onClose={closeModal} >       
          {
            modalState === "add" ? <FormAdd onSubmit={(subject) =>{
              post(subject).then(refresh);                         
             }}/> :  <FormMod onSubmit={(subject) =>{
              console.log(subject)
              update(subject).then(refresh);
             }} nameS = {name} gradeS = {grade} tcp2S = {tcp2} id={id} />
          }
      </Modal2>
    </div>
     
  );

};

export default Subject;