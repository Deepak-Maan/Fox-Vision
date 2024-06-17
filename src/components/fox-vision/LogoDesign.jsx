import React from 'react'
import Paypal from "../../asstes/images/webp/hero/PayPal.png";
import { BlueElipseBg, GraphicDesigner } from '../common/Icon';
const LogoDesign = () => {
    return (
        <div className='bg-darkpurple p-[80px_0_60px_0]'>
            <div className='max-w-[1164px] mx-auto px-3'>
            <div className='flex-row flex-wrap -mx-3 flex items-center'>
            <span className=' absolute left-0 1xl:left-[-9%] top-[10%] sm:top-[26%] lg:top-[29%] z-[-1]'>
                        <BlueElipseBg />
                    </span>
                <div className='w-7/2 px-3 relative mx-auto'>
              <img src={Paypal} alt="paypal" className='' />
                </div>
                <div className='w-full lg:w-5/12 px-3 mt-5 lg:mt-0'>
                    <div className='lg:max-w-[425px] lg:ms-auto'>
                    <span className='flex justify-center lg:justify-start'><GraphicDesigner /></span>
                    <p className='font-poppins font-bold text-2xl leading-[150%] text-darkblue text-center lg:text-start'>Visual Graphic Design</p>
                    <p className='font-poppins font-normal text-base sm:text-lg md:text-xl leading-[150%] text-darkblue opacity-70 mt-2  text-center lg:text-start'>Visual graphic design is the art of using visual elements, such as images, typography, color, and layout, to convey a message, tell a story, or evoke emotions.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LogoDesign