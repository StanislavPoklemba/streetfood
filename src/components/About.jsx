import { Icon } from './Icon.jsx';
import { useT } from '../i18n/LanguageContext.jsx';

const ABOUT_IMG = '/sf_people.jpg';

export function About() {
  const t = useT();
  return (
    <section id="about" className="about container">
      <div className="about__grid">
        <div className="about__copy reveal">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>
            {t.about.titleA}<em>{t.about.titleEm}</em>
          </h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <span className="about__badge">
            <Icon name="check" />
            {t.about.badge}
          </span>
        </div>

        <figure className="about__image reveal reveal--delay-1">
          <img
            src={ABOUT_IMG}
            alt="European Street Food Festival"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="about__caption">
            <small>{t.about.captionSmall}</small>
            {t.about.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
