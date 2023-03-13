import NavBottom from "./navbottom/NavBottom";
import NavTop from "./navtop/NavTop";
// import NavAuth from "./NavAuth";

import logo from "../../assets/logo.png";

import classes from "./NavBar.module.css";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

const NavBar = () => {
  // const locate = useLocation();

  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(()=>{
  //   if(locate.pathname.slice(0,5) === "/auth"){
  //     setIsAuth(true)
  //   }else{
  //     setIsAuth(false)
  //   }
  //   console.log(isAuth);
  // })
  return (
    <div className={classes.navBar}>
      <img src={logo} alt="logo" />
      <div className={classes.navBarItems}>
        <NavTop />
        <NavBottom />
      </div>
    </div>
  );
};

export default NavBar;
