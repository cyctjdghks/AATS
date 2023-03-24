import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
// import css style
import classes from "./NavRight.module.css";

const NavRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const toLogin = () => {
    navigate("/auth/login");
  };
  const toSignUp = () => {
    navigate("/auth/signup");
  };
  const logout = () =>{
    dispatch(authActions.organizationLogout(null))
    navigate('/')
  }

  return (
    isLogin ?
    <div className={classes.navRight}>
      <p onClick={logout}>logout</p>
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
