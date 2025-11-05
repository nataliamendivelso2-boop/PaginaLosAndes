import ph43 from '../assets/Consultorio.png';

const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-white">
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-32 -left-28 h-64 w-64 rounded-full bg-cyan-100 opacity-70 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-blue-900/15 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />
    </div>
    <div className="max-w-7xl mx-auto grid items-center gap-8 px-6 py-10 md:grid-cols-2 md:py-14">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm ring-1 ring-cyan-100">
          Confianza y tecnología de punta
        </div>
        <div className="space-y-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-950"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Sonríe con el cuidado integral que merece tu familia
          </h1>
          <p className="text-lg text-slate-600">
            Con más de 12 años acompañando sonrisas en Soacha, creamos planes odontológicos personalizados que combinan calidez humana con
            equipos de última generación.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
          >
            Agenda tu cita
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm transition duration-300 hover:border-cyan-300 hover:text-cyan-600"
          >
            Conoce los servicios
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
          {[
            { label: 'Pacientes felices', value: '+1.200' },
            { label: 'Años de experiencia', value: '12' },
            { label: 'Tecnologías activas', value: '9' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white/80 p-4 text-center shadow-sm ring-1 ring-slate-100">
              <span className="block text-2xl font-semibold text-cyan-600">{item.value}</span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.25em] text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center md:justify-end md:self-center">
        <div className="absolute -top-10 -right-6 h-24 w-24 rounded-full bg-cyan-200/30 blur-2xl" aria-hidden />
        <div className="absolute bottom-0 left-6 h-32 w-32 rounded-full bg-blue-900/10 blur-3xl" aria-hidden />
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rotate-6 rounded-[2.75rem] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/40 to-white opacity-80 shadow-[0_35px_90px_-55px_rgba(6,182,212,0.6)]" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_45px_95px_-55px_rgba(15,23,42,0.65)]">
            <div className="aspect-[4/3]">
              <img src={ph43} alt="Consultorio odontológico" className="h-full w-full object-cover" />
            </div>
            <div className="px-5 pb-5 pt-4">
              <div className="rounded-2xl bg-white/95 px-4 py-3 text-sm shadow-lg ring-1 ring-slate-100 backdrop-blur">
                <p className="font-semibold text-slate-900">Metodología preventiva y estética</p>
                <p className="mt-1 text-xs text-slate-500">Revisiones periódicas, ortodoncia, implantes y estética dental en un solo lugar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
