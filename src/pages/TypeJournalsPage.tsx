import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { journals, disciplineLabels, publicationTypeLabels, accessTypeLabels } from '../data';
import { Discipline, PublicationType, AccessType } from '../types';

const publicationTypeDescriptions: Record<PublicationType, string> = {
  'peer-reviewed': 'Articles undergo rigorous double-blind peer review by experts in the field, ensuring scholarly excellence and academic integrity.',
  'conference-proceedings': 'Selected papers presented at academic conferences, providing access to cutting-edge research and scholarly discourse.',
  'book-reviews': 'Critical evaluations of recently published books in the field, offering scholarly perspectives on new contributions.',
  'occasional-papers': 'Working papers and research-in-progress, sharing preliminary findings for feedback and discussion.',
  'thematic-issue': 'Special issues focused on specific themes or topics, bringing together diverse perspectives and expertise.'
};

const TypeJournalsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const pubType = slug as PublicationType;
  const typeJournals = journals.filter(j => j.publicationType === pubType);
  const label = publicationTypeLabels[pubType] || 'Unknown Type';
  const description = publicationTypeDescriptions[pubType] || '';

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
            <span>By Publication Type</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{label}</span>
          </nav>
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">{label}</h1>
          <p className="text-gray-300 text-lg max-w-2xl">{description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Filter Info */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{typeJournals.length}</span> journals of type "{label}"
          </p>
        </div>

        {/* Journals Grid */}
        {typeJournals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typeJournals.map((journal) => (
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
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-white/90 text-xs font-medium text-[#1A3A5C] rounded">
                      {disciplineLabels[journal.discipline as Discipline]}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getBadgeColor(journal.accessType)}`}>
                      {accessTypeLabels[journal.accessType as AccessType]}
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
            <p className="text-gray-600">No journals found with this publication type.</p>
          </div>
        )}

        {/* Other Types */}
        <section className="mt-16">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6">
            Explore Other Publication Types
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(publicationTypeLabels)
              .filter(([key]) => key !== pubType)
              .map(([key, label]) => (
                <Link
                  key={key}
                  to={`/journals/type/${key}`}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-[#1A3A5C] hover:text-[#C8922A]">{label}</span>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TypeJournalsPage;
