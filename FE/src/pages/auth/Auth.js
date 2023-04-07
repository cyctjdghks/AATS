import { Route, Routes } from "react-router-dom";

import Login from "./login/Login";
import SignUp from "./signup/SignUp";

import classes from "./auth.module.css";

const Auth = () => {
  return (
    <div className={classes.authBox}>
      <Routes>
        <Route path="login/*" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Auth;
