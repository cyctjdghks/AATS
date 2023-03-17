import { useSelector } from "react-redux";
import classes from "./Summary.module.css"

const Summary = () => {
  const startData = useSelector((state) => state.start.timeList)
  const endData = useSelector((state) => state.end.timeList)

  return (
    <div className={classes.summary}>
      <h1>Summary</h1>
    </div>
  );
};

export default Summary;
