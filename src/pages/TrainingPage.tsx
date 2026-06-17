import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Video, FileText, Download, Calendar, MapPin, Clock, ChevronRight, Play } from 'lucide-react';
import { trainingEvents, trainingResources } from '../data';
import { useAuth } from '../context/AuthContext';

const TrainingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<'events' | 'resources' | 'videos'>('events');
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const handleRegister = (eventId: string) => {
    if (!isAuthenticated) {
      alert('Please log in to register for this event.');
      return;
    }
    setRegisteredEvents([...registeredEvents, eventId]);
    alert('Registration successful! You will receive a confirmation email.');
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'webinar': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-purple-100 text-purple-800';
      case 'seminar': return 'bg-green-100 text-green-800';
      case 'course': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="w-10 h-10 text-[#C8922A]" />
            <h1 className="font-['Playfair_Display'] text-4xl font-bold">
              Educational Training Corner
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Enhance your scholarly skills with our comprehensive training programs, workshops, 
            and resources designed for researchers and academics at all career stages.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex border-b mb-8">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-4 font-medium border-b-2 transition-colors ${
              activeTab === 'events'
                ? 'border-[#C8922A] text-[#C8922A]'
                : 'border-transparent text-gray-600 hover:text-[#1A3A5C]'
            }`}
          >
            <Calendar className="w-5 h-5 inline mr-2" />
            Training Events
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-4 font-medium border-b-2 transition-colors ${
              activeTab === 'resources'
                ? 'border-[#C8922A] text-[#C8922A]'
                : 'border-transparent text-gray-600 hover:text-[#1A3A5C]'
            }`}
          >
            <FileText className="w-5 h-5 inline mr-2" />
            Resource Library
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-4 font-medium border-b-2 transition-colors ${
              activeTab === 'videos'
                ? 'border-[#C8922A] text-[#C8922A]'
                : 'border-transparent text-gray-600 hover:text-[#1A3A5C]'
            }`}
          >
            <Video className="w-5 h-5 inline mr-2" />
            Video Resources
          </button>
        </div>

        {/* Training Events */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {trainingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded ${getEventTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A3A5C] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </span>
                  </div>

                  {registeredEvents.includes(event.id) ? (
                    <div className="flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 font-medium rounded">
                      ✓ Registered
                    </div>
                  ) : (
                    <button
                      onClick={() => handleRegister(event.id)}
                      className="w-full py-2 bg-[#1A3A5C] text-white font-medium rounded hover:bg-[#152C47] transition-colors"
                    >
                      Register Now
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resource Library */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <p className="text-gray-600 mb-6">
              Download free resources to support your academic journey. Registration may be required for some materials.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingResources
                .filter(r => r.type !== 'video')
                .map((resource) => (
                  <div key={resource.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#F9F8F6] rounded-lg flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-[#C8922A]" />
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded uppercase">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#1A3A5C] mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    {isAuthenticated ? (
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center px-4 py-2 bg-[#C8922A] text-white text-sm font-medium rounded hover:bg-[#B07E25] transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    ) : (
                      <Link
                        to="/login"
                        className="inline-flex items-center px-4 py-2 border border-[#1A3A5C] text-[#1A3A5C] text-sm font-medium rounded hover:bg-[#1A3A5C] hover:text-white transition-colors"
                      >
                        Login to Download
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Video Resources */}
        {activeTab === 'videos' && (
          <div className="space-y-6">
            <p className="text-gray-600 mb-6">
              Watch recorded webinars and training sessions from our expert scholars.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {trainingResources
                .filter(r => r.type === 'video')
                .map((resource) => (
                  <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative aspect-video bg-gray-900">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                          <Play className="w-8 h-8 text-[#1A3A5C] ml-1" />
                        </div>
                      </div>
                      <img
                        src={`https://picsum.photos/seed/${resource.id}/640/360`}
                        alt={resource.title}
                        className="w-full h-full object-cover opacity-50"
                      />
                    </div>
                    <div className="p-6">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded uppercase mb-2 inline-block">
                        Video
                      </span>
                      <h3 className="font-semibold text-[#1A3A5C] mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Registration CTA */}
        <section className="mt-16 bg-[#1A3A5C] text-white rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
                Need Custom Training?
              </h2>
              <p className="text-gray-300 mb-6">
                We offer customized training programs for institutions and departments. 
                Contact us to discuss your specific needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#C8922A] text-white font-semibold rounded hover:bg-[#B07E25] transition-colors"
              >
                Request Custom Training <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="text-center">
              <GraduationCap className="w-24 h-24 text-white/20 mx-auto mb-4" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrainingPage;
