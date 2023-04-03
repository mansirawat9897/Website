import React from 'react'
import About from '../components/about/About'
import Blogs from '../components/blogs/Blogs'
import HeroSection from '../components/heroSection/HeroSection'
import MasterSection from '../components/masterSection/MasterSection'
import Services from '../components/services/Services'
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs'
import WorkWith from '../components/workWith/WorkWith'


export default function index() {
  return (
    <>
      <MasterSection/>
      <WorkWith />
      <About />
      <Services />
      <WhyChooseUs />
      <Blogs />
    </>


  )
}
