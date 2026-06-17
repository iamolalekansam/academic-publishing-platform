import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Have questions? We'd love to hear from you. Reach out to our team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#C8922A]/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#C8922A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3A5C] mb-2">Office Address</h3>
                  <p className="text-gray-600 text-sm">
                    [INSTITUTION NAME]<br />
                    123 Academic Avenue<br />
                    Suite 500<br />
                    City, State 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#C8922A]/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-[#C8922A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3A5C] mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    Main: +1 (555) 123-4567<br />
                    Toll-free: 1-800-SCHOLAR<br />
                    Fax: +1 (555) 123-4568
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#C8922A]/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-[#C8922A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3A5C] mb-2">Email</h3>
                  <p className="text-gray-600 text-sm">
                    General: info@pragmasamglobal.org<br />
                    Submissions: submit@pragmasamglobal.org<br />
                    Partnerships: partners@pragmasamglobal.org<br />
                    Support: support@pragmasamglobal.org
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#C8922A]/20 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-[#C8922A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A3A5C] mb-2">Office Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 9:00 AM - 5:00 PM (EST)<br />
                    Saturday - Sunday: Closed<br />
                    Holiday closures announced in newsletter
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-4">
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will respond to your inquiry within 
                    2-3 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#1A3A5C] text-white font-semibold rounded hover:bg-[#152C47] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="submissions">Manuscript Submissions</option>
                      <option value="subscriptions">Subscriptions & Access</option>
                      <option value="partnerships">Partnership Opportunities</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-[#C8922A] text-white font-semibold rounded-lg hover:bg-[#B07E25] transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 mt-8 flex items-center justify-center">
              <p className="text-gray-500">[Google Maps Embed - Update coordinates in admin]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
