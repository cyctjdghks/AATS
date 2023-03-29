import classes from "./UserData.module.css";

const UserDatas = (props) => {
  
  const gender = () => {
    if (props.userData.userGender === "성별") {
      return "성별";
    } else if (props.userData.userGender) {
      return "남자";
    } else {
      return "여자";
    }
  };
  const status = () => {
    if (props.userData.userStatus === "상태") {
      return "상태";
    } else if (props.userData.userStatus) {
      return "on";
    } else {
      return "off";
    }
  };

  const userData = {
    userId: props.userData.userId,
    userName: props.userData.userName,
    userGender: gender(),
    userStatus: status(),
    userEmail: props.userData.userEmail,
  };
  return (
    <div className={classes.userDataBox}>
      <div className={classes.idBox}>{userData.userId}</div>
      {/* <hr className={classes.verticalLine} /> */}
      <div className={classes.nameBox}>{userData.userName}</div>
      {/* <hr className={classes.verticalLine} /> */}
      <div className={classes.genderBox}>{userData.userGender}</div>
      {/* <hr className={classes.verticalLine} /> */}
      <div className={classes.statusBox}>{userData.userStatus}</div>
      {/* <hr className={classes.verticalLine} /> */}
      <div className={classes.emailBox}>{userData.userEmail}</div>
    </div>
  );
};

export default UserDatas;
