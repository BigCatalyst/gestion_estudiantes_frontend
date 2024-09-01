import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Students from "../pages/students/Students";
import Grade7 from "../pages/grades/Grade7";
import Grade8 from "../pages/grades/Grade8";
import Grade9 from "../pages/grades/Grade9";
import Careers from "../pages/careers/Careers";
import Ladder from "../pages/ladder/Ladder";
import Graduate from "../pages/graduate/Graduate";
import AltasBajas from "../pages/altasbajas/AltasBajas";
import Subjects from "../pages/subjects/Subjects";
import Login from "../pages/login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Logout from "../pages/logout/Logout";
import Users from "../pages/users/Users";
import NotasGraduados from "../pages/notasgraduados/NotasGraduados";
import Boleta from "../pages/boleta/Boleta";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Students />} />
          <Route path="7mo" element={<Grade7 />} />
          <Route path="8vo" element={<Grade8 />} />
          <Route path="9no" element={<Grade9 />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="careers" element={<Careers />} />
          <Route path="ladder" element={<Ladder />} />
          <Route path="graduates" element={<Graduate />} />
          <Route path="altas-bajas" element={<AltasBajas />} />
          <Route path="notas-graduados" element={<NotasGraduados />} />
          <Route path="users" element={<Users />} />
          <Route path="logout" element={<Logout />} />
          <Route path="boleta" element={<Boleta />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
