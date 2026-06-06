import { INDUSTRIES } from '../data/content';

export default function Industries() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            Sectors
          </p>
          <div className="w-12 h-[3px] bg-blue-600 rounded-full mx-auto mb-7" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our consultants bring sector-specific domain knowledge that goes beyond generic
            technology advice — we understand your industry's challenges, regulations, and
            competitive dynamics.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.label}
                className="flex flex-col items-center text-center p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center mb-4 shadow-sm transition-all duration-300">
                  <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors duration-300">
                  {industry.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
