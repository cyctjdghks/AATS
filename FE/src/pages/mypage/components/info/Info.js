import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../../../assets/profileTest.jpg";

import classes from "./Info.module.css";

const Info = () => {
  const userData = useSelector((state) => state.auth.userData);
  const workerData = useSelector((state) => state.auth.workerData)
  const userType = useSelector((state) => state.auth.userType);
  const [type, setType] = useState("");
  const tmp = () =>{
    if (userType === 1){
      setType(true)
    }else if(userType === 2){
      setType(false)
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
    profile : type ? workerData.workerProfile : userData.userProfile,
  }


  useEffect(() =>{
    tmp();
  })

  return (
    <div className={classes.info}>
      <img src={logo} alt="logo" />
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
              <span className={classes.tag}> 기관 : </span>
              {data.organizationName}
            </p>
          </div>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 유형 : </span>
              {type ? "근무자" : "회원"}
            </p>
          </div>
        </div>
        <hr className={classes.horizonHr} />
        <div className={classes.bottoBox}>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 국적 : </span>
              {data.nationality}
            </p>
            <p className={classes.content}>
              <span className={classes.tag}> 생년월일 : </span>
              {data.birth}
            </p>
          </div>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 이메일 : </span>
              {data.email}
            </p>
            <p className={classes.content}>
              <span className={classes.tag}> 연락처 : </span>
              {data.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
