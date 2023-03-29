import { useState, useEffect} from "react"

import { useNavigate } from "react-router-dom";

import organization from "../../../../assets/auths/organization.png";
import user from "../../../../assets/auths/user.png";
import worker from "../../../../assets/auths/worker.png";

import classes from "./Type.module.css";

const Type = () => {
  const navigate = useNavigate();

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const count1End = 4;
  const count2End = 60;
  const count3End = 100;

  useEffect(() => {
    let timer = null;
    if (count1 < count1End) {
      timer = setInterval(() => {
        setCount1((prevState) => {
          return prevState + 1;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [count1]);

  useEffect(() => {
    let timer = null;
    if (count2 < count2End) {
      timer = setInterval(() => {
        setCount2((prevState) => {
          return prevState + 1;
        });
      }, 10);
    }
    return () => clearInterval(timer);
  }, [count2]);

  useEffect(() => {
    let timer = null;
    if (count3 < count3End) {
      timer = setInterval(() => {
        setCount3((prevState) => {
          return prevState + 1;
        });
      }, 6);
    }
    return () => clearInterval(timer);
  }, [count3]);



  const toOrganizationLogin = (event) => {
    event.preventDefault();
    navigate("/auth/login/organization");
  };
  const toUserLogin = (event) => {
    event.preventDefault();
    navigate("/auth/login/user");
  };

  const toWorkerLogin = (event) => {
    event.preventDefault();
    navigate("/auth/login/worker");
  };

  return (
    <div className={classes.pageBox}>
      <div className={classes.topBox}>
        <h3 className={classes.pageName}>LOGIN</h3>
        <div className={classes.countSubBox}>
          <div className={classes.count1}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count1}</h3>
            <p>&nbsp;&nbsp;기관</p>
          </div>
          <div className={classes.count2}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count2}</h3>
            <p>&nbsp;&nbsp;근무자</p>
          </div>
          <div className={classes.count3}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count3}</h3>
            <p>&nbsp;&nbsp;회원</p>
          </div>
        </div>
      </div>
      <div className={classes.pageSubBox}>
        <h3 className={classes.pageTitle}>로그인 유형 선택</h3>
        <p className={classes.pageTitle2}>
          당신의 유형을 선택해 로그인해 주세요
        </p>
        <div className={classes.typeBox}>
          <div className={classes.detailBox}>
            <img
              src={organization}
              alt=""
              className={classes.organization}
              onClick={toOrganizationLogin}
            />
            <p className={classes.p1}>Organization</p>
            <p className={classes.p2}>기관</p>
          </div>
          <div className={classes.detailBox}>
            <img
              src={user}
              alt=""
              className={classes.user}
              onClick={toUserLogin}
            />
            <p className={classes.p1}>User</p>
            <p className={classes.p2}>회원</p>
          </div>
          <div className={classes.detailBox}>
            <img
              src={worker}
              alt=""
              className={classes.worker}
              onClick={toWorkerLogin}
            />
            <p className={classes.p1}>Worker</p>
            <p className={classes.p2}>근무자</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
