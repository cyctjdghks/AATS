import axios from "axios";
import Swal from "sweetalert2";
import { authActions } from "../../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// custom hook
import { DataInput, CheckPassword } from "../../auth/components/Effectiveness";
// component
import InputLabel from "../../auth/components/InputLabel";
// css style
import classes from "./PasswordChange.module.css";

import quote1 from "../../../assets/auths/quote1.png";
import quote2 from "../../../assets/auths/quote2.png";
import ceo from "../../../assets/auths/ceo.png";
import phone from "../../../assets/auths/phone.png";
import tmp1 from "../../../assets/auths/tmp1.png";
import tmp2 from "../../../assets/auths/tmp2.png";

const PasswordChange = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const userType = useSelector((state) => state.auth.userType);

  const [type, setType] = useState("");

  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );
  const [newPassword, setNewPassword, newPasswordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );
  const [confirmNewPassword, setConfirmNewPassword, confirmNewPasswordError] =
    CheckPassword(newPassword);

  const tmp = () => {
    if (userType === 1) {
      setType(true);
    } else if (userType === 2) {
      setType(false);
    }
  };

  const PasswordChangeSubmit = (event) => {
    event.preventDefault();
    const url = type
      ? "https://j8d102.p.ssafy.io/be/worker/update/pw"
      : "https://j8d102.p.ssafy.io/be/user/update/pw";
    const axiosData = type
      ? {
        workerId: id,
        workerPwd: password,
        workerNewPwd: newPassword,
        }
      : {
        userId: id,
        userPwd: password,
        userNewPwd: newPassword,
        };
        axios
        .put(url, axiosData)
        .then((response) => {
            if (response.status === 200) {
                Swal.fire({
                  title:
                    '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">변경 성공<div>',
                  html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">새로운 비밀번호로 로그인해주세요</div>',
                  width: 330,
                  icon: "success",
                  confirmButtonColor: "#9A9A9A",
                  confirmButtonText:
                    '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
                }).then(() => {
                  navigate("/auth/login");
                  dispatch(type ? authActions.workerLogout("") : authActions.userLogout(""))
                });
              } 
        })
        .catch((error) => {
            if (error.response.status === 401) {
                Swal.fire({
                  title:
                    '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">토큰 만료<div>',
                  html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">다시 로그인 해주세요!</div>',
                  width: 330,
                  icon: "error",
                  confirmButtonText:
                    '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
                  confirmButtonColor: "#9A9A9A",
                }).then(() => {
                  navigate("/");
                  dispatch(authActions.logout(""));
                });
              } else {
                Swal.fire({
                  title:
                    '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">변경 실패<div>',
                  html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">비밀번호를 다시 확인해주세요</div>',
                  width: 330,
                  icon: "error",
                  confirmButtonColor: "#9A9A9A",
                  confirmButtonText:
                    '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
                });
              }
        })
  };

  
  // sumbit 활성화 & 비활성화
  const nullError = !!password && !!newPassword && !!confirmNewPassword;
  const effectivnessError =
    passwordError && newPasswordError && confirmNewPasswordError;
  const submitError = nullError && effectivnessError;


  useEffect(() => {
    tmp();
  }, []);

  return (
    <div className={classes.pageBox}>
      <div className={classes.loginBox}>
        <h1>비밀번호 변경</h1>
        <div className={classes.hline}></div>
        <div className={classes.loginContentBox}>
          <form onSubmit={PasswordChangeSubmit}>
          <InputLabel
              label="기존 비밀번호"
              type="password"
              value={password}
              placeholder="비밀번호를 입력해주세요"
              onChange={setPassword}
              errorMessage={
                passwordError
                  ? ""
                  : "영어와 숫자 그리고 특수문자로만 입력해주세요."
              }
            />
            <InputLabel
              label="새 비밀번호"
              type="password"
              value={newPassword}
              placeholder="새 비밀번호를 입력해주세요"
              onChange={setNewPassword}
              errorMessage={
                newPasswordError
                  ? ""
                  : "영어와 숫자 그리고 특수문자로만 입력해주세요."
              }
            />
            <InputLabel
              label="새 비밀번호 확인"
              type="password"
              value={confirmNewPassword}
              placeholder="새 비밀번호를 다시 입력해주세요"
              onChange={setConfirmNewPassword}
              errorMessage={
                confirmNewPasswordError ? "" : "비밀번호가 일치하지 않습니다."
              }
            />
            <button
              type="submit"
              disabled={!submitError}
              className={classes.loginBtn}
            >
              비밀번호 변경
            </button>
          </form>
        </div>
      </div>
      <div className={classes.imgBox}>
        <div className={classes.imgSubBox}>
          <div>
            <img src={quote1} alt="따옴표1" className={classes.quote1} />
            <p className={classes.quoteText1}>
            AIVE는 혁신적인 AI 기술을 활용하여, 사용자들에게 더욱더 편리하고
              직관적인 서비스를 제공하고자 하는 미션을 갖고 있습니다.
            </p>
            <img src={quote2} alt="따옴표2" className={classes.quote2} />
            <p className={classes.d102}>삼성 청년 SW 아카데미, D102 일동</p>
            <div className={classes.hLine}></div>
            <div className={classes.iconBox}>
              <div className={classes.icon1}>
                <div>
                  <img src={phone} alt="" className={classes.phone} />
                </div>
                <div className={classes.iconPBox1}>
                  <p className={classes.iconP1}>Phone</p>
                  <p className={classes.iconP2}>02-123-456</p>
                </div>
              </div>
              <div className={classes.icon2}>
                <div>
                  <img src={tmp1} alt="" className={classes.tmp1} />
                </div>
                <div className={classes.iconPBox2}>
                  <p className={classes.iconP3}>Location</p>
                  <p className={classes.iconP4}>ssafy gumi</p>
                </div>
              </div>
              <div className={classes.icon3}>
                <div>
                  <img src={tmp2} alt="" className={classes.tmp2} />
                </div>
                <div className={classes.iconPBox3}>
                  <p className={classes.iconP5}>Gumi</p>
                  <p className={classes.iconP6}>No.1</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.ceoBox}>
            <img src={ceo} alt="" className={classes.ceo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
