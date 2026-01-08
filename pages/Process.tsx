
import React from 'react';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Immersive Header Section with Thematic Design Motifs */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-emerald-950 to-[#022c22]">
        {/* Advanced Decorative Layer */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
          
          {/* 1. Visual Trajectory Motif (Top Left) */}
          <div className="absolute top-[10%] left-[5%] w-64 h-48 animate-float opacity-10 hidden lg:block">
            <svg viewBox="0 0 240 160" className="w-full h-full text-emerald-400">
              <path d="M10 140 Q 60 20, 230 140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="10" cy="140" r="3" fill="currentColor" />
              <circle cx="230" cy="140" r="3" fill="currentColor" />
              <path d="M110 50 L 130 50 M 120 40 L 120 60" stroke="white" strokeWidth="1" className="animate-pulse" />
            </svg>
            <span className="absolute bottom-0 left-4 text-[8px] font-black uppercase tracking-[0.5em] text-emerald-500/40">Visual Trajectory</span>
          </div>

          {/* 2. Ratio Foundation Motif (Bottom Right) */}
          <div className="absolute bottom-[15%] right-[8%] w-80 h-40 animate-float-slow opacity-20 hidden lg:block">
            <div className="w-full h-full border-t border-emerald-400/20 flex flex-col justify-start pt-4 px-6 relative">
              <div className="flex items-baseline gap-4">
                <span className="text-[90px] font-black text-emerald-400/10 leading-none">Φ</span>
                <div className="space-y-2 mb-4">
                  <div className="h-px w-24 bg-emerald-400/30"></div>
                  <div className="h-px w-32 bg-emerald-400/10"></div>
                  <div className="h-px w-16 bg-emerald-400/20"></div>
                </div>
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-emerald-500/30 mt-auto">Ratio Foundation (1.618)</span>
            </div>
          </div>

          {/* 3. Floating Geometric Anchors */}
          <div className="absolute top-[25%] right-[12%] animate-float-slow opacity-20 rotate-12">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" className="text-emerald-400">
              <rect x="5" y="5" width="30" height="30" strokeWidth="0.5" strokeDasharray="2 2" />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </svg>
          </div>
          
          <div className="absolute bottom-[20%] left-[12%] -rotate-12 animate-float opacity-15">
             <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" className="text-emerald-500">
                <path d="M24 8 L 40 34 H 8 Z" strokeWidth="0.5" />
                <path d="M24 16 L 32 30 H 16 Z" strokeWidth="0.5" strokeDasharray="2 2" />
             </svg>
          </div>

          {/* 4. Structural Grid Overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <span className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-[0.5em] text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20 backdrop-blur-md">
              Bold Design Methodology
            </span>
            <h1 className="text-6xl md:text-[12rem] font-black text-white tracking-tighter leading-[0.75] mb-14 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
              Our Creative <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-tr from-emerald-400 via-emerald-100 to-emerald-500 italic drop-shadow-[0_0_40px_rgba(52,211,153,0.4)]">Process</span>.
            </h1>
            <p className="text-xl md:text-3xl text-emerald-100/40 font-medium max-w-2xl leading-relaxed tracking-tight">
              A three-dimensional strategy built for real-world impact and business-level clarity.
            </p>
          </div>
        </div>
      </section>

      {/* The DIO Matrix: Aligned Dimensions */}
      <section className="py-32 bg-[#022c22] border-t border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="group relative h-full flex">
                <div className="glass-card rounded-[3.5rem] p-10 md:p-14 w-full border-emerald-400/10 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Decorative numeric backdrop - Perfectly aligned watermark */}
                  <div className="absolute top-6 right-8 text-[100px] md:text-[140px] font-black text-emerald-400/[0.03] select-none group-hover:text-emerald-400/5 transition-all duration-700 leading-none pointer-events-none">
                    0{idx + 1}
                  </div>

                  <div className="relative z-10 flex flex-col flex-1">
                    <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                      Dimension {idx + 1}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                      {step.title}
                    </h2>
                    <div className="inline-block self-start px-4 py-1.5 mb-10 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-400 italic">
                      {step.concept}
                    </div>
                    
                    <p className="text-emerald-100/40 text-lg font-medium leading-relaxed mb-12 flex-grow">
                      {step.description}
                    </p>

                    <div className="pt-10 border-t border-emerald-900/30 mt-auto">
                      <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-6">Execution Point</h4>
                      <ul className="space-y-4">
                        {[
                           "Operational Validation",
                           "Intentional Consistency",
                           "Root Cause Analysis"
                        ].map((point, i) => (
                           <li key={i} className="flex items-center gap-4 text-emerald-100/60 font-bold text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                              {point}
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* High Fidelity Visual Accent */}
                  <div className="absolute bottom-[-40px] right-[-40px] w-64 h-64 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 pointer-events-none">
                     <svg className="w-full h-full text-emerald-400" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                        <path d="M50 15 L 85 85 L 15 85 Z" stroke="currentColor" strokeWidth="0.5" />
                     </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-[#011a14]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-square glass-heavy rounded-[4rem] p-12 flex flex-col items-center justify-center border border-emerald-400/10 relative overflow-hidden group">
                     {/* 
                         Background Layer: DIO watermark
                     */}
                     <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
                        <div className="text-[15rem] md:text-[22rem] font-black text-white/[0.012] tracking-tighter leading-none group-hover:text-white/[0.03] group-hover:scale-105 transition-all duration-1000">
                           DIO
                        </div>
                     </div>

                     {/* Abstract Structural Motif */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-[85%] h-[85%] border-[0.5px] border-emerald-400 rounded-full animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute w-[65%] h-[65%] border-[0.5px] border-emerald-500 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                     </div>
                     
                     <div className="relative z-10 text-center w-full">
                        <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">The Synthesis.</h3>
                        <p className="text-emerald-100/30 text-lg font-medium max-w-xs mx-auto">
                           Where visibility meets purpose and structure. The result is a system that works as hard as your business.
                        </p>
                     </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-400 rounded-[2.5rem] flex items-center justify-center -z-10 rotate-6 group-hover:rotate-12 transition-transform shadow-[0_20px_40px_rgba(16,185,129,0.2)]"></div>
               </div>

               <div>
                  <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-tight">
                     Field-Tested, <br/><span className="text-emerald-400 italic">Human-Ready.</span>
                  </h2>
                  <div className="space-y-10">
                     {[
                        { title: "Non-Linear Approach", text: "We don't follow rigid phases. We adapt the DIO dimensions to your specific project velocity." },
                        { title: "Direct Feedback Loops", text: "No fluff presentations. We share structural drafts early to ensure alignment with business intent." },
                        { title: "Operational Continuity", text: "We deliver visual systems, not just assets. Everything is built to be managed by your team." }
                     ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className="relative pl-12 group/item animate-in fade-in slide-in-from-left duration-700 fill-mode-both"
                          style={{ animationDelay: `${idx * 150}ms` }}
                        >
                           <div className="absolute left-0 top-1 text-emerald-500 transform group-hover/item:scale-110 transition-transform duration-300">
                              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                 <path d="M9 12l2 2 4-4" />
                              </svg>
                           </div>
                           <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover/item:text-emerald-400 transition-colors duration-300">{item.title}</h4>
                           <p className="text-emerald-100/40 text-base leading-relaxed font-medium transition-opacity duration-300 group-hover/item:opacity-80">{item.text}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Framework Bottom CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[4rem] overflow-hidden group border border-emerald-400/10 bg-emerald-400">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-emerald-500 opacity-100 group-hover:scale-105 transition-transform duration-1000"></div>
             <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
                <h3 className="text-4xl md:text-7xl font-black text-emerald-950 mb-10 tracking-tighter max-w-4xl leading-[0.9]">
                   Experience the framework in <span className="italic underline underline-offset-8 decoration-emerald-950/20">your context.</span>
                </h3>
                <Link 
                  to="/contact" 
                  className="px-20 py-8 bg-emerald-950 text-white font-black text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-2xl hover:bg-black active:scale-95"
                >
                  Initiate Intake Activity
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
