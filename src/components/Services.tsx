import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="py-28" style={{ background: '#F7F9FC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: '#C9A84C' }}>
            What We Do
          </p>
          <div className="w-12 h-[3px] rounded-full mx-auto mb-7 gold-divider" />
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 tracking-tight" style={{ color: '#040D1C' }}>
            Recruitment & Human Capital Solutions
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We specialise in delivering comprehensive recruitment and human capital solutions
            tailored to the unique needs of each organisation — enabling businesses to attract
            and retain the right talent while optimising workforce strategies.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-7">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                style={{ borderTop: '3px solid transparent' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderTopColor = '#C9A84C'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderTopColor = 'transparent'}
              >
                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}12`, border: `1px solid ${service.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: service.color }} />
                </div>

                <h3 className="text-lg font-extrabold mb-3 tracking-tight" style={{ color: '#040D1C' }}>{service.title}</h3>
                <div className="w-8 h-[2px] rounded-full mb-4 transition-all duration-300 group-hover:w-14 gold-divider" />
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 group-hover:gap-3" style={{ color: '#C9A84C' }}>
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
