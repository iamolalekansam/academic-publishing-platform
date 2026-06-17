import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Download, BookOpen, FileText, ShoppingBag, Clock, CheckCircle, User, Book } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { items } = useCart();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A3A5C]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Mock data for dashboard
  const mockDownloads = [
    { id: '1', title: 'Journal of Theological Studies - Vol. 15 Issue 1', date: '2024-02-15', type: 'journal' },
    { id: '2', title: 'Foundations of Biblical Exegesis', date: '2024-02-10', type: 'book' },
  ];

  const mockManuscripts = [
    { id: '1', title: 'The Trinity in Contemporary Thought', status: 'reviewing', submittedDate: '2024-02-01' },
  ];

  const mockOrders = [
    { id: 'ORD-001', title: 'Christian Ethics in the Digital Age', date: '2024-01-28', price: 39.99, status: 'delivered' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* Header */}
      <section className="bg-[#1A3A5C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#C8922A] rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-['Playfair_Display'] text-2xl font-bold">Welcome, {user?.name}</h1>
              <p className="text-gray-300 capitalize">{user?.role} • {user?.institution}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Download className="w-8 h-8 text-[#C8922A]" />
              <span className="text-2xl font-bold text-[#1A3A5C]">{mockDownloads.length}</span>
            </div>
            <p className="text-gray-600 text-sm">Downloads</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-[#C8922A]" />
              <span className="text-2xl font-bold text-[#1A3A5C]">{items.length}</span>
            </div>
            <p className="text-gray-600 text-sm">Items in Cart</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-[#C8922A]" />
              <span className="text-2xl font-bold text-[#1A3A5C]">{mockManuscripts.length}</span>
            </div>
            <p className="text-gray-600 text-sm">Manuscripts</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <ShoppingBag className="w-8 h-8 text-[#C8922A]" />
              <span className="text-2xl font-bold text-[#1A3A5C]">{mockOrders.length}</span>
            </div>
            <p className="text-gray-600 text-sm">Orders</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Downloads */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1A3A5C] flex items-center">
                  <Download className="w-5 h-5 mr-2 text-[#C8922A]" />
                  Recent Downloads
                </h2>
              </div>
              <div className="divide-y">
                {mockDownloads.map(item => (
                  <div key={item.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Book className="w-8 h-8 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-[#1A3A5C]">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-[#1A3A5C] text-white text-sm rounded hover:bg-[#152C47] transition-colors">
                      Download Again
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Manuscripts (for Authors) */}
            {(user?.role === 'author' || user?.role === 'admin') && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1A3A5C] flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-[#C8922A]" />
                    My Manuscripts
                  </h2>
                </div>
                <div className="divide-y">
                  {mockManuscripts.map(ms => (
                    <div key={ms.id} className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-[#1A3A5C]">{ms.title}</p>
                          <p className="text-sm text-gray-500">Submitted: {ms.submittedDate}</p>
                        </div>
                        <span className="flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded">
                          <Clock className="w-4 h-4 mr-1" />
                          Under Review
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50">
                  <Link
                    to="/submissions"
                    className="text-[#C8922A] font-medium hover:text-[#B07E25]"
                  >
                    + Submit New Manuscript
                  </Link>
                </div>
              </div>
            )}

            {/* Order History */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1A3A5C] flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2 text-[#C8922A]" />
                  Order History
                </h2>
              </div>
              <div className="divide-y">
                {mockOrders.map(order => (
                  <div key={order.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#F9F8F6] rounded flex items-center justify-center mr-3">
                        <Book className="w-6 h-6 text-[#C8922A]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1A3A5C]">{order.title}</p>
                        <p className="text-sm text-gray-500">Order #{order.id} • {order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#1A3A5C]">${order.price}</p>
                      <span className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-[#1A3A5C] mb-4">Profile Summary</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Full Name</dt>
                  <dd className="font-medium text-[#1A3A5C]">{user?.name}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Email</dt>
                  <dd className="font-medium text-[#1A3A5C]">{user?.email}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Institution</dt>
                  <dd className="font-medium text-[#1A3A5C]">{user?.institution}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Member Since</dt>
                  <dd className="font-medium text-[#1A3A5C]">
                    {new Date(user?.createdAt || '').toLocaleDateString()}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-[#1A3A5C] mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  to="/journals"
                  className="block px-4 py-2 bg-[#F9F8F6] text-[#1A3A5C] rounded hover:bg-[#1A3A5C] hover:text-white transition-colors"
                >
                  Browse Journals
                </Link>
                <Link
                  to="/books"
                  className="block px-4 py-2 bg-[#F9F8F6] text-[#1A3A5C] rounded hover:bg-[#1A3A5C] hover:text-white transition-colors"
                >
                  Bookshop
                </Link>
                <Link
                  to="/training"
                  className="block px-4 py-2 bg-[#F9F8F6] text-[#1A3A5C] rounded hover:bg-[#1A3A5C] hover:text-white transition-colors"
                >
                  Training Resources
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 bg-[#F9F8F6] text-[#1A3A5C] rounded hover:bg-[#1A3A5C] hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Cart Preview */}
            {items.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-[#1A3A5C] mb-4">Your Cart ({items.length})</h3>
                <div className="space-y-3 mb-4">
                  {items.map(item => (
                    <div key={item.book.id} className="flex items-center gap-3">
                      <img
                        src={item.book.coverImage}
                        alt={item.book.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#1A3A5C] truncate">{item.book.title}</p>
                        <p className="text-sm text-[#C8922A]">${item.book.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/books"
                  className="block w-full py-2 text-center bg-[#C8922A] text-white font-medium rounded hover:bg-[#B07E25] transition-colors"
                >
                  View Cart & Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
