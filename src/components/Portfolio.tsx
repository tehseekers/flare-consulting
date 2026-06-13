import { APPROACH } from '../data/content';

export default function OurApproach() {
  return (
    <section id="approach" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            How We Work
          </p>
          <div className="w-12 h-[3px] bg-blue-600 rounded-full mx-auto mb-7" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Our Approach
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our delivery philosophy is built on four pillars — each one shaping how we engage
            with clients and candidates to deliver outcomes that last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 inset-x-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: item.color }}
                />
                <div className="text-5xl font-extrabold mb-5 tabular-nums" style={{ color: `${item.color}20` }}>
                  0{i + 1}
                </div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
