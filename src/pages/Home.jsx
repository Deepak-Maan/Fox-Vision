import React from 'react'
import CommonHeader from "../components/common/CommonHeader"
import WhatWeDo from '../components/fox-vision/WhatWeDo'
import HowWeWorks from '../components/fox-vision/HowWeWorks'
import ProjectStarten from '../components/fox-vision/ProjectStarten'
import Angebot from '../components/fox-vision/Angebot'
import LogoDesign from '../components/fox-vision/LogoDesign'


const Home = () => {
  return (
    <div>
      <CommonHeader />
      <WhatWeDo />
      <CommonHeader/>
      <WhatWeDo/>
      <LogoDesign/>
      <HowWeWorks />
      <Angebot />
      <ProjectStarten />
    </div>
  )
}

export default Home