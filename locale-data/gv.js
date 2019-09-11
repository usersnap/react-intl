!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.gv = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'gv',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1],
          o = r.slice(-1),
          n = r.slice(-2);
        return t
          ? 'other'
          : i && 1 == o
          ? 'one'
          : i && 2 == o
          ? 'two'
          : !i || (0 != n && 20 != n && 40 != n && 60 != n && 80 != n)
          ? i
            ? 'other'
            : 'many'
          : 'few';
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
