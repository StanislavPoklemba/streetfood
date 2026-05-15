import { Icon } from './Icon.jsx';
import { useT } from '../i18n/LanguageContext.jsx';

const BAR_IMAGE =
  'https://i.pinimg.com/736x/22/25/b5/2225b51f1aa1fb0344d1c8a424ac0381.jpg';
const LEMONADE_IMAGE =
  'https://i.pinimg.com/736x/97/22/da/9722da2f527b8ccef2a5b92f2ec4c2a1.jpg';

export function Drinks() {
  const t = useT();
  return (
    <section id="drinks" className="drinks">
      <div className="container">
        <header className="section__head reveal">
          <span className="eyebrow">{t.drinks.eyebrow}</span>
          <h2>
            {t.drinks.titleA}<em>{t.drinks.titleEm}</em>
          </h2>
          <p>{t.drinks.sub}</p>
        </header>

        <div className="drinks__grid">
          <article className="drink-card">
            <div className="drink-card__media">
              <img src={BAR_IMAGE} alt={t.drinks.barsTitle} loading="lazy" decoding="async" />
              <div className="drink-card__media-shade" />
              <div className="drink-card__head"></div>
            </div>

            <div className="drink-card__body">
              <h3>{t.drinks.barsTitle}</h3>
              <p>{t.drinks.barsBody}</p>

              <div className="drink-card__list">
                <h4>{t.drinks.onTapHeading}</h4>
                <ul>
                  {t.drinks.onTap.map((d) => (
                    <li key={d}>
                      <Icon name="check" />
                      {d}
                    </li>
                  ))}
                </ul>

                <h4>{t.drinks.fridgeHeading}</h4>
                <ul className="drink-card__pills">
                  {t.drinks.fridge.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="drink-card drink-card--feature">
            <div className="drink-card__media">
              <img src={LEMONADE_IMAGE} alt={t.drinks.lemonadeTitle} loading="lazy" decoding="async" />
              <div className="drink-card__media-shade" />
              <div className="drink-card__head"></div>
            </div>

            <div className="drink-card__body">
              <h3>{t.drinks.lemonadeTitle}</h3>
              <p>{t.drinks.lemonadeBody}</p>

              <div className="drink-card__list">
                <h4>{t.drinks.whatYouFind}</h4>
                <ul>
                  {t.drinks.lemonade.map((d) => (
                    <li key={d}>
                      <Icon name="check" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
