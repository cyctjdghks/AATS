import React, { useState } from "react";
import NewsItem from "./NewsItem";
import classes from "./News.module.css";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (delta) => {
    const nextSlide = currentSlide + delta;
    if (nextSlide < 0) {
      setCurrentSlide(0);
    } else if (nextSlide > 2) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide(nextSlide);
    }
  };

  return (
    <div className={classes.NewsBox}>
      <button onClick={() => moveSlide(-1)}>이전</button>
      <div className={classes.SlideBox}>
        <div
          className={classes.SlideWrapper}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className={classes.NewsItem}>
            <img src="" alt="이미지"/>
            <h3>text</h3>
            <p>text3</p>
        </div>
        <div className={classes.NewsItem}>
            <img src="" alt="이미지"/>
            <h3>text</h3>
            <p>text3</p>
        </div>
        </div>
      </div>
      <button onClick={() => moveSlide(1)}>다음</button>
    </div>
  );
};

export default News;

// import NewsItem from "./NewsItem";

// import classes from "./News.module.css";
// import { useState } from "react";

// const News = () => {
    

//     return(
//         <div className={classes.NewsBox}>
//             <NewsItem/>
//             <NewsItem/>
//             <NewsItem/>
//             <NewsItem/>
//         </div>
//     )
// }

// export default News;