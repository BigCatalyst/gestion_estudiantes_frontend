import styles from "./Career.module.css";
import Table from "../General/Table/Table";
import Modal from "../General/Modal/Modal2";
import { FormAdd } from "./Component/Form/FormAdd";
import { FormMod } from "./Component/Form/FormMod";
import { DataS } from "../../Data/DataS";
import { IoAddCircleOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { getAll, post, update, delet } from "./CareerService";

const Career = () => {
  const [name, setName] = useState("");
  const [amount, setCant] = useState(0);
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState("idle")

  const closeModal = () => setModalState("idle")   

  useEffect ( ()=>{   
    getAll().then(setData);
  },[]);

  const refresh = () =>{
    getAll().then(setData);
    closeModal();  
    alert("Registro exitoso");    
  }

  const refreshdel = () =>{
    getAll().then(setData);  
  }

  const columns = [
    {
      header: "Nombre",
      accessorKey: 'name'
    },
    {
      header: "Cantidad de Plazas",
      accessorKey: 'amount'
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
                setCant(info.row.original.amount)
                setName(info.row.original.name)
                setModalState("mod")
              }} > <TfiWrite /> Modificar </button>
              <button className={styles.delete} onClick={() => {
                delet(info.row.original.id).then(refreshdel)       
              }} > <RiDeleteBin5Line /> Eliminar </button >
            </div>
          </div>
        )
      }
    }
  ];

  return (
    <div className={styles.sts}>
      <h1 className={styles.titleM}>Carreras
        <button className={styles.btnadd} onClick={() => setModalState("add")}
        ><IoAddCircleOutline fontSize={20} /> Agregar</button>
      </h1>
      <Table data={data} columns={columns} />
      <Modal isOpen={modalState !== "idle"} onClose={closeModal}>
        {
            modalState === "add" ? <FormAdd onSubmit={(career) =>{
              post(career).then(refresh);           
             }}/> :  <FormMod onSubmit={(career) =>{
              update(career).then(refresh);
             }} nameS = {name} cantS = {amount}/>
          }
      </Modal>
    </div>
  );

};

export default Career;