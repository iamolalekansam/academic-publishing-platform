import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { books } from '../data';
import { useCart } from '../context/CartContext';

const BooksPage: React.FC = () => {
  const { addItem, isInCart } = useCart();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
            Academic Bookshop
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Discover our collection of scholarly books authored by leading experts in theology, 
            religious studies, philosophy, and education.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{books.length}</span> books
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#C8922A] text-white text-sm font-bold rounded">
                  ${book.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 mb-1">by {book.author}</p>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1A3A5C] mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">{book.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.categories.map((cat, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/books/${book.id}`}
                    className="flex-1 text-center px-4 py-2 border border-[#1A3A5C] text-[#1A3A5C] font-medium rounded hover:bg-[#1A3A5C] hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addItem(book)}
                    disabled={isInCart(book.id)}
                    className={`flex items-center justify-center px-4 py-2 font-medium rounded transition-colors ${
                      isInCart(book.id)
                        ? 'bg-green-100 text-green-800 cursor-default'
                        : 'bg-[#1A3A5C] text-white hover:bg-[#152C47]'
                    }`}
                  >
                    {isInCart(book.id) ? (
                      'Added'
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
