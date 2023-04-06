import { Routes, Route } from "react-router-dom";
// component
import Welcome from "./welcome/Welcome";
import Search from "./search/Search";
import Detail from "./detail/Detail";
// import css style
import classes from "./Admin.module.css";

const Admin = () => {
  return (
    <div className={classes.admin}>
      <Routes>
        <Route path="" element={<Welcome />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
