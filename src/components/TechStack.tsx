import { CAPABILITIES } from '../data/content';

export default function CoreCapabilities() {
  return (
    <section
      id="capabilities"
      className="py-28"
      style={{ background: 'linear-gradient(160deg, #083560 0%, #0A3F6B 60%, #1568A8 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: '#F5D87A' }}>
            What Makes Us Different
          </p>
          <div className="w-12 h-[3px] mx-auto mb-7 rounded-full gold-divider" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Core Capabilities
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Our strengths go beyond sourcing. We combine regional networks, rigorous assessment,
            and agile delivery to put the right people in the right roles — fast.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-300 group cursor-default border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.12)',
                  borderTop: '2px solid rgba(201,168,76,0.6)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.22)',
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#F5D87A' }} />
                </div>
                <h3 className="text-base font-bold text-white mb-3 tracking-tight leading-snug">{item.title}</h3>
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
