import { Routes, Route } from "react-router-dom";
import Cctv from "./cctv/Cctv";
import Check from "./check/Check";
import DashBoard from "./dashboard/DashBoard";
import SideBar from "../../components/sidebar/SideBar"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import css style
import classes from "./Admin.module.css"

const Admin = () => {
  const adminSideBar = {
    pagename: "My Page",
    subname1: {
      icon: <AccountCircleIcon />,
      name: "DashBoard",
      onClick: "/admin",
    },
    subname2: {
      icon: <EventAvailableIcon />,
      name: "check",
      onClick: "/admin",
    },
    subname3: {
      icon: <HeadsetMicIcon />,
      name: "CCTV",
      onClick: "/admin/cctv",
    },
  };
  return (
    <div className={classes.admin}>
      <SideBar  data={adminSideBar} />
      <div className={classes.contentBox}>
      <Routes>
        <Route path="" element={<DashBoard/>}></Route>
        <Route path="/check" element={<Check/>}></Route>
        <Route path="/cctv" element={<Cctv/>}></Route>
      </Routes>

      </div>
    </div>
  );
};

export default Admin;
