import { useEffect } from 'react';

// Adds `.is-visible` to every `.reveal` element when it enters the viewport.
// Falls back to immediately revealing anything already in (or close to) the
// viewport on mount, so initial-fold content never appears blank.
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (elements.length === 0) return;

    const showImmediatelyIfNear = () => {
      const vh = window.innerHeight;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 1.1 && rect.bottom > -vh * 0.1) {
          el.classList.add('is-visible');
        }
      });
    };

    showImmediatelyIfNear();

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) observer.observe(el);
    });

    const onScroll = () => {
      elements.forEach((el) => {
        if (el.classList.contains('is-visible')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const safety = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 800);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      clearTimeout(safety);
    };
  }, []);
}

export function animateCount(target, duration, onTick) {
  const start = performance.now();
  const startVal = 0;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function frame(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = startVal + (target - startVal) * easeOut(progress);
    onTick(value);
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
