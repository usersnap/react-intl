!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.nb = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'nb',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'år',
          relative: {0: 'i år', 1: 'neste år', '-1': 'i fjor'},
          relativeTime: {
            future: {one: 'om {0} år', other: 'om {0} år'},
            past: {one: 'for {0} år siden', other: 'for {0} år siden'},
          },
        },
        month: {
          displayName: 'måned',
          relative: {
            0: 'denne måneden',
            1: 'neste måned',
            '-1': 'forrige måned',
          },
          relativeTime: {
            future: {one: 'om {0} måned', other: 'om {0} måneder'},
            past: {one: 'for {0} måned siden', other: 'for {0} måneder siden'},
          },
        },
        day: {
          displayName: 'dag',
          relative: {
            0: 'i dag',
            1: 'i morgen',
            2: 'i overmorgen',
            '-2': 'i forgårs',
            '-1': 'i går',
          },
          relativeTime: {
            future: {one: 'om {0} døgn', other: 'om {0} døgn'},
            past: {one: 'for {0} døgn siden', other: 'for {0} døgn siden'},
          },
        },
        hour: {
          displayName: 'time',
          relative: {0: 'denne timen'},
          relativeTime: {
            future: {one: 'om {0} time', other: 'om {0} timer'},
            past: {one: 'for {0} time siden', other: 'for {0} timer siden'},
          },
        },
        minute: {
          displayName: 'minutt',
          relative: {0: 'dette minuttet'},
          relativeTime: {
            future: {one: 'om {0} minutt', other: 'om {0} minutter'},
            past: {
              one: 'for {0} minutt siden',
              other: 'for {0} minutter siden',
            },
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'nå'},
          relativeTime: {
            future: {one: 'om {0} sekund', other: 'om {0} sekunder'},
            past: {
              one: 'for {0} sekund siden',
              other: 'for {0} sekunder siden',
            },
          },
        },
      },
    },
    {locale: 'nb-SJ', parentLocale: 'nb'},
  ];
});
