import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, institution: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const STORAGE_KEY = 'scholarspress_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Demo credentials
    if (email === 'admin@scholarspress.org' && password === 'admin123') {
      const adminUser: User = {
        id: 'admin1',
        name: 'Admin User',
        email: 'admin@scholarspress.org',
        institution: 'ScholarsPress',
        role: 'admin',
        createdAt: '2023-01-01'
      };
      setUser(adminUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(adminUser));
      setIsLoading(false);
      return true;
    }
    
    if (email === 'author@scholarspress.org' && password === 'author123') {
      const authorUser: User = {
        id: 'author1',
        name: 'Dr. Robert Smith',
        email: 'author@scholarspress.org',
        institution: 'Fuller Theological Seminary',
        role: 'author',
        createdAt: '2023-06-15'
      };
      setUser(authorUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(authorUser));
      setIsLoading(false);
      return true;
    }
    
    // For demo, allow any other email/password combination
    const newUser: User = {
      id: `user_${Date.now()}`,
      name: email.split('@')[0],
      email,
      institution: 'Independent Scholar',
      role: 'reader',
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const register = async (
    name: string, 
    email: string, 
    password: string, 
    institution: string, 
    role: UserRole
  ): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newUser: User = {
      id: `user_${Date.now()}`,
      name,
      email,
      institution,
      role,
      createdAt: new Date().toISOString()
    };
    
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
