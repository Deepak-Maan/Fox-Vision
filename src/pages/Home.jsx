import React from 'react'
import CommonHeader from "../components/common/CommonHeader"
import WhatWeDo from '../components/fox-vision/WhatWeDo'
import HowWeWorks from '../components/fox-vision/HowWeWorks'
import ProjectStarten from '../components/fox-vision/ProjectStarten'
import Angebot from '../components/fox-vision/Angebot'


const Home = () => {
  return (
    <div>
      <CommonHeader />
      <WhatWeDo />
      <HowWeWorks />
      <Angebot />
      <ProjectStarten />
    </div>
  )
}

export default Home