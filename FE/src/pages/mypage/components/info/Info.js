import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Info.module.css";

const Info = () => {
  const userData = useSelector((state) => state.auth.userData);
  const workerData = useSelector((state) => state.auth.workerData);
  const userType = useSelector((state) => state.auth.userType);
  const [type, setType] = useState("");
  const tmp = () => {
    if (userType === 1) {
      setType(true);
    } else if (userType === 2) {
      setType(false);
    }
  }
  const data = {
    id : type ? workerData.workerId : userData.userId,
    name : type ? workerData.workerName : userData.userName,
    organizationName : type ? workerData.organizationName : userData.organizationName,
    gender : type ? workerData.workerGender : userData.userGender,
    age : type ? workerData.workerAge : userData.userAge,
    email : type ? workerData.workerEmail : userData.userEmail,
    phone : type ? workerData.workerPhone : userData.userPhone,
    nationality : type ? workerData.workerNationality : userData.userNationality,
    birth : type ? workerData.workerBirth : userData.userBirth,
    profile : type ? workerData.workerProfilePath : userData.userProfilePath,
  }

  useEffect(() => {
    tmp();
  });
  const profileLink = "https://j8d102.p.ssafy.io/be/" + data.profile;
  return (
    <div>
      <p className={classes.Title}>나의 프로필</p>
      <div className={classes.info}>
        <img src={profileLink} alt="progile" />
        <hr className={classes.verticalHr} />
        <div className={classes.infoBox}>
          <div className={classes.topBox}>
            <div className={classes.contentBox}>
              <p className={classes.name}>
                {data.name}({data.gender ? "남" : "여"}) | {data.age}세
              </p>
            </div>
            <div className={classes.contentBox}>
              <p className={classes.content}>
                <span className={classes.tag}> 기관 &nbsp; </span>
                {data.organizationName}
              </p>
            </div>
            <div className={classes.contentBox}>
              <p className={classes.content}>
                <span className={classes.tag}> 유형&nbsp; </span>
                {type ? "근무자" : "회원"}
              </p>
            </div>
          </div>
          <hr className={classes.horizonHr} />
          <div className={classes.bottoBox}>
            <div className={classes.contentBox}>
              <p className={classes.content}>
                <span className={classes.tag}> 국적&nbsp; </span>
                {data.nationality}
              </p>
              <p className={classes.content}>
                <span className={classes.tag}> 생년월일 &nbsp; </span>
                {data.birth}
              </p>
            </div>
            <div className={classes.contentBox}>
              <p className={classes.content}>
                <span className={classes.tag}> 이메일 &nbsp; </span>
                {data.email}
              </p>
              <p className={classes.content}>
                <span className={classes.tag}> 연락처 &nbsp; </span>
                {data.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
