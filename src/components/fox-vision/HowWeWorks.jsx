import React from "react";
import work from "../../asstes/images/webp/how-we-work/howWeWork.webp";
import { WorkArrow } from "../common/Icons";
import { howWeWorksCard } from "../common/Helper";
import WorksCard from "../common/WorksCard";
import { CommonHeading, CommonsubHeading } from "../common/CommonHeading"
import CommonBtn from "../common/CommonBtn";

const HowWeWorks = () => {
    return (
        <div className="xl:pt-[144.76px] xl:pb-[126.85px] lg:py-[70px] sm:py-[64px] py-[48px]">
            <div className="container xl:max-w-[1164px] px-3 mx-auto">
                <div className="flex flex-row flex-wrap lg:justify-between items-end">
                    <div className="lg:w-6/12 w-full relative">
                        <WorkArrow className="absolute xl:-right-[14%] xl:top-[16%] top-[11%] right-0 max-xl:max-w-[140px] lg:block hidden" />
                        <CommonsubHeading className="lg:!text-start" subheading="A RESULTS-DRIVEN AGENCY" />
                        <CommonHeading heading="How we work" />
                        <div className="flex justify-center items-center lg:justify-start">
                            <img
                                width={378}
                                height={294}
                                src={work}
                                alt="work"
                                className="w-full sm:max-w-[378px] max-w-[310px]"
                            />
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full mb-[10px] flex justify-end lg:pt-0 pt-6">
                        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
                            <p className="font-normal font-poppins sm:text-xl text-base !leading-normal text-center lg:text-start text-darkblue opacity-70 lg:max-w-[481px] lg:mb-10 sm:mb-7 mb-6">
                                We see our customers as partners and identify passionately with
                                their companies. Regardless of what the goal is, whether to
                                increase sales, increase brand awareness or attract new
                                employees. We always look for the <span className="text-sky">
                                    right solution for your company </span>
                                and advise you individually
                            </p>
                            <CommonBtn btnName="Contact" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center lg:justify-between flex-wrap lg:gap-0 md:gap-5 gap-3 xl:pt-[124px] md:pt-[64px] lg:pt-[70px] sm:pt-[55px] pt-[48px]">
                    {howWeWorksCard.map((data, index) => (
                        <div
                            className="lg:w-[32.2%] md:w-[45%] sm:w-[49%] w-full"
                            key={index}
                        >
                            <WorksCard
                                worksvg={data.worksvg}
                                title={data.title}
                                description={data.description}
                                svgBox={index === 1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWeWorks;