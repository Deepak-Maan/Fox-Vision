import React from 'react'
import { CommonHeading, CommonsubHeading } from '../common/CommonHeading'
import { reachOutData } from '../common/Helper'
import { Link } from 'react-router-dom'

const ReachOut = () => {
    return (
        <div className='pt-12 md:pt-16 lg:pt-[70px] xl:pt-[130px]'>
            <div className="container max-w-[1164px] px-3 mx-auto">
                <CommonsubHeading subheading="FOX VISION - Friendly and reliable" />
                <CommonHeading heading="More Ways to Reach Out" className="!text-center" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5  md:mt-10 lg:mt-[70px] xl:mt-[88px] gap-[30px]">
                    {reachOutData.map((data, index) => (
                        <Link to={data.link} target={data.target} rel='noreferrer' key={index} className={`max-w-[360px] mx-auto w-full max-h-[265px] group hover:translate-y-[-12px] lg:hover:translate-y-[-38px] duration-300 shadow-[0_4px_27px_0_#4B17E614] ${index === 0 ? "py-10" : index === 1 ? "py-10" : index === 2 ? "py-7 sm:col-span-2 lg:col-span-1 " : ""} `} data-aos="zoom-in">
                            <div className='w-[85px] bg-offpurple group-hover:bg-darkpurple duration-300 mx-auto h-[85px] flex items-center justify-center rounded-[7px] shadow-[0_11.57px_27px_0_#4B17E61A]' data-aos="zoom-in">
                                <div data-aos="zoom-in">{data.icon}</div>
                            </div>
                            <p className=' text-darkblue text-center font-poppins font-semibold text-2xl !leading-[150%] pb-4 pt-6' data-aos="zoom-in">{data.heading}</p>
                            <p className='text-base font-normal font-poppins text-center text-black max-w-[304px] !leading-[150%] mx-auto' data-aos="zoom-in">{data.para}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReachOut
