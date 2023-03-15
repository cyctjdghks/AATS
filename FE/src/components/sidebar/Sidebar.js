import classes from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <div className={classes.sidebar}>
      <h1>{props.pagename}</h1>
      <div className={classes.subAllBox}>
        <div className={classes.subBox}>
          <p>{props.subname1.icon}</p><p className={classes.subName}>{props.subname1.name}</p>
        </div>
        <div className={classes.subBox}>
          <p>{props.subname2.icon}</p><p className={classes.subName}>{props.subname2.name}</p>
        </div>
        <div className={classes.subBox}>
          <p>{props.subname3.icon}</p><p className={classes.subName}>{props.subname3.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
