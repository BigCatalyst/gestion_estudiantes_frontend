import styles from "./Modal.module.css";
import { MdExitToApp } from "react-icons/md";

const Modal= ({titulo, children, estado, cambiarEstado}) => {
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

export default Modal;