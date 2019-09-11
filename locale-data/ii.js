!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.ii = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'ii',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ꈎ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ꆪ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ꑍ',
          relative: {
            0: 'ꀃꑍ',
            1: 'ꃆꏂꑍ',
            2: 'ꌕꀿꑍ',
            '-2': 'ꎴꂿꋍꑍ',
            '-1': 'ꀋꅔꉈ',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ꄮꈉ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ꃏ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ꇙ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
  ];
});
