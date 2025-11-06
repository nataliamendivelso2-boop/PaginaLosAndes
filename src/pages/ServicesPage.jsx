import Contact from '../components/Contact';
import Services from '../components/Services';
import Seo from '../components/Seo';
import { OG_IMAGE_URL, SITE_URL } from '../utils/seo';

const ServicesPage = () => {
  const title = 'Servicios odontológicos integrales en Soacha | Consultorio Los Andes';
  const description =
    'Explora nuestros tratamientos en odontología general, ortodoncia, implantología y estética dental con acompañamiento especializado en Soacha.';
  const canonical = `${SITE_URL}/servicios`;

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
      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-500 py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Servicios
          </span>
          <h1
            className="mt-6 text-4xl font-semibold md:text-5xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Tratamientos integrales para cada etapa de tu sonrisa
          </h1>
          <p className="mt-4 text-base text-white/80">
            Selecciona la especialidad que necesitas y conoce cómo abordamos cada diagnóstico con tecnología,
            prevención y acompañamiento cercano.
          </p>
        </div>
      </section>
      <Services />
      <Contact />
    </>
  );
};

export default ServicesPage;
