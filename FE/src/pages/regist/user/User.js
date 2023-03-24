import InputLabel from "../components/InputLabel";
import InputBigLabel from "../components/InputBigLabel";

import classes from "./User.module.css";

import ceo from "../../../assets/MainContact/ceo.png";
import quote1 from "../../../assets/MainContact/quote1.png";
import quote2 from "../../../assets/MainContact/quote2.png";
import phone from "../../../assets/MainContact/phone.png";
import { useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataInput } from "../components/Effectiveness";

const User = () => {
  const navigate = useNavigate();
  const [name, setName, nameError] = DataInput(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/);
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  // 회원 등록 api 요청
  const registUserSubmit = (event) => {
    event.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/user/regist";
    const axiosData = {
      userId: id,
      uerPwd: password,
      userName: name,
    };
    axios
      .post(url, axiosData)
      .then((response) => {
        if (response.status === 200) {
          navigate("/mypage");
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // submit 활성화 & 비활성화
  const nullError = !!id && !!name && !!password;
  const effectivnessError = idError && nameError && passwordError;
  const submitError = nullError && effectivnessError;

  const nationList = [
    "한국",
    "중국",
    "일본",
    "미국",
    "인도",
    "캄보디아",
    "카타르",
  ];

  const organizationId = useSelector((state) => state.auth.id);
  console.log(organizationId);

  const url = "https://j8d102.p.ssafy.io/be/board";
  const sendImg = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const files = event.target.elements.files.files;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    console.log(formData);
    axios
      .post(url, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <InputBigLabel
              type="text"
              placeholder="기관 아이디 입력"
              value={organizationId}
              disabled={true}
            />
          </div>
        </div>
        <form onSubmit={registUserSubmit}>
          <div className={classes.hline}></div>
          <form onSubmit={sendImg}>
            <input type="file" name="files" multiple />
            <button type="submit">전송</button>
          </form>
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
              <label htmlFor="ex_select" className={classes.selectTitle}>
                국적
              </label>
              <div>
                <select id="ex_select" className={classes.selectIdBox}>
                  <option defaultValue>국적 선택(필수)</option>
                  {nationList.map((nation, idx) => (
                    <option key={idx}>{nation}</option>
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
          <button type="submit" disabled={!submitError} className={classes.submitBtn}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default User;
