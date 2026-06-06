import { ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../data/content';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            Case Studies
          </p>
          <div className="w-12 h-[3px] bg-blue-600 rounded-full mx-auto mb-7" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Our Work
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Real outcomes for real clients. A selection of engagements that demonstrate the depth
            and breadth of our delivery capability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {PORTFOLIO.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
            >
              {/* Coloured accent strip */}
              <div className="h-1.5" style={{ background: project.accentColor }} />

              <div className="p-8 flex flex-col flex-1">
                <span
                  className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide"
                  style={{ background: project.tagBg, color: project.tagColor }}
                >
                  {project.tag}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div
                        className="text-2xl font-extrabold mb-0.5"
                        style={{ color: project.accentColor }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                  style={{ color: project.accentColor }}
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
