import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import classes from "./Type.module.css";

const Type = () => {
  const navigate = useNavigate();

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
      <h3>등록 유형</h3>
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
      </div>
    </div>
  );
};

export default Type;
