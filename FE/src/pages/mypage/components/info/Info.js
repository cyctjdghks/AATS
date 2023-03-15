import logo from "../../../../assets/logo.png";

import classes from "./Info.module.css";

const Info = () => {
  return (
    <div className={classes.info}>
      <img src={logo} alt="logo" />
      <hr className={classes.verticalHr}/>
      <div className={classes.infoContent}>
        <div>
          <p>이름 | 나이</p>
          <p> 기관 </p>
          <p> 유형</p>
        </div>
        <hr />
        <div>
          <p>국적 | 이메일</p>
          <p>생년월일 | 연락처</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
