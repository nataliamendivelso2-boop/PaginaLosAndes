import { useEffect } from 'react';
import { Route, Routes, useLocation, Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogArticle from './pages/BlogArticle';
import { scrollToHash } from './utils/scroll';

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const { hash } = location;

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
  }, [location.hash, location.pathname]);

  return null;
};

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-white text-gray-900">
    <ScrollManager />
    <NavBar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center text-slate-600">
    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700">
      Página no encontrada
    </span>
    <h1
      className="mt-6 text-4xl font-semibold text-slate-950"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      No pudimos encontrar lo que buscas
    </h1>
    <p className="mt-3 max-w-2xl text-base text-slate-500">
      Regresa al inicio para seguir explorando servicios, testimonios y artículos diseñados para tu bienestar.
    </p>
  </div>
);

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<BlogIndex />} />
      <Route path="blogs/:slug" element={<BlogArticle />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
