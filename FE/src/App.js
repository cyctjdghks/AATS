import { Routes, Route } from "react-router-dom";
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
// import css style 
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/regist/*" element={<Regist/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
