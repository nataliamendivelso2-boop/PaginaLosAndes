import blogPosts from '../data/posts';

const Blog = () => (
  <div className="relative isolate overflow-hidden bg-white pb-20">
    <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-600" />
    <section className="max-w-6xl mx-auto px-6 pt-28 text-white">
      <div className="max-w-3xl space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
          Blog Clínico
        </span>
        <h1
          className="text-4xl md:text-5xl font-semibold leading-tight"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Conocimiento que transforma hábitos y sonrisas
        </h1>
        <p className="text-base md:text-lg text-white/75">
          Cada artículo reúne la experiencia de nuestro equipo interdisciplinario en odontología, psicología, nutrición e innovación clínica. Lee con calma, guarda tus favoritos y comparte la información con tu familia para convertir el cuidado bucal en un estilo de vida.
        </p>
      </div>
    </section>
    <section className="relative z-10 -mt-16 max-w-6xl mx-auto px-6">
      <div className="rounded-3xl bg-white p-8 shadow-[0_45px_90px_-45px_rgba(15,23,42,0.35)] ring-1 ring-slate-100/70 md:p-12">
        <div className="grid gap-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              id={post.slug}
              className="rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-[0_35px_80px_-50px_rgba(14,116,144,0.45)] transition-shadow duration-300 hover:shadow-[0_45px_100px_-40px_rgba(14,165,233,0.35)] md:p-10"
            >
              <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
                    {post.category}
                  </span>
                  <h2
                    className="text-3xl font-semibold text-slate-950"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </header>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 md:text-lg md:leading-[1.9]">
                {post.content.map((paragraph, index) => (
                  <p key={`${post.slug}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
