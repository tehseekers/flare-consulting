import { WHY_US } from '../data/content';

export default function WhyUs() {
  return (
    <section
      className="py-28"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0b1120 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            Why Flare
          </p>
          <div
            className="w-12 h-[3px] rounded-full mx-auto mb-7"
            style={{ background: 'linear-gradient(90deg, #0F766E, #14b8a6)' }}
          />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            What Sets Us Apart
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We do not just advise — we deliver. Here is why leading enterprises across Asia
            choose Flare Consulting as their transformation partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-default border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: item.color }} />
                </div>
                <h3 className="text-base font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <div
                  className="w-8 h-[2px] rounded-full mb-4 transition-all duration-300 group-hover:w-14"
                  style={{ background: item.color }}
                />
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
