import React, { useState } from 'react';
import { X, CheckCircle, Mail, Sparkles } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [edition, setEdition] = useState<'digital' | 'print'>('digital');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state showing success
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded border border-stone-300 shadow-xl p-8 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
          aria-label="Close subscription window"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 text-stone-800 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-medium text-stone-900 mb-2">
              Welcome to the Folio
            </h3>
            <p className="text-sm text-stone-600 mb-6 max-w-sm mx-auto leading-relaxed">
              We have dispatched your introductory monograph to <span className="font-semibold text-stone-800">{email}</span>. You will receive our weekly architectural dissertations every Thursday morning.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Return to Journal
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Weekly Curatorial Dispatches</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mb-3">
              Subscribe to Chronicle &amp; Form
            </h3>

            <p className="text-sm text-stone-600 font-serif italic mb-6 leading-relaxed">
              Long-form critical inquiries into earthen materials, tectonic honesty, acoustic design, and contemporary dwellings—delivered without commercial interruption.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">
                  Recipient Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="architect@studio.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-stone-300 rounded text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                  />
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-2">
                  Select Edition Medium
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setEdition('digital')}
                    className={`p-3 text-left rounded border transition-colors cursor-pointer ${
                      edition === 'digital'
                        ? 'border-stone-900 bg-stone-900 text-stone-50'
                        : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    <p className="text-xs font-semibold mb-0.5">Digital Archive</p>
                    <p className={`text-[11px] ${edition === 'digital' ? 'text-stone-300' : 'text-stone-500'}`}>
                      Full online essays &amp; audio notes
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEdition('print')}
                    className={`p-3 text-left rounded border transition-colors cursor-pointer ${
                      edition === 'print'
                        ? 'border-stone-900 bg-stone-900 text-stone-50'
                        : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    <p className="text-xs font-semibold mb-0.5">Printed Folio + Digital</p>
                    <p className={`text-[11px] ${edition === 'print' ? 'text-stone-300' : 'text-stone-500'}`}>
                      Quarterly letterpress catalog
                    </p>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer shadow-sm"
                >
                  Confirm Subscription
                </button>
              </div>

              <p className="text-[11px] text-stone-400 text-center font-mono">
                No tracking · Unsubscribe in one click · Zero advertising
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
