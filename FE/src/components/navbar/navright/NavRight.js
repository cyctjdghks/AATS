import { useNavigate } from "react-router-dom";
// import css style
import classes from "./NavRight.module.css";

const NavRight = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/auth/login");
  };
  const toSignUp = () => {
    navigate("/auth/signup");
  };

  return (
    <div className={classes.navRight}>
      <p onClick={toLogin}>login</p>
      <p>|</p>
      <p onClick={toSignUp}>signup</p>
    </div>
  );
};

export default NavRight;
