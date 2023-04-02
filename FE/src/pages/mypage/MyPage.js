import { Routes, Route } from "react-router-dom";

import SideBar from "../../components/sidebar/SideBar";
import MyInfo from "./myinfo/MyInfo";
import Contact from "./contact/ContactMain";
import Calendar from "./calendar/Calendar";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

import classes from "./MyPage.module.css";

const MyPage = () => {
  const userSideBar = {
    pagename: "My Page",
    subname1: {
      icon: <AccountCircleIcon />,
      name: "My Info",
      onClick: "/mypage",
    },
    subname2: {
      icon: <EventAvailableIcon />,
      name: "Calender",
      onClick: "/mypage/calendar",
    },
    subname3: {
      icon: <HeadsetMicIcon />,
      name: "Contact",
      onClick: "/mypage/contact",
    },
  };

  return (
    <div className={classes.mypage}>
      <SideBar data={userSideBar} />
      <Routes>
        <Route path="/" element={<MyInfo />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MyPage;
