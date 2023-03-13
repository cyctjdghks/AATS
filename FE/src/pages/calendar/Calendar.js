import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

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
        title: "16:54"
      },
      {
        start: new Date("2023-03-08T15:54:46"),
        end: new Date("2023-03-08T16:54:46"),
        title: "출근"
      },
      {
        start: new Date("2023-03-08T16:54:46"),
        end: new Date("2023-03-08T17:54:46"),
        title: "퇴근"
      },
    ]
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
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Test;
