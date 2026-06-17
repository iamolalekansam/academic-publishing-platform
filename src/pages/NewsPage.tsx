import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User, Share2 } from 'lucide-react';
import { newsPosts } from '../data';
import { NewsPost } from '../types';

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { key: null, label: 'All' },
    { key: 'news', label: 'News' },
    { key: 'events', label: 'Events' },
    { key: 'call-for-papers', label: 'Call for Papers' },
    { key: 'new-publications', label: 'New Publications' }
  ];

  const filteredPosts = selectedCategory
    ? newsPosts.filter(p => p.category === selectedCategory)
    : newsPosts;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'call-for-papers': return 'bg-[#C8922A] text-white';
      case 'events': return 'bg-purple-600 text-white';
      case 'new-publications': return 'bg-green-600 text-white';
      default: return 'bg-[#1A3A5C] text-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'call-for-papers': return 'Call for Papers';
      case 'new-publications': return 'New Publication';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
            News & Announcements
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Stay updated with the latest news, events, calls for papers, and new publications.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.key || 'all'}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === cat.key
                  ? 'bg-[#C8922A] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded ${getCategoryColor(post.category)}`}>
                  {getCategoryLabel(post.category)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <h2 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A3A5C] mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <button className="text-[#C8922A] font-medium hover:text-[#B07E25] flex items-center">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-[#C8922A] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
