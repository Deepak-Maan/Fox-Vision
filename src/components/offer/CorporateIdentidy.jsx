import React from 'react'
import CorporateIdentiy from "../../asstes/images/webp/offer/corporateIdentiy.webp";
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import { ContactList } from '../common/Icons';
const CorporateIdentidy = () => {
  return (
    <>
      <div className=' max-w-[1164px] mx-auto px-3'>
        <div className='pt-12 md:pt-16 lg:pt-[70px] xl:pt-32'>
          <CommonWhatWeDo
            CommonWhatWeDoimg={CorporateIdentiy}
            textColor1='text-darkpurple'
            arrowPosition='left-0 lg:left-[35%] top-[-5%] lg:top-[4%]'
            textColor3='text-darkpurple'
            paraWidth='lg:max-w-[552px]'
            SvgPosition='lg:justify-start'
            marginPara='mt-[0px]'
            Logo={<ContactList />}
            ImgClass='max-w-[465px] max-h-[349px] mt-[17px]'
            CommonWhatWeDoheading='Corporate identity'
            CommonWhatWeDotext2='corporate design,'
            CommonWhatWeDotext1='Many people primarily associate logo and colors with it. Corporate identity is much more. Corporate identity, together with '
            CommonWhatWeDotext3=' forms the character of your company. Give your company a face and awaken emotions and trust in your customers. '
            CommonWhatWeDotext4='FOX VISION'
            CommonWhatWeDotext5='would be happy to develop your corporate identity.'
          />
        </div>
      </div>
    </>
  )
}

export default CorporateIdentidy
