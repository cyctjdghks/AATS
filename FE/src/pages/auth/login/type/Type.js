import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessIcon from "@mui/icons-material/Business";

import classes from "./Type.module.css";

const Type = () => {
  const navigate = useNavigate();

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const count1End = useSelector((state) => state.auth.aiveData.organization)
  const count2End = useSelector((state) => state.auth.aiveData.user)
  const count3End = useSelector((state) => state.auth.aiveData.worker)

  const lcm = (num1, num2) => {
    return (num1 * num2) / gcd(num1, num2);
  }
  
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    } else {
      return gcd(num2, num1 % num2);
    }
  }
  
  const lcm3 = (num1, num2, num3) => {
    return lcm(lcm(num1, num2), num3);
  }

  const intervalTime = lcm3(count1End, count2End, count3End)

  useEffect(() => {
    let timer = null;
    if (count1 < count1End) {
      timer = setInterval(() => {
        setCount1((prevState) => {
          return prevState + 1;
        });
      }, (intervalTime/count1End) *10);
    }
    return () => clearInterval(timer);
  }, [count1, count1End, intervalTime]);

  useEffect(() => {
    let timer = null;
    if (count2 < count2End) {
      timer = setInterval(() => {
        setCount2((prevState) => {
          return prevState + 1;
        });
      }, (intervalTime/count2End)* 10);
    }
    return () => clearInterval(timer);
  }, [count2, count2End, intervalTime]);

  useEffect(() => {
    let timer = null;
    if (count3 < count3End) {
      timer = setInterval(() => {
        setCount3((prevState) => {
          return prevState + 1;
        });
      },( intervalTime/count3End)*10);
    }
    return () => clearInterval(timer);
  }, [count3, count3End, intervalTime]);

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
          <div className={classes.count3}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count3}</h3>
            <p>&nbsp;&nbsp;회원</p>
          </div>
          <div className={classes.count2}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count2}</h3>
            <p>&nbsp;&nbsp;근무자</p>
          </div>
          <div className={classes.count1}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count1}</h3>
            <p>&nbsp;&nbsp;기관</p>
          </div>
        </div>
      </div>
      <div className={classes.pageSubBox}>
        <h3 className={classes.pageTitle}>로그인 유형 선택</h3>
        <p className={classes.pageTitle2}>
          당신의 유형을 선택해 로그인해 주세요
        </p>
        <div className={classes.hrLine}></div>

        <div className={classes.typeBox}>
          <div className={classes.detailBox} onClick={toUserLogin}>
            <PersonIcon className={classes.PersonIcon} fontSize="80px" />
            <p className={classes.p1}>User</p>
            <p className={classes.p2}>회원</p>
          </div>
          <div className={classes.detailBox} onClick={toWorkerLogin}>
            <GroupsIcon className={classes.GroupsIcon} fontSize="80px" />
            <p className={classes.p1}>Worker</p>
            <p className={classes.p2}>근무자</p>
          </div>
          <div className={classes.detailBox} onClick={toOrganizationLogin}>
            <BusinessIcon className={classes.BusinessIcon} fontSize="80px" />
            <p className={classes.p1}>Organization</p>
            <p className={classes.p2}>기관</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
