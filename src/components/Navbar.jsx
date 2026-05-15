import { useEffect, useState } from 'react';
import { Icon } from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const linkKeys = [
  { href: '#about', key: 'about' },
  { href: '#food', key: 'food' },
  { href: '#drinks', key: 'drinks' },
  { href: '#tour', key: 'tour' },
  { href: '#gallery', key: 'gallery' },
  { href: '#contact', key: 'contact' }
];

export function Navbar() {
  const { lang, toggle, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = linkKeys.map((l) => l.href.slice(1));

    const onScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) current = id;
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', close);
      document.body.classList.remove('is-locked');
    };
  }, [open]);

  const otherLang = lang === 'en' ? 'DE' : 'EN';
  const currentLangLabel = lang.toUpperCase();

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={t.nav.brand}>
          <span className="nav__brand-text">{t.nav.brand}</span>
        </a>

        <nav aria-label="Primary">
          <ul
            id="primary-nav"
            className={`nav__links ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(false)}
          >
            {linkKeys.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'is-active' : ''}
                  aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                >
                  {t.nav.links[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav__lang"
          onClick={toggle}
          aria-label={`${t.nav.switchLang} (${otherLang})`}
          title={`${t.nav.switchLang} → ${otherLang}`}
        >
          {currentLangLabel}
        </button>

        <a href="#tour" className="btn btn--primary nav__cta">
          {t.nav.cta}
          <Icon name="arrow-right" />
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
