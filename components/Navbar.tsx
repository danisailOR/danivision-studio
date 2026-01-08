
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Icons } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Studio', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/work' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#022c22]/80 backdrop-blur-2xl border-b border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-black tracking-tighter text-white">
              DANI<span className="text-emerald-400">VISION</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `text-xs font-black uppercase tracking-widest transition-all hover:text-emerald-300 ${isActive ? 'active-link' : 'text-emerald-600/60'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-full text-slate-950 bg-emerald-400 hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-emerald-400"
            >
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#022c22] border-b border-emerald-900 px-4 pt-2 pb-10 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block px-4 py-3 text-lg font-black uppercase tracking-tight rounded-xl ${isActive ? 'bg-emerald-400/10 text-emerald-400' : 'text-emerald-600/40'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-4 font-black uppercase tracking-widest rounded-xl text-slate-950 bg-emerald-400"
            >
              Project Intake
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
