import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../asstes/images/webp/hero/navLogo.webp";
import { Calling, Email } from "./Icons";
import CommonBtn from "./CommonBtn";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

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

  const getLinkClasses = (path) => {
    const isActive = currentPath === path;
    return `font-poppins font-normal relative before:absolute !leading-[150%] before:flex before:h-[3px] duration-300 transition-all before:transition-all before:bg-darkpurple before:start-[50%] before:translate-x-[-50%] before:bottom-[-5px] before:w-0 hover:before:w-[26px] before:rounded-lg before:duration-300 ${isActive ? 'before:w-[26px] text-stroke-0.5' : 'before:w-0'} text-base text-darkblue hover:text-stroke-0.5`;
  };

  return (
    <div className="md:pt-5 pt-3">
      <nav className="max-w-[1240px] w-full mx-auto px-6 md:px-[50px] h-[40px] sm:h-[56px] md:h-[60px] lg:h-[74px] rounded-[150px] sm:py-3 flex items-center justify-between shadow-[0px_0px_13px_0px_#00000024] bg-white">
        <Link className="relative z-20" to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[120px] sm:w-[160px] sm:h-6 lg:w-[207px] lg:h-8 cursor-pointer z-20"
          />
        </Link>
        <ul
          className={`flex items-center gap-5 z-10 relative sm:gap-[40px] duration-300 max-lg:fixed max-lg:w-full max-lg:!min-h-screen max-lg:justify-center max-lg:flex-col max-lg:top-0 max-lg:left-[-105%] max-lg:p-[30px] max-lg:!bg-white ${navBar && "!left-0"
            }`}
        >
          <li className="duration-300 transition-all">
            <Link to="/" className={getLinkClasses("/")}>
              Home
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link to="/about" className={getLinkClasses("/about")}>
              Über uns
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link to="/offer" className={getLinkClasses("/offer")}>
              Angebot
            </Link>
          </li>
          <li className="duration-300 transition-all">
            <Link to="/portfolio" className={getLinkClasses("/portfolio")}>
              Portfolio
            </Link>
          </li>
          <li className="flex flex-col md:flex-row justify-center items-center gap-2 md:hidden md:gap-4 relative z-20">
            <span className="flex gap-3 mb-6">
              <Link
                to="tel:+1234567890"
                className="hover:translate-y-[-6px] transition-all duration-300 ease-linear"
              >
                <Calling />
              </Link>
              <Link
                to="mailto:example@example.com"
                className="hover:translate-y-[-6px] transition-all duration-300 ease-linear"
              >
                <Email />
              </Link>
            </span>
            <Link to="/contact" className="w-[124px] flex justify-center md:hidden">
              <CommonBtn btnName="Kontakt" />
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 md:gap-4 relative z-20">
          <Link aria-label=" make call"
            to="tel:+1234567890"
            className="hover:translate-y-[-6px] hidden md:block transition-all duration-300 ease-linear"
          >
            <Calling />
          </Link>
          <Link aria-label="send email"
            to="mailto:example@example.com"
            className="hover:translate-y-[-6px] hidden md:block transition-all duration-300 ease-linear"
          >
            <Email />
          </Link>
          <Link to="/contact" className="!w-[124px] hidden md:block">
            <CommonBtn btnName="Kontakt" className="!w-[124px]" />
          </Link>
        </div>
        <button aria-label="crossIcon" onClick={showNav} className="lg:hidden relative z-50">
          {navBar ? (
            <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer">
              <span className="bg-darkpurple min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[15px]"></span>
              <span className="bg-darkpurple min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[11px]"></span>
            </div>
          ) : (
            <div className="flex lg:hidden flex-col z-50 justify-between my-1 w-[21px] h-[15px] md:w-[28px] md:h-[18px] cursor-pointer relative">
              <span className="bg-darkpurple rounded-md w-[11px] md:w-[14px] h-[3px] md:h-[4px] relative z-50 transition-all ease-linear duration-300"></span>
              <span className="bg-darkpurple rounded-md w-full h-[3px] md:h-[4px] relative z-50 transition-all ease-linear duration-300"></span>
              <span className="bg-darkpurple rounded-md w-[11px] md:w-[14px] h-[3px] md:h-[4px] ms-auto relative z-50 transition-all ease-linear duration-300"></span>
            </div>
          )}
        </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

