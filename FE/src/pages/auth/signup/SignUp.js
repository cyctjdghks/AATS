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

// classes 호출
import classes from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName, nameError] = DataInput(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/);
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
        <div className={classes.mapDiv}>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: 36.10713422838027,
              lng: 128.41612352992854,
            }}
            style={{
              width: "300px",
              height: "300px",
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
          <button type="submit" disabled={!submitError}>
          회원가입
        </button>
          {/* 경도 위도 */}
        </form>
        
      </div>
      <div className={classes.signupBox2}></div>
    </div>
  );
};

export default SignUp;
