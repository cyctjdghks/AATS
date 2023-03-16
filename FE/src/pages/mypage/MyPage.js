import SideBar from "../../components/sidebar/SideBar";
import MyInfo from "./myinfo/MyInfo";
import { Routes, Route } from "react-router-dom";

import classes from "./MyPage.module.css";
import Contact from "./contact/ContactMain";

const MyPage = () => {
  return (
    <div className={classes.mypage}>
      <SideBar
        pagename="My Page"
        subname1="My Info"
        subname2="Calender"
        subname3="Contact"
      />
      <Routes>
        <Route path="/" element={<MyInfo />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MyPage;
