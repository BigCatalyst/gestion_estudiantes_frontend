import { useState } from "react";
import styles from "../../Subject.module.css"

export function FormAdd({ onSubmit }) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState(7);
    const [tcp2, setTcp2] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, grade, tcp2})
    }

    return (
        <form className={styles.content} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Agregar Asignatura</h1>         
            <div className={styles.form}>          
              <label>Nombre: 
              <input type="text" name='check' required value={name}
                onChange={ev => setName(ev.target.value)}
              ></input>             
              </label>            
              <label className={styles.tcp}>¿Tiene Tcp2?
                <input className={styles.check} type="checkbox" name="tcp" checked={tcp2}
                  onChange={ev => setTcp2(ev.target.checked)} />
              </label>
              </div>
              <div className={styles.form2}>
              <label className={styles.labelGrade}>Grado:
                <select className={styles.select} name="select" value={grade}
                  onChange={ev => setGrade(ev.target.value)}>
                  <option value={7}>7mo</option>
                  <option value={8}>8vo</option>
                  <option value={9}>9no</option>
                  {/* {carrers.map(carrer => <option
                    key = {createRenderer.id} value = {createRenderer.id}>{createRenderer.id}
                    </option>
                  )} */}
                </select>
              </label>
            </div>
            <button className={styles.save}  onClick={() => {alert("Guardado")}}>Guardar</button>
          </form>
    )
}