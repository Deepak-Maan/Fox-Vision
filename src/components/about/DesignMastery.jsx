import React from 'react'
import { CommonHeading, CommonsubHeading } from '../common/CommonHeading'
import MhillPaloka from '../../asstes/images/webp/design-mastery/mhill-paloka.png';

const DesignMastery = () => {
  return (
    <div>
      <div className="max-w-[1164px] mx-auto px-3">
          <div className="overflow-hidden">
            <CommonsubHeading subheading="FOX VISION - Friendly and reliable" />
            <CommonHeading
                            heading="Design Mastery in Our Genes" className="!text-center" />

                            <div className="mt-6 lg:mt-[55px] py-6  sm:p-4  lg:p-[35px] shadow-[0px_0px_51px_8px_#00000012] justify-center flex flex-wrap items-center">
                              <div className="md:w-1/2 px-2 sm:px-4 xl:px-0">
                                   <h4 className='font-poppins font-semibold text-2xl mb-1 sm:mb-2 text-center md:text-start md:mb-4 text-darkblue leading-[150%]'>Mhill Paloka</h4>
                                   <p className='font-poppins text-base lg:text-xl font-normal lg:max-w-[500px] text-center md:text-start text-offgrey !leading-[183%]'>Mhill Paloka deepened his know-how in the areas of purchasing, marketing and controlling in a large international company. He has also been a founding member of a facility management company since 2009. Design has always been extremely important to him and he is happy to help you stay up to date.</p>
                              </div>
                              <div className="md:w-1/2 px-2 sm:px-4 xl:px-0">
                              <img src={MhillPaloka} alt="Mhill Paloka" className='w-[330px] sm:w-[530px] mt-5 md:mt-0 sm:mt-8 xl:h-[392px]' />
                              </div>
                            </div>
          </div>
      </div>
    </div>
  )
}

export default DesignMastery