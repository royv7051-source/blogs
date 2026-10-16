import React from 'react';
import { Article } from '../types/blog';
import { X, Trash2, ArrowRight, BookOpen, Clock } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const totalMinutes = bookmarkedArticles.reduce((acc, curr) => acc + curr.readTimeMinutes, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/50 backdrop-blur-xs">
      <div className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col border-l border-stone-300">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-stone-700" />
              <h3 className="font-serif font-medium text-xl text-stone-900">
                Personal Reading Folio
              </h3>
            </div>
            <p className="text-xs font-mono text-stone-500 mt-1">
              {bookmarkedArticles.length} {bookmarkedArticles.length === 1 ? 'Essay' : 'Essays'} · ~{totalMinutes} min total read time
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            aria-label="Close reading folio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {bookmarkedArticles.length === 0 ? (
            <div className="text-center py-16 text-stone-500">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <p className="font-serif text-lg text-stone-700 mb-1">Your folio is empty</p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Select the bookmark icon on any monograph or essay to assemble your offline reading list.
              </p>
            </div>
          ) : (
            bookmarkedArticles.map((article) => (
              <div
                key={article.id}
                className="p-4 bg-white rounded border border-stone-200 hover:border-stone-400 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] text-stone-400 font-mono mb-1">
                    <span className="uppercase text-stone-600 font-semibold">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTimeMinutes} min
                    </span>
                  </div>

                  <h4
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="font-serif font-medium text-stone-900 group-hover:text-stone-700 transition-colors cursor-pointer text-base leading-snug mb-1"
                  >
                    {article.title}
                  </h4>

                  <p className="text-xs text-stone-500 line-clamp-2 mb-3 font-serif italic">
                    {article.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                  <span className="text-stone-500 font-sans">{article.author.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveBookmark(article.id)}
                      className="p-1 text-stone-400 hover:text-red-700 transition-colors cursor-pointer"
                      title="Remove from folio"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1 text-stone-900 font-medium hover:underline cursor-pointer"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {bookmarkedArticles.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-100/60 flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs text-stone-500 hover:text-red-700 transition-colors font-mono cursor-pointer"
            >
              Clear Folio
            </button>
            <button
              onClick={() => {
                if (bookmarkedArticles.length > 0) {
                  onSelectArticle(bookmarkedArticles[0]);
                  onClose();
                }
              }}
              className="px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer"
            >
              Begin Reading ({bookmarkedArticles.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
