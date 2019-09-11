!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.kn = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'kn',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ವರ್ಷ',
          relative: {0: 'ಈ ವರ್ಷ', 1: 'ಮುಂದಿನ ವರ್ಷ', '-1': 'ಹಿಂದಿನ ವರ್ಷ'},
          relativeTime: {
            future: {one: '{0} ವರ್ಷದಲ್ಲಿ', other: '{0} ವರ್ಷಗಳಲ್ಲಿ'},
            past: {one: '{0} ವರ್ಷದ ಹಿಂದೆ', other: '{0} ವರ್ಷಗಳ ಹಿಂದೆ'},
          },
        },
        month: {
          displayName: 'ತಿಂಗಳು',
          relative: {0: 'ಈ ತಿಂಗಳು', 1: 'ಮುಂದಿನ ತಿಂಗಳು', '-1': 'ಕಳೆದ ತಿಂಗಳು'},
          relativeTime: {
            future: {one: '{0} ತಿಂಗಳಲ್ಲಿ', other: '{0} ತಿಂಗಳುಗಳಲ್ಲಿ'},
            past: {one: '{0} ತಿಂಗಳುಗಳ ಹಿಂದೆ', other: '{0} ತಿಂಗಳುಗಳ ಹಿಂದೆ'},
          },
        },
        day: {
          displayName: 'ದಿನ',
          relative: {
            0: 'ಇಂದು',
            1: 'ನಾಳೆ',
            2: 'ನಾಡಿದ್ದು',
            '-2': 'ಮೊನ್ನೆ',
            '-1': 'ನಿನ್ನೆ',
          },
          relativeTime: {
            future: {one: '{0} ದಿನದಲ್ಲಿ', other: '{0} ದಿನಗಳಲ್ಲಿ'},
            past: {one: '{0} ದಿನದ ಹಿಂದೆ', other: '{0} ದಿನಗಳ ಹಿಂದೆ'},
          },
        },
        hour: {
          displayName: 'ಗಂಟೆ',
          relative: {0: 'ಈ ಗಂಟೆ'},
          relativeTime: {
            future: {one: '{0} ಗಂಟೆಯಲ್ಲಿ', other: '{0} ಗಂಟೆಗಳಲ್ಲಿ'},
            past: {one: '{0} ಗಂಟೆ ಹಿಂದೆ', other: '{0} ಗಂಟೆಗಳ ಹಿಂದೆ'},
          },
        },
        minute: {
          displayName: 'ನಿಮಿಷ',
          relative: {0: 'ಈ ನಿಮಿಷ'},
          relativeTime: {
            future: {one: '{0} ನಿಮಿಷದಲ್ಲಿ', other: '{0} ನಿಮಿಷಗಳಲ್ಲಿ'},
            past: {one: '{0} ನಿಮಿಷಗಳ ಹಿಂದೆ', other: '{0} ನಿಮಿಷಗಳ ಹಿಂದೆ'},
          },
        },
        second: {
          displayName: 'ಸೆಕೆಂಡ್',
          relative: {0: 'ಈಗ'},
          relativeTime: {
            future: {one: '{0} ಸೆಕೆಂಡ್‌ನಲ್ಲಿ', other: '{0} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ'},
            past: {one: '{0} ಸೆಕೆಂಡ್ ಹಿಂದೆ', other: '{0} ಸೆಕೆಂಡುಗಳ ಹಿಂದೆ'},
          },
        },
      },
    },
  ];
});
