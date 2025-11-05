import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import BlogSection from '../components/BlogSection';
import Seo from '../components/Seo';
import { BUSINESS_ID, OG_IMAGE_URL, SITE_URL, WEBSITE_ID } from '../utils/seo';
import { getCampaignContent, resolveCampaignKey } from '../utils/campaigns';

const HOME_CANONICAL = `${SITE_URL}/`;

const Home = () => {
  const [searchParams] = useSearchParams();
  const mergedSearchParams = useMemo(() => {
    const params = new URLSearchParams();

    if (typeof window !== 'undefined') {
      const browserSearch = window.location.search;
      if (browserSearch) {
        const globalParams = new URLSearchParams(browserSearch);
        globalParams.forEach((value, key) => {
          params.set(key, value);
        });
      }

      const hash = window.location.hash || '';
      const hashQueryIndex = hash.indexOf('?');
      if (hashQueryIndex !== -1) {
        const hashParams = new URLSearchParams(hash.slice(hashQueryIndex + 1));
        hashParams.forEach((value, key) => {
          params.set(key, value);
        });
      }
    }

    searchParams.forEach((value, key) => {
      params.set(key, value);
    });

    return params;
  }, [searchParams]);

  const campaignKey = resolveCampaignKey(mergedSearchParams);
  const campaignContent = getCampaignContent(campaignKey);

  const pageTitle = campaignContent.seo.title;
  const pageDescription = campaignContent.seo.description;

  const structuredData = useMemo(
    () => [
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
          description: pageDescription,
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
    ],
    [pageDescription],
  );

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={HOME_CANONICAL}
        openGraph={{
          'og:title': pageTitle,
          'og:description': pageDescription,
          'og:url': HOME_CANONICAL,
          'og:image': campaignContent.seo.ogImage,
          'og:type': 'website',
        }}
        twitter={{
          'twitter:card': 'summary_large_image',
          'twitter:title': pageTitle,
          'twitter:description': pageDescription,
          'twitter:image': campaignContent.seo.ogImage,
        }}
        structuredData={structuredData}
      />
      <Hero campaignKey={campaignKey} />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <BlogSection />
    </>
  );
};

export default Home;
