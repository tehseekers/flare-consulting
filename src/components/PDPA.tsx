import { ShieldCheck } from 'lucide-react';

export default function PDPA() {
  return (
    <section id="pdpa" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-5" style={{ color: '#0F766E' }}>
            Compliance
          </p>
          <div className="w-12 h-[3px] rounded-full mx-auto mb-7" style={{ background: '#0F766E' }} />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Personal Data Protection Act
          </h2>
          <p className="text-slate-400 text-sm">(PDPA) — Singapore</p>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-10 shadow-sm">
          <div className="flex items-start gap-5 mb-8">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(15,118,110,0.1)', border: '1px solid rgba(15,118,110,0.2)' }}
            >
              <ShieldCheck className="w-6 h-6" style={{ color: '#0F766E' }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">Our Commitment to Data Protection</h3>
              <p className="text-slate-500 text-sm">Aligned with the Personal Data Protection Commission (PDPC) of Singapore</p>
            </div>
          </div>

          <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
            <p>
              Flare Consultancy Pte Ltd is committed to safeguarding personal data in accordance
              with the <span className="font-semibold text-slate-800">Personal Data Protection Act 2012 (PDPA)</span> of
              Singapore. The PDPA establishes a comprehensive framework governing the collection, use,
              disclosure, and protection of personal data by organisations.
            </p>
            <p>
              We adhere to the principles of the PDPA by ensuring that personal data is handled
              responsibly, transparently, and only for legitimate business purposes. This includes
              obtaining appropriate consent, limiting the use of data to specified purposes, and
              implementing reasonable security measures to protect personal information from
              unauthorised access or misuse.
            </p>
            <p>
              Our practices are aligned with regulatory requirements set out by Singapore's
              Personal Data Protection Commission (PDPC), reflecting our commitment to maintaining
              trust, confidentiality, and compliance in all our business operations.
            </p>
          </div>

          <div
            className="mt-8 pt-8 border-t border-slate-200 flex flex-wrap gap-6 text-xs text-slate-500"
          >
            <span>
              UEN:{' '}
              <span className="font-mono font-semibold text-slate-700">202401794Z</span>
            </span>
            <span>
              EA License No:{' '}
              <span className="font-mono font-semibold text-slate-700">24C2464</span>
            </span>
            <span>Registered in Singapore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
