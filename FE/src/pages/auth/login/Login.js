import { Route, Routes } from "react-router-dom";

import Type from "./type/Type";
import Organization from "./organization/Organization";
import User from "./user/User";
import Worker from "./worker/Worker";

const Login = () => {
  return (
    <Routes>
      <Route path="/" element={<Type />} />
      <Route path="organization" element={<Organization />} />
      <Route path="user" element={<User />} />
      <Route path="worker" element={<Worker />} />
    </Routes>
  );
};

export default Login;
