import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Desktop from "../../asstes/images/webp/hero/cloudDesktop.webp";
import { PathArrow } from './Icons';

const CommonHeader = ({ heroHeading, hideImage, hideParagraph, additionalClass }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  let pathChangeText = '';
  if (currentPath === '/about') {
    pathChangeText = 'About Us';
  } else if (currentPath === '/offer') {
    pathChangeText = 'Offer';
  } else if (currentPath === '/portfolio') {
    pathChangeText = 'Portfolios';
  } else if (currentPath === '/contact') {
    pathChangeText = 'Contact Us';
  }

  return (
    <div className='bg-darkpurple custom-header'>
      <div className="max-w-[1164px] mx-auto px-3">
        <Navbar />
        <div className="sm:px-12 md:px-8 lg:px-0 flex flex-col items-center">
          <h1 className={`!leading-[107%] font-montserrat text-center text-white text-5xl md:text-6xxl lg:text-8xxl ${additionalClass}`}>
            {heroHeading ? (
              heroHeading.map((part, index) => (
                <span key={index} className={part.isBold ? 'font-bold' : 'font-normal'}>
                  {part.text}
                </span>
              ))
            ) : (
              <>
                <span className='font-bold'>FOX</span> Vision<br /> Ihre Design Agentur!
              </>
            )}
          </h1>
          {!hideParagraph && (
            <p className='text-white !leading-[150%] text-center font-poppins text-base px-3 md:text-2xl mt-3 lg:mt-9 mb-1'>
              Kreativagentur für Branding, Social Media & digitale Lösungen.
            </p>
          )}
          {!hideImage && (
            <img src={Desktop} alt="desktop" className='w-[714.51px] mb-[59px] xl:ml-20 xl:!h-[469px]' />
          )}
        </div>
        {currentPath !== '/' && (
          <p className="flex items-center gap-2 lg:gap-4 text-white font-medium font-poppins text-sm sm:text-base pb-5 sm:pb-[30px] text-start">
            <Link to="/">Home</Link> <PathArrow /> <span className='cursor-pointer'>{pathChangeText}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CommonHeader;
