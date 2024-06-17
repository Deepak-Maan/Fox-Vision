import React from 'react'
import displayAvatar from "../../asstes/images/webp/what-we-do/displayAvatar.webp";
import Watch from "../../asstes/images/webp/what-we-do/ui_uxWatch.webp";
import TwoPhone from "../../asstes/images/webp/what-we-do/ui_uxTwoPhone.webp";
import Men from "../../asstes/images/webp/what-we-do/ui_uxMen.webp";
import ModelLady from "../../asstes/images/webp/what-we-do/ui_uxModelLady.webp";
import Boodie from "../../asstes/images/webp/what-we-do/ui_uxBoodie.webp";
import Rebio from "../../asstes/images/webp/what-we-do/ui_uxRebio.webp";
import SmileEmoji from "../../asstes/images/webp/what-we-do/smileEmoji.webp";
import Joker from "../../asstes/images/webp/what-we-do/visualJoker.webp";
import Dog from "../../asstes/images/webp/what-we-do/visualDog.webp";
import Reptiles from "../../asstes/images/webp/what-we-do/visualReptiles.webp";
import BlackMagic from "../../asstes/images/webp/what-we-do/visualBlackMagic.webp";
import Strawberry from "../../asstes/images/webp/what-we-do/visualStrawberry.webp";
import MobilePhone from "../../asstes/images/webp/what-we-do/visualMobilePhone.webp";
import StarEmoji from "../../asstes/images/webp/what-we-do/starEmoji.webp";
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import { BlueElipseBg, GraphicDesigner, Logo, PaintingBoard, PurpleElipseBg } from '../common/Icon';
const WhatWeDo = () => {
    return (
        <div className='overflow-hidden'>
        <div className='max-w-[1164px] mx-auto px-3 pt-24 md:pt-40 lg:pt-60'>
            <CommonWhatWeDo
                CommonWhatWeDosubheading='A RESULTS-DRIVEN AGENCY'
                CommonWhatWeDoimg={displayAvatar}
                CommonWhatWeDoheading='What we do'
                CommonWhatWeDotext2='trust and loyalty to your brand.'
                CommonWhatWeDotext1='We define the intangible assets of your brand and subsequently increase'
                CommonWhatWeDotext3='Uniqueness, value proposition, clearly understandable core messages and an innovative design result in a brand personality that will be. We then transfer this genetic code to the relevant target groups cross-media via relevant channels. And we will reposition you profitably' />
            <div className='flex pt-20 sm:pt-24 md:pt-32 lg:pt-[197px] pb-24 flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap -mx-3 relative z-[1] items-center'>
            <span className=' absolute right-0 1xl:right-[-8%] top-[26%] lg:top-[33%] z-[-1]'>
                        <PurpleElipseBg />
                    </span>
                <div className='w-full lg:w-5/12 px-3 mt-5 lg:mt-0'>
                    <span className='flex justify-center lg:justify-start'><PaintingBoard /></span>
                    <p className='font-poppins font-bold text-2xl leading-[150%] text-darkblue text-center lg:text-start'>UI/UX Creative Design</p>
                    <p className='font-poppins font-normal text-base sm:text-lg md:text-xl leading-[150%] text-darkblue opacity-70 mt-2 lg:max-w-[386px] text-center lg:text-start'>UI/UX creative design is the art of crafting digital experiences that seamlessly blend aesthetics with functionality. It's about understanding users' needs and behaviors and translating that knowledge into intuitive, visually appealing interfaces. </p>
                </div>
                <div className='w-7/2 px-3 relative mx-auto'>
                  
                    <div className='flex items-center gap-2 sm:gap-[22.63px]'>
                        <div className='max-w-[203.39px]'><img src={Watch} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className=' relative'>
                            <img src={SmileEmoji} alt="smileemoji" className=' absolute left-[32%] top-[-28%] max-w-[60px] sm:max-w-[123px] max-h-[123px]' />
                            <img src={TwoPhone} alt="watch" className=' hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' />
                        </div>
                       <div className='max-w-[203.39px]'><img src={Men} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                    </div>
                    <div className='flex  gap-2 sm:gap-[22.63px]'>
                        <div className='max-w-[203.39px]'><img src={ModelLady} alt="watch" className='mt-2 sm:mt-[25.97px] shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[159px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className='max-w-[203.39px]'><img src={Boodie} alt="watch" className='mt-5 sm:mt-[68.69px] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className='max-w-[203.39px]'><img src={Rebio} alt="watch" className='mt-2 sm:mt-[25.97px] shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                    </div>
                </div>
            </div>
            <div className=' sm:pt-20 md:pt-40 lg:pt-52 flex-row flex-wrap lg:flex-nowrap -mx-3 flex items-center relative pb-8 sm:pb-12 md:pb-16 lg:pb-[102px]'>
            <span className=' absolute left-0 1xl:left-[-9%] top-[10%] sm:top-[26%] lg:top-[29%] z-[-1]'>
                        <BlueElipseBg />
                    </span>
                <div className='w-7/2 px-3 relative mx-auto'>
                    <div className='flex gap-2 sm:gap-[22.63px]'>
                        <div className='max-w-[203.39px]'><img src={Joker} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className='mt-5 sm:mt-10 relative'>
                            <img src={StarEmoji} alt="smileemoji" className=' absolute left-[10%] top-[-28%] max-w-[60px] sm:max-w-[123px] max-h-[123px]' />
                            <img src={Dog} alt="watch" className=' hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' />
                        </div>
                       <div className='max-w-[203.39px]'><img src={Reptiles} alt="watch" className='shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[219.03px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                    </div>
                    <div className='flex gap-2 sm:gap-[22.63px]'>
                        <div className='max-w-[203.39px]'><img src={BlackMagic} alt="watch" className='-mt-1 shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[159px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className='max-w-[203.39px]'><img src={Strawberry} alt="watch" className='mt-2 sm:mt-[28.69px] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                        <div className='max-w-[203.39px]'><img src={MobilePhone} alt="watch" className='-mt-1 shadow-[0px_16.7px_41.74px_0px_#3B3E430D] hover:shadow-[0px_16.7px_41.74px_0px_#3B3E430D] max-w-[203.39px] w-full max-h-[150px] border-[1px] border-solid duration-300 rounded-[12.52px] hover:border-[#4B17E6] border-transparent' /></div>
                    </div>
                </div>
                <div className='w-full lg:w-5/12 px-3 mt-5 lg:mt-0'>
                    <div className='lg:max-w-[425px] lg:ms-auto'>
                    <span className='flex justify-center lg:justify-start'><GraphicDesigner /></span>
                    <p className='font-poppins font-bold text-2xl leading-[150%] text-darkblue text-center lg:text-start'>Visual Graphic Design</p>
                    <p className='font-poppins font-normal text-base sm:text-lg md:text-xl leading-[150%] text-darkblue opacity-70 mt-2  text-center lg:text-start'>Visual graphic design is the art of using visual elements, such as images, typography, color, and layout, to convey a message, tell a story, or evoke emotions.</p>
                    </div>
                </div>
            </div>
            <div className='!mb-[30px]'>
                <Logo/>
            </div>
        </div>
        </div>
    )
}

export default WhatWeDo