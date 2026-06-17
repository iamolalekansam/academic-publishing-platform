import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { 
  BookOpen, Menu, X, ChevronDown, User, LogOut, ShoppingCart, 
  LayoutDashboard, ChevronRight, Search 
} from 'lucide-react';

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [journalsOpen, setJournalsOpen] = useState(false);
  const [disciplinesOpen, setDisciplinesOpen] = useState(false);
  const [pubTypesOpen, setPubTypesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const disciplines = [
    { slug: 'theology-religious-studies', label: 'Theology & Religious Studies' },
    { slug: 'christian-education', label: 'Christian Education' },
    { slug: 'biblical-studies', label: 'Biblical Studies' },
    { slug: 'church-history-missions', label: 'Church History & Missions' },
    { slug: 'philosophy-ethics', label: 'Philosophy & Ethics' },
    { slug: 'social-sciences', label: 'Social Sciences' },
    { slug: 'education-pedagogy', label: 'Education & Pedagogy' },
    { slug: 'humanities', label: 'Humanities' },
  ];

  const pubTypes = [
    { slug: 'peer-reviewed', label: 'Peer-Reviewed Journal' },
    { slug: 'conference-proceedings', label: 'Conference Proceedings' },
    { slug: 'book-reviews', label: 'Book Reviews Journal' },
    { slug: 'occasional-papers', label: 'Occasional Papers' },
    { slug: 'thematic-issue', label: 'Thematic / Special Issue' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#1A3A5C] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <BookOpen className="w-10 h-10 text-[#C8922A]" />
            <div>
              <span className="font-['Playfair_Display'] text-xl font-bold tracking-wide">
              PRAGMASAM
              </span>
              <span className="block text-xs text-gray-300 -mt-1">GLOBAL PUBLISHING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/') ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              Home
            </Link>

            {/* Journals Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setJournalsOpen(true)}
              onMouseLeave={() => setJournalsOpen(false)}
            >
              <button
                className={`flex items-center px-4 py-2 rounded transition-colors ${
                  location.pathname.startsWith('/journals') ? 'bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                Journals <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {journalsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white text-[#2E2E2E] rounded-lg shadow-xl border border-gray-100 py-2">
                  <Link
                    to="/journals"
                    className="block px-4 py-2 hover:bg-[#F9F8F6] transition-colors"
                  >
                    All Journals
                  </Link>
                  <div className="relative">
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-[#F9F8F6] transition-colors flex items-center justify-between"
                      onMouseEnter={() => setDisciplinesOpen(true)}
                    >
                      By Discipline <ChevronRight className="w-4 h-4" />
                    </button>
                    {disciplinesOpen && (
                      <div className="absolute left-full top-0 ml-1 w-56 bg-white text-[#2E2E2E] rounded-lg shadow-xl border border-gray-100 py-2">
                        {disciplines.map(d => (
                          <Link
                            key={d.slug}
                            to={`/journals/discipline/${d.slug}`}
                            className="block px-4 py-2 hover:bg-[#F9F8F6] transition-colors text-sm"
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-[#F9F8F6] transition-colors flex items-center justify-between"
                      onMouseEnter={() => setPubTypesOpen(true)}
                    >
                      By Publication Type <ChevronRight className="w-4 h-4" />
                    </button>
                    {pubTypesOpen && (
                      <div className="absolute left-full top-0 ml-1 w-56 bg-white text-[#2E2E2E] rounded-lg shadow-xl border border-gray-100 py-2">
                        {pubTypes.map(p => (
                          <Link
                            key={p.slug}
                            to={`/journals/type/${p.slug}`}
                            className="block px-4 py-2 hover:bg-[#F9F8F6] transition-colors text-sm"
                          >
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="border-t my-1 pt-1">
                    <Link
                      to="/journals/access/open-access"
                      className="block px-4 py-2 hover:bg-[#F9F8F6] transition-colors"
                    >
                      Open Access
                    </Link>
                    <Link
                      to="/journals/access/subscription-access"
                      className="block px-4 py-2 hover:bg-[#F9F8F6] transition-colors"
                    >
                      Subscription Access
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/books"
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/books') ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              Books
            </Link>

            <Link
              to="/training"
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/training') ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              Training Corner
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/about') ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              About
            </Link>

            <Link
              to="/submissions"
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/submissions') ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              Submissions
            </Link>

            <Link
              to="/news"
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/news') ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              News
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded transition-colors ${
                isActive('/contact') ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/books"
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C8922A] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-white/10 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm">{user?.name.split(' ')[0]}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white text-[#2E2E2E] rounded-lg shadow-xl border border-gray-100 py-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center px-4 py-2 hover:bg-[#F9F8F6] transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => { logout(); setUserMenuOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-[#F9F8F6] transition-colors flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm border border-white/30 rounded hover:bg-white/10 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm bg-[#C8922A] text-white rounded hover:bg-[#B07E25] transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A3A5C] border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Journals Menu */}
            <div className="space-y-1">
              <Link
                to="/journals"
                className="block px-4 py-2 rounded hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Journals
              </Link>
              <div className="pl-4 space-y-1">
                <p className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wider">By Discipline</p>
                {disciplines.map(d => (
                  <Link
                    key={d.slug}
                    to={`/journals/discipline/${d.slug}`}
                    className="block px-4 py-2 text-sm rounded hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
              <div className="pl-4 space-y-1">
                <p className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wider">By Type</p>
                {pubTypes.map(p => (
                  <Link
                    key={p.slug}
                    to={`/journals/type/${p.slug}`}
                    className="block px-4 py-2 text-sm rounded hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
              <div className="pl-4 space-y-1">
                <p className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wider">By Access</p>
                <Link
                  to="/journals/access/open-access"
                  className="block px-4 py-2 text-sm rounded hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Open Access
                </Link>
                <Link
                  to="/journals/access/subscription-access"
                  className="block px-4 py-2 text-sm rounded hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Subscription Access
                </Link>
              </div>
            </div>

            <Link
              to="/books"
              className="block px-4 py-2 rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              to="/training"
              className="block px-4 py-2 rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Training Corner
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/submissions"
              className="block px-4 py-2 rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submissions
            </Link>
            <Link
              to="/news"
              className="block px-4 py-2 rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="border-t border-white/10 pt-4 mt-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 rounded hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { logout(); setMobileMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 rounded hover:bg-white/10"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-center border border-white/30 rounded hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-center bg-[#C8922A] text-white rounded hover:bg-[#B07E25]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
