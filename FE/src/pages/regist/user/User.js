import InputLabel from "../components/InputLabel";
import InputBigLabel from "../components/InputBigLabel";

import classes from "./User.module.css";

import ceo from "../../../assets/MainContact/ceo.png";
import quote1 from "../../../assets/MainContact/quote1.png";
import quote2 from "../../../assets/MainContact/quote2.png";
import phone from "../../../assets/MainContact/phone.png";

const User = () => {
  const nationList = ['한국', '중국', '일본', '미국', '인도', '캄보디아', '카타르'];


  return (
    <div className={classes.pageBox}>
      <div className={classes.sideBox}>
        <div className={classes.sideBoxText}>
          <img src={quote1} alt="" className={classes.quote1} />
          <h3>AATS, 이것은 혁신입니다.</h3>
          <img src={quote2} alt="" className={classes.quote2} />
        </div>
        <p className={classes.ceoMent}>D102 대표, 강모현</p>
        <div className={classes.hLine}></div>
        <div className={classes.phoneBox}>
          <div>
            <img src={phone} alt="" />
          </div>
          <div className={classes.phoneText}>
            <p className={classes.phoneOne}>
              당신의 회원을 안전하게 관리하세요
            </p>
            <p className={classes.phoneTwo}>Phone.02-123-456</p>
          </div>
        </div>
        <div>
          <img src={ceo} alt="" className={classes.ceo} />
        </div>
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
          <div className={classes.selectbox}>
            <label for="ex_select" className={classes.selectTitle}>국적</label>
            <div>
              <select id="ex_select"  className={classes.selectIdBox}>
                <option selected>
                  국적 선택(필수)
                </option>
                {nationList.map((key, idx)=>(
                  <option>{nationList[idx]}</option>
                ))}
              </select>
            </div>
          </div>
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
            label="생년월일"
            type="date"
            placeholder="생년월일을 입력해주세요"
          />
        </div>
        <InputLabel
          label="휴대폰 번호"
          type="text"
          placeholder="휴대폰 번호를 입력해주세요"
        />
        <InputLabel
          label="이메일"
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
        <button className={classes.submitBtn}>submit</button>
      </div>
    </div>
  );
};

export default User;
