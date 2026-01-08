
import React, { useState } from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string | boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [selectedDimensions, setSelectedDimensions] = useState<string[]>(['Branding']);

  const toggleDimension = (dim: string) => {
    setSelectedDimensions(prev => 
      prev.includes(dim) ? prev.filter(d => d !== dim) : [...prev, dim]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setShouldShake(false);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const newFieldErrors: { [key: string]: string } = {};
    let hasError = false;

    // Strategic Intake Validation Logic
    setTimeout(() => {
      if (!name || name.trim().length < 2) {
        newFieldErrors.name = "Signature required";
        hasError = true;
      }
      if (!email || !email.includes('@')) {
        newFieldErrors.email = "Invalid address";
        hasError = true;
      }
      if (selectedDimensions.length === 0) {
        newFieldErrors.dimensions = "Select 1+ dimension";
        hasError = true;
      }
      if (!message || message.trim().length < 10) {
        newFieldErrors.message = "Brief too short";
        hasError = true;
      }

      if (hasError) {
        setFieldErrors(newFieldErrors);
        setError("Operational Alert: Project intake configuration failed.");
        setShouldShake(true);
        setIsSubmitting(false);
        setTimeout(() => setShouldShake(false), 500);
      } else {
        setSubmitted(true);
        setIsSubmitting(false);
      }
    }, 800);
  };

  const Triangle = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500/20 w-8 h-8 md:w-16 md:h-16">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  const ErrorIcon = () => (
    <svg className="w-3.5 h-3.5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="animate-in fade-in duration-1000 relative">
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-300/10 rounded-full blur-[140px]"></div>
      </div>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Contextual Information */}
            <div className="animate-in slide-in-from-left duration-700">
              <span className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-[0.5em] text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20 backdrop-blur-md">
                Strategic Intake
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                Initiate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 italic">Alignment.</span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100/60 font-medium mb-12 max-w-2xl leading-relaxed tracking-tight">
                Every bold design move starts with a clear project intake. We review all objectives within 48 studio hours.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">Direct Dialogue</h4>
                    <p className="text-emerald-100/30 font-medium leading-relaxed">We skip the generic agencies' fluff. Expect a direct, business-oriented conversation about your specific market sector.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">Efficiency Core</h4>
                    <p className="text-emerald-100/30 font-medium leading-relaxed">Our process is optimized for entrepreneurs. Most structural project alignments are finalized within one week.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Intake Form Component */}
            <div className={`animate-in slide-in-from-right duration-700 delay-200 ${shouldShake ? 'animate-shake' : ''}`}>
              <div className="glass-heavy border border-emerald-400/10 rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-500 min-h-[780px] flex flex-col">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r transition-all duration-500 ${error ? 'from-white via-emerald-200 to-white animate-pulse' : 'from-emerald-400 via-emerald-100 to-emerald-600'}`}></div>
                
                {submitted ? (
                  <div className="flex-grow flex flex-col justify-center items-center text-center py-20 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-emerald-400 text-emerald-950 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Transmission Successful.</h3>
                    <p className="text-emerald-100/40 text-lg font-medium leading-relaxed">Your project parameters have been stored. <br className="hidden md:block" /> Strategic review will begin shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-12 text-emerald-400 font-black uppercase tracking-[0.2em] text-xs border-b-2 border-emerald-400/20 hover:border-emerald-400 pb-1 transition-all"
                    >
                      Reset Intake Console
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex-grow flex flex-col space-y-11">
                    {/* Global Alert Notification */}
                    <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-[85%] z-20 transition-all duration-500 transform ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                      <div className="p-4 bg-emerald-400 border-2 border-white rounded-2xl flex gap-4 items-center shadow-[0_20px_40px_rgba(16,185,129,0.4)]">
                        <div className="p-1.5 bg-emerald-950 rounded-full text-emerald-400">
                          <Icons.Close />
                        </div>
                        <p className="text-emerald-950 text-[10px] font-black uppercase tracking-widest">{error}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div className="relative">
                        <div className="flex justify-between items-center mb-3">
                          <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-500/50">Full Identity</label>
                          <div className={`transition-all duration-300 ${fieldErrors.name ? 'opacity-100' : 'opacity-0'}`}>
                            <ErrorIcon />
                          </div>
                        </div>
                        <input 
                          name="name"
                          type="text" 
                          className={`w-full px-6 py-4 bg-emerald-950/40 border rounded-2xl text-white outline-none transition-all placeholder:text-white/30 font-medium ${fieldErrors.name ? 'border-emerald-300 ring-1 ring-emerald-300/20' : 'border-emerald-400/20 focus:border-emerald-400'}`} 
                          placeholder="John Doe" 
                        />
                        <div className={`absolute -bottom-5 left-0 flex items-center gap-2 transition-all duration-300 ${fieldErrors.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                           <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
                           <p className="text-emerald-300 text-[9px] font-black uppercase tracking-[0.2em]">{fieldErrors.name as string}</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="flex justify-between items-center mb-3">
                          <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-500/50">Signal Channel</label>
                          <div className={`transition-all duration-300 ${fieldErrors.email ? 'opacity-100' : 'opacity-0'}`}>
                            <ErrorIcon />
                          </div>
                        </div>
                        <input 
                          name="email"
                          type="email" 
                          className={`w-full px-6 py-4 bg-emerald-950/40 border rounded-2xl text-white outline-none transition-all placeholder:text-white/30 font-medium ${fieldErrors.email ? 'border-emerald-300 ring-1 ring-emerald-300/20' : 'border-emerald-400/20 focus:border-emerald-400'}`} 
                          placeholder="name@company.com" 
                        />
                        <div className={`absolute -bottom-5 left-0 flex items-center gap-2 transition-all duration-300 ${fieldErrors.email ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                           <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
                           <p className="text-emerald-300 text-[9px] font-black uppercase tracking-[0.2em]">{fieldErrors.email as string}</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pb-2">
                      <div className="flex justify-between items-center mb-5">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-500/50">
                          Inquiry Dimensions <span className="text-[8px] opacity-30 italic ml-1 tracking-normal">(Multi-Select)</span>
                        </label>
                        <div className={`transition-all duration-300 ${fieldErrors.dimensions ? 'opacity-100' : 'opacity-0'}`}>
                          <ErrorIcon />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                        {['Branding', 'Digital', 'Print', 'Product'].map(type => (
                          <button 
                            key={type} 
                            type="button"
                            onClick={() => toggleDimension(type)}
                            className={`relative h-12 rounded-2xl flex items-center justify-start gap-4 transition-all duration-300 ${
                              selectedDimensions.includes(type) ? 'text-emerald-400 scale-[1.05]' : 'text-emerald-100/30 hover:text-emerald-100'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${selectedDimensions.includes(type) ? 'bg-emerald-400 text-emerald-950 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-emerald-400/5 border border-emerald-400/20'}`}>
                               <CheckIcon />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] truncate">{type}</span>
                          </button>
                        ))}
                      </div>
                      <div className={`absolute -bottom-4 left-0 flex items-center gap-2 transition-all duration-300 ${fieldErrors.dimensions ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                         <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
                         <p className="text-emerald-300 text-[9px] font-black uppercase tracking-[0.2em]">{fieldErrors.dimensions as string}</p>
                      </div>
                    </div>

                    <div className="relative pt-2">
                      <div className="flex justify-between items-center mb-3">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-500/50">The Project Challenge</label>
                        <div className={`transition-all duration-300 ${fieldErrors.message ? 'opacity-100' : 'opacity-0'}`}>
                          <ErrorIcon />
                        </div>
                      </div>
                      <textarea 
                        name="message"
                        rows={4} 
                        className={`w-full px-6 py-5 bg-emerald-950/40 border rounded-[2rem] text-white outline-none transition-all resize-none placeholder:text-white/30 leading-relaxed font-medium ${fieldErrors.message ? 'border-emerald-300 ring-1 ring-emerald-300/20' : 'border-emerald-400/20 focus:border-emerald-400'}`} 
                        placeholder="Detail your business objectives..."
                      ></textarea>
                      <div className={`absolute -bottom-5 left-0 flex items-center gap-2 transition-all duration-300 ${fieldErrors.message ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                         <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
                         <p className="text-emerald-300 text-[9px] font-black uppercase tracking-[0.2em]">{fieldErrors.message as string}</p>
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-6 text-emerald-950 font-black text-xs uppercase tracking-[0.4em] rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98] ${isSubmitting ? 'bg-emerald-200 cursor-wait' : 'bg-emerald-400 hover:bg-white hover:scale-[1.01]'}`}
                      >
                        {isSubmitting ? 'Processing...' : 'Initiate Project Signal'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Footnote */}
      <section className="py-24 border-t border-emerald-900/30 overflow-hidden relative bg-[#011a14]/50">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-24 text-[10vw] md:text-[8vw] font-black text-emerald-900/20 uppercase select-none tracking-tighter italic">
              <span>Grounded</span>
              <Triangle />
              <span>Human</span>
              <Triangle />
              <span>Clear</span>
              <Triangle />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
