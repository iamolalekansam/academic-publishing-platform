import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Newspaper, Users, Download, ChevronRight } from 'lucide-react';
import { journals, books, newsPosts, disciplineLabels, publicationTypeLabels, accessTypeLabels } from '../data';
import { Discipline, PublicationType, AccessType } from '../types';

const HomePage: React.FC = () => {
  const featuredJournals = journals.slice(0, 3);
  const featuredBooks = books.slice(0, 3);
  const latestNews = newsPosts.slice(0, 3);

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'open-access': return 'bg-green-100 text-green-800';
      case 'subscription-access': return 'bg-blue-100 text-blue-800';
      case 'peer-reviewed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1A3A5C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8922A]/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advancing Knowledge Through <span className="text-[#C8922A]">Rigorous Studying</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              PRAGMASAM GLOBAL is a leading academic publisher dedicated to disseminating high-quality 
              research in theology, religious studies, philosophy, and related disciplines. Join our 
              global community of scholars and researchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/journals"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C8922A] text-white font-semibold rounded hover:bg-[#B07E25] transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Journals
              </Link>
              <Link
                to="/books"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#1A3A5C] transition-colors"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Shop Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Journals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C]">
                Featured Journals
              </h2>
              <p className="text-gray-600 mt-2">Latest issues from our peer-reviewed publications</p>
            </div>
            <Link
              to="/journals"
              className="hidden sm:flex items-center text-[#C8922A] font-semibold hover:text-[#B07E25] transition-colors"
            >
              View All <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJournals.map((journal) => (
              <div
                key={journal.id}
                className="bg-[#F9F8F6] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={journal.coverImage}
                    alt={journal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-white/90 text-xs font-medium text-[#1A3A5C] rounded">
                      {disciplineLabels[journal.discipline as Discipline]}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getBadgeColor(journal.accessType)}`}>
                      {accessTypeLabels[journal.accessType as AccessType]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">ISSN: {journal.issn}</p>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A3A5C] mb-2">
                    {journal.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{journal.description}</p>
                  <Link
                    to={`/journals/${journal.id}`}
                    className="inline-flex items-center text-[#C8922A] font-semibold hover:text-[#B07E25] transition-colors"
                  >
                    View Issues <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/journals"
              className="inline-flex items-center text-[#C8922A] font-semibold hover:text-[#B07E25]"
            >
              View All Journals <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C]">
                Featured Books
              </h2>
              <p className="text-gray-600 mt-2">Recent publications from leading scholars</p>
            </div>
            <Link
              to="/books"
              className="hidden sm:flex items-center text-[#C8922A] font-semibold hover:text-[#B07E25] transition-colors"
            >
              Shop All <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#C8922A] text-white text-sm font-bold rounded">
                    ${book.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 mb-1">by {book.author}</p>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A3A5C] mb-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">{book.description}</p>
                  <Link
                    to={`/books/${book.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#1A3A5C] text-white font-semibold rounded hover:bg-[#152C47] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/books"
              className="inline-flex items-center text-[#C8922A] font-semibold hover:text-[#B07E25]"
            >
              Shop All Books <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C] mb-6">
                About PRAGAMASAM GLOBAL
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2026, PRAGMASAM GLOBAL has grown to become one of the most respected 
                academic publishers in the field of religious studies and theology. Our commitment 
                to scholarly excellence and accessibility has made us a trusted partner for 
                institutions and researchers worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe that knowledge should be freely shared to advance human understanding. 
                That's why we offer both open access options and traditional subscription models 
                to serve diverse scholarly communities.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-[#1A3A5C] text-white font-semibold rounded hover:bg-[#152C47] transition-colors"
              >
                Learn More About Us <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F9F8F6] p-6 rounded-lg text-center">
                <Users className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C]">10+</p>
                <p className="text-gray-600 text-sm">Journals Published</p>
              </div>
              <div className="bg-[#F9F8F6] p-6 rounded-lg text-center">
                <BookOpen className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C]">500+</p>
                <p className="text-gray-600 text-sm">Articles Published</p>
              </div>
              <div className="bg-[#F9F8F6] p-6 rounded-lg text-center">
                <GraduationCap className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C]">50+</p>
                <p className="text-gray-600 text-sm">Partner Institutions</p>
              </div>
              <div className="bg-[#F9F8F6] p-6 rounded-lg text-center">
                <Download className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C]">10K+</p>
                <p className="text-gray-600 text-sm">Downloads Monthly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Corner Teaser */}
      <section className="py-16 bg-[#1A3A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-[#C8922A] mr-3" />
                <h2 className="font-['Playfair_Display'] text-3xl font-bold">
                  Educational Training Corner
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Enhance your scholarly skills with our comprehensive training programs. From 
                workshops on biblical languages to seminars on academic publishing, we provide 
                resources for scholars at every stage of their career.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-[#C8922A] mr-2" />
                  <span>Live webinars and interactive workshops</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-[#C8922A] mr-2" />
                  <span>Downloadable resources and guides</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-[#C8922A] mr-2" />
                  <span>Video tutorials from leading experts</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-[#C8922A] mr-2" />
                  <span>Certificate programs for professional development</span>
                </li>
              </ul>
              <Link
                to="/training"
                className="inline-flex items-center px-6 py-3 bg-[#C8922A] text-white font-semibold rounded hover:bg-[#B07E25] transition-colors"
              >
                Explore Training Resources <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-[#C8922A] text-sm font-semibold">March 20, 2024</p>
                  <p className="font-medium">Publishing in Academic Journals</p>
                  <p className="text-gray-300 text-sm">Online Webinar</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-[#C8922A] text-sm font-semibold">April 15, 2024</p>
                  <p className="font-medium">Advanced Biblical Greek</p>
                  <p className="text-gray-300 text-sm">Online Workshop</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-[#C8922A] text-sm font-semibold">June 10, 2024</p>
                  <p className="font-medium">Annual Theology Conference</p>
                  <p className="text-gray-300 text-sm">Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C]">
                Latest Announcements
              </h2>
              <p className="text-gray-600 mt-2">Stay updated with news, events, and calls for papers</p>
            </div>
            <Link
              to="/news"
              className="hidden sm:flex items-center text-[#C8922A] font-semibold hover:text-[#B07E25] transition-colors"
            >
              View All <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <article key={news.id} className="bg-[#F9F8F6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={news.featuredImage}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded ${
                    news.category === 'call-for-papers' ? 'bg-[#C8922A] text-white' :
                    news.category === 'events' ? 'bg-purple-600 text-white' :
                    news.category === 'new-publications' ? 'bg-green-600 text-white' :
                    'bg-[#1A3A5C] text-white'
                  }`}>
                    {news.category === 'call-for-papers' ? 'Call for Papers' :
                     news.category === 'events' ? 'Event' :
                     news.category === 'new-publications' ? 'New Publication' : 'News'}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(news.publishedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </p>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1A3A5C] mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{news.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/news"
              className="inline-flex items-center text-[#C8922A] font-semibold hover:text-[#B07E25]"
            >
              View All News <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
