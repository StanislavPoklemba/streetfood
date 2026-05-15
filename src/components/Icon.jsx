// Inline SVG icon library — no emoji anywhere on the site.
// Every icon takes its color from `currentColor` so it can be styled from CSS.

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false
};

export function Icon({ name, className = 'icon', size }) {
  const props = { ...base, className };
  if (size) {
    props.width = size;
    props.height = size;
  }

  switch (name) {
    case 'pin':
      return (
        <svg {...props}>
          <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case 'utensils':
      return (
        <svg {...props}>
          <path d="M7 3v18M5 3v6a2 2 0 0 0 4 0V3M17 14V3a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2h2v7" />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg {...props}>
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...props}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case 'flame':
      return (
        <svg {...props}>
          <path d="M12 2s4 4.5 4 8a4 4 0 1 1-8 0c0-1.5.6-2.8 1.2-3.6C9 8.6 9.5 9.6 10 10c0-2 .8-5 2-8Z" />
          <path d="M9 16a3 3 0 0 0 6 0" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case 'ticket':
      return (
        <svg {...props}>
          <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z" />
          <path d="M14 6v12" strokeDasharray="2 2" />
        </svg>
      );
    case 'check':
      return (
        <svg {...props}>
          <path d="m5 12 5 5L20 7" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...props}>
          <path d="M20 4c0 9-7 16-16 16 0-9 7-16 16-16Z" />
          <path d="M4 20c4-4 8-8 12-12" />
        </svg>
      );
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...props}>
          <path d="M6 6 18 18M18 6 6 18" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...props}>
          <path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...props}>
          <path d="M14 8h2.5V5H14c-1.7 0-3 1.3-3 3v2H9v3h2v8h3v-8h2.5l.5-3H14V8.5c0-.3.2-.5.5-.5Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );

    /* ---------- Cuisine glyphs ---------- */
    case 'taco':
      return (
        <svg {...props}>
          <path d="M3 17a9 9 0 0 1 18 0Z" />
          <path d="M7 17c1-2 3-3 5-3s4 1 5 3" />
          <path d="M10 14c0-1 1-2 2-2s2 1 2 2" />
        </svg>
      );
    case 'burger':
      return (
        <svg {...props}>
          <path d="M4 9a8 8 0 0 1 16 0" />
          <path d="M3 13h18" />
          <path d="M4 16h16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        </svg>
      );
    case 'pizza':
      return (
        <svg {...props}>
          <path d="M12 3 3 19h18Z" />
          <circle cx="10" cy="14" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="14" cy="14" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="12" cy="10" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'noodles':
      return (
        <svg {...props}>
          <path d="M3 10a9 9 0 0 1 18 0" />
          <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
          <path d="M8 12c0 4 1 7 4 7s4-3 4-7" />
          <path d="M10 6v-2M14 6v-3M12 6V3" />
        </svg>
      );
    case 'gyros':
      return (
        <svg {...props}>
          <path d="M9 3h6l1 4-1 12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2L8 7Z" />
          <path d="M9 8h6M8.5 12h7M9 16h6" />
        </svg>
      );
    case 'flame-card':
      return (
        <svg {...props}>
          <path d="M12 2s5 5 5 9a5 5 0 1 1-10 0c0-1.5.6-3 1.5-4 .2 1 .8 2 1.5 2.5C10 7 11 4.5 12 2Z" />
        </svg>
      );

    case 'fish':
      return (
        <svg {...props}>
          <path d="M3 12c3-5 8-6 12-6 3 0 5 1 6 2-1 1-3 2-6 2M3 12c3 5 8 6 12 6 3 0 5-1 6-2-1-1-3-2-6-2" />
          <path d="M15 12c0-2 1-4 3-5M15 12c0 2 1 4 3 5" />
          <circle cx="7" cy="11" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      );

    case 'wok':
      return (
        <svg {...props}>
          <path d="M3 11h18a8 8 0 0 1-9 8 8 8 0 0 1-9-8Z" />
          <path d="M3 11l-2-1M21 11l2-1" />
          <path d="M9 7c0-1 1-2 2-1.5M13 5c0-1 1-2 2-1.5M11 3c0-1 1-1.5 1.5-1" />
        </svg>
      );

    case 'fried':
      return (
        <svg {...props}>
          <path d="M5 14a7 7 0 0 1 14 0v1a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z" />
          <circle cx="9" cy="11" r="1.2" />
          <circle cx="13.5" cy="9.5" r="1.2" />
          <circle cx="15.5" cy="13" r="1.2" />
          <circle cx="10.5" cy="14.5" r="1.2" />
        </svg>
      );

    case 'corndog':
      return (
        <svg {...props}>
          <path d="M5 4l3-1 13 13-1 3-2 1-3-1L4 7l1-2Z" />
          <path d="M8 6l-2 2M11 9l-2 2M14 12l-2 2M17 15l-2 2" />
        </svg>
      );

    case 'skewer':
      return (
        <svg {...props}>
          <path d="M3 4l18 16" />
          <rect x="6" y="5" width="4" height="4" rx="0.6" transform="rotate(45 8 7)" />
          <rect x="10" y="9" width="4" height="4" rx="0.6" transform="rotate(45 12 11)" />
          <rect x="14" y="13" width="4" height="4" rx="0.6" transform="rotate(45 16 15)" />
        </svg>
      );

    case 'fries':
      return (
        <svg {...props}>
          <path d="M6 9h12l-1.5 11a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z" />
          <path d="M9 9V4M12 9V3M15 9V5" />
          <path d="M6 12h12" />
        </svg>
      );

    case 'burrito':
      return (
        <svg {...props}>
          <path d="M4 17c2-6 8-12 14-13l2 2c-1 6-7 12-13 14Z" />
          <path d="M7 14c2-4 5-7 9-9M9 16c2-4 5-7 9-9" />
        </svg>
      );

    case 'beer':
      return (
        <svg {...props}>
          <path d="M6 7h10v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z" />
          <path d="M16 10h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
          <path d="M8 4c0-1 1-2 2-1 1-1 3-1 3 1 1 0 2 1 1 2H8c-1-1 0-2 0-2Z" />
        </svg>
      );

    case 'glass':
      return (
        <svg {...props}>
          <path d="M7 4h10l-1 9a4 4 0 0 1-8 0Z" />
          <path d="M12 17v4M9 21h6" />
        </svg>
      );

    case 'bowl':
      return (
        <svg {...props}>
          <path d="M3 11h18a9 9 0 0 1-18 0Z" />
          <path d="M9 4l6 4M11 3l4 5" />
        </svg>
      );

    case 'drumstick':
      return (
        <svg {...props}>
          <path d="M14 4a5 5 0 0 1 6 6c0 2-2 3-4 3l-1 4-3 1-3 3-2-1-1-2 3-3 1-3c0-2 1-4 4-4Z" />
          <path d="M7 17l-2 2M8 19l-2 2" />
        </svg>
      );

    case 'sausage':
      return (
        <svg {...props}>
          <path d="M4 15c0 3 2 5 5 5s5-2 5-5L11 5C8 5 5 7 5 10Z" />
          <path d="M14 15c2 0 4-1 5-3 1-2 1-5-1-7" />
          <path d="M7 11l2-1M8 14l2-1" />
        </svg>
      );

    case 'flatbread':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="12" rx="9" ry="7" />
          <circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="14" cy="9" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="11" cy="14" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      );

    case 'churro':
      return (
        <svg {...props}>
          <path d="M5 4c1 2 0 3-1 4M7 6c1 2 0 3-1 4M9 8c1 2 0 3-1 4M11 10c1 2 0 3-1 4M13 12c1 2 0 3-1 4M15 14c1 2 0 3-1 4" />
          <path d="M4 5l16 14" />
        </svg>
      );

    case 'pie':
      return (
        <svg {...props}>
          <path d="M3 16a9 4 0 0 0 18 0v-2H3Z" />
          <path d="M5 14c1-4 4-7 7-7s6 3 7 7" />
          <path d="M9 11l1-1M13 10l1-1M11 13l1-1" />
        </svg>
      );

    case 'cake-ring':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="6" ry="2" />
          <path d="M6 6v12M18 6v12" />
          <ellipse cx="12" cy="10" rx="6" ry="2" />
          <ellipse cx="12" cy="14" rx="6" ry="2" />
          <ellipse cx="12" cy="18" rx="6" ry="2" />
        </svg>
      );

    case 'pancakes':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="8" rx="8" ry="2" />
          <ellipse cx="12" cy="12" rx="8" ry="2" />
          <ellipse cx="12" cy="16" rx="8" ry="2" />
          <path d="M11 6c0-2 2-3 3-2" />
        </svg>
      );

    default:
      return null;
  }
}
