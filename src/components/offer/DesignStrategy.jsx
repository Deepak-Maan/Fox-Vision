import React from 'react'
import { CommonHeading } from '../common/CommonHeading'
import designImage from "../../asstes/images/webp/offer/designStrategy.webp"
import { designStrategyData } from '../common/Helper'
import { OfferArrowLayer } from '../common/Icons'

const DesignStrategy = () => {
    return (
        <div>
            <div className="container max-w-[1164px] mx-auto px-3 pb-12 md:pb-16 lg:pb-[70px] xl:pb-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='lg:max-w-[484px] flex flex-col md:flex-row lg:flex-col items-center '>
                        <div>
                            <CommonHeading heading="UI/UX Design Strategy" className="text-start" />
                            <p className='leading-[180%] text-offgrey font-poppins font-normal text-xl lg:pb-[45px] '>Our design process is a <span className=" text-lightlbue">well-thought-out journey</span> that combines innovation, strategy, and collaboration to produce outstanding results.</p>
                        </div>
                        <img className=' max-md:w-full max-lg:w-1/2' src={designImage} alt="designImg" />
                    </div>
                    <div className='pt-10 lg:pt-0'>
                        {designStrategyData.map((data, index) => (
                            <div key={index} className='max-w-[609px] mx-auto py-[26px] relative mb-[50px] lg:max-h-[150px] xl:min-w-[609px] shadow-[0_4px_27px_0px_#4B17E614] flex'>
                                <div className="absolute left-[-23px] top-0 z-1"><OfferArrowLayer /></div>
                                <div className='flex items-center lg:items-end pr-[87px]'>
                                    <p className='pl-5 text-white relative z-10 font-montserrat font-semibold text-4xxl'>{data.id}</p>
                                </div>
                                <div>
                                    <p className=' font-montserrat text-xl font-semibold leading-[120%] text-darkblue'>{data.heading}</p>
                                    <p className={`text-offgrey font-normal text-base font-poppins leading-[180%] pt-[15px] ${index === 0 ? "max-w-[455px]" : index === 1 ? "max-w-[461px]" : index === 2 ? "max-w-[463px]" : ""}`}>{data.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignStrategy
