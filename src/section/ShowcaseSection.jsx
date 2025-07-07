import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const arrowRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    // Initial section fade in
    gsap.fromTo(
      sectionRef.current,
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      }
    );

    // First project animation
    gsap.fromTo(
      rydeRef.current,
      {
        opacity: 0,
        x: -100,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rydeRef.current,
          start: "top bottom-=100",
        }
      }
    );

    // Project list animations
    const cards = [libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
          rotation: -5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top bottom-=50",
        }
      }
    );

    // Arrow animation
    gsap.to(arrowRef.current, {
      x: 5,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Hover animations for projects
    const projects = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    projects.forEach(project => {
      project.addEventListener('mouseenter', () => {
        gsap.to(project, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      project.addEventListener('mouseleave', () => {
        gsap.to(project, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper cursor-pointer">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Ace Your Tech Interviews with AI: Smart, Personalized Mock Interview Practice
              </h2>
              <p className="text-white-50 md:text-xl">
                A modern web app built with Next.js, React, Firebase, and TailwindCSS, offering AI-powered mock interviews, instant feedback, and a beautiful, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project cursor-pointer" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>AI FUSION : The Registration Platform</h2>
            </div>

            <div className="project cursor-pointer" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <button
            ref={buttonRef}
            onClick={() => navigate('/projects')}
            className="px-8 py-3 bg-white text-black rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 text-lg font-medium group"
          >
            Explore All Projects
            <svg 
              ref={arrowRef}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transition-transform group-hover:translate-x-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;