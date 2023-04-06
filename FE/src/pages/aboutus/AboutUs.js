// img
import tmpDeveloper from "../../assets/AboutUs/tmp_developer.png";
import kang from "../../assets/AboutUs/강모현.png";
import hwan from "../../assets/AboutUs/박성환.png";
import park from "../../assets/AboutUs/박재현.png";
import yang from "../../assets/AboutUs/양서정.png";
import byeong from "../../assets/AboutUs/이병수.png";
import jong from "../../assets/AboutUs/최종현.png";
// component
import AboutUsDeveloperLeft from "./aboutusdeveloper/AboutUsDeveloperLeft";
import AboutUsDeveloperRight from "./aboutusdeveloper/AboutUsDeveloperRight";
// css style
import classes from "./AboutUs.module.css";

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
            name="강모현/대표"
            role="AI 개발"
            text="AIVE의 대표로서 영업 및 운영을 담당하며, AI 시스템인 AATS를 개발하고 있습니다."
          />
          <AboutUsDeveloperLeft
            img={hwan}
            name="박성환/인재 발굴팀 및 백엔드 팀장"
            role="백엔드 개발"
            text="백엔드 인재 발굴 팀장으로서 백엔드 신입 사원을 교육하고 있으며, 백엔드 팀장 또한 겸임하고 있습니다."
          />
          <AboutUsDeveloperLeft
            img={byeong}
            name="이병수/인재 발굴팀 및 프론트엔드 팀장"
            role="프론트엔드 개발"
            text="프론트엔드 인재 발굴 팀장으로서 프론트엔드 신입 사원을 교육하고 있으며, 프론트엔드 팀장 또한 겸임하고 있습니다."
          />
        </div>
        <div className={classes.vLine}></div>
        <div className={classes.rightBox}>
          <AboutUsDeveloperRight
            img={park}
            name="박재현/홍보 마케팅 팀장"
            role="백엔드 개발"
            text="홍보 마케팅 팀장으로서 UCC 기획 및 촬영과 편집, 
            PPT제작, 사업 발표 등의 업무를 수행하고 있으며 백엔드 개발 또한 겸임하고 있습니다."
          />
          <AboutUsDeveloperRight
            img={jong}
            name="최종현/백엔드 개발팀"
            role="백엔드 개발"
            text="백엔드 API 개발을 주로 담당하며 가장 최근에 입사한 막내 사원입니다."
          />
          <AboutUsDeveloperRight
            img={yang}
            name="양서정/UI.UX팀 팀장"
            role="프론트엔드 개발"
            text="UI/UX를 사용자 입장으로 사용자의 경험을 바탕으로 작성하며 프론트엔드 개발 또한 담당 중입니다."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
