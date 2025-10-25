import { useState } from 'react';
import Modal from './Modal';

const SERVICES = [
  {
    key: 'Odontologia general',
    title: 'Odontologia general',
    summary: 'Limpiezas, restauraciones y control preventivo.',
    details: [
      'Profilaxis y control de placa',
      'Resinas esteticas y sellantes',
      'Evaluacion integral y educacion en higiene',
    ],
    images: [
      'https://source.unsplash.com/featured/?dental,cleaning',
      'https://source.unsplash.com/featured/?tooth,care',
    ],
  },
  {
    key: 'Cirugia oral',
    title: 'Cirugia oral',
    summary: 'Extracciones y procedimientos ambulatorios.',
    details: [
      'Extraccion de terceros molares',
      'Cirugias menores con anestesia local',
      'Manejo de lesiones orales leves',
    ],
    images: [
      'https://source.unsplash.com/featured/?oral,surgery',
      'https://source.unsplash.com/featured/?dentist,clinic',
    ],
  },
  {
    key: 'Periodoncia',
    title: 'Periodoncia',
    summary: 'Salud de encias: prevencion y tratamiento.',
    details: [
      'Limpiezas profundas (raspado y alisado radicular)',
      'Tratamiento de gingivitis y periodontitis',
      'Mantenimiento periodontal y control',
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
      'Alivio de dolor y preservacion de piezas',
      'Tratamientos uni y multirradiculares',
      'Reendodoncia selecta segun evaluacion',
    ],
    images: [
      'https://source.unsplash.com/featured/?root,canal',
      'https://source.unsplash.com/featured/?endodontics',
    ],
  },
  {
    key: 'Ortodoncia',
    title: 'Ortodoncia',
    summary: 'Correccion de maloclusiones con brackets y alineadores.',
    details: [
      'Diagnostico cefalometrico y plan de tratamiento',
      'Brackets metalicos o esteticos y alineadores',
      'Contencion y seguimiento post tratamiento',
    ],
    images: [
      'https://source.unsplash.com/featured/?braces,teeth',
      'https://source.unsplash.com/featured/?aligners,orthodontics',
    ],
  },
  {
    key: 'Implantologia',
    title: 'Implantologia',
    summary: 'Reposicion de piezas con implantes y protesis.',
    details: [
      'Evaluacion osea y planificacion',
      'Colocacion de implantes segun caso',
      'Rehabilitacion protesica sobre implantes',
    ],
    images: [
      'https://source.unsplash.com/featured/?dental,implant',
      'https://source.unsplash.com/featured/?prosthesis,dental',
    ],
  },
  {
    key: 'Diseno de sonrisa',
    title: 'Diseno de sonrisa',
    summary: 'Estetica dental: resinas, carillas y blanqueamiento.',
    details: [
      'Analisis estetico y mock up',
      'Carillas y resinas directas',
      'Blanqueamiento guiado y mantenimiento',
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
    <section id="servicios" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios</h2>
        <p className="mt-3 text-gray-600">Tratamientos integrales con enfoque humano y resultados confiables.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <button
              type="button"
              key={service.key}
              onClick={() => openModal(service)}
              className="group text-left rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-sky-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 font-semibold" aria-hidden>
                {service.title.slice(0, 1)}
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{service.summary}</p>
              <span className="mt-3 inline-flex items-center text-sky-700 text-sm">
                Ver detalles
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
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
            </button>
          ))}
        </div>
      </div>
      <Modal open={Boolean(selectedService)} onClose={closeModal} title={selectedService?.title}>
        {selectedService && (
          <div className="space-y-5">
            <ul className="list-disc pl-5 text-gray-700">
              {selectedService.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              {selectedService.images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`${selectedService.title} imagen ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg border"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Services;
