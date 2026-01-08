
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Real-world results
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            We work with startups, restaurants, and service companies to build design that actually gets used.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-600 font-medium">
            Interested in seeing more industry-specific cases? 
            <a href="#contact" className="ml-2 text-blue-600 border-b-2 border-blue-600 hover:text-blue-700 transition-colors">Let's talk.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
