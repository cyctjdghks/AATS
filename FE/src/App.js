import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import axios from "axios";
// outer third-party
// innner component
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
// import pages
import Auth from "./pages/auth/Auth";
import Regist from "./pages/regist/Regist";
import Contact from "./pages/contact/Contact";
import Solutions from "./pages/solutions/Solutions";
import NotFound from "./pages/notfound/NotFound";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import MyPage from "./pages/mypage/MyPage";
import Admin from "./pages/admin/Admin";
import PasswordChange from "./pages/mypage/passwordchange/PasswordChange";
import NewsPage from "./pages/home/components/news/NewsPage";
// Route 설정
import PrivateRoute from "./router/PrivateRoute";
import CommonRoute from "./router/CommonRoute";
// import css style
import classes from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = "https://j8d102.p.ssafy.io/be/getallpeople";
    axios
      .get(url)
      .then((response) => {
        dispatch(authActions.getAiveData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className={classes.App} id="App">
      <NavBar />
      <Routes>
        <Route element={<CommonRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/newspage" element={<NewsPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/regist/*" element={<Regist />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/passwordchange" element={<PasswordChange />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
