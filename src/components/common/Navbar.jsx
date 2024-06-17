import React, { useState, useEffect } from "react";

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
    <nav className="max-w-[1240px] mx-auto px-3 rounded-[150px] py-[11px] shadow-nav-shadow bg-white">
    
      <div className="mx-auto">
        <ul
          className={`flex items-center  gap-5 z-10 relative  sm:gap-6 duration-300 max-md:fixed max-md:w-full max-md:!min-h-screen max-md:justify-center  max-md:flex-col max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:!bg-white ${
            navBar && "!left-0"
          }`}
        >
            <li><a href="">kulvider</a></li>
          
        </ul>
      </div>
      <button onClick={showNav} className="md:hidden relative z-50">
        {navBar ? (
          <div className="flex md:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer">
            <span className="bg-red min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[15px]"></span>
            <span className="bg-red min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[11px]"></span>
          </div>
        ) : (
          <div className="flex md:hidden flex-col z-50 justify-between my-1 w-[21px] h-[15px] cursor-pointer relative">
            <span className="bg-red rounded-md w-1/2 h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
            <span className="bg-red rounded-md w-full h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
            <span className="bg-red rounded-md w-1/2 h-[3px] ms-auto relative z-50 transition-all ease-linear duration-300"></span>
          </div>
        )}
      </button>
    </nav>
  );
};

export default Navbar;