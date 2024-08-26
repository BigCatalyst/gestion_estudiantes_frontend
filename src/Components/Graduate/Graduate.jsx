import styles from "./Graduate.module.css";
import Modal2 from "../General/Modal/Modal2"
import { useState } from "react";
import {FaRegFilePdf} from "react-icons/fa6";
import Table from "../General/Table/Table";
import { Data } from "../../Data/Data";

const Graduate = () =>{
  const [anno, setAnno] = useState("");

  const columns = [
    {
     header: "CI",
     accessorKey: 'ci'
    },
    {
     header: "No. Registro",
     accessorKey: 'regNumber'
   },
   {
     header: "Nombre",
     accessorKey: 'name'
   },
   {
     header: "Apellidos",
     accessorKey: "lastName"
    },
   {
     header: "Carrera",
     accessorKey: 'career'
   },
   {
     header: "Sexo",
     accessorKey: 'sex'
   },
   {
     header: "Direccion",
     accessorKey: "address"
    }
  ];

    return(    
       <div className={styles.sts}>
        <h1>Graduados  Año:
        <select className={styles.select} name="select" value={anno}
                onChange={ev => setAnno(ev.target.value)}>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
              </select>         
        <button className={styles.btnpdf} onClick={() => alert("Seguro que quiere descargar el listado de estudiantes en formato PDF ")} 
        ><FaRegFilePdf fontSize={20} /> PDF</button>
        </h1>    
      <Table data={Data} columns={columns} />      
     </div> 
    );
   };
   
   export default Graduate;