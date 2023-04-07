import { useEffect, useState } from "react";
// redux
import { useSelector } from "react-redux";
// library
import axios from "axios";
import moment from "moment/moment";
// css style
import classes from "./Summary.module.css";

const UserSummary = () => {
  const userId = useSelector((state) => state.auth.id);
  const today = moment([]).format("YYYY.MM.DD");
  const startData = useSelector((state) => state.start.timeList);
  const endData = useSelector((state) => state.end.timeList);
  const [membershipType, setMembershipType] = useState(0);
  const [membershipData, setMembershipData] = useState({});

  const getMyMemberShip = () => {
    const url = "https://j8d102.p.ssafy.io/be/user/membership";
    const axiosData = {
      userId: userId,
    };
    axios
      .post(url, axiosData)
      .then((response) => {
        setMembershipType(response.data.data.membershipType);
        if (membershipType === 0) {
          const url1 = "https://j8d102.p.ssafy.io/be/user/membership/time";
          axios
            .post(url1, axiosData)
            .then((response) => {
              setMembershipData(response.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const url1 = "https://j8d102.p.ssafy.io/be/user/membership/count";
          axios
            .post(url1, axiosData)
            .then((response) => {
              setMembershipData(response.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let todayStartTime = "";
  let todayEndTime = "";

  for (let i = 0; i < startData.length; i++) {
    if (moment(new Date(startData[i]?.time)).format("YYYY.MM.DD") === today) {
      todayStartTime = moment(new Date(startData[i]?.time)).format("HH:mm");
    }
  }

  for (let i = 0; i < endData.length; i++) {
    if (moment(new Date(endData[i]?.time)).format("YYYY.MM.DD") === today) {
      todayEndTime = moment(new Date(endData[i]?.time)).format("HH:mm");
    }
  }
  useEffect(() => {
    getMyMemberShip();
  });

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
              <p className={classes.startP1}>금일 이용 시작 시각</p>
              <p className={classes.startP2}>{todayStartTime}</p>
            </div>
            <div className={classes.endBtn}>
              <p className={classes.startP1}>금일 이용 종료 시각</p>
              <p className={classes.startP2}>{todayEndTime}</p>
            </div>
          </div>
        </div>
        <div className={classes.membershipBox}>
          <button className={classes.membershipButton}>
            {membershipType ? "횟수권" : "기간권"}
          </button>
          <div className={classes.membershipText}>
            <p className={classes.membership1}>
              {membershipType ? "남은 횟수" : "이용 기간"}
            </p>
            <p className={classes.membership2}>
              {membershipType
                ? `${membershipData.count}회`
                : `${moment(membershipData.startTime).format(
                    "YY.MM.DD"
                  )} ~ ${moment(membershipData.endTime).format("YY.MM.DD")}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSummary;
