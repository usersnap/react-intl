!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.mzn = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'mzn',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'سال',
          relative: {0: 'امسال', 1: 'سال دیگه', '-1': 'پارسال'},
          relativeTime: {
            future: {other: '{0} سال دله'},
            past: {other: '{0} سال پیش'},
          },
        },
        month: {
          displayName: 'ماه',
          relative: {0: 'این ماه', 1: 'ماه ِبعد', '-1': 'ماه قبل'},
          relativeTime: {
            future: {other: '{0} ماه دله'},
            past: {other: '{0} ماه پیش'},
          },
        },
        day: {
          displayName: 'روز',
          relative: {0: 'اَمروز', 1: 'فِردا', '-1': 'دیروز'},
          relativeTime: {
            future: {other: '{0} روز دله'},
            past: {other: '{0} روز پیش'},
          },
        },
        hour: {
          displayName: 'ساعِت',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {other: '{0} ساعِت دله'},
            past: {other: '{0} ساعِت پیش'},
          },
        },
        minute: {
          displayName: 'دقیقه',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '{0} دقیقه دله'},
            past: {other: '{0} دَقه پیش'},
          },
        },
        second: {
          displayName: 'ثانیه',
          relative: {0: 'now'},
          relativeTime: {
            future: {other: '{0} ثانیه دله'},
            past: {other: '{0} ثانیه پیش'},
          },
        },
      },
    },
  ];
});
