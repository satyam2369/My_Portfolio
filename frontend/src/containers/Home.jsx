import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/footer'
import ProjectsSection from '../components/ProjectsSection'
import Show from '../components/Show'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SkillsSection/>
      <ProjectsSection/>
      <Show/>
      <Footer/>
    </div>
  )
}

export default Home
