
import React from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
            Bold <span className="text-blue-600">Design</span> Moves
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl leading-relaxed">
            Practical design for people who want more. We help businesses communicate clearly and grow through human-centered visual systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-md text-white bg-blue-600 hover:bg-blue-700 transition-all gap-2"
            >
              View our work
              <Icons.ArrowRight />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm"
            >
              What we do
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
};

export default Hero;
