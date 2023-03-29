import { Route, Routes } from "react-router-dom";

import Type from "./type/Type";
import User from "./user/User";
import Worker from "./worker/Worker";

const Regist = () => {
  return (
    <Routes>
      <Route path="/" element={<Type />} />
      <Route path="user" element={<User />} />
      <Route path="worker" element={<Worker />} />
    </Routes>
  );
};

export default Regist;
