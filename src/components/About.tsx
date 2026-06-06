import { ABOUT_BULLETS } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-teal-700 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              About Us
            </p>
            <div className="w-12 h-[3px] mb-7 rounded-full" style={{ background: '#0F766E' }} />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-7 tracking-tight">
              A Trusted Partner Built for the Modern Enterprise
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-base">
              Flare Consulting is a Singapore-based technology consulting firm on a mission to help
              organisations harness the full potential of modern technology. We combine strategic
              thinking with disciplined execution to deliver transformations that create lasting
              competitive advantage.
            </p>
            <p className="text-slate-500 leading-relaxed mb-12 text-base">
              With our headquarters in Singapore and a growing delivery centre in India, we bring
              global best practices together with deep regional expertise — giving our clients an
              edge in one of the world's most dynamic economic corridors.
            </p>

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

            <p className="mt-12 text-xs text-slate-400">
              Registered in Singapore · UEN{' '}
              <span className="font-mono font-semibold text-slate-600">202401794Z</span>
            </p>
          </div>

          {/* Right: info cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: 'Headquartered', value: 'Singapore', sub: '2 Venture Drive, Vision Exchange', color: '#3b82f6' },
              { label: 'Delivery Centre', value: 'India', sub: 'Pan-India remote & on-site teams', color: '#0F766E' },
              { label: 'Founded', value: '2024', sub: 'Registered UEN 202401794Z', color: '#0F766E' },
              { label: 'Focus', value: 'Enterprise', sub: 'AI · Cloud · ERP · Software', color: '#f59e0b' },
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
