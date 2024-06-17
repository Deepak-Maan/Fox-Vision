import React from 'react';
import footerLogo from '../../asstes/images/svg/footerLogo.svg';
import { footerIcons } from './Helper';

const Footer = () => {
    return (
        <div className='bg-darkblue'>
            <div className='container xl:max-w-[1140px] px-3 mx-auto'>
                <div className='flex flex-row flex-wrap'>
                    <div className='w-4/12'>
                        <img src={footerLogo} alt="logo" className='' />
                        <p className='font-poppins text-white opacity-70 max-w-[311px] leading-normal mt-4 mb-[30px]'>Libero morbi pharetra sollicitudin enim praesent nulla velit sitonec leodui.</p>
                        <div className="flex gap-[16px] items-center">
                            {footerIcons.map((icon, index) => {
                                return (
                                    <a key={index} href={icon.link} aria-label={icon.label} target='blank' className="w-[40px] h-[40px] rounded-[100%] border border-solid border-white flex justify-center items-center hover:scale-110 transition-all duration-300 ease-linear">
                                        {icon.footersvg}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className='w-[7/12]'>
                        <div className='flex flex-wrap flex-row'>
                            <div className='w-3/12'>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
