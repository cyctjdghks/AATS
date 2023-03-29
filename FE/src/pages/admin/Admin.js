import { Routes, Route } from "react-router-dom";
import Cctv from "./cctv/Cctv";
import DashBoard from "./search/Search";
// import css style
import classes from "./Admin.module.css";

const Admin = () => {
  return (
    <div className={classes.admin}>
      <Routes>
        <Route path="" element={<DashBoard />}></Route>
        <Route path="/cctv" element={<Cctv />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
