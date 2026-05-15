import { useMemo, useState } from 'react';
import { Icon } from './Icon.jsx';
import { tourDates } from '../data/tourDates.js';
import { useT } from '../i18n/LanguageContext.jsx';

function formatRange(startISO, endISO, months) {
  const start = new Date(startISO);
  const end = new Date(endISO);
  const sameMonth = start.getMonth() === end.getMonth();
  return sameMonth
    ? `${start.getDate()}–${end.getDate()} ${months[start.getMonth()]}`
    : `${start.getDate()} ${months[start.getMonth()]} – ${end.getDate()} ${months[end.getMonth()]}`;
}

function stripTime(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

export function TourDates() {
  const t = useT();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const today = stripTime(new Date());

  const todayDate = new Date();
  const dayOfWeek = todayDate.getDay();
  const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const weekStart = stripTime(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - daysFromMonday));
  const weekEnd = weekStart + 6 * 24 * 60 * 60 * 1000;

  const enriched = useMemo(
    () =>
      tourDates.map((d) => {
        const isPast = stripTime(new Date(d.end)) < today;
        const startTs = stripTime(new Date(d.start));
        const isThisWeek = !isPast && startTs >= weekStart && startTs <= weekEnd;
        return { ...d, isPast, isThisWeek };
      }),
    [today, weekStart, weekEnd]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return enriched.filter((d) => {
      if (filter === 'upcoming' && d.isPast) return false;
      if (!q) return true;
      return (
        d.city.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.venue.toLowerCase().includes(q)
      );
    });
  }, [enriched, query, filter]);

  const upcomingCount = enriched.filter((d) => !d.isPast).length;

  return (
    <section id="tour" className="tour container">
      <header className="tour__head reveal">
        <div>
          <span className="eyebrow">{t.tour.eyebrow}</span>
          <h2>
            {t.tour.titleA}<em>{t.tour.titleEm}</em>{t.tour.titleB}
          </h2>
          <p>{t.tour.sub}</p>
        </div>
      </header>

      <div className="tour__controls reveal">
        <label className="tour__search" aria-label={t.tour.searchAria}>
          <Icon name="search" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.tour.searchPlaceholder}
            autoComplete="off"
          />
        </label>

        <div className="tour__filter" role="tablist" aria-label={t.tour.filterAria}>
          <button
            type="button"
            className={filter === 'all' ? 'is-active' : ''}
            onClick={() => setFilter('all')}
            role="tab"
            aria-selected={filter === 'all'}
          >
            {t.tour.all}
          </button>
          <button
            type="button"
            className={filter === 'upcoming' ? 'is-active' : ''}
            onClick={() => setFilter('upcoming')}
            role="tab"
            aria-selected={filter === 'upcoming'}
          >
            {t.tour.upcoming} ({upcomingCount})
          </button>
        </div>

        <span className="tour__count">
          {t.tour.showing} {filtered.length} {t.tour.of} {enriched.length}
        </span>
      </div>

      <div className="tour__list">
        {filtered.length === 0 ? (
          <div className="tour__empty">{t.tour.empty}</div>
        ) : (
          filtered.map((d) => (
            <article
              key={`${d.city}-${d.start}`}
              className={`date-card ${d.isPast ? 'date-card--past' : 'date-card--upcoming'} ${d.isThisWeek ? 'date-card--thisweek' : ''}`}
            >
              <div className="date-card__top">
                <div className="date-card__date">
                  <small>{new Date(d.start).getFullYear()}</small>
                  {formatRange(d.start, d.end, t.tour.months)}
                </div>
                <span className={`date-card__badge ${d.isThisWeek ? 'date-card__badge--thisweek' : ''}`}>
                  {d.isPast ? t.tour.badgePast : d.isThisWeek ? t.tour.badgeThisWeek : t.tour.badgeUpcoming}
                </span>
              </div>

              <div className="date-card__city">
                {d.city}
                <span style={{
                  display: 'block',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  color: 'var(--color-text-muted)',
                  marginTop: '4px',
                  letterSpacing: '0.04em'
                }}>{d.region}</span>
              </div>

              <div className="date-card__meta">
                <div>
                  <Icon name="pin" />
                  <span>{d.venue}</span>
                </div>
                <div>
                  <Icon name="clock" />
                  <span>{d.hours}</span>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
