import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X, ChevronRight } from 'lucide-react';
import { journals, disciplineLabels, publicationTypeLabels, accessTypeLabels, searchJournals } from '../data';
import { Discipline, PublicationType, AccessType } from '../types';

const JournalsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [selectedPubType, setSelectedPubType] = useState<PublicationType | null>(null);
  const [selectedAccessType, setSelectedAccessType] = useState<AccessType | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredJournals = useMemo(() => {
    let result = searchQuery ? searchJournals(searchQuery) : journals;
    
    if (selectedDiscipline) {
      result = result.filter(j => j.discipline === selectedDiscipline);
    }
    if (selectedPubType) {
      result = result.filter(j => j.publicationType === selectedPubType);
    }
    if (selectedAccessType) {
      result = result.filter(j => j.accessType === selectedAccessType);
    }
    return result;
  }, [searchQuery, selectedDiscipline, selectedPubType, selectedAccessType]);

  const clearFilters = () => {
    setSelectedDiscipline(null);
    setSelectedPubType(null);
    setSelectedAccessType(null);
    setSearchQuery('');
  };

  const hasActiveFilters = selectedDiscipline || selectedPubType || selectedAccessType || searchQuery;

  const disciplines = Object.entries(disciplineLabels) as [Discipline, string][];
  const pubTypes = Object.entries(publicationTypeLabels) as [PublicationType, string][];
  const accessTypes = Object.entries(accessTypeLabels) as [AccessType, string][];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'open-access': return 'bg-green-100 text-green-800';
      case 'subscription-access': return 'bg-blue-100 text-blue-800';
      case 'peer-reviewed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
            Browse Journals
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our collection of peer-reviewed journals across theology, religious studies, 
            philosophy, and related disciplines.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search journals by title, keyword, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A] focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          <div className={`mt-4 pt-4 border-t ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="grid md:grid-cols-3 gap-6">
              {/* By Discipline */}
              <div>
                <h3 className="font-semibold text-[#1A3A5C] mb-3 text-sm uppercase tracking-wide">
                  By Discipline
                </h3>
                <div className="space-y-2">
                  {disciplines.map(([slug, label]) => (
                    <label key={slug} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="discipline"
                        checked={selectedDiscipline === slug}
                        onChange={() => setSelectedDiscipline(selectedDiscipline === slug ? null : slug)}
                        className="w-4 h-4 text-[#C8922A] border-gray-300 focus:ring-[#C8922A]"
                      />
                      <span className="ml-2 text-sm text-gray-700 hover:text-[#1A3A5C]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* By Publication Type */}
              <div>
                <h3 className="font-semibold text-[#1A3A5C] mb-3 text-sm uppercase tracking-wide">
                  By Publication Type
                </h3>
                <div className="space-y-2">
                  {pubTypes.map(([slug, label]) => (
                    <label key={slug} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pubtype"
                        checked={selectedPubType === slug}
                        onChange={() => setSelectedPubType(selectedPubType === slug ? null : slug)}
                        className="w-4 h-4 text-[#C8922A] border-gray-300 focus:ring-[#C8922A]"
                      />
                      <span className="ml-2 text-sm text-gray-700 hover:text-[#1A3A5C]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* By Access Type */}
              <div>
                <h3 className="font-semibold text-[#1A3A5C] mb-3 text-sm uppercase tracking-wide">
                  By Access Type
                </h3>
                <div className="space-y-2">
                  {accessTypes.map(([slug, label]) => (
                    <label key={slug} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="accesstype"
                        checked={selectedAccessType === slug}
                        onChange={() => setSelectedAccessType(selectedAccessType === slug ? null : slug)}
                        className="w-4 h-4 text-[#C8922A] border-gray-300 focus:ring-[#C8922A]"
                      />
                      <span className="ml-2 text-sm text-gray-700 hover:text-[#1A3A5C]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-sm text-[#C8922A] hover:text-[#B07E25] flex items-center"
              >
                <X className="w-4 h-4 mr-1" />
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJournals.length}</span> journals
          </p>
        </div>

        {/* Journals Grid */}
        {filteredJournals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJournals.map((journal) => (
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
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-white/90 text-xs font-medium text-[#1A3A5C] rounded">
                      {disciplineLabels[journal.discipline as Discipline]}
                    </span>
                  </div>
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
            <p className="text-gray-600 mb-4">No journals found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="text-[#C8922A] hover:text-[#B07E25] font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalsPage;
