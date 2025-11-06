const modules = import.meta.glob('./*/**/*.js', { eager: true });

const posts = Object.values(modules)
  .map((module) => module?.default)
  .filter((entry) => entry && entry.slug)
  .sort((a, b) => {
    const orderA = typeof a.order === 'number' ? a.order : Number.MAX_SAFE_INTEGER;
    const orderB = typeof b.order === 'number' ? b.order : Number.MAX_SAFE_INTEGER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.slug.localeCompare(b.slug);
  });

export default posts;
