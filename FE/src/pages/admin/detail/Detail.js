import Info from "./components/info/Info";
import Summary from "./components/summary/Summary";
import UserSummary from "./components/summary/UserSummary";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { useEffect } from "react";
import axios from "axios";
import { startActions } from "../../../store/start";
import { endActions } from "../../../store/end";

import classes from "./Detail.module.css";

const Detail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const year = moment([]).format("YYYY");
  const month = moment([]).format("M");

  const getDatas = () => {
    const startUrl = "https://j8d102.p.ssafy.io/be/worker/get/start/month";
    const endUrl = "https://j8d102.p.ssafy.io/be/worker/get/end/month";
    const axiosData = {
      workerId: id,
      year,
      month,
    };
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

  useEffect(() => {
    if (!state.type) {
      getDatas();
    }
  });

  return (
    <div className={classes.detail}>
      <Info data={state.data} type={!state.type} />
      {!state.type ? <Summary /> : <UserSummary />}
    </div>
  );
};

export default Detail;
