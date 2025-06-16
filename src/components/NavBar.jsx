import React from 'react'
import { navLinks } from '../constants'
import { useState, useEffect } from 'react';
import TrueFocus from './TrueFocus';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className='inner'>
            <a href="#hero" className="no-underline">
                <TrueFocus 
                text="Suchit's Portfolio"
                blurAmount={2}
                borderColor="#3b82f6"
                glowColor="rgba(59, 130, 246, 0.6)"
                animationDuration={1}
                className="text-white-50 text-xl md:text-2xl font-semibold"
                />
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({ link, name}) =>(
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline'/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span className='text'>Contact me</span>
                </div>
            </a>
        </div>

    </header>
  );
};

export default NavBar;



<a href="#hero" className="no-underline">
            <TrueFocus 
              text="Suchit's Portfolio"
              blurAmount={2}
              borderColor="#3b82f6"
              glowColor="rgba(59, 130, 246, 0.6)"
              animationDuration={1}
              className="text-white-50 text-xl md:text-2xl font-semibold"
            />
          </a>