import { useNavigate } from "react-router-dom";
// css style
import classes from "./UserData.module.css";

const UserDatas = ({ data, type }) => {
  const navigate = useNavigate();
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

  const toDetail = (event) => {
    event.preventDefault();
    navigate("/admin/detail", { state: { data: data, type: type } });
  };

  const userData = {
    id: type ? data.userId : data.workerId,
    name: type ? data.userName : data.workerName,
    gender: gender(),
    status: status(),
    email: type ? data.userEmail : data.workerEmail,
  };
  return (
    <div className={classes.userDataBox} onClick={toDetail}>
      <div className={classes.idBox}>{userData.id}</div>
      <div className={classes.nameBox}>{userData.name}</div>
      <div className={classes.genderBox}>{userData.gender}</div>
      <div className={classes.statusBox}>{userData.status}</div>
      <div className={classes.emailBox}>{userData.email}</div>
    </div>
  );
};

export default UserDatas;
