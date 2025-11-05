import blogPosts from '../data/blogPosts';

const BlogIndex = ({ onNavigate }) => {
  const [featuredPost, ...otherPosts] = blogPosts;

  if (!featuredPost) {
    return null;
  }

  const handleNavigate = (event, slug) => {
    event.preventDefault();
    if (typeof onNavigate === 'function') {
      onNavigate('blogArticle', { slug });
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-white pb-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-600" />
      <section className="max-w-6xl mx-auto px-6 pt-28 text-white">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Blog Clínico
          </span>
          <h1
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Historias que inspiran hábitos y confianza
          </h1>
          <p className="text-base md:text-lg text-white/80">
            Conecta con artículos desarrollados por nuestro equipo interdisciplinario. Encuentra guías prácticas, tendencias en tecnología odontológica y experiencias reales que te acompañan en cada decisión de bienestar bucal.
          </p>
        </div>
      </section>
      <section className="relative z-10 -mt-16 max-w-6xl mx-auto px-6">
        <div className="grid gap-12">
          <article className="grid gap-10 overflow-hidden rounded-3xl border border-slate-100/60 bg-white/95 p-8 shadow-[0_45px_90px_-55px_rgba(15,23,42,0.45)] backdrop-blur md:grid-cols-2 md:p-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
                {featuredPost.category}
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold text-slate-950"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {featuredPost.title}
              </h2>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                {featuredPost.date} · {featuredPost.readTime}
              </p>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                {featuredPost.excerpt}
              </p>
              <a
                href={`/blogs/${featuredPost.id}`}
                onClick={(event) => handleNavigate(event, featuredPost.id)}
                className="inline-flex w-fit items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Leer artículo destacado
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
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-cyan-500/10 via-slate-900/5 to-blue-900/10 p-6 text-slate-700">
              <div className="space-y-4 text-sm leading-relaxed md:text-base md:leading-8">
                {featuredPost.content.slice(0, 3).map((paragraph, index) => (
                  <p key={`${featuredPost.id}-preview-${index}`}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
                {featuredPost.readTime} · Redacción Los Andes
              </p>
            </div>
          </article>
          <div className="grid gap-8 md:grid-cols-2">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white/95 p-8 shadow-[0_35px_80px_-60px_rgba(14,165,233,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_45px_110px_-50px_rgba(14,165,233,0.4)]"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full bg-cyan-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
                    {post.category}
                  </span>
                  <h3
                    className="text-2xl font-semibold text-slate-950"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    {post.date} · {post.readTime}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" aria-hidden />
                    {post.readTime}
                  </span>
                  <a
                    href={`/blogs/${post.id}`}
                    onClick={(event) => handleNavigate(event, post.id)}
                    className="inline-flex items-center gap-2 text-cyan-600 transition-colors duration-200 hover:text-cyan-500"
                  >
                    Leer más
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
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogIndex;
