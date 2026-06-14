import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Globe, CheckCircle, AlertCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Executive Search',
  'Permanent Placement',
  'Contract Staffing',
  'Talent Advisory',
  'Other',
];

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  description: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: '', email: '', company: '', phone: '', service: '', description: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) {
      e.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.description.trim()) e.description = 'Please describe your requirements.';
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setForm(EMPTY);
  };

  const field = (id: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [id]: value }));
    if (errors[id]) setErrors((p) => ({ ...p, [id]: undefined }));
  };

  const inputBase = 'w-full px-4 py-3 text-sm rounded-xl text-slate-800 placeholder-slate-400 bg-white border border-slate-200 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200';
  const inputError = 'border-red-400 focus:border-red-500 focus:ring-red-500/20';

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4" style={{ color: '#C9A84C' }}>
            Get In Touch
          </p>
          <div className="w-12 h-[3px] rounded-full mx-auto mb-7 gold-divider" />
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 tracking-tight" style={{ color: '#040D1C' }}>
            Let's Find Your Next Hire
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Tell us about your talent needs and our Singapore-based consultants will respond
            within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl p-8 space-y-6" style={{ background: '#040D1C' }}>
              <div>
                <h3 className="text-lg font-extrabold text-white mb-1 tracking-tight">Contact Information</h3>
                <div className="w-10 h-[2px] mt-3 rounded-full gold-divider" />
              </div>

              {[
                { icon: MapPin, label: 'Registered Address', value: '2 Venture Drive #11-05\nVision Exchange\nSingapore 608526' },
                { icon: Phone, label: 'Phone', value: '+65 8776 7089' },
                { icon: Mail, label: 'Email', value: 'Vineet@flare-consult.com' },
                { icon: Globe, label: 'Offices', value: 'Singapore (HQ) · India · Malaysia' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.25)' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-0.5 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm text-slate-200 whitespace-pre-line leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C867)', color: '#040D1C' }}
            >
              <p className="font-extrabold text-sm mb-2">Response Commitment</p>
              <p className="text-sm leading-relaxed opacity-80">
                We respond to all enquiries within one business day. For urgent matters,
                call us directly at{' '}
                <span className="font-bold opacity-100">+65 8776 7089</span>.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-14 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(201,168,76,0.15)' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: '#C9A84C' }} />
                </div>
                <h3 className="text-2xl font-extrabold mb-3 tracking-tight" style={{ color: '#040D1C' }}>Enquiry Received</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                  Thank you for reaching out. One of our consultants will be in touch within one
                  business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold px-7 py-3 rounded-xl transition-all hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C867)', color: '#040D1C' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: '#040D1C' }}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => field('name', e.target.value)}
                      className={`${inputBase} ${errors.name ? inputError : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: '#040D1C' }}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => field('email', e.target.value)}
                      className={`${inputBase} ${errors.email ? inputError : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: '#040D1C' }}>Company Name</label>
                    <input type="text" placeholder="Acme Corporation" value={form.company} onChange={(e) => field('company', e.target.value)} className={inputBase} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: '#040D1C' }}>Phone Number</label>
                    <input type="tel" placeholder="+65 XXXX XXXX" value={form.phone} onChange={(e) => field('phone', e.target.value)} className={inputBase} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: '#040D1C' }}>Service of Interest</label>
                  <select value={form.service} onChange={(e) => field('service', e.target.value)} className={`${inputBase} cursor-pointer`}>
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: '#040D1C' }}>
                    Your Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the role, team size, timeline, and any specific requirements…"
                    value={form.description}
                    onChange={(e) => field('description', e.target.value)}
                    className={`${inputBase} resize-none ${errors.description ? inputError : ''}`}
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.description}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full font-extrabold py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] text-sm tracking-widest uppercase"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C867)',
                    color: '#040D1C',
                    boxShadow: '0 6px 28px rgba(201,168,76,0.35)',
                  }}
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
