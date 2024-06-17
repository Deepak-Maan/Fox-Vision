import React from 'react'
import CommonHeader from '../components/common/CommonHeader'

const Offer = () => {
  return (
    <div>
      <CommonHeader heroHeading={[
    { text: 'Offer ', isBold: false },
  ]}
  hideImage={true}
  hideParagraph={true}/>
    </div>
  )
}

export default Offer