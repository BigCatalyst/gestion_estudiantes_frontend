import { useState } from "react";
import styles from "../../Grades.module.css"

export function FormNote({ onSubmit, nameS, lastS, asS, tcp1S, tcp2S, finalS, notefS }) {
  const [name, setName] = useState(nameS);
  const [last, setLast] = useState(lastS);
  const [subject, setSubject] = useState("subject");
  const [as, setAs] = useState(asS);
  const [tcp1, setTcp1] = useState(tcp1S);
  const [tcp2, setTcp2] = useState(tcp2S);
  const [final, setfinal] = useState(finalS);
  const [notef, setNotef] = useState(notefS);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, last, subject, as, tcp1, tcp2, final, notef})
    }

    return (
        <form className={styles.content} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Registro de Notas del Estudiante</h1>                           
          <div className={styles.form}>
            <div className={styles.start}>
           <label className={styles.nameView}><b>Estudiante: </b>{name} {last}</label>          
           <label className={styles.sub}><b>Asignatua:</b> {subject}</label>
           </div>
          <label className={styles.as}>AS: </label>
            <input type="text" name='check' required value={as}
              onChange={ev => setAs(ev.target.value)}
            ></input>          
            <label>TCP 1: </label>
            <input type="text" name='check' required value={tcp1}
              onChange={ev => setTcp1(ev.target.value)}
            ></input>
            <label>TCP 2: </label>
            <input type="text" name='check' required value={tcp2}
              onChange={ev => setTcp2(ev.target.value)}
            ></input>
            <div className={styles.end}>                              
            <label >Examen Final: </label>
            <input type="text" name='check' required value={final}
              onChange={ev => setfinal(ev.target.value)}
            ></input>
            <label >Nota Final: <a>{notef}</a></label>
            </div>      
          </div>  
          <button className={styles.save}  onClick={() => {alert("Guardado")}}>Guardar</button>
        </form>
    )
}