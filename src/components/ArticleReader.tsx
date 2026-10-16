import React, { useState, useEffect } from 'react';
import { Article, ReaderComment } from '../types/blog';
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Share2,
  Clock,
  Check,
  BookOpen,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onSelectArticle,
  allArticles,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'relaxed' | 'large'>('relaxed');
  const [readingTheme, setReadingTheme] = useState<'paper' | 'white' | 'midnight'>('paper');
  const [copied, setCopied] = useState(false);
  
  // Local notes/comments state
  const [comments, setComments] = useState<ReaderComment[]>([]);
  const [commentName, setCommentName] = useState('');
  const [commentLocation, setCommentLocation] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initial dummy and loaded comments
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const storageKey = `comments_${article.id}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch {
        setDefaultComments();
      }
    } else {
      setDefaultComments();
    }
  }, [article.id]);

  const setDefaultComments = () => {
    const defaults: ReaderComment[] = [
      {
        id: '1',
        articleId: article.id,
        authorName: 'Jean-Luc Moreau',
        location: 'Architectural Institute of Paris',
        content: `The thermodynamic observations in "${article.title}" resonate deeply with our recent thermal imaging tests on raw monolithic structures. The phase lag shift is indeed the central argument for earthen and dense envelope typologies.`,
        timestamp: '2 days ago',
      },
      {
        id: '2',
        articleId: article.id,
        authorName: 'Klara Lind',
        location: 'Stockholm School of Architecture',
        content: 'Particularly striking is the distinction between mere rustication and intentional material aging. A compelling thesis for contemporary building culture.',
        timestamp: '5 days ago',
      },
    ];
    setComments(defaults);
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !commentName.trim()) return;

    setIsSubmitting(true);
    const newComment: ReaderComment = {
      id: Date.now().toString(),
      articleId: article.id,
      authorName: commentName.trim(),
      location: commentLocation.trim() || 'Reader & Practicing Architect',
      content: commentText.trim(),
      timestamp: 'Just now',
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments_${article.id}`, JSON.stringify(updated));

    setCommentText('');
    setCommentName('');
    setCommentLocation('');
    setIsSubmitting(false);
  };

  // Find previous and next articles
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  // Theme styling classes
  const themeClasses = {
    paper: 'bg-[#FAF8F5] text-stone-900',
    white: 'bg-white text-stone-900',
    midnight: 'bg-[#18181B] text-stone-200',
  }[readingTheme];

  const proseSizeClasses = {
    normal: 'text-base leading-relaxed',
    relaxed: 'text-lg leading-[1.85]',
    large: 'text-xl leading-[1.95]',
  }[fontSize];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Sticky Scroll Depth Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-stone-900 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Reader Control Bar (Sticky Sub-Header) */}
      <div className={`sticky top-0 z-30 border-b transition-colors backdrop-blur-md px-6 py-3 ${
        readingTheme === 'midnight'
          ? 'bg-[#18181B]/90 border-stone-800'
          : 'bg-[#FAF8F5]/90 border-stone-200'
      }`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors ${
              readingTheme === 'midnight'
                ? 'text-stone-400 hover:text-stone-100'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Folio</span>
          </button>

          {/* Reader Preferences Bar */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Font Size Selector */}
            <div className="flex items-center gap-1 text-xs">
              <span className={`text-[11px] font-mono mr-1 hidden sm:inline ${
                readingTheme === 'midnight' ? 'text-stone-500' : 'text-stone-400'
              }`}>
                Type:
              </span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded text-xs cursor-pointer ${
                  fontSize === 'normal'
                    ? readingTheme === 'midnight' ? 'bg-stone-800 text-white font-semibold' : 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
                title="Standard font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('relaxed')}
                className={`px-2 py-1 rounded text-sm cursor-pointer ${
                  fontSize === 'relaxed'
                    ? readingTheme === 'midnight' ? 'bg-stone-800 text-white font-semibold' : 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
                title="Relaxed font size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded text-base cursor-pointer hidden sm:inline ${
                  fontSize === 'large'
                    ? readingTheme === 'midnight' ? 'bg-stone-800 text-white font-semibold' : 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
                title="Large font size"
              >
                A++
              </button>
            </div>

            {/* Reading Mode Canvas Toggles */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setReadingTheme('paper')}
                className={`w-5 h-5 rounded-full border cursor-pointer ${
                  readingTheme === 'paper' ? 'ring-2 ring-stone-500' : 'opacity-70'
                }`}
                style={{ backgroundColor: '#FAF8F5', borderColor: '#D6CEBE' }}
                title="Paper Alabaster"
              />
              <button
                onClick={() => setReadingTheme('white')}
                className={`w-5 h-5 rounded-full border cursor-pointer ${
                  readingTheme === 'white' ? 'ring-2 ring-stone-500' : 'opacity-70'
                }`}
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
                title="Clean White"
              />
              <button
                onClick={() => setReadingTheme('midnight')}
                className={`w-5 h-5 rounded-full border cursor-pointer ${
                  readingTheme === 'midnight' ? 'ring-2 ring-amber-400' : 'opacity-70'
                }`}
                style={{ backgroundColor: '#18181B', borderColor: '#3F3F46' }}
                title="Midnight Slate"
              />
            </div>

            <div className="h-4 w-px bg-stone-300 dark:bg-stone-700" />

            {/* Bookmark & Share Actions */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                readingTheme === 'midnight'
                  ? 'hover:bg-stone-800 text-stone-300'
                  : 'hover:bg-stone-200 text-stone-700'
              }`}
              title={isBookmarked ? 'Saved to Folio' : 'Save for later'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-amber-500" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={handleShare}
              className={`p-1.5 rounded transition-colors cursor-pointer relative ${
                readingTheme === 'midnight'
                  ? 'hover:bg-stone-800 text-stone-300'
                  : 'hover:bg-stone-200 text-stone-700'
              }`}
              title="Copy monograph link"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
              {copied && (
                <span className="absolute -bottom-8 right-0 text-[10px] font-sans bg-stone-900 text-white px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                  Link copied
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Reading Essay Container (Strict Reading Measure 65-75ch) */}
      <main className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
        {/* Curatorial Header */}
        <header className="mb-12">
          {/* Unboxed Metadata with Typographic Separators */}
          <div className={`flex flex-wrap items-center gap-2 text-xs font-mono mb-4 uppercase tracking-wider ${
            readingTheme === 'midnight' ? 'text-stone-400' : 'text-stone-500'
          }`}>
            <span>{article.volume}</span>
            <span aria-hidden="true">·</span>
            <span>{article.issue}</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTimeMinutes} min read</span>
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-[1.18] mb-6 ${
              readingTheme === 'midnight' ? 'text-stone-100' : 'text-stone-950'
            }`}
            style={{ textWrap: 'balance' }}
          >
            {article.title}
          </h1>

          <p className={`text-lg sm:text-xl font-serif italic mb-8 leading-relaxed ${
            readingTheme === 'midnight' ? 'text-stone-300' : 'text-stone-700'
          }`}>
            {article.subtitle}
          </p>

          {/* Author Block & Affiliations */}
          <div className={`pt-6 pb-6 border-y flex items-center justify-between gap-4 ${
            readingTheme === 'midnight' ? 'border-stone-800' : 'border-stone-200'
          }`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-300 dark:bg-stone-700 flex items-center justify-center font-serif text-lg text-stone-800 dark:text-stone-100 font-semibold shrink-0">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className={`text-sm font-semibold ${
                  readingTheme === 'midnight' ? 'text-stone-100' : 'text-stone-900'
                }`}>
                  {article.author.name}
                </p>
                <p className={`text-xs ${
                  readingTheme === 'midnight' ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  {article.author.role} · {article.author.institution}
                </p>
              </div>
            </div>

            <div className={`text-right text-xs font-mono hidden sm:block ${
              readingTheme === 'midnight' ? 'text-stone-500' : 'text-stone-400'
            }`}>
              <p>Published {article.publishedAt}</p>
              <p>Peer Reviewed</p>
            </div>
          </div>
        </header>

        {/* Hero Architectural Visual Plate */}
        <div className="mb-12">
          <div className="aspect-16/9 rounded overflow-hidden bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-800">
            <img
              src={article.coverImage}
              alt={article.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`text-xs font-serif italic mt-3 text-center ${
            readingTheme === 'midnight' ? 'text-stone-400' : 'text-stone-500'
          }`}>
            Fig. 01 — {article.imageAlt}. Captured for the Chronicle &amp; Form 2026 Archive.
          </p>
        </div>

        {/* Curator Note / Abstract Callout */}
        {article.curatorNotes && (
          <div className={`p-5 mb-10 rounded border text-xs sm:text-sm font-sans ${
            readingTheme === 'midnight'
              ? 'bg-stone-900 border-stone-800 text-stone-300'
              : 'bg-stone-100/70 border-stone-200 text-stone-700'
          }`}>
            <div className="flex items-center gap-1.5 font-mono uppercase text-[11px] tracking-wider text-amber-800 dark:text-amber-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curatorial Colophon</span>
            </div>
            <p>{article.curatorNotes}</p>
          </div>
        )}

        {/* Core Essay Body with Drop Cap and Typographic Flow */}
        <article className={`space-y-10 font-serif ${proseSizeClasses}`}>
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              {section.heading && (
                <h2 className={`text-2xl sm:text-3xl font-serif font-medium pt-4 ${
                  readingTheme === 'midnight' ? 'text-stone-100' : 'text-stone-900'
                }`}>
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => {
                // Apply drop cap to the very first paragraph of the essay
                const isFirstEver = idx === 0 && pIdx === 0;

                return (
                  <p
                    key={pIdx}
                    className={`leading-relaxed text-stone-800 dark:text-stone-300 font-normal ${
                      isFirstEver ? 'drop-cap' : ''
                    }`}
                  >
                    {p}
                  </p>
                );
              })}

              {/* Editorial Pull Quote (Hairline top/bottom borders, NO thick left borders) */}
              {section.pullQuote && (
                <div className={`my-10 py-8 border-y text-center ${
                  readingTheme === 'midnight' ? 'border-stone-800' : 'border-stone-300'
                }`}>
                  <blockquote className={`text-xl sm:text-2xl font-serif italic leading-relaxed max-w-xl mx-auto ${
                    readingTheme === 'midnight' ? 'text-amber-200/90' : 'text-stone-800'
                  }`}>
                    &ldquo;{section.pullQuote.quote}&rdquo;
                  </blockquote>
                  {section.pullQuote.citation && (
                    <cite className={`block text-xs uppercase tracking-widest font-mono mt-4 not-italic ${
                      readingTheme === 'midnight' ? 'text-stone-500' : 'text-stone-500'
                    }`}>
                      — {section.pullQuote.citation}
                    </cite>
                  )}
                </div>
              )}

              {/* Figure Presentation */}
              {section.figure && (
                <div className={`p-4 rounded border text-xs font-sans ${
                  readingTheme === 'midnight' ? 'bg-stone-900 border-stone-800' : 'bg-stone-100/60 border-stone-200'
                }`}>
                  <p className="font-semibold text-stone-900 dark:text-stone-100 mb-1">
                    {section.figure.number} — {section.figure.caption}
                  </p>
                  <p className="text-stone-600 dark:text-stone-400">
                    {section.figure.description}
                  </p>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Tags list as clean unboxed typography */}
        <div className={`mt-14 pt-6 border-t flex flex-wrap items-center gap-3 text-xs ${
          readingTheme === 'midnight' ? 'border-stone-800 text-stone-400' : 'border-stone-200 text-stone-500'
        }`}>
          <span className="font-mono uppercase tracking-wider">Archival Index:</span>
          {article.tags.map((tag) => (
            <span key={tag} className="font-medium text-stone-700 dark:text-stone-300">
              #{tag}
            </span>
          ))}
        </div>

        {/* Reader Notes / Scholarly Discussion */}
        <section className={`mt-16 pt-10 border-t ${
          readingTheme === 'midnight' ? 'border-stone-800' : 'border-stone-200'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-stone-500" />
              <h3 className="text-lg font-serif font-medium text-stone-900 dark:text-stone-100">
                Discourse &amp; Marginalia ({comments.length})
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">Open Reader Forum</span>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className={`p-6 rounded border mb-8 ${
            readingTheme === 'midnight'
              ? 'bg-stone-900 border-stone-800'
              : 'bg-white border-stone-200/90'
          }`}>
            <h4 className="text-sm font-serif font-medium mb-4 text-stone-900 dark:text-stone-100">
              Contribute your architectural perspective to this essay
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono text-stone-500 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Arisawa, Architect"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded border focus:outline-none ${
                    readingTheme === 'midnight'
                      ? 'bg-stone-800 border-stone-700 text-stone-100'
                      : 'bg-stone-50 border-stone-200 text-stone-900'
                  }`}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-stone-500 mb-1">Affiliation or City</label>
                <input
                  type="text"
                  placeholder="e.g. Kyoto University or Basel"
                  value={commentLocation}
                  onChange={(e) => setCommentLocation(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded border focus:outline-none ${
                    readingTheme === 'midnight'
                      ? 'bg-stone-800 border-stone-700 text-stone-100'
                      : 'bg-stone-50 border-stone-200 text-stone-900'
                  }`}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-mono text-stone-500 mb-1">Observation or Critical Response</label>
              <textarea
                required
                rows={3}
                placeholder="Share reflections on materiality, acoustics, or structural honesty..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className={`w-full px-3 py-2 text-xs rounded border focus:outline-none leading-relaxed ${
                  readingTheme === 'midnight'
                    ? 'bg-stone-800 border-stone-700 text-stone-100'
                    : 'bg-stone-50 border-stone-200 text-stone-900'
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Record Response</span>
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comm) => (
              <div
                key={comm.id}
                className={`p-4 rounded border text-xs leading-relaxed ${
                  readingTheme === 'midnight'
                    ? 'bg-stone-900/50 border-stone-800 text-stone-300'
                    : 'bg-stone-50/60 border-stone-200/70 text-stone-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      {comm.authorName}
                    </span>
                    <span className="text-stone-400">·</span>
                    <span className="text-stone-500">{comm.location}</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">{comm.timestamp}</span>
                </div>
                <p className="font-serif text-sm text-stone-800 dark:text-stone-200">
                  {comm.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Previous and Next Navigation */}
        <div className={`mt-16 pt-8 border-t grid grid-cols-1 sm:grid-cols-2 gap-6 ${
          readingTheme === 'midnight' ? 'border-stone-800' : 'border-stone-200'
        }`}>
          {prevArticle ? (
            <button
              onClick={() => onSelectArticle(prevArticle)}
              className={`p-4 rounded border text-left group cursor-pointer transition-colors ${
                readingTheme === 'midnight'
                  ? 'border-stone-800 hover:bg-stone-900'
                  : 'border-stone-200 hover:bg-stone-100/60'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                &larr; Preceding Essay
              </span>
              <p className="text-sm font-serif font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 line-clamp-1">
                {prevArticle.title}
              </p>
            </button>
          ) : <div />}

          {nextArticle ? (
            <button
              onClick={() => onSelectArticle(nextArticle)}
              className={`p-4 rounded border text-right group cursor-pointer transition-colors ${
                readingTheme === 'midnight'
                  ? 'border-stone-800 hover:bg-stone-900'
                  : 'border-stone-200 hover:bg-stone-100/60'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                Subsequent Essay &rarr;
              </span>
              <p className="text-sm font-serif font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 line-clamp-1">
                {nextArticle.title}
              </p>
            </button>
          ) : <div />}
        </div>
      </main>
    </div>
  );
};
