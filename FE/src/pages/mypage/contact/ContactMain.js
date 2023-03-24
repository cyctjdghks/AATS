import classes from "./ContactMain.module.css";

import ceo from "../../../assets/contact/ceo.png";
import quote1 from "../../../assets/contact/quote1.png";
import quote2 from "../../../assets/contact/quote2.png";
import phone from "../../../assets/contact/phone.png";

import InputLabel from "./components/InputLabel";

const ContactMain = () => {
  return (
    <div className={classes.pagebox}>
      <div className={classes.titlebox}>
        <h1>1:1 문의하기</h1>
        <h3>
          문의사항이 있으시면 다음을 기재해주시거나 전화 주시면 빠르게 상담
          가능합니다.
        </h3>
      </div>
      <hr className={classes.hr} />
      <br />
      <br />
      <div className={classes.mainbox}>
        <div className={classes.contentbox}>
          <div className={classes.contentboxone}>
            <InputLabel
              label="이름"
              type="text"
              placeholder="Your Name(required)"
            />
            <InputLabel
              label="휴대폰 번호"
              type="text"
              placeholder="Your Number(required)"
            />
            <InputLabel
              label="이메일"
              type="text"
              placeholder="Your Email(required)"
            />
            <InputLabel label="제목" type="text" placeholder="Subject" />
          </div>
          <div className={classes.contentboxtwo}>
            <InputLabel
              label="내용"
              type="content"
              placeholder="Your Message"
            />
          </div>
          <button className={classes.contactbtn}>제출하기</button>
        </div>
        <div className={classes.imgbox}>
          <div className={classes.imgTextBox}>
            <img src={quote1} alt="따옴표1" className={classes.quote1} />
            <h3>AATS, 이것은 혁신입니다.</h3>
            <img src={quote2} alt="따옴표2" className={classes.quote2} />

            <p className={classes.d102}>D102 팀장, 강모현</p>
            <div className={classes.hLine}></div>
            <div className={classes.phoneBox}>
              <div>
                <img src={phone} alt="" className={classes.phone} />
              </div>
              <div>
                <p className={classes.phoneOne}>
                  당신의 궁금증을 해결해 드립니다.
                </p>
                <p className={classes.phoneTwo}>Phone.02-123-456</p>
              </div>
            </div>
            <img src={ceo} alt="ceo" className={classes.contactimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
