import React, { useState, useEffect } from "react";
import Logo from "../../asstes/images/webp/hero/nav-logo.webp"
import { Link } from "react-router-dom";
import { Calling, Email } from "./Icons";
import CommonBtn from "./CommonBtn";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  function showNav() {
    setNavBar(!navBar);
  }

  useEffect(() => {
    if (navBar) {
      document.body.classList.add("max-md:overflow-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-hidden");
    }
  }, [navBar]);

  return (
    <div className="pt-[19px]">
    <nav className="max-w-[1240px] mx-auto px-6 sm:px-[50px] h-[54px] sm:h-[74px] rounded-[150px] sm:py-[11px] flex items-center justify-between  shadow-[0px_0px_13px_0px_#00000024] bg-white">
    
        <img src={Logo} alt="logo"  className="w-[120px] sm:w-[207px] sm:h-[27.92px] cursor-pointer z-20"/>
        <ul
          className={`flex items-center  gap-5 z-10 relative  sm:gap-[40px] duration-300 max-lg:fixed max-lg:w-full max-lg:!min-h-screen max-lg:justify-center  max-lg:flex-col max-lg:top-0 max-lg:left-[-105%] max-lg:p-[30px] max-lg:!bg-white ${
            navBar && "!left-0"
          }`}
        >
           <li className="duration-300 transition-all">
           <Link
  to="/"
  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-lg before:duration-300 before:w-0 text-base text-darkblue "
>
  Home
</Link>
          </li>
          <li className="duration-300 transition-all">
           <Link
  to="/about"
  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-lg before:duration-300 before:w-0 text-base text-darkblue "
>
Über uns
</Link>
          </li>

          <li className="duration-300 transition-all">
           <Link
  to="/offer"
  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-lg before:duration-300 before:w-0 text-base text-darkblue "
>
  Angebot
</Link>
          </li>

          <li className="duration-300 transition-all">
           <Link
  to="/portfolio"
  className="font-poppins font-normal relative before:absolute before:h-[3px] duration-300 transition-all before:transition-all hover:before:w-[26px] before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:rounded-md before:duration-300 before:w-0 text-base text-darkblue "
>
Portfolio
</Link>
          </li>
          <li className="flex flex-col md:flex-row  items-center gap-2 md:gap-4 relative z-20">
           <span className="flex gap-3 mb-10">
           <a href="tel:+1234567890" className="hover:translate-y-[-6px] md:hidden transition-all duration-300 ease-linear"><Calling/></a>
           <a href="mailto:example@example.com" className="hover:translate-y-[-6px] md:hidden transition-all duration-300 ease-linear"><Email/></a>
           </span>
    <CommonBtn  btnName="Kontakt"className="w-[124px]  md:hidden"/>
        </li>

          
        </ul>
        <div className="flex items-center gap-2 md:gap-4 relative z-20">
            <a href="tel:+1234567890" className="hover:translate-y-[-6px] hidden md:block transition-all duration-300 ease-linear"><Calling/></a>
            <a href="mailto:example@example.com" className="hover:translate-y-[-6px] hidden md:block  transition-all duration-300 ease-linear"><Email/></a>
    <CommonBtn  btnName="Kontakt"className="w-[124px] hidden md:block "/>
        </div>
    
      <button onClick={showNav} className="lg:hidden relative z-50">
        {navBar ? (
          <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer">
            <span className="bg-darkpurple min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[15px]"></span>
            <span className="bg-darkpurple min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[11px]"></span>
          </div>
        ) : (
          <div className="flex lg:hidden flex-col z-50 justify-between my-1 w-[21px] h-[15px] cursor-pointer relative">
            <span className="bg-darkpurple rounded-md w-1/2 h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
            <span className="bg-darkpurple rounded-md w-full h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
            <span className="bg-darkpurple rounded-md w-1/2 h-[3px] ms-auto relative z-50 transition-all ease-linear duration-300"></span>
          </div>
        )}
      </button>
    </nav>
    </div>
  );
};

export default Navbar;