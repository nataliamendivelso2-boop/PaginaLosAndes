const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/95 backdrop-blur">
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">
      <p className="text-center md:text-left">
        &copy; {new Date().getFullYear()} Consultorio Odontológico Los Andes - Cuidando sonrisas en Soacha
      </p>
      <a href="#inicio" className="inline-flex items-center gap-2 rounded-full border border-transparent bg-white px-4 py-2 font-semibold uppercase tracking-[0.3em] text-cyan-600 shadow-sm transition hover:border-cyan-200 hover:text-cyan-700">
        Volver arriba
      </a>
    </div>
  </footer>
);

export default Footer;
