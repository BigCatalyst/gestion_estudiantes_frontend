import { BiLogOut } from "react-icons/bi";
import {
  FaBook,
  FaBookReader,
  FaChalkboardTeacher,
  FaUserCog,
} from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { MdAppRegistration } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="op">
      <ul>
        <li>
          <Link to="/">
            <PiStudentFill /> Estudiantes
          </Link>
        </li>
        <li>
          <Link to="/7mo">
            <FaChalkboardTeacher /> 7mo
          </Link>
        </li>
        <li>
          <Link to="/8vo">
            <FaChalkboardTeacher /> 8vo
          </Link>
        </li>
        <li>
          <Link to="/9no">
            <FaChalkboardTeacher /> 9no
          </Link>
        </li>
        <li>
          <Link to="/subjects">
            <FaBook /> Asignaturas
          </Link>
        </li>
        <li>
          <Link to="/careers">
            <FaBookReader /> Carreras
          </Link>
        </li>
        <li>
          <Link to="/ladder">
            <GrNotes /> Escalafón
          </Link>
        </li>
        <li>
          <Link to="/altas-bajas">
            <MdAppRegistration /> Altas/Bajas
          </Link>
        </li>
        <li>
          <Link to="/graduates">
            <GiRibbonMedal /> Graduados
          </Link>
        </li>
        <li>
          <Link to="/notas-graduados">
            <GrNotes /> Notas de Graduados
          </Link>
        </li>
        <li>
          <Link to="/boleta">
            <MdAppRegistration /> Boletas
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FaUserCog /> Usuarios
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <BiLogOut /> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
