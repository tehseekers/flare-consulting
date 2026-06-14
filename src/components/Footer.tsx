import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '../data/content';

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0A3F6B', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-xl overflow-hidden bg-white p-1 flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}image.png`}
                  alt="Flare Consulting"
                  className="h-10 w-auto object-contain block"
                  style={{ maxWidth: '58px' }}
                />
              </div>
              <div>
                <span className="text-white font-extrabold text-base tracking-tight">
                  Flare <span style={{ color: '#C9A84C' }}>Consulting</span>
                </span>
                <div className="text-[9px] tracking-[0.2em] uppercase font-semibold mt-0.5" style={{ color: 'rgba(201,168,76,0.5)' }}>Staffing Solutions</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Connecting Asia's best talent with the right organisations — pure-play staffing
              solutions across Singapore, India and Malaysia.
            </p>
            <p className="text-xs text-slate-700 space-y-1">
              <span className="block">UEN <span className="font-mono text-slate-500">202401794Z</span></span>
              <span className="block">EA License <span className="font-mono text-slate-500">24C2464</span></span>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-slate-300 text-xs font-bold uppercase tracking-[0.25em] mb-6 pb-3 border-b" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNav(link.href)} className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-300 text-xs font-bold uppercase tracking-[0.25em] mb-6 pb-3 border-b" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button onClick={() => handleNav('#services')} className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 text-left">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-300 text-xs font-bold uppercase tracking-[0.25em] mb-6 pb-3 border-b" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: '2 Venture Drive #11-05\nVision Exchange, Singapore 608526' },
                { icon: Phone, text: '+65 8776 7089' },
                { icon: Mail, text: 'Vineet@flare-consult.com' },
                { icon: Globe, text: 'Singapore · India · Malaysia' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                    <span className="text-slate-500 text-sm whitespace-pre-line leading-relaxed">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 space-y-2" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-600 text-xs">© 2024 Flare Consulting Pte. Ltd. All rights reserved.</p>
            <p className="text-slate-700 text-xs font-mono">EA License No. 24C2464 · UEN 202401794Z</p>
          </div>
          <p className="text-slate-700 text-xs leading-relaxed">
            Flare Consulting Pte. Ltd. is incorporated and registered in Singapore. Registered address: 2 Venture Drive #11-05 Vision Exchange, Singapore 608526.
          </p>
        </div>
      </div>
    </footer>
  );
}
