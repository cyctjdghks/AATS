import { useNavigate } from "react-router-dom";

import classes from "./NavBottom.module.css";

const NavBottom = () => {
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

  return (
    <div className={classes.navBottom}>
      <p onClick={toHome}>Home</p>
      <p onClick={toSolutions}>Solutions</p>
      <p onClick={toContact}>Contact</p>
    </div>
  );
};

export default NavBottom;
