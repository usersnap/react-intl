!(function(e, a) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = a())
    : 'function' == typeof define && define.amd
    ? define(a)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.mt = a()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'mt',
      pluralRuleFunction: function(e, a) {
        var t = String(e).split('.'),
          i = Number(t[0]) == e && t[0].slice(-2);
        return a
          ? 'other'
          : 1 == e
          ? 'one'
          : 0 == e || (i >= 2 && i <= 10)
          ? 'few'
          : i >= 11 && i <= 19
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'Sena',
          relative: {
            0: 'din is-sena',
            1: 'Is-sena d-dieħla',
            '-1': 'Is-sena li għaddiet',
          },
          relativeTime: {
            future: {other: '+{0} y'},
            past: {
              one: '{0} sena ilu',
              few: '{0} snin ilu',
              many: '{0} snin ilu',
              other: '{0} snin ilu',
            },
          },
        },
        month: {
          displayName: 'Xahar',
          relative: {
            0: 'Dan ix-xahar',
            1: 'Ix-xahar id-dieħel',
            '-1': 'Ix-xahar li għadda',
          },
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Jum',
          relative: {0: 'Illum', 1: 'Għada', '-1': 'Ilbieraħ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Siegħa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minuta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekonda',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
  ];
});
