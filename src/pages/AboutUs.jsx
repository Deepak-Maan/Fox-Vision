import React from 'react'
import CommonHeader from '../components/common/CommonHeader'

const AboutUs = () => {
  return (
    <div>
<CommonHeader heroHeading={[
    { text: 'About ', isBold: true },
    { text: 'Us', isBold: false },
  ]}
  hideImage={true}
  hideParagraph={true}/>

    </div>
  )
}

export default AboutUs