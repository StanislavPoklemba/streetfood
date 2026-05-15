import { useState, useEffect, useCallback } from 'react';
import { useT } from '../i18n/LanguageContext.jsx';

const photos = [
  { file: 'sf_crowd.png',              alt: 'Festival crowd at night' },
  { file: 'skewers.jpg',               alt: 'Grilled skewers' },
  { file: 'churos_foodtruck.png',      alt: 'Churros food truck' },
  { file: 'pomes1.jpg',                alt: 'Loaded street fries' },
  { file: 'thai1.jpg',                 alt: 'Thai street food bowl' },
  { file: 'trdelnik.jpg',              alt: 'Trdelník chimney cake' },
  { file: 'langos_foodtruck.jpg',      alt: 'Lángos food truck' },
  { file: 'burger_menu11.jpg',         alt: 'Burger menu close-up' },
  { file: 'pomes11.jpg',               alt: 'Hand-cut fries with toppings' },
  { file: 'salmon1.jpg',               alt: 'Grilled salmon plate' },
  { file: 'mexico.png',                alt: 'Mexican street food stand' },
  { file: 'fried1.jpg',                alt: 'Fresh fried snacks' },
  { file: 'Special Burger Crew.png',   alt: 'Special Burger Crew stand' },
  { file: 'pomes111.jpg',              alt: 'Crispy fries served fresh' },
  { file: 'chimney_cake.png',          alt: 'Chimney cake on the spit' },
  { file: 'burger_menu1.jpg',          alt: 'Smashed burger plated to order' },
  { file: 'burger_menu111.jpg',        alt: 'Stacked burger creation' },
  { file: 'wild_style_pommes.png',     alt: 'Wild style loaded pommes' },
  { file: 'pomes1111.jpg',             alt: 'Fries plate' },
  { file: 'thai11.jpg',                alt: 'Thai noodles on the wok' },
  { file: 'clasic_burger_menu.jpg',    alt: 'Classic burger menu' },
  { file: 'fried_food.png',            alt: 'Golden fried bites' },
  { file: 'pomes11111.jpg',            alt: 'Street fries portion' },
  { file: 'pomes111111.jpg',           alt: 'Pommes with sauce' }
];

const INITIAL_COUNT = 12;

function Lightbox({ index, onClose, onPrev, onNext }) {
  const t = useT();
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label={t.gallery.close}>✕</button>

      <button
        className="lightbox__arrow lightbox__arrow--prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label={t.gallery.prev}
      >
        ‹
      </button>

      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <img
          src={`/gallery/${encodeURIComponent(photo.file)}`}
          alt={photo.alt}
          decoding="async"
        />
        <p className="lightbox__caption">{photo.alt}</p>
      </div>

      <button
        className="lightbox__arrow lightbox__arrow--next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label={t.gallery.next}
      >
        ›
      </button>

      <span className="lightbox__counter">{index + 1} / {photos.length}</span>
    </div>
  );
}

export function Gallery() {
  const t = useT();
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visible = expanded ? photos : photos.slice(0, INITIAL_COUNT);

  const openLightbox = (file) => {
    const idx = photos.findIndex((p) => p.file === file);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + photos.length) % photos.length), []);

  const goNext = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % photos.length), []);

  return (
    <>
      <section id="gallery" className="gallery container">
        <header className="section__head reveal">
          <h2>
            {t.gallery.titleA}<em>{t.gallery.titleEm}</em>{t.gallery.titleB}
          </h2>
          <p>{t.gallery.sub}</p>
        </header>

        <div className="gallery__grid">
          {visible.map((p) => (
            <figure
              key={p.file}
              className="gallery__item"
              onClick={() => openLightbox(p.file)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(p.file)}
            >
              <img
                src={`/gallery/${encodeURIComponent(p.file)}`}
                alt={p.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>

        {photos.length > INITIAL_COUNT && (
          <div className="gallery__more">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? t.gallery.showLess : t.gallery.showMore}
            </button>
          </div>
        )}
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
