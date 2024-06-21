import React from 'react'
import { CommonHeading } from '../common/CommonHeading'
import designImage from "../../asstes/images/webp/offer/designStrategy.webp"
import { designStrategyData } from '../common/Helper'
import { OfferArrowLayer } from '../common/Icons'

const DesignStrategy = () => {
    return (
        <div>
            <div className="container max-w-[1164px] mx-auto px-3 ">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='lg:max-w-[484px] flex flex-col md:flex-row lg:flex-col items-center '>
                        <div>
                            <CommonHeading heading="UI/UX Design Strategy" className="md:text-start text-center" />
                            <p className='!leading-[180%] text-offgrey font-poppins font-normal text-lg sm:text-xl lg:pb-[45px] text-center md:text-start pt-3 sm:pt-5'>Our design process is a <span className=" text-lightlbue">well-thought-out journey</span> that combines innovation, strategy, and collaboration to produce outstanding results.</p>
                        </div>
                        <img className='max-w-[400px] mx-auto max-md:w-full max-lg:w-1/2 lg:max-w-[451px]' src={designImage} alt="designImg" />
                    </div>
                    <div className='pt-10 lg:pt-0'>
                        {designStrategyData.map((data, index) => (
                            <div key={index} className={`max-w-[609px] mx-auto py-5 sm:py-[26px] relative lg:h-[150px] xl:min-w-[609px] shadow-[0_4px_27px_0px_#4B17E614] flex ${index === 0 ? "mb-8 sm:mb-[50px]" : index === 1 ? "mb-8 sm:mb-[50px]" : index === 2 ? "mb-8 sm:mb-[50px]" : index === 3 ? "mb-0" : ""}`}>
                                <div className={`absolute left-[-8px] sm:left-[-23px]  z-1 ${index === 0 ? "min-[425px]:-top-6 top-[-10px] sm:top-0" : index === 1 ? "top-0 min-[425px]:-top-6 sm:top-0" : index === 2 ? "top-0 min-[425px]:-top-6 sm:top-0" : index === 3 ? "top-0 min-[425px]:-top-6 sm:top-0" : ""}`}><OfferArrowLayer /></div>
                                <div className='flex items-center sm:items-end pr-[45px] sm:pr-[87px]'>
                                    <p className='pl-5 text-white relative z-10 font-montserrat !leading-[120%] font-semibold text-4xxl' >{data.id}</p>
                                </div>
                                <div>
                                    <p className=' font-montserrat text-lg sm:text-xl font-semibold !leading-[120%] text-darkblue' >{data.heading}</p>
                                    <p className={`text-offgrey font-normal text-sm sm:text-base font-poppins !leading-[180%] pt-[15px] ${index === 0 ? "max-w-[455px]" : index === 1 ? "max-w-[461px]" : index === 2 ? "max-w-[463px]" : ""}`}>{data.para}</p>
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
