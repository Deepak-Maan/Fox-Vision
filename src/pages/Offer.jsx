import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import OfferCards from '../components/offer/OfferCards'
import DesignStrategy from '../components/offer/DesignStrategy'

const Offer = () => {
  return (
    <div>
      <CommonHeader heroHeading={[
        { text: 'Offer ', isBold: false },
      ]}
        hideImage={true}
        hideParagraph={true} />
      <OfferCards />
      <DesignStrategy />
    </div>
  )
}

export default Offer