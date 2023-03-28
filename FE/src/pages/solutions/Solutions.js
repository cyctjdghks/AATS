import SolutionItem from "./components/SolutionItem";

import classes from "./Solutions.module.css";

import AI from "../../assets/A.png";
import solution1 from "../../assets/Solution/solution1.png";

const Solutions = () => {
  // 숫자 증가 애니메이션
  // count1
  let countBox = document.querySelector("#count1"), count = 0;

  let counting = setInterval(function () {
    let countBox = document.querySelector("#count1")
    if (count === 5) {
      clearInterval(counting);
      return false;
    }
    count += 1;
    countBox.innerHTML = new Intl.NumberFormat().format(count);
  }, 150);

  //숫자 증가 애니메이션
  // count2
  let countBox2 = document.querySelector("#count2"),
    count2 = 0;

  let counting2 = setInterval(function () {
    let countBox2 = document.querySelector("#count2")
    if (count2 === 49) {
      clearInterval(counting2);
      return false;
    }
    count2 += 1;
    countBox2.innerHTML = new Intl.NumberFormat().format(count2);
  }, 15);

  // 숫자 증가 애니메이션
  // count3
  let countBox3 = document.querySelector("#count3"), count3 = 0
  let counting3 = setInterval(function () {
    let countBox3 = document.querySelector("#count3")
    if (count3 === 6) {
      clearInterval(counting3);
      return false;
    }
    count3 += 1;
    countBox3.innerHTML = new Intl.NumberFormat().format(count3);
  }, 100);

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
            <h3 id="count1">5</h3>
            <p>&nbsp;&nbsp;기술</p>
          </div>
          <div className={classes.count2}>
            <p>단&nbsp;&nbsp;</p>
            <h3 id="count2">49</h3>
            <p>&nbsp;&nbsp;일</p>
          </div>
          <div className={classes.count3}>
            <p>단&nbsp;&nbsp;</p>
            <h3 id="count3">6</h3>
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
              content="이 기술은 어쩌고 저쩌고 입니다. "
              img={solution1}
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
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Solutions;
