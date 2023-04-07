import { useNavigate } from "react-router-dom";

import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const navigate = useNavigate();

  // 뉴스 페이지로 이동
  const toNewsPage = (event) => {
    event.preventDefault();
    navigate("/newspage", { state: { data: props } });
  };

  return (
    <div className={classes.item}>
      <div className={classes.center}>
        <div className={classes.imgWrapper}>
          <img
            src={props.img}
            alt="이미지"
            className={classes.img}
            onClick={toNewsPage}
          />
        </div>
      </div>
      <div className={classes.textBox}>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.date}>{props.date}</p>
      </div>
    </div>
  );
};

export default NewsItem;
