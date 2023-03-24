import { Routes, Route } from "react-router-dom";
import Cctv from "./cctv/Cctv";
import Check from "./check/Check";
import DashBoard from "./dashboard/DashBoard";
import SideBar from "../../components/sidebar/SideBar"
// import css style
import classes from "./Admin.module.css"

const Admin = () => {
  return (
    <div className={classes.admin}>
      <h1>Admin</h1>
      <Routes>
        <Route path="" element={<DashBoard/>}></Route>
        <Route path="/check" element={<Check/>}></Route>
        <Route path="/cctv" element={<Cctv/>}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
