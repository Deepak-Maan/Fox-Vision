import React from 'react'
import { CommonHeading, CommonsubHeading } from '../common/CommonHeading'
import MhillPaloka from '../../asstes/images/webp/design-mastery/mhillPaloka.webp';
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import DesignProject from "../../asstes/images/webp/about-us/designProject.webp";
import { Logo } from '../common/Icon';

const DesignMastery = () => {
  return (
    <div>
      <div className="max-w-[1164px] mx-auto px-3">
        <div className='pt-12 md:pt-16 lg:pt-[70px] xl:pt-32'>
          <CommonWhatWeDo
            CommonWhatWeDosubheading='FOX VISION'
            paraWidth='lg:max-w-[512px]'
            Logo={<Logo />}
            SvgPosition='lg:justify-end'
            CommonWhatWeDoimg={DesignProject}
            marginPara='mt-3 lg:mt-5'
            textColor1='text-lightsky2'
            arrowPosition='left-0 lg:left-[41%] top-[-11%] lg:top-[7%]'
            textColor3='text-lightsky2'
            ImgClass='max-w-[564px] max-h-[328px] mt-[29px]'
            CommonWhatWeDoheading='Design Project Agency'
            CommonWhatWeDotext2='distinctive appearance'
            CommonWhatWeDotext1='As a design agency, we create a contemporary and'
            CommonWhatWeDotext3=' for you. Style is more in demand than ever. We help you show your best side to your customers.'
            CommonWhatWeDotext4='Strong branding sets'
            CommonWhatWeDotext5='you apart from your competition and creates trust and seriousness.'
          />
        </div>
        <div className="overflow-hidden pt-12 md:pt-16 lg:pt-[70px] xl:pt-[150px]">
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