
import React, { useState } from 'react';
import { SERVICES, Icons } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const closePopup = () => setSelectedService(null);

  const Triangle = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500/20 w-8 h-8 md:w-16 md:h-16">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 relative">
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
              Activity Portfolio
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Operational <br/>
              <span className="text-emerald-400 italic">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/60 leading-relaxed font-medium max-w-2xl">
              We translate business complexity into visual clarity. Every service is a specific lever for growth and user comprehension.
            </p>
          </div>
        </div>
      </section>

      {/* Elaborated Services Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedService(service)}
                className="group p-8 md:p-10 glass-card rounded-[2.5rem] md:rounded-[3rem] hover:border-emerald-400/50 hover:shadow-[0_0_60px_-15px_rgba(52,211,153,0.3)] transition-all duration-500 relative overflow-hidden cursor-pointer"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 text-emerald-300">
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="p-4 bg-emerald-400/10 rounded-2xl text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-all duration-500">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:translate-x-1 transition-transform">
                        {service.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/80">
                          Focus: {service.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-emerald-100/40 mb-10 font-medium leading-relaxed max-w-md group-hover:text-emerald-100/60 transition-colors">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10">
                    {service.items.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-emerald-100/70 font-bold text-xs md:text-sm group-hover:text-white transition-colors">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-emerald-900/50 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 group-hover:text-emerald-400 transition-colors">
                    View Methodology
                  </span>
                  <div className="text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Final Card - Entire card is now a Link */}
            <Link 
              to="/contact"
              className="p-10 bg-emerald-400 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-center items-center text-center text-emerald-950 group relative overflow-hidden min-h-[350px] transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">Ready to <br/>scale impact?</h3>
               <p className="text-emerald-900 font-bold mb-10 max-w-xs text-base md:text-lg">
                 We adapt our approach to your specific operational constraints.
               </p>
               <span className="px-12 py-5 bg-emerald-950 text-white font-black text-sm uppercase tracking-widest rounded-full group-hover:scale-105 transition-all shadow-xl inline-block">
                 Start your project
               </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Vertical Divider */}
      <section className="py-24 border-t border-emerald-900/30 overflow-hidden relative bg-[#011a14]/50">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-24 text-[10vw] md:text-[8vw] font-black text-emerald-900/20 uppercase select-none tracking-tighter italic">
              <span>Intent</span>
              <Triangle />
              <span>Strategy</span>
              <Triangle />
              <span>Growth</span>
              <Triangle />
            </div>
          ))}
        </div>
      </section>

      {/* Service Details Popup */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#022c22]/95 backdrop-blur-xl animate-in fade-in duration-300"></div>
          
          {/* Content Card */}
          <div 
            className="relative w-full max-w-2xl glass-heavy rounded-[2.5rem] p-6 md:p-12 animate-in zoom-in-95 slide-in-from-bottom-5 duration-500 border-emerald-400/20 shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closePopup}
              className="absolute top-6 right-6 p-2 bg-emerald-400/10 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-emerald-950 transition-all z-20"
            >
              <Icons.Close />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-emerald-400 text-emerald-950 rounded-[1.2rem] shadow-lg flex-shrink-0">
                  {React.cloneElement(selectedService.icon as React.ReactElement, { className: 'w-6 h-6 md:w-8 md:h-8' })}
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500 block mb-1">
                    Capability Detail
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              <p className="text-base md:text-lg text-emerald-100/60 font-medium mb-8 leading-relaxed">
                {selectedService.description} We focus on creating sustainable visual ecosystems that support long-term business objectives.
              </p>
              
              <div className="grid grid-cols-1 gap-y-8 mb-10">
                <div>
                  <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-4">
                    Core Disciplines
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.5)] flex-shrink-0"></div>
                        <span className="text-emerald-100/80 font-bold text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="hidden sm:block p-6 bg-emerald-900/20 border border-emerald-800/40 rounded-[1.5rem]">
                  <p className="text-xl font-black text-white italic mb-2">
                    Impact: {selectedService.impact}
                  </p>
                  <p className="text-xs text-emerald-100/40 leading-relaxed">
                    Aligning your brand with clear strategic intent to ensure competitiveness.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  onClick={closePopup}
                  className="w-full py-4 bg-emerald-400 text-emerald-950 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-xl text-center"
                >
                  Start your project
                </Link>
                <button 
                  onClick={closePopup}
                  className="w-full sm:w-auto px-8 py-4 border border-emerald-800 text-emerald-400 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-900/40 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
