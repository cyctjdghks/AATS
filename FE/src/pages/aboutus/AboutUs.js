import classes from "./AboutUs.module.css";
import tmpDeveloper from '../../assets/AboutUs/tmp_developer.png'
import AboutUsDeveloperLeft from "./aboutusdeveloper/AboutUsDeveloperLeft";
import AboutUsDeveloperRight from "./aboutusdeveloper/AboutUsDeveloperRight";


const AboutUs = () => {
  return (
    <div>
      <div className={classes.developerBox}>
        <div className={classes.developerImgBox}>
          <img src={tmpDeveloper} alt="" className={classes.developerImg}/>
        </div>
        <div className={classes.developerTextBox}>
          <h1 className={classes.pageName}>Here, a-IVE Developer</h1>
          <p className={classes.pageSubName}>AATS 개발자로 일한다는 것</p>
        </div>
      </div>
      <br /><br /><br />
      <div className={classes.introduceBox}>
        <p>여기, 6명의 a-IVE 개발자가 있습니다.</p>
        <p>자동 출결 및 추적 시스템(Automatic Attendance and Tracking System)을 개발해</p>
        <p>7주간 고생한 AATS의 개발자를 확인해보세요</p>
      </div>
      <br /><br /><br />
      <div className={classes.developerIntroduceBox}>
        <div>
          <AboutUsDeveloperLeft
            name = "강모현"
            role = "AI 담당"
            text = "내용내용내용내용내용내용"
          />
          <AboutUsDeveloperLeft
            name = "박성환"
            role = "BE 담당"
            text = "내용내용내용내용내용내용"
          />
          <AboutUsDeveloperLeft
            name = "이병수"
            role = "FE 담당"
            text = "내용내용내용내용내용내용"
          />
        </div>
        <div className={classes.vLine}></div>
        <div>
          <AboutUsDeveloperRight
            name = "박재현"
            role = "BE 담당"
            text = "내용내용내용내용내용내용"
          />
          <AboutUsDeveloperRight
            name = "최종현"
            role = "BE 담당"
            text = "내용내용내용내용내용내용"
          />
          <AboutUsDeveloperRight
            name = "양서정"
            role = "FE 담당"
            text = "내용내용내용내용내용내용"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
