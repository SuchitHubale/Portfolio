import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './section/Hero'
import AppShowcase from './section/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './section/LogoSection'
import FeatureCards from './section/FeatureCards'
import ExperienceSection from './section/ExperienceSection'
import TechStack from './section/TechStack'
import Contact from './section/Contact'
import Footer from './section/Footer'
import ProjectsSection from './pages/ProjectsSection'
import ProjectDetails from './pages/ProjectDetails'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
    </>
  )
}

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-white bg-black">
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Layout>
  )
}

export default App;
