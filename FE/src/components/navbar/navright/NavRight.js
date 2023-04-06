import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
import { startActions } from "../../../store/start";
import { endActions } from "../../../store/end";
// library
import axios from "axios";
import Swal from "sweetalert2";
// css style
import classes from "./NavRight.module.css";

const NavRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userType = useSelector((state) => state.auth.userType);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const toLogin = () => {
    navigate("/auth/login");
  };
  const toSignUp = () => {
    navigate("/auth/signup");
  };
  const organizationLogout = () => {
    const url = "https://j8d102.p.ssafy.io/be/organization/logout";
    axios.get(url).then(() => {
      Swal.fire({
        title:
          '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">정상적으로 로그아웃 되었습니다<div>',
        html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">이용해주셔서 감사합니다</div>',
        icon: "success",
        width: 400,
        confirmButtonColor: "#9A9A9A",
        confirmButtonText:
          '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
      });
      navigate("/");
    });
  };
  const workerLogout = () => {
    const url = "https://j8d102.p.ssafy.io/be/worker/logout";
    axios.get(url).then(() => {
      Swal.fire({
        title:
          '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">정상적으로 로그아웃 되었습니다<div>',
        html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">이용해주셔서 감사합니다</div>',
        icon: "success",
        width: 400,
        confirmButtonColor: "#9A9A9A",
        confirmButtonText:
          '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
      });
      navigate("/");
    });
  };
  const userLogout = () => {
    const url = "https://j8d102.p.ssafy.io/be/user/logout";
    axios.get(url).then(() => {
      Swal.fire({
        title:
          '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">정상적으로 로그아웃 되었습니다<div>',
        html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">이용해주셔서 감사합니다</div>',
        icon: "success",
        width: 400,
        confirmButtonColor: "#9A9A9A",
        confirmButtonText:
          '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
      });
      navigate("/");
    });
  };

  const logout = () => {
    if (userType === 0) {
      dispatch(authActions.organizationLogout(""));
      dispatch(startActions.resetData([{ time: "" }]));
      dispatch(endActions.resetData([{ time: "" }]));
      organizationLogout();
    } else if (userType === 1) {
      dispatch(authActions.workerLogout(""));
      workerLogout();
    } else if (userType === 2) {
      dispatch(authActions.userLogout(""));
      userLogout();
    }
    navigate("/");
  };

  return isLogin ? (
    <div className={classes.navRight}>
      <p onClick={logout}>logout</p>
    </div>
  ) : (
    <div className={classes.navRight}>
      <p onClick={toLogin}>login</p>
      <p>|</p>
      <p onClick={toSignUp}>signup</p>
    </div>
  );
};

export default NavRight;
