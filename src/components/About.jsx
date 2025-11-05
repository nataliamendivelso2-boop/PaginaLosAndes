import ph43 from '../assets/placeholder-4x3.svg';

const About = () => (
  <section id="nosotros" className="relative isolate overflow-hidden py-20">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-slate-50" />
    <div className="absolute left-12 top-12 h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl" />
    <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-blue-900/10 blur-3xl" />
    <div className="max-w-6xl mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
      <div className="order-2 space-y-6 md:order-1">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600 shadow-sm ring-1 ring-cyan-100">
          Sobre nosotros
        </span>
        <h2
          className="text-3xl md:text-4xl font-semibold text-slate-950"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Atención humana respaldada por protocolos rigurosos
        </h2>
        <p className="text-base text-slate-600">
          Nuestra misión es lograr tratamientos odontológicos previsibles, indoloros y adaptados a cada paciente. Respondemos todas tus
          preguntas con transparencia para que te sientas acompañado de principio a fin.
        </p>
        <ul className="grid gap-3 text-sm text-slate-700">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500" aria-hidden />
            Evaluación integral y planes personalizados explicados paso a paso.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500" aria-hidden />
            Bioseguridad certificada, esterilización monitoreada y materiales de alta tecnología.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500" aria-hidden />
            Acompañamiento en seguros y financiación para facilitar cada tratamiento.
          </li>
        </ul>
        <div className="rounded-3xl bg-white px-5 py-4 text-sm text-slate-600 shadow-inner ring-1 ring-slate-100">
          <p>"Creemos que una sonrisa sana es el resultado de empatía, prevención y detalle clínico."</p>
          <p className="mt-2 font-semibold text-cyan-600">- Equipo Los Andes</p>
        </div>
      </div>
      <div className="order-1 flex justify-center md:order-2">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-cyan-100 blur-xl" />
          <div className="absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-blue-900/15 blur-xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-[0_45px_95px_-55px_rgba(15,23,42,0.65)]">
            <img src={ph43} alt="Equipo del consultorio Los Andes" className="h-full w-full object-cover" />
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-600 shadow">
              Equipo clínico
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
