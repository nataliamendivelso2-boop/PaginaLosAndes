import ph43 from '../assets/placeholder-4x3.svg';

const Hero = () => (
  <section id="inicio" className="bg-gradient-to-b from-sky-50 to-white">
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Sonrie con confianza en Soacha
        </h1>
        <p className="mt-4 text-gray-600">
          Mas de 12 anios de experiencia en consulta particular. Atencion calida, tecnologia moderna y tratamientos personalizados para toda la familia.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#contacto" className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-white hover:bg-sky-700">
            Solicitar cita
          </a>
          <a href="#servicios" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50">
            Ver servicios
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
          <img src={ph43} alt="Consultorio odontologico" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
