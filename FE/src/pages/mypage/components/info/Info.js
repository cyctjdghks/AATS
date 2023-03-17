import { useSelector } from "react-redux";
import logo from "../../../../assets/profileTest.jpg";

import classes from "./Info.module.css";

const Info = () => {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className={classes.info}>
      <img src={logo} alt="logo" />
      <hr className={classes.verticalHr} />
      <div className={classes.infoBox}>
        <div className={classes.topBox}>
          <div className={classes.contentBox}>
            <p className={classes.name}>
              {userData.name}({userData.gender ? "남" : "여"}) | {userData.age}세
            </p>
          </div>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 기관 : </span>
              {userData.organization_id}
            </p>
          </div>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 유형 : </span>
              {userData.organization_id}
            </p>
          </div>
        </div>
        <hr className={classes.horizonHr} />
        <div className={classes.bottoBox}>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 국적 : </span>
              {userData.nationality}
            </p>
            <p className={classes.content}>
              <span className={classes.tag}> 생년월일 : </span>
              {userData.birth}
            </p>
          </div>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 이메일 : </span>
              {userData.email}
            </p>
            <p className={classes.content}>
              <span className={classes.tag}> 연락처 : </span>
              {userData.phoneNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
