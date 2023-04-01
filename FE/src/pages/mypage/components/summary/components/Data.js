import { useSelector } from "react-redux";
import moment from "moment/moment";

export const CommuteData = () => {
  const startData = useSelector((state) => state.start.timeList);
  const endData = useSelector((state) => state.end.timeList);

  const today = moment();
  let startDate = moment().startOf("month");
  let count = -1;

  while (true) {
    let tmpDate = startDate;
    if (tmpDate > today) {
      break;
    } else {
      let tmp = tmpDate.day();
      if (tmp === 0 || tmp === 6) {
      } else {
        count++;
      }
      tmpDate.add(1, "day");
    }
  }

  const startTime = 9;
  const endTime = 18;

  const todayDay = moment().format("DD");

  let normalAttendance = 0;
  let normalLeave = 0;
  let late = 0;
  let earlyLeave = 0;
  let faulty = 0;

  const stringToInt = (text) => {
    const ans = parseInt(text, 10);
    return ans;
  };

  for (let i = 0; i < startData.length; i++) {
    const tmp = stringToInt(moment(new Date(startData[i].time)).format("HH"));
    if (tmp >= startTime) {
      late += 1;
    } else {
      const tmp1 = moment(new Date(endData[i].time)).format("DD");
      if (tmp1 === todayDay) {
      } else {
        normalAttendance += 1;
      }
    }
  }
  for (let i = 0; i < endData.length; i++) {
    const tmp = stringToInt(moment(new Date(endData[i].time)).format("HH"));
    if (tmp < endTime) {
      earlyLeave += 1;
      for (let j = 0; j < startData.length; j++) {
        const tmp1 = moment(new Date(endData[i].time)).format("DD");
        const tmp2 = moment(new Date(startData[j].time)).format("DD");
        if (tmp1 === tmp2) {
          const faultyDate = stringToInt(
            moment(new Date(startData[j])).format("HH")
          );
          if (faultyDate >= startTime) {
            faulty += 1;
          }
        }
      }
    } else {
      normalLeave += 1;
    }
  }
  const date =
    normalAttendance - late - (normalAttendance - normalLeave) + faulty;
  const absen = count - date - late - earlyLeave + faulty;
  const data = {
    normalAttendance,
    normalLeave,
    late,
    earlyLeave,
    date,
    absen,
    count,
    faulty,
  };
  console.log(data);

  return data;
};
