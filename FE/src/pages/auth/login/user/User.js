import InputLabel from "../../components/InputLabel";
import { DataInput } from "../../components/Effectiveness";
import axios from "axios";
import Swal from "sweetalert2";
import { authActions } from "../../../../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./User.module.css";

import quote1 from "../../../../assets/auths/quote1.png";
import quote2 from "../../../../assets/auths/quote2.png";
import ceo from "../../../../assets/auths/ceo.png";
import phone from "../../../../assets/auths/phone.png";
import tmp1 from "../../../../assets/auths/tmp1.png";
import tmp2 from "../../../../assets/auths/tmp2.png";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  const userLogin = (event) => {
    event.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/user/login";
    const axiosData = {
      userId: id,
      userPwd: password,
    };
    axios
      .post(url, axiosData)
      .then((response) => {
        dispatch(authActions.userLogin(response.data.data));
        navigate("/mypage");
        Swal.fire({
          title:
            '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">로그인이 완료되었습니다.<div>',
          html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">AATS 서비스를 이용해보세요</div>',
          icon: "success",
          width: 350,
          confirmButtonColor: "#9A9A9A",
          confirmButtonText:
            '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
        });
      })
      .catch((error) => {
        Swal.fire({
          title:
            '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">로그인이 실패했습니다.<div>',
          html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">아이디와 비밀번호를 다시 확인해주세요</div>',
          width: 350,
          icon: "error",
          confirmButtonText:
            '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
          confirmButtonColor: "#9A9A9A",
        });
      });
  };

  return (
    <div className={classes.pageBox}>
      <div className={classes.loginBox}>
        <h1>회원 로그인</h1>
        <div className={classes.hline}></div>
        <div className={classes.loginContentBox}>
          <form onSubmit={userLogin}>
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
              placeholder="비밀번호를 입력해주세요"
              onChange={setPassword}
              errorMessage={
                passwordError
                  ? ""
                  : "영어와 숫자 그리고 특수문자로만 입력해주세요."
              }
            />
            <button type="submit" className={classes.loginBtn}>
              로그인
            </button>
          </form>
        </div>
      </div>
      <div className={classes.imgBox}>
        <div className={classes.imgSubBox}>
          <div>
            <img src={quote1} alt="따옴표1" className={classes.quote1} />
            <p className={classes.quoteText1}>
              AIVE는 혁신적인 AI 기술을 활용하여, 사용자들에게 더욱더 편리하고
              직관적인 서비스를 제공하고자 하는 미션을 갖고 있습니다.
            </p>

            <img src={quote2} alt="따옴표2" className={classes.quote2} />
            <p className={classes.d102}>삼성 청년 SW 아카데미, D102 일동</p>
            <div className={classes.hLine}></div>
            <div className={classes.iconBox}>
              <div className={classes.icon1}>
                <div>
                  <img src={phone} alt="" className={classes.phone} />
                </div>
                <div className={classes.iconPBox1}>
                  <p className={classes.iconP1}>Phone</p>
                  <p className={classes.iconP2}>02-123-456</p>
                </div>
              </div>
              <div className={classes.icon2}>
                <div>
                  <img src={tmp1} alt="" className={classes.tmp1} />
                </div>
                <div className={classes.iconPBox2}>
                  <p className={classes.iconP3}>Location</p>
                  <p className={classes.iconP4}>ssafy gumi</p>
                </div>
              </div>
              <div className={classes.icon3}>
                <div>
                  <img src={tmp2} alt="" className={classes.tmp2} />
                </div>
                <div className={classes.iconPBox3}>
                  <p className={classes.iconP5}>Gumi</p>
                  <p className={classes.iconP6}>No.1</p>
                </div>
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

export default User;
