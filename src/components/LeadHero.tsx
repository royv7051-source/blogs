import React from 'react';
import { Article } from '../types/blog';
import { Bookmark, BookmarkCheck, ArrowRight, Clock } from 'lucide-react';

interface LeadHeroProps {
  article: Article;
  onSelect: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const LeadHero: React.FC<LeadHeroProps> = ({
  article,
  onSelect,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <section className="mb-14 border-b border-stone-200 pb-14">
      {/* Top Issue Operational Banner (quiet editorial ribbon) */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-500 mb-6 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span>{article.volume}</span>
          <span aria-hidden="true">·</span>
          <span>{article.issue}</span>
          <span aria-hidden="true">·</span>
          <span>Lead Monograph</span>
        </div>
        <div>
          <span>Published in Zürich &amp; London</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Editorial Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Clean unboxed category & read time kicker (NO PILLS) */}
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 tracking-wide">
              <span className="font-medium text-stone-800 uppercase tracking-widest">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-stone-400" />
                <span>{article.readTimeMinutes} min read</span>
              </span>
            </div>

            <h1
              onClick={() => onSelect(article)}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 leading-[1.15] mb-4 cursor-pointer hover:text-stone-700 transition-colors"
              style={{ textWrap: 'balance' }}
            >
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-700 font-serif italic mb-6 leading-relaxed">
              {article.subtitle}
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl line-clamp-4">
              {article.summary}
            </p>
          </div>

          <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-300 flex items-center justify-center font-serif text-stone-800 text-sm font-semibold">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">{article.author.name}</p>
                <p className="text-xs text-stone-500">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(article.id);
                }}
                className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors cursor-pointer"
                title={isBookmarked ? 'Remove from saved' : 'Save for later'}
                aria-label={isBookmarked ? 'Remove from saved' : 'Save for later'}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="w-5 h-5 text-amber-800" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => onSelect(article)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <span>Read Full Monograph</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Architectural Photograph (5 cols) */}
        <div
          onClick={() => onSelect(article)}
          className="lg:col-span-5 relative group cursor-pointer overflow-hidden rounded bg-stone-200 min-h-[340px] lg:min-h-full border border-stone-200/90"
        >
          <img
            src={article.coverImage}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute bottom-3 right-3 text-[11px] font-mono text-stone-100 bg-stone-900/70 backdrop-blur-xs px-2 py-1 rounded">
            Plate 01 · Tectonic Detail
          </div>
        </div>
      </div>
    </section>
  );
};
