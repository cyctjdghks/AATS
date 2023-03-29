import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
import { startActions } from "../../../store/start";
import { endActions } from "../../../store/end";
// import css style
import classes from "./NavRight.module.css";

const NavRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userType = useSelector((state) => state.auth.userType)
  const isLogin = useSelector((state) => state.auth.isLogin);

  const toLogin = () => {
    navigate("/auth/login");
  };
  const toSignUp = () => {
    navigate("/auth/signup");
  };
  const logout = () =>{
    if (userType === 0){
      dispatch(authActions.organizationLogout(''))
      dispatch(startActions.resetData([]))
      dispatch(endActions.resetData([]))
    } else if(userType === 1){
      dispatch(authActions.workerLogout(''))
    } else if(userType === 2){
      dispatch(authActions.userLogout(''))
    }
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
