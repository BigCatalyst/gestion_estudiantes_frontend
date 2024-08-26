import styles from "./Students.module.css";
import Table from "../General/Table/Table";
import Modal2 from "../General/Modal/Modal2";
import { FormAdd } from "./Comp/Form/FormAdd";
import { FormMod } from "./Comp/Form/FormMod";
import { FormB } from "./Comp/Form/FormB";
import { FormView } from "./Comp/Form/FormView";
import { useState, useEffect } from "react";
import { Data } from "../../Data/Data";
import { DataN } from "../../Data/DataN";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrUpgrade } from "react-icons/gr";
import { FaRegFilePdf } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";  //mod
import { FaRegEye } from "react-icons/fa6";  //view
import { RiDeleteBin5Line } from "react-icons/ri"; //delete
import { MdOutlineFeaturedPlayList } from "react-icons/md"; //boletas
import { getAll, post, delet, update, getAllCareer, getBolet, getNotes} from "./StudentService";

const Students = () =>{  
  const [ci, setCi] = useState("");
  const [regN, setRegN] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLast] = useState("");
  const [grade, setGrade] = useState(7);
  const [alta, setAlta] = useState(false);
  const [sex, setSex] = useState("M");
  const [address, setaddress] = useState("");
  const [modalState, setModalState] = useState("idle")
  const[data, setData] = useState([]);
  const[dataC, setDataC] = useState([]);
  const[dataN, setDataN] = useState([]);
  const[dataB, setDataB] = useState([1,2,3,4,5,6,7,8,9,10]);

  const closeModal = () => setModalState("idle")

  useEffect ( ()=>{   
    getAll().then(setData);   
  },[]);

  const refresh = () =>{
    getAll().then(setData);
    closeModal();
    alert("Registro exitoso");      
  }

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
      header: "Grade",
      accessorKey: 'grade'
    },
    {
      header: "Sexo",
      accessorKey: 'sex'
    },
    {
      header: "Direccion",
      accessorKey: "address"
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
                setGrade(info.row.original.grade)
                setCi(info.row.original.ci)
                setRegN(info.row.original.regNumber)
                setName(info.row.original.name)
                setLast(info.row.original.lastName)
                setSex(info.row.original.sex)
                setaddress(info.row.original.address)
                setAlta(info.row.original.alta)
                // alert("editar fila" + info.row.original.ci)
                setModalState("mod")
              }} > <TfiWrite /> Modificar </button >
              <button className={styles.view} onClick={() => {
                setName(info.row.original.name)
                setLast(info.row.original.lastName) 
                setGrade(info.row.original.grade) 
                getNotes(info.row.original.grade, info.row.original.ci).then(setDataN)                   
                setModalState("view")
              }} > <FaRegEye/> Notas </button >
              <button className={styles.bolet} onClick={() => {
                setName(info.row.original.name)
                setLast(info.row.original.lastName)
                setCi(info.row.original.ci)
                // getBolet(info.row.original.ci).then(setDataB)
                getAllCareer().then(setDataC)                             
                setModalState("bol")
              }} 
              > <MdOutlineFeaturedPlayList/> Boleta </button >
              <button className={styles.delete} onClick={() => { 
                delet(info.row.original.ci).then(refresh);
              }}              
              > <RiDeleteBin5Line /> Eliminar </button >
            </div>
          </div>
        )
      }
    }
  ];

  return (
    <div className={styles.sts}>
      <h1 className={styles.titleM}>Estudiantes
        <button className={styles.btnadd} onClick={() => setModalState("add")}
        ><IoAddCircleOutline fontSize={20} /> Agregar</button>
        <button className={styles.btnup} onClick={() => alert("Seguro que quiere subir de grado a todos los estudiantes")} 
        ><GrUpgrade fontSize={20} /> Subir grado</button>
        <button className={styles.btnpdf} onClick={() => alert("Seguro que quiere descargar el listado de estudiantes en formato PDF ")} 
        ><FaRegFilePdf fontSize={20} /> PDF</button>
      </h1>     
      <Table data={data} columns={columns} />
      <Modal2 isOpen={modalState !== "idle"} onClose={closeModal}>      
             {
               modalState === "add" ? <FormAdd onSubmit={(student) =>{
                post(student).then(refresh);               
               }}/> : (    
               modalState === "mod" ? <FormMod onSubmit={(student) =>{
                update(student).then(refresh);
               }} idS={ci} nameS={name} lastS={lastName} addressS={address} altaS={alta} gradeS={grade} sexS={sex} regNumberS={regN}/> : (
               modalState === "view" ? <FormView onSubmit={(student) =>{               
               }} idS={ci} nameS={name} lastS={lastName} gradeS={grade} DataN={dataN}/>:
                <FormB onSubmit={(DataBolet) =>{
                // console.log(DataBolet);
                // refresh();
               }} idS={ci} nameS={name} lastS={lastName} DataB={dataB} DataC={dataC}/>            
              ))          
             }
      </Modal2>
    </div>
  );
};

export default Students;