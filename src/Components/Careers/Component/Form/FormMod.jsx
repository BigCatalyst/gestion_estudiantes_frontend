import { useState } from "react";
import styles from "../../Career.module.css"

export function FormMod({ onSubmit, nameS, cantS }) {
    const [name, setName] = useState(nameS);
    const [amount, setCant] = useState(cantS);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, amount})
    }

    return (
        <form className={styles.content} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Modificar Carrera</h1>                           
          <div className={styles.form}>          
            <label className={styles.labelName}>Nombre: </label>
            <input type="text" name='check' required value={name} className={styles.name}
              onChange={ev => setName(ev.target.value)}
            ></input>
            <label className={styles.tcp}>Cantidad de plasas: 
              <input type="check" name="tcp" checked={amount}
                onChange={ev => setCant(ev.target.value)} />
            </label>
          </div>
          <button className={styles.save}>Guardar</button>
        </form>
    )
}