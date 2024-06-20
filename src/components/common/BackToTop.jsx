import React from "react";
import backtotop from "../../asstes/images/webp/backToTop/upArrow.webp";

function Backtotop() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            document.getElementById("Top").style.display = "flex";
        } else {
            document.getElementById("Top").style.display = "none";
        }
    });

    function up() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <button id="Top" className="cursor-pointer hidden fixed z-20 sm:bottom-5 bottom-2 right-2 sm:right-5" onClick={up}>
                <img className="sm:w-[50px] w-10 sm:h-[50px] h-10 animate-bounce" src={backtotop} alt="back to top icon" />
            </button>
        </>
    );
}

export default Backtotop;