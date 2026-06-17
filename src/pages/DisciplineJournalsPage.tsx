import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { journals, disciplineLabels, publicationTypeLabels, accessTypeLabels } from '../data';
import { Discipline, PublicationType, AccessType } from '../types';

const disciplineDescriptions: Record<Discipline, string> = {
  'theology-religious-studies': 'Explore systematic theology, practical theology, and comparative religious studies across diverse traditions and historical contexts.',
  'christian-education': 'Research on pedagogical approaches, curriculum development, and faith formation in Christian educational settings.',
  'biblical-studies': 'Critical analysis of biblical texts, including historical, literary, archaeological, and theological perspectives.',
  'church-history-missions': 'Historical examination of Christian churches, missionary movements, and the development of global Christianity.',
  'philosophy-ethics': 'Philosophical inquiry into moral reasoning, ethical theories, and their applications in contemporary contexts.',
  'social-sciences': 'Social scientific study of religious phenomena, including sociological, anthropological, and psychological approaches.',
  'education-pedagogy': 'Educational research, policy analysis, and pedagogical innovations across various institutional contexts.',
  'humanities': 'Interdisciplinary exploration of human cultural expressions, literature, history, and artistic achievements.'
};

const DisciplineJournalsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const discipline = slug as Discipline;
  const disciplineJournals = journals.filter(j => j.discipline === discipline);
  const label = disciplineLabels[discipline] || 'Unknown Discipline';
  const description = disciplineDescriptions[discipline] || '';

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
            <span>By Discipline</span>
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
            Showing <span className="font-semibold">{disciplineJournals.length}</span> journals in {label}
          </p>
        </div>

        {/* Journals Grid */}
        {disciplineJournals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplineJournals.map((journal) => (
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
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getBadgeColor(journal.publicationType)}`}>
                      {publicationTypeLabels[journal.publicationType as PublicationType]}
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
            <p className="text-gray-600">No journals found in this discipline.</p>
          </div>
        )}

        {/* Other Disciplines */}
        <section className="mt-16">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6">
            Explore Other Disciplines
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(disciplineLabels)
              .filter(([key]) => key !== discipline)
              .map(([key, label]) => (
                <Link
                  key={key}
                  to={`/journals/discipline/${key}`}
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

export default DisciplineJournalsPage;
