import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import navbar, footer 
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
import MyPage from "./pages/mypage/MyPage"
import Admin from "./pages/admin/Admin";
import PasswordChange from "./pages/mypage/passwordchange/PasswordChange";
import NewsPage from "./pages/home/components/news/NewsPage";
// import css style 
import classes from "./App.module.css";
import Main from "./Test";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const url ="https://j8d102.p.ssafy.io/be/getallpeople";
    axios
      .get(url)
      .then((response)=>{
        dispatch(authActions.getAiveData(response.data.data))
      }).catch((error)=>{
        console.log(error);
      })
  },[])


  return (
    <div className={classes.App} id="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/regist/*" element={<Regist/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/test" element={<Main />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/passwordchange" element={<PasswordChange/>}/>
        <Route path="/newspage" element={<NewsPage/>}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
