import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import ToolBar from "./toolbar/ToolBar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import classes from "./Calendar.module.css";

const Test = () => {
  const localizer = momentLocalizer(moment);
  const state = {
    events: [
      {
        start: new Date("2023-03-07T15:54:46"),
        end: new Date("2023-03-07T16:54:46"),
        title: "15:54",
      },
      {
        start: new Date("2023-03-07T16:54:46"),
        end: new Date("2023-03-07T17:54:46"),
        title: "16:54",
      },
    ],
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
        />
      </div>
    </div>
  );
};

export default Test;
