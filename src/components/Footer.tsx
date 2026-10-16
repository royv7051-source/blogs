import React from 'react';

interface FooterProps {
  onOpenManifesto: () => void;
  onOpenSubscribe: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenManifesto,
  onOpenSubscribe,
  onSelectCategory,
}) => {
  return (
    <footer className="mt-20 border-t border-stone-200/90 bg-[#FAF8F5] pt-14 pb-12 text-stone-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200">
          {/* Col 1: Wordmark & Colophon */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-serif font-semibold tracking-tight text-stone-900 mb-3">
              Chronicle &amp; Form
            </h3>
            <p className="text-sm font-serif italic text-stone-600 max-w-sm mb-4 leading-relaxed">
              A quarterly international journal dedicated to tectonic substance, earthen materials, Nordic light, and the enduring poetics of built space.
            </p>
            <p className="text-xs font-mono text-stone-400">
              ISSN 2940-1892 · Published concurrently in Zürich &amp; Copenhagen
            </p>
          </div>

          {/* Col 2: Curatorial Departments */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-900 font-semibold mb-3">
              Departments
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <button
                  onClick={() => onSelectCategory('Materiality & Soil')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Materiality &amp; Soil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Acoustics & Ritual')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Acoustics &amp; Ritual
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Biophilia')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Biophilia &amp; Concrete
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Subterranean Form')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Subterranean Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Nordic Light')}
                  className="hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Nordic Light &amp; Geometry
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Journal Folio & Colophon */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-900 font-semibold mb-3">
              Institutional Colophon
            </h4>
            <div className="space-y-3 text-xs text-stone-600">
              <p>
                All 10 monograph essays in Volume IX have undergone peer review by our editorial board. Submissions adhere to the Swiss Charter for Circular Building Tectonics.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenManifesto}
                  className="font-medium text-stone-900 hover:underline cursor-pointer"
                >
                  Read Curatorial Manifesto
                </button>
                <span className="text-stone-300">·</span>
                <button
                  onClick={onOpenSubscribe}
                  className="font-medium text-stone-900 hover:underline cursor-pointer"
                >
                  Subscribe to Printed Folio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quiet Standards */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <p>© {new Date().getFullYear()} Chronicle &amp; Form Architectural Review. All rights reserved.</p>
          <p>Typeset in Cormorant Garamond &amp; Plus Jakarta Sans</p>
        </div>
      </div>
    </footer>
  );
};
