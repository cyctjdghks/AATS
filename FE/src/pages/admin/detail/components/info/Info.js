import classes from "./Info.module.css";

const Info = ({data, type}) => {
  
  const profileData = {
    id : type ? data.workerId : data.userId,
    name : type ? data.workerName : data.userName,
    organizationName : data.organizationName,
    gender : type ? data.workerGender : data.userGender,
    age : type ? data.workerAge : data.userAge,
    email : type ? data.workerEmail : data.userEmail,
    phone : type ? data.workerPhone : data.userPhone,
    nationality : type ? data.workerNationality : data.userNationality,
    birth : type ? data.workerBirth : data.userBirth,
    profile : type ? data.workerProfilePath : data.userProfilePath,
  }

  const profileLink = "https://j8d102.p.ssafy.io/be/"+ profileData.profile
  return (
    <div className={classes.info}>
      <img src={profileLink} alt="progile" />
      <hr className={classes.verticalHr} />
      <div className={classes.infoBox}>
        <div className={classes.topBox}>
          <div className={classes.contentBox}>
            <p className={classes.name}>
              {profileData.name}({profileData.gender ? "남" : "여"}) | {profileData.age}세
            </p>
          </div>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 기관 : </span>
              {profileData.organizationName}
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
              {profileData.nationality}
            </p>
            <p className={classes.content}>
              <span className={classes.tag}> 생년월일 : </span>
              {profileData.birth}
            </p>
          </div>
          <div className={classes.contentBox}>
            <p className={classes.content}>
              <span className={classes.tag}> 이메일 : </span>
              {profileData.email}
            </p>
            <p className={classes.content}>
              <span className={classes.tag}> 연락처 : </span>
              {profileData.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
