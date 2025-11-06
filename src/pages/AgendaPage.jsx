import Contact from '../components/Contact';
import Seo from '../components/Seo';
import { OG_IMAGE_URL, SITE_URL } from '../utils/seo';

const AgendaPage = () => {
  const title = 'Agenda tu cita odontológica en Soacha | Consultorio Los Andes';
  const description =
    'Reserva una cita odontológica en Soacha de forma sencilla. Agenda por WhatsApp o teléfono y consulta nuestros horarios de atención.';
  const canonical = `${SITE_URL}/agenda`;

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
            Agenda
          </span>
          <h1
            className="mt-6 text-4xl font-semibold md:text-5xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Agenda tu cita con especialistas de confianza
          </h1>
          <p className="mt-4 text-base text-white/80">
            Cuéntanos qué necesitas y coordinamos el mejor horario para ti. Resolvemos todas tus dudas antes del procedimiento.
          </p>
        </div>
      </section>
      <section className="bg-white py-12 text-slate-700">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: '"Playfair Display", serif' }}>
            ¿Cómo agendar tu atención?
          </h2>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500" aria-hidden />
              <span>Escríbenos por WhatsApp, cuéntanos tu caso y envíanos fotografías si las tienes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500" aria-hidden />
              <span>Recibe una orientación inicial y confirma el día y hora que mejor se adapte a tu agenda.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500" aria-hidden />
              <span>Llega con anticipación y trae tus exámenes o radiografías recientes para agilizar el diagnóstico.</span>
            </li>
          </ul>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default AgendaPage;
