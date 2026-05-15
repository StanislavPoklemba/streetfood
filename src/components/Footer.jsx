import { useState } from 'react';
import { Icon } from './Icon.jsx';
import { useT } from '../i18n/LanguageContext.jsx';

const LOGO_BASE = 'https://www.streetfood-festival.eu/pics/partner/';

function PartnerLogo({ partner }) {
  const sources = [
    LOGO_BASE + partner.logo,
    `https://icons.duckduckgo.com/ip3/${partner.domain}.ico`,
  ];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="footer__partners-fallback">{partner.name}</span>;
  }

  return (
    <img
      src={sources[idx]}
      alt={partner.name}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (idx < sources.length - 1) setIdx(idx + 1);
        else setFailed(true);
      }}
    />
  );
}

const partners = [
  // Media
  { name: 'Kronen Zeitung', url: 'https://www.krone.at/', domain: 'krone.at', logo: 'kronenzeitung_logo.png' },
  { name: 'Kleine Zeitung', url: 'https://www.kleinezeitung.at/', domain: 'kleinezeitung.at', logo: 'kleinezeitung_logo.jpg' },
  { name: 'Tips', url: 'https://www.tips.at/', domain: 'tips.at', logo: 'tips_logo.gif' },
  { name: 'BVZ', url: 'https://www.bvz.at/', domain: 'bvz.at', logo: 'BVZ_logo.gif' },
  { name: 'Salzkammergut Bad Ischl', url: 'https://badischl.salzkammergut.at/', domain: 'salzkammergut.at', logo: 'tourismusverband_badischl_logo.gif' },
  { name: 'STV1', url: 'https://www.stv1.at/', domain: 'stv1.at', logo: 'skgtv.png' },
  { name: 'Ischler Woche', url: 'https://www.ischlerwoche.at/', domain: 'ischlerwoche.at', logo: 'ischlerwoche_logo.gif' },
  { name: 'Vienna.at', url: 'https://www.vienna.at/', domain: 'vienna.at', logo: 'vienna_logo.jpg' },
  { name: 'MeinBezirk', url: 'https://www.meinbezirk.at/', domain: 'meinbezirk.at', logo: 'MeinBezirk.jpg' },
  { name: 'freizeit-tirol.at', url: 'https://www.freizeit-tirol.at/', domain: 'freizeit-tirol.at', logo: 'freizeit_tirol_logo.gif' },
  { name: 'Kirchdorf', url: 'https://www.kirchdorf.at/', domain: 'kirchdorf.at', logo: 'kirchdorf.jpg' },
  { name: 'Treffpunkt Ried', url: 'https://www.ried.com/', domain: 'ried.com', logo: 'ried.jpg' },
  // Ticketing & Venues
  { name: 'oeticket', url: 'https://www.oeticket.com/', domain: 'oeticket.com', logo: 'oeticket_logo.jpg' },
  { name: '!ticket', url: 'https://service.oeticket.com/', domain: 'service.oeticket.com', logo: 'oeticket_logo.jpg' },
  { name: 'Wiener Stadthalle', url: 'https://www.stadthalle.com/en', domain: 'stadthalle.com', logo: 'wiener_stadthalle_logo.jpg' },
  // Festival & Brand
  { name: 'Stage Culinarium', url: 'http://www.stage-culinarium.at/', domain: 'stage-culinarium.at', logo: 'stageculinarium_logo.gif' },
  { name: 'Wildstyle & Tattoo Messe', url: 'https://www.wildstyle.at/messe/en/', domain: 'wildstyle.at', logo: 'wildstyle_logo.gif' },
  // City & Regional Partners
  { name: 'Stadt Oberwart', url: 'https://www.oberwart.gv.at/', domain: 'oberwart.gv.at', logo: 'oberwart.jpg' },
  { name: 'Stadtgemeinde Judenburg', url: 'https://www.judenburg.at/de/', domain: 'judenburg.at', logo: 'judenburg.jpg' },
  { name: 'Kremsmünster', url: 'https://www.kremsmuenster.at/', domain: 'kremsmuenster.at', logo: 'kremsmuenster.jpg' },
  { name: 'Garsten', url: 'https://www.garsten.at/', domain: 'garsten.at', logo: 'garsten.jpg' },
  { name: 'Stadtmarketing Traun', url: 'https://www.stadtmarketing-traun.at/', domain: 'stadtmarketing-traun.at', logo: 'traun.jpg' },
  { name: 'Rohrbach-Berg', url: 'https://www.rohrbach-berg.at/', domain: 'rohrbach-berg.at', logo: 'rohrbach.jpg' },
  { name: 'Stadtgemeinde Althofen', url: 'https://althofen.gv.at/', domain: 'althofen.gv.at', logo: 'althofen.jpg' },
  { name: 'Stadtgemeinde Mattighofen', url: 'https://www.mattighofen.at/', domain: 'mattighofen.at', logo: 'mattighofen.jpg' },
  { name: 'St. Johann Salzburg', url: 'https://www.st.johann.at/', domain: 'st.johann.at', logo: 'stjohann.jpg' },
  { name: 'St. Johann in Tirol', url: 'https://www.treffpunkt-stjohann.at/', domain: 'treffpunkt-stjohann.at', logo: 'stjohann_tirol.jpg' },
  { name: 'Ebreichsdorf', url: 'https://www.ebreichsdorf.at/', domain: 'ebreichsdorf.at', logo: 'ebreichsdorf.jpg' },
  { name: 'Wörgl Stadtmarketing', url: 'https://www.woergl.at/', domain: 'woergl.at', logo: 'woergl.jpg' },
  { name: 'Gloggnitz Stadtmarketing', url: 'https://www.stadtmarketing-gloggnitz.com/', domain: 'stadtmarketing-gloggnitz.com', logo: 'gloggnitz.jpg' },
  { name: 'Gerasdorf bei Wien', url: 'https://www.gerasdorf-wien.gv.at/', domain: 'gerasdorf-wien.gv.at', logo: 'gerasdorf.jpg' },
  { name: 'Wilhelmsburg', url: 'https://www.wilhelmsburg.at/', domain: 'wilhelmsburg.at', logo: 'wilhelmsburg.jpg' },
  { name: 'Fürstenfeld', url: 'https://www.fuerstenfeld.gv.at/', domain: 'fuerstenfeld.gv.at', logo: 'fuerstenfeld.jpg' },
];

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__partners">
          <span className="footer__partners-label">{t.footer.partners}</span>
          <ul>
            {partners.map((p) => (
              <li key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={p.name}
                  aria-label={p.name}
                >
                  <PartnerLogo partner={p} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="nav__brand">
              <span className="nav__brand-mark">
                <Icon name="flame-card" />
              </span>
              <span className="nav__brand-text">
                <strong>European</strong>
                <small>Street Food Festival</small>
              </span>
            </a>
            <p className="footer__tag">{t.footer.tag}</p>
          </div>

          <div className="footer__col">
            <h5>{t.footer.getInvolved}</h5>
            <ul>
              <li><a href="mailto:office@stage-culinarium.at">{t.footer.becomeExhibitor}</a></li>
              <li><a href="#contact">{t.footer.contact}</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>{t.footer.contactTitle}</h5>
            <p className="footer__address">
              <strong>Stage Culinarium Catering GmbH</strong>
              Sandteneck 9<br />
              A-4820 Bad Ischl<br />
              {t.footer.country}
            </p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/streetfoodfestivaleu"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Icon name="facebook" />
              </a>
              <a
                href="https://www.instagram.com/streetfoodfestival.eu"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Icon name="instagram" />
              </a>
              <a
                href="mailto:office@stage-culinarium.at"
                aria-label="Email the festival office"
              >
                <Icon name="mail" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span>{t.footer.legalA.replace('{year}', year)}</span>
          <span>{t.footer.legalB}</span>
        </div>
      </div>
    </footer>
  );
}
