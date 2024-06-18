import React from 'react'
import Paypal from "../../asstes/images/webp/hero/PayPal.png";
import { LogoDesignIcon, SettingIcon, WhiteElipseBg } from '../common/Icon';
import LogoDesign1 from "../../asstes/images/webp/hero/LogoDesign1.png";
import LogoDesign2 from "../../asstes/images/webp/hero/LogoDesign2.png";
import LogoDesign3 from "../../asstes/images/webp/hero/LogoDesign3.png";
import LogoDesign4 from "../../asstes/images/webp/hero/LogoDesign4.png";
import LikeEmoji from "../../asstes/images/webp/hero/LikeEmoji.png";
const LogoDesign = () => {
    return (
        <div className='bg-darkpurple p-[100px_0_60px_0] sm:p-[150px_0_60px_0] md:p-[193px_0_60px_0]'>
            <div className='max-w-[1164px] mx-auto px-3'>

                <div className='lg:flex-row flex-col-reverse flex-wrap -mx-3 flex items-center'>
                    <span className=' absolute left-0 1xl:left-[-9%] top-[10%] sm:top-[26%] lg:top-[29%] z-[-1]'>
                        <LogoDesignIcon />
                    </span>
                    <div className='w-full lg:w-5/12 px-3 mt-5 lg:mt-0'>
                        <div className='lg:max-w-[421px] lg:ml-auto'>
                            <span className='flex justify-center lg:justify-start'><SettingIcon /></span>
                            <p className='font-poppins font-bold text-lg sm:text-xl md:text-2xl leading-[150%] text-white text-center lg:text-start'>Logo Design</p>
                            <p className='font-poppins font-normal text-base sm:text-lg md:text-xl leading-[150%] text-white mt-2  text-center lg:text-start opacity-70'>Logo design is a specialized discipline within the realm of graphic design, focused on creating unique and memorable visual symbols that represent a brand, company, or organization.</p>
                        </div>
                    </div>
                    <div className='lg:w-7/12 w-full px-3 relative z-[2]'>
                        <div className='flex max-w-[547px] w-full justify-center lg:justify-start relative mx-auto lg:ml-auto lg:mr-0 gap-2 sm:gap-[22.88px]'>
                            <span className=' absolute right-0 bottom-[4%] z-[1]'>
                                <WhiteElipseBg/>
                            </span>
                        <div className='flex flex-col gap-2 sm:gap-[26.5px] relative z-[2]'>
                        <div className='max-w-[203.39px]'><img src={LogoDesign1} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] object-cover w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className='max-w-[203.39px]'><img src={LogoDesign3} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] object-cover w-full max-h-[159px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        </div>
                        <div className='flex flex-col gap-2 sm:gap-[26.5px] mt-5 sm:mt-10 relative z-[2]'>
                        <div className='max-w-[203.39px] relative'>
                        <img src={LikeEmoji} alt="smileemoji" className='absolute left-[-10%] sm:left-[-15%] top-[-45%] sm:top-[-69%] max-w-[130px] sm:max-w-[194px] max-h-[194px]' />
                            <img src={LogoDesign2} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] object-cover w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className='max-w-[203.39px]'><img src={LogoDesign4} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] object-cover w-full max-h-[159px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        </div>
                        </div>
                    </div>

                </div>
                <div className='flex-row flex-wrap -mx-3 flex items-center mt-10 sm:mt-16 md:mt-20 lg:mt-24'>
                    <div className='lg:w-7/12 w-full px-3 relative mx-auto lg:mx-0 '>
                        <img src={Paypal} alt="paypal" className='max-w-[495px] w-full lg:w-[unset] max-h-[529px] ' />
                    </div>
                    <div className='w-full lg:w-5/12 px-3 mt-5 lg:mt-0'>
                        <div className='lg:max-w-[445px] lg:mr-auto'>
                            <span className='flex justify-center lg:justify-start'><SettingIcon /></span>
                            <p className='font-poppins font-bold text-lg sm:text-xl md:text-2xl leading-[150%] text-white text-center lg:text-start'>Strategy & Digital Marketing</p>
                            <p className='font-poppins font-normal text-base sm:text-lg md:text-xl leading-[150%] text-white mt-2  text-center lg:text-start'>Strategy in digital marketing is the foundation upon which successful online campaigns are built. It involves setting clear objectives, identifying target audiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoDesign