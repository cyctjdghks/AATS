import { Routes, Route } from "react-router-dom";
// import navbar, footer 
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
// import pages
import Auth from "./pages/auth/Auth";
import Cctv from "./pages/cctv/Cctv";
import Contact from "./pages/contact/Contact";
import DashBoard from "./pages/dashboard/DashBoard";
import Solutions from "./pages/solutions/Solutions";
import NotFound from "./pages/notfound/NotFound";
import Home from "./pages/home/Home";
import Calendar from "./pages/calendar/Calendar";
import AboutUs from "./pages/aboutus/AboutUs";
// import css style 
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/cctv" element={<Cctv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
