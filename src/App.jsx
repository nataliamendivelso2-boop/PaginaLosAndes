import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { scrollToHash } from './utils/scroll';

const getInitialPage = () => {
  if (typeof window === 'undefined') {
    return 'home';
  }
  return window.location.pathname === '/blogs' ? 'blog' : 'home';
};

const getInitialHash = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.location.hash;
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [scrollTarget, setScrollTarget] = useState(() => ({ hash: getInitialHash(), key: Date.now() }));

  const handlePopState = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const path = window.location.pathname === '/blogs' ? 'blog' : 'home';
    setCurrentPage(path);
    setScrollTarget({ hash: window.location.hash, key: Date.now() });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [handlePopState]);

  const navigateTo = useCallback((page, hash = '') => {
    if (typeof window === 'undefined') {
      return;
    }

    const normalizedHash = hash && !hash.startsWith('#') ? `#${hash}` : hash;
    const path = page === 'blog' ? '/blogs' : '/';
    const url = `${path}${normalizedHash}`;
    const currentUrl = `${window.location.pathname}${window.location.hash}`;

    if (currentUrl !== url) {
      window.history.pushState({}, '', url);
    }

    setCurrentPage(page);
    setScrollTarget({ hash: normalizedHash, key: Date.now() });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const { hash } = scrollTarget;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let attempts = 0;

    const scrollWithRetry = () => {
      const success = scrollToHash(hash);
      if (!success && attempts < 25) {
        attempts += 1;
        window.setTimeout(scrollWithRetry, 80);
      }
    };

    scrollWithRetry();
  }, [currentPage, scrollTarget]);

  const pageContent = useMemo(() => {
    if (currentPage === 'blog') {
      return <Blog />;
    }
    return <Home onNavigate={navigateTo} />;
  }, [currentPage, navigateTo]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <NavBar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1">{pageContent}</main>
      <Footer />
    </div>
  );
};

export default App;
