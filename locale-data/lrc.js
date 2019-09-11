!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.lrc = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'lrc',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'سال',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ما',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'روٙز',
          relative: {0: 'أمروٙ', 1: 'شوٙصوٙ', '-1': 'دیروٙز'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ساأت',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'دئیقە',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ثانیە',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'lrc-IQ', parentLocale: 'lrc'},
  ];
});
