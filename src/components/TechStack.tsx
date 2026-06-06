import { useEffect, useRef, useState } from 'react';
import { Activity } from 'lucide-react';
import { AI_CAPABILITY_BARS, AI_TOP_METRICS, AI_CIRCLE_METRICS, TECH_STACK } from '../data/content';

function useInViewOnce(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function CountUp({
  target,
  decimals,
  suffix,
  started,
  duration = 2000,
}: {
  target: number;
  decimals: number;
  suffix: string;
  started: boolean;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(parseFloat((target * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, decimals, duration]);
  return <>{val.toFixed(decimals)}{suffix}</>;
}

function CircleProgress({
  value,
  color,
  label,
  started,
}: {
  value: number;
  color: string;
  label: string;
  started: boolean;
}) {
  const radius = 52;
  const cx = 64;
  const cy = 64;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference * (1 - value / 100);
  const [dashOffset, setDashOffset] = useState(circumference);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => setDashOffset(targetOffset), 100);
    return () => clearTimeout(timer);
  }, [started, targetOffset]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90">
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={10}
          />
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={10}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold text-white tabular-nums">
            {started ? <CountUp target={value} decimals={0} suffix="%" started={started} duration={2000} /> : '0%'}
          </span>
        </div>
      </div>
      <p className="text-slate-400 text-xs text-center mt-3 max-w-[100px] leading-snug">{label}</p>
    </div>
  );
}

export default function TechStack() {
  const { ref, visible } = useInViewOnce(0.2);

  return (
    <section id="expertise" className="py-28" style={{ background: 'linear-gradient(160deg, #020817 0%, #0b1120 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            AI & Data Intelligence
          </p>
          <div
            className="w-12 h-[3px] mx-auto mb-7 rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #0ea5e9)' }}
          />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Intelligent Outcomes,{' '}
            <span className="text-gradient-blue">Measured in Data</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We build and deploy AI systems that perform in production — not just demos. Our data
            engineering and ML pipelines power measurable business results across industries.
          </p>
        </div>

        {/* Top metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {AI_TOP_METRICS.map((m, i) => (
            <div
              key={m.label}
              className="rounded-xl p-6 text-center border"
              style={{
                background: 'rgba(59,130,246,0.05)',
                borderColor: 'rgba(59,130,246,0.15)',
              }}
            >
              <div className="text-4xl font-extrabold text-white mb-1.5 tabular-nums">
                {visible
                  ? <CountUp target={m.animateTo} decimals={m.decimals} suffix={m.suffix} started={visible} duration={1800 + i * 200} />
                  : `0${m.suffix}`}
              </div>
              <p className="text-slate-400 text-xs tracking-wide">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Main dashboard row */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Bar chart — left 3 cols */}
          <div
            className="lg:col-span-3 rounded-2xl p-7"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 60px rgba(59,130,246,0.06)',
            }}
          >
            <div className="flex items-center justify-between mb-7">
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">AI Capability Index</h3>
                <p className="text-slate-500 text-xs mt-0.5">Benchmark accuracy across domains</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 text-[10px] font-semibold tracking-wider uppercase">Live</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              </div>
            </div>

            <div className="space-y-5">
              {AI_CAPABILITY_BARS.map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-xs font-medium">{bar.label}</span>
                    <span className="text-blue-400 text-xs font-bold tabular-nums">
                      {visible
                        ? <CountUp target={bar.value} decimals={0} suffix="%" started={visible} duration={1400 + i * 150} />
                        : '0%'}
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: visible ? `${bar.value}%` : '0%',
                        transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${i * 120}ms`,
                        background: `linear-gradient(90deg, #1d4ed8, #3b82f6 60%, #0ea5e9)`,
                        boxShadow: '0 0 12px rgba(59,130,246,0.5)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel — circle meters + tags */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Circle progress card */}
            <div
              className="rounded-2xl p-7 flex-1 flex flex-col justify-between"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="mb-6">
                <h3 className="text-white font-bold text-sm">Client Delivery Metrics</h3>
                <p className="text-slate-500 text-xs mt-0.5">Average across all engagements</p>
              </div>
              <div className="flex items-center justify-around">
                {AI_CIRCLE_METRICS.map((m) => (
                  <CircleProgress
                    key={m.label}
                    value={m.value}
                    color={m.color}
                    label={m.label}
                    started={visible}
                  />
                ))}
              </div>
            </div>

            {/* Tech stack card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h3 className="text-white font-bold text-sm mb-4">Platform Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.slice(0, 12).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-slate-400 font-medium px-2.5 py-1 rounded-md"
                    style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.15)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
