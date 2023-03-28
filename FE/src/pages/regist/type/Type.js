import { useNavigate } from "react-router-dom";

import user from "../../../assets/auths/user.png";
import worker from "../../../assets/auths/worker.png";

// import PersonIcon from "@mui/icons-material/Person";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import classes from "./Type.module.css";

const Type = () => {
  const navigate = useNavigate();

  //숫자 증가 애니메이션
  // count2
  let countBox2 = document.querySelector("#count2"),
    count2 = 0;

  let counting2 = setInterval(function () {
    let countBox2 = document.querySelector("#count2")
    if (count2 === 64) {
      clearInterval(counting2);
      return false;
    }
    count2 += 1;
    countBox2.innerHTML = new Intl.NumberFormat().format(count2);
  }, 10);

  // 숫자 증가 애니메이션
  // count3
  let countBox3 = document.querySelector("#count3"), count3 = 0
  let counting3 = setInterval(function () {
    let countBox3 = document.querySelector("#count3")
    if (count3 === 71) {
      clearInterval(counting3);
      return false;
    }
    count3 += 1;
    countBox3.innerHTML = new Intl.NumberFormat().format(count3);
  }, 10);

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
            <h3 id="count2"></h3>
            <p>&nbsp;&nbsp;회원</p>
        </div>
        <div className={classes.count3}>
        <p>총&nbsp;&nbsp;</p>
            <h3 id="count3"></h3>
            <p>&nbsp;&nbsp;회원</p>
        </div>
      </div>
      </div>
      <div className={classes.pageSubBox}>
      <h3 className={classes.pageTitle}>등록 유형 선택</h3>
      <p className={classes.pageTitle2}>회원/근무자 중 유형을 선택해 등록해주세요</p>
      <div className={classes.typeBox}>
        <div>
        <img src={user} alt="" className={classes.user} onClick={toUserRegist}/>
        <div>
        <p className={classes.p1}>User</p>
        <p className={classes.p2}>회원</p>
        </div>
        </div>
        <div>
        <img src={worker} alt="" className={classes.worker} onClick={toWorkerRegist}/>
        <div>
        <p className={classes.p1}>Worker</p>
        <p className={classes.p2}>근무자</p>
        </div>
        </div>
        
      </div>
      </div>
      {/* <h3>등록 유형</h3>
      <p className={classes.pageText}>
        회원/근무자 중 등록하고 싶은 유형을 선택해 주세요
      </p>
      <div className={classes.typeBox}>
        <div className={classes.typeOne}>
          <PersonIcon
            onClick={toUserRegist}
            sx={{ fontSize: 140 }}
            className={classes.user}
            color="action"
          />
          <p>회원</p>
        </div>
        <div className={classes.typeTwo}>
          <DirectionsRunIcon
            onClick={toWorkerRegist}
            sx={{ fontSize: 140 }}
            className={classes.worker}
            color="action"
          />
          <p>근무자</p>
        </div>
      </div> */}
    </div>
  );
};

export default Type;
