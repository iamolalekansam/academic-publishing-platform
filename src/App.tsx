import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import JournalsPage from './pages/JournalsPage';
import JournalDetailPage from './pages/JournalDetailPage';
import DisciplineJournalsPage from './pages/DisciplineJournalsPage';
import TypeJournalsPage from './pages/TypeJournalsPage';
import AccessJournalsPage from './pages/AccessJournalsPage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import TrainingPage from './pages/TrainingPage';
import AboutPage from './pages/AboutPage';
import SubmissionsPage from './pages/SubmissionsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/journals" element={<JournalsPage />} />
                <Route path="/journals/discipline/:slug" element={<DisciplineJournalsPage />} />
                <Route path="/journals/type/:slug" element={<TypeJournalsPage />} />
                <Route path="/journals/access/:slug" element={<AccessJournalsPage />} />
                <Route path="/journals/:id" element={<JournalDetailPage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/books/:id" element={<BookDetailPage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/submissions" element={<SubmissionsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
