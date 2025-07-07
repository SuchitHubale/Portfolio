import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChromaGrid from '../components/ChromaGrid';
import { projects } from '../constants/index.js';

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    const projectIndex = projects.findIndex(p => p.title === project.title);
    navigate(`/projects/${projectIndex}`);
  };

  return (
    <section className="min-h-screen px-4 bg-black py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => navigate('/')}
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
          Back to Home
        </button>
        <div className="mb-20 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
            Projects
          </h1>
          <div className="w-12 h-1 rounded-full bg-blue-500 mb-4"></div>
          <p className="max-w-xl mx-auto text-base md:text-lg text-gray-400 font-light">
            A curated collection of my favorite work—creative, technical, and always growing.
          </p>
        </div>
        <div className="min-h-[1000px] relative">
          <ChromaGrid 
            data={projects}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className=""
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;