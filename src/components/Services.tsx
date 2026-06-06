import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            What We Do
          </p>
          <div className="w-12 h-[3px] bg-blue-600 rounded-full mx-auto mb-7" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Comprehensive Technology Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From strategy through execution, we deliver the full spectrum of technology consulting
            services that modern enterprises need to compete and grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Colour accent on hover */}
                <div
                  className="absolute top-0 inset-x-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                  style={{ background: service.color }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}12`, border: `1px solid ${service.color}25` }}
                >
                  <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: service.color }} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5" style={{ color: service.color }}>
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
