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
    const body = `Nombre:%20${nombre}%0ATelefono:%20${telefono}%0AServicio:%20${servicio}%0AFecha%20preferida:%20${fecha}%0AMensaje:%20${mensaje}`;
    window.location.href = `mailto:losandesodontologia@example.com?subject=Solicitud%20de%20cita&body=${body}`; // TODO: reemplazar correo
  };

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contacto y citas</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Direccion</h3>
              <p className="mt-1 text-gray-700">{address}</p>
              <p className="text-gray-500">Soacha, Cundinamarca - San Luis</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Telefono</h3>
              <a className="mt-1 inline-block text-sky-700 hover:underline" href={phoneLink}>
                Agrega tu numero
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">WhatsApp</h3>
              <a className="mt-1 inline-block text-sky-700 hover:underline" target="_blank" rel="noreferrer" href={whatsappUrl}>
                Escribenos por WhatsApp
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Horario de atencion</h3>
              <p className="mt-1 text-gray-700">Lunes a Sabado (personaliza segun tu agenda)</p>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Solicitar cita</h3>
            <form className="mt-4 grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-700" htmlFor="nombre">
                  Nombre
                </label>
                <input id="nombre" name="nombre" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700" htmlFor="telefono">
                  Telefono
                </label>
                <input id="telefono" name="telefono" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700" htmlFor="servicio">
                  Servicio
                </label>
                <select id="servicio" name="servicio" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Odontologia general</option>
                  <option>Cirugia oral</option>
                  <option>Periodoncia</option>
                  <option>Endodoncia</option>
                  <option>Ortodoncia</option>
                  <option>Implantologia</option>
                  <option>Diseno de sonrisa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700" htmlFor="fecha">
                  Fecha preferida
                </label>
                <input id="fecha" type="date" name="fecha" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-700" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea id="mensaje" name="mensaje" rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2 flex gap-3">
                <button type="submit" className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-white hover:bg-sky-700">
                  Enviar solicitud por correo
                </button>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50">
                  Agendar por WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
          <iframe
            title="Mapa Consultorio Odontologico Los Andes"
            src="https://www.google.com/maps?q=Carrera%207%20%2316-92%2C%20San%20Luis%2C%20Soacha%2C%20Cundinamarca&output=embed"
            className="w-full h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
