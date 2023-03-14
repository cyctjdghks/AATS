import { useNavigate } from "react-router-dom";
// import css style
import classes from "./NavLeft.module.css";

const NavLeft = () => {
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

  return (
    <div className={classes.navLeft}>
      <p onClick={toHome}>Home</p>
      <p onClick={toSolutions}>Solutions</p>
      <p onClick={toContact}>Contact</p>
      <p onClick={toAboutUs}>About Us</p>
    </div>
  );
};

export default NavLeft;
