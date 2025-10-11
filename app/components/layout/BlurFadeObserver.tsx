'use client';

import { useEffect } from 'react';

const ANIMATE_SELECTOR = '[data-animate="blur-fade"]';

export default function BlurFadeObserver() {
  useEffect(() => {
    const nodes = new Set<Element>();

    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const delay = el.getAttribute('data-animate-delay');
            if (delay) {
              el.style.setProperty('--fx-fade-delay', delay);
            }
            requestAnimationFrame(() => el.classList.add('is-visible'));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    const attach = (element: Element) => {
      if (nodes.has(element)) return;
      nodes.add(element);
      intersectionObserver.observe(element);
    };

    const scan = () => {
      document.querySelectorAll(ANIMATE_SELECTOR).forEach(attach);
    };

    const mutationObserver = new MutationObserver(() => {
      scan();
    });

    scan();
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
      nodes.clear();
    };
  }, []);

  return null;
}
