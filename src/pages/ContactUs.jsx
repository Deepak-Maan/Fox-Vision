import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import ContactWithFoxvision from '../components/contact-us/ContactWithFoxvision'
import Map from '../components/contact-us/Map'

const ContactUs = () => {
  return (
    <div>
      <CommonHeader heroHeading={[
        { text: 'Contact ', isBold: false },
        { text: 'Us', isBold: true },
      ]}
        hideImage={true}
        hideParagraph={true} />
      <ContactWithFoxvision />
      <Map/>
    </div>
  )
}

export default ContactUs