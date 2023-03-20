import { Route, Routes } from "react-router-dom";

import Type from "./type/Type";
import User from "./user/User";
import Worker from "./worker/Worker";

import classes from "./Regist.module.css";

const Regist = () => {
  return (
    <div className={classes.typeBox}>
      <div className={classes.typeItems}>
        <Routes>
          <Route path="/" element={<Type/>}/>
          <Route path="user" element={<User />} />
          <Route path="worker" element={<Worker />} />
        </Routes>
      </div>
    </div>
  );
};

export default Regist;
