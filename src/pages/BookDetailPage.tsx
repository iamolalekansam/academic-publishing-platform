import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Download, ChevronRight, Check, FileText, CreditCard } from 'lucide-react';
import { books } from '../data';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const BookDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, isInCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A3A5C] mb-4">Book Not Found</h1>
          <Link to="/books" className="text-[#C8922A] hover:text-[#B07E25]">
            Return to Bookshop
          </Link>
        </div>
      </div>
    );
  }

  const isAuthorOfBook = user?.id === book.authorId;

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setShowCheckoutModal(true);
  };

  const handleAddToCart = () => {
    addItem(book);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center text-sm text-gray-300">
            <Link to="/books" className="hover:text-white">Books</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{book.title}</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Book Cover */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
              
              {/* Price and Actions */}
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-[#1A3A5C]">${book.price}</span>
                  {isAuthorOfBook && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                      Free for Author
                    </span>
                  )}
                </div>
                
                <div className="space-y-3">
                  {isAuthorOfBook ? (
                    <button className="w-full py-3 bg-green-600 text-white font-semibold rounded flex items-center justify-center hover:bg-green-700 transition-colors">
                      <Download className="w-5 h-5 mr-2" />
                      Download Free
                    </button>
                  ) : isInCart(book.id) ? (
                    <button className="w-full py-3 bg-green-100 text-green-800 font-semibold rounded flex items-center justify-center cursor-default">
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart
                    </button>
                  ) : (
                    <button 
                      onClick={handleAddToCart}
                      className="w-full py-3 bg-[#1A3A5C] text-white font-semibold rounded flex items-center justify-center hover:bg-[#152C47] transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                  )}
                  
                  <button 
                    onClick={handleBuyNow}
                    className="w-full py-3 border-2 border-[#C8922A] text-[#C8922A] font-semibold rounded flex items-center justify-center hover:bg-[#C8922A] hover:text-white transition-colors"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Buy Now
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t text-sm text-gray-600">
                  <p className="flex justify-between mb-2">
                    <span>ISBN:</span>
                    <span className="font-medium">{book.isbn}</span>
                  </p>
                  <p className="flex justify-between mb-2">
                    <span>Pages:</span>
                    <span className="font-medium">{book.pages}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Published:</span>
                    <span className="font-medium">{book.publishedYear}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-[#C8922A] font-medium mb-2">by {book.author}</p>
              <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#1A3A5C] mb-4">
                {book.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {book.categories.map((cat, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#F9F8F6] text-gray-700 text-sm rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{book.description}</p>
            </div>

            {/* Author Bio */}
            <div className="bg-[#F9F8F6] rounded-lg p-6">
              <h2 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A3A5C] mb-4">
                About the Author
              </h2>
              <p className="text-gray-700">{book.authorBio}</p>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A3A5C] mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-[#C8922A]" />
                Table of Contents
              </h2>
              <div className="bg-white rounded-lg shadow-sm">
                <ul className="divide-y">
                  {book.tableOfContents.map((chapter, idx) => (
                    <li key={idx} className="px-6 py-4 flex items-center text-gray-700 hover:bg-gray-50">
                      <span className="w-8 h-8 rounded-full bg-[#F9F8F6] flex items-center justify-center text-sm font-medium text-[#1A3A5C] mr-4">
                        {idx + 1}
                      </span>
                      {chapter}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sample Chapter */}
            {book.sampleChapterUrl && (
              <div className="bg-[#1A3A5C] text-white rounded-lg p-6">
                <h2 className="font-semibold mb-2">Free Preview Available</h2>
                <p className="text-gray-300 mb-4">
                  Download a free sample chapter to get started before you buy.
                </p>
                <a
                  href={book.sampleChapterUrl}
                  className="inline-flex items-center px-4 py-2 bg-[#C8922A] text-white font-medium rounded hover:bg-[#B07E25] transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Sample Chapter
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A3A5C] mb-4">
              Complete Your Purchase
            </h2>
            <div className="mb-6">
              <div className="flex items-center gap-4 p-4 bg-[#F9F8F6] rounded-lg mb-4">
                <img src={book.coverImage} alt={book.title} className="w-16 h-20 object-cover rounded" />
                <div>
                  <p className="font-medium text-[#1A3A5C]">{book.title}</p>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <p className="font-bold text-[#C8922A]">${book.price}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-semibold text-gray-700">Payment Method</h3>
              <div className="space-y-2">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" value="paystack" defaultChecked className="mr-3" />
                  <span className="font-medium">Paystack (Nigerian Cards)</span>
                </label>
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" value="stripe" className="mr-3" />
                  <span className="font-medium">Stripe (International)</span>
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowCheckoutModal(false);
                  alert('This is a demo. In production, this would redirect to the payment gateway.');
                }}
                className="flex-1 py-3 bg-[#C8922A] text-white font-semibold rounded hover:bg-[#B07E25] transition-colors"
              >
                Pay ${book.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
