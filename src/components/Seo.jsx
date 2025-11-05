import { useEffect } from 'react';

const updateMetaTag = (attribute, name, content) => {
  if (!content) {
    return;
  }

  const selector = `meta[${attribute}="${name}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const updateLinkTag = (rel, href) => {
  if (!href) {
    return;
  }

  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const removeOldScripts = (scripts) => {
  scripts.forEach((script) => {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });
};

const Seo = ({ title, description, canonical, robots = 'index,follow', openGraph = {}, twitter = {}, structuredData = [] }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'robots', robots);

    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    Object.entries(openGraph).forEach(([property, content]) => {
      updateMetaTag('property', property, content);
    });

    Object.entries(twitter).forEach(([name, content]) => {
      updateMetaTag('name', name, content);
    });
  }, [title, description, canonical, robots, openGraph, twitter]);

  useEffect(() => {
    const createdScripts = structuredData
      .filter((entry) => entry && entry.data)
      .map(({ id, data }) => {
        const scriptId = id || `seo-ld-${Math.random().toString(36).slice(2)}`;
        let script = document.getElementById(scriptId);

        if (!script) {
          script = document.createElement('script');
          script.type = 'application/ld+json';
          script.id = scriptId;
          document.head.appendChild(script);
        }

        script.textContent = JSON.stringify(data);
        return script;
      });

    return () => {
      removeOldScripts(createdScripts);
    };
  }, [structuredData]);

  return null;
};

export default Seo;
