import React,{useEffect} from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Offer from "./pages/Offer";
import Footer from "../src/components/common/Footer";
import { Route, Routes } from "react-router-dom";
import Backtotop from "./components/common/BackToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init(
      {duration: 1500,
        once: true,
      }
    );
  }, [])
  return (
    <div className=" overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
      </Routes>
      <Footer />
      <div className="max-w-[1920px]">
        <Backtotop />
      </div>
    </div>
  );
}

export default App;
