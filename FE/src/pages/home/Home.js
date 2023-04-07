import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import solution1 from "../../assets/Home/solution1.png";
import solution2 from "../../assets/Home/solution2.png";
import solution3 from "../../assets/Home/solution3.png";

import videoSub from "../../assets/Home/videoSub.png";
import videoSub2 from "../../assets/Home/videoSub2.jpg";

import news1 from "../../assets/Home/news1.png";
import news2 from "../../assets/Home/news2.jpg";
import news3 from "../../assets/Home/news3.jpg";
import news4 from "../../assets/Home/news4.png";
import news5 from "../../assets/Home/news5.png";
import news6 from "../../assets/Home/news6.png";
import news7 from "../../assets/Home/news7.png";
import news8 from "../../assets/Home/news8.png";
import news9 from "../../assets/Home/news9.png";

import Slider from "./components/Slider/Slider";
import NewsItem from "./components/news/NewsItem.js";

import classes from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  // 뉴스 슬라이더
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

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    // 백틱을 사용하여 슬라이드로 이동하는 애니메이션 구현.
  }, [currentSlide]);

  const toSolution = (event) => {
    event.preventDefault();
    navigate("/solutions");
  };

  return (
    <div className={classes.mainPage}>
      <Slider />
      <div className={classes.home}>
        <div className={classes.solutionPage}>
          <h3 className={classes.NewsTitle}>SOLUTION</h3>
          <hr className={classes.hrLine} />
          <div className={classes.solutionBox}>
            <div className={classes.solutionLeft}>
              <img
                src={solution1}
                alt="솔루션1"
                className={classes.solution1}
                onClick={toSolution}
              />
              <div className={classes.titleBox1}>
                <p className={classes.solutionTitle1}>
                  얼굴 인식 자동 출입 시스템
                </p>
                <p className={classes.solutionSubTitle1}>
                  Fast R-CNN과 SSD를 서로 적용하여 차이점을 분석한 후 선정한
                  모델을 tensorFlow 커스텀 모델링, 하이퍼파라미터 수정을 통한
                  학습 후 OpenCV 환경에서 다중 객체 탐지를 함으로써 임직원 및
                  고객의 출입 통제가능
                </p>
              </div>
            </div>
            <div className={classes.solutionRight}>
              <div className={classes.solutionBox2}>
                <img
                  src={solution2}
                  alt="솔루션2"
                  className={classes.solution2}
                  onClick={toSolution}
                />
                <p className={classes.solutionTitle2}>CCTV 통합관제</p>
                <p className={classes.solutionSubTitle2}>
                  CCTV 영상을 한 번에 관제 가능하도록 통합하여 관리 및 관제 할
                  수 있는 시스템
                </p>
              </div>
              <div className={classes.solutionBox2}>
                <img
                  src={solution3}
                  alt="솔루션3"
                  className={classes.solution3}
                  onClick={toSolution}
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
            <div className={classes.videoLeft}>
              <YouTube
                //videoId : https://www.youtube.com/watch?v={videoId} 
                videoId="NyFY9B5sgGI"
                //opts
                opts={{
                  width: "100%",
                  playerVars: {
                    autoplay: 0, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음 
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
                //이벤트 리스너 o
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </div>
            <div className={classes.videoRight}>
              <p className={classes.videoText}>VIDEO</p>
              <p className={classes.videoText1}>AATS 기술 소개 영상</p>
              <p className={classes.videoText2}>GUMI NO.1 기업 AIVE의 기술,</p>
              <p className={classes.videoText2}>편리한 출퇴근을 위한</p>
              <p className={classes.videoText2}>AATS를 소개합니다.</p>
              <div>
                <img src={videoSub} alt="" className={classes.videoSub} />
                <img src={videoSub2} alt="" className={classes.videoSub} />
              </div>
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
                  img={news1}
                  title="[기업] AIVE 6인 개발자, AATS 개발 완료"
                  date="2023.03.27"
                  content="인공지능 기반 비즈니스 솔루션을 개발하는 AIVE가 출퇴근 관리를 자동화하는 인공지능 솔루션 'Automatic Attendance and Tracking System(AATS)'을 개발했다고 밝혔습니다."
                  content2="AATS는 기업 내 출퇴근 관리와 업무 추적을 자동화하여 인사 관리 업무를 간편하고 정확하게 수행할 수 있도록 도와줍니다. 또한, 인공지능 기술을 적용하여 일일 출근 인증 및 출퇴근 기록, 근태 관리, 인력 현황 파악 등 다양한 기능을 제공합니다."
                  content3="AIVE는 기업 내 업무 프로세스를 자동화하고 최적화하기 위한 기술을 제공하는 인공지능 솔루션으로, 이번 AATS 개발을 통해 인사 관리 업무를 더욱 간편하게 수행할 수 있는 솔루션을 제공합니다."
                  content4="AIVE의 대표는 `AATS의 개발 완료로, 우리는 기업 내 출퇴근 관리와 업무 추적을 더욱 효율적으로 수행할 수 있는 인공지능 솔루션을 제공하게 되어 기쁘게 생각합니다.`며 `AATS는 AIVE의 다른 솔루션들과 함께 기업 내 업무 프로세스를 자동화하고 최적화하여 기업의 생산성을 한층 높일 수 있도록 노력하겠습니다.`라고 말했습니다."
                  content5="이번 AATS 개발은 AIVE의 인공지능 기술을 적용한 새로운 솔루션으로, 기업의 인사 관리 업무를 간편하고 효율적으로 수행할 수 있도록 도와줄 것입니다."
                />
                <NewsItem
                  img={news2}
                  title="[인터뷰] AIVE 대표, 강모현님을 만나다"
                  date="2023.03.27"
                  content="[인터뷰]
                안녕하세요. 오늘은 인공지능 비즈니스 솔루션 개발 회사 AIVE의 대표 강모현님과 인터뷰를 하게 되었습니다. 강모현 대표님, 반갑습니다."
                  content2="Q: 먼저 AIVE에 대해 간단하게 소개해주시겠어요?
                A: 네, 저희 AIVE는 인공지능 기술을 활용하여 기업 내 업무 프로세스를 자동화하고 최적화하는 솔루션을 개발하는 회사입니다."
                  content3="Q: 최근에 AIVE가 개발한 새로운 솔루션에 대해서 알려주세요.
                A: 저희가 최근에 개발한 솔루션은 Automatic Attendance and Tracking System(AATS)입니다. 이는 인공지능 기술을 활용하여 출퇴근 관리와 업무 추적을 자동화하여 인사 관리 업무를 간편하고 정확하게 수행할 수 있도록 돕는 솔루션입니다."
                  content4="Q: AATS 이외에도 어떤 다른 솔루션들이 있나요?
                A: 저희는 기업 내의 여러 업무 프로세스를 자동화하기 위한 다양한 솔루션들을 개발하고 있습니다. 저희는 현재 군집도 검사와 미아 찾기 등을 자동화하는 다른 솔루션들을 계획하고 있습니다."
                  content5="Q: AIVE의 앞으로의 비전에 대해 어떻게 생각하시나요?
                A: 저희 AIVE는 기업 내 업무 프로세스를 자동화하고 최적화하는 데에 있어서 최고의 기술을 제공하는 인공지능 솔루션 회사가 되기 위해 노력하고 있습니다. 앞으로도 기업 고객들의 요구에 맞추어 새로운 솔루션을 개발하고 제공하며, 인공지능 기술의 발전과 함께 세상을 변화시키는 기업이 되고 싶습니다."
                  content6="강모현 대표님, 오늘은 인터뷰에 응해주셔서 감사합니다."
                />
                <NewsItem
                  img={news3}
                  title="[뉴스] SSAFY-AIVE, AATS 계약 체결 희망..."
                  date="2023.03.27"
                  content="SSAFY(삼성 청년 SW 아카데미)와 인공지능 비즈니스 솔루션 회사인 AIVE가 출퇴근 관리와 업무 추적을 자동화하는 솔루션인 Automatic Attendance and Tracking System(AATS)의 계약 체결을 희망하고 있다."
                  content2="AIVE는 국내에서 인공지능 기술을 활용하여 기업 내 업무 프로세스를 자동화하고 최적화하는 솔루션을 개발하는 회사로, AATS는 그 중 하나로 인사 관리 업무를 간편하고 정확하게 수행할 수 있도록 돕는 솔루션이다."
                  content3="SSAFY는 삼성전자와 인재 양성을 위한 교육 사업으로, 새로운 기술과 지식을 습득한 인재를 삼성전자 등의 기업에 취업시켜 주는 역할을 하고 있다."
                  content4="SSAFY와 AIVE의 협력으로 AATS가 SSAFY 인재들의 취업에도 도움이 될 것으로 기대된다. 이번 계약 체결을 통해 SSAFY는 인공지능 비즈니스 솔루션 회사와의 협력을 강화하고, AIVE는 교육 분야와의 협력을 통해 보다 다양한 분야에서 인공지능 기술을 적용할 수 있는 기회를 얻게 된다."
                  content5="AIVE 대표 강모현은 'SSAFY와의 협력을 통해 AATS가 더 많은 기업에서 활용될 수 있기를 기대하며, 인공지능 기술을 활용한 업무 자동화와 최적화를 위한 노력을 계속하겠다'고 전했다."
                  content6="이번 계약 체결은 양 기업의 발전과 국내 인공지능 비즈니스 솔루션 시장의 성장에 긍정적인 영향을 줄 것으로 예상된다."
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
                  img={news4}
                  title="[사회 공헌] AIVE 대표 강모현, 삼성 청년 SW 아카데미에 쌀 2kg 기부 예정"
                  date="2023.03.27"
                  content="인공지능 비즈니스 솔루션 회사인 AIVE 대표 강모현이, 삼성전자에서 운영하는 인재 양성 프로그램인 삼성 청년 SW 아카데미(SSAFY)에 2kg의 쌀을 기부할 예정이다."
                  content2="강모현 대표는 '삼성 청년 SW 아카데미는 많은 인재를 배출하는 교육 프로그램으로, 학생들의 성장을 응원하고자 적극적인 기부 활동을 하게 되었다'며 '작은 도움이지만 이번 기부를 통해 학생들의 열정과 노력에 격려가 됐으면 하는 바람이다'라고 전했다."
                  content3="기부된 2kg의 쌀은 SSAFY에서 교육생들을 위해 사용될 예정이다. 이번 기부는 AIVE의 사회적 책임 활동의 일환으로, 앞으로도 다양한 사회 공헌 활동을 계속해나갈 계획이다."
                  content4="강모현 대표는 'AIVE는 비즈니스 성장과 함께 사회적 책임 활동을 중요하게 생각하고 있으며, 앞으로도 다양한 방법으로 사회에 기여할 수 있는 기업이 되겠다'고 밝혔다."
                  content5="AIVE의 기부 활동은 인공지능 비즈니스 솔루션 회사들 중에서도 차별화된 사회적 책임 활동으로 인식되고 있다. 이번 활동은 AIVE의 이미지를 더욱 강화시키는 기회가 될 것으로 예상된다."
                />
                <NewsItem
                  img={news5}
                  title="[뉴스] AIVE, 소담빌과 업무 협약 체결"
                  date="2023.03.27"
                  content="AI 비즈니스 전문 스타트업 A-IVE가 One-room house 브랜드 소담빌과 업무 협약을 체결했다고 밝혔다."
                  content2="A-IVE는 소담빌의 스마트 홈 플랫폼 개발 및 관리를 담당하며, 소담빌은 A-IVE의 인공지능 기술을 활용한 홈 IoT 제품 개발과 업무 협력을 수행할 예정이다."
                  content3="양사는 이번 협약을 통해 서로의 기술 및 역량을 공유하고 상호 발전을 위한 계기로 삼을 계획이다."
                  content4="A-IVE 대표는 '우리는 소담빌과 함께 협력을 통해 스마트홈 분야에서의 기술적 경쟁력을 강화하고, 보다 다양한 서비스를 제공하고자 한다'며 '앞으로도 소담빌과 긴밀한 협력을 유지하여 서로의 성장을 도모할 것이다'라고 말했다."
                  content5="소담빌 관계자는 'A-IVE의 인공지능 기술은 스마트홈 분야에서의 혁신적인 발전을 이끌어낼 것이라 믿는다'며 '양사의 협력은 서로의 기술력 향상과 산업 발전에 큰 도움이 될 것으로 기대한다'고 밝혔다."
                />
                <NewsItem
                  img={news6}
                  title="[채용] 2023년 AIVE 상반기 대규모 공개 채용"
                  date="2023.03.27"
                  content="AI 비즈니스 전문 스타트업 AIVE가 2023년 상반기에 대규모 공개 채용을 예고했다."
                  content2="A-IVE는 Front-end 개발자 1명, Back-End 개발자 1명, Infra 개발자 1명, AI 영상인식 개발자 1명 총 4명을 모집하며, 모든 직무는 최저시급으로 책정된다."
                  content3="모집 공고에서는 야근과 주말 근무에 능숙한 사람들의 지원을 특히 환영하고 있다."
                  content4="A-IVE 대표는 '우리는 대규모 공개 채용을 통해 인재를 모집하고, 인공지능 분야에서 성장하는 전문가들과 함께 일할 기회를 제공하고자 한다'며 'A-IVE와 함께 최고의 성과를 만들어나갈 인재들의 많은 지원을 기다린다'고 말했다."
                  content5="A-IVE는 최고의 인재를 발굴하고, 전문 인력을 보유하여 인공지능 기술 개발에 전념할 예정이며, 이를 통해 더욱 빠르고 안정적인 성장을 이룰 것으로 예상된다."
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
                  img={news7}
                  title="[뉴스] AIVE, 2023년을 빛낼 중소기업으로 선정되고 싶어..."
                  date="2023.03.27"
                  content="AI 비즈니스 전문 스타트업 A-IVE가 2023년을 빛낼 중소기업으로 선정되기 위한 다양한 노력을 기울이고 있다."
                  content2="A-IVE는 인공지능 기술을 활용한 출결 관리 솔루션인 AATS(Automatic Attendance and Tracking System)을 비롯한 다양한 솔루션을 개발하고 있으며, 이를 통해 기술 개발 능력과 경쟁력을 높여나가고 있다."
                  content3="특히, A-IVE는 AI 중소기업 육성사업에 참여하여 경상북도 구미시 인의동 AI 중소기업으로 선정될 예정이며, 이를 기회로 인공지능 산업의 성장을 이끌어가는 중요한 역할을 수행할 것으로 기대된다."
                  content4="A-IVE 대표는 '저희는 인공지능 기술의 미래를 여는 중요한 역할을 수행하기 위해 끊임없이 연구와 개발에 노력하고 있으며, 2023년을 빛낼 중소기업으로 선정되어 국내외 시장에서 성과를 이루고 싶다'며 '앞으로도 최신 기술과 창의적인 아이디어를 결합하여 새로운 비즈니스 모델을 구현하겠다'고 밝혔다."
                  content5="A-IVE의 노력과 기술력으로 인해 2023년을 빛낼 중소기업으로 선정될 가능성이 높아지고 있으며, 이를 통해 인공지능 산업의 발전과 성장에 기여할 것으로 예상된다."
                />
                <NewsItem
                  img={news8}
                  title="[뉴스] AIVE, 2022년 매출 100원 달성"
                  date="2023.03.27"
                  content="AI 비즈니스 전문 스타트업 A-IVE가 작년 2022년에 매출 100원을 달성했다는 소식이 전해졌다."
                  content2="A-IVE는 인공지능 기술을 활용한 출결 관리 솔루션인 AATS(Automatic Attendance and Tracking System)을 비롯한 다양한 솔루션을 개발하고 있으며, 작년에는 기술 개발 능력과 마케팅 노하우를 결합하여 매출을 달성하였다."
                  content3="특히, A-IVE는 빠르게 성장하는 인공지능 산업에서 경쟁력을 유지하고 발전하기 위해 끊임없이 연구와 개발에 노력하고 있으며, 이번 매출 실적은 기업의 성장 가능성을 높여주는 긍정적인 성과로 평가된다."
                  content4="A-IVE 대표는 '작년에는 매출 100원을 달성하는 것이 큰 목표였는데, 이를 달성할 수 있었던 것은 저희의 기술력과 끊임없는 노력 덕분이라고 생각한다'며 '앞으로도 최신 기술과 창의적인 아이디어를 결합하여 새로운 비즈니스 모델을 구현하겠다'고 밝혔다."
                  content5="A-IVE의 매출 실적은 인공지능 산업의 발전을 이끄는 중요한 역할을 수행하고 있으며, 앞으로도 꾸준한 성장을 이어나가기 위해 최선을 다할 것으로 보인다."
                />
                <NewsItem
                  img={news9}
                  title="[뉴스] AIVE, 삼성 청년 SW 아카데미 특화 프로젝트 1등 희망..."
                  date="2023.03.27"
                  content="AI 비즈니스 전문 스타트업 A-IVE가 삼성 청년 SW 아카데미의 특화 프로젝트에서 1등을 향해 달려가고 있다."
                  content2="A-IVE는 이번 삼성 청년 SW 아카데미에서는 인공지능 기술을 활용한 프로젝트를 진행하고 있으며, 다른 팀들과의 경쟁에서 1등을 차지하기 위해 최선을 다하고 있다."
                  content3="A-IVE 대표는 '삼성 청년 SW 아카데미에서는 우수한 교육과 함께 산업에 필요한 기술력과 능력을 향상시킬 수 있는 기회가 주어진다'며 '우리 팀은 이번 프로젝트에서 최선을 다해 우수한 성과를 내고, 산업 발전에 기여하고자 한다'고 밝혔다."
                  content4="이번 삼성 청년 SW 아카데미에서 1등을 차지하면, A-IVE는 삼성전자와 함께 다양한 인공지능 기술 프로젝트를 진행하고, 협력 관계를 강화할 수 있는 기회를 얻을 것으로 기대된다."
                  content5="A-IVE의 인공지능 기술 개발 역량은 산업의 발전을 이끄는 중요한 역할을 수행하고 있으며, 삼성 청년 SW 아카데미에서의 성과는 이를 더욱 견고하게 해줄 것으로 보인다."
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
    </div>
  );
};

export default Home;
