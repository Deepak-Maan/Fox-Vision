import React from 'react'
import displayAvatar from "../../asstes/images/webp/what-we-do/displayAvatar.png";
import { Logo } from '../common/Icon';
const WhatWeDo = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-3 pt-60'>
            <p className='font-poppins font-bold text-xl leading-lg text-darkblue'>A RESULTS-DRIVEN AGENCY</p>
            <div className='flex-row flex flex-wrap -mx-3 mt-3'>
                <div className='w-1/2 px-3'>
                    <h2 className='font-semibold font-montserrat text-6xxl leading-md text-darkblue'>What we do</h2>
                    <img src={displayAvatar} alt="displayAvatar" className='max-w-[590.5px] max-h-[378.96px] mt-12 -mx-3' />
                </div>
                <div className='w-1/2 px-3 flex flex-col items-end'>
                    <span className='ms-auto'>
                        <Logo />
                    </span>
                    <p className='font-normal font-poppins text-xl leading-lg opacity-70 text-darkblue max-w-[512px] mt-5'>We define the intangible assets of your brand and subsequently increase <span className=' text-purple'>trust and loyalty to your brand.</span> Uniqueness, value proposition, clearly understandable core messages and an innovative design result in a brand personality that will be. We then transfer this genetic code to the relevant target groups cross-media via relevant channels. And we will reposition you profitably</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo