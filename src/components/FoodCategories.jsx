import salmon1 from '../assets/salmon1.jpg';
import chimneyCake from '../assets/chimney_cake.png';
import langos from '../assets/langos.jpg';
import mexico from '../assets/mexico.png';
import churros from '../assets/churros.png';
import { useT } from '../i18n/LanguageContext.jsx';
import classicBurgerImg from '../assets/classic_burger.jpg';
import cornDogsImg from '../assets/corndog.jpg';

const CDN = 'https://www.streetfood-festival.eu/pics/aussteller/staende';

const standDefs = [
  { key: 'salmon', image: salmon1 },
  { key: 'burgerCrew', image: '/special_burger_crew.png' },
  { key: 'skewers', image: '/skewers.jpg' },
  { key: 'classicBurger', image: classicBurgerImg },
  { key: 'thai', image: `${CDN}/thai.jpg` },
  { key: 'mexico', image: mexico },
  { key: 'vienna', image: `${CDN}/viennafood.jpg` },
  { key: 'fried', image: '/fried_food.png' },
  { key: 'corndogs', image: cornDogsImg },
  { key: 'wildPommes', image: '/wild_style_pommes.png' },
  { key: 'churros', image: churros },
  { key: 'chimney', image: chimneyCake },
  { key: 'langos', image: langos }
];

function Card({ c }) {
  return (
    <article className="food-card">
      <div className={`food-card__media${c.image ? '' : ' food-card__media--placeholder'}`}>
        {c.image && <img src={c.image} alt={c.title} loading="lazy" decoding="async" />}
        <div className="food-card__media-shade" />
      </div>
      <div className="food-card__body">
        <h3>{c.title}</h3>
        <p>{c.body}</p>
      </div>
    </article>
  );
}

export function FoodCategories() {
  const t = useT();
  return (
    <section id="food" className="food container">
      <header className="section__head reveal">
        <span className="eyebrow">{t.food.eyebrow}</span>
        <h2>
          {t.food.titleA}<em>{t.food.titleEm}</em>
        </h2>
        <p>{t.food.sub}</p>
      </header>

      <div className="food__grid">
        {standDefs.map((s) => {
          const tr = t.food.stands[s.key];
          return <Card key={s.key} c={{ ...tr, image: s.image }} />;
        })}
      </div>
    </section>
  );
}
