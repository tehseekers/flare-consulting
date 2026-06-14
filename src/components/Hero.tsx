import { useEffect, useRef, useState } from 'react';
import { HERO_STATS, HERO_FLOAT_CARDS } from '../data/content';

function useCountUp(target: number, duration: number, started: boolean, decimals: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((target * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, decimals]);
  return value;
}

function StatItem({ stat }: { stat: (typeof HERO_STATS)[0] }) {
  const val = useCountUp(stat.value, 2200, true, 0);
  return (
    <div className="text-center sm:text-left">
      <div className="text-4xl font-extrabold mb-1 tabular-nums" style={{ color: '#C9A84C' }}>
        {val}{stat.suffix}
      </div>
      <div className="text-xs tracking-widest uppercase font-medium" style={{ color: 'rgba(255,255,255,0.60)' }}>{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const floatClasses = ['animate-float-1', 'animate-float-2', 'animate-float-3'];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #0D4F82 0%, #1568A8 55%, #1E82C8 100%)' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Gold glow top-right */}
      <div
        className="absolute top-0 right-0 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.10) 0%, transparent 55%)',
        }}
      />
      {/* Blue glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(30,130,200,0.08) 0%, transparent 55%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: headline */}
          <div>
            {/* Presence badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                { flag: '🇸🇬', label: 'Singapore HQ' },
                { flag: '🇮🇳', label: 'India' },
                { flag: '🇲🇾', label: 'Malaysia' },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border"
                  style={{
                    background: 'rgba(201,168,76,0.07)',
                    borderColor: 'rgba(201,168,76,0.25)',
                    color: '#E8C867',
                  }}
                >
                  <span>{b.flag}</span> {b.label}
                </span>
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5" style={{ color: '#F5D87A' }}>
              Staffing Solutions · Asia-Pacific
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-extrabold text-white leading-[1.04] tracking-tight mb-7">
              Connecting
              <br />
              <span className="text-gradient-blue">Asia's Best</span>
              <br />
              <span className="text-gradient-blue">Talent</span>{' '}
              <span className="text-white">with You</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
              From{' '}
              <span className="text-white font-semibold">Executive Search</span> to{' '}
              <span className="text-white font-semibold">Permanent Placement</span> and{' '}
              <span className="text-white font-semibold">Contract Staffing</span> — we combine
              deep market insight with a precision talent network to build high-performing
              teams across Singapore, India, and Malaysia.
            </p>

            <div className="flex flex-wrap gap-4 mb-20">
              <button
                onClick={() => handleScroll('#services')}
                className="text-sm font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C867)',
                  color: '#0A3F6B',
                  boxShadow: '0 6px 28px rgba(201,168,76,0.35)',
                }}
              >
                Our Services
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 border hover:scale-[1.02]"
                style={{
                  border: '1px solid rgba(30,130,200,0.4)',
                  color: '#7DD3FC',
                  background: 'rgba(30,130,200,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(30,130,200,0.16)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,130,200,0.7)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(30,130,200,0.07)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,130,200,0.4)';
                }}
              >
                Find Talent
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t pt-10" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
              {HERO_STATS.map((stat) => (
                <StatItem key={stat.label} stat={stat} />
              ))}
            </div>
          </div>

          {/* Right: floating cards */}
          <div className="hidden lg:flex flex-col items-end gap-5 pr-4">
            {HERO_FLOAT_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`${floatClasses[i]} glass-card rounded-2xl px-5 py-4 w-72`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.92)', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#1568A8' }} />
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                      style={{ background: 'rgba(201,168,76,0.15)', color: '#E8C867' }}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 mr-1.5 animate-pulse-dot" />
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-white text-sm font-bold mb-1">{card.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{card.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
