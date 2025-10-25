import logo from '../assets/logosinfondo.png';

const NavBar = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#inicio" className="flex items-center gap-2 font-semibold text-sky-700 text-lg">
        <img src={logo} alt="Logo Consultorio Los Andes" className=" w-40" />
        
      </a>
      <nav className="hidden md:flex gap-6 text-sm text-gray-700">
        <a href="#servicios" className="hover:text-sky-700">
          Servicios
        </a>
        <a href="#galeria" className="hover:text-sky-700">
          Galeria
        </a>
        <a href="#nosotros" className="hover:text-sky-700">
          Nosotros
        </a>
        <a href="#contacto" className="hover:text-sky-700">
          Contacto
        </a>
      </nav>
      <a href="#contacto" className="ml-4 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
        Reservar cita
      </a>
    </div>
  </header>
);

export default NavBar;
