import React from 'react';
import Navbar from './Navbar';
import Desktop from "../../asstes/images/webp/hero/cloud-desktop.png";

const CommonHeader = ({ heroHeading, hideImage, hideParagraph }) => {
  return (
    <div className='bg-darkpurple'>
      <div className="max-w-[1164px] mx-auto px-3">
        <Navbar/>
        <div className="sm:px-12 mt-16 pb-[59px] md:px-8 lg:px-0 flex flex-col items-center">
          <h1 className='leading-[107%] font-montserrat text-center text-white text-5xl md:text-6xxl lg:text-8xxl'>
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
            <p className='text-white text-center font-poppins text-base px-3 md:text-2xl mt-3 lg:mt-9 mb-1'>
              Kreativagentur für Branding, Social Media & digitale Lösungen.
            </p>
          )}
          {!hideImage && (
            <img src={Desktop} alt="desktop" className='w-[621px] xl:h-[469px]' />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
