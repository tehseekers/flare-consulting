import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-3.5">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-3 group">
            <div className="rounded-xl overflow-hidden bg-white p-1 shadow-md flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}image.png`}
                alt="Flare Consulting"
                className="h-9 w-auto object-contain block"
                style={{ maxWidth: '52px' }}
              />
            </div>
            <div>
              <span className={`font-bold text-[15px] tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Flare{' '}
                <span style={{ color: '#C9A84C' }}>Consulting</span>
              </span>
              <div className={`text-[9px] tracking-[0.22em] uppercase font-semibold transition-colors duration-300 ${scrolled ? 'text-slate-400' : 'text-slate-300/70'}`}>
                Staffing Solutions
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900 after:bg-yellow-500'
                    : 'text-slate-200 hover:text-white after:bg-yellow-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('#contact')}
              className="text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.03] shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C867)',
                color: '#0A3F6B',
                boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
              }}
            >
              Find Talent
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 pb-6 pt-2 space-y-1 shadow-xl">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left text-slate-600 hover:text-slate-900 py-3.5 text-sm font-medium border-b border-slate-50"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-4 w-full text-sm font-bold py-3 rounded-lg transition-colors"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C867)', color: '#0A3F6B' }}
          >
            Find Talent
          </button>
        </div>
      )}
    </nav>
  );
}
