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
          Consultorio Odontológico Los Andes
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#servicios" className="hover:text-sky-700">Servicios</a>
          <a href="#galeria" className="hover:text-sky-700">Galería</a>
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
            Sonríe con confianza en Soacha
          </h1>
          <p className="mt-4 text-gray-600">
            Más de 12 años de experiencia en consulta particular. Atención cálida, tecnología moderna y tratamientos
            personalizados para toda la familia.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contacto" className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-white hover:bg-sky-700">Solicitar cita</a>
            <a href="#servicios" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50">Ver servicios</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            <img src={ph43} alt="Placeholder de consultorio odontológico" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Odontología general', desc: 'Limpiezas, restauraciones y control preventivo.' },
    { title: 'Cirugía oral', desc: 'Extracciones y procedimientos quirúrgicos ambulatorios.' },
    { title: 'Periodoncia', desc: 'Salud de encías: prevención y tratamiento.' },
    { title: 'Endodoncia', desc: 'Tratamientos de conducto con enfoque conservador.' },
    { title: 'Ortodoncia', desc: 'Corrección de maloclusiones con brackets y alineadores.' },
    { title: 'Implantología', desc: 'Reposición de piezas con implantes y prótesis.' },
    { title: 'Diseño de sonrisa', desc: 'Estética dental: resinas, carillas y blanqueamiento.' },
  ]
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios</h2>
        <p className="mt-3 text-gray-600">Tratamientos integrales con enfoque humano y resultados predecibles.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-sky-600 text-2xl" aria-hidden>▸</div>
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
            En Los Andes combinamos experiencia clínica, bioseguridad rigurosa y trato cercano. Explicamos cada paso del
            tratamiento y priorizamos tu comodidad.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
            <li>Evaluación integral y planes de tratamiento claros.</li>
            <li>Materiales certificados y protocolos de esterilización.</li>
            <li>Opciones de financiación y seguimiento post-tratamiento.</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            <img src={ph43} alt="Placeholder del equipo y atención" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const items = [
    { title: 'Diseño de sonrisa', desc: 'Caso estético (antes / después).', src: ph169 },
    { title: 'Ortodoncia', desc: 'Alineación y corrección de mordida.', src: ph169 },
    { title: 'Implantología', desc: 'Reposición de pieza dental.', src: ph169 },
  ]
  return (
    <section id="galeria" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Galería de casos</h2>
        <p className="mt-3 text-gray-600">Imágenes referenciales. Resultados pueden variar según diagnóstico.</p>
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
  const whatsApp = 'https://wa.me/57XXXXXXXXXX?text=Hola%20Los%20Andes%2C%20quiero%20agendar%20una%20cita'; // Reemplazar con número real
  const phone = 'tel:+57XXXXXXXXXX'; // Reemplazar con número real

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = encodeURIComponent(form.get('nombre') || '');
    const telefono = encodeURIComponent(form.get('telefono') || '');
    const servicio = encodeURIComponent(form.get('servicio') || '');
    const fecha = encodeURIComponent(form.get('fecha') || '');
    const mensaje = encodeURIComponent(form.get('mensaje') || '');
    const body = `Nombre:%20${nombre}%0ATeléfono:%20${telefono}%0AServicio:%20${servicio}%0AFecha%20preferida:%20${fecha}%0AMensaje:%20${mensaje}`;
    window.location.href = `mailto:losandesodontologia@example.com?subject=Solicitud%20de%20cita&body=${body}`; // Reemplazar email
  };

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contacto y citas</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Dirección</h3>
              <p className="mt-1 text-gray-700">{address}</p>
              <p className="text-gray-500">Soacha, Cundinamarca • San Luis</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Teléfono</h3>
              <a className="mt-1 inline-block text-sky-700 hover:underline" href={phone}>(agrega tu número)</a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">WhatsApp</h3>
              <a className="mt-1 inline-block text-sky-700 hover:underline" target="_blank" href={whatsApp} rel="noreferrer">Escríbenos por WhatsApp</a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Horario de atención</h3>
              <p className="mt-1 text-gray-700">Lunes a Sábado (personaliza según tu agenda)</p>
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
                <label className="block text-sm text-gray-700">Teléfono</label>
                <input name="telefono" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Servicio</label>
                <select name="servicio" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Odontología general</option>
                  <option>Cirugía oral</option>
                  <option>Periodoncia</option>
                  <option>Endodoncia</option>
                  <option>Ortodoncia</option>
                  <option>Implantología</option>
                  <option>Diseño de sonrisa</option>
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
            title="Mapa Consultorio Odontológico Los Andes"
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
        <p>© {new Date().getFullYear()} Consultorio Odontológico Los Andes • Soacha</p>
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

