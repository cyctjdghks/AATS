import Info from "../components/info/Info";
import Summary from "../components/summary/Summary";
// inport css style
import classes from "./MyInfo.module.css"

const MyInfo = () => {
  return (
    <div className={classes.myinfo}>
      <Info />
      <Summary />
    </div>
  );
};

export default MyInfo;
