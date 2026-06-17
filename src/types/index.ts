// User Types
export type UserRole = 'reader' | 'author' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  institution: string;
  role: UserRole;
  createdAt: string;
}

// Journal Types
export type PublicationType = 
  | 'peer-reviewed' 
  | 'conference-proceedings' 
  | 'book-reviews' 
  | 'occasional-papers' 
  | 'thematic-issue';

export type AccessType = 'open-access' | 'subscription-access';

export type Discipline = 
  | 'theology-religious-studies'
  | 'christian-education'
  | 'biblical-studies'
  | 'church-history-missions'
  | 'philosophy-ethics'
  | 'social-sciences'
  | 'education-pedagogy'
  | 'humanities';

export interface Journal {
  id: string;
  title: string;
  issn: string;
  description: string;
  discipline: Discipline;
  publicationType: PublicationType;
  accessType: AccessType;
  coverImage: string;
  keywords: string[];
  editorName: string;
  establishedYear: number;
}

export interface Issue {
  id: string;
  journalId: string;
  volume: number;
  issueNumber: number;
  year: number;
  coverImage: string;
  season?: string;
}

export interface Article {
  id: string;
  issueId: string;
  journalId: string;
  title: string;
  authors: Author[];
  abstract: string;
  keywords: string[];
  pageRange: string;
  doi?: string;
  pdfUrl: string;
  publishedDate: string;
}

export interface Author {
  name: string;
  institution: string;
  email?: string;
}

// Book Types
export interface Book {
  id: string;
  title: string;
  author: string;
  authorBio: string;
  description: string;
  price: number;
  coverImage: string;
  isbn: string;
  pages: number;
  publishedYear: number;
  categories: string[];
  tableOfContents: string[];
  sampleChapterUrl?: string;
  downloadUrl: string;
  authorId?: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

// Training Types
export interface TrainingEvent {
  id: string;
  title: string;
  type: 'webinar' | 'workshop' | 'seminar' | 'course';
  date: string;
  time: string;
  location: string | 'online';
  description: string;
  registrationUrl?: string;
  isRegistered: boolean;
}

export interface TrainingResource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'slides';
  description: string;
  downloadUrl?: string;
  videoUrl?: string;
}

// News Types
export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'news' | 'events' | 'call-for-papers' | 'new-publications';
  featuredImage: string;
  publishedDate: string;
  author: string;
}

// Submission Types
export interface ManuscriptSubmission {
  id: string;
  title: string;
  authors: Author[];
  institution: string;
  email: string;
  abstract: string;
  keywords: string[];
  fileUrl?: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  submittedDate: string;
}

// Team Member
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

// Filter State
export interface JournalFilters {
  discipline: Discipline | null;
  publicationType: PublicationType | null;
  accessType: AccessType | null;
  search: string;
}
