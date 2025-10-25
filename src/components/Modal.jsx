import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, onClose, title, children }) => {
  useEffect(() => {
    if (!open || typeof document === 'undefined') {
      return undefined;
    }
    const { body } = document;
    const originalOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-10">
      <div
        className="fixed inset-0 z-0 cursor-pointer bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2.25rem] bg-white shadow-[0_45px_110px_-60px_rgba(15,23,42,0.75)] ring-1 ring-white/70"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" aria-hidden />
        <div className="flex items-start justify-between px-8 pt-8">
          <div>
            <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
              Especialidad
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950" style={{ fontFamily: '"Playfair Display", serif' }}>
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-cyan-200 hover:text-cyan-600"
            aria-label="Cerrar modal"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <div className="mt-6 max-h-[65vh] overflow-y-auto px-8 pb-10">
          {children}
        </div>
      </div>
    </div>
  , document.body);
};

export default Modal;
