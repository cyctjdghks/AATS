import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";

import classes from "./Welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  const id = useSelector((state) => state.auth.id);

  const toSearch = () => {
    navigate("/admin/search");
  };
  const toRegist = () => {
    navigate("/regist");
  };
  const cctvUrl = "https://j8d102.p.ssafy.io/ai"
  const toCCTV = () => {
    window.open(cctvUrl);
  };
  return (
    <div className={classes.welcome}>
      <div className={classes.topBox}>
        <h1> Welcome {id} Manager</h1>
        <p>수행할 작업을 선택해주세요</p>
      </div>
      <div className={classes.bottomBox}>
        <div className={classes.chooseBox}>
          <PersonSearchIcon sx={{ fontSize: 80 }} onClick={toSearch} />
          <p>SEARCH</p>
        </div>
        <div className={classes.chooseBox}>
          <HowToRegIcon sx={{ fontSize: 80 }} onClick={toRegist} />
          <p>REGIST</p>
        </div>
        <div className={classes.chooseBox}>
          <CameraOutdoorIcon sx={{ fontSize: 80 }} onClick={toCCTV} />
          <p>CCTV</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
