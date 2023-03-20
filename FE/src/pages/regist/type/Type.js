import { useNavigate } from "react-router-dom";

import classes from "./Type.module.css";

import user from '../../../assets/regist/user.png';
import worker from '../../../assets/regist/worker.png';

const Type = () => {
  const navigate = useNavigate();

  const toUserRegist = (event) => {
    event.preventDefault();
    navigate('/regist/user');
  }

  const toWorkerRegist = (event) => {
    event.preventDefault();
    navigate('/regist/worker')
  }

  return(
    <div className={classes.pageBox}>
      <h3>등록 유형</h3>
      <p className={classes.pageText}>회원/근무자 중 등록하고 싶은 유형을 선택해 주세요</p>
      <div className={classes.typeBox}>
        <div className={classes.typeOne}>
        <img src={user} alt="회원" onClick={toUserRegist}/>
          <p>회원</p>
        </div>
        <div className={classes.typeTwo}>
          <img src={worker} alt="근무자" onClick={toWorkerRegist}/>
          <p>근무자</p>
        </div>
      </div>
    </div>
  )
} 

export default Type;