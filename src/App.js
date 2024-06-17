
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Portfolio from "./pages/Portfolio"
import Offer from "./pages/Offer"
import Footer from '../src/components/common/Footer'


function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<AboutUs />}></Route>
    <Route path="/contact" element={<ContactUs />}></Route>
    <Route path="/portfolio" element={<Portfolio />}></Route>
    <Route path="/offer" element={<Offer />}></Route>
  </Routes>
    <Footer />
      </div>
  );
}

export default App;
