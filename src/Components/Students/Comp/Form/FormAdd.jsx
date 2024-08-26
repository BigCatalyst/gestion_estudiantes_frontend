import { useState } from "react";
import styles from "../../Students.module.css"

export function FormAdd({ onSubmit }) {
  const [ci, setId] = useState("");
  const [regNumber, setRegN] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLast] = useState("");
  const [grade, setGrade] = useState(7);
  const [alta, setAlta] = useState(false);
  const [sex, setSex] = useState("M");
  const [address, setaddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ci, regNumber, name, lastName, grade, alta, sex, address})
    }

    return (
        <form className={styles.content} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Agregar Estudiante</h1>                           
          <div className={styles.form} >
            <div className={styles.space}>
          <label className={styles.ci}>CI: 
            <input type="text" name='check' required value={ci}
              onChange={ev => setId(ev.target.value)}
            ></input>  </label> 
             <label className={styles.reg}>No. Reg: 
            <input type="text" name='check' required value={regNumber}
              onChange={ev => setRegN(ev.target.value)}
            ></input> </label>
            </div>
            <div className={styles.space}>      
            <label className={styles.name}>Nombre: 
            <input type="text" name='check' required value={name}
              onChange={ev => setName(ev.target.value)}
            ></input> </label>
            <label className={styles.lastName}>Apellidos: 
            <input type="text" name='check' required value={lastName}
              onChange={ev => setLast(ev.target.value)}
            ></input> </label>
            </div> 
            <div className={styles.space}>
            <label className={styles.labelGrade}>Grado:
              <select className={styles.select} name="select" value={grade}
                onChange={ev => setGrade(ev.target.value)}>
                <option value={7}>7mo</option>
                <option value={8}>8vo</option>
                <option value={9}>9no</option>
              </select>
            </label>
            <label className={styles.labelSex}>Sexo:
              <select className={styles.select} name="select" value={sex}
                onChange={ev => setSex(ev.target.value)}>
                <option >M</option>
                <option >F</option>         
              </select>
            </label>
            <label className={styles.direction}>Direccion:
            <input type="text" name='check' required value={address} className={styles.inputD}
              onChange={ev => setaddress(ev.target.value)}
            ></input>  </label>
            </div>
            <div className={styles.space}>
            <label className={styles.alta}>¿Estudiante de alta?
              <input className={styles.check} type="checkbox" name="tcp" checked={alta}
                onChange={ev => setAlta(ev.target.checked)} />
            </label>
            </div>
          </div>
          <button className={styles.save}  onClick={() => {alert("Guardado")}}>Guardar</button>
        </form>
    )
}