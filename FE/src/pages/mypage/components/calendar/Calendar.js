import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";

import ToolBar from "./toolbar/ToolBar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import classes from "./Calendar.module.css";

const Test = () => {
  const startData = useSelector((state) => state.start.timeList);
  const endData = useSelector((state) => state.end.timeList);
  const localizer = momentLocalizer(moment);

  const eventPropGetter = (event) => {
    let backgroundColor = "";
    let color = "";
    let width = "80%";
    let textAlign = "center";
    let marginLeft = "auto";
    let marginRight = "auto";
    let marginTop = "5px";
    let fontWeight = "500";
    let cursor = "default";
    if (event.type === "지각") {
      backgroundColor = "#FF3232";
    } else if (event.type === "퇴근") {
      backgroundColor = "#D8DCDF";
      color = "black";
    } else if (event.type === "정상출근") {
      backgroundColor = "#58DE29";
    } else if (event.type === "조퇴") {
      backgroundColor = "#FF3232";
    } 
    return {
      style: {
        backgroundColor,
        color,
        width,
        textAlign,
        marginLeft,
        marginRight,
        marginTop,
        fontWeight,
        cursor,
      },
    };
  };

  const stringToInt = (data) => {
    const ans = parseInt(data, 10);
    return ans;
  };


  const test = () => {
    const tmp = [];
    for (let i = 0; i < startData.length; i++) {
      tmp.push({
        start: new Date(startData[i]),
        end: new Date(startData[i]),
        type: stringToInt(startData[i].slice(11, 13)) > 9 ? "지각" : "정상출근",
        title: "출근 " + moment(new Date(startData[i])).format("HH:mm"),
      });
    }
    for (let i = 0; i < endData.length; i++) {
      tmp.push({
        start: new Date(endData[i]),
        end: new Date(endData[i]),
        type: stringToInt(endData[i].slice(11, 13)) < 18 ? "조퇴" : "퇴근",
        title: "퇴근 " + moment(new Date(endData[i])).format("HH:mm"),
      });
    }
    return tmp;
  };
  const state = {
    events: test(),
  };

  return (
    <div className={classes.box}>
      <div className={classes.test}>
        <Calendar
          events={state.events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          views={{
            month: true,
          }}
          style={{ height: 700 }}
          components={{
            toolbar: ToolBar,
          }}
          eventPropGetter={eventPropGetter}
        />
      </div>
    </div>
  );
};

export default Test;
