import React, { useState, useEffect, useMemo } from 'react';
import { ARTICLES, CATEGORIES } from './data/articles';
import { Article } from './types/blog';
import { Header } from './components/Header';
import { LeadHero } from './components/LeadHero';
import { CategoryFilter } from './components/CategoryFilter';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { SubscribeModal } from './components/SubscribeModal';
import { ManifestoModal } from './components/ManifestoModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';
import { BookOpen, Search, X, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Dispatches');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNavView, setActiveNavView] = useState<'all' | 'curated' | 'archive'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load bookmarks from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('chronicle_bookmarks');
      if (saved) {
        setBookmarkedIds(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2500);
  };

  const handleToggleBookmark = (articleId: string) => {
    setBookmarkedIds((prev) => {
      let next: string[];
      if (prev.includes(articleId)) {
        next = prev.filter((id) => id !== articleId);
        showToast('Removed from reading folio');
      } else {
        next = [...prev, articleId];
        showToast('Saved to personal reading folio');
      }
      localStorage.setItem('chronicle_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const handleClearBookmarks = () => {
    setBookmarkedIds([]);
    localStorage.removeItem('chronicle_bookmarks');
    showToast('Folio cleared');
  };

  // Article count map for each category
  const articleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered articles based on category, search, and navigation view
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category check
      if (selectedCategory !== 'All Dispatches' && article.category !== selectedCategory) {
        return false;
      }

      // Nav view check
      if (activeNavView === 'curated' && !article.featured && article.readTimeMinutes < 8) {
        return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesSub = article.subtitle.toLowerCase().includes(q);
        const matchesSummary = article.summary.toLowerCase().includes(q);
        const matchesAuthor = article.author.name.toLowerCase().includes(q);
        const matchesTag = article.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSub && !matchesSummary && !matchesAuthor && !matchesTag) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, activeNavView]);

  // Lead featured article
  const leadArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const secondaryArticles = ARTICLES.filter((a) => a.id !== leadArticle.id).slice(0, 3);
  const remainingArticles = ARTICLES.filter((a) => a.id !== leadArticle.id);

  const bookmarkedArticlesList = useMemo(() => {
    return ARTICLES.filter((a) => bookmarkedIds.includes(a.id));
  }, [bookmarkedIds]);

  // If viewing single article reader
  if (selectedArticle) {
    return (
      <ArticleReader
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
        isBookmarked={bookmarkedIds.includes(selectedArticle.id)}
        onToggleBookmark={handleToggleBookmark}
        onSelectArticle={(article) => setSelectedArticle(article)}
        allArticles={ARTICLES}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-200/60 selection:text-stone-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-stone-100 text-xs px-4 py-2.5 rounded shadow-lg transition-all flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Header adhering to Top Bar Contract */}
      <Header
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onSelectNav={(view) => {
          setActiveNavView(view);
          setSelectedCategory('All Dispatches');
        }}
        activeView={activeNavView}
        bookmarkCount={bookmarkedIds.length}
        onGoHome={() => {
          setSelectedArticle(null);
          setSelectedCategory('All Dispatches');
          setSearchQuery('');
          setActiveNavView('all');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Journal Container */}
      <main className="flex-1 max-w-7xl mx-auto px-6 pt-8 w-full">
        {/* Curatorial Masthead Info */}
        <div className="mb-8 pb-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            <span className="text-stone-800 font-semibold uppercase">Volume IX · Issue 28</span>
            <span className="mx-2">/</span>
            <span>Autumn Retrospective</span>
          </div>
          <div className="flex items-center gap-4">
            <span>10 In-Depth Monograph Essays</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Published for Architectural Practice</span>
          </div>
        </div>

        {/* Search / Active Filter Feedback Banner */}
        {(searchQuery || selectedCategory !== 'All Dispatches' || activeNavView !== 'all') && (
          <div className="mb-8 p-3.5 bg-stone-200/70 rounded border border-stone-300/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-stone-700">
              <Search className="w-3.5 h-3.5 text-stone-500" />
              <span>
                Filtering by:{' '}
                <strong>
                  {searchQuery ? `"${searchQuery}"` : ''}
                  {selectedCategory !== 'All Dispatches' ? ` [${selectedCategory}]` : ''}
                  {activeNavView !== 'all' ? ` [View: ${activeNavView}]` : ''}
                </strong>{' '}
                ({filteredArticles.length} {filteredArticles.length === 1 ? 'essay' : 'essays'} found)
              </span>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Dispatches');
                setActiveNavView('all');
              }}
              className="inline-flex items-center gap-1 font-mono text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear filters</span>
            </button>
          </div>
        )}

        {/* If no filters active and viewing "All", show the Curated Lead Story */}
        {!searchQuery && selectedCategory === 'All Dispatches' && activeNavView === 'all' && (
          <LeadHero
            article={leadArticle}
            onSelect={(a) => setSelectedArticle(a)}
            isBookmarked={bookmarkedIds.includes(leadArticle.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {/* Curatorial Departments / Category Filter */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          articleCounts={articleCounts}
        />

        {/* Secondary Curated Showcase Grid (Pattern C: 3 distinct visual tiers) */}
        {!searchQuery && selectedCategory === 'All Dispatches' && activeNavView === 'all' && (
          <section className="mb-14">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-200">
              <h2 className="text-xs uppercase tracking-widest font-mono text-stone-500">
                Secondary Curatorial Spotlights
              </h2>
              <span className="text-xs font-mono text-stone-400">Plates 02 — 04</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {secondaryArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelect={(a) => setSelectedArticle(a)}
                  isBookmarked={bookmarkedIds.includes(article.id)}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))}
            </div>
          </section>
        )}

        {/* Department / All Essays Section */}
        <section>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-200">
            <h2 className="text-xs uppercase tracking-widest font-mono text-stone-500">
              {activeNavView === 'archive'
                ? 'Complete Issue Archive'
                : selectedCategory === 'All Dispatches'
                ? 'The Complete 10-Essay Collection'
                : `Department Collection: ${selectedCategory}`}
            </h2>
            <span className="text-xs font-mono text-stone-400">
              {filteredArticles.length} Monograph{filteredArticles.length === 1 ? '' : 's'}
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center bg-stone-100/60 rounded border border-stone-200">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">
                No essays match your inquiry
              </h3>
              <p className="text-sm text-stone-500 mb-6 max-w-sm mx-auto">
                No articles were found matching your current search parameters. You may reset the filters to browse all 10 monographs.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Dispatches');
                  setActiveNavView('all');
                }}
                className="px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : activeNavView === 'archive' ? (
            /* Archive list mode: compact scholarly table */
            <div className="divide-y divide-stone-200 bg-white rounded border border-stone-200 p-2">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="compact"
                  onSelect={(a) => setSelectedArticle(a)}
                  isBookmarked={bookmarkedIds.includes(article.id)}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))}
            </div>
          ) : (
            /* Standard Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === 'All Dispatches' && !searchQuery
                ? remainingArticles
                : filteredArticles
              ).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelect={(a) => setSelectedArticle(a)}
                  isBookmarked={bookmarkedIds.includes(article.id)}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
      />

      {/* Interactive Modals */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      <ManifestoModal
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticlesList}
        onSelectArticle={(a) => setSelectedArticle(a)}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearBookmarks}
      />
    </div>
  );
}
