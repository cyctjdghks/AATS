import classes from "./AboutUs.module.css";
import tmpDeveloper from "../../assets/AboutUs/tmp_developer.png";
import AboutUsDeveloperLeft from "./aboutusdeveloper/AboutUsDeveloperLeft";
import AboutUsDeveloperRight from "./aboutusdeveloper/AboutUsDeveloperRight";
import kang from "../../assets/AboutUs/강모현.png";
import hwan from "../../assets/AboutUs/박성환.png";
import park from "../../assets/AboutUs/박재현.png";
import yang from "../../assets/AboutUs/양서정.png";
import byeong from "../../assets/AboutUs/이병수.png";
import jong from "../../assets/AboutUs/최종현.png";

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
      <div className={classes.developerBox}>
        <div className={classes.developerImgBox}>
          <img src={tmpDeveloper} alt="" className={classes.developerImg} />
        </div>
        <div className={classes.developerTextBox}>
          <h1 className={classes.pageName}>Here, A-IVE Developer</h1>
          <p className={classes.pageSubName}>AIVE 개발자로 일한다는 것</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={classes.introduceBox}>
        <p>여기, 6명의 A-IVE 개발자가 있습니다.</p>
        <p>
          자동 출결 및 추적 시스템(Automatic Attendance and Tracking System)을
          개발해
        </p>
        <p>7주간 고생한 AIVE의 개발자를 확인해보세요</p>
      </div>
      <br />
      <br />
      <br />
      <div className={classes.developerIntroduceBox}>
        <div className={classes.leftBox}>
          <AboutUsDeveloperLeft
            img={kang}
            name="강모현"
            role="AI 담당"
            text="내용내용내용내용내용내용"
          />
          <AboutUsDeveloperLeft
            img={hwan}
            name="박성환"
            role="BE 담당"
            text="내용내용내용내용내용내용"
          />
          <AboutUsDeveloperLeft
            img={byeong}
            name="이병수"
            role="FE 담당"
            text="내용내용내용내용내용내용"
          />
        </div>
        <div className={classes.vLine}></div>
        <div className={classes.rightBox}>
          <AboutUsDeveloperRight
            img={park}
            name="박재현"
            role="BE 담당"
            text="내용내용내용내용내용내용"
          />
          <AboutUsDeveloperRight
            img={jong}
            name="최종현"
            role="BE 담당"
            text="내용내용내용내용내용내용"
          />
          <AboutUsDeveloperRight
            img={yang}
            name="양서정"
            role="FE 담당"
            text="내용내용내용내용내용내용"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
