!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.sg = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'sg',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Ngû',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Nze',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Lâ',
          relative: {0: 'Lâsô', 1: 'Kêkerêke', '-1': 'Bîrï'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ngbonga',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Ndurü ngbonga',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Nzîna ngbonga',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
  ];
});
