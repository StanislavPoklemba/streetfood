import { Icon } from './Icon.jsx';
import { useT } from '../i18n/LanguageContext.jsx';

export function Hero() {
  const t = useT();
  return (
    <section id="top" className="hero">
      <div className="hero__left">
        <div className="hero__eyebrow eyebrow">{t.hero.eyebrow}</div>

        <h1 className="hero__title">
          <span className="hero__word"><span>{t.hero.titleA}</span></span>{' '}
          <span className="hero__word"><span>{t.hero.titleB}</span></span>{' '}
          <span className="hero__word"><span className="accent">{t.hero.titleC}</span></span>
        </h1>

        <p className="hero__sub">{t.hero.sub}</p>

        <div className="hero__hours-box">
          <span className="hero__hours-box-label">{t.hero.hoursLabel}</span>
          <div>
            <strong>{t.hero.saturday}</strong>
            <span>{t.hero.satHours}</span>
          </div>
          <div>
            <strong>{t.hero.sunday}</strong>
            <span>{t.hero.sunHours}</span>
          </div>
        </div>

        <div className="hero__cta">
          <a href="#tour" className="btn btn--primary">
            <Icon name="pin" />
            {t.hero.ctaPrimary}
          </a>
          <a href="#food" className="btn btn--ghost">
            <Icon name="utensils" />
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="hero__meta">
          <div>
            <strong>{t.hero.meta1Strong}</strong>
            {t.hero.meta1}
          </div>
          <div>
            <strong>{t.hero.meta2Strong}</strong>
            {t.hero.meta2}
          </div>
          <div>
            <strong>{t.hero.meta3Strong}</strong>
            {t.hero.meta3}
          </div>
        </div>
      </div>

      <div className="hero__right">
        <img
          src="/sf_crowd.png"
          alt="European Street Food Festival crowd at night"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero__right-fade" />
      </div>

    </section>
  );
}
