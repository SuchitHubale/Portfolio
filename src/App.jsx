import React from 'react'
import Hero from './section/Hero'
import AppShowcase from './section/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './section/LogoSection'
import FeatureCards from './section/FeatureCards'
import ExperienceSection from './section/ExperienceSection'
import TechStack from './section/TechStack'
import Contact from './section/Contact'
import Footer from './section/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
