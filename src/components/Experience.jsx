import { useT } from '../i18n/LanguageContext.jsx';

export function Experience() {
  const t = useT();
  return (
    <section className="experience">
      <div className="container">
        <header className="section__head reveal">
          <span className="eyebrow">{t.experience.eyebrow}</span>
          <h2>
            {t.experience.titleA}<em>{t.experience.titleEm}</em>{t.experience.titleB}
          </h2>
        </header>

        <div className="experience__grid">
          {t.experience.features.map((f, i) => (
            <div key={f.title} className={`exp reveal reveal--delay-${i + 1}`}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
