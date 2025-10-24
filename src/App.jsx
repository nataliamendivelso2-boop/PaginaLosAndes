import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/placeholder-logo.svg'
import ph43 from './assets/placeholder-4x3.svg'
import ph169 from './assets/placeholder-16x9.svg'

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-semibold text-sky-700 text-lg">
          <img src={logo} alt="Logo placeholder Los Andes" className="h-8 w-8" />
          Consultorio Odontol√≥gico Los Andes
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#servicios" className="hover:text-sky-700">Servicios</a>
          <a href="#galeria" className="hover:text-sky-700">Galer√≠a</a>
          <a href="#nosotros" className="hover:text-sky-700">Nosotros</a>
          <a href="#contacto" className="hover:text-sky-700">Contacto</a>
        </nav>
        <a href="#contacto" className="ml-4 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Reservar cita</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Sonr√≠e con confianza en Soacha
          </h1>
          <p className="mt-4 text-gray-600">
            M√°s de 12 a√±os de experiencia en consulta particular. Atenci√≥n c√°lida, tecnolog√≠a moderna y tratamientos
            personalizados para toda la familia.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contacto" className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-white hover:bg-sky-700">Solicitar cita</a>
            <a href="#servicios" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50">Ver servicios</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            <img src={ph43} alt="Placeholder de consultorio odontol√≥gico" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative mx-auto my-10 max-w-3xl rounded-xl bg-white shadow-xl border border-gray-100">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100" aria-label="Cerrar">?</button>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
function Services() {\n  const services = [
    {
      key: 'OdontologÌa general',
      title: 'OdontologÌa general',
      desc: 'Limpiezas, restauraciones y control preventivo.',
      details: [
        'Profilaxis y control de placa',
        'Resinas estÈticas y sellantes',
        'EvaluaciÛn integral y educaciÛn en higiene'
      ],
      images: [
        'https://source.unsplash.com/featured/?dental,cleaning',
        'https://source.unsplash.com/featured/?tooth,care'
      ]
    },
    {
      key: 'CirugÌa oral',
      title: 'CirugÌa oral',
      desc: 'Extracciones y procedimientos quir˙rgicos ambulatorios.',
      details: [
        'ExtracciÛn de terceros molares',
        'CirugÌas menores con anestesia local',
        'Manejo de lesiones orales leves'
      ],
      images: [
        'https://source.unsplash.com/featured/?oral,surgery',
        'https://source.unsplash.com/featured/?dentist,clinic'
      ]
    },
    {
      key: 'Periodoncia',
      title: 'Periodoncia',
      desc: 'Salud de encÌas: prevenciÛn y tratamiento.',
      details: [
        'Limpiezas profundas (raspado y alisado radicular)',
        'Tratamiento de gingivitis y periodontitis',
        'Mantenimiento periodontal y control'
      ],
      images: [
        'https://source.unsplash.com/featured/?gum,care',
        'https://source.unsplash.com/featured/?dental,hygiene'
      ]
    },
    {
      key: 'Endodoncia',
      title: 'Endodoncia',
      desc: 'Tratamientos de conducto con enfoque conservador.',
      details: [
        'Alivio de dolor y preservaciÛn de piezas',
        'Tratamientos uni y multirradiculares',
        'Reendodoncia selecta (seg˙n evaluaciÛn)'
      ],
      images: [
        'https://source.unsplash.com/featured/?root,canal',
        'https://source.unsplash.com/featured/?endodontics'
      ]
    },
    {
      key: 'Ortodoncia',
      title: 'Ortodoncia',
      desc: 'CorrecciÛn de maloclusiones con brackets y alineadores.',
      details: [
        'DiagnÛstico cefalomÈtrico y plan de tratamiento',
        'Brackets met·licos/estÈticos y alineadores',
        'ContenciÛn y seguimiento post-tratamiento'
      ],
      images: [
        'https://source.unsplash.com/featured/?braces,teeth',
        'https://source.unsplash.com/featured/?aligners,orthodontics'
      ]
    },
    {
      key: 'ImplantologÌa',
      title: 'ImplantologÌa',
      desc: 'ReposiciÛn de piezas con implantes y prÛtesis.',
      details: [
        'EvaluaciÛn Ûsea y planificaciÛn',
        'ColocaciÛn de implantes (seg˙n caso)',
        'RehabilitaciÛn protÈsica sobre implantes'
      ],
      images: [
        'https://source.unsplash.com/featured/?dental,implant',
        'https://source.unsplash.com/featured/?prosthesis,dental'
      ]
    },
    {
      key: 'DiseÒo de sonrisa',
      title: 'DiseÒo de sonrisa',
      desc: 'EstÈtica dental: resinas, carillas y blanqueamiento.',
      details: [
        'An·lisis estÈtico y mock-up',
        'Carillas y resinas directas',
        'Blanqueamiento guiado y mantenimiento'
      ],
      images: [
        'https://source.unsplash.com/featured/?smile,teeth',
        'https://source.unsplash.com/featured/?teeth,whitening'
      ]
    }
  ];\n  const [selected, setSelected] = useState(null);\n  const [open, setOpen] = useState(false);\n  const onCard = (svc) => { setSelected(svc); setOpen(true); };\n  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios</h2>
        <p className="mt-3 text-gray-600">Tratamientos integrales con enfoque humano y resultados predecibles.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-sky-600 text-2xl" aria-hidden>‚ñ∏</div>
              <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sobre nosotros</h2>
          <p className="mt-4 text-gray-600">
            En Los Andes combinamos experiencia cl√≠nica, bioseguridad rigurosa y trato cercano. Explicamos cada paso del
            tratamiento y priorizamos tu comodidad.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
            <li>Evaluaci√≥n integral y planes de tratamiento claros.</li>
            <li>Materiales certificados y protocolos de esterilizaci√≥n.</li>
            <li>Opciones de financiaci√≥n y seguimiento post-tratamiento.</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            <img src={ph43} alt="Placeholder del equipo y atenci√≥n" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const items = [
    { title: 'Dise√±o de sonrisa', desc: 'Caso est√©tico (antes / despu√©s).', src: ph169 },
    { title: 'Ortodoncia', desc: 'Alineaci√≥n y correcci√≥n de mordida.', src: ph169 },
    { title: 'Implantolog√≠a', desc: 'Reposici√≥n de pieza dental.', src: ph169 },
  ]
  return (
    <section id="galeria" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Galer√≠a de casos</h2>
        <p className="mt-3 text-gray-600">Im√°genes referenciales. Resultados pueden variar seg√∫n diagn√≥stico.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((g) => (
            <figure key={g.title} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img src={g.src} alt={`Placeholder ${g.title}`} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold text-gray-900">{g.title}</p>
                <p className="text-sm text-gray-600">{g.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const address = 'Carrera 7 #16-92, Segundo Piso, San Luis, Soacha, Cundinamarca';
  const whatsApp = 'https://wa.me/57XXXXXXXXXX?text=Hola%20Los%20Andes%2C%20quiero%20agendar%20una%20cita'; // Reemplazar con n√∫mero real
  const phone = 'tel:+57XXXXXXXXXX'; // Reemplazar con n√∫mero real

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = encodeURIComponent(form.get('nombre') || '');
    const telefono = encodeURIComponent(form.get('telefono') || '');
    const servicio = encodeURIComponent(form.get('servicio') || '');
    const fecha = encodeURIComponent(form.get('fecha') || '');
    const mensaje = encodeURIComponent(form.get('mensaje') || '');
    const body = `Nombre:%20${nombre}%0ATel√©fono:%20${telefono}%0AServicio:%20${servicio}%0AFecha%20preferida:%20${fecha}%0AMensaje:%20${mensaje}`;
    window.location.href = `mailto:losandesodontologia@example.com?subject=Solicitud%20de%20cita&body=${body}`; // Reemplazar email
  };

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contacto y citas</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Direcci√≥n</h3>
              <p className="mt-1 text-gray-700">{address}</p>
              <p className="text-gray-500">Soacha, Cundinamarca ‚Ä¢ San Luis</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Tel√©fono</h3>
              <a className="mt-1 inline-block text-sky-700 hover:underline" href={phone}>(agrega tu n√∫mero)</a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">WhatsApp</h3>
              <a className="mt-1 inline-block text-sky-700 hover:underline" target="_blank" href={whatsApp} rel="noreferrer">Escr√≠benos por WhatsApp</a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Horario de atenci√≥n</h3>
              <p className="mt-1 text-gray-700">Lunes a S√°bado (personaliza seg√∫n tu agenda)</p>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Solicitar cita</h3>
            <form className="mt-4 grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-700">Nombre</label>
                <input name="nombre" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Tel√©fono</label>
                <input name="telefono" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Servicio</label>
                <select name="servicio" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Odontolog√≠a general</option>
                  <option>Cirug√≠a oral</option>
                  <option>Periodoncia</option>
                  <option>Endodoncia</option>
                  <option>Ortodoncia</option>
                  <option>Implantolog√≠a</option>
                  <option>Dise√±o de sonrisa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Fecha preferida</label>
                <input type="date" name="fecha" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-700">Mensaje</label>
                <textarea name="mensaje" rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2 flex gap-3">
                <button type="submit" className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-white hover:bg-sky-700">
                  Enviar solicitud por correo
                </button>
                <a href={whatsApp} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50">
                  Agendar por WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
          <iframe
            title="Mapa Consultorio Odontol√≥gico Los Andes"
            src="https://www.google.com/maps?q=Carrera%207%20%2316-92%2C%20San%20Luis%2C%20Soacha%2C%20Cundinamarca&output=embed"
            className="w-full h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>¬© {new Date().getFullYear()} Consultorio Odontol√≥gico Los Andes ‚Ä¢ Soacha</p>
        <a href="#inicio" className="text-sky-700 hover:underline">Volver arriba</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}



