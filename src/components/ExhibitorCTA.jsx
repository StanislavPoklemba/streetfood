import { Icon } from './Icon.jsx';
import { useT } from '../i18n/LanguageContext.jsx';

export function ExhibitorCTA() {
  const t = useT();
  return (
    <section id="contact" className="exhibitor container">
      <div className="exhibitor__inner">
        <div className="exhibitor__grid">
          <div className="reveal">
            <span className="eyebrow">{t.exhibitor.eyebrow}</span>
            <h2>{t.exhibitor.titleA}<em>{t.exhibitor.titleEm}</em>{t.exhibitor.titleB}</h2>
            <p>{t.exhibitor.sub}</p>
            <div className="exhibitor__actions">
              <a
                className="btn btn--gold"
                href="https://mail.google.com/mail/?view=cm&to=office@stage-culinarium.at&su=Exhibitor%20enquiry%20%E2%80%94%20European%20Street%20Food%20Festival"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="mail" />
                {t.exhibitor.apply}
              </a>
              <a className="btn btn--ghost" href="#tour" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                {t.exhibitor.seeTour}
                <Icon name="arrow-right" />
              </a>
            </div>
          </div>

          <aside className="exhibitor__contact reveal reveal--delay-2">
            <h4>{t.exhibitor.officeTitle}</h4>
            <dl>
              <div>
                <dt>{t.exhibitor.organiser}</dt>
                <dd>{t.exhibitor.organiserVal}</dd>
              </div>
              <div>
                <dt>{t.exhibitor.address}</dt>
                <dd>{t.exhibitor.addressVal}</dd>
              </div>
              <div>
                <dt>{t.exhibitor.email}</dt>
                <dd>
                  <a href="mailto:office@stage-culinarium.at">
                    office@stage-culinarium.at
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
