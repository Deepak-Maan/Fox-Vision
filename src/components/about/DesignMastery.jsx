import React from 'react'
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import DesignProject from "../../asstes/images/webp/about-us/designProject.png";
import { Logo } from '../common/Icon';

const DesignMastery = () => {
  return (
    <div>
      <div className="max-w-[1164px] mx-auto px-3">
        <div className='pt-12 md:pt-16 lg:pt-[70px] xl:pt-32'>
      <CommonWhatWeDo
                CommonWhatWeDosubheading='FOX VISION'
                paraWidth= 'lg:max-w-[512px]'
                Logo = {<Logo/>} 
                SvgPosition = 'lg:justify-end'
                CommonWhatWeDoimg={DesignProject}
                marginPara = 'mt-3 lg:mt-5'
                textColor1='text-lightsky2'
                arrowPosition='left-0 lg:left-[41%] top-[-11%] lg:top-[7%]'
                textColor3='text-lightsky2'
                ImgClass = 'max-w-[564px] max-h-[328px] mt-[29px]'
                CommonWhatWeDoheading='Design Project Agency'
                CommonWhatWeDotext2='distinctive appearance'
                CommonWhatWeDotext1='As a design agency, we create a contemporary and'
                CommonWhatWeDotext3=' for you. Style is more in demand than ever. We help you show your best side to your customers.'
                CommonWhatWeDotext4='Strong branding sets'
                CommonWhatWeDotext5='you apart from your competition and creates trust and seriousness.'
                 />
                </div>
      </div>
    </div>
  )
}

export default DesignMastery