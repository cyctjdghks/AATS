import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import mui components
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import mui icon
import HomeIcon from "@mui/icons-material/Home";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import TocIcon from "@mui/icons-material/Toc";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
//import css style
import classes from "./NavDropDown.module.css";

const NavDropDown = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const userType = useSelector((state) => state.auth.userType);

  const toHome = () => {
    navigate("/");
  };
  const toSolutions = () => {
    navigate("/solutions");
  };
  const toContact = () => {
    navigate("/contact");
  };
  const toAboutUs = () => {
    navigate("/aboutus");
  };
  const toLogin = () => {
    navigate("/auth/login");
  };
  const toSignUp = () => {
    navigate("/auth/signup");
  };
  const toMypage = () => {
    navigate("/mypage");
  };
  const toMypageContact = () => {
    navigate("/mypage/contact");
  };
  const toDashBoard = () =>{
    navigate("/admin")
  }
  const toCctv = () => {
    navigate("/admin/cctv")
  }

  const firstLogoutdata = [
    { name: "Home", icon: <HomeIcon color="primary" />, link: toHome },
    { name: "Solutions", icon: <LightbulbIcon />, link: toSolutions },
    { name: "About Us", icon: <InfoIcon />, link: toAboutUs },
    { name: "Contact", icon: <HeadsetMicIcon />, link: toContact },
  ];

  const secondLogoutData = [
    { name: "Login", icon: <LoginIcon />, link: toLogin },
    { name: "Sign Up", icon: <AssignmentIndIcon />, link: toSignUp },
  ];

  const firstOrganizationLoginData = [
    {
      name: "DashBoard",
      icon: <DashboardIcon/>,
      link: toDashBoard,
    },
    { name: "D", icon: <PermContactCalendarIcon />, link: toDashBoard },
    { name: "CCTV", icon: <CameraOutdoorIcon />, link: toCctv },
  ];
  const firstWorkerLoginData = [
    {
      name: "My Info",
      icon: <AccountCircleIcon color="primary" />,
      link: toMypage,
    },
    { name: "Calendar", icon: <EventAvailableIcon />, link: toMypage },
    { name: "Contact", icon: <HeadsetMicIcon />, link: toMypageContact },
  ];
  const firstUserLoginData = [
    {
      name: "My Info",
      icon: <AccountCircleIcon color="primary" />,
      link: toMypage,
    },
    { name: "Calendar", icon: <EventAvailableIcon />, link: toMypage },
    { name: "Contact", icon: <HeadsetMicIcon />, link: toMypageContact },
  ];
  const secondLoginData = [
    { name: "Logout", icon: <LoginIcon />, link: toLogin },
  ];

  const [open, setOpen] = useState(false);

  const firstdata = () => {
    if (isLogin === false) {
      return firstLogoutdata;
    } else {
      if (userType === 0) {
        return firstOrganizationLoginData;
      } else if (userType === 1) {
        return firstWorkerLoginData;
      } else {
        return firstUserLoginData;
      }
    }
  };
  const secondData = isLogin ? secondLoginData : secondLogoutData;

  const firstList = () => (
    <div style={{ width: "auto" }} onClick={() => setOpen(false)}>
      {firstdata().map((item, index) => (
        <ListItem button key={index} onClick={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  const secondList = () => (
    <div style={{ width: "auto" }} onClick={() => setOpen(false)}>
      {secondData.map((item, index) => (
        <ListItem button key={index} onClick={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <div className={classes.navdropdown}>
      <Button onClick={() => setOpen(true)}>
        <ListItemIcon>
          <TocIcon sx={{ fontSize: 75 }} />
        </ListItemIcon>
      </Button>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
        {firstList()}
        <Divider />
        {secondList()}
      </Drawer>
    </div>
  );
};

export default NavDropDown;
