import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";

import ToolBar from "./toolbar/ToolBar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import classes from "./Calendar.module.css";

const Test = () => {
  const startData = useSelector((state) => state.start.timeList);
  const endData = useSelector((state) => state.end.timeList);
  console.log(startData);
  const localizer = momentLocalizer(moment);

  const eventPropGetter = (event, start, end, isSelected) => {
    let backgroundColor = "";
    if (event.type === "start") {
      backgroundColor = "red";
    } else if (event.type === "end") {
      backgroundColor = "blue";
    }
    return {
      style: {
        backgroundColor,
      },
    };
  };

  const test = () => {
    const tmp = [];
    for (let i = 0; i < startData.length; i++) {
      tmp.push({
        start: new Date(startData[i]),
        end: new Date(startData[i]),
        type: "start",
        title: startData[i].slice(11, 16),
      });
    }
    for (let i = 0; i < endData.length; i++) {
      tmp.push({
        start: new Date(endData[i]),
        end: new Date(endData[i]),
        type: "end",
        title: endData[i].slice(11, 16),
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
