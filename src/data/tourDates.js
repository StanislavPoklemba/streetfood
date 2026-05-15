// All 2026 tour dates for the European Street Food Festival.
// `start` and `end` are ISO date strings; the UI compares `end` against
// today's date to mark events as past or upcoming.

export const tourDates = [
  { start: '2026-03-21', end: '2026-03-22', city: 'Kirchdorf', region: 'Upper Austria', venue: 'Stadtplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-03-28', end: '2026-03-29', city: 'Schladming', region: 'Styria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-04-04', end: '2026-04-06', city: 'Innsbruck', region: 'Tyrol', venue: 'Marktplatz', hours: 'Fri 14–22 · Sat 11–22 · Sun 11–20' },
  { start: '2026-04-11', end: '2026-04-12', city: 'St. Johann in Tirol', region: 'Tyrol', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-04-18', end: '2026-04-19', city: 'Ried im Innkreis', region: 'Upper Austria', venue: 'Stadtplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-04-25', end: '2026-04-26', city: 'St. Johann im Pongau', region: 'Salzburg', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-05-01', end: '2026-05-03', city: 'Wörgl', region: 'Tyrol', venue: 'Stadtplatz', hours: 'Fri 14–22 · Sat 11–22 · Sun 11–20' },
  { start: '2026-05-09', end: '2026-05-10', city: 'Klagenfurt', region: 'Carinthia', venue: 'Neuer Platz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-05-16', end: '2026-05-17', city: 'Gloggnitz', region: 'Lower Austria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-05-23', end: '2026-05-25', city: 'Gerasdorf', region: 'Lower Austria', venue: 'G3 Shopping Resort', hours: 'Sat 11–22 · Sun 11–20 · Mon 11–18' },
  { start: '2026-05-30', end: '2026-05-31', city: 'Wilhelmsburg', region: 'Lower Austria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-06-06', end: '2026-06-07', city: 'Fürstenfeld', region: 'Styria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-06-13', end: '2026-06-14', city: 'Oberwart', region: 'Burgenland', venue: 'EO Einkaufszentrum', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-06-20', end: '2026-06-21', city: 'Judenburg', region: 'Styria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-06-27', end: '2026-06-28', city: 'Kremsmünster', region: 'Upper Austria', venue: 'Marktplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-07-11', end: '2026-07-12', city: 'Garsten', region: 'Upper Austria', venue: 'Klosterhof', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-07-18', end: '2026-07-19', city: 'Fischamend', region: 'Lower Austria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-07-25', end: '2026-07-26', city: 'Hainburg', region: 'Lower Austria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-08-01', end: '2026-08-02', city: 'Ebreichsdorf', region: 'Lower Austria', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-08-08', end: '2026-08-09', city: 'Krems', region: 'Lower Austria', venue: 'Südtirolerplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-08-15', end: '2026-08-16', city: 'Salzburg', region: 'Salzburg', venue: 'Volksgarten', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-08-22', end: '2026-08-23', city: 'Bad Ischl', region: 'Upper Austria', venue: 'Esplanade', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-08-29', end: '2026-08-30', city: 'Kufstein', region: 'Tyrol', venue: 'Unterer Stadtplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-09-05', end: '2026-09-06', city: 'Vienna', region: 'Vienna', venue: 'Donauinsel', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-09-12', end: '2026-09-13', city: 'Traun', region: 'Upper Austria', venue: 'Schlosspark', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-09-19', end: '2026-09-20', city: 'Mondsee', region: 'Upper Austria', venue: 'Marktplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-09-26', end: '2026-09-27', city: 'Rohrbach-Berg', region: 'Upper Austria', venue: 'Stadtplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-10-03', end: '2026-10-04', city: 'Gallneukirchen', region: 'Upper Austria', venue: 'Marktplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-10-10', end: '2026-10-11', city: 'Althofen', region: 'Carinthia', venue: 'Hauptplatz', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-10-17', end: '2026-10-18', city: 'Salzburg', region: 'Salzburg', venue: 'Volksgarten', hours: 'Sat 11–22 · Sun 11–20' },
  { start: '2026-10-24', end: '2026-10-26', city: 'Mattighofen', region: 'Upper Austria', venue: 'Stadtplatz', hours: 'Sat 11–22 · Sun 11–20 · Mon 11–18' }
];
