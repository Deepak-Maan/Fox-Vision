import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import PortfolioCardSection from '../components/portofolio/PortfolioCardSection'

function Portfolio() {
  return (
    <div>
      <CommonHeader heroHeading={[
        { text: 'Portfolio ', isBold: false },
      ]}
        hideImage={true}
        hideParagraph={true} />
      <PortfolioCardSection />
    </div>
  )
}

export default Portfolio