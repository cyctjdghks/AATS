import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { startActions } from "../../../store/start";
import { endActions } from "../../../store/end";
// library
import axios from "axios";
import moment from "moment/moment";
// component
import Info from "./components/info/Info";
import Summary from "./components/summary/Summary";
import UserSummary from "./components/summary/UserSummary";
// css style
import classes from "./Detail.module.css";

const Detail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const userType = !state.type
  const year = moment([]).format("YYYY");
  const month = moment([]).format("M");
  const [type, setType] = useState(true);
  const [name, setName] = useState("worker");

  const userWorker = () => {
    if (userType === true) {
      setType(true);
      setName("worker");
    } else {
      setType(false);
      setName("user");
    }
  };

  const getDatas = () => {
    userWorker();
    const startUrl = `https://j8d102.p.ssafy.io/be/${name}/get/start/month`;
    const endUrl = `https://j8d102.p.ssafy.io/be/${name}/get/end/month`;
    const axiosData = type
      ? { workerId: state.data.workerId, year, month }
      : { userId: state.data.userId, year, month };
    axios
      .post(startUrl, axiosData)
      .then((response) => {
        console.log(response.data);
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

  useEffect(() => {
    getDatas();
  });

  return (
    <div className={classes.detail}>
      <Info data={state.data} type={!state.type} />
      {!state.type ? <Summary /> : <UserSummary />}
    </div>
  );
};

export default Detail;
