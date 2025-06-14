import React, { useState, useEffect } from 'react'
import { counterItems } from '../constants'
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
    <div className='padding-x-lg xl:mt-0 mt-32'> 
      <div className='mx-auto grid-4-cols gap-6 mb-1'>
        {/* First Counter Card */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onHoverStart={() => setHoveredCard('projects')}
          onHoverEnd={() => setHoveredCard(null)}
          className='bg-zinc-900 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group'
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
            containerClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaLaptopCode />
          </div>
          <div className='text-white text-3xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <CountUp suffix="+" end={5} duration={2.5} enableScrollSpy scrollSpyOnce/>
          </div>
          <div className='text-white-50 text-base font-medium group-hover:text-white transition-colors duration-300 relative z-10'>
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
          className='bg-zinc-900 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group'
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
            containerClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaCode />
          </div>
          <div className='text-white text-3xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <CountUp suffix="+" end={150} duration={2.5} enableScrollSpy scrollSpyOnce/>
          </div>
          <div className='text-white-50 text-base font-medium group-hover:text-white transition-colors duration-300 relative z-10'>
            Solve LeetCode Problems
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onHoverStart={() => setHoveredCard('email')}
          onHoverEnd={() => setHoveredCard(null)}
          className='bg-zinc-900 rounded-lg p-2 flex flex-col items-center justify-center relative overflow-hidden group'
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
            containerClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaEnvelope />
          </div>
          <div className='text-white text-lg font-medium group-hover:text-blue-400 group-hover:font-bold transition-colors duration-300 relative z-10 text-center leading-relaxed'>
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
          
          <div className="w-full flex justify-center">
            {copied && confettiAnimation && (
              <div className="absolute -bottom-5 right-0 z-50">
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
          className='bg-zinc-900 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group'
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
            containerClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className='text-white text-4xl font-bold mb-0.5 group-hover:text-blue-400 transition-colors duration-300 relative z-10'>
            <FaFileAlt />
          </div>
          <div className='text-white-50 text-base font-medium group-hover:text-white transition-colors duration-300 relative z-10'>
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
