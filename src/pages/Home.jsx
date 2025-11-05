import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import BlogSection from '../components/BlogSection';
import Seo from '../components/Seo';
import { BUSINESS_ID, OG_IMAGE_URL, SITE_URL, WEBSITE_ID } from '../utils/seo';

const HOME_CANONICAL = `${SITE_URL}/`;

const HOME_STRUCTURED_DATA = [
  {
    id: 'ld-home-webpage',
    data: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${HOME_CANONICAL}#webpage`,
      url: HOME_CANONICAL,
      name: 'Consultorio Odontológico Los Andes | Soacha',
      inLanguage: 'es-CO',
      isPartOf: {
        '@id': WEBSITE_ID,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: OG_IMAGE_URL,
      },
      description:
        'Consultorio Odontológico Los Andes ofrece odontología general, cirugía oral, periodoncia, endodoncia, ortodoncia, implantología y diseño de sonrisa en Soacha, Cundinamarca.',
      about: [
        { '@type': 'MedicalSpecialty', name: 'Odontología general' },
        { '@type': 'MedicalSpecialty', name: 'Ortodoncia' },
        { '@type': 'MedicalSpecialty', name: 'Implantología dental' },
        { '@type': 'MedicalSpecialty', name: 'Estética dental' },
      ],
      mainEntity: {
        '@id': BUSINESS_ID,
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: HOME_CANONICAL,
          },
        ],
      },
      publisher: {
        '@id': BUSINESS_ID,
      },
    },
  },
];

const Home = () => (
  <>
    <Seo
      title="Consultorio Odontológico Los Andes | Odontología integral en Soacha"
      description="Agenda tu cita con especialistas en odontología general, ortodoncia, implantología, diseño de sonrisa y periodoncia en el Consultorio Odontológico Los Andes en Soacha."
      canonical={HOME_CANONICAL}
      openGraph={{
        'og:title': 'Consultorio Odontológico Los Andes | Soacha',
        'og:description':
          'Odontología integral, cirugía oral, implantología y diseño de sonrisa con tecnología moderna y atención cálida en Soacha.',
        'og:url': HOME_CANONICAL,
        'og:image': OG_IMAGE_URL,
        'og:type': 'website',
      }}
      twitter={{
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Consultorio Odontológico Los Andes | Soacha',
        'twitter:description':
          'Especialistas en odontología integral, ortodoncia e implantología con más de 12 años de experiencia.',
        'twitter:image': OG_IMAGE_URL,
      }}
      structuredData={HOME_STRUCTURED_DATA}
    />
    <Hero />
    <Services />
    <Gallery />
    <About />
    <Contact />
    <BlogSection />
  </>
);

export default Home;
