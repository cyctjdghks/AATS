// css style
import classes from "./SubName.module.css";

const SubName = (props) => {
  return (
    <div className={classes.subBox} onClick={props.subname1.onClick}>
      <p>{props.subname1.icon}</p>
      <p className={classes.subName}>{props.subname1.name}</p>
    </div>
  );
};

export default SubName;
