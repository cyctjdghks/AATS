import { useState } from "react";
// 외부 라이브러리
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
// customhook
import InputLabel from "./components/InputLabel";
import InputBigLabel from "./components/InputBigLabel";
// img
import quote1 from "../../assets/MainContact/quote1.png";
import quote2 from "../../assets/MainContact/quote2.png";
import ceo from "../../assets/MainContact/ceo.png";
import phone from "../../assets/MainContact/phone.png";
// css classes
import classes from "./Contact.module.css";

const ContactMain = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // submit 활성화 & 비활성화
  const nullError = !!name && !!phoneNumber && !!email && !!message;

  // 이메일 보내기
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_egr0y1i",
        "template_er2lnhi",
        event.target,
        "RkpCvGZ6qxCWkell1"
      )
      .then(
        (response) => {
          setName("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
          Swal.fire({
            title:
              '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">성공적으로 전달 되었습니다.<div>',
            html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">문의 사항은 빠른 시일내에 알려드리겠습니다.</div>',
            icon: "success",
            width: 350,
            confirmButtonColor: "#9A9A9A",
            confirmButtonText:
              '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
          });
        },

        (error) => {
          Swal.fire({
            title:
              '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">전달에 실패했습니다.</div>',
            html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">현재 서버가 불안정하니 전화 혹은 문자로 문의 바랍니다.</div>',
            icon: "error",
            width: 350,
            confirmButtonColor: "#9A9A9A",
            confirmButtonText:
              '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
          });
          console.log(error);
        }
      );
  };

  return (
    <div className={classes.pagebox}>
      <div className={classes.topBox}>
        <div className={classes.pageName}>
          <p className={classes.contextText}>CONTACT</p>
        </div>
        <div className={classes.inputBox}>
          <div className={classes.imgBox}>
            <img src={phone} alt="" className={classes.phone} />
            <p className={classes.phoneDap}>Phone.02-123-456</p>
          </div>
          <div className={classes.inputLabelBox}>
            <InputLabel
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="name"
              autoComplete="off"
            />
            <InputLabel
              type="text"
              placeholder="Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              name="phone"
              autoComplete="off"
            />
            <InputLabel
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              autoComplete="off"
            />
          </div>
          <div className={classes.bigText}>
            <InputBigLabel
              type="text"
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              name="message"
              autoComplete="off"
              white-space="pre-wrap"
            />
            <button
              type="submit"
              className={classes.btn}
              disabled={!nullError}
              onClick={sendEmail}
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div className={classes.bottomBox}>
        <div className={classes.subBottomBox}>
          <div className={classes.quoteBox}>
            <p className={classes.aatsName}>AATS | 자동 출결 및 추적 시스템</p>
            <img src={quote1} alt="" />
            <p>
              AATS는 Automatic Attendance and Tracking System으로, 
              구미 최고의 자동 출결 및 추적 시스템입니다. '얼굴 인식 자동 출입 시스템, CCTV 통합 관제, 출입과 동시에 근태관리 연동'
              즉, 이 모든 것을 하나로 통합한 기술이 AATS입니다.
            </p>
            <p>
              AIVE에게 궁금한 모든 것을 물어 보세요. 
              언제 어디서나 어떤 질문이든, 성심성의껏 답변해 드리겠습니다.
            </p>
            <img src={quote2} alt="" className={classes.quote2} />
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
