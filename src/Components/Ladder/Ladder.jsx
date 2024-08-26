import styles from "./Ladder.module.css";
import Table from "../General/Table/Table";
// import Modal from "./Comp/Modal/Modal";
import { useState, useEffect } from "react";
import { DataN } from "../../Data/DataN";
import { FaListOl } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

const Ladder = () =>{  
  const [estadoModalMod, cambiarEstadoModalMod] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [notef, setNotef] = useState("---");

  //  useEffect(() =>{
  //   if(!estadoModalMod){ Clean()}
  //   }, [estadoModalMod]
  //  )

  //  function CreateNote(){
  //   post(columns.info.row.original)
  //  }

  const columns = [
    {
      header: "No.",
      accessorKey: 'no'
     },
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
      header: "Nota Final",
      accessorKey: "notef"
     },
  ];

  return (
    <div className={styles.sts}>
      <button className={styles.subject} onClick={() => alert("Crear Escalafon")} 
      ><FaListOl/> Crear Escalafon             
      </button>
      <h1>Escalafon     
        <button className={styles.btnpdf} onClick={() => alert("Seguro que quiere descargar el Escalafon en formato PDF ")} 
        ><FaRegFilePdf fontSize={20} /> PDF</button>
      </h1>
      <Table data={DataN} columns={columns} />
      {/* <Modal titulo={"Agregar Estudiante"} estado={estadoModalAdd} cambiarEstado={cambiarEstadoModalAdd}>
        <form className={styles.content} onSubmit={ev => {
          ev.preventDefault();
          console.log({ name, grade, tcp2 })          
        }}>                 
          <button className={styles.save}  onClick={() => {cambiarEstadoModalAdd(false); alert("Guardado")}}>Guardar</button>
        </form>
      </Modal> */}
    </div>
  );
};

export default Ladder;