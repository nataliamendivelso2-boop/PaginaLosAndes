import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogArticle from './pages/BlogArticle';
import { scrollToHash } from './utils/scroll';

const parseLocation = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', hash: '' };
  }

  const { pathname, hash } = window.location;

  if (pathname === '/blogs') {
    return { page: 'blogIndex', hash };
  }

  const articleMatch = pathname.match(/^\/blogs\/([^/]+)\/?$/);

  if (articleMatch) {
    return { page: 'blogArticle', slug: decodeURIComponent(articleMatch[1]), hash };
  }

  return { page: 'home', hash };
};

const App = () => {
  const [route, setRoute] = useState(parseLocation);
  const [scrollTarget, setScrollTarget] = useState(() => {
    const initialRoute = parseLocation();
    return { hash: initialRoute.hash ?? '', key: Date.now() };
  });

  const handlePopState = useCallback(() => {
    const locationState = parseLocation();
    setRoute(locationState);
    setScrollTarget({ hash: locationState.hash ?? '', key: Date.now() });
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

  const navigateTo = useCallback((page, options = {}) => {
    if (typeof window === 'undefined') {
      return;
    }

    const normalizedOptions =
      typeof options === 'string' ? { hash: options } : options ?? {};

    const { hash = '', slug } = normalizedOptions;

    const normalizedHash = hash && !hash.startsWith('#') ? `#${hash}` : hash;

    let path = '/';

    if (page === 'blogIndex') {
      path = '/blogs';
    } else if (page === 'blogArticle') {
      path = slug ? `/blogs/${encodeURIComponent(slug)}` : '/blogs';
    }

    const url = `${path}${normalizedHash}`;
    const currentUrl = `${window.location.pathname}${window.location.hash}`;

    if (currentUrl !== url) {
      window.history.pushState({}, '', url);
    }

    setRoute({ page, slug, hash: normalizedHash });
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
  }, [route.page, route.slug, scrollTarget]);

  const pageContent = useMemo(() => {
    if (route.page === 'blogIndex') {
      return <BlogIndex onNavigate={navigateTo} />;
    }

    if (route.page === 'blogArticle') {
      return <BlogArticle slug={route.slug} onNavigate={navigateTo} />;
    }
    return <Home onNavigate={navigateTo} />;
  }, [navigateTo, route.page, route.slug]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <NavBar currentPage={route.page} onNavigate={navigateTo} />
      <main className="flex-1">{pageContent}</main>
      <Footer />
    </div>
  );
};

export default App;
