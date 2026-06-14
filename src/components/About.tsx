import { ABOUT_BULLETS } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: text */}
          <div>
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              About Us
            </p>
            <div className="w-12 h-[3px] mb-7 rounded-full" style={{ background: '#1E82C8' }} />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-7 tracking-tight">
              A Trusted Staffing Partner Built for Asia
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-base">
              Flare Consultancy Pte Ltd is a Singapore-headquartered staffing solutions firm
              established in January 2024. Our core consulting team is based in Singapore, with a
              strategic talent sourcing reach across Singapore, India, and Malaysia — enabling us to
              connect businesses with high-quality talent across Asia Pacific.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10 text-base">
              At Flare, we believe that the right talent is the foundation of business success.
              Our approach combines speed, precision, and deep market understanding to help
              organisations scale their teams efficiently while maintaining high standards of quality.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-5 mb-10">
              <div
                className="rounded-xl p-6 border-l-4"
                style={{ background: 'rgba(59,130,246,0.04)', borderLeftColor: '#3b82f6' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Our Vision</p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  To be a trusted staffing partner for organisations across Asia, enabling business
                  growth through reliable and high-quality talent solutions.
                </p>
              </div>
              <div
                className="rounded-xl p-6 border-l-4"
                style={{ background: 'rgba(15,118,110,0.04)', borderLeftColor: '#1E82C8' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#1E82C8' }}>Our Mission</p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  To deliver high-quality, responsive, and scalable recruitment solutions by combining
                  deep market insight, a strong regional talent network, and a client-centric approach —
                  enabling organisations to build high-performing teams across Asia-Pacific.
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {ABOUT_BULLETS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed pt-2">{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 text-xs text-slate-400">
              Registered in Singapore · UEN{' '}
              <span className="font-mono font-semibold text-slate-600">202401794Z</span>
              {' '}· License No{' '}
              <span className="font-mono font-semibold text-slate-600">24C2464</span>
            </p>
          </div>

          {/* Right: info cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: 'Headquartered', value: 'Singapore', sub: '2 Venture Drive, Vision Exchange', color: '#3b82f6' },
              { label: 'Asia Pacific Reach', value: 'SG · IN · MY', sub: 'Singapore, India & Malaysia', color: '#1E82C8' },
              { label: 'Founded', value: '2024', sub: 'Registered UEN 202401794Z', color: '#1E82C8' },
              { label: 'EA License', value: '24C2464', sub: 'Ministry of Manpower, Singapore', color: '#f59e0b' },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-3 h-3 rounded-full mb-4"
                  style={{ background: card.color }}
                />
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">
                  {card.label}
                </p>
                <p className="text-2xl font-extrabold text-slate-900 mb-1.5 tracking-tight">{card.value}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
