import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Seo from '../components/Seo';
import { OG_IMAGE_URL, SITE_URL } from '../utils/seo';

const CTAButton = () => (
  <div className="mt-8 flex justify-center">
    <a
      href="#contacto"
      className="inline-flex items-center gap-3 rounded-full bg-cyan-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-cyan-600"
    >
      Agenda y contacto
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

const SuccessStoriesPage = () => {
  const title = 'Casos de éxito odontológicos en Soacha | Consultorio Los Andes';
  const description =
    'Conoce resultados reales de ortodoncia, implantología, diseño de sonrisa y más tratamientos realizados por el Consultorio Odontológico Los Andes en Soacha.';
  const canonical = `${SITE_URL}/casos-de-exito`;

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          'og:title': title,
          'og:description': description,
          'og:url': canonical,
          'og:image': OG_IMAGE_URL,
          'og:type': 'website',
        }}
        twitter={{
          'twitter:card': 'summary_large_image',
          'twitter:title': title,
          'twitter:description': description,
          'twitter:image': OG_IMAGE_URL,
        }}
      />
      <section className="bg-gradient-to-br from-white via-cyan-50 to-blue-100 py-16 text-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
            Casos de éxito
          </span>
          <h1
            className="mt-6 text-4xl font-semibold md:text-5xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Resultados que respaldan nuestra experiencia clínica
          </h1>
          <CTAButton />
        </div>
      </section>
      <Gallery />
      <Contact />
    </>
  );
};

export default SuccessStoriesPage;
