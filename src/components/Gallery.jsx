import { useState } from 'react';
import Modal from './Modal';
import blanqueamientoImg from '../assets/blanqueamiento.JPG';
import disenoImg from '../assets/diseno.JPG';
import implantologiaImg from '../assets/implantologia.JPG';
import ortodonciaImg from '../assets/ortodoncia.JPG';
import protesisImg from '../assets/protesis.JPG';

const ITEMS = [
  {
    title: 'Ortodoncia integral',
    tag: 'Ortodoncia',
    description: 'Corrección personalizada de mordida con brackets estéticos, metálicos y alineadores.',
    modalDescription:
      'Controlamos cada fase del movimiento dental con estudios radiográficos y seguimiento digital para lograr una mordida funcional y armónica en el menor tiempo posible.',
    src: ortodonciaImg,
    highlights: [
      'Plan de tratamiento basado en cefalometría y escaneo intraoral.',
      'Opciones de brackets metálicos, estéticos y alineadores transparentes según la necesidad clínica.',
      'Programa de retención y controles postratamiento para mantener los resultados.',
    ],
  },
  {
    title: 'Implantología guiada',
    tag: 'Implantología',
    description: 'Reposición segura de piezas ausentes mediante planificación digital y prótesis biocompatibles.',
    modalDescription:
      'Evaluamos la anatomía ósea y diseñamos guías quirúrgicas personalizadas que permiten colocar implantes con mínima invasión y alta predictibilidad.',
    src: implantologiaImg,
    highlights: [
      'Estudios tomográficos y mockups para visualizar el resultado final antes del procedimiento.',
      'Colocación asistida que reduce tiempos de cicatrización y molestias postoperatorias.',
      'Restauraciones provisionales y definitivas elaboradas en laboratorio aliado para un ajuste preciso.',
    ],
  },
  {
    title: 'Prótesis removible estética',
    tag: 'Prótesis',
    description: 'Soluciones ligeras y resistentes que devuelven funcionalidad masticatoria y armonía facial.',
    modalDescription:
      'Diseñamos prótesis parciales y totales con materiales flexibles que se adaptan a la anatomía del paciente, cuidando la comodidad, fonética y estabilidad muscular.',
    src: protesisImg,
    highlights: [
      'Pruebas estéticas con ajustes articulados antes de entregar la prótesis definitiva.',
      'Indicaciones claras de higiene y mantenimiento para prolongar la durabilidad del dispositivo.',
      'Combinación con implantes cuando se requiere refuerzo adicional para mayor estabilidad.',
    ],
  },
  {
    title: 'Diseño de sonrisa digital',
    tag: 'Estética',
    description: 'Planeación estética integral con mockups, carillas, resinas y armonización gingival.',
    modalDescription:
      'A partir de fotografías clínicas y escaneos 3D generamos un mockup que permite visualizar el resultado final antes de iniciar el tratamiento estético.',
    src: disenoImg,
    highlights: [
      'Carillas cerámicas o de resina seleccionadas según desgaste y expectativas del paciente.',
      'Recontorneo gingival y blanqueamiento complementario para uniformar tonos y proporciones.',
      'Seguimiento fotográfico que guía los ajustes durante cada fase del diseño.',
    ],
  },
  {
    title: 'Blanqueamiento profesional',
    tag: 'Cosmética',
    description: 'Tratamiento controlado que aclara varios tonos sin sensibilidad posterior.',
    modalDescription:
      'Combinamos sesiones en consultorio con kits supervisados para casa, protegiendo el esmalte y manteniendo la hidratación dentaria.',
    src: blanqueamientoImg,
    highlights: [
      'Aplicación de barrera gingival y geles de última generación para cuidar los tejidos.',
      'Evaluación previa de manchas y hábitos para elegir la técnica ideal de aclaramiento.',
      'Refuerzos remineralizantes con flúor y calcio para prolongar la duración del resultado.',
    ],
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openItem = (item) => {
    setSelectedItem(item);
  };

  const closeItem = () => {
    setSelectedItem(null);
  };

  return (
    <section id="galeria" className="relative isolate overflow-hidden scroll-mt-8 py-20">
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
            Cada tratamiento refleja nuestra filosofía: estética natural, funcionalidad perfecta y bienestar a largo plazo.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ITEMS.map((item) => (
            <button
              type="button"
              key={item.title}
              onClick={() => openItem(item)}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white text-left shadow-[0_20px_60px_-35px_rgba(14,165,233,0.45)] transition hover:-translate-y-1.5 hover:shadow-[0_35px_90px_-45px_rgba(15,23,42,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={`Ver detalles de ${item.title}`}
            >
              <div className="relative overflow-hidden px-5 pt-5">
                <div className="absolute inset-x-5 top-0 h-28 rounded-3xl bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent blur-xl" aria-hidden />
                <div className="relative overflow-hidden rounded-[1.75rem]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                </div>
                <span className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                  {item.tag}
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
            </button>
          ))}
        </div>
      </div>
      <Modal open={Boolean(selectedItem)} onClose={closeItem} title={selectedItem?.title}>
        {selectedItem && (
          <div className="space-y-6 text-slate-600">
            <p className="text-base">{selectedItem.modalDescription}</p>
            <ul className="grid gap-3 text-sm text-slate-700">
              {selectedItem.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Gallery;
