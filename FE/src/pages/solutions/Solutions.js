import SolutionItem from "./components/SolutionItem";

import classes from "./Solutions.module.css";

import AI from "../../assets/A.png";
import solution1 from "../../assets/Solution/solution1.png";
import { useEffect, useState } from "react";

const Solutions = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const count1End = 5;
  const count2End = 42;
  const count3End = 6;

  useEffect(() => {
    let timer = null;
    if (count1 < count1End) {
      timer = setInterval(() => {
        setCount1((prevState) => {
          return prevState + 1;
        });
      }, 84);
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
      }, 10);
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
      }, 70);
    }
    return () => clearInterval(timer);
  }, [count3]);

  const firstColors = {
    color1: "#005FB3",
    color2: "#3D99F5F5",
    color3: "#d3d3d3",
  };
  const secondColors = {
    color1: "#3A83D3",
    color2: "#6D9AE3F5",
    color3: "#d3d3d3",
  };
  const thirdColors = {
    color1: "#4234C6",
    color2: "#9A8CF9F5",
    color3: "#d3d3d3",
  };
  const fourthColors = {
    color1: "#8156F4",
    color2: "#9077FDF5",
    color3: "#d3d3d3",
  };

  return (
    <div className={classes.pageBox}>
      <div className={classes.introBox}>
        <img src={AI} alt="aiImg" className={classes.AI} />
        <div className={classes.introTextBox}>
          <p className={classes.introTitle1}>Global Top AI Solution</p>
          <h1>AATS</h1>
          <h2>SOLUTION</h2>
          <p className={classes.introContent1}>
            저희 AIVE는 젊은 세대의 열정과 다양한 문화를 반영한 통합적인 기술을
            개발합니다.
          </p>
          <p className={classes.introContent2}>
            AATS는 혁신을 선도하는 대한민국 구미에서, 사용자 경험에 기반한
            어쩌구 저쩌구 추구합니다.
          </p>
          <p className={classes.introContent3}>
            AATS는 혁신을 선도하는 대한민국 구미에서, 사용자 경험에 기반한
            어쩌구 저쩌구 추구합니다.
          </p>
          <p className={classes.introContent3}>
            AATS는 혁신을 선도하는 대한민국 구미에서, 사용자 경험에 기반한
            어쩌구 저쩌구 추구합니다.
          </p>
        </div>
      </div>
      <div className={classes.countBox}>
        <h3 className={classes.countBoxTitle}>HISTORY</h3>
        <div className={classes.countSubBox}>
          <div className={classes.count1}>
            <p>총&nbsp;&nbsp;</p>
            <h3>{count1}</h3>
            <p>&nbsp;&nbsp;기술</p>
          </div>
          <div className={classes.count2}>
            <p>단&nbsp;&nbsp;</p>
            <h3>{count2}</h3>
            <p>&nbsp;&nbsp;일</p>
          </div>
          <div className={classes.count3}>
            <p>단&nbsp;&nbsp;</p>
            <h3> {count3}</h3>
            <p>&nbsp;&nbsp;인원</p>
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
              solutionName="솔루션 네임"
              solutionSubName="솔루션 서브네임"
              hashtag="#솔루션"
              content="이 기술은 어쩌고 저쩌고 입니다. 
              어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고
              어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고 어쩌고 저쩌고
              어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고
              어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고 어쩌고 저쩌고
              어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고
              어쩌고 저쩌고 어쩌고 저쩌고어쩌고 저쩌고 어쩌고 저쩌고"
              img={solution1}
              colors={firstColors}
            />
          </div>
          <div className={classes.solutionBox2}>
            <div className={classes.vLine2}></div>
            <SolutionItem
              number="SOLUTION2"
              solutionName="솔루션 네임"
              solutionSubName="솔루션 서브네임"
              hashtag="#솔루션"
              img={solution1}
              colors={secondColors}
            />
          </div>
          <div className={classes.solutionBox3}>
            <div className={classes.vLine3}></div>
            <SolutionItem
              number="SOLUTION3"
              solutionName="솔루션 네임"
              solutionSubName="솔루션 서브네임"
              hashtag="#솔루션"
              img={solution1}
              colors={thirdColors}
            />
          </div>
          <div className={classes.solutionBox4}>
            <div className={classes.vLine4}></div>
            <SolutionItem
              number="SOLUTION4"
              solutionName="솔루션 네임"
              solutionSubName="솔루션 서브네임"
              hashtag="#솔루션"
              img={solution1}
              colors={fourthColors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
