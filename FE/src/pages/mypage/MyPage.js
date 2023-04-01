import { Routes, Route } from "react-router-dom";

import SideBar from "../../components/sidebar/SideBar";
import MyInfo from "./myinfo/MyInfo";
import Contact from "./contact/ContactMain";
import Calendar from "./calendar/Calendar";
import axios from "axios";
import { startActions } from "../../store/start";
import { endActions } from "../../store/end";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

import classes from "./MyPage.module.css";
import { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const MyPage = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const year = moment([]).format("YYYY");
  const month = moment([]).format("M");
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

  const getDatas = () => {
    const startUrl = "https://j8d102.p.ssafy.io/be/worker/get/start/month";
    const endUrl = "https://j8d102.p.ssafy.io/be/worker/get/end/month";
    const axiosData = {
      workerId: id,
      year,
      month,
    };
    console.log(axiosData);
    axios
      .post(startUrl, axiosData)
      .then((response) => {
        dispatch(startActions.getData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post(endUrl, axiosData)
      .then((response) => {
        dispatch(endActions.getData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDatas();
  });

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
