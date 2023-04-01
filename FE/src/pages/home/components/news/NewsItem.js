import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.img} alt="이미지" className={classes.img}/>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.date}>{props.date}</p>
    </div>
  );
};

export default NewsItem;
