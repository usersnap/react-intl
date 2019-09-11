!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.zgh = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'zgh',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ⴰⵙⴳⴳⵯⴰⵙ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ⴰⵢⵢⵓⵔ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ⴰⵙⵙ',
          relative: {0: 'ⴰⵙⵙⴰ', 1: 'ⴰⵙⴽⴽⴰ', '-1': 'ⵉⴹⵍⵍⵉ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ⵜⴰⵙⵔⴰⴳⵜ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ⵜⵓⵙⴷⵉⴷⵜ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ⵜⴰⵙⵉⵏⵜ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
  ];
});
