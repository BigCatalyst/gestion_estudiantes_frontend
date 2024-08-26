import styles from "./Modal.module.css";
import React from "react";
import { MdExitToApp } from "react-icons/md";
const ModalMod = ({titulo, children, estado, cambiarEstado}) => {
    return(
        <>
        {estado &&
        <div className={styles.modal}>
            <div className={styles.formcontrol}>
                <div className={styles.head}>
                <h1>{titulo}</h1>               
                <button className={styles.close}
                onClick={() => cambiarEstado(false)}
                ><MdExitToApp className={styles.icon}/>Cerrar</button>
                </div>
                {children}               
            </div>           
        </div>
    }
    </>
    )
}

export default ModalMod;