import { useEffect, useRef, useState } from 'react';
import { animateCount } from '../hooks/useReveal.js';
import { useT, useLanguage } from '../i18n/LanguageContext.jsx';

const statDefs = [
  { value: 3.5, suffix: 'M+', key: 'visitors', decimals: 1 },
  { value: 11, suffix: '', key: 'years', decimals: 0 },
  { value: 13, suffix: '', key: 'stands', decimals: 0 },
  { value: 100, suffix: '+', key: 'cities', decimals: 0 }
];

function Counter({ value, suffix, label, decimals, locale }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (!ref.current || played) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            setPlayed(true);
            animateCount(value, 1600, (v) => setDisplay(v));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, played]);

  const formatted = decimals
    ? display.toFixed(decimals).replace('.', locale === 'de' ? ',' : '.')
    : Math.round(display).toLocaleString(locale === 'de' ? 'de-AT' : 'en-US');

  return (
    <div className="stat" ref={ref}>
      <div className="stat__num">
        {formatted}
        {suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export function Stats() {
  const t = useT();
  const { lang } = useLanguage();
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats__grid">
          {statDefs.map((s) => (
            <Counter
              key={s.key}
              value={s.value}
              suffix={s.suffix}
              decimals={s.decimals}
              label={t.stats[s.key]}
              locale={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
