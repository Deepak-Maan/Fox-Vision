import React from "react";
import { angebotCardList } from "../common/Helper";
import { FoxWhiteLogo } from "../common/Icons";
import { CommonHeading, CommonsubHeading } from "../common/CommonHeading";
import AngebotCard from "./AngebotCard";

export const Angebot = () => {
    return (
        <div className="bg-darkpurple xl:pt-[122.94px] lg:pt-[90px] sm:pt-[64px] pt-[48px]">
            <div className="container xl:max-w-[1164px] px-3 mx-auto">
                <CommonsubHeading className='text-white !text-center' subheading=" A RESULTS-DRIVEN AGENCY"/>
                <CommonHeading heading="Angebot" className="!text-center text-white"/>
                <div className="flex flex-row flex-wrap justify-center xl:gap-[17px] lg:gap-[15px] md:gap-5 sm:gap-3 gap-4 lg:pt-[97.79px] lg:pb-[77.23px] md:py-[64px] sm:py-12 py-9">
                    {angebotCardList.map((data, index) => (
                        <div
                            key={index}
                            className="lg:w-[32.3%] md:w-[48%] sm:w-[49%] w-full"
                        >
                            <AngebotCard
                                className={`${index === 0 ? "sm:pb-[59.24px]" : index === 1 ? "sm:pb-[59.24px]" : index === 2 ? "sm:pb-[59.24px]" : ""}`}
                                angebotsvg={data.angebotsvg}
                                title={data.title}
                                description={data.description}
                                cardBtn={data.cardBtn}
                                Btnarrow={data.Btnarrow}
                                bgCardSvg={index === 0 || index === 2 || index === 4}
                                cardLink={index === 3 || index === 4 || index === 5}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <FoxWhiteLogo className="lg:w-[141px] lg:h-[172px] sm:w-[120px] sm:h-[100px] h-[80px] w-[101px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Angebot;