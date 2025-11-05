import { useState } from 'react';
import Modal from './Modal';

const SERVICES = [
  {
    key: 'Odontología general',
    title: 'Odontología general',
    summary: 'Limpiezas, restauraciones y control preventivo.',
    details: [
      'Profilaxis completa con ultrasonido y control de placa para mantener encías sanas.',
      'Resinas estéticas, sellantes y restauraciones mínimamente invasivas que devuelven función.',
      'Evaluación integral periódica con educación en hábitos de higiene personalizados.',
    ],
    images: [
      'https://source.unsplash.com/featured/?dental,cleaning',
      'https://source.unsplash.com/featured/?tooth,care',
    ],
  },
  {
    key: 'Cirugía oral',
    title: 'Cirugía oral',
    summary: 'Extracciones y procedimientos ambulatorios.',
    details: [
      'Extracción de terceros molares con planificación radiográfica y control del dolor.',
      'Cirugías menores ambulatorias con anestesia local y seguimiento postoperatorio cercano.',
      'Manejo de lesiones orales leves y biopsias cuando el diagnóstico lo requiere.',
    ],
    images: [
      'https://source.unsplash.com/featured/?oral,surgery',
      'https://source.unsplash.com/featured/?dentist,clinic',
    ],
  },
  {
    key: 'Periodoncia',
    title: 'Periodoncia',
    summary: 'Salud de encías: prevención y tratamiento.',
    details: [
      'Limpiezas profundas con raspado y alisado radicular para detener la progresión periodontal.',
      'Tratamiento integral de gingivitis y periodontitis con controles de cicatrización.',
      'Programas de mantenimiento periodontal y refuerzo de técnicas de higiene en casa.',
    ],
    images: [
      'https://source.unsplash.com/featured/?gum,care',
      'https://source.unsplash.com/featured/?dental,hygiene',
    ],
  },
  {
    key: 'Endodoncia',
    title: 'Endodoncia',
    summary: 'Tratamientos de conducto con enfoque conservador.',
    details: [
      'Alivio del dolor mediante tratamientos de conducto enfocados en preservar la pieza dental.',
      'Procedimientos uni y multirradiculares con instrumentación rotatoria y obturación tridimensional.',
      'Reendodoncia selecta con magnificación clínica cuando una terapia previa necesita correcciones.',
    ],
    images: [
      'https://source.unsplash.com/featured/?root,canal',
      'https://source.unsplash.com/featured/?endodontics',
    ],
  },
  {
    key: 'Ortodoncia',
    title: 'Ortodoncia',
    summary: 'Corrección de maloclusiones con brackets y alineadores.',
    details: [
      'Diagnóstico cefalométrico y planificación digital para alinear dientes y armonizar la mordida.',
      'Alternativas con brackets metálicos, estéticos y alineadores transparentes según cada caso.',
      'Contención personalizada y monitoreo postratamiento para asegurar la estabilidad de los resultados.',
    ],
    images: [
      'https://source.unsplash.com/featured/?braces,teeth',
      'https://source.unsplash.com/featured/?aligners,orthodontics',
    ],
  },
  {
    key: 'Implantología',
    title: 'Implantología',
    summary: 'Reposición de piezas con implantes y prótesis.',
    details: [
      'Evaluación ósea con tomografía y software de planificación para definir el posicionamiento ideal.',
      'Colocación de implantes con técnicas mínimamente invasivas y protocolos de carga controlada.',
      'Rehabilitación protésica sobre implantes con materiales biocompatibles y ajustes precisos.',
    ],
    images: [
      'https://source.unsplash.com/featured/?dental,implant',
      'https://source.unsplash.com/featured/?prosthesis,dental',
    ],
  },
  {
    key: 'Diseño de sonrisa',
    title: 'Diseño de sonrisa',
    summary: 'Estética dental: resinas, carillas y blanqueamiento.',
    details: [
      'Análisis estético digital y mock up para proyectar la nueva sonrisa antes del procedimiento.',
      'Carillas cerámicas o resinas estratificadas que armonizan forma, color y proporciones.',
      'Blanqueamiento guiado y mantenimiento periódico para prolongar el brillo y la uniformidad.',
    ],
    images: [
      'https://source.unsplash.com/featured/?smile,teeth',
      'https://source.unsplash.com/featured/?teeth,whitening',
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="servicios" className="relative isolate overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-cyan-50" />
      <div className="absolute top-12 right-0 h-48 w-48 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-start gap-5 text-left sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              Servicios integrales
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-950" style={{ fontFamily: '"Playfair Display", serif' }}>
              Especialidades para cuidar cada sonrisa
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Tratamientos preventivos, restaurativos y estéticos diseñados para generar resultados duraderos, con acompañamiento cercano en cada etapa.
            </p>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm ring-1 ring-slate-100">
            Selecciona una especialidad y descubre más detalles y beneficios.
          </div>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <button
              type="button"
              key={service.key}
              onClick={() => openModal(service)}
              className="group relative overflow-hidden rounded-3xl bg-white/90 p-[1px] text-left shadow-[0_25px_60px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-20px_rgba(14,165,233,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="absolute inset-x-0 -top-20 h-28 bg-gradient-to-b from-cyan-200/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative h-full rounded-3xl bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-base font-semibold text-cyan-700" aria-hidden>
                  {service.title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.summary}</p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
                  Ver detalles
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
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
            </button>
          ))}
        </div>
      </div>
      <Modal open={Boolean(selectedService)} onClose={closeModal} title={selectedService?.title}>
        {selectedService && (
          <div className="space-y-6">
            <ul className="grid gap-2 text-sm text-slate-700">
              {selectedService.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-cyan-500" aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {selectedService.images.map((src, index) => (
                <div key={src} className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
                  <img
                    src={src}
                    alt={`${selectedService.title} imagen ${index + 1}`}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;
