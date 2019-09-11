!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.kk = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'kk',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          o = Number(a[0]) == e,
          r = o && a[0].slice(-1);
        return t
          ? 6 == r || 9 == r || (o && 0 == r && 0 != e)
            ? 'many'
            : 'other'
          : 1 == e
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'жыл',
          relative: {0: 'биылғы жыл', 1: 'келесі жыл', '-1': 'былтырғы жыл'},
          relativeTime: {
            future: {one: '{0} жылдан кейін', other: '{0} жылдан кейін'},
            past: {one: '{0} жыл бұрын', other: '{0} жыл бұрын'},
          },
        },
        month: {
          displayName: 'ай',
          relative: {0: 'осы ай', 1: 'келесі ай', '-1': 'өткен ай'},
          relativeTime: {
            future: {one: '{0} айдан кейін', other: '{0} айдан кейін'},
            past: {one: '{0} ай бұрын', other: '{0} ай бұрын'},
          },
        },
        day: {
          displayName: 'күн',
          relative: {
            0: 'бүгін',
            1: 'ертең',
            2: 'бүрсігүні',
            '-2': 'алдыңгүні',
            '-1': 'кеше',
          },
          relativeTime: {
            future: {one: '{0} күннен кейін', other: '{0} күннен кейін'},
            past: {one: '{0} күн бұрын', other: '{0} күн бұрын'},
          },
        },
        hour: {
          displayName: 'сағат',
          relative: {0: 'осы сағат'},
          relativeTime: {
            future: {one: '{0} сағаттан кейін', other: '{0} сағаттан кейін'},
            past: {one: '{0} сағат бұрын', other: '{0} сағат бұрын'},
          },
        },
        minute: {
          displayName: 'минут',
          relative: {0: 'осы минут'},
          relativeTime: {
            future: {one: '{0} минуттан кейін', other: '{0} минуттан кейін'},
            past: {one: '{0} минут бұрын', other: '{0} минут бұрын'},
          },
        },
        second: {
          displayName: 'секунд',
          relative: {0: 'қазір'},
          relativeTime: {
            future: {one: '{0} секундтан кейін', other: '{0} секундтан кейін'},
            past: {one: '{0} секунд бұрын', other: '{0} секунд бұрын'},
          },
        },
      },
    },
  ];
});
