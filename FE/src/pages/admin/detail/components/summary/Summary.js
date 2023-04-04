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
    if (
      moment(new Date(startData[i]?.time)).format("YYYY.MM.DD.ddd") === today
    ) {
      const tmp = stringToInt(
        moment(new Date(startData[i]?.time)).format("HH")
      );
      todayStartTime = moment(new Date(startData[i]?.time)).format("HH:mm");
      if (tmp >= 9) {
        todayStart = "지각";
      } else {
        todayStart = "정상 출근";
      }
    }
  }

  for (let i = 0; i < endData.length; i++) {
    if (moment(new Date(endData[i]?.time)).format("YYYY.MM.DD.ddd") === today) {
      const tmp = stringToInt(moment(new Date(endData[i]?.time)).format("HH"));
      todayEndTime = moment(new Date(endData[i]?.time)).format("HH:mm");
      if (tmp <= 18) {
        todayStart = "조퇴";
      } else {
        todayStart = "정상 퇴근";
      }
    }
  }

  return (
    <div className={classes.summaryBox}>
      <p className={classes.summaryTitle}>출결 현황</p>
      <div className={classes.summary}>
        <div className={classes.zeroBox}>
          <div className={classes.todayBox}>
            <p className={classes.today}>TODAY</p>
            <p className={classes.today2}>{today}</p>
          </div>
        </div>
        <div className={classes.firstBox}>
          <div className={classes.timeBox}>
            <div className={classes.startBtn}>
              <p className={classes.startP1}>{todayStartTime}</p>
              <p className={classes.startP2}>{todayStart}</p>
            </div>
            <div className={classes.endBtn}>
              <p className={classes.startP1}>{todayEndTime}</p>
              <p className={classes.startP2}>{todayEnd}</p>
            </div>
          </div>
        </div>
        <hr className={classes.verticalHr} />
        <div className={classes.thirdBox}>
          <div className={classes.commuteBox}>
            <div className={classes.attendanceBox}>
              <button className={classes.attendanceBoxP1}>출근</button>
              <div className={classes.attendanceText1}>
                <p className={classes.normalAttendance}>
                  정상 출근&nbsp;&nbsp;&nbsp;
                </p>
                <p className={classes.normalAttendance2}>
                  {commuteData.normalAttendance}
                </p>
              </div>
              <div className={classes.attendanceText1}>
                <p className={classes.normalAttendance}>
                  지각&nbsp;&nbsp;&nbsp;
                </p>
                <p className={classes.normalAttendance2}>{commuteData.late}</p>
              </div>
            </div>
            <div className={classes.leaveBox}>
              <button className={classes.attendanceBoxP2}>퇴근</button>
              <div className={classes.attendanceText1}>
                <p className={classes.normalAttendance}>
                  정상 퇴근&nbsp;&nbsp;&nbsp;
                </p>
                <p className={classes.normalAttendance2}>
                  {commuteData.normalLeave}
                </p>
              </div>
              <div className={classes.attendanceText1}>
                <p className={classes.normalAttendance}>
                  조퇴&nbsp;&nbsp;&nbsp;
                </p>
                <p className={classes.normalAttendance2}>
                  {commuteData.earlyLeave}
                </p>
              </div>
            </div>
            <div className={classes.leaveBox}>
              <button className={classes.attendanceBoxP3}>결근</button>
              <div className={classes.attendanceText1}>
                <p className={classes.normalAttendance}>
                  결근 일수 &nbsp;&nbsp;&nbsp;
                </p>
                <p className={classes.normalAttendance2}>{commuteData.absen}</p>
              </div>
              <div className={classes.attendanceText1}>
                <p className={classes.normalAttendance}>&nbsp;&nbsp;&nbsp;</p>
                <p className={classes.normalAttendance2}></p>
              </div>
            </div>
          </div>
        </div>
        <hr className={classes.verticalHr} />
        <div className={classes.secondBox}>
          <CommutePie></CommutePie>
        </div>
      </div>
    </div>
  );
};

export default Summary;
