import React from 'react';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import { teamMembers } from '../data';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
            About PRAGMASAM GLOBAL
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Advancing scholarly knowledge through rigorous academic publishing since 1985.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F9F8F6] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#C8922A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[#C8922A]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1A3A5C] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To advance scholarly knowledge and foster intellectual discourse by providing 
                open and accessible platforms for academic publishing in theology, religious 
                studies, and related disciplines.
              </p>
            </div>

            <div className="bg-[#F9F8F6] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#C8922A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-[#C8922A]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1A3A5C] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading academic publisher recognized globally for excellence in 
                scholarship, innovation in publishing, and commitment to making knowledge 
                accessible to all.
              </p>
            </div>

            <div className="bg-[#F9F8F6] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#C8922A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#C8922A]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1A3A5C] mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Excellence in scholarship, integrity in publishing, accessibility to knowledge, 
                innovation in our methods, and collaboration with the global academic community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C] mb-8 text-center">
            Our History
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Founded in 2026, PRAGMASAM GLOBAL began as a small initiative by a group of theologians 
              committed to making academic research accessible beyond the walls of elite institutions. 
              What started with a single peer-reviewed journal has grown into a comprehensive academic 
              publishing platform serving scholars worldwide.
            </p>
            <p className="mb-6">
              Over the past four decades, we have published thousands of articles and dozens of books, 
              supporting the research careers of academics at every stage. Our commitment to both open 
              access and sustainable subscription models reflects our belief that knowledge should be 
              accessible, while publishing operations must remain financially viable.
            </p>
            <p>
              Today, PRAGMASAM GLOBAL partners with over 50 institutions across 30 countries, maintaining 
              the highest standards of peer review while embracing digital innovations that expand the 
              reach and impact of scholarly work.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Board */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1A3A5C] mb-4 text-center">
            Editorial Board
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our distinguished editorial board comprises leading scholars from institutions around the world.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-[#F9F8F6] rounded-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1A3A5C] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#C8922A] text-sm font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#1A3A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-8 text-center">
            Partner Institutions
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            We are proud to work with leading universities and research institutions worldwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-6 h-24 flex items-center justify-center">
                <span className="text-gray-400 text-sm">[Partner Logo]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
              <p className="font-['Playfair_Display'] text-4xl font-bold text-[#1A3A5C]">10+</p>
              <p className="text-gray-600">Peer-Reviewed Journals</p>
            </div>
            <div>
              <Award className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
              <p className="font-['Playfair_Display'] text-4xl font-bold text-[#1A3A5C]">50+</p>
              <p className="text-gray-600">Partner Institutions</p>
            </div>
            <div>
              <Globe className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
              <p className="font-['Playfair_Display'] text-4xl font-bold text-[#1A3A5C]">30+</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <Users className="w-10 h-10 text-[#C8922A] mx-auto mb-3" />
              <p className="font-['Playfair_Display'] text-4xl font-bold text-[#1A3A5C]">10K+</p>
              <p className="text-gray-600">Registered Scholars</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
