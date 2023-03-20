import { useSelector } from "react-redux";
import classes from "./Summary.module.css";
import moment from "moment/moment";
import CommutePie from "./components/CommutePie";
import { CommuteData } from "./components/Data";

const Summary = () => {
  const startData = useSelector((state) => state.start.timeList);
  const endData = useSelector((state) => state.end.timeList);
  const today = moment([]).format("YYYY.MM.DD.ddd");

  const commuteData = CommuteData();

  let todayStart = "미출근";
  let todayStartTime = "";
  let todayEnd = "미퇴근";
  let todayEndTime = "";

  const stringToInt = (data) => {
    const ans = parseInt(data, 10);
    return ans;
  };

  for (let i = 0; i < startData.length; i++) {
    if (moment(new Date(startData[i])).format("YYYY.MM.DD.ddd") === today) {
      const tmp = stringToInt(moment(new Date(startData[i])).format("HH"));
      todayStartTime = moment(new Date(startData[i])).format("HH:mm");
      if (tmp >= 9) {
        todayStart = "지각";
      } else {
        todayStart = "정상 출근";
      }
    }
  }

  for (let i = 0; i < endData.length; i++) {
    if (moment(new Date(endData[i])).format("YYYY.MM.DD.ddd") === today) {
      const tmp = stringToInt(moment(new Date(endData[i])).format("HH"));
      todayEndTime = moment(new Date(endData[i])).format("HH:mm");
      if (tmp <= 18) {
        todayStart = "조퇴";
      } else {
        todayStart = "정상 퇴근";
      }
    }
  }

  return (
    <div className={classes.summary}>
      <div className={classes.firstBox}>
        <p>Today : {today}</p>
        <div className={classes.timeBox}>
          <div>
            <p>{todayStartTime}</p>
            <p>{todayStart}</p>
          </div>
          <div>
            <p>{todayEndTime}</p>
            <p>{todayEnd}</p>
          </div>
        </div>
      </div>
      <hr className={classes.verticalHr} />
      <div className={classes.secondBox}>
        <CommutePie></CommutePie>
      </div>
      <hr className={classes.verticalHr} />
      <div className={classes.thirdBox}>
        <div className={classes.commuteBox}>
          <div className={classes.attendanceBox}>
            <p>출근</p>
            <p>정상 출근 : {commuteData.normalAttendance}</p>
            <p>지각 : {commuteData.late}</p>
          </div>
          <div className={classes.leaveBox}>
            <p>퇴근</p>
            <p>정상 퇴근 : {commuteData.normalLeave}</p>
            <p>조퇴 : {commuteData.earlyLeave}</p>
          </div>
        </div>
        <div>결근 : {commuteData.absen}</div>
      </div>
    </div>
  );
};

export default Summary;
