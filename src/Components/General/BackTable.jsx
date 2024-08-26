import styles from "./BackTable.module.css";

const BackTable = ({name}) =>{
 return(
    <div className={styles.fondo}>     
      <h1>{name}</h1>                   
  </div> 
 );
};

export default BackTable;