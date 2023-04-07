import Info from "../components/info/Info";
import Summary from "../components/summary/Summary";
import moment from "moment/moment";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { startActions } from "../../../store/start";
import { endActions } from "../../../store/end";
import { useEffect } from "react";
// inport css style
import classes from "./MyInfo.module.css";
import { useState } from "react";
import UserSummary from "../components/summary/UserSummary";

const MyInfo = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.userType);
  const id = useSelector((state) => state.auth.id);
  const year = moment([]).format("YYYY");
  const month = moment([]).format("M");
  const [type, setType] = useState(true);
  const [name, setName] = useState("worker");

  const userWorker = () => {
    if (userType === 1) {
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
      ? { workerId: id, year, month }
      : { userId: id, year, month };
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
      {type ? <Summary /> : <UserSummary />}
    </div>
  );
};

export default MyInfo;
