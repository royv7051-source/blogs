import React from 'react';
import { X, Feather, Compass, ShieldCheck } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded border border-stone-300 shadow-2xl p-8 sm:p-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
          aria-label="Close curatorial manifesto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
          Colophon &amp; Curatorial Constitution
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-4">
          The Manifesto of Form &amp; Substance
        </h2>

        <p className="text-stone-600 font-serif italic text-base mb-8 pb-6 border-b border-stone-200">
          Why we write about spaces that outlast their creators, and why speed is the enemy of spatial dignity.
        </p>

        <div className="space-y-6 text-sm text-stone-700 leading-relaxed font-sans">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-stone-200/70 rounded text-stone-800 shrink-0 mt-0.5">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-stone-900 text-base mb-1">
                I. Tectonic Truth Over Digital Glaze
              </h4>
              <p className="text-stone-600">
                A building is not a render. It is an assemblage of matter in constant friction with gravity, water, temperature, and human skin. We reject glossy architectural marketing that privileges the eye over the shoulder, the hand, and the lungs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-stone-200/70 rounded text-stone-800 shrink-0 mt-0.5">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-stone-900 text-base mb-1">
                II. Thermodynamic Honesty
              </h4>
              <p className="text-stone-600">
                Energy efficiency cannot be solved by wrapping fragile polystyrene boxes around glass towers. Authentic sustainability belongs to thermal mass, subterranean subtraction, natural stack ventilation, and unbaked local minerals.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-stone-200/70 rounded text-stone-800 shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-stone-900 text-base mb-1">
                III. The Sacred Right to Silence
              </h4>
              <p className="text-stone-600">
                Noise is violence against the human nervous system. Great architecture provides acoustic refuge: timber that absorbs mechanical buzz, stone that diffuses speech, and water that marks the passing of seconds.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs font-mono text-stone-400">Chronicle &amp; Form · Established 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-900 bg-stone-200 hover:bg-stone-300 rounded transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
