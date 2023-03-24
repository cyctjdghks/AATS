import InputLabel from "../components/InputLabel";
import { DataInput } from "../components/Effectiveness";
import axios from "axios";
import { authActions } from "../../../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  const organizationLogin = (event) => {
    event.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/organization/login";
    const axiosData = {
      organizationId: id,
      organizationPwd: password,
    };
    axios.post(url, axiosData).then((response) => {
      dispatch(authActions.organizationLogin(response.data.data))
      navigate('/mypage')
    }).catch((error) =>{console.log(error);});
  };

  return (
    <div>
      <h1>login Page</h1>
      <form onSubmit={organizationLogin}>
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
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
