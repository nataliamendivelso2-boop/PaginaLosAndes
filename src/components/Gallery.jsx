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
  <section id="galeria" className="relative isolate overflow-hidden py-20">
    <div className="absolute inset-0 -z-10 bg-white" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-100/30 via-transparent to-transparent" />
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col gap-4 text-center">
        <span className="self-center rounded-full bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
          Resultados reales
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-slate-950"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Casos destacados que inspiran confianza
        </h2>
        <p className="mx-auto max-w-3xl text-base text-slate-600">
          Cada tratamiento refleja nuestra filosofia: estetica natural, funcionalidad perfecta y bienestar a largo plazo.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {ITEMS.map((item) => (
          <article
            key={item.title}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_20px_60px_-35px_rgba(14,165,233,0.45)] transition hover:-translate-y-1.5 hover:shadow-[0_35px_90px_-45px_rgba(15,23,42,0.55)]"
          >
            <div className="relative overflow-hidden px-5 pt-5">
              <div className="absolute inset-x-5 top-0 h-28 rounded-3xl bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent blur-xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-4 text-left">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.description}</p>
              </div>
              <span className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Tratamiento referencial
                <svg
                  className="ml-2 h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
