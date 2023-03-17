import classes from "./Contact.module.css";

import quote1 from "../../assets/MainContact/quote1.png";
import quote2 from "../../assets/MainContact/quote2.png";
import ceo from "../../assets/MainContact/ceo.png";
import phone from '../../assets/MainContact/phone.png';

import InputLabel from "./components/InputLabel";
import InputBigLabel from "./components/InputBigLabel";

const ContactMain = () => {
  return (
    <div className={classes.pagebox}>
      <br />
      <br />
      <div className={classes.topBox}>
        <br />
        <h3 className={classes.pageName}>CONTACT</h3>
        <div className={classes.inputBox}>
          <div className={classes.imgBox}>
            <img src={phone} alt="" className={classes.phone}/>
            <p className={classes.phoneDap}>Phone.02-123-456</p>
          </div>
          <div>
          </div>
          <div className={classes.inputLabelBox}>
            <InputLabel type="text" placeholder="Name" />
            <InputLabel type="text" placeholder="Number" />
            <InputLabel type="text" placeholder="Email" />
          </div>
          <div>
            <InputBigLabel type="text" placeholder="Message" />
            <button className={classes.btn}>submit</button>
          </div>
        </div>
      </div>
      <div className={classes.bottomBox}>
        <br />
        <br />
        <br />
        <div className={classes.subBottomBox}>
          <div className={classes.quoteBox}>
            <p className={classes.aatsName}>AATS | 자동 출결 및 추적 시스템</p>
            <img src={quote1} alt="" />
            <p>
              AATS는 Automatic Attendance and Tracking System으로, 어쩌구 저쩌구
              어쩌구 어쩌구 저쩌구 어쩌구 저쩌구 세계 최고 어쩌구 저쩌구 어쩌구
              저쩌구 입니다라라랄라라라라라
            </p>
            <p>
              AIVE에게 궁금한 모든 것을 물어 보세요. 어쩌구 저쩌구 어쩌구
              저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구
            </p>
            <img src={quote2} alt="" className={classes.quote2}/>
            <br />
            <p>D102 대표, 강모현</p>
          </div>
          <div className={classes.ceoBox}>
            <img src={ceo} alt="" className={classes.ceo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;

