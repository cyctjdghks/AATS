import classes from "./Home.module.css";
import NewsItem from "./components/news/NewsItem.js";
import { useState, useRef, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import tmpNew1 from "../../assets/News/tmpNew1.png";
import tmpVideo from "../../assets/News/tmpVideo.png";
import solution1 from "../../assets/Home/solution1.png";
import solution2 from "../../assets/Home/solution2.png";
import solution3 from "../../assets/Home/solution3.png";

// import A from "../../assets/A.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlide = 2;

  const nextSlide = () => {
    // 슬라이드가 최대 개수를 넘어가면 초기화
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    // 0번째 슬라이드에서 뒤로 가면 제일 뒤의 슬라이드로 이동
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  console.log(currentSlide);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    // 백틱을 사용하여 슬라이드로 이동하는 애니메이션 구현.
  }, [currentSlide]);

  return (
    <div className={classes.home}>
      <div className={classes.topPage}>
        <h3>Top Box</h3>
      </div>
      <div className={classes.solutionPage}>
        <h3 className={classes.NewsTitle}>SOLUTION</h3>
        <hr className={classes.hrLine} />
        <div className={classes.solutionBox}>
          <div className={classes.solutionLeft}>
            <img src={solution1} alt="솔루션1" className={classes.solution1} />
            <div className={classes.titleBox1}>
              <p className={classes.solutionTitle1}>
                얼굴 인식 자동 출입 시스템
              </p>
              <p className={classes.solutionSubTitle1}>
                Fast R-CNN과 SSD를 서로 적용하여 차이점을 분석한 후 선정한
                모델을 tensorFlow 커스텀 모델링, 하이퍼파라미터 수정을 통한 학습
                후 OpenCV 환경에서 다중 객체 탐지를 함으로써 임직원 및 고객의
                출입 통제가능
              </p>
            </div>
          </div>
          <div className={classes.solutionRight}>
            <div className={classes.solutionBox2}>
              <img
                src={solution2}
                alt="솔루션2"
                className={classes.solution2}
              />
              <p className={classes.solutionTitle2}>CCTV 통합관제</p>
              <p className={classes.solutionSubTitle2}>
                CCTV 영상을 한 번에 관제 가능하도록 통합하여 관리 및 관제 할 수
                있는 시스템
              </p>
            </div>
            <div className={classes.solutionBox2}>
              <img
                src={solution3}
                alt="솔루션3"
                className={classes.solution3}
              />
              <p className={classes.solutionTitle2}>
                출입과 동시에 근태관리 연동
              </p>
              <p className={classes.solutionSubTitle2}>
                출입과 출퇴근 시간이 연동되어 저장 가능
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.videoPage}>
        <div className={classes.vidoeBox}>
          <img src={tmpVideo} alt="비디오" className={classes.video} />
          <div className={classes.videoRight}>
            <p className={classes.videoText}>VIDEO</p>
            <p className={classes.videoText1}>AATS 기술 소개 영상</p>
            <p className={classes.videoText2}>
              GUMI NO.1 기업 AIVE의 기술 소개 영상
            </p>
            <p className={classes.videoText2}>
              어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌
            </p>
            <p className={classes.videoText2}>
              어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌
            </p>
            <p className={classes.videoText2}>
              어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌
            </p>
          </div>
        </div>
      </div>
      <div className={classes.newsPage}>
        <h3 className={classes.NewsTitle}>NEWS</h3>
        <hr className={classes.hrLine} />
        <div className={classes.container}>
          <div className={classes.carousel} ref={slideRef}>
            <div className={classes.carouselItem}>
              <ArrowBackIosNewIcon
                onClick={prevSlide}
                className={classes.ArrowBackIosNewIcon}
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <ArrowForwardIosIcon
                onClick={nextSlide}
                className={classes.ArrowForwardIosIcon}
              />
            </div>
            <div className={classes.carouselItem}>
              <ArrowBackIosNewIcon
                onClick={prevSlide}
                className={classes.ArrowBackIosNewIcon}
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <ArrowForwardIosIcon
                onClick={nextSlide}
                className={classes.ArrowForwardIosIcon}
              />
            </div>
            <div className={classes.carouselItem}>
              <ArrowBackIosNewIcon
                onClick={prevSlide}
                className={classes.ArrowBackIosNewIcon}
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <NewsItem
                img={tmpNew1}
                title="AIVE, 어쩌구 하다"
                date="2023.03.27"
              />
              <ArrowForwardIosIcon
                onClick={nextSlide}
                className={classes.ArrowForwardIosIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
