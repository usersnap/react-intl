!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.mo = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'mo',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = !a[1],
          o = Number(a[0]) == e && a[0].slice(-2);
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : 1 == e && r
          ? 'one'
          : !r || 0 == e || (1 != e && o >= 1 && o <= 19)
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'Year',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Month',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Day',
          relative: {0: 'today', 1: 'tomorrow', '-1': 'yesterday'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Hour',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minute',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Second',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
  ];
});
