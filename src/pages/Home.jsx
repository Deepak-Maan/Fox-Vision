import React from 'react'
import CommonHeader from "../components/common/CommonHeader"
import WhatWeDo from '../components/fox-vision/WhatWeDo'
import HowWeWorks from '../components/fox-vision/HowWeWorks'
import ProjectStarten from '../components/fox-vision/ProjectStarten'


const Home = () => {
  return (
    <div>
      <CommonHeader/>
      <WhatWeDo/>
      <HowWeWorks />
      <ProjectStarten />
    </div>
  )
}

export default Home