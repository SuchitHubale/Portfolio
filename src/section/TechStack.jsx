import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { motion } from 'framer-motion'

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0}, {
      y: 0,
      opacity: 1, 
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
      }
    })
  })

  return (
    <div id="skills" className="flex-center section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <div className="w-full h-full md:px-10 px-5 relative z-10">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <motion.div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group rounded-full hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper group-hover:scale-110 transition-transform duration-300">
                  <TechIcon model={techStackIcon} />
                </div>
                <div className="padding-x w-full text-center">
                  <p className="text-white-50 group-hover:text-white font-medium transition-colors duration-300">
                    {techStackIcon.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
