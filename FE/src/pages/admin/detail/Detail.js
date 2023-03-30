import Info from "./components/info/Info";
import Summary from "./components/summary/Summary";
import { useLocation } from "react-router-dom";

import classes from "./Detail.module.css"

const Detail = () => {
  const {state} = useLocation();
  return (
    <div className={classes.detail}>
      <Info data={state.data} type={!state.type}/>
      <Summary />
    </div>
  );
};

export default Detail;
