
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icons, PROCESS_STEPS } from '../constants';

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const steps = [
    {
      label: "Origine",
      question: "What is the current state of your brand's foundation?",
      options: [
        { id: "A", label: "No formal identity", desc: "Operating without established guidelines or a consistent logo." },
        { id: "B", label: "Legacy visual system", desc: "Outdated visuals that no longer reflect our current scale." },
        { id: "C", label: "Fragmented assets", desc: "Multiple styles across different channels with no central root." }
      ]
    },
    {
      label: "Intention",
      question: "How do your current designs support business goals?",
      options: [
        { id: "A", label: "Purely Aesthetic", desc: "Focus is on 'looking good' without specific conversion intent." },
        { id: "B", label: "Disconnected", desc: "Marketing visuals don't align with the product experience." },
        { id: "C", label: "Reactive", desc: "Assets are created on-the-fly to meet immediate needs only." }
      ]
    },
    {
      label: "Design",
      question: "How would you describe your user interface performance?",
      options: [
        { id: "A", label: "High Friction", desc: "Users often struggle with navigation or complex flows." },
        { id: "B", label: "Inconsistent UI", desc: "Buttons, colors, and components vary across platforms." },
        { id: "C", label: "Functional but Static", desc: "Works well but lacks brand personality and impact." }
      ]
    }
  ];

  const handleSelect = (optionId: string) => {
    const newSelections = [...selections, optionId];
    setSelections(newSelections);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2400);
  };

  const resetDiagnostic = () => {
    setCurrentStep(0);
    setSelections([]);
    setShowResult(false);
  };

  const getResult = () => {
    // Basic logic to determine persona
    const countA = selections.filter(s => s === 'A').length;
    if (countA >= 2) return {
      title: "Foundational Gap Detected",
      analysis: "Your brand is operating without a structural 'Origine.' This creates operational friction and weakens market positioning.",
      recommendation: "Branding & Identity System",
      cta: "Review Branding Services"
    };
    return {
      title: "Strategic Misalignment",
      analysis: "Your visual assets lack 'Intention.' While functional, they fail to communicate your core business value effectively.",
      recommendation: "Product & Interface Audit",
      cta: "Explore UI/UX Services"
    };
  };

  const result = showResult ? getResult() : null;

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-24">
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-300/10 rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <span className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-[0.5em] text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20 backdrop-blur-md">
              Field Tested • Business First
            </span>
            <h1 className="text-7xl md:text-[9.5rem] font-black text-white tracking-tighter leading-[0.8] mb-12">
              Grounded <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 italic">By Intent.</span>
            </h1>
            <p className="text-xl md:text-3xl text-emerald-100/60 font-medium mb-16 max-w-2xl leading-relaxed tracking-tight">
              A design-savvy studio bridging the gap between field-tested business and strategic creative systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link to="/services" className="group flex items-center justify-center px-12 py-6 text-xs font-black uppercase tracking-[0.2em] rounded-full bg-emerald-400 text-emerald-950 hover:bg-white transition-all gap-4 shadow-xl">
                The Capability List
                <Icons.ArrowRight />
              </Link>
              <a href="#engagement" className="flex items-center justify-center px-12 py-6 text-xs font-black uppercase tracking-[0.2em] rounded-full border border-emerald-800 text-emerald-400 bg-emerald-950/20 hover:bg-emerald-900/40 backdrop-blur-md transition-all">
                Run Diagnostic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden bg-[#022c22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="glass-heavy rounded-[3.5rem] p-12 md:p-16 relative border border-emerald-400/10">
                  <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-8">Studio Mission</h2>
                  <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                    Equipping businesses with <span className="text-emerald-400 italic">visual systems</span> that command clarity and drive sustainable growth.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                 <div className="relative p-8 border-l-2 border-emerald-500/30 pl-12">
                    <blockquote className="text-2xl font-bold text-emerald-100/40 italic leading-relaxed">
                      Good design is not a luxury; it is a vital business function that converts friction into operational flow.
                    </blockquote>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Diagnostic Console: Gamification Section */}
      <section id="engagement" className="py-24 md:py-40 bg-[#011a14] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="glass-heavy rounded-[3rem] md:rounded-[6rem] p-8 md:p-20 relative overflow-hidden border border-emerald-400/10 shadow-2xl">
              {/* Technical Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start relative z-10">
                 
                 {/* Sidebar Info */}
                 <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-400/10 rounded-full border border-emerald-400/20 mb-10">
                       <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-400">System Diagnostic v1.0</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                       Analyze your <br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500 italic">Structure.</span>
                    </h2>
                    
                    <p className="text-emerald-100/40 text-lg font-medium mb-12 leading-relaxed">
                       A serious assessment of your brand's operational clarity. Identify where design meets friction.
                    </p>

                    <div className="hidden lg:block w-full pt-10 border-t border-emerald-900/40">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Assessment Progress</span>
                          <span className="text-[10px] font-black text-white">{Math.round(((currentStep + (showResult ? 1 : 0)) / steps.length) * 100)}%</span>
                       </div>
                       <div className="h-1 bg-emerald-900/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-400 transition-all duration-700 ease-out"
                            style={{ width: `${((currentStep + (showResult ? 1 : 0)) / steps.length) * 100}%` }}
                          ></div>
                       </div>
                    </div>
                 </div>

                 {/* Console Interaction Area */}
                 <div className="lg:col-span-8 w-full">
                    <div className="glass-card rounded-[3rem] p-8 md:p-14 border-emerald-400/5 min-h-[500px] flex flex-col justify-center relative">
                       
                       {isAnalyzing ? (
                          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
                             <div className="w-24 h-24 border-4 border-emerald-900 border-t-emerald-400 rounded-full animate-spin mb-10 shadow-[0_0_40px_rgba(16,185,129,0.2)]"></div>
                             <h4 className="text-xl font-black text-emerald-400 uppercase tracking-[0.4em] mb-3">Compiling Data</h4>
                             <p className="text-emerald-100/20 font-mono text-xs">Cross-referencing DIO parameters...</p>
                          </div>
                       ) : showResult ? (
                          <div className="animate-in slide-in-from-bottom-5 duration-700">
                             <div className="flex items-center gap-6 mb-10">
                                <div className="p-4 bg-emerald-400 text-emerald-950 rounded-2xl">
                                   <Icons.ArrowRight />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{result?.title}</h3>
                             </div>
                             
                             <div className="space-y-8 mb-12">
                                <div className="p-8 bg-emerald-950/40 border-l-4 border-emerald-400 rounded-r-3xl">
                                   <p className="text-lg md:text-xl text-emerald-100/60 leading-relaxed font-medium">
                                      {result?.analysis}
                                   </p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-8 border border-emerald-900/50 rounded-[2rem]">
                                   <div>
                                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Recommended Solution</p>
                                      <p className="text-xl font-black text-white uppercase tracking-tight">{result?.recommendation}</p>
                                   </div>
                                   <Link to="/services" className="px-8 py-4 bg-emerald-400 text-emerald-950 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg">
                                      {result?.cta}
                                   </Link>
                                </div>
                             </div>
                             
                             <button onClick={resetDiagnostic} className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] hover:text-white transition-colors">
                                Reset Diagnostic Signal
                             </button>
                          </div>
                       ) : (
                          <div className="animate-in fade-in duration-700">
                             <div className="mb-12">
                                <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Dimension {currentStep + 1} of 3</span>
                                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">
                                   {steps[currentStep].question}
                                </h3>
                             </div>
                             
                             <div className="grid grid-cols-1 gap-6">
                                {steps[currentStep].options.map(option => (
                                   <button 
                                     key={option.id}
                                     onClick={() => handleSelect(option.id)}
                                     className="group w-full p-6 md:p-8 bg-emerald-400/5 border border-emerald-900/50 rounded-[1.8rem] text-left hover:bg-emerald-400/10 hover:border-emerald-400/40 transition-all active:scale-[0.98]"
                                   >
                                      <div className="flex items-center justify-between">
                                         <div>
                                            <h4 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors mb-2 tracking-tight">
                                               {option.label}
                                            </h4>
                                            <p className="text-emerald-100/30 text-sm font-medium pr-10">
                                               {option.desc}
                                            </p>
                                         </div>
                                         <div className="w-10 h-10 rounded-full border border-emerald-900/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-all">
                                            {option.id}
                                         </div>
                                      </div>
                                   </button>
                                ))}
                             </div>
                          </div>
                       )}

                    </div>
                 </div>

              </div>
           </div>
        </div>
      </section>

      {/* Standard Home Sections */}
      <section id="process" className="py-32 bg-[#022c22] border-t border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 italic">
               Our <span className="text-emerald-400">Process.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="group relative h-full flex">
                <div className="glass-card rounded-[3.5rem] p-10 md:p-14 w-full border-emerald-400/10 hover:border-emerald-400/40 transition-all duration-500 flex flex-col">
                  <div className="absolute top-6 right-8 text-[120px] font-black text-emerald-400/[0.03] select-none pointer-events-none">0{idx + 1}</div>
                  <h2 className="text-4xl font-black text-white mb-6">{step.title}</h2>
                  <div className="inline-block self-start px-4 py-1.5 mb-10 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-400 italic">{step.concept}</div>
                  <p className="text-emerald-100/40 text-lg font-medium leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[4rem] overflow-hidden group border border-emerald-400/10">
             <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-900 opacity-90 transition-opacity group-hover:opacity-95"></div>
             <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-110 transition-transform duration-[3000ms]" alt="Background" />
             <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
                <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter max-w-3xl leading-tight">
                  Align your brand with your <span className="italic underline decoration-white/20 underline-offset-8">original intent.</span>
                </h3>
                <Link to="/contact" className="px-16 py-6 bg-white text-emerald-950 font-black text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-2xl hover:bg-emerald-50">Start Project Intake</Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
