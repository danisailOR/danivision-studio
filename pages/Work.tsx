
import React, { useState } from 'react';
import { PROJECTS, Icons } from '../constants';
import { ProjectItem } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const closePopup = () => setSelectedProject(null);

  return (
    <div className="animate-in fade-in duration-700 relative">
      <section className="py-24 bg-[#022c22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
              Activity Portfolio
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter italic">
              Selected <span className="text-emerald-400 italic">Works.</span>
            </h1>
            <p className="text-xl text-emerald-100/40 max-w-2xl mx-auto font-medium">
              We focus on clarity, efficiency, and real-world results. Click any card to explore the studio's impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col cursor-pointer transition-all duration-500"
              >
                {/* Visual Card */}
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-emerald-950/40 border border-emerald-900/50 group-hover:border-emerald-400/40 group-hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.3)] transition-all">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale-[50%] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-6 right-6 p-4 bg-emerald-400 rounded-2xl text-emerald-950 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-xl">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                <div className="pt-8 px-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-emerald-100/40 leading-relaxed font-medium text-lg max-w-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 border-t border-emerald-900/30 pt-20 flex flex-col items-center">
            <div className="text-[10vw] font-black text-emerald-900/10 uppercase select-none tracking-tighter leading-none mb-4">
              Results Over Luxury
            </div>
            <p className="text-emerald-600/60 text-center font-bold max-w-lg italic">
              "We don't design for vanity metrics. We design for the person who needs your tool to work every single time."
            </p>
          </div>
        </div>
      </section>

      {/* Project Detail Pop-up / Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#022c22]/90 backdrop-blur-xl animate-in fade-in duration-300"></div>
          
          {/* Content Card */}
          <div 
            className="relative w-full max-w-4xl glass-card rounded-[3.5rem] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border-emerald-400/20 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-visible">
              {/* Media Section */}
              <div className="lg:w-1/2 aspect-square lg:aspect-auto">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center relative bg-emerald-950/20">
                {/* Close Button */}
                <button 
                  onClick={closePopup}
                  className="absolute top-6 right-6 p-3 bg-emerald-400/10 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-emerald-950 transition-all z-20"
                >
                  <Icons.Close />
                </button>

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-4xl font-black text-white mb-6 leading-none">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-emerald-100/60 font-medium mb-10">
                    {selectedProject.description}
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em]">
                      Studio Impact Highlights
                    </h4>
                    <ul className="space-y-4">
                      {selectedProject.highlights?.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-4 group">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] flex-shrink-0"></div>
                          <span className="text-emerald-100/80 font-bold leading-tight group-hover:text-white transition-colors">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12">
                    <button 
                      onClick={closePopup}
                      className="w-full py-4 bg-emerald-400 text-emerald-950 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-lg"
                    >
                      Back to Activity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
