import { useEffect, useState } from "react";
// img
import AI from "../../assets/A.png";
import solution1 from "../../assets/Solution/solution1.png";
import solution2 from "../../assets/Solution/solution2.png";
import solution3 from "../../assets/Solution/solution3.png";
import solution4 from "../../assets/Solution/solution4.png";
// component
import SolutionItem from "./components/SolutionItem";
// css style
import classes from "./Solutions.module.css";

const Solutions = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const count1End = 200;
  const count2End = 20;
  const count3End = 1;

  useEffect(() => {
    let timer = null;
    if (count1 < count1End) {
      timer = setInterval(() => {
        setCount1((prevState) => {
          return prevState + 5;
        });
      }, 40);
    }
    return () => clearInterval(timer);
  }, [count1]);

  useEffect(() => {
    let timer = null;
    if (count2 < count2End) {
      timer = setInterval(() => {
        setCount2((prevState) => {
          return prevState + 1;
        });
      }, 75);
    }
    return () => clearInterval(timer);
  }, [count2]);

  useEffect(() => {
    let timer = null;
    if (count3 < count3End) {
      timer = setInterval(() => {
        setCount3((prevState) => {
          return prevState + 1;
        });
      }, 1);
    }
    return () => clearInterval(timer);
  }, [count3]);

  const firstColors = {
    color1: "#005FB3",
    color2: "#000000",
    color3: "#d3d3d3",
  };
  const secondColors = {
    color1: "#6F5552",
    color2: "#000000",
    color3: "#d3d3d3",
  };
  const thirdColors = {
    color1: "#4234C6",
    color2: "#000000",
    color3: "#d3d3d3",
  };
  const fourthColors = {
    color1: "#105853",
    color2: "#000000",
    color3: "#d3d3d3",
  };

  return (
    <div className={classes.pageBox}>
      <div className={classes.introBox}>
        <div className={classes.aiImgWrapper}>
          <img src={AI} alt="aiImg" className={classes.AI} />
        </div>
        <div className={classes.introTextBox}>
          <p className={classes.introTitle1}>GUMI Top AI Enterprise</p>
          <h1>AIVE</h1>
          <h2>AI Video Enterprise</h2>
          <p className={classes.introContent1}>
            저희 AIVE는 젊은 세대의 열정과 다양한 산업 분야를 반영한 통합적인
            기술을 개발합니다.
          </p>
          <p className={classes.introContent2}>
            AIVE는 4차 산업혁명의 중심인 AI기술을 Video에 접목시켜 산업 발전을
            도모하고 있습니다.
          </p>
          <p className={classes.introContent3}>
            다양한 산업분야에서 고객 맞춤형 기능을 제공해 고객사의 비즈니스
            성과를 높이는데 기여하고 있습니다.
          </p>

          <p className={classes.introContent3}>
            더욱 고도화된 기술로 더욱 확실한 시스템으로 보여드리겠습니다.
          </p>
        </div>
      </div>
      <div className={classes.countBox}>
        <h3 className={classes.countBoxTitle}>SOLUTION</h3>
        <div className={classes.countSubBox}>
          <div className={classes.count1}>
            <p>단&nbsp;&nbsp;</p>
            <h3>{count1}</h3>
            <p>&nbsp;장의 사진으로</p>
          </div>
          <div className={classes.count2}>
            <p>약&nbsp;&nbsp;</p>
            <h3>{count2}</h3>
            <p>&nbsp;만 번의 학습을 통해</p>
          </div>
          <div className={classes.count3}>
            <p>단&nbsp;&nbsp;</p>
            <h3> {count3}</h3>
            <p>&nbsp;&nbsp;초만에 객체 검출</p>
          </div>
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
          <div className={classes.solutionBox1}>
            <div className={classes.vLine1}></div>
            <SolutionItem
              number="SOLUTION1"
              solutionName="얼굴 인식 자동 출입 시스템"
              solutionSubName="#R-CNN #SSD"
              hashtag="#OpenCV #다중객체탐지"
              content="Fast R-CNN과 SSD를 적용한 차이점 분석 후, 
              TensorFlow 커스텀 모델링과 하이퍼파라미터 수정으로 학습하여 
              OpenCV에서 다중객체 탐지로 임직원 및 고객 출입을 통제합니다. 
              이를 위해 넓은 공간에서 길을 잃은 고객을 찾기 위해 
              TensorFlow Keras의 2D Pooling 레이어를 생성하고, 
              Dense 레이어에서는 SoftMax 모델을 사용하여 
              opencv를 접목한 CCTV로 단일 객체를 추적하는 시스템입니다."
              img={solution1}
              colors={firstColors}
            />
          </div>
          <div className={classes.solutionBox3}>
            <div className={classes.vLine3}></div>
            <SolutionItem
              number="SOLUTION2"
              solutionName="CCTV 통합관제"
              // solutionSubName="솔루션 서브네임"
              hashtag="#CCTV #관리 #관제"
              content="CCTV 영상을 한 번에 관제 가능하도록
              통합하여 관리 및 관제 할 수 있는 시스템입니다."
              img={solution2}
              colors={thirdColors}
            />
          </div>
          <div className={classes.solutionBox4}>
            <div className={classes.vLine4}></div>
            <SolutionItem
              number="SOLUTION3"
              solutionName="출입과 동시에 근태관리 연동"
              // solutionSubName="솔루션 서브네임"
              hashtag="#출퇴근 #시간연동"
              content="출입과 출퇴근 시간이 연동되어 저장됩니다.
              한 번에 간편하게 처리 가능합니다."
              img={solution3}
              colors={fourthColors}
            />
          </div>
          <div className={classes.solutionBox2}>
            <div className={classes.vLine2}></div>
            <SolutionItem
              number="SOLUTION4"
              solutionName="미아찾기 (개발 예정)"
              solutionSubName="#Keras Poolling 2D 레이어"
              hashtag="#SoftMax #Opencv"
              content="넓은 공간에서 길을 잃은 고객을 찾기 위해
              tensorflow Keras Pooling 2D 레이어 생성, 
              Dense(신경망구조)는 SoftMax 모델을 사용하여 
              업로드와 동시에 학습을 진행해 
              opencv를 접목시킨 CCTV로 단일객체 추적하는 시스템입니다."
              img={solution4}
              colors={secondColors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
