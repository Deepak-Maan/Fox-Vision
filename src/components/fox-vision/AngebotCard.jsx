import React from "react";
import { Link } from "react-router-dom";

const AngebotCard = (props) => {
    return (
        <div
            className={`${props.className} md:pt-7 md:px-7 md:pb-8 p-6 bg-white rounded-[6px] lg:max-w-[366px] w-full h-full xl:min-h-[383px] flex justify-between flex-col relative transition-all ease-linear duration-300 group `}
        >
            <div>
                <div
                    className={`${props.bgCardSvg
                        ? "bg-lightpurple shadow-[0px_10px_20px_0px_#4B17E62B]"
                        : "bg-lightsky shadow-[0px_11.57px_23.15px_0px_#05D5FB29]"
                        } md:w-[85px] md:h-[85px] w-[72px] h-[72px] rounded-[7px] shadow-[0px 10px 20px 0px #4B17E62B] sm:mb-7 mb-5 flex justify-center items-center`}
                >
                    {props.angebotsvg}
                </div>
                <h3 className="text-black capitalize font-poppins xl:text-2xl text-lg sm:text-xl !leading-normal font-semibold mb-2" >
                    {props.title}
                </h3>
                <p className="text-black opacity-70 font-poppins sm:!text-base text-sm font-normal !leading-normal xl:mb-[45px] px-[1px] lg:mb-[38px] sm:mb-8 mb-6">
                    {props.description}
                </p>
            </div>
            <Link
                className={`${props.cardLink ? "xl:!bottom-10" : ""
                    } text-darkpurple xl:absolute xl:bottom-14 bottom-7 flex items-center gap-[10px] opacity-70 font-poppins font-normal sm:text-base text-sm `}
                href="/"
            >
                {props.cardBtn}
                <span className=" group-hover:translate-x-1 transition-all ease-linear duration-300" > {props.Btnarrow}</span>
            </Link>
        </div>
    );
};
export default AngebotCard;