import { useLocation, useNavigate } from "react-router-dom";
// import components
import NavLeft from "./navleft/NavLeft";
import NavRight from "./navright/NavRight";
import NavDropDown from "./navDropDown/NavDropDown";
// import img
import aive from "../../assets/aive2.png"
// import css style
import classes from "./NavBar.module.css";
import { useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toHome = () => {
    navigate("/");
  };
  // useEffect(()=>{
  //   if(location.pathname === "/" && document.querySelector("#App").getBoundingClientRect().y !== 18.71875){
  //     document.getElementById("test").style.position = "fixed"
  //     document.getElementById("test").style.zIndex = "50"
  //     document.getElementById("test").style.boxShadow = "none"
  //     // document.getElementById("test").style.background = "white"
  //   }else{
  //     document.getElementById("test").style.position = "relative"
  //     document.getElementById("test").style.zIndex = "none"
  //     document.getElementById("test").style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1);"
  //   }
  // })

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
