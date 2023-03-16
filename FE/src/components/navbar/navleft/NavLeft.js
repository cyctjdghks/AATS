import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import css style
import classes from "./NavLeft.module.css";

const NavLeft = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);

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

  return (
    <div className={isLogin? classes.navLeftHidden : classes.navLeft}>
      <p onClick={toHome}>Home</p>
      <p onClick={toSolutions}>Solutions</p>
      <p onClick={toContact}>Contact</p>
      <p onClick={toAboutUs}>About Us</p>
    </div>
  );
};

export default NavLeft;
