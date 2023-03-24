import axios from "axios";
import { useNavigate } from "react-router-dom";
// component 호출
import InputLabel from "../components/InputLabel";
import { DataInput, UserValidCheck } from "../components/Effectiveness";

// classes 호출

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName, nameError] = DataInput(/^[가-힣]{2,10}$/);
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  // 유저 회원가입 api 요청
  const organizationSubmit = (event) => {
    event.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/organization/regist";
    axios
      .post(url, {
        organizationId: id,
        organizationPw: password,
        organizationName: name,
      })
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
  const nullError = !!id && !!name && !!password;
  const effectivnessError = idError && nameError && passwordError;
  const submitError = nullError && effectivnessError;

  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={organizationSubmit}>
        <InputLabel
          label="이름"
          type="text"
          value={name}
          placeholder="이름을 입력해주세요"
          onChange={setName}
          errorMessage={nameError ? "" : "한글로만 입력해주세요"}
        />
        <InputLabel
          label="아이디"
          type="text"
          value={id}
          placeholder="아이디를 입력해주세요"
          onChange={setId}
          errorMessage={idError ? "" : "영어와 숫자로만 입력해주세요."}
        />
        <InputLabel
          label="비밀번호"
          type="password"
          value={password}
          placeholder="9자 이상 16자 이하의 비밀번호를 입력해주세요"
          onChange={setPassword}
          errorMessage={
            passwordError ? "" : "영어와 숫자 그리고 특수문자로만 입력해주세요."
          }
        />
        <button type="submit" disabled={!submitError}>
          회원가입
        </button>
        {/* 경도 위도 */}
      </form>
    </div>
  );
};

export default SignUp;
