import salmon1 from '../assets/salmon1.jpg';
import chimneyCake from '../assets/chimney_cake.png';
import langos from '../assets/langos.jpg';
import mexico from '../assets/mexico.png';
import churros from '../assets/churros.png';
import { useT } from '../i18n/LanguageContext.jsx';

const CDN = 'https://www.streetfood-festival.eu/pics/aussteller/staende';

const standDefs = [
  { key: 'salmon', image: salmon1 },
  { key: 'burgerCrew', image: '/special_burger_crew.png' },
  { key: 'skewers', image: '/skewers.jpg' },
  { key: 'classicBurger', image: 'https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/649490919_1412541170669131_5633254065199146104_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5aGUrP5qh28Q7kNvwFtdleo&_nc_oc=AdpnBzMV5dRbdIlKBCWOeX7Lo0wLecu5WVdt1nuXr2nOWUavPyPebqUvaDnVeU09O98&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=9Fp9QCDUY5PYrQLBhWjvmg&_nc_ss=7b2a8&oh=00_Af4uXtG2kM37RubcOpuiIc2kBiUB-uQ4x_DywzkJM5ecfg&oe=6A0C1163' },
  { key: 'thai', image: `${CDN}/thai.jpg` },
  { key: 'mexico', image: mexico },
  { key: 'vienna', image: `${CDN}/viennafood.jpg` },
  { key: 'fried', image: '/fried_food.png' },
  { key: 'corndogs', image: 'https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/645645647_1406897807900134_5093004524221869662_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AQpBtGCogcsQ7kNvwFOjAq3&_nc_oc=AdqxLS8Orfjd91NjHz98Ll9E1rTYICdVlrQVav2XmRotl9iRAYjwRZwcEiyDJDkzCyQ&_nc_zt=23&_nc_ht=scontent-fra3-2.xx&_nc_gid=-H712VXJj6KSXMQeYXlXUw&_nc_ss=7b2a8&oh=00_Af4iP1zsWItbME4lrqu9DKOI1QlF9cJ3I90-78ZbkbLNVw&oe=6A0C15A7' },
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
