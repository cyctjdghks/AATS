import { useNavigate } from "react-router-dom";

import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import classes from "./Type.module.css";

const Type = () => {
  const navigate = useNavigate();

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
      <h3>로그인</h3>
      <p className={classes.pageText}>
        당신의 유형을 선택해 로그인해 주세요
      </p>

      <div className={classes.typeBox}>
        <div className={classes.typeOne}>
          <CameraOutdoorIcon
            onClick={toOrganizationLogin}
            sx={{ fontSize: 140 }}
            className={classes.organization}
            // color="primary"
          />
          <p>기관</p>
        </div>
        <div className={classes.typeTwo}>
          <PersonIcon
            onClick={toUserLogin}
            sx={{ fontSize: 140 }}
            className={classes.user}
            // color="primary"
          />
          <p>회원</p>
        </div>
        <div className={classes.typeThree}>
          <DirectionsRunIcon
            onClick={toWorkerLogin}
            sx={{ fontSize: 140 }}
            className={classes.worker}
            // color="primary"
          />
          <p>근무자</p>
        </div>
      </div>
      <div className={classes.signupBox}>
        <p>회원가입 하러 가기</p>
        <ExitToAppIcon
        className={classes.signupImg}
        />
      </div>
    </div>
  );
};

export default Type;
