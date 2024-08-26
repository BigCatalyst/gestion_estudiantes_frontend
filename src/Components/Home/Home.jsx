import React from "react";
import styles from "./Home.module.css";
import Students from "../Students/Students";
import Grade7 from "../Grades/Grade7";
import Grade8 from "../Grades/Grade8";
import Grade9 from "../Grades/Grade9";
import Ladder from "../Ladder/Ladder";
import Subject from "../Subjects/Subject";
import Careers from "../Careers/Career";
import Graduate from "../Graduate/Graduate";
import AltasBajas from "../AltasBajas/AltasBajas";
// import LoginForm from "../LoginForm/LoginForm";
import { FaSchool } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { GiRibbonMedal } from "react-icons/gi";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { MdAppRegistration } from "react-icons/md";
// import { BiLogOut } from "react-icons/bi";

function Navigation() {
  return <nav className={styles.op}>
    <ul className={styles.ul}>
      <li>
        <Link to="/"><PiStudentFill /> Estudiantes</Link>
      </li>
      <li>
        <Link to="/7mo"><FaChalkboardTeacher /> 7mo</Link>
      </li>
      <li>
        <Link to="/8vo"><FaChalkboardTeacher /> 8vo</Link>
      </li>
      <li>
        <Link to="/9no"><FaChalkboardTeacher /> 9no</Link>
      </li>
      <li>
        <Link to="/subjects"><FaBook /> Asignaturas</Link>
      </li>
      <li>
        <Link to="/careers"><FaBookReader /> Carreras</Link>
      </li>
      <li>
        <Link to="/ladder"><GrNotes /> Escalafon</Link>
      </li>
      <li>
        <Link to="/graduates"><GiRibbonMedal /> Graduados</Link>
      </li>
      <li>
        <Link to="/altas-bajas"><MdAppRegistration /> Altas/Bajas</Link>
      </li>
    </ul>
  </nav>
}
function Layout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.menu}>
        <FaSchool className={styles.icon}/>       
        <h1>ESBU</h1>
        <Navigation />
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Students />} />
          <Route path="7mo" element={<Grade7 />} />
          <Route path="8vo" element={<Grade8 />} />
          <Route path="9no" element={<Grade9 />} />
          <Route path="subjects" element={<Subject />} />
          <Route path="careers" element={<Careers />} />
          <Route path="ladder" element={<Ladder />} />
          <Route path="graduates" element={<Graduate />} />
          <Route path="altas-bajas" element={<AltasBajas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
// const Home = () => {
//   return (
//     <div className={styles.menu}>
//       <header>
//         <h1>ESBU <FaSchool /></h1>
//         <b>______________</b>
//       </header>
//       <BrowserRouter>
//           <Navigation />
//           <Routes>
//             <Route path="/" element={<Students />} />
//             <Route path="/7mo" element={<Grades />} />
//             <Route path="/8vo" element={<Grades />} />
//             <Route path="/9no" element={<Grades />} />
//             <Route path="/subjects" element={<Subject />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/ladder" element={<Ladder />} />
//             <Route path="/graduates" element={<Graduate />} />
//             <Route path="/altas-bajas" element={<AltasBajas />} />
//             <Route path="/logout" element={<LoginForm />} />
//           </Routes>
//         </BrowserRouter>
//     </div>
//   );
// };

//export default Home;