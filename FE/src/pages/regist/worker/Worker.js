import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { DataInput, CheckPassword } from "../components/Effectiveness";
import { GenderCheckbox } from "../components/GenderCheckBox";

import InputLabel from "../components/InputLabel";
import InputBigLabel from "../components/InputBigLabel";
import SaveImg from "../components/SaveImg";

import ceo from "../../../assets/MainContact/ceo.png";
import quote1 from "../../../assets/MainContact/quote1.png";
import quote2 from "../../../assets/MainContact/quote2.png";
import phone from "../../../assets/MainContact/phone.png";

import classes from "./Worker.module.css";

const Worker = () => {
  const navigate = useNavigate();
  const organizationId = useSelector((state) => state.auth.id);
  const [name, setName, nameError] = DataInput(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/);
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );
  const [confirmPassword, setConfirmPassword, confirmPasswordError] =
    CheckPassword(password);
  const [nationality, setNationality] = useState();
  const [age, setAge, ageError] = DataInput(/^[0-9]+$/);
  const [phoneNumber, setPhoneNumber, phoneNumberError] = DataInput(
    /^([0-9]+)-([0-9]+)-([0-9]+)/
  );
  const [email, setEmail, emailError] = DataInput(
    /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  );
  const [birth, setBirth] = useState();
  const [profile, setProfile] = useState("");
  const [male, female, setMale, setFemale] = GenderCheckbox();
  const [filename, setFileName] = useState("");
  const stringToInt = (data) => {
    const ans = parseInt(data, 10);
    return ans;
  };
  // 이미지 저장
  const saveImg = (event) => {
    event.preventDefault();
    setProfile(event.target.elements.files.files);
    setFileName(event.target.elements.files.files[0].name);
  };
  // 회원 등록 api 요청
  const registWorkerSubmit = (event) => {
    event.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/worker/regist";
    const formData = new FormData();
    const worker = {
      workerId: id,
      workerPwd: password,
      workerName: name,
      workerOrganizationId: organizationId,
      workerGender: male ? 1 : 0,
      workerAge: stringToInt(age),
      workerPhone: phoneNumber,
      workerEmail: email,
      workerBirth: birth,
      workerNationality: nationality,
    };
    console.log(worker);
    for (let i = 0; i < profile.length; i++) {
      formData.append("profile", profile[i]);
    }
    const workerBlob = new Blob([JSON.stringify(worker)], {
      type: "application/json",
    });
    formData.append("worker", workerBlob, "worker.json");
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/regist");
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // submit 활성화 & 비활성화
  const nullError =
    !!id &&
    !!name &&
    !!password &&
    !!email &&
    !!confirmPassword &&
    !!age &&
    !!nationality &&
    !!phoneNumber &&
    !!birth &&
    !!profile;
  const effectivnessError =
    idError &&
    nameError &&
    passwordError &&
    emailError &&
    confirmPasswordError &&
    ageError &&
    phoneNumberError;
  const submitError = nullError && effectivnessError;

  const nationList = ["대한민국", "미국", "일본", "중국"];

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
          <img src={phone} alt="" />
          <div className={classes.phoneText}>
            <p className={classes.phoneOne}>
              당신의 회원을 안전하게 관리하세요
            </p>
            <p className={classes.phoneTwo}>Phone.02-123-456</p>
          </div>
        </div>
        <img src={ceo} alt="" className={classes.ceo} />
      </div>
      <div className={classes.mainBox}>
        <h1 className={classes.mainName}>근무자 등록</h1>
        <p className={classes.mainSubName}>
          등록하고자 하는 회원의 정보를 입력해 주세요
        </p>
        <div className={classes.hline}></div>
        <div className={classes.companyIdBox}>
          <div className={classes.IdTextBox}>
            <p className={classes.IdName}>기관 아이디*</p>
          </div>
          <InputBigLabel
            type="text"
            placeholder="기관 아이디 입력"
            value={organizationId}
            disabled={true}
          />
        </div>
        <div className={classes.hline}></div>

        <div className={classes.inputBoxOne}>
          <InputLabel
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={setName}
            errorMessage={nameError ? "" : "한글, 영어로만 입력해주세요"}
          />
          <InputLabel
            label="나이"
            type="text"
            placeholder="나이를 입력해주세요"
            onChange={setAge}
            errorMessage={ageError ? "" : "숫자로만 입력해주세요"}
          />
          <div className={classes.selectbox}>
            <label htmlFor="ex_select" className={classes.selectTitle}>
              국적
            </label>
            <div>
              <select
                id="ex_select"
                className={classes.selectIdBox}
                onChange={(event) => setNationality(event.target.value)}
              >
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
            onChange={setId}
            errorMessage={idError ? "" : "영어와 숫자로만 입력해주세요."}
          />
          <InputLabel
            label="휴대폰 번호"
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
            onChange={setPhoneNumber}
            errorMessage={phoneNumberError ? "" : "전화번호 양식을 맞춰주세요"}
          />
          <InputLabel
            label="생년월일"
            type="date"
            placeholder="생년월일을 입력해주세요"
            onChange={(event) => setBirth(event.target.value)}
          />
        </div>
        <InputLabel
          label="이메일"
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={setEmail}
          errorMessage={emailError ? "" : "이메일 양식을 맞춰주세요"}
        />
        <InputLabel
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={setPassword}
          errorMessage={
            passwordError
              ? ""
              : "영어,숫자,특수문자를 반드시 포함해야합니다(9~16)"
          }
        />
        <InputLabel
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          onChange={setConfirmPassword}
          errorMessage={
            confirmPasswordError ? "" : "비밀번호와 일치하지 않습니다."
          }
        />

        <div className={classes.inputBoxThree}>
          <div className={classes.genderBox}>
            <p className={classes.genderName}>성별</p>
            <label className={classes.Gender}>
              남
              <input type="checkbox" checked={male} onChange={setMale} />
            </label>
            <label className={classes.Gender}>
              여
              <input type="checkbox" checked={female} onChange={setFemale} />
            </label>
          </div>
          <SaveImg onSubmit={saveImg} filename={filename} />
        </div>
        <button
          onClick={registWorkerSubmit}
          disabled={!submitError}
          className={classes.submitBtn}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Worker;
