!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.sah = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'sah',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Сыл',
          relative: {0: 'быйыл', 1: 'эһиил', '-1': 'Былырыын'},
          relativeTime: {
            future: {other: '{0} сылынан'},
            past: {other: '{0} сыл ынараа өттүгэр'},
          },
        },
        month: {
          displayName: 'Ый',
          relative: {0: 'бу ый', 1: 'аныгыскы ый', '-1': 'ааспыт ый'},
          relativeTime: {
            future: {other: '{0} ыйынан'},
            past: {other: '{0} ый ынараа өттүгэр'},
          },
        },
        day: {
          displayName: 'Күн',
          relative: {
            0: 'Бүгүн',
            1: 'Сарсын',
            2: 'Өйүүн',
            '-2': 'Иллэрээ күн',
            '-1': 'Бэҕэһээ',
          },
          relativeTime: {
            future: {other: '{0} күнүнэн'},
            past: {other: '{0} күн ынараа өттүгэр'},
          },
        },
        hour: {
          displayName: 'Чаас',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {other: '{0} чааһынан'},
            past: {other: '{0} чаас ынараа өттүгэр'},
          },
        },
        minute: {
          displayName: 'Мүнүүтэ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '{0} мүнүүтэннэн'},
            past: {other: '{0} мүнүүтэ ынараа өттүгэр'},
          },
        },
        second: {
          displayName: 'Сөкүүндэ',
          relative: {0: 'билигин'},
          relativeTime: {
            future: {other: '{0} сөкүүндэннэн'},
            past: {other: '{0} сөкүүндэ ынараа өттүгэр'},
          },
        },
      },
    },
  ];
});
