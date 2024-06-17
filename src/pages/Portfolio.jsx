import React from 'react'
import CommonHeader from '../components/common/CommonHeader'

function Portfolio() {
  return (
    <div>
         <CommonHeader heroHeading={[
    { text: 'Portfolio ', isBold: false },
  ]}
  hideImage={true}
  hideParagraph={true}/>
    </div>
  )
}

export default Portfolio