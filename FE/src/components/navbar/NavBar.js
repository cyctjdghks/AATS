import { useNavigate } from "react-router-dom";
// import components
import NavLeft from "./navleft/NavLeft";
import NavRight from "./navright/NavRight";
import NavDropDown from "./navDropDown/NavDropDown";
// import img
import aive from "../../assets/aive2.png"
// import css style
import classes from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <div className={classes.navBar} id="test">
      <div className={classes.navDropDown}>
        <NavDropDown />
      </div>
      <img src={aive} alt="logo" onClick={toHome} />
      <div className={classes.navBarItems}>
        <NavLeft />
        <NavRight />
      </div>
      <div className={classes.navDropDown}></div>
    </div>
  );
};

export default NavBar;
