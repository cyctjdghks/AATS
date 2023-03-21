import { useNavigate } from "react-router-dom";
import classes from "./SideBar.module.css";

const SideBar = (props) => {
  const navigate = useNavigate();
  const data = props.data;

  const toFirst = () => {
    navigate(data.subname1.onClick);
  };
  const toSecond = () => {
    navigate(data.subname2.onClick);
  };
  const toThird = () => {
    navigate(data.subname3.onClick);
  };

  return (
    <div className={classes.sidebar}>
      <h1>{data.pagename}</h1>
      <div className={classes.subAllBox}>
        <div className={classes.subBox} onClick={toFirst}>
          <p>{data.subname1.icon}</p>
          <p className={classes.subName}>{data.subname1.name}</p>
        </div>
        <div className={classes.subBox} onClick={toSecond}>
          <p>{data.subname2.icon}</p>
          <p className={classes.subName}>{data.subname2.name}</p>
        </div>
        <div className={classes.subBox} onClick={toThird}>
          <p>{data.subname3.icon}</p>
          <p className={classes.subName}>{data.subname3.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
