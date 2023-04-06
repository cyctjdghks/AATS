import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import css style
import classes from "./NavLeft.module.css";
import { useEffect } from "react";

const NavLeft = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const type = useSelector((state) => state.auth.userType);

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
  const toSearch = () => {
    navigate("/admin/search");
  };
  const toRegist = () => {
    navigate("/regist");
  };
  
  const organizationLogin = isLogin && !type;

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[0].style.fontFamily = "Apple_Gothic_Neo_Bold";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[1].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[2].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[3].style.fontFamily = "Apple_Gothic_Neo_Light";
    } else if (location.pathname === "/solutions") {
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[0].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[1].style.fontFamily = "Apple_Gothic_Neo_Bold";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[2].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[3].style.fontFamily = "Apple_Gothic_Neo_Light";
    } else if (location.pathname === "/contact") {
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[0].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[1].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[2].style.fontFamily = "Apple_Gothic_Neo_Bold";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[3].style.fontFamily = "Apple_Gothic_Neo_Light";
    } else if (location.pathname === "/aboutus") {
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[0].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[1].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[2].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[3].style.fontFamily = "Apple_Gothic_Neo_Bold";
    } else if (location.pathname === "/admin/search") {
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[0].style.fontFamily = "Apple_Gothic_Neo_Bold";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[1].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[2].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[3].style.fontFamily = "Apple_Gothic_Neo_Light";
    } else if (location.pathname === "/regist") {
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[0].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[1].style.fontFamily = "Apple_Gothic_Neo_Bold";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[2].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[3].style.fontFamily = "Apple_Gothic_Neo_Light";
    } else {
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[0].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[1].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[2].style.fontFamily = "Apple_Gothic_Neo_Light";
      document.getElementsByClassName(
        `${classes.itemBox}`
      )[3].style.fontFamily = "Apple_Gothic_Neo_Light";
    }
  });

  return (
    <div className={type ? classes.navLeftHidden : classes.navLeft}>
      <div className={classes.itemBox}>
        {organizationLogin ? (
          <p onClick={toSearch}>Search</p>
        ) : (
          <p onClick={toHome}>Home</p>
        )}
      </div>
      <div className={classes.itemBox}>
        {organizationLogin ? (
          <p onClick={toRegist}>Regist</p>
        ) : (
          <p onClick={toSolutions}>Solutions</p>
        )}
      </div>
      <div className={classes.itemBox}>
        {organizationLogin ? <p></p> : <p onClick={toContact}>Contact</p>}
      </div>
      <div className={classes.itemBox}>
        {organizationLogin ? <p></p> : <p onClick={toAboutUs}>About Us</p>}
      </div>
    </div>
  );
};

export default NavLeft;
