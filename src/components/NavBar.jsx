import { useCallback } from 'react';
import logo from '../assets/logoblanco.png';
import { scrollToHash } from '../utils/scroll';

const NavBar = ({ currentPage = 'home', onNavigate }) => {
  const handleSmoothScroll = useCallback(
    (event, hash) => {
      if (typeof window === 'undefined') {
        return;
      }

      event.preventDefault();

      if (currentPage !== 'home') {
        if (typeof onNavigate === 'function') {
          onNavigate('home', { hash });
        }
        return;
      }

      const scrolled = scrollToHash(hash);

      if (typeof onNavigate === 'function') {
        onNavigate('home', { hash });
      } else if (scrolled && window.location.hash !== hash) {
        window.history.replaceState({}, '', `${window.location.pathname}${hash}`);
      }
    },
    [currentPage, onNavigate],
  );

  const handleNavigateHome = useCallback(
    (event) => {
      event.preventDefault();
      if (typeof onNavigate === 'function') {
        onNavigate('home', { hash: '#inicio' });
      }
    },
    [onNavigate],
  );

  const handleNavigateBlog = useCallback(
    (event) => {
      event.preventDefault();
      if (typeof onNavigate === 'function') {
        onNavigate('blogIndex');
      }
    },
    [onNavigate],
  );

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-l from-slate-950 via-blue-900 to-cyan-500 shadow-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
        <a
          href="#inicio"
          onClick={handleNavigateHome}
          className="flex items-center gap-4 text-white transition-transform duration-300 hover:-translate-y-0.5"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          <img
            src={logo}
            alt="Logo Consultorio Los Andes"
            className="w-40 md:w-52 drop-shadow-[0_15px_25px_rgba(6,11,40,0.55)]"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          <a
            href="#servicios"
            onClick={(event) => handleSmoothScroll(event, '#servicios')}
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
          >
            Servicios
          </a>
          <a
            href="#galerias"
            onClick={(event) => handleSmoothScroll(event, '#galeria')}
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
          >
            Galería
          </a>
          <a
            href="#nosotros"
            onClick={(event) => handleSmoothScroll(event, '#nosotros')}
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
          >
            Nosotros
          </a>
          <a
            href="/blogs"
            onClick={handleNavigateBlog}
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
          >
            Blog
          </a>
          <a
            href="#contacto"
            onClick={(event) => handleSmoothScroll(event, '#contacto')}
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
          >
            Contacto
          </a>
          <a
            href="/blogs"
            onClick={handleNavigateBlog}
            className="ml-auto transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
          >
            Blog
          </a>
        </nav>
        <a
          href="#contacto"
          onClick={(event) => handleSmoothScroll(event, '#contacto')}
          className="ml-4 inline-flex items-center justify-center text-center rounded-full bg-white/95 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-0.5"
        >
          Reservar cita
        </a>
      </div>
    </header>
  );
};

export default NavBar;
