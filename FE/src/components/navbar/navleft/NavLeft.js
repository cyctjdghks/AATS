import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import css style
import classes from "./NavLeft.module.css";

const NavLeft = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const type = useSelector((state) => state.auth.userType);

  const toHome = () => {
    navigate("/");
  };
  const toSolutions = () => {
    navigate("/solutions");
  };
  const toContact = () => {
    navigate("/contact");
  };
  const toAboutUs = () => {
    navigate("/aboutus");
  };
  const toSearch = () => {
    navigate("/admin/search");
  };
  const toRegist = () => {
    navigate("/regist");
  };
  const toCctv = () => {
    window.open("https://j8d102.p.ssafy.io/ai");
  };
  const organizationLogin = isLogin && !type;
  return (
    <div className={type ? classes.navLeftHidden : classes.navLeft}>
      {organizationLogin ? (
        <p onClick={toSearch}>Search</p>
      ) : (
        <p onClick={toHome}>Home</p>
      )}
      {organizationLogin ? (
        <p onClick={toRegist}>Regist</p>
      ) : (
        <p onClick={toSolutions}>Solutions</p>
      )}
      {organizationLogin ? (
        <p onClick={toCctv}>CCTV</p>
      ) : (
        <p onClick={toContact}>Contact</p>
      )}
      {organizationLogin ? <p></p> : <p onClick={toAboutUs}>About Us</p>}
    </div>
  );
};

export default NavLeft;
