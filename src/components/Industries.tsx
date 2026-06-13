import { INDUSTRIES } from '../data/content';

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            Specialisation
          </p>
          <div className="w-12 h-[3px] bg-blue-600 rounded-full mx-auto mb-7" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our consultants bring deep domain knowledge across the sectors that are shaping
            Asia's digital economy — delivering talent that understands your industry, not
            just your job description.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.label}
                className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${industry.color}12`,
                    border: `1px solid ${industry.color}25`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: industry.color }} />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-base tracking-tight">
                  {industry.label}
                </h3>
                <div
                  className="w-8 h-[2px] rounded-full mb-4 transition-all duration-300 group-hover:w-12"
                  style={{ background: industry.color }}
                />
                <p className="text-slate-500 text-sm leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
