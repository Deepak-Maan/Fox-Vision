import React from 'react';
import footerLogo from '../../asstes/images/svg/footerLogo.svg';
import { footerIcons } from './Helper';
import footerVector1 from '../../asstes/images/webp/footer/footerVector1.png';
import footerVector2 from '../../asstes/images/webp/footer/footerVector2.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-darkblue relative'>
            <img src={footerVector1} alt="footerVector1" className='w-[205px] h-[360px] absolute left-0 top-0 pointer-events-none ' />
            <img src={footerVector2} alt="footerVector2" className='w-[205px] h-[360px] absolute right-0 bottom-0 pointer-events-none ' />
            <div className='container xl:max-w-[1140px] px-3 mx-auto pt-[210px]'>
                <div className='flex flex-row flex-wrap pb-[48px] sm:pb-[64px] md:pb-[80px] lg:pb-[111px] justify-between'>
                    <div className='lg:w-4/12 w-full'>
                        <Link href="">
                            <img src={footerLogo} alt="logo" className='sm:w-[252px] h-[33px] w-[230px]' />
                        </Link>
                        <p className='font-poppins text-white opacity-70 max-w-[311px] leading-normal mt-2 sm:mt-4 mb-4 sm:mb-[30px]'>Libero morbi pharetra sollicitudin enim praesent nulla velit sitonec leodui.</p>
                        <div className="flex gap-[16px] items-center">
                            {footerIcons.map((icon, index) => {
                                return (
                                    <a key={index} href={icon.link} aria-label={icon.label} target='blank' className="hover:scale-110 transition-all duration-300 ease-linear">
                                        {icon.footersvg}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className='lg:w-7/12 w-full mt-[40px] lg:mt-0'>
                        <div className='flex flex-wrap flex-row lg:justify-end'>
                            <div className='sm:w-3/12 w-6/12'>
                                <ul>
                                    <li className='text-white font-poppins font-semibold text-base mb-[14px] inline-block'>Home</li>
                                    <li><a href="#about" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>About us</a></li>
                                    <li><a href="#offer" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Offer</a></li>
                                    <li><a href="#contact" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Contact</a></li>
                                </ul>
                            </div>
                            <div className='lg:w-[29%] sm:w-3/12 w-6/12'>
                                <ul>
                                    <li className='text-white font-poppins font-semibold text-base mb-[14px] inline-block'>Agency</li>
                                    <li><a href="#vision" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>Fox Vision GmbH </a></li>
                                    <li><a href="#" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] max-w-[149px]'>Badstrasse 50 CH-5200 Brugg</a></li>
                                    <li><a href="tel:+919711008738" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>+41 79 725 61 00</a></li>
                                    <li><a href="#" className='text-white opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>info@foxvision.ch</a></li>
                                </ul>
                            </div>
                            <div className='sm:w-4/12 w-full flex sm:justify-end md:justify-center lg:justify-end mt-2 sm:mt-0'>
                                <ul>
                                    <li className='text-white font-poppins font-semibold text-base mb-[14px] inline-block'>Legal</li>
                                    <li><a href="#imprint" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Imprint</a></li>
                                    <li><a href="#Dataprotection" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>Data protection</a></li>
                                    <li><a href="#Copyright" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Copyright</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-white  opacity-70 text-sm font-normal font-poppins pb-[12px] px-8 sm:px-0">
                    Copyright©{new Date().getFullYear()} Fox Vision GmbH. All right reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer;