!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.hi = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'hi',
      pluralRuleFunction: function(e, t) {
        return t
          ? 1 == e
            ? 'one'
            : 2 == e || 3 == e
            ? 'two'
            : 4 == e
            ? 'few'
            : 6 == e
            ? 'many'
            : 'other'
          : e >= 0 && e <= 1
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'वर्ष',
          relative: {0: 'इस वर्ष', 1: 'अगला वर्ष', '-1': 'पिछला वर्ष'},
          relativeTime: {
            future: {one: '{0} वर्ष में', other: '{0} वर्ष में'},
            past: {one: '{0} वर्ष पहले', other: '{0} वर्ष पहले'},
          },
        },
        month: {
          displayName: 'माह',
          relative: {0: 'इस माह', 1: 'अगला माह', '-1': 'पिछला माह'},
          relativeTime: {
            future: {one: '{0} माह में', other: '{0} माह में'},
            past: {one: '{0} माह पहले', other: '{0} माह पहले'},
          },
        },
        day: {
          displayName: 'दिन',
          relative: {
            0: 'आज',
            1: 'कल',
            2: 'परसों',
            '-2': 'बीता परसों',
            '-1': 'कल',
          },
          relativeTime: {
            future: {one: '{0} दिन में', other: '{0} दिन में'},
            past: {one: '{0} दिन पहले', other: '{0} दिन पहले'},
          },
        },
        hour: {
          displayName: 'घंटा',
          relative: {0: 'यह घंटा'},
          relativeTime: {
            future: {one: '{0} घंटे में', other: '{0} घंटे में'},
            past: {one: '{0} घंटे पहले', other: '{0} घंटे पहले'},
          },
        },
        minute: {
          displayName: 'मिनट',
          relative: {0: 'यह मिनट'},
          relativeTime: {
            future: {one: '{0} मिनट में', other: '{0} मिनट में'},
            past: {one: '{0} मिनट पहले', other: '{0} मिनट पहले'},
          },
        },
        second: {
          displayName: 'सेकंड',
          relative: {0: 'अब'},
          relativeTime: {
            future: {one: '{0} सेकंड में', other: '{0} सेकंड में'},
            past: {one: '{0} सेकंड पहले', other: '{0} सेकंड पहले'},
          },
        },
      },
    },
  ];
});
