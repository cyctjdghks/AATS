import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from '@mui/icons-material/Groups';

import classes from "./Type.module.css";
import { useSelector } from "react-redux";

const Type = () => {
  const navigate = useNavigate();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const count1End = useSelector((state) => state.auth.users).length;
  const count2End = useSelector((state) => state.auth.workers).length;

  useEffect(() => {
    let timer = null;
    if (count1 < count1End) {
      timer = setInterval(() => {
        setCount1((prevState) => {
          return prevState + 1;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [count1, count1End]);

  useEffect(() => {
    let timer = null;
    if (count2 < count2End) {
      timer = setInterval(() => {
        setCount2((prevState) => {
          return prevState + 1;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [count2, count2End]);

  const toUserRegist = (event) => {
    event.preventDefault();
    navigate("/regist/user");
  };

  const toWorkerRegist = (event) => {
    event.preventDefault();
    navigate("/regist/worker");
  };

  return (
    <div className={classes.pageBox}>
      <div className={classes.topBox}>
        <h3 className={classes.pageName}>REGIST</h3>
        <div className={classes.countSubBox}>
          <div className={classes.count2}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count1}</h3>
            <p>&nbsp;&nbsp;회원</p>
          </div>
          <div className={classes.count3}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count2}</h3>
            <p>&nbsp;&nbsp;근무자</p>
          </div>
        </div>
      </div>
      <div className={classes.pageSubBox}>
        <h3 className={classes.pageTitle}>등록 유형 선택</h3>
        <p className={classes.pageTitle2}>
          회원/근무자 중 유형을 선택해 등록해주세요
        </p>
        <div className={classes.hrLine}></div>
        <div className={classes.typeBox}>
          <div className={classes.detailBox} onClick={toUserRegist}>
            <PersonIcon 
            fontSize="80px"
            className={classes.PersonIcon} />
            
            <p className={classes.p1}>User</p>
            <p className={classes.p2}>회원</p>
          </div>
          <div className={classes.detailBox} onClick={toWorkerRegist}>
            <GroupsIcon
            fontSize="80px"
            className={classes.GroupsIcon}
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
