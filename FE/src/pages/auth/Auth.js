import { Route, Routes } from "react-router-dom";

import Login from "./login/Login";
import SignUp from "./signup/SignUp";

import classes from "./auth.module.css";

const Auth = () => {
  return (
    <div className={classes.authBox}>
      <div className={classes.authItems}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
