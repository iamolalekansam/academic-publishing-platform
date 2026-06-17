import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Download, FileText, Calendar, User, BookOpen } from 'lucide-react';
import { journals, issues, articles, disciplineLabels, publicationTypeLabels, accessTypeLabels } from '../data';
import { useAuth } from '../context/AuthContext';
import { Discipline, PublicationType, AccessType } from '../types';

const JournalDetailPage: React.FC = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  
  const journal = journals.find(j => j.id === id);
  
  if (!journal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A3A5C] mb-4">Journal Not Found</h1>
          <Link to="/journals" className="text-[#C8922A] hover:text-[#B07E25]">
            Return to Journals
          </Link>
        </div>
      </div>
    );
  }

  const journalIssues = issues.filter(i => i.journalId === journal.id);
  const journalArticles = articles.filter(a => a.journalId === journal.id);

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'open-access': return 'bg-green-100 text-green-800';
      case 'subscription-access': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center text-sm text-gray-300 mb-4">
            <Link to="/journals" className="hover:text-white">Journals</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{journal.title}</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={journal.coverImage}
              alt={journal.title}
              className="w-48 h-64 object-cover rounded-lg shadow-xl"
            />
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-white/20 text-sm rounded">
                  {disciplineLabels[journal.discipline as Discipline]}
                </span>
                <span className={`px-3 py-1 text-sm rounded ${getBadgeColor(journal.publicationType)}`}>
                  {publicationTypeLabels[journal.publicationType as PublicationType]}
                </span>
                <span className={`px-3 py-1 text-sm rounded ${getBadgeColor(journal.accessType)}`}>
                  {accessTypeLabels[journal.accessType as AccessType]}
                </span>
              </div>
              <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-2">
                {journal.title}
              </h1>
              <p className="text-gray-300 mb-4">ISSN: {journal.issn}</p>
              <p className="text-gray-300 text-sm mb-4">
                Editor-in-Chief: {journal.editorName} • Established: {journal.establishedYear}
              </p>
              <p className="text-gray-200 leading-relaxed max-w-2xl">{journal.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Issues */}
            <section>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-[#C8922A]" />
                Available Issues
              </h2>
              {journalIssues.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {journalIssues.map((issue) => {
                    const issueArticles = articles.filter(a => a.issueId === issue.id);
                    return (
                      <div key={issue.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="flex">
                          <img
                            src={issue.coverImage}
                            alt={`Volume ${issue.volume}, Issue ${issue.issueNumber}`}
                            className="w-32 h-40 object-cover"
                          />
                          <div className="p-4">
                            <p className="text-[#C8922A] font-semibold text-sm">
                              {issue.season || ''} {issue.year}
                            </p>
                            <h3 className="font-semibold text-[#1A3A5C]">
                              Volume {issue.volume}, Issue {issue.issueNumber}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {issueArticles.length} articles
                            </p>
                            <button className="mt-3 text-sm text-[#C8922A] hover:text-[#B07E25] font-medium">
                              View Table of Contents →
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-600 bg-white rounded-lg p-6 text-center">
                  No issues available yet.
                </p>
              )}
            </section>

            {/* Recent Articles */}
            <section>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-[#C8922A]" />
                Recent Articles
              </h2>
              {journalArticles.length > 0 ? (
                <div className="space-y-4">
                  {journalArticles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-sm p-6">
                      <h3 className="font-semibold text-[#1A3A5C] text-lg mb-2">
                        {article.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.authors.map(a => a.name).join(', ')}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishedDate).toLocaleDateString()}
                        </span>
                        <span>pp. {article.pageRange}</span>
                        {article.doi && <span>DOI: {article.doi}</span>}
                      </div>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{article.abstract}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {article.keywords.slice(0, 3).map((keyword, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {keyword}
                            </span>
                          ))}
                        </div>
                        {isAuthenticated ? (
                          <a
                            href={article.pdfUrl}
                            className="flex items-center px-4 py-2 bg-[#1A3A5C] text-white text-sm font-medium rounded hover:bg-[#152C47] transition-colors"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </a>
                        ) : (
                          <Link
                            to="/login"
                            className="flex items-center px-4 py-2 bg-[#C8922A] text-white text-sm font-medium rounded hover:bg-[#B07E25] transition-colors"
                          >
                            Login to Download
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 bg-white rounded-lg p-6 text-center">
                  No articles available yet.
                </p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Journal Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-[#1A3A5C] mb-4">Journal Information</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">ISSN</dt>
                  <dd className="font-medium">{journal.issn}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Established</dt>
                  <dd className="font-medium">{journal.establishedYear}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Editor</dt>
                  <dd className="font-medium">{journal.editorName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Frequency</dt>
                  <dd className="font-medium">Quarterly</dd>
                </div>
              </dl>
            </div>

            {/* Keywords */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-[#1A3A5C] mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {journal.keywords.map((keyword, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#F9F8F6] text-gray-700 text-sm rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            {journal.accessType === 'subscription-access' && (
              <div className="bg-[#1A3A5C] text-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold mb-3">Subscribe to This Journal</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get full access to all articles and issues.
                </p>
                <button className="w-full py-2 bg-[#C8922A] text-white font-semibold rounded hover:bg-[#B07E25] transition-colors">
                  View Subscription Options
                </button>
              </div>
            )}

            {/* Submit */}
            <div className="bg-[#F9F8F6] rounded-lg p-6">
              <h3 className="font-semibold text-[#1A3A5C] mb-3">Submit Your Research</h3>
              <p className="text-gray-600 text-sm mb-4">
                We welcome manuscript submissions from researchers worldwide.
              </p>
              <Link
                to="/submissions"
                className="block w-full py-2 text-center bg-[#1A3A5C] text-white font-semibold rounded hover:bg-[#152C47] transition-colors"
              >
                Submission Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetailPage;
