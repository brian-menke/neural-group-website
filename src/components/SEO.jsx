import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords,
  url,
  image,
  type = 'website'
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (property, content, isProperty = false) => {
      if (!content) return;
      
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph tags (Facebook, LinkedIn, etc.)
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:site_name', 'The Neural Group', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

  }, [title, description, keywords, url, image, type]);

  return null; // This component doesn't render anything
};

export default SEO;