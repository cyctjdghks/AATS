import "react-big-calendar/lib/css/react-big-calendar.css";
import classes from "./ToolBar.module.css"

const ToolBar = (props) => {
  const { date } = props;

  const navigate = (action) => {
    props.onNavigate(action);
  };

  return (
    <div className={classes.toolbar}>
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={navigate.bind(null, "PREV")}>
            이전
          </button>
          <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${
            date.getMonth() + 1
          }월`}</span>
          <button type="button" onClick={navigate.bind(null, "NEXT")}>
            다음
          </button>
        </span>
      </div>
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={navigate.bind(null, "TODAY")}>
            오늘
          </button>
        </span>

      </div>

    </div>
  );
};

export default ToolBar;
