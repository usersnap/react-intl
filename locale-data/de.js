!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.de = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'de',
      pluralRuleFunction: function(e, t) {
        var n = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && n ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Jahr',
          relative: {
            0: 'dieses Jahr',
            1: 'nächstes Jahr',
            '-1': 'letztes Jahr',
          },
          relativeTime: {
            future: {one: 'in {0} Jahr', other: 'in {0} Jahren'},
            past: {one: 'vor {0} Jahr', other: 'vor {0} Jahren'},
          },
        },
        month: {
          displayName: 'Monat',
          relative: {
            0: 'diesen Monat',
            1: 'nächsten Monat',
            '-1': 'letzten Monat',
          },
          relativeTime: {
            future: {one: 'in {0} Monat', other: 'in {0} Monaten'},
            past: {one: 'vor {0} Monat', other: 'vor {0} Monaten'},
          },
        },
        day: {
          displayName: 'Tag',
          relative: {
            0: 'heute',
            1: 'morgen',
            2: 'übermorgen',
            '-2': 'vorgestern',
            '-1': 'gestern',
          },
          relativeTime: {
            future: {one: 'in {0} Tag', other: 'in {0} Tagen'},
            past: {one: 'vor {0} Tag', other: 'vor {0} Tagen'},
          },
        },
        hour: {
          displayName: 'Stunde',
          relative: {0: 'in dieser Stunde'},
          relativeTime: {
            future: {one: 'in {0} Stunde', other: 'in {0} Stunden'},
            past: {one: 'vor {0} Stunde', other: 'vor {0} Stunden'},
          },
        },
        minute: {
          displayName: 'Minute',
          relative: {0: 'in dieser Minute'},
          relativeTime: {
            future: {one: 'in {0} Minute', other: 'in {0} Minuten'},
            past: {one: 'vor {0} Minute', other: 'vor {0} Minuten'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'jetzt'},
          relativeTime: {
            future: {one: 'in {0} Sekunde', other: 'in {0} Sekunden'},
            past: {one: 'vor {0} Sekunde', other: 'vor {0} Sekunden'},
          },
        },
      },
    },
    {locale: 'de-AT', parentLocale: 'de'},
    {locale: 'de-BE', parentLocale: 'de'},
    {locale: 'de-CH', parentLocale: 'de'},
    {locale: 'de-IT', parentLocale: 'de'},
    {locale: 'de-LI', parentLocale: 'de'},
    {locale: 'de-LU', parentLocale: 'de'},
  ];
});
