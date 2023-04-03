import Swal from "sweetalert2";
import InputLabel from "../../components/InputLabel";
import { DataInput } from "../../components/Effectiveness";
import axios from "axios";
import { authActions } from "../../../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./Organization.module.css";

import quote1 from "../../../../assets/auths/quote1.png";
import quote2 from "../../../../assets/auths/quote2.png";
import ceo from "../../../../assets/auths/ceo.png";
import phone from "../../../../assets/auths/phone.png";
import tmp1 from "../../../../assets/auths/tmp1.png";
import tmp2 from "../../../../assets/auths/tmp2.png";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Organization = () => {
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
    axios
      .post(url, axiosData)
      .then((response) => {
        if (response.status === 200) {
          dispatch(authActions.organizationLogin(response.data.data));
          const orgid = response.data.data.organizationId
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
          const workerUrl = "https://j8d102.p.ssafy.io/be/organization/getall/worker";
          const userUrl = "https://j8d102.p.ssafy.io/be/organization/getall/user";
          axios
            .post(workerUrl, { organizationId : orgid})
            .then((response) => {
              dispatch(authActions.getWorkers(response.data.data));
            })
            .catch((error) => {
              console.log(error);
            });
          axios
            .post(userUrl, { organizationId : orgid})
            .then((response) => {
              dispatch(authActions.getUsers(response.data.data));
            })
            .catch((error) => {
              console.log(error);
            });
          navigate("/admin");
        } else {
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toSignup = (event) => {
    event.preventDefault();
    navigate("/auth/signup");
  };

  return (
    <div className={classes.pageBox}>
      <div className={classes.loginBox}>
        <h1>기관 로그인</h1>
        <div className={classes.hline}></div>
        <div className={classes.loginContentBox}>
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
            <div className={classes.toGoBox}>
              <p onClick={toSignup}>회원가입 하러 가기</p>
              <ExitToAppIcon className={classes.signupImg} />
            </div>
          </form>
        </div>
      </div>
      <div className={classes.imgBox}>
        <div className={classes.imgSubBox}>
          <div>
            <img src={quote1} alt="따옴표1" className={classes.quote1} />
            <p className={classes.quoteText1}>
              AIVE는 혁신적인 AI 기술을 활용하여, 사용자들에게 더욱 편리하고
              직관적인 서비스를 제공하고자 하는 미션을 갖고 있습니다.
            </p>
            <img src={quote2} alt="따옴표2" className={classes.quote2} />
            <p className={classes.d102}>D102 대표, 강모현</p>
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
                  <p className={classes.iconP3}>Gumi</p>
                  <p className={classes.iconP4}>No.1</p>
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

export default Organization;
