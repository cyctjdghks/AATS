import classes from "./ContactMain.module.css";

// import contactimg from '../../../assets/contact/도표이미지.png'
import tmpContact from "../../../assets/contact/tmpContact.png";

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
          <h3>CONTACT US</h3>
          <p className={classes.imgemail}>SSAFY.D102@ssafy.com</p>
          <p className={classes.imgcontetnt}>
            D 102조는 자동 출결 및 추적 시스템을 통해
          </p>
          <p className={classes.imgcontetnt}>
            모두의 일상을 더 나은 방향으로 바꾸기위해 앞장서고 있습니다.
          </p>
          <p className={classes.imgcontetnt}>문의사항은 연락 바랍니다. </p>
          <img
            src={tmpContact}
            alt="도표이미지"
            className={classes.contactimg}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
