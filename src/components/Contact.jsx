const address = 'Carrera 7 #16-92, Segundo Piso, San Luis, Soacha, Cundinamarca';
const whatsappUrl = 'https://wa.me/57XXXXXXXXXX?text=Hola%20Los%20Andes%2C%20quiero%20agendar%20una%20cita'; // TODO: reemplazar con numero real
const phoneLink = 'tel:+57XXXXXXXXXX'; // TODO: reemplazar con numero real

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nombre = encodeURIComponent(form.get('nombre') || '');
    const telefono = encodeURIComponent(form.get('telefono') || '');
    const servicio = encodeURIComponent(form.get('servicio') || '');
    const fecha = encodeURIComponent(form.get('fecha') || '');
    const mensaje = encodeURIComponent(form.get('mensaje') || '');
    const body = `Nombre:%20${nombre}%0ATel%C3%A9fono:%20${telefono}%0AServicio:%20${servicio}%0AFecha%20preferida:%20${fecha}%0AMensaje:%20${mensaje}`;
    window.location.href = `mailto:losandesodontologia@example.com?subject=Solicitud%20de%20cita&body=${body}`; // TODO: reemplazar correo
  };

  return (
    <section id="contacto" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" />
      <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600 shadow-sm ring-1 ring-cyan-100 md:mx-0">
            Agenda y contacto
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-slate-950"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Agenda una cita o escríbenos para resolver tus dudas
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 md:mx-0">
            Nuestro equipo está listo para diseñar un plan acorde a tus tiempos, necesidades y presupuesto. Elige el canal que prefieras y te contactaremos pronto.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6 rounded-3xl bg-white p-8 shadow-[0_30px_80px_-40px_rgba(6,182,212,0.5)] ring-1 ring-white/70">
            <div className="flex gap-3 rounded-2xl bg-cyan-50/60 px-4 py-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-cyan-600 shadow-inner ring-1 ring-cyan-100" aria-hidden>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="8.25" />
                  <path d="M12 7.5v4.5l2.75 1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Horario sugerido</h3>
                <p className="mt-1 text-sm text-slate-600">Lunes a sábado - 8:00 am a 6:00 pm</p>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Dirección</h3>
                <p className="mt-2 text-base font-medium text-slate-900">{address}</p>
                <p className="text-sm text-slate-500">Soacha, Cundinamarca - San Luis</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Teléfono</h3>
                <a className="mt-2 inline-block text-base font-medium text-cyan-600 hover:underline" href={phoneLink}>
                  Agrega tu número
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">WhatsApp</h3>
                <a className="mt-2 inline-flex items-center gap-2 text-base font-medium text-cyan-600 hover:underline" target="_blank" rel="noreferrer" href={whatsappUrl}>
                  Escríbenos por WhatsApp
                  <span aria-hidden>-&gt;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white/95 p-8 shadow-[0_35px_90px_-45px_rgba(15,23,42,0.6)] ring-1 ring-white/70">
            <h3 className="text-base font-semibold text-slate-900">Solicitar cita</h3>
            <p className="mt-2 text-sm text-slate-500">Déjanos tus datos y un odontólogo se comunicará contigo.</p>
            <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-500" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-500" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-500" htmlFor="servicio">
                  Servicio
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  className="mt-2 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200"
                >
                  <option>Odontología general</option>
                  <option>Cirugía oral</option>
                  <option>Periodoncia</option>
                  <option>Endodoncia</option>
                  <option>Ortodoncia</option>
                  <option>Implantología</option>
                  <option>Diseño de sonrisa</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-500" htmlFor="fecha">
                  Fecha preferida
                </label>
                <input
                  id="fecha"
                  type="date"
                  name="fecha"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-500" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div className="sm:col-span-2 flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg transition hover:shadow-xl hover:scale-[1.02]"
                >
                  Enviar por correo
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-600"
                >
                  Agendar por WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_40px_100px_-60px_rgba(15,23,42,0.55)]">
          <iframe
            title="Mapa Consultorio Odontológico Los Andes"
            src="https://www.google.com/maps?q=Carrera%207%20%2316-92%2C%20San%20Luis%2C%20Soacha%2C%20Cundinamarca&output=embed"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
