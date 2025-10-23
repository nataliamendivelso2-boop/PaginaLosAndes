import './App.css'

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="font-semibold text-sky-700 text-lg">Clínica Odontológica</a>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#servicios" className="hover:text-sky-700">Servicios</a>
          <a href="#nosotros" className="hover:text-sky-700">Nosotros</a>
          <a href="#contacto" className="hover:text-sky-700">Contacto</a>
        </nav>
        <a href="#contacto" className="ml-4 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Reservar turno</a>
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
            Sonrisas saludables, resultados confiables
          </h1>
          <p className="mt-4 text-gray-600">Cuidado integral con tecnología moderna, atención cálida y planes a medida para toda la familia.</p>
          <div className="mt-8 flex gap-3">
            <a href="#contacto" className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-white hover:bg-sky-700">Solicitar turno</a>
            <a href="#servicios" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50">Ver servicios</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center">
            <span className="text-6xl" role="img" aria-label="Odontología">🦷</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Odontología general', desc: 'Limpiezas, caries y restauraciones.' },
    { title: 'Ortodoncia', desc: 'Brackets metálicos y estéticos, alineadores.' },
    { title: 'Implantología', desc: 'Implantes y prótesis fijas/removibles.' },
    { title: 'Blanqueamiento', desc: 'Tratamientos para una sonrisa más blanca.' },
    { title: 'Endodoncia', desc: 'Tratamientos de conducto con mínima molestia.' },
    { title: 'Odontopediatría', desc: 'Atención especializada para niños.' },
  ]
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios</h2>
        <p className="mt-3 text-gray-600">Tratamientos personalizados con profesionales especializados.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-sky-600 text-2xl">★</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sobre la clínica</h2>
          <p className="mt-4 text-gray-600">Combinamos experiencia, tecnología y calidez humana. Nuestro equipo trabaja con enfoque preventivo, explicando cada paso y priorizando tu comodidad.</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Diagnóstico digital y radiografía</li>
            <li>• Protocolos de bioseguridad</li>
            <li>• Planes de pago y coberturas</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center">
            <span className="text-6xl" role="img" aria-label="Sonrisa">😁</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contacto y turnos</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Teléfono</h3>
            <p className="mt-2 text-gray-700">(XX) XXXX-XXXX</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">WhatsApp</h3>
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" className="mt-2 inline-block text-sky-700 hover:underline">Enviar mensaje</a>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Dirección</h3>
            <p className="mt-2 text-gray-700">Calle 123, Ciudad</p>
            <p className="text-gray-500">Lun a Vie: 9 a 19 hs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Clínica Odontológica. Todos los derechos reservados.</p>
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
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
