import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

const Modal= ({children, isOpen, onClose}) => {

    if(!isOpen){
        return <></>
    }

    return(           
        <div className={styles.backdrop}>
            <div className={styles.modal2}>               
                <button className={styles.closeBtn}
                onClick={onClose}><IoClose className={styles.icon}/></button>              
                {children}               
            </div>           
        </div>   
    )
}

export default Modal;