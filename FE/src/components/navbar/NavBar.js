import { useNavigate } from "react-router-dom";
// import components
import NavLeft from "./navleft/NavLeft";
import NavRight from "./navright/NavRight";
import NavDropDown from "./navDropDown/NavDropDown";
// import img
import logo from "../../assets/logo.png";
// import css style
import classes from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <div className={classes.navBar}>
      <div className={classes.navDropDown}>
        <NavDropDown />
      </div>
      <img src={logo} alt="logo" onClick={toHome} />
      <div className={classes.navBarItems}>
        <NavLeft />
        <NavRight />
      </div>
      <div className={classes.navDropDown}></div>
    </div>
  );
};

export default NavBar;
