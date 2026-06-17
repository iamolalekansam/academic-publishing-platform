import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A3A5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-[#C8922A]" />
              <span className="font-['Playfair_Display'] text-xl font-bold">PRAGMASAM GLOBAL</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Advancing knowledge through rigorous studying. We publish peer-reviewed journals, 
              academic books, and provide educational resources for scholars worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#C8922A] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-[#C8922A] transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" className="hover:text-[#C8922A] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="hover:text-[#C8922A] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon fill="white" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-6 border-b border-[#C8922A] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/journals" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Browse Journals</Link></li>
              <li><Link to="/books" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Bookshop</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Training Corner</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/submissions" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Submit Manuscript</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Latest News</Link></li>
            </ul>
          </div>

          {/* Journals */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-6 border-b border-[#C8922A] pb-2 inline-block">
              Browse by Discipline
            </h3>
            <ul className="space-y-3">
              <li><Link to="/journals/discipline/theology-religious-studies" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Theology & Religious Studies</Link></li>
              <li><Link to="/journals/discipline/biblical-studies" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Biblical Studies</Link></li>
              <li><Link to="/journals/discipline/philosophy-ethics" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Philosophy & Ethics</Link></li>
              <li><Link to="/journals/discipline/education-pedagogy" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Education & Pedagogy</Link></li>
              <li><Link to="/journals/discipline/social-sciences" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Social Sciences</Link></li>
              <li><Link to="/journals/discipline/humanities" className="text-gray-300 hover:text-[#C8922A] transition-colors text-sm">Humanities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-6 border-b border-[#C8922A] pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C8922A] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  [INSTITUTION ADDRESS]<br />
                  123 Academic Avenue<br />
                  Suite 500
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C8922A] flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C8922A] flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@pragmasamglobal.org</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter:</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l text-sm placeholder-gray-400 focus:outline-none focus:border-[#C8922A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C8922A] text-white rounded-r text-sm hover:bg-[#B07E25] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} PRAGMASAM. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
