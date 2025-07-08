import React, { useState, useEffect } from 'react'
import { counterItems } from '../constants/index.js'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCode, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { IoCopyOutline } from 'react-icons/io5';
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation.jsx';
import MagicButton from './MagicButton';
import Lottie from 'lottie-react';

const AnimatedCounter = () => {
  const [copied, setCopied] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [confettiAnimation, setConfettiAnimation] = useState(null);

  useEffect(() => {
    fetch('/assets/confetti.json')
      .then(response => response.json())
      .then(data => {
        setConfettiAnimation(data);
      })
      .catch(error => {
        console.error('Error loading confetti animation:', error);
      });
  }, []);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('suchithubale@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResumeClick = () => {
    window.open('/FinalResume.pdf', '_blank');
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div id='#counter' className='mt-32 padding-x-lg xl:mt-0'> 
      <div className='gap-6 mx-auto mb-1 grid-4-cols'>
        {/* First Counter Card */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onHoverStart={() => setHoveredCard('projects')}
          onHoverEnd={() => setHoveredCard("click to view my projects")}
          onClick={() => window.open('https://github.com/SuchitHubale/', '_blank')}
          className='relative flex flex-col items-center justify-center p-3 overflow-hidden rounded-lg cursor-pointer bg-zinc-900 group'
        >
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(108, 0, 162)"
            gradientBackgroundEnd="rgb(0, 17, 82)"
            firstColor="18, 113, 255"
            secondColor="221, 74, 255"
            thirdColor="100, 220, 255"
            fourthColor="200, 50, 50"
            fifthColor="180, 180, 50"
            pointerColor="140, 100, 255"
            size="80%"
            blendingValue="hard-light"
            interactive={true}
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaLaptopCode />
          </div>
          <div className='text-white text-3xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <CountUp suffix="+" end={5} duration={2.5} enableScrollSpy scrollSpyOnce/>
          </div>
          <div className='relative z-10 text-base font-medium transition-colors duration-300 text-white-50 group-hover:text-white'>
            Completed Projects
          </div>
        </motion.div>

        {/* Second Counter Card */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onHoverStart={() => setHoveredCard('leetcode')}
          onHoverEnd={() => setHoveredCard(null)}
          className='relative flex flex-col items-center justify-center p-3 overflow-hidden rounded-lg cursor-pointer bg-zinc-900 group'
        >
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(108, 0, 162)"
            gradientBackgroundEnd="rgb(0, 17, 82)"
            firstColor="18, 113, 255"
            secondColor="221, 74, 255"
            thirdColor="100, 220, 255"
            fourthColor="200, 50, 50"
            fifthColor="180, 180, 50"
            pointerColor="140, 100, 255"
            size="80%"
            blendingValue="hard-light"
            interactive={true}
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaCode />
          </div>
          <div className='text-white text-3xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <CountUp suffix="+" end={300} duration={2.5} enableScrollSpy scrollSpyOnce/>
          </div>
          <div className='relative z-10 text-base font-medium transition-colors duration-300 text-white-50 group-hover:text-white'>
            Solve DSA Problems
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onHoverStart={() => setHoveredCard('email')}
          onHoverEnd={() => setHoveredCard(null)}
          className='relative flex flex-col items-center justify-center p-2 overflow-hidden rounded-lg bg-zinc-900 group'
        >
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(108, 0, 162)"
            gradientBackgroundEnd="rgb(0, 17, 82)"
            firstColor="18, 113, 255"
            secondColor="221, 74, 255"
            thirdColor="100, 220, 255"
            fourthColor="200, 50, 50"
            fifthColor="180, 180, 50"
            pointerColor="140, 100, 255"
            size="80%"
            blendingValue="hard-light"
            interactive={true}
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaEnvelope />
          </div>
          <div className='relative z-10 text-lg font-medium leading-relaxed text-center text-white transition-colors duration-300 group-hover:text-blue-400 group-hover:font-bold'>
            {copied ? (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                Let's freaking goo!
              </motion.span>
            ) : (
              <span className="inline-block">
                Do you want to start a <br /> project together?
              </span>
            )}
          </div>
          
          <div className="flex justify-center w-full">
            {copied && confettiAnimation && (
              <div className="absolute right-0 z-50 -bottom-5">
                <Lottie 
                  animationData={confettiAnimation}
                  loop={false}
                  autoplay={true}
                  style={{ width: 400, height: 200 }}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice"
                  }}
                />
              </div>
            )}
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="center"
              handleClick={handleEmailClick}
              otherClasses="!bg-[#161A31] hover:!bg-[#1a1f3d] transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Resume Card */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onClick={handleResumeClick}
          onHoverStart={() => setHoveredCard('resume')}
          onHoverEnd={() => setHoveredCard(null)}
          className='relative flex flex-col items-center justify-center p-3 overflow-hidden rounded-lg cursor-pointer bg-zinc-900 group'
        >
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(108, 0, 162)"
            gradientBackgroundEnd="rgb(0, 17, 82)"
            firstColor="18, 113, 255"
            secondColor="221, 74, 255"
            thirdColor="100, 220, 255"
            fourthColor="200, 50, 50"
            fifthColor="180, 180, 50"
            pointerColor="140, 100, 255"
            size="80%"
            blendingValue="hard-light"
            interactive={true}
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaFileAlt />
          </div>
          <div className='relative z-10 text-base font-medium transition-colors duration-300 text-white-50 group-hover:text-white'>
            View Resume
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === 'resume' ? 1 : 0 }}
            className='text-white-50 text-xs mt-0.5 relative z-10'
          >
            Opens in new tab
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedCounter;
