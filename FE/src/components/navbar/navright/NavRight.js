import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import css style
import classes from "./NavRight.module.css";

const NavRight = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const toLogin = () => {
    navigate("/auth/login");
  };
  const toSignUp = () => {
    navigate("/auth/signup");
  };

  return (
    isLogin ?
    <div className={classes.navRight}>
      <p onClick={toLogin}>logout</p>
    </div>
    :
    <div className={classes.navRight}>
      <p onClick={toLogin}>login</p>
      <p>|</p>
      <p onClick={toSignUp}>signup</p>
    </div>
  );
};

export default NavRight;
