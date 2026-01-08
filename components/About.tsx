
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Studio Mindset</span>
            <h2 className="text-4xl font-extrabold mt-4 mb-8">
              A design studio for the business floor, not the ivory tower.
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                At Danivision Studio, we believe design is a practical tool for growth. We don't hide behind luxury clichés or academic theories. Instead, we spend our time understanding the nuances of your industry—whether that's heavy machinery, hospitality, or digital services.
              </p>
              <p>
                Our philosophy is simple: be present, be clear, and be useful. We work closely with entrepreneurs and small businesses to turn complex ideas into accessible visual experiences.
              </p>
              <p>
                We value the relationship as much as the result. You won't find an elite or distant tone here—just professional designers who care about the impact of their work on your bottom line.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-blue-500">100%</p>
                <p className="text-slate-400 font-medium">Focused on results</p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-500">0</p>
                <p className="text-slate-400 font-medium">Luxury jargon</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/studio/800/1000" 
                alt="Studio at work" 
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-slate-900 font-bold text-xl leading-tight">
                "Design for people<br/>who want more"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
