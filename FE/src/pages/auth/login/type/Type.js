import { useNavigate } from "react-router-dom";

import organization from "../../../../assets/auths/organization.png";
import user from "../../../../assets/auths/user.png";
import worker from "../../../../assets/auths/worker.png";

import classes from "./Type.module.css";

const Type = () => {
  const navigate = useNavigate();

  // 숫자 증가 애니메이션
  // count1
  let countBox = document.querySelector("#count1"), count = 0;

  let counting = setInterval(function () {
    let countBox = document.querySelector("#count1")
    if (count === 51) {
      clearInterval(counting);
      return false;
    }
    count += 1;
    countBox.innerHTML = new Intl.NumberFormat().format(count);

  }, 10);

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
            <h3 id="count1"></h3>
            <p>&nbsp;&nbsp;기관</p>
        </div>
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
      <h3 className={classes.pageTitle}>로그인 유형 선택</h3>
      <p className={classes.pageTitle2}>당신의 유형을 선택해 로그인해 주세요</p>
      <div className={classes.typeBox}>
        <div>
        <img src={organization} alt="" className={classes.organization} onClick={toOrganizationLogin}/>
        <div>
        <p className={classes.p1}>Organization</p>
        <p className={classes.p2}>기관</p>
        </div>
        </div>
        <div>
        <img src={user} alt="" className={classes.user} onClick={toUserLogin}/>
        <div>
        <p className={classes.p1}>User</p>
        <p className={classes.p2}>회원</p>
        </div>
        </div>
        <div>
        <img src={worker} alt="" className={classes.worker} onClick={toWorkerLogin}/>
        <div>
        <p className={classes.p1}>Worker</p>
        <p className={classes.p2}>근무자</p>
        </div>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Type;
