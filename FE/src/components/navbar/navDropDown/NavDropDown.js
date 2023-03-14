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
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import TocIcon from "@mui/icons-material/Toc";

const NavDropDown = () => {
  const navigate = useNavigate();

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

  const firstdata = [
    { name: "Home", icon: <HomeIcon color="primary" />, link: toHome },
    { name: "Solutions", icon: <LightbulbIcon />, link: toSolutions },
    { name: "About Us", icon: <InfoIcon />, link: toAboutUs },
    { name: "Contact", icon: <ContactSupportIcon />, link: toContact },
  ];

  const secondData = [
    { name: "Login", icon: <LoginIcon />, link: toLogin },
    { name: "Sign Up", icon: <AssignmentIndIcon />, link: toSignUp },
  ];

  const [open, setOpen] = useState(false);

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
          <TocIcon sx={{ fontSize: 80 }} />
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
