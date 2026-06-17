import { 
  Journal, Book, TrainingEvent, TrainingResource, 
  NewsPost, TeamMember, Issue, Article, Discipline,
  PublicationType, AccessType
} from '../types';

// Discipline labels
export const disciplineLabels: Record<Discipline, string> = {
  'theology-religious-studies': 'Theology & Religious Studies',
  'christian-education': 'Christian Education',
  'biblical-studies': 'Biblical Studies',
  'church-history-missions': 'Church History & Missions',
  'philosophy-ethics': 'Philosophy & Ethics',
  'social-sciences': 'Social Sciences',
  'education-pedagogy': 'Education & Pedagogy',
  'humanities': 'Humanities'
};

export const publicationTypeLabels: Record<PublicationType, string> = {
  'peer-reviewed': 'Peer-Reviewed Journal',
  'conference-proceedings': 'Conference Proceedings',
  'book-reviews': 'Book Reviews Journal',
  'occasional-papers': 'Occasional Papers / Working Papers',
  'thematic-issue': 'Thematic / Special Issue Journal'
};

export const accessTypeLabels: Record<AccessType, string> = {
  'open-access': 'Open Access',
  'subscription-access': 'Subscription Access'
};

// Sample Journals
export const journals: Journal[] = [
  {
    id: 'j1',
    title: 'Journal of Theological Studies',
    issn: 'JTS-2024-001',
    description: 'A leading peer-reviewed journal publishing cutting-edge research in theology, religious studies, and related disciplines. Committed to scholarly excellence and interfaith dialogue.',
    discipline: 'theology-religious-studies',
    publicationType: 'peer-reviewed',
    accessType: 'open-access',
    coverImage: 'https://picsum.photos/seed/journal1/400/560',
    keywords: ['theology', 'religious studies', 'systematic theology', 'biblical theology'],
    editorName: 'Dr. Margaret Chen',
    establishedYear: 1985
  },
  {
    id: 'j2',
    title: 'Christian Education Quarterly',
    issn: 'CEQ-2024-002',
    description: 'Dedicated to advancing the theory and practice of Christian education across diverse cultural contexts. Features empirical research and theoretical frameworks.',
    discipline: 'christian-education',
    publicationType: 'peer-reviewed',
    accessType: 'open-access',
    coverImage: 'https://picsum.photos/seed/journal2/400/560',
    keywords: ['christian education', 'pedagogy', 'faith formation', 'curriculum'],
    editorName: 'Prof. James Walker',
    establishedYear: 1992
  },
  {
    id: 'j3',
    title: 'Biblical Interpretation Review',
    issn: 'BIR-2024-003',
    description: 'Explores methodologies and approaches to biblical interpretation, from historical-critical to contemporary literary and postcolonial readings.',
    discipline: 'biblical-studies',
    publicationType: 'peer-reviewed',
    accessType: 'subscription-access',
    coverImage: 'https://picsum.photos/seed/journal3/400/560',
    keywords: ['biblical studies', 'hermeneutics', 'exegesis', 'textual criticism'],
    editorName: 'Dr. Sarah Mitchell',
    establishedYear: 1978
  },
  {
    id: 'j4',
    title: 'Church History & Global Missions',
    issn: 'CHGM-2024-004',
    description: 'Examines the historical development of Christian churches and their missionary activities worldwide, with emphasis on cross-cultural encounters.',
    discipline: 'church-history-missions',
    publicationType: 'peer-reviewed',
    accessType: 'open-access',
    coverImage: 'https://picsum.photos/seed/journal4/400/560',
    keywords: ['church history', 'missions', 'global Christianity', 'ecumenism'],
    editorName: 'Prof. David Okonkwo',
    establishedYear: 1995
  },
  {
    id: 'j5',
    title: 'Philosophy & Ethics Today',
    issn: 'PET-2024-005',
    description: 'Contemporary philosophical inquiries into moral reasoning, ethical theories, and their applications in modern society.',
    discipline: 'philosophy-ethics',
    publicationType: 'peer-reviewed',
    accessType: 'subscription-access',
    coverImage: 'https://picsum.photos/seed/journal5/400/560',
    keywords: ['philosophy', 'ethics', 'moral philosophy', 'applied ethics'],
    editorName: 'Dr. Elena Rodriguez',
    establishedYear: 2010
  },
  {
    id: 'j6',
    title: 'Social Sciences & Religion',
    issn: 'SSR-2024-006',
    description: 'Interdisciplinary journal examining the intersection of religious practices and social scientific methodologies.',
    discipline: 'social-sciences',
    publicationType: 'peer-reviewed',
    accessType: 'open-access',
    coverImage: 'https://picsum.photos/seed/journal6/400/560',
    keywords: ['social sciences', 'religion', 'sociology', 'anthropology'],
    editorName: 'Prof. Michael Thompson',
    establishedYear: 2005
  },
  {
    id: 'j7',
    title: 'International Journal of Education',
    issn: 'IJE-2024-007',
    description: 'Global perspectives on educational policies, practices, and innovations in diverse institutional settings.',
    discipline: 'education-pedagogy',
    publicationType: 'peer-reviewed',
    accessType: 'open-access',
    coverImage: 'https://picsum.photos/seed/journal7/400/560',
    keywords: ['education', 'pedagogy', 'educational policy', 'learning'],
    editorName: 'Dr. Patricia Williams',
    establishedYear: 1988
  },
  {
    id: 'j8',
    title: 'Humanities Review',
    issn: 'HR-2024-008',
    description: 'A broad-based journal covering literature, history, cultural studies, and the arts with interdisciplinary approaches.',
    discipline: 'humanities',
    publicationType: 'book-reviews',
    accessType: 'subscription-access',
    coverImage: 'https://picsum.photos/seed/journal8/400/560',
    keywords: ['humanities', 'cultural studies', 'literature', 'history'],
    editorName: 'Prof. Robert Anderson',
    establishedYear: 1975
  },
  {
    id: 'j9',
    title: 'Conference Proceedings in Religious Studies',
    issn: 'CPRS-2024-009',
    description: 'Selected papers from annual conferences on religious studies, interfaith dialogues, and comparative theology.',
    discipline: 'theology-religious-studies',
    publicationType: 'conference-proceedings',
    accessType: 'open-access',
    coverImage: 'https://picsum.photos/seed/journal9/400/560',
    keywords: ['conference', 'religious studies', 'interfaith'],
    editorName: 'Dr. Amanda Foster',
    establishedYear: 2015
  },
  {
    id: 'j10',
    title: 'Working Papers on Education & Faith',
    issn: 'WPEF-2024-010',
    description: 'Pre-publication research papers and works-in-progress on the relationship between education and religious faith.',
    discipline: 'education-pedagogy',
    publicationType: 'occasional-papers',
    accessType: 'open-access',
    coverImage: 'https://picsum.photos/seed/journal10/400/560',
    keywords: ['education', 'faith', 'research papers'],
    editorName: 'Prof. Linda Carter',
    establishedYear: 2018
  }
];

// Sample Issues
export const issues: Issue[] = [
  { id: 'i1', journalId: 'j1', volume: 15, issueNumber: 1, year: 2024, coverImage: 'https://picsum.photos/seed/issue1/400/560', season: 'Spring' },
  { id: 'i2', journalId: 'j1', volume: 14, issueNumber: 4, year: 2023, coverImage: 'https://picsum.photos/seed/issue2/400/560', season: 'Winter' },
  { id: 'i3', journalId: 'j1', volume: 14, issueNumber: 3, year: 2023, coverImage: 'https://picsum.photos/seed/issue3/400/560', season: 'Fall' },
  { id: 'i4', journalId: 'j2', volume: 12, issueNumber: 2, year: 2024, coverImage: 'https://picsum.photos/seed/issue4/400/560', season: 'Summer' },
  { id: 'i5', journalId: 'j3', volume: 28, issueNumber: 1, year: 2024, coverImage: 'https://picsum.photos/seed/issue5/400/560', season: 'Spring' },
  { id: 'i6', journalId: 'j5', volume: 8, issueNumber: 1, year: 2024, coverImage: 'https://picsum.photos/seed/issue6/400/560', season: 'Spring' },
];

// Sample Articles
export const articles: Article[] = [
  {
    id: 'a1',
    issueId: 'i1',
    journalId: 'j1',
    title: 'The Trinity and Contemporary Thought: Reconsidering Classical Formulations',
    authors: [{ name: 'Dr. Catherine Hayes', institution: 'University of Edinburgh' }, { name: 'Prof. Thomas Wright', institution: 'Oxford University' }],
    abstract: 'This paper examines contemporary philosophical challenges to classical Trinitarian doctrine and proposes new interpretive frameworks that maintain theological integrity while engaging modern thought. We argue that the perichoretic model provides resources for addressing current objections.',
    keywords: ['Trinity', 'systematic theology', 'philosophy of religion', 'perichoresis'],
    pageRange: '1-24',
    doi: '10.1234/jts.2024.001',
    pdfUrl: '/sample-article.pdf',
    publishedDate: '2024-03-15'
  },
  {
    id: 'a2',
    issueId: 'i1',
    journalId: 'j1',
    title: 'Interfaith Dialogue in Pluralistic Societies: A Theological Assessment',
    authors: [{ name: 'Dr. Samuel Oduor', institution: 'University of Nairobi' }],
    abstract: 'As societies become increasingly pluralistic, the need for constructive interfaith engagement grows more pressing. This article assesses various theological approaches to religious plurality and proposes guidelines for meaningful dialogue.',
    keywords: ['interfaith', 'pluralism', 'theology', 'dialogue'],
    pageRange: '25-48',
    doi: '10.1234/jts.2024.002',
    pdfUrl: '/sample-article.pdf',
    publishedDate: '2024-03-15'
  },
  {
    id: 'a3',
    issueId: 'i4',
    journalId: 'j2',
    title: 'Digital Technologies in Christian Formation: Opportunities and Challenges',
    authors: [{ name: 'Prof. Rebecca Stone', institution: 'Fuller Theological Seminary' }],
    abstract: 'The integration of digital technologies into Christian education presents both unprecedented opportunities and significant challenges. This study explores how churches are navigating this terrain.',
    keywords: ['digital technology', 'Christian education', 'formation', 'discipleship'],
    pageRange: '56-89',
    doi: '10.1234/ceg.2024.001',
    pdfUrl: '/sample-article.pdf',
    publishedDate: '2024-06-01'
  },
  {
    id: 'a4',
    issueId: 'i5',
    journalId: 'j3',
    title: 'Postcolonial Hermeneutics and Biblical Interpretation',
    authors: [{ name: 'Dr. Grace N而', institution: 'University of Lagos' }],
    abstract: 'Postcolonial theory offers valuable tools for reading biblical texts with awareness of power dynamics and colonial legacies. This article demonstrates practical applications of postcolonial hermeneutics.',
    keywords: ['postcolonialism', 'hermeneutics', 'biblical interpretation', 'power'],
    pageRange: '12-34',
    doi: '10.1234/bir.2024.001',
    pdfUrl: '/sample-article.pdf',
    publishedDate: '2024-01-20'
  }
];

// Sample Books
export const books: Book[] = [
  {
    id: 'b1',
    title: 'Foundations of Biblical Exegesis',
    author: 'Dr. Robert H. Smith',
    authorBio: 'Dr. Robert H. Smith is Professor Emeritus of Biblical Studies at Fuller Theological Seminary. He has authored numerous books on biblical interpretation and hermeneutics.',
    description: 'This comprehensive guide provides students and scholars with essential tools for interpreting biblical texts responsibly and accurately. Covering historical, literary, and theological approaches, this book equips readers to engage Scripture with scholarly rigor while maintaining practical application.',
    price: 49.99,
    coverImage: 'https://picsum.photos/seed/book1/400/560',
    isbn: '978-0-691-23456-7',
    pages: 342,
    publishedYear: 2023,
    categories: ['Biblical Studies', 'Hermeneutics'],
    tableOfContents: [
      '1. Introduction to Biblical Interpretation',
      '2. Historical-Critical Methods',
      '3. Literary Approaches',
      '4. Theological Interpretation',
      '5. Practical Application',
      '6. Advanced Topics'
    ],
    sampleChapterUrl: '/sample-chapter.pdf',
    downloadUrl: '/downloads/foundations-biblical-exegesis.pdf',
    authorId: 'u1'
  },
  {
    id: 'b2',
    title: 'Christian Ethics in the Digital Age',
    author: 'Prof. Martha K. Johnson',
    authorBio: 'Prof. Martha K. Johnson holds the Chair of Ethics at Duke Divinity School. Her research focuses on technology ethics and Christian moral theology.',
    description: 'As digital technologies transform every aspect of human life, Christian ethicists must grapple with new questions about privacy, identity, community, and justice. This timely volume offers theological frameworks for navigating our digitally mediated world.',
    price: 39.99,
    coverImage: 'https://picsum.photos/seed/book2/400/560',
    isbn: '978-0-691-23457-4',
    pages: 278,
    publishedYear: 2024,
    categories: ['Ethics', 'Technology'],
    tableOfContents: [
      '1. The Digital Landscape',
      '2. Privacy and Surveillance',
      '3. Digital Identity',
      '4. Online Community',
      '5. Justice in the Digital Age',
      '6. Toward a Christian Digital Ethic'
    ],
    sampleChapterUrl: '/sample-chapter.pdf',
    downloadUrl: '/downloads/christian-ethics-digital-age.pdf'
  },
  {
    id: 'b3',
    title: 'Mission in a Multifaith World',
    author: 'Dr. James O. Abara',
    authorBio: 'Dr. James O. Abara is Director of the Center for Global Mission at Full Sail University. He specializes in comparative religion and mission studies.',
    description: 'This book explores the changing landscape of Christian mission in an increasingly interconnected and religiously diverse world. Drawing on case studies from Asia, Africa, and the Americas, it offers practical wisdom for cross-cultural engagement.',
    price: 44.99,
    coverImage: 'https://picsum.photos/seed/book3/400/560',
    isbn: '978-0-691-23458-1',
    pages: 312,
    publishedYear: 2023,
    categories: ['Missions', 'Interfaith'],
    tableOfContents: [
      '1. Changing Paradigms in Mission',
      '2. Interfaith Encounter',
      '3. Contextualization Strategies',
      '4. Power and Postcolonialism',
      '5. Collaborative Mission',
      '6. Future Directions'
    ],
    sampleChapterUrl: '/sample-chapter.pdf',
    downloadUrl: '/downloads/mission-multifaith-world.pdf'
  },
  {
    id: 'b4',
    title: 'Philosophy of Religion: A Contemporary Introduction',
    author: 'Dr. William T. Meyer',
    authorBio: 'Dr. William T. Meyer is Professor of Philosophy at Georgetown University. He has published extensively on philosophical theology and epistemology.',
    description: 'This clear and accessible introduction covers the central topics in philosophy of religion, from arguments for God\'s existence to the problem of evil, from religious language to afterlife beliefs. Ideal for undergraduate and graduate students.',
    price: 54.99,
    coverImage: 'https://picsum.photos/seed/book4/400/560',
    isbn: '978-0-691-23459-8',
    pages: 398,
    publishedYear: 2024,
    categories: ['Philosophy', 'Religion'],
    tableOfContents: [
      '1. The Nature of Philosophy of Religion',
      '2. Arguments for God\'s Existence',
      '3. The Problem of Evil',
      '4. Religious Language',
      '5. Miracles',
      '6. Life After Death',
      '7. Religious Experience'
    ],
    sampleChapterUrl: '/sample-chapter.pdf',
    downloadUrl: '/downloads/philosophy-religion-intro.pdf'
  },
  {
    id: 'b5',
    title: 'Teaching for Transformation: Pedagogy in Christian Higher Education',
    author: 'Prof. Elizabeth A. Morris',
    authorBio: 'Prof. Elizabeth A. Morris serves as Dean of the School of Education at Baylor University. Her scholarship focuses on faith-based pedagogy.',
    description: 'How can Christian educators create learning experiences that truly transform students? This book integrates educational theory with Christian vision to offer a comprehensive approach to teaching in theological and religious studies contexts.',
    price: 36.99,
    coverImage: 'https://picsum.photos/seed/book5/400/560',
    isbn: '978-0-691-23460-4',
    pages: 245,
    publishedYear: 2023,
    categories: ['Education', 'Christian Education'],
    tableOfContents: [
      '1. Foundations of Transformative Learning',
      '2. Integrating Faith and Learning',
      '3. Creating Engaging Curricula',
      '4. Assessment for Growth',
      '5. Faculty Formation',
      '6. Case Studies in Transformation'
    ],
    sampleChapterUrl: '/sample-chapter.pdf',
    downloadUrl: '/downloads/teaching-transformation.pdf'
  },
  {
    id: 'b6',
    title: 'Church History: A Global Perspective',
    author: 'Dr. Patricia M. Thompson',
    authorBio: 'Dr. Patricia M. Thompson is Professor of Church History at Yale Divinity School. She specializes in global Christianity and women\'s history.',
    description: 'This groundbreaking church history text moves beyond Eurocentric narratives to tell the story of Christianity as a truly global faith. Richly illustrated and engagingly written, it is ideal for seminary and undergraduate courses.',
    price: 59.99,
    coverImage: 'https://picsum.photos/seed/book6/400/560',
    isbn: '978-0-691-23461-1',
    pages: 512,
    publishedYear: 2024,
    categories: ['Church History', 'Global Christianity'],
    tableOfContents: [
      '1. Early Christianity in the Mediterranean',
      '2. The Medieval Church',
      '3. The Reformation Era',
      '4. Christianity in Africa',
      '5. Christianity in Asia',
      '6. Christianity in Latin America',
      '7. Christianity in North America',
      '8. Global Christianity Today'
    ],
    sampleChapterUrl: '/sample-chapter.pdf',
    downloadUrl: '/downloads/church-history-global.pdf'
  }
];

// Training Events
export const trainingEvents: TrainingEvent[] = [
  {
    id: 'te1',
    title: 'Advanced Biblical Greek Workshop',
    type: 'workshop',
    date: '2024-04-15',
    time: '9:00 AM - 4:00 PM',
    location: 'online',
    description: 'Intensive workshop on advanced Greek grammar and exegesis. Participants will engage with complex textual problems and develop skills for sermon preparation and academic research.',
    isRegistered: false
  },
  {
    id: 'te2',
    title: 'Research Methods in Religious Studies',
    type: 'course',
    date: '2024-05-01',
    time: '6:00 PM - 8:00 PM (Weekly)',
    location: 'online',
    description: 'A six-week course covering qualitative and quantitative research methodologies appropriate for studying religious phenomena. Ideal for graduate students and junior faculty.',
    isRegistered: false
  },
  {
    id: 'te3',
    title: 'Publishing in Academic Journals: Best Practices',
    type: 'webinar',
    date: '2024-03-20',
    time: '2:00 PM - 3:30 PM',
    location: 'online',
    description: 'Learn the secrets of successful academic publishing from experienced journal editors. Topics include manuscript preparation, peer review navigation, and responding to reviewer comments.',
    isRegistered: false
  },
  {
    id: 'te4',
    title: 'Annual Conference on Theology and Public Life',
    type: 'seminar',
    date: '2024-06-10',
    time: '8:30 AM - 5:00 PM',
    location: 'Chicago, IL',
    description: 'Join scholars and practitioners for a day of reflection on how theological insights can inform public discourse and policy. Features keynote speakers and breakout sessions.',
    isRegistered: false
  }
];

// Training Resources
export const trainingResources: TrainingResource[] = [
  {
    id: 'tr1',
    title: 'Introduction to Theological Research',
    type: 'pdf',
    description: 'A comprehensive guide to research methods in theological studies, including library resources, database search strategies, and citation management.',
    downloadUrl: '/resources/intro-theological-research.pdf'
  },
  {
    id: 'tr2',
    title: 'Biblical Languages Learning Series',
    type: 'video',
    description: 'Video lecture series covering fundamentals of Biblical Hebrew and Greek. Perfect for self-study or supplementary course material.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'tr3',
    title: 'Conference Presentation Templates',
    type: 'slides',
    description: 'Professional PowerPoint and Keynote templates designed for academic conference presentations. Includes dark and light themes.',
    downloadUrl: '/resources/presentation-templates.zip'
  },
  {
    id: 'tr4',
    title: 'Peer Review Process Explained',
    type: 'pdf',
    description: 'Understanding the peer review process: what reviewers look for, how to respond to feedback, and tips for becoming a good reviewer yourself.',
    downloadUrl: '/resources/peer-review-guide.pdf'
  },
  {
    id: 'tr5',
    title: 'Advanced Hermeneutics Workshop Recording',
    type: 'video',
    description: 'Full recording of our recent hermeneutics workshop, covering contemporary approaches to biblical interpretation.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'tr6',
    title: 'Academic Writing Workshop',
    type: 'pdf',
    description: 'Guidelines for writing clearly and persuasively in academic contexts. Covers structure, argumentation, and avoiding common errors.',
    downloadUrl: '/resources/academic-writing-guide.pdf'
  }
];

// News Posts
export const newsPosts: NewsPost[] = [
  {
    id: 'n1',
    title: 'New Partnership with African Theological Association',
    excerpt: 'ScholarsPress is pleased to announce a strategic partnership with the African Theological Association to promote scholarly publishing from African institutions.',
    content: 'We are thrilled to announce this partnership that will expand access to academic publishing for scholars across Africa. The ATA represents over 200 theological institutions and will bring valuable expertise to our platform.',
    category: 'news',
    featuredImage: 'https://picsum.photos/seed/news1/800/400',
    publishedDate: '2024-02-15',
    author: 'Editorial Team'
  },
  {
    id: 'n2',
    title: 'Call for Papers: Special Issue on Religion and Climate Change',
    excerpt: 'The Journal of Theological Studies seeks contributions for a special thematic issue examining the intersection of religious thought and environmental ethics.',
    content: 'We invite scholarly contributions that explore how religious traditions engage with climate change, environmental justice, and ecological theology. Deadline for submissions is June 1, 2024.',
    category: 'call-for-papers',
    featuredImage: 'https://picsum.photos/seed/news2/800/400',
    publishedDate: '2024-02-10',
    author: 'Journal Editor'
  },
  {
    id: 'n3',
    title: 'Annual Scholarship Conference Registration Now Open',
    excerpt: 'Registration is now open for our 2024 Annual Scholarship Conference. Early bird pricing available until March 31.',
    content: 'Join over 500 scholars from around the world for three days of paper presentations, workshops, and networking. This year\'s theme is "Tradition and Transformation in Global Christianity."',
    category: 'events',
    featuredImage: 'https://picsum.photos/seed/news3/800/400',
    publishedDate: '2024-02-05',
    author: 'Conference Committee'
  },
  {
    id: 'n4',
    title: 'Three New Books Released This Quarter',
    excerpt: 'Explore our latest publications covering biblical studies, ethics, and mission work.',
    content: 'We are pleased to release three new scholarly works this quarter. These books represent the best in current scholarship and are available in both print and digital formats.',
    category: 'new-publications',
    featuredImage: 'https://picsum.photos/seed/news4/800/400',
    publishedDate: '2024-01-28',
    author: 'Publications Team'
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Dr. Margaret Chen',
    title: 'Editor-in-Chief',
    bio: 'Dr. Chen serves as Editor-in-Chief with over 25 years of experience in theological publishing. Previously at Cambridge University Press.',
    image: 'https://picsum.photos/seed/team1/300/300'
  },
  {
    id: 'tm2',
    name: 'Prof. David Okonkwo',
    title: 'Deputy Editor',
    bio: 'Prof. Okonkwo specializes in African Christianity and global mission studies. He brings invaluable international perspective to our editorial board.',
    image: 'https://picsum.photos/seed/team2/300/300'
  },
  {
    id: 'tm3',
    name: 'Dr. Sarah Mitchell',
    title: 'Managing Editor',
    bio: 'Dr. Mitchell oversees day-to-day operations of the journals division, ensuring quality and timely publication of all issues.',
    image: 'https://picsum.photos/seed/team3/300/300'
  },
  {
    id: 'tm4',
    name: 'Dr. James Walker',
    title: 'Books Editor',
    bio: 'Dr. Walker leads our academic books program, curating titles that advance scholarship in Christian education and pedagogy.',
    image: 'https://picsum.photos/seed/team4/300/300'
  },
  {
    id: 'tm5',
    name: 'Prof. Linda Carter',
    title: 'Director of Training',
    bio: 'Prof. Carter heads our Educational Training Corner, developing programs that support scholar development at all career stages.',
    image: 'https://picsum.photos/seed/team5/300/300'
  },
  {
    id: 'tm6',
    name: 'Dr. Michael Thompson',
    title: 'Digital Strategy Director',
    bio: 'Dr. Thompson leads our digital transformation initiatives, ensuring our platform meets the evolving needs of global scholarship.',
    image: 'https://picsum.photos/seed/team6/300/300'
  }
];

// Helper functions
export const getJournalsByDiscipline = (discipline: Discipline) => 
  journals.filter(j => j.discipline === discipline);

export const getJournalsByPublicationType = (type: PublicationType) => 
  journals.filter(j => j.publicationType === type);

export const getJournalsByAccessType = (type: AccessType) => 
  journals.filter(j => j.accessType === type);

export const getIssuesByJournal = (journalId: string) => 
  issues.filter(i => i.journalId === journalId);

export const getArticlesByIssue = (issueId: string) => 
  articles.filter(a => a.issueId === issueId);

export const getArticlesByJournal = (journalId: string) => 
  articles.filter(a => a.journalId === journalId);

export const searchJournals = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return journals.filter(j => 
    j.title.toLowerCase().includes(lowerQuery) ||
    j.description.toLowerCase().includes(lowerQuery) ||
    j.keywords.some(k => k.toLowerCase().includes(lowerQuery))
  );
};
