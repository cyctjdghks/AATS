import Info from "../components/info/Info";
import Summary from "../components/summary/Summary";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { startActions } from "../../../store/start";
import { endActions } from "../../../store/end";
import { useEffect } from "react";
// inport css style
import classes from "./MyInfo.module.css"

const MyInfo = () => {
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
    getDatas();
  });

  return (
    <div className={classes.myinfo}>
      <Info />
      <Summary />
    </div>
  );
};

export default MyInfo;
