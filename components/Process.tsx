
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Our Philosophy: <span className="text-blue-600">DIO</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-12">
              Design – Intention – Origine. A straightforward approach to complex problems.
            </p>
            
            <div className="space-y-12">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2 uppercase text-xs tracking-wider">
                      {step.concept}
                    </p>
                    <p className="text-slate-600 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-slate-900 rounded-3xl p-12 aspect-square flex flex-col justify-center items-center text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/10 rounded-full animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-8xl font-black text-white/10 mb-4 tracking-tighter">DIO</div>
                <h4 className="text-white text-3xl font-bold mb-4">Field-tested, human-ready.</h4>
                <p className="text-slate-400 text-lg">
                  We emphasize collaboration and direct feedback over long-winded presentations.
                </p>
              </div>
            </div>
            {/* Visual decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
