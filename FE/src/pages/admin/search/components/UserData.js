import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../store/auth"

import classes from "./UserData.module.css";

const UserDatas = ({ data, type }) => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const gender = () => {
    if (type ? data.userGender : data.workerGender) {
      return "남자";
    } else {
      return "여자";
    }
  };
  const status = () => {
    if (type ? data.userStatus : data.workerStatus) {
      return "on";
    } else {
      return "off";
    }
  };
  
  const toDetail = () =>{
    // dispatch(authActions.)
  }

  const userData = {
    id: type ? data.userId : data.workerId,
    name: type ? data.userName : data.workerName,
    gender: gender(),
    status: status(),
    email: type ? data.userEmail : data.workerEmail,
  };
  return (
    <div className={classes.userDataBox}>
      <div className={classes.idBox}>{userData.id}</div>
      <div className={classes.nameBox}>{userData.name}</div>
      <div className={classes.genderBox}>{userData.gender}</div>
      <div className={classes.statusBox}>{userData.status}</div>
      <div className={classes.emailBox}>{userData.email}</div>
    </div>
  );
};

export default UserDatas;
