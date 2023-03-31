import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
// component 호출
import InputShortLabel from "../components/InputShortLabel";
import {
  DataInput,
  UserValidCheck,
  CheckPassword,
} from "../components/Effectiveness";

import quote1 from "../../../assets/auths/quote1.png";
import quote2 from "../../../assets/auths/quote2.png";
import ceo from "../../../assets/auths/ceo.png";
import phone from "../../../assets/auths/phone.png";
import tmp1 from "../../../assets/auths/tmp1.png";
import tmp2 from "../../../assets/auths/tmp2.png";

// classes 호출
import classes from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName, nameError] = DataInput(/^[가-힣]{2,10}$/);
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );
  const [confirmPassword, setConfirmPassword, confirmPasswordError] =
    CheckPassword(password);

  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });

  // 유저 회원가입 api 요청
  const organizationSubmit = (event) => {
    event.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/organization/regist";
    const axiosData = {
      organizationId: id,
      organizationPw: password,
      organizationName: name,
      organizationLng: position.lng,
      organizationLat: position.lat,
    };
    axios
      .post(url, axiosData)
      .then((response) => {
        if (response.status === 200) {
          navigate("/auth/login");
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // submit 활성화 & 비활성화
  const nullError = !!id && !!name && !!password && !!confirmPassword;
  const effectivnessError =
    idError && nameError && passwordError && confirmPasswordError;
  const submitError = nullError && effectivnessError;

  return (
    <div className={classes.pageBox}>
      <div className={classes.signupBox}>
        <h1 className={classes.signupPageTitle}>회원가입</h1>
        <form onSubmit={organizationSubmit}>
          <div className={classes.InputLabelBox1}>
            <InputShortLabel
              label="이름"
              type="text"
              value={name}
              placeholder="이름을 입력해주세요"
              onChange={setName}
              errorMessage={nameError ? "" : "영어 한글 숫자로만 입력해주세요"}
            />
            <InputShortLabel
              label="아이디"
              type="text"
              value={id}
              placeholder="아이디를 입력해주세요"
              onChange={setId}
              errorMessage={idError ? "" : "영어와 숫자로만 입력해주세요."}
            />
          </div>
          <div className={classes.InputLabelBox2}>
            <InputShortLabel
              label="비밀번호"
              type="password"
              value={password}
              placeholder="비밀번호를 입력해주세요"
              onChange={setPassword}
              errorMessage={
                passwordError
                  ? ""
                  : "영어와 숫자 그리고 특수문자로만 입력해주세요."
              }
            />
            <InputShortLabel
              label="비밀번호 확인"
              type="password"
              value={confirmPassword}
              placeholder="비밀번호를 다시 입력해주세요"
              onChange={setConfirmPassword}
              errorMessage={
                confirmPasswordError ? "" : "비밀번호가 일치하지 않습니다."
              }
            />
          </div>
          <p className={classes.mapLableP}>기관 위치 선택</p>
        <div className={classes.mapDiv}>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: 36.10713422838027,
              lng: 128.41612352992854,
            }}
            style={{
              width: "475px",
              height: "200px",
            }}
            level={4} // 지도의 확대 레벨
            onClick={(_t, mouseEvent) => {
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              });
            }}
          >
            {position && <MapMarker position={position} />}
          </Map>
        </div>
          <button type="submit" disabled={!submitError} className={classes.submitBtn}>
          회원가입
        </button>
          {/* 경도 위도 */}
        </form>
        
      </div>
      <div className={classes.imgBox}>
        <div className={classes.imgSubBox}>
          <div>
            <img src={quote1} alt="따옴표1" className={classes.quote1} />
            <p className={classes.quoteText1}>
              AIVE의 미션은 사용자와 ~ 깊게 이해하여 혁신적인 AI 기술을 바탕으로
              한 어쩌구 저쩌구 입니다. 어쩌구 저쩌구 입니다. 어쩌구 저쩌구
              입니다.
            </p>
            <p></p>
            <img src={quote2} alt="따옴표2" className={classes.quote2} />
            <div className={classes.iconBox}>
              <div className={classes.icon1}>
                <img src={phone} alt="" className={classes.phone} />
                <p>Phone.02-123-456</p>
              </div>
              <div className={classes.icon2}>
                <img src={tmp1} alt="" className={classes.tmp1} />
                <p>Gumi No.1</p>
              </div>
              <div className={classes.icon3}>
                <img src={tmp2} alt="" className={classes.tmp2} />
                <p>Gumi No.1</p>
              </div>
            </div>
          </div>
          <div className={classes.ceoBox}>
            <img src={ceo} alt="" className={classes.ceo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;