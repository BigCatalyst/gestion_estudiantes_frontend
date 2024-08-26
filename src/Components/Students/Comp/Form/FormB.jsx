import { useState, useEffect } from "react";
import styles from "../../Students.module.css"
import {getBolet} from "../../StudentService";


export function FormB({ onSubmit,idS, nameS, lastS, DataB, DataC}) {

  const [data, setData] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);
  const [option3, setOption3] = useState(0);
  const [option4, setOption4] = useState(0);
  const [option5, setOption5] = useState(0);
  const [option6, setOption6] = useState(0);
  const [option7, setOption7] = useState(0);
  const [option8, setOption8] = useState(0);
  const [option9, setOption9] = useState(0);
  const [option10, setOption10] = useState(0);

  useEffect ( ()=>{   
    getBolet(idS).then(setDataB)  
      console.log(dataB)
  },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(option1)
        onSubmit({DataBolet})       
    }


    const DataBolet = [
      {id:{student_ci: idS, career_id: option1}, index: 1},
      {id:{student_ci: idS, career_id: option2}, index: 2},
      {id:{student_ci: idS, career_id: option3}, index: 3},
      {id:{student_ci: idS, career_id: option4}, index: 4},
      {id:{student_ci: idS, career_id: option5}, index: 5},
      {id:{student_ci: idS, career_id: option6}, index: 6},
      {id:{student_ci: idS, career_id: option7}, index: 7},
      {id:{student_ci: idS, career_id: option8}, index: 8},
      {id:{student_ci: idS, career_id: option9}, index: 9},
      {id:{student_ci: idS, career_id: option10}, index: 10}
    ]

    return (
        <form className={styles.content} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Boleta</h1>                           
          <div className={styles.formB}>       
          <div className={styles.start}>    
          <label className={styles.nameB}>Nombre: {nameS} {lastS} </label>                 
            <label className={styles.optionC}>Opcion #1:
              <select className={styles.select} name="select" value={option1}
                onChange={ev => setOption1(ev.target.value)}>
                 <option value={-1}>---</option>
                 {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>
            <label className={styles.optionC}>Opcion #2:
              <select className={styles.select} name="select" value={option2}
                onChange={ev => setOption2(ev.target.value)}>
                   <option value={-1}>---</option>
                {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>     
            <label className={styles.optionC}>Opcion #3:
              <select className={styles.select} name="select" value={option3}
                onChange={ev => setOption3(ev.target.value)}>
                   <option value={-1}>---</option>
                {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>     
            <label className={styles.optionC}>Opcion #4:
              <select className={styles.select} name="select" value={option4}
                onChange={ev => setOption4(ev.target.value)}>
                   <option value={-1}>---</option>
                {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>     
            <label className={styles.optionC}>Opcion #5:
              <select className={styles.select} name="select" value={option5}
                onChange={ev => setOption5(ev.target.value)}>
                   <option value={-1}>---</option>
                {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>
            </div>
            <div className={styles.end}>    
            <label className={styles.optionC}>Opcion #6:
              <select className={styles.select} name="select" value={option6}
                onChange={ev => setOption6(ev.target.value)}>
                   <option value={-1}>---</option>
               {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>     
            <label className={styles.optionC}>Opcion #7:
              <select className={styles.select} name="select" value={option7}
                onChange={ev => setOption7(ev.target.value)}>
                   <option value={-1}>---</option>
                {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>     
            <label className={styles.optionC}>Opcion #8:
              <select className={styles.select} name="select" value={option8}
                onChange={ev => setOption8(ev.target.value)}>
                   <option value={-1}>---</option>
               {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>     
            <label className={styles.optionC}>Opcion #9:
              <select className={styles.select} name="select" value={option9}
                onChange={ev => setOption9(ev.target.value)}>
                   <option value={-1}>---</option>
                {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label>     
            <label className={styles.optionC}>Opcion #10:
              <select className={styles.select} name="select" value={option10}
                onChange={ev => setOption10(ev.target.value)}>
                   <option value={-1}>---</option>
                {DataC.map(carrer => <option
                    key = {carrer.id} value = {carrer.name}>{carrer.name}
                    </option>
                  )} 
              </select>
            </label> 
            </div>                 
          </div>
          <button className={styles.save}>Guardar</button>
        </form>
    )
}