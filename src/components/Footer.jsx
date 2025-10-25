const Footer = () => (
  <footer className="border-t border-gray-200 bg-white">
    <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
      <p>
        &copy; {new Date().getFullYear()} Consultorio Odontologico Los Andes - Soacha
      </p>
      <a href="#inicio" className="text-sky-700 hover:underline">
        Volver arriba
      </a>
    </div>
  </footer>
);

export default Footer;
