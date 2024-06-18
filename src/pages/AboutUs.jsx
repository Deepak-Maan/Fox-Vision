import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import HowWeWorks from '../components/fox-vision/HowWeWorks'
import ProjectStarten from '../components/fox-vision/ProjectStarten'
import DesignMastery from '../components/about/DesignMastery'
import CustomerFocus from '../components/about/CustomerFocus'
const AboutUs = () => {
  return (
    <div>
      <CommonHeader heroHeading={[
        { text: 'About ', isBold: true },
        { text: 'Us', isBold: false },
      ]}
        hideImage={true}
        hideParagraph={true} />

      <DesignMastery />
      <HowWeWorks />
      <CustomerFocus />
      <ProjectStarten />
 
    </div>
  )
}

export default AboutUs