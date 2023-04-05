import { useLocation } from "react-router-dom";

import gpt from "../../../../assets/Home/gpt.png";
import advertisement from "../../../../assets/Home/advertisement.png";

import classes from "./NewsPage.module.css";

const NewsPage = () => {
  const { state } = useLocation();
  const newsData = state.data;

  return (
    <div className={classes.background}>
      <div className={classes.page}>
        <p className={classes.title}>{newsData.title}</p>
        <p className={classes.date}>{newsData.date}</p>
        <hr className={classes.hrLine} />
        <div className={classes.newsContentBox}>
          <div className={classes.mainBox}>
            <div className={classes.container}>
              <div className={classes.newImgWrapper}>
              <img src={newsData.img} alt="" className={classes.img} />

              </div>
              <div className={classes.contentBox}>
                <p className={classes.content}>{newsData.content}</p>
                <p className={classes.content}>{newsData.content2}</p>
                <p className={classes.content}>{newsData.content3}</p>
                <p className={classes.content}>{newsData.content4}</p>
                <p className={classes.content}>{newsData.content5}</p>
                <p className={classes.content}>{newsData.content6}</p>
              </div>
            </div>
            <div className={classes.gptBox}>
              <img src={gpt} alt="" className={classes.gpt} />
              <p className={classes.gptText}>챗 GPT 기자</p>
            </div>
          </div>
          <div className={classes.vLine}></div>
          {/* <img src={advertisement} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
