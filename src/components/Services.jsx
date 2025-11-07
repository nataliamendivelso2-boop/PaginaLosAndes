import { useCallback, useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import odontologiaGeneral from '../assets/odontologia_general.png';
import placeholderImg from '../assets/placeholder-4x3.svg';

// Carga todas las imágenes de assets (png/jpg/webp)
const IMAGE_URLS = import.meta.glob('../assets/*.{png,jpg,jpeg,JPG,webp,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const normalize = (text) =>
  (text || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const unique = (arr) => [...new Set(arr.filter(Boolean))];

const candidatesFromTitle = (title) => {
  const norm = normalize(title);
  const parts = norm.split(/\s+/).filter(Boolean);
  const noStop = parts.filter((p) => !['de', 'del', 'la', 'las', 'los', 'el', 'y'].includes(p));
  const cands = [
    noStop.join('_'),
    parts.join('_'),
    noStop.join(''),
    parts.join(''),
    noStop[0],
  ];
  if (norm.includes('diseno')) cands.push('diseno');
  if (norm.includes('odontologia')) cands.push('odontologia_general', 'odontologia');
  if (norm.includes('cirugia')) cands.push('cirugia_oral', 'cirugia');
  return unique(cands);
};

const getImageForTitle = (title) => {
  const cands = candidatesFromTitle(title);
  const entries = Object.entries(IMAGE_URLS);
  for (const base of cands) {
    for (const ext of ['.png', '.jpg', '.jpeg', '.JPG', '.webp', '.WEBP']) {
      const match = entries.find(([p]) => p.endsWith(`/${base}${ext}`));
      if (match) return match[1];
    }
  }
  return placeholderImg;
};

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
    image: getImageForTitle('Odontolog general'),
  },
  {
    key: 'Cirugía oral',
    title: 'Cirugía oral',
    summary: 'Extracciones y procedimientos ambulatorios.',
    details: [
      'Extracción de cordales',
      'Cirugía de dientes retenidos o fracturados',
      'Regularización ósea: preparación del hueso para rehabilitación o prótesis',
    ],
    image: 'https://source.unsplash.com/featured/?oral,surgery',
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
    image: 'https://source.unsplash.com/featured/?gum,care',
  },
  {
    key: 'Endodoncia',
    title: 'Endodoncia',
    summary: 'Tratamientos de conducto con enfoque conservador.',
    details: [
      'Tratamiento de conductos (Endodoncia)',
      'Re tratamiento de Endodoncia: solución cuando una endodoncia anterior no funcionó.',
      'Urgencias por dolor dental: diagnóstico inmediato y alivio del dolor.',
      'Cirugía apical (apicectomía): elimina infecciones persistentes y salva el diente sin extracción.',
    ],
    image: getImageForTitle('Endodoncia'),
  },
  {
    key: 'Ortodoncia',
    title: 'Ortodoncia',
    summary: 'Corrección de maloclusiones con brackets y alineadores.',
    details: [
      'Corrección de malposiciones dentales: mejora estética y función.',
      'Ortodoncia MBT / Brackets / Alineadores: tratamientos personalizados.',
      'Ortopedia maxilar (ortodoncia ósea): guía el crecimiento de huesos en niños y adolescentes.',
      'Estabilización de mordida: garantiza resultados funcionales y duraderos.',
    ],
    image: 'https://source.unsplash.com/featured/?braces,teeth',
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
    image: 'https://source.unsplash.com/featured/?dental,implant',
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
    image: 'https://source.unsplash.com/featured/?smile,teeth',
  },
];

const getSlidesPerView = () => {
  if (typeof window === 'undefined') {
    return 1;
  }
  if (window.innerWidth >= 1024) {
    return 3;
  }
  if (window.innerWidth >= 640) {
    return 2;
  }
  return 1;
};

const AUTOPLAY_INTERVAL = 6000;
const IDLE_DELAY = 4000;

const Services = ({ highlightRequest }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(() => getSlidesPerView());
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);
  const maxIndex = Math.max(0, SERVICES.length - slidesPerView);
  const dragStateRef = useRef({
    isPointerDown: false,
    startX: 0,
    scrollLeft: 0,
    pointerId: null,
  });
  const lastInteractionRef = useRef(Date.now());

  const markInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
  }, []);

  const scrollToCard = useCallback((index, behavior = 'smooth') => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.children[index];
    if (target && target.scrollIntoView) {
      target.scrollIntoView({
        behavior,
        block: 'nearest',
        inline: 'start',
      });
    }
  }, []);

  const handleNavigate = (direction) => {
    markInteraction();
    const delta = direction === 'next' ? slidesPerView : -slidesPerView;
    const target = Math.min(Math.max(0, visibleIndex + delta), maxIndex);
    if (target === visibleIndex) {
      return;
    }
    setVisibleIndex(target);
    scrollToCard(target);
  };

  const openModal = (serviceOrKey) => {
    if (!serviceOrKey) {
      return;
    }

    const service =
      typeof serviceOrKey === 'string'
        ? SERVICES.find((entry) => entry.key.toLowerCase() === serviceOrKey.toLowerCase())
        : serviceOrKey;

    if (service) {
      setSelectedService(service);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType !== 'mouse') return;
    const track = trackRef.current;
    if (!track) return;
    if (event.button !== 0) return;
    markInteraction();
    dragStateRef.current = {
      isPointerDown: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      pointerId: event.pointerId,
    };
    setIsDragging(true);
    track.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse') return;
    const track = trackRef.current;
    if (!track || !dragStateRef.current.isPointerDown) return;
    event.preventDefault();
    track.scrollLeft = dragStateRef.current.scrollLeft - (event.clientX - dragStateRef.current.startX);
  };

  const releasePointer = (event) => {
    const track = trackRef.current;
    if (!track || !dragStateRef.current.isPointerDown) return;
    dragStateRef.current.isPointerDown = false;
    track.releasePointerCapture?.(dragStateRef.current.pointerId);
    dragStateRef.current.pointerId = null;
    setIsDragging(false);
  };

  const handleWheel = (event) => {
    const track = trackRef.current;
    if (!track) return;
    const isMostlyVertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    if (!isMostlyVertical) return;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    if ((event.deltaY < 0 && track.scrollLeft <= 0) || (event.deltaY > 0 && track.scrollLeft >= maxScrollLeft)) {
      return;
    }
    track.scrollLeft += event.deltaY;
    event.preventDefault();
    markInteraction();
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = null;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        const { scrollLeft } = track;
        const children = track.children;
        let candidate = 0;
        for (let i = 0; i < children.length; i += 1) {
          if (children[i].offsetLeft <= scrollLeft + 1) {
            candidate = i;
          } else {
            break;
          }
        }
        setVisibleIndex(candidate);
        markInteraction();
      });
    };

    handleScroll();
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [markInteraction]);

  useEffect(() => {
    if (visibleIndex > maxIndex) {
      setVisibleIndex(maxIndex);
      scrollToCard(maxIndex, 'auto');
    }
  }, [maxIndex, scrollToCard, visibleIndex]);

  const canGoPrev = visibleIndex > 0;
  const canGoNext = visibleIndex < maxIndex;

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() - lastInteractionRef.current < IDLE_DELAY) {
        return;
      }
      setVisibleIndex((prev) => {
        const next = prev + slidesPerView;
        const wrapped = next > maxIndex ? 0 : next;
        scrollToCard(wrapped);
        return wrapped;
      });
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(id);
  }, [slidesPerView, maxIndex, scrollToCard]);

  useEffect(() => {
    if (!highlightRequest?.key) {
      return;
    }

    const service = SERVICES.find(
      (entry) => entry.key.toLowerCase() === highlightRequest.key.toLowerCase(),
    );

    if (service) {
      setSelectedService(service);
    }
  }, [highlightRequest]);

  return (
    <section id="servicios" className="relative isolate overflow-hidden scroll-mt-8 py-12 md:py-16">
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
        <div className="mt-5  sm:mt-2">
          <div className="flex justify-end gap-3 pr-2">
            <button
              type="button"
              onClick={() => handleNavigate('prev')}
              disabled={!canGoPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/70 text-slate-500 transition hover:border-cyan-300 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40 backdrop-blur"
              aria-label="Ver servicios anteriores"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('next')}
              disabled={!canGoNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/70 text-slate-500 transition hover:border-cyan-300 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40 backdrop-blur"
              aria-label="Ver más servicios"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="relative mt-6 rounded-[34px] bg-transparent px-2 pt-6 sm:px-5 lg:px-6">
            <span className="pointer-events-none absolute inset-y-4 left-0 w-16 bg-gradient-to-r from-white/0 via-white/60 to-white/0" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-y-4 right-6 w-16 bg-gradient-to-l from-white/0 via-white/60 to-white/0" aria-hidden="true" />
            <div
              ref={trackRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={releasePointer}
              onPointerLeave={releasePointer}
              onPointerCancel={releasePointer}
              onWheel={handleWheel}
              className={`flex gap-8 overflow-x-auto no-scrollbar px-1 pt-4 scroll-smooth snap-x snap-mandatory sm:px-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
              {SERVICES.map((service) => (
                <button
                  type="button"
                  key={service.key}
                  onClick={() => openModal(service)}
                  className="group relative min-w-[49%] rounded-3xl bg-white/90 p-[1px] text-left shadow-[0_25px_60px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-20px_rgba(14,165,233,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:min-w-[48%] lg:min-w-[32%] lg:min-h-[250px] md:mb-20 mb-16 snap-start"
                >
                  <span className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-cyan-200/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col rounded-3xl bg-white px-5 py-2 md:p-10">
                    <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-base font-semibold text-cyan-700" aria-hidden>
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
        </div>
      </div>
     <Modal open={Boolean(selectedService)} onClose={closeModal} title={selectedService?.title}>
  {selectedService && (
    <div className="space-y-6">
      <ul className="grid gap-2 text-sm text-slate-700">
        {selectedService.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <span
              className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-cyan-500"
              aria-hidden
            />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Imagen principal: el contenedor se ajusta al tamaño de la imagen */}
      <div className="flex justify-center">
        <img
          src={getImageForTitle(selectedService.title)}
          alt={selectedService.title}
          className="rounded-2xl border border-white/70 bg-white shadow-md h-80 md:h-90 "
          loading="lazy"
        />
      </div>
    </div>
  )}
</Modal>

    </section>
  );
};

export default Services;
