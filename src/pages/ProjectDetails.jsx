import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Reusable Icon-Text component for metadata
const IconText = ({ icon, text }) => (
  <div className="flex items-center text-gray-400 text-sm">
    {icon}
    <span className="ml-1 font-medium">{text}</span>
  </div>
);

// Back Button Component (refined)
const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed top-8 left-8 z-50 flex items-center text-gray-300 hover:text-white transition-colors group text-lg bg-gray-900 bg-opacity-80 px-4 py-2 rounded-full shadow-lg backdrop-blur-md"
    style={{ backdropFilter: 'blur(6px)' }}
  >
    <svg
      className="w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    Back to Projects
  </button>
);

// Section Wrapper Component with Animations
const SectionIcon = () => (
  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
);

const Badge = ({ text }) => (
  <span className="px-2 py-1 bg-gray-800 text-gray-200 rounded text-xs font-medium ml-2">{text}</span>
);

// Define new icons for About and Problem sections
const AboutIcon = () => (
  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ProblemIcon = () => (
  <svg className="w-6 h-6 text-orange-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);
const ArchitectureIcon = () => (
  <svg className="w-6 h-6 text-purple-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);
const ChallengesIcon = () => (
  <svg className="w-6 h-6 text-red-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const FeaturesIcon = () => (
  <svg className="w-6 h-6 text-indigo-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);
const TechnicalIcon = () => (
  <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const TimelineIcon = () => (
  <svg className="w-6 h-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ProjectInfoIcon = () => (
  <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const TechnologiesIcon = () => (
  <svg className="w-6 h-6 text-emerald-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

// For ProjectSection, allow passing a customIcon prop
const ProjectSection = ({ title, content, ref, description, className = '', badge, customIcon }) => (
  <div ref={ref} className={`p-8 rounded-xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-md overflow-hidden shadow-lg ${className}`}>
    <div className="flex items-center mb-4">
      {customIcon ? customIcon : <SectionIcon />}
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      {badge && <Badge text={badge.text} />}
    </div>
    {description && <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>}
    {content}
  </div>
);

// Action Buttons Component (refined with icons)
const ActionButtons = ({ liveDemo, sourceCode }) => (
  <div className="flex flex-col gap-4 mt-6">
    {liveDemo && (
      <a
        href={liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-blue-600 rounded-lg text-white font-semibold flex items-center justify-center
                   hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
      >
        {/* External Link Icon */}
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
        Live Demo
      </a>
    )}
    {sourceCode && (
      <a
        href={sourceCode}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-gray-800 rounded-lg text-white font-semibold flex items-center justify-center
                   hover:bg-gray-700 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/30"
      >
        {/* GitHub Logo */}
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
        View Source Code
      </a>
    )}
  </div>
);

// Not Found Component (simple)
const NotFound = ({ onBack }) => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl mb-6">Project Not Found</h1>
      <button
        onClick={onBack}
        className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white font-semibold"
      >
        Back to Projects
      </button>
    </div>
  </div>
);

// Function to get icon based on icon name
const getMilestoneIcon = (iconName) => {
  const iconMap = {
    'clipboard': (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    'code': (
      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    'deploy': (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return iconMap[iconName] || (
    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const sectionsRef = useRef([]);
  const sidebarRef = useRef(null);
  const techStackRef = useRef(null); // Ref for tech stack in sidebar

  const project = projects[parseInt(projectId)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useGSAP(() => {
    // Initial page load animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Header animation
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    // Title animation within header
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Sidebar animation
    gsap.fromTo(
      sidebarRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.7,
        scrollTrigger: {
          trigger: sidebarRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Tech stack animation in sidebar
    gsap.fromTo(
      techStackRef.current.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)", delay: 1.0 }
    );

    // Section animations for main content
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=150", // Adjust trigger point
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, [project]); // Re-run animations if project changes

  if (!project) {
    return <NotFound onBack={() => navigate('/projects')} />;
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans">
      {/* Project Header Section */}
      <div
        ref={headerRef}
        className="relative w-full h-[450px] bg-gray-950 overflow-hidden border-b border-gray-800"
      >
        {/* Back Button */}
        <BackButton onClick={() => navigate('/projects')} />

        {/* Abstract Background Effect */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={project.image} alt="" className="w-full h-full object-cover filter blur-lg" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-5 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-20 w-full max-w-6xl mx-auto h-full flex flex-col justify-end p-6 md:p-12 pb-8">
          {/* Project Title and Description */}
          <div className="max-w-5xl">
            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed font-light">
              {project.subtitle}
            </p>
          </div>
          {/* Project Status and Category Bar */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 text-sm font-medium border border-gray-700/50 hover:bg-gray-700/80 transition-colors">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-full flex items-center text-yellow-200 text-sm font-medium border border-yellow-500/30 hover:from-yellow-500/30 hover:to-orange-500/30 transition-all">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                </svg>
                Featured Project
              </span>
            )}
            <span className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
              {project.role}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-16 px-4 md:px-8">
        <div className="lg:col-span-2 space-y-12">
          {/* About This Project */}
          <ProjectSection
            ref={el => sectionsRef.current[0] = el}
            title="About This Project"
            content={<p className="text-gray-300 leading-relaxed">{project.about}</p>}
            className="border border-gray-800"
            customIcon={<AboutIcon />}
          />

          {/* Problem Statement */}
          <ProjectSection
            ref={el => sectionsRef.current[1] = el}
            title="Problem Statement"
            content={<p className="text-gray-300 leading-relaxed">{project.problemStatement}</p>}
            className="border border-gray-800"
            customIcon={<ProblemIcon />}
          />



          <ProjectSection
            ref={el => sectionsRef.current[3] = el}
            title="Key Challenges"
            content={
              <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                {project.keyChallenges.map((challenge, index) => (
                  <li key={index} className="hover:text-white transition-colors">{challenge}</li>
                ))}
              </ul>
            }
            className="border border-gray-800"
            customIcon={<ChallengesIcon />}
          />


        </div>

        {/* Project Info Sidebar */}
        <div ref={sidebarRef} className="lg:col-span-1 h-fit space-y-8 lg:sticky lg:top-24">
          <div className="bg-gray-900/30 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700/50">
            <div className="flex items-center mb-5">
              <ProjectInfoIcon />
              <h2 className="text-2xl font-bold text-white">Project Info</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <IconText
                icon={<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>}
                text={project.duration}
              />
              <IconText
                icon={<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>}
                text={project.role}
              />
              <IconText
                icon={<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>}
                text={project.category}
              />
              {project.featured && (
                <IconText
                  icon={<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>}
                  text="Featured Project"
                />
              )}
            </div>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-md p-8 rounded-xl border border-gray-700/50">
            <div className="flex items-center mb-5">
              <TechnologiesIcon />
              <h2 className="text-2xl font-bold text-white">Technologies</h2>
            </div>
            <div ref={techStackRef} className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-600/50 hover:bg-blue-600 hover:text-white transition-all cursor-default shadow"
                >
                  {/* Try to show logo if available, fallback to text */}
                  {project.technologyLogos && project.technologyLogos[tech] ? (
                    <img src={project.technologyLogos[tech]} alt={tech} className="w-5 h-5 object-contain" />
                  ) : null}
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ActionButtons liveDemo={project.liveDemo} sourceCode={project.sourceCode} />
        </div>
      </div>
      <div className='max-w-7xl mx-auto grid grid-cols-1 gap-12 py-2 px-4 md:px-8'>
        <div >
          {/* System Architecture */}
          <ProjectSection
            ref={el => sectionsRef.current[2] = el}
            title="System Architecture"
            content={
              <div className="space-y-6 lg:col-span-2">
                {/* Architecture Overview */}
                <div className='space-y-6'>
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.systemArchitecture?.overview || "A comprehensive system architecture designed for scalability, performance, and maintainability."}
                    </p>
                  </div>

                  {/* Architecture Components */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.systemArchitecture && Object.entries(project.systemArchitecture)
                      .filter(([key]) => key !== 'overview' && key !== 'diagram')
                      .map(([key, value]) => (
                        <div key={key} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                          <h4 className="text-sm font-medium text-gray-400 mb-2 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          <p className="text-white font-medium">{value}</p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Architecture Diagram */}
                {project.systemArchitecture?.diagram && (
                  <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <h3 className="text-lg font-semibold text-white mb-3">System Flow</h3>
                    <pre className="whitespace-pre-wrap text-gray-300">
                      {project.systemArchitecture.diagram}
                    </pre>
                  </div>
                )}
              </div>
            }
            description="A high-level overview of the project's technical stack and how components interact."
            className="border border-gray-800"
            customIcon={<ArchitectureIcon />}
          />
        </div>
        {/* Key Features (Advanced Grid) */}
        <ProjectSection
          ref={el => sectionsRef.current[4] = el}
          title="Key Features"
          description="Discover the standout capabilities that make this project unique."
          badge={{ text: 'Core' }}
          content={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center justify-center h-full border border-gray-700/50 shadow-lg transition-all duration-200 group cursor-default text-center hover:scale-105 hover:border-blue-500/70"
                >
                  <p className="text-gray-100 text-base font-semibold text-center leading-snug">{feature}</p>
                </div>
              ))}
            </div>
          }
          customIcon={<FeaturesIcon />}
        />

        {/* Technical Implementation */}
        <ProjectSection
          ref={el => sectionsRef.current[5] = el}
          title="Technical Implementation"
          content={<p className="text-gray-300 leading-relaxed">{project.technicalImplementation}</p>}
          className="border border-gray-800"
          customIcon={<TechnicalIcon />}
        />

        {/* Project Timeline */}
        <ProjectSection
          ref={el => sectionsRef.current[6] = el}
          title="Project Timeline"
          description="Track the development journey from concept to completion with key milestones and achievements."
          content={
            <div className="space-y-8">
              {/* Timeline milestones with connecting line */}
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-600"></div>

                <div className="space-y-8">
                  {(project.milestones && project.milestones.length > 0 ? project.milestones : [
                    {
                      title: 'Project Planning & Research',
                      description: 'Initial concept development, market research, and technical feasibility analysis.',
                      date: 'Week 1-2',
                      status: 'completed',
                      icon: 'clipboard'
                    },
                    {
                      title: 'Development & Implementation',
                      description: 'Core development phase with feature implementation and testing.',
                      date: 'Week 3-8',
                      status: 'completed',
                      icon: 'code'
                    },
                    {
                      title: 'Testing & Deployment',
                      description: 'Final testing, optimization, and production deployment.',
                      date: 'Week 9-12',
                      status: 'completed',
                      icon: 'deploy'
                    }
                  ]).map((milestone, idx) => (
                    <div key={idx} className="flex items-start space-x-4 group relative">
                      {/* Milestone number with glassy effect */}
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-semibold text-sm border border-gray-600/50 shadow-lg group-hover:scale-110 group-hover:bg-gray-600/60 transition-all duration-300 relative z-10">
                        {idx + 1}
                      </div>

                      {/* Milestone content with glassy effect and hover */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-xl hover:border-gray-600/70 hover:bg-gray-800/40 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors">
                              {milestone.title}
                            </h3>
                            <span className="px-2 py-1 bg-gray-700/50 backdrop-blur-sm text-gray-300 text-xs font-medium rounded border border-gray-600/50 group-hover:bg-gray-600/60 group-hover:text-gray-200 transition-all duration-300">
                              {milestone.date}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3 group-hover:text-gray-200 transition-colors">
                            {milestone.description}
                          </p>
                          {/* Key Challenges */}

                          {/* Status with enhanced styling */}
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-2 ${milestone.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'} group-hover:scale-125 transition-transform duration-300`}></div>
                            <span className={`text-xs font-medium ${milestone.status === 'completed' ? 'text-green-400' : 'text-yellow-400'} group-hover:${milestone.status === 'completed' ? 'text-green-300' : 'text-yellow-300'} transition-colors`}>
                              {milestone.status === 'completed' ? 'Completed' : 'In Progress'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project summary with glassy effect and hover */}
              <div className="mt-8 p-4 bg-gray-800/30 backdrop-blur-md rounded-lg border border-gray-700/50 shadow-lg hover:shadow-xl hover:border-gray-600/70 hover:bg-gray-800/40 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors">Project Duration</h4>
                    <p className="text-white font-semibold group-hover:text-gray-100 transition-colors">{project.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors">Total Milestones</div>
                    <div className="text-white font-semibold group-hover:text-gray-100 transition-colors">{project.milestones ? project.milestones.length : 3}</div>
                  </div>
                </div>
              </div>
            </div>
          }
          className="border border-gray-800"
          customIcon={<TimelineIcon />}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;