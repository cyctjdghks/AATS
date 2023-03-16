import classes from "./Contact.module.css";
// import background from "../../assets/MainContact/background.png";
import position from "../../assets/MainContact/position.png";
import InputLabel from "../contact/component/InputLabel";

const Contact = () => {
  return (
    <div>
      <div className={classes.topbox}>
        <div className={classes.contactBox}>
          <h3>Contact us</h3>
          <div className={classes.line}></div>
          <p>궁금하신 모든 질문들은 저희 a-IVE에게 남겨 주세요.</p>

          <InputLabel
            type="text"
            placeholder="Your Name(required)"
          />
          
        </div>
        <div>
          <img src={position} alt="" className={classes.position}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
