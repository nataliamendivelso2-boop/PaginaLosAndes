import ph43 from '../assets/placeholder-4x3.svg';

const About = () => (
  <section id="nosotros" className="py-16 md:py-24 bg-sky-50">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sobre nosotros</h2>
        <p className="mt-4 text-gray-600">
          En Los Andes combinamos experiencia clinica, bioseguridad rigurosa y trato cercano. Explicamos cada paso del tratamiento y priorizamos tu comodidad.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
          <li>Evaluacion integral y planes de tratamiento claros.</li>
          <li>Materiales certificados y protocolos de esterilizacion.</li>
          <li>Opciones de financiacion y seguimiento posterior.</li>
        </ul>
      </div>
      <div className="order-1 md:order-2">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
          <img src={ph43} alt="Equipo del consultorio Los Andes" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
