import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import ContactWithFoxvision from '../components/contact-us/ContactWithFoxvision'

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
    </div>
  )
}

export default ContactUs