import { useState } from "react";
import styles from "../../Career.module.css"

export function FormAdd({ onSubmit }) {
    const [name, setName] = useState("");
    const [amount, setamount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, amount})
    }

    return (
        <form className={styles.content} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Agregar Carrera</h1>                           
          <div className={styles.form}>          
            <label className={styles.labelName}>Nombre: 
            <input type="text" name='check' required value={name} className={styles.name}
              onChange={ev => setName(ev.target.value)}
            ></input>
            </label>
            <label className={styles.tcp}>Cantidad de plasas: 
              <input type="check" name="tcp" checked={amount}
                onChange={ev => setamount(ev.target.value)} />
            </label>
          </div>
          <button className={styles.save}>Guardar</button>
        </form>
    )
}