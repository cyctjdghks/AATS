import { Routes, Route } from "react-router-dom";
import Cctv from "./cctv/Cctv";
import Search from "./search/Search";
import Detail from "./Detail";
// import css style
import classes from "./Admin.module.css";

const Admin = () => {
  return (
    <div className={classes.admin}>
      <Routes>
        <Route path="" element={<Search />}></Route>
        <Route path="/cctv" element={<Cctv />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
