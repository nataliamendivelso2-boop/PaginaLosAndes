import { useCallback } from 'react';
import logo from '../assets/logoblanco.png';

const HEADER_OFFSET = 120;
const SCROLL_DURATION = 1100;

const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2);

const animateScroll = (targetPosition, duration) => {
  if (typeof window === 'undefined') {
    return;
  }

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const step = (currentTime) => {
    if (startTime === null) {
      startTime = currentTime;
    }
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    window.scrollTo(0, startPosition + distance * easedProgress);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

const NavBar = () => {
  const handleSmoothScroll = useCallback((event, hash) => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    const target = document.querySelector(hash);
    if (!target) {
      return;
    }

    event.preventDefault();
    const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementTop - HEADER_OFFSET;
    animateScroll(targetPosition, SCROLL_DURATION);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-l from-slate-950 via-blue-900 to-cyan-500 shadow-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
        <a
          href="#inicio"
          onClick={(event) => handleSmoothScroll(event, '#inicio')}
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
            href="#galeria"
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
            href="#contacto"
            onClick={(event) => handleSmoothScroll(event, '#contacto')}
            className="transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.5)]"
          >
            Contacto
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
