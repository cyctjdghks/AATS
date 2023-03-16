import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useSelector } from "react-redux";

const NavDropDown = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state)=> state.auth.isLogin)

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

  const firstLoginData = [
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

  const firstdata = isLogin ? firstLoginData : firstLogoutdata
  const secondData = isLogin ? secondLoginData : secondLogoutData

  const firstList = () => (
    <div style={{ width: "auto" }} onClick={() => setOpen(false)}>
      {firstdata.map((item, index) => (
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
    <div>
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
