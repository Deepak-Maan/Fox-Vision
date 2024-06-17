import React from 'react'
import CommonHeader from '../components/common/CommonHeader'

const ContactUs = () => {
  return (
    <div>
      <CommonHeader heroHeading={[
    { text: 'Contact ', isBold: false },
    { text: 'Us', isBold: true },
  ]}
  hideImage={true}
  hideParagraph={true}/>
    </div>
  )
}

export default ContactUs