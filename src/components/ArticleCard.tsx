import React, { useState } from 'react';
import { Article } from '../types/blog';
import { Bookmark, BookmarkCheck, Clock, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  variant?: 'standard' | 'compact' | 'featured';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  variant = 'standard',
}) => {
  const [imgError, setImgError] = useState(false);

  if (variant === 'compact') {
    return (
      <article
        onClick={() => onSelect(article)}
        className="group py-4 border-b border-stone-200/80 cursor-pointer flex items-baseline justify-between gap-4 transition-colors hover:bg-stone-100/50 px-2 rounded"
      >
        <div className="flex-1 min-w-0">
          {/* Clean unboxed metadata with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
            <span className="font-medium text-stone-700 uppercase tracking-wider text-[11px]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTimeMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[11px] text-stone-400">{article.volume}</span>
          </div>

          <h3 className="text-base font-serif font-medium text-stone-900 group-hover:text-stone-700 transition-colors truncate">
            {article.title}
          </h3>
          <p className="text-xs text-stone-500 font-serif italic truncate mt-0.5">
            {article.subtitle}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <span className="text-xs text-stone-400 hidden sm:inline">{article.publishedAt}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(article.id);
            }}
            className="p-1.5 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            title={isBookmarked ? 'Remove' : 'Save'}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-amber-800" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(article)}
      className="group bg-white rounded border border-stone-200/80 hover:border-stone-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xs hover:shadow-sm"
    >
      <div>
        {/* Visual Asset Container with Fallback */}
        <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden border-b border-stone-100">
          {!imgError && article.coverImage ? (
            <img
              src={article.coverImage}
              alt={article.imageAlt}
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-stone-100 to-stone-200 text-stone-600">
              <span className="font-serif text-lg font-medium mb-1">Chronicle &amp; Form</span>
              <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">{article.category}</span>
            </div>
          )}

          {/* Quiet Monograph Number Badge */}
          <div className="absolute top-3 left-3 bg-stone-900/80 text-stone-100 text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-xs">
            {article.issue}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(article.id);
            }}
            className="absolute top-3 right-3 p-1.5 bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 rounded shadow-xs transition-colors cursor-pointer"
            title={isBookmarked ? 'Saved to folio' : 'Save for later'}
            aria-label={isBookmarked ? 'Saved to folio' : 'Save for later'}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-amber-800" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Zero-Pill Unboxed Metadata with Typographic Separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
            <span className="font-medium text-stone-800 uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              <span>{article.readTimeMinutes} min</span>
            </span>
          </div>

          <h3
            className="text-xl font-serif font-medium text-stone-900 leading-snug mb-2 group-hover:text-stone-700 transition-colors"
            style={{ textWrap: 'balance' }}
          >
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 mb-4 leading-relaxed font-sans">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Card Footer: Author and Read Affordance */}
      <div className="px-5 py-3.5 border-t border-stone-100 bg-stone-50/50 flex items-center justify-between text-xs text-stone-600">
        <span className="font-medium text-stone-800 truncate pr-2">
          {article.author.name}
        </span>
        <span className="inline-flex items-center gap-1 text-stone-700 group-hover:text-stone-950 font-medium shrink-0">
          <span>Read Essay</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </article>
  );
};
