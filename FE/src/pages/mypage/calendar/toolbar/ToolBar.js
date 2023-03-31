import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { startActions } from "../../../../store/start";
import { endActions } from "../../../../store/end";

import classes from "./ToolBar.module.css";

const ToolBar = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const { date } = props;

  const navigate = (action) => {
    props.onNavigate(action);
  };

  const numToStr = (data) => {
    let tmp = data.toString();
    return tmp;
  };

  const getDatas = () => {
    const startUrl = "https://j8d102.p.ssafy.io/be/worker/get/start/month";
    const endUrl = "https://j8d102.p.ssafy.io/be/worker/get/end/month";
    const axiosData = {
      workerId: id,
      year: numToStr(date.getFullYear()),
      month: numToStr(date.getMonth() + 1),
    };
    console.log(axiosData);
    axios
      .post(startUrl, axiosData)
      .then((response) => {
        dispatch(startActions.getData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post(endUrl, axiosData)
      .then((response) => {
        dispatch(endActions.getData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.toolbar}>
      <div className={classes.rbcToolbar}>
        <span className={classes.rbcBtnGroup}>
          <button type="button" onClick={navigate.bind(null, "PREV")}>
            이전
          </button>
          <p
            className={classes.rbcToolbarLabel}
            id="month"
          >{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</p>
          <button type="button" onClick={navigate.bind(null, "NEXT")}>
            다음
          </button>
        </span>
      </div>
      <div className={classes.rbcToolbar}>
        <span className={classes.rbcBtnGroup}>
          <button type="button" onClick={navigate.bind(null, "TODAY")}>
            오늘
          </button>
        </span>
      </div>
    </div>
  );
};

export default ToolBar;
