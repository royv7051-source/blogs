export interface Author {
  name: string;
  role: string;
  institution: string;
  avatarUrl?: string;
  bio: string;
}

export interface Figure {
  caption: string;
  number: string;
  aspectRatio?: string;
  description: string;
}

export interface ArticleSection {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  pullQuote?: {
    quote: string;
    citation?: string;
  };
  figure?: Figure;
  callout?: {
    title: string;
    body: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  volume: string;
  issue: string;
  publishedAt: string;
  readTimeMinutes: number;
  featured: boolean;
  coverImage: string;
  imageAlt: string;
  author: Author;
  summary: string;
  tags: string[];
  sections: ArticleSection[];
  curatorNotes?: string;
}

export interface Bookmark {
  articleId: string;
  savedAt: string;
}

export interface ReaderComment {
  id: string;
  articleId: string;
  authorName: string;
  location: string;
  content: string;
  timestamp: string;
}
