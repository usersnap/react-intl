!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.ak = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'ak',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Afe',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Bosome',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Da',
          relative: {0: 'Ndɛ', 1: 'Ɔkyena', '-1': 'Ndeda'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Dɔnhwer',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Sema',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sɛkɛnd',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
  ];
});
