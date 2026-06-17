import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Lock, Unlock } from 'lucide-react';
import { journals, disciplineLabels, publicationTypeLabels, accessTypeLabels } from '../data';
import { Discipline, PublicationType, AccessType } from '../types';

const AccessJournalsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const accessType = slug as AccessType;
  const accessJournals = journals.filter(j => j.accessType === accessType);
  const label = accessTypeLabels[accessType] || 'Unknown';
  const isOpenAccess = accessType === 'open-access';

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'peer-reviewed': return 'bg-purple-100 text-purple-800';
      case 'conference-proceedings': return 'bg-orange-100 text-orange-800';
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
            <span>By Access Type</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{label}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            {isOpenAccess ? (
              <Unlock className="w-10 h-10 text-green-400" />
            ) : (
              <Lock className="w-10 h-10 text-blue-400" />
            )}
            <h1 className="font-['Playfair_Display'] text-4xl font-bold">{label} Journals</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            {isOpenAccess
              ? 'All articles in open access journals are freely available to all readers. No subscription or payment required.'
              : 'Subscription journals require a subscription to access full articles. Individual and institutional subscriptions are available.'}
          </p>
        </div>
      </section>

      {/* Access Info Banner */}
      <div className="bg-[#F9F8F6] border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold text-[#1A3A5C] mb-1">
                {isOpenAccess ? 'Open Access Policy' : 'Subscription Information'}
              </h2>
              <p className="text-gray-600 text-sm">
                {isOpenAccess
                  ? 'All content is freely accessible. Create a free account to download PDFs and receive updates.'
                  : 'Subscribe for full access. Contact us for institutional site licenses.'}
              </p>
            </div>
            {isOpenAccess ? (
              <Link
                to="/register"
                className="px-6 py-3 bg-[#C8922A] text-white font-semibold rounded hover:bg-[#B07E25] transition-colors whitespace-nowrap"
              >
                Create Free Account
              </Link>
            ) : (
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#1A3A5C] text-white font-semibold rounded hover:bg-[#152C47] transition-colors whitespace-nowrap"
              >
                Inquire About Subscription
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Filter Info */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{accessJournals.length}</span> {label.toLowerCase()} journals
          </p>
        </div>

        {/* Journals Grid */}
        {accessJournals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessJournals.map((journal) => (
              <div
                key={journal.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={journal.coverImage}
                    alt={journal.title}
                    className="w-full h-full object-cover"
                  />
                  {isOpenAccess && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
                        <Unlock className="w-3 h-3 mr-1" />
                        Free
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-white/90 text-xs font-medium text-[#1A3A5C] rounded">
                      {disciplineLabels[journal.discipline as Discipline]}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getBadgeColor(journal.publicationType)}`}>
                      {publicationTypeLabels[journal.publicationType as PublicationType]}
                    </span>
                  </div>
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
        ) : (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600">No journals found with this access type.</p>
          </div>
        )}

        {/* Access Type Toggle */}
        <section className="mt-16">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6">
            Other Access Options
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/journals/access/open-access"
              className={`bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border-2 ${
                isOpenAccess ? 'border-[#C8922A]' : 'border-transparent'
              }`}
            >
              <Unlock className={`w-8 h-8 mx-auto mb-3 ${isOpenAccess ? 'text-[#C8922A]' : 'text-gray-400'}`} />
              <span className="font-medium text-[#1A3A5C]">Open Access</span>
              <p className="text-sm text-gray-500 mt-1">Free to all readers</p>
            </Link>
            <Link
              to="/journals/access/subscription-access"
              className={`bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border-2 ${
                !isOpenAccess ? 'border-[#C8922A]' : 'border-transparent'
              }`}
            >
              <Lock className={`w-8 h-8 mx-auto mb-3 ${!isOpenAccess ? 'text-[#C8922A]' : 'text-gray-400'}`} />
              <span className="font-medium text-[#1A3A5C]">Subscription Access</span>
              <p className="text-sm text-gray-500 mt-1">Requires subscription</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccessJournalsPage;
