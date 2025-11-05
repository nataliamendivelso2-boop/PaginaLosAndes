import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const BlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="relative isolate overflow-hidden bg-slate-950 py-8 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-blue-950/70 to-cyan-700/30" />
      <div className="absolute -top-40 -left-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-48 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" aria-hidden />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Blog Los Andes
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-tight text-white"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Historias y guías para cuidar tu sonrisa cada día
            </h2>
            <p className="text-base text-white/70 md:text-lg">
              Seleccionamos contenidos exclusivos escritos por nuestro equipo multidisciplinario para acompañar a las familias en cada etapa de su salud bucal. Descubre recomendaciones prácticas, innovación tecnológica y testimonios que inspiran confianza.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Ver todos los artículos
            <svg
              className="ml-3 h-4 w-4"
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
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_-55px_rgba(56,189,248,0.6)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  {post.category}
                </span>
                <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">{post.excerpt}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" aria-hidden />
                  {post.readTime}
                </span>
                <Link
                  to={`/blogs/${post.id}`}
                  className="inline-flex items-center gap-2 text-cyan-200 transition-colors duration-200 group-hover:text-cyan-100"
                >
                  Leer artículo
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
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
