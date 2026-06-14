import { WHY_US } from '../data/content';

export default function WhyUs() {
  return (
    <section
      className="py-28"
      style={{ background: 'linear-gradient(145deg, #0A3F6B 0%, #1568A8 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: '#F5D87A' }}>
            Why Flare
          </p>
          <div
            className="w-12 h-[3px] rounded-full mx-auto mb-7 gold-divider"
          />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Why Flare Consulting
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            We do not just place candidates — we build partnerships. Here is why organisations
            across Asia trust Flare Consulting as their preferred staffing partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.12)',
                  borderTop: '2px solid rgba(201,168,76,0.6)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-base font-extrabold text-white mb-3 tracking-tight">{item.title}</h3>
                <div className="w-8 h-[2px] rounded-full mb-4 transition-all duration-300 group-hover:w-14 gold-divider" />
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
