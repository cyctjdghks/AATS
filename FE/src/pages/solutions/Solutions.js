import classes from "./Solution.module.css";

import solution1 from "../../assets/Solution/solution1.png";
import AI from "../../assets/A.png";

const Solutions = () => {
  return (
    <div className={classes.pageBox}>
      <div className={classes.intoroBox}>
        <img src={AI} alt="" className={classes.AI}/>
        <div className={classes.introTextBox}>
          <p>Global Top AI Solution</p>
          <h1>AATS</h1>
          <h2>SOLUTION</h2>
          <p className={classes.introContent1}>저희 AIVE는 젊은 세대의 열정과 다양한 문화를 반영한 통합적인 기술을 개발합니다.</p>
          <p></p>
        </div>
      </div>
      <div className={classes.mainBox}>
        <div className={classes.titleBox}>
          <h1>AATS</h1>
          <h2>Automatic Attendance and Tracking System</h2>
          <h3>자동 출결 및 추적 시스템</h3>
          <hr className={classes.hrTop} />
        </div>
        <div>
          <hr className={classes.vLine} />
          <div className={classes.solutionItem}>
            <div>
              <h3>SOLUTION1</h3>
              <p>솔루션</p>
              <p>서브 솔루션</p>
              <p>#솔루션</p>
            </div>
            <div>
              <img src={solution1} alt="" className={classes.solution1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
