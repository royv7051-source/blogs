import React from 'react';
import { Bookmark as BookmarkIcon, Search } from 'lucide-react';

interface HeaderProps {
  onOpenManifesto: () => void;
  onOpenBookmarks: () => void;
  onOpenSubscribe: () => void;
  onSelectNav: (view: 'all' | 'curated' | 'archive') => void;
  activeView: 'all' | 'curated' | 'archive';
  bookmarkCount: number;
  onGoHome: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenManifesto,
  onOpenBookmarks,
  onOpenSubscribe,
  onSelectNav,
  activeView,
  bookmarkCount,
  onGoHome,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element, no adjacent badges or pills) */}
        <button
          onClick={onGoHome}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
          aria-label="Return to journal home"
        >
          <span className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors whitespace-nowrap">
            Chronicle &amp; Form
          </span>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => {
              onGoHome();
              onSelectNav('all');
            }}
            className={`cursor-pointer hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'all' ? 'text-stone-900 font-semibold underline underline-offset-8 decoration-stone-400' : ''
            }`}
          >
            All Essays
          </button>
          <button
            onClick={() => {
              onGoHome();
              onSelectNav('curated');
            }}
            className={`cursor-pointer hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'curated' ? 'text-stone-900 font-semibold underline underline-offset-8 decoration-stone-400' : ''
            }`}
          >
            Curator’s Selection
          </button>
          <button
            onClick={() => {
              onGoHome();
              onSelectNav('archive');
            }}
            className={`cursor-pointer hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 ${
              activeView === 'archive' ? 'text-stone-900 font-semibold underline underline-offset-8 decoration-stone-400' : ''
            }`}
          >
            Issue Archive
          </button>
          <button
            onClick={onOpenManifesto}
            className="cursor-pointer hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Manifesto
          </button>
          <button
            onClick={onOpenBookmarks}
            className="cursor-pointer hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Saved Folio</span>
            {bookmarkCount > 0 && (
              <span className="text-xs font-mono text-stone-700">({bookmarkCount})</span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search essays..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-36 md:w-48 pl-7 pr-3 py-1.5 text-xs bg-stone-100/80 border border-stone-200/90 rounded text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-500 focus:w-56 transition-all"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2 top-2.5 pointer-events-none" />
          </div>

          <button
            onClick={onOpenBookmarks}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors relative"
            title="Saved Essays"
            aria-label="Saved Essays"
          >
            <BookmarkIcon className="w-4 h-4" />
            {bookmarkCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-700" />
            )}
          </button>

          <button
            onClick={onOpenSubscribe}
            className="px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            Subscribe to Folio
          </button>
        </div>
      </div>
    </header>
  );
};
