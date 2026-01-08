
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
         <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[20%] left-[-5%] w-72 h-72 bg-emerald-400/5 rounded-full blur-[80px]"></div>
      </div>

      <section className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] relative group border border-emerald-900/50">
                <img src="https://images.unsplash.com/photo-1600508774444-466ba7ad9436?q=80&w=800&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 p-10 bg-emerald-400 text-slate-950 rounded-[2rem] hidden md:block rotate-3 shadow-2xl">
                <div className="text-3xl font-black leading-none uppercase">Field Tested</div>
                <div className="text-sm font-bold mt-2 uppercase tracking-widest">Est. 2024</div>
              </div>
            </div>
            
            <div>
              <span className="inline-block px-4 py-1 mb-6 text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
                Studio Philosophy
              </span>
              <h1 className="text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
                Design built for the <span className="text-emerald-400 italic">business floor.</span>
              </h1>
              <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
                <p>
                  Danivision Studio operates at the intersection of clarity and impact. We believe that professional design shouldn't be a distant luxury—it's a critical operational tool for every entrepreneur and growing business.
                </p>
                <p>
                  Our studio mindset is defined by being "present." We don't hide behind theory. We get into the trenches with you to understand the specific friction points in your industry, whether you're managing industrial logistics or building a SaaS platform.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-10">
                  <div className="p-8 bg-slate-900/50 border border-emerald-900/40 rounded-3xl">
                    <div className="text-4xl font-black text-white mb-2 italic">01</div>
                    <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Direct Language</div>
                  </div>
                  <div className="p-8 bg-slate-900/50 border border-emerald-900/40 rounded-3xl">
                    <div className="text-4xl font-black text-white mb-2 italic">02</div>
                    <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Business ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/30 border-y border-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-16 italic underline decoration-emerald-400/30 underline-offset-8">Studio Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8">
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Grounded</h4>
              <p className="text-slate-400 font-medium">Design that reflects the reality of the service or product, never over-promising through visual fluff.</p>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Collaborative</h4>
              <p className="text-slate-400 font-medium">You are the expert in your business. We are the experts in communicating that value. We work as one team.</p>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Permanent</h4>
              <p className="text-slate-400 font-medium">We don't follow passing trends. We build visual systems that remain relevant as your business scales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
