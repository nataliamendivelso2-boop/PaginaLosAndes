import ph169 from '../assets/placeholder-16x9.svg';

const ITEMS = [
  {
    title: 'Diseno de sonrisa',
    description: 'Caso estetico (antes y despues).',
    src: ph169,
  },
  {
    title: 'Ortodoncia',
    description: 'Alineacion y correccion de mordida.',
    src: ph169,
  },
  {
    title: 'Implantologia',
    description: 'Reposicion de pieza dental.',
    src: ph169,
  },
];

const Gallery = () => (
  <section id="galeria" className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Galeria de casos</h2>
      <p className="mt-3 text-gray-600">Imagenes referenciales para ilustrar tratamientos y resultados.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img src={item.src} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
