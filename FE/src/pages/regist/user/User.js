import InputLabel from "../components/InputLabel";
import InputBigLabel from "../components/InputBigLabel";

import classes from "./User.module.css";

import ceo from "../../../assets/MainContact/ceo.png";
import quote1 from "../../../assets/MainContact/quote1.png";
import quote2 from "../../../assets/MainContact/quote2.png";

const User = () => {
  return (
    <div className={classes.pageBox}>
      <div className={classes.sideBox}>
        <div className={classes.sideBoxText}>
          <img src={quote1} alt="" className={classes.quote1} />
          <h3>AATS, 이것은 혁신입니다.</h3>
          <img src={quote2} alt="" className={classes.quote2} />
        </div>
        <p className={classes.ceoMent}>D102 대표, 강모현</p>
        <img src={ceo} alt="" className={classes.ceo}/>
      </div>
      <div className={classes.mainBox}>
        <h1 className={classes.mainName}>회원 등록</h1>
        <p className={classes.mainSubName}>
          등록하고자 하는 회원의 정보를 입력해 주세요
        </p>
        <div className={classes.hline}></div>
        <div className={classes.companyIdBox}>
          <div className={classes.IdTextBox}>
            <p className={classes.IdName}>기관 아이디*</p>
            <p className={classes.IdSubName}>기관 아이디를 입력해주세요</p>
          </div>
          <div>
            <InputBigLabel type="text" placeholder="기관 아이디 입력" />
          </div>
        </div>
        <div className={classes.hline}></div>
        <div className={classes.inputBoxOne}>
          <InputLabel
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요"
          />
          <InputLabel
            label="나이"
            type="text"
            placeholder="나이를 입력해주세요"
          />
          <InputLabel
            label="휴대폰 번호"
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
          />
        </div>
        <div className={classes.inputBoxTwo}>
          <InputLabel
            label="아이디"
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          <InputLabel
            label="비밀번호"
            type="text"
            placeholder="비밀번호를 입력해주세요"
          />
          <InputLabel
            label="이메일"
            type="text"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <InputLabel
          label="국적"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <InputLabel
          label="생년월일"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <div className={classes.inputBoxThree}>
          <div className={classes.genderBox}>
            <p className={classes.genderName}>성별</p>
            <div className={classes.gender}>
              <label>
                남
                <input type="checkbox" />
                &nbsp;&nbsp;
              </label>
              <label>
                여
                <input type="checkbox" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
