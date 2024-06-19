import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import OfferCards from '../components/offer/OfferCards'
import DesignStrategy from '../components/offer/DesignStrategy'
import CorporateIdentidy from '../components/offer/CorporateIdentidy'
import Faq from '../components/offer/Faq'
import ProjectStarten from '../components/fox-vision/ProjectStarten'

const Offer = () => {
  return (
    <div>
      <CommonHeader heroHeading={[
        { text: 'Offer ', isBold: false },
      ]}
        hideImage={true}
        hideParagraph={true} />
        <CorporateIdentidy/>
      <OfferCards />
      <DesignStrategy />
      <Faq/>
      <ProjectStarten bgColor='bg-white'/>
    </div>
  )
}

export default Offer