import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Globe, CheckCircle, AlertCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  'AI & Machine Learning',
  'Cloud Solutions',
  'Software Development',
  'ERP Implementation',
  'IT Project Management',
  'Digital Transformation',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under $50K',
  '$50K – $150K',
  '$150K – $500K',
  '$500K+',
  'Not Sure',
];

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  description: string;
  budget: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: '', email: '', company: '', phone: '', service: '', description: '', budget: '' };

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
    if (!form.description.trim()) e.description = 'Please describe your project.';
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

  const inputBase = 'w-full px-4 py-3 text-sm rounded-lg text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200';
  const inputError = 'border-red-400 focus:border-red-500 focus:ring-red-500/20';

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.3em] mb-5">
            Get In Touch
          </p>
          <div className="w-12 h-[3px] rounded-full mx-auto mb-7" style={{ background: '#1E82C8' }} />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Start Your Project
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Ready to transform your technology landscape? Tell us about your initiative and our
            consultants will respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-slate-900 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">Contact Information</h3>
                <div className="w-10 h-[2px] bg-blue-500 mt-3 rounded-full" />
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
                    <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold mb-0.5 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm text-slate-200 whitespace-pre-line leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl p-6" style={{ background: '#1E82C8' }}>
              <p className="text-white font-bold text-sm mb-2">Response Commitment</p>
              <p className="text-blue-100 text-xs leading-relaxed">
                We respond to all project enquiries within one business day. For urgent matters,
                call us directly at{' '}
                <span className="text-white font-semibold">+65 8776 7089</span>.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-14 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">Enquiry Received</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                  Thank you for reaching out. One of our consultants will be in touch within one
                  business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors shadow-md shadow-blue-600/20"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
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
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
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
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Company Name</label>
                    <input type="text" placeholder="Acme Corporation" value={form.company} onChange={(e) => field('company', e.target.value)} className={inputBase} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input type="tel" placeholder="+65 XXXX XXXX" value={form.phone} onChange={(e) => field('phone', e.target.value)} className={inputBase} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Service of Interest</label>
                    <select value={form.service} onChange={(e) => field('service', e.target.value)} className={`${inputBase} cursor-pointer`}>
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Budget Range</label>
                    <select value={form.budget} onChange={(e) => field('budget', e.target.value)} className={`${inputBase} cursor-pointer`}>
                      <option value="">Select a range…</option>
                      {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project needs, timeline, and budget…"
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
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[1.01] text-sm tracking-wide uppercase"
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
