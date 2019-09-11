!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}),
      (e.ReactIntlLocaleData.index = t()));
})(this, function() {
  'use strict';
  return [
    {
      locale: 'af',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'jaar',
          relative: {
            0: 'hierdie jaar',
            1: 'volgende jaar',
            '-1': 'verlede jaar',
          },
          relativeTime: {
            future: {one: 'oor {0} jaar', other: 'oor {0} jaar'},
            past: {one: '{0} jaar gelede', other: '{0} jaar gelede'},
          },
        },
        month: {
          displayName: 'maand',
          relative: {
            0: 'vandeesmaand',
            1: 'volgende maand',
            '-1': 'verlede maand',
          },
          relativeTime: {
            future: {one: 'oor {0} minuut', other: 'oor {0} minuut'},
            past: {one: '{0} maand gelede', other: '{0} maande gelede'},
          },
        },
        day: {
          displayName: 'dag',
          relative: {
            0: 'vandag',
            1: 'môre',
            2: 'oormôre',
            '-2': 'eergister',
            '-1': 'gister',
          },
          relativeTime: {
            future: {one: 'oor {0} minuut', other: 'oor {0} minuut'},
            past: {one: '{0} dag gelede', other: '{0} dae gelede'},
          },
        },
        hour: {
          displayName: 'uur',
          relative: {0: 'hierdie uur'},
          relativeTime: {
            future: {one: 'oor {0} uur', other: 'oor {0} uur'},
            past: {one: '{0} uur gelede', other: '{0} uur gelede'},
          },
        },
        minute: {
          displayName: 'minuut',
          relative: {0: 'hierdie minuut'},
          relativeTime: {
            future: {one: 'oor {0} minuut', other: 'oor {0} minuut'},
            past: {one: '{0} minuut gelede', other: '{0} minute gelede'},
          },
        },
        second: {
          displayName: 'sekonde',
          relative: {0: 'nou'},
          relativeTime: {
            future: {one: 'oor {0} sekonde', other: 'oor {0} sekondes'},
            past: {one: '{0} sekonde gelede', other: '{0} sekondes gelede'},
          },
        },
      },
    },
    {locale: 'af-NA', parentLocale: 'af'},
    {
      locale: 'agq',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'kɨnûm',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ndzɔŋ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'utsuʔ',
          relative: {0: 'nɛ', 1: 'tsʉtsʉ', '-1': 'ā zūɛɛ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'tàm',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'menè',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'sɛkɔ̀n',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ak',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Afe',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Bosome',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Da',
          relative: {0: 'Ndɛ', 1: 'Ɔkyena', '-1': 'Ndeda'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Dɔnhwer',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Sema',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sɛkɛnd',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'am',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ዓመት',
          relative: {0: 'በዚህ ዓመት', 1: 'የሚቀጥለው ዓመት', '-1': 'ያለፈው ዓመት'},
          relativeTime: {
            future: {one: 'በ{0} ዓመታት ውስጥ', other: 'በ{0} ዓመታት ውስጥ'},
            past: {one: 'ከ{0} ዓመት በፊት', other: 'ከ{0} ዓመታት በፊት'},
          },
        },
        month: {
          displayName: 'ወር',
          relative: {0: 'በዚህ ወር', 1: 'የሚቀጥለው ወር', '-1': 'ያለፈው ወር'},
          relativeTime: {
            future: {one: 'በ{0} ወር ውስጥ', other: 'በ{0} ወራት ውስጥ'},
            past: {one: 'ከ{0} ወር በፊት', other: 'ከ{0} ወራት በፊት'},
          },
        },
        day: {
          displayName: 'ቀን',
          relative: {
            0: 'ዛሬ',
            1: 'ነገ',
            2: 'ከነገ ወዲያ',
            '-2': 'ከትናንት ወዲያ',
            '-1': 'ትናንት',
          },
          relativeTime: {
            future: {one: 'በ{0} ቀን ውስጥ', other: 'በ{0} ቀናት ውስጥ'},
            past: {one: 'ከ{0} ቀን በፊት', other: 'ከ{0} ቀናት በፊት'},
          },
        },
        hour: {
          displayName: 'ሰዓት',
          relative: {0: 'ይህ ሰዓት'},
          relativeTime: {
            future: {one: 'በ{0} ሰዓት ውስጥ', other: 'በ{0} ሰዓቶች ውስጥ'},
            past: {one: 'ከ{0} ሰዓት በፊት', other: 'ከ{0} ሰዓቶች በፊት'},
          },
        },
        minute: {
          displayName: 'ደቂቃ',
          relative: {0: 'ይህ ደቂቃ'},
          relativeTime: {
            future: {one: 'በ{0} ደቂቃ ውስጥ', other: 'በ{0} ደቂቃዎች ውስጥ'},
            past: {one: 'ከ{0} ደቂቃ በፊት', other: 'ከ{0} ደቂቃዎች በፊት'},
          },
        },
        second: {
          displayName: 'ሰከንድ',
          relative: {0: 'አሁን'},
          relativeTime: {
            future: {one: 'በ{0} ሰከንድ ውስጥ', other: 'በ{0} ሰከንዶች ውስጥ'},
            past: {one: 'ከ{0} ሰከንድ በፊት', other: 'ከ{0} ሰከንዶች በፊት'},
          },
        },
      },
    },
    {
      locale: 'ar',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e && a[0].slice(-2);
        return t
          ? 'other'
          : 0 == e
          ? 'zero'
          : 1 == e
          ? 'one'
          : 2 == e
          ? 'two'
          : r >= 3 && r <= 10
          ? 'few'
          : r >= 11 && r <= 99
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'السنة',
          relative: {
            0: 'السنة الحالية',
            1: 'السنة القادمة',
            '-1': 'السنة الماضية',
          },
          relativeTime: {
            future: {
              zero: 'خلال {0} سنة',
              one: 'خلال سنة واحدة',
              two: 'خلال سنتين',
              few: 'خلال {0} سنوات',
              many: 'خلال {0} سنة',
              other: 'خلال {0} سنة',
            },
            past: {
              zero: 'قبل {0} سنة',
              one: 'قبل سنة واحدة',
              two: 'قبل سنتين',
              few: 'قبل {0} سنوات',
              many: 'قبل {0} سنة',
              other: 'قبل {0} سنة',
            },
          },
        },
        month: {
          displayName: 'الشهر',
          relative: {0: 'هذا الشهر', 1: 'الشهر القادم', '-1': 'الشهر الماضي'},
          relativeTime: {
            future: {
              zero: 'خلال {0} شهر',
              one: 'خلال شهر واحد',
              two: 'خلال شهرين',
              few: 'خلال {0} أشهر',
              many: 'خلال {0} شهرًا',
              other: 'خلال {0} شهر',
            },
            past: {
              zero: 'قبل {0} شهر',
              one: 'قبل شهر واحد',
              two: 'قبل شهرين',
              few: 'قبل {0} أشهر',
              many: 'قبل {0} شهرًا',
              other: 'قبل {0} شهر',
            },
          },
        },
        day: {
          displayName: 'يوم',
          relative: {
            0: 'اليوم',
            1: 'غدًا',
            2: 'بعد الغد',
            '-2': 'أول أمس',
            '-1': 'أمس',
          },
          relativeTime: {
            future: {
              zero: 'خلال {0} يوم',
              one: 'خلال يوم واحد',
              two: 'خلال يومين',
              few: 'خلال {0} أيام',
              many: 'خلال {0} يومًا',
              other: 'خلال {0} يوم',
            },
            past: {
              zero: 'قبل {0} يوم',
              one: 'قبل يوم واحد',
              two: 'قبل يومين',
              few: 'قبل {0} أيام',
              many: 'قبل {0} يومًا',
              other: 'قبل {0} يوم',
            },
          },
        },
        hour: {
          displayName: 'الساعات',
          relative: {0: 'الساعة الحالية'},
          relativeTime: {
            future: {
              zero: 'خلال {0} ساعة',
              one: 'خلال ساعة واحدة',
              two: 'خلال ساعتين',
              few: 'خلال {0} ساعات',
              many: 'خلال {0} ساعة',
              other: 'خلال {0} ساعة',
            },
            past: {
              zero: 'قبل {0} ساعة',
              one: 'قبل ساعة واحدة',
              two: 'قبل ساعتين',
              few: 'قبل {0} ساعات',
              many: 'قبل {0} ساعة',
              other: 'قبل {0} ساعة',
            },
          },
        },
        minute: {
          displayName: 'الدقائق',
          relative: {0: 'هذه الدقيقة'},
          relativeTime: {
            future: {
              zero: 'خلال {0} دقيقة',
              one: 'خلال دقيقة واحدة',
              two: 'خلال دقيقتين',
              few: 'خلال {0} دقائق',
              many: 'خلال {0} دقيقة',
              other: 'خلال {0} دقيقة',
            },
            past: {
              zero: 'قبل {0} دقيقة',
              one: 'قبل دقيقة واحدة',
              two: 'قبل دقيقتين',
              few: 'قبل {0} دقائق',
              many: 'قبل {0} دقيقة',
              other: 'قبل {0} دقيقة',
            },
          },
        },
        second: {
          displayName: 'الثواني',
          relative: {0: 'الآن'},
          relativeTime: {
            future: {
              zero: 'خلال {0} ثانية',
              one: 'خلال ثانية واحدة',
              two: 'خلال ثانيتين',
              few: 'خلال {0} ثوانٍ',
              many: 'خلال {0} ثانية',
              other: 'خلال {0} ثانية',
            },
            past: {
              zero: 'قبل {0} ثانية',
              one: 'قبل ثانية واحدة',
              two: 'قبل ثانيتين',
              few: 'قبل {0} ثوانِ',
              many: 'قبل {0} ثانية',
              other: 'قبل {0} ثانية',
            },
          },
        },
      },
    },
    {
      locale: 'ar-AE',
      parentLocale: 'ar',
      fields: {
        year: {
          displayName: 'السنة',
          relative: {0: 'هذه السنة', 1: 'السنة التالية', '-1': 'السنة الماضية'},
          relativeTime: {
            future: {
              zero: 'خلال {0} سنة',
              one: 'خلال سنة واحدة',
              two: 'خلال سنتين',
              few: 'خلال {0} سنوات',
              many: 'خلال {0} سنة',
              other: 'خلال {0} سنة',
            },
            past: {
              zero: 'قبل {0} سنة',
              one: 'قبل سنة واحدة',
              two: 'قبل سنتين',
              few: 'قبل {0} سنوات',
              many: 'قبل {0} سنة',
              other: 'قبل {0} سنة',
            },
          },
        },
        month: {
          displayName: 'الشهر',
          relative: {0: 'هذا الشهر', 1: 'الشهر القادم', '-1': 'الشهر الماضي'},
          relativeTime: {
            future: {
              zero: 'خلال {0} شهر',
              one: 'خلال شهر واحد',
              two: 'خلال شهرين',
              few: 'خلال {0} أشهر',
              many: 'خلال {0} شهرًا',
              other: 'خلال {0} شهر',
            },
            past: {
              zero: 'قبل {0} شهر',
              one: 'قبل شهر واحد',
              two: 'قبل شهرين',
              few: 'قبل {0} أشهر',
              many: 'قبل {0} شهرًا',
              other: 'قبل {0} شهر',
            },
          },
        },
        day: {
          displayName: 'يوم',
          relative: {
            0: 'اليوم',
            1: 'غدًا',
            2: 'بعد الغد',
            '-2': 'أول أمس',
            '-1': 'أمس',
          },
          relativeTime: {
            future: {
              zero: 'خلال {0} يوم',
              one: 'خلال يوم واحد',
              two: 'خلال يومين',
              few: 'خلال {0} أيام',
              many: 'خلال {0} يومًا',
              other: 'خلال {0} يوم',
            },
            past: {
              zero: 'قبل {0} يوم',
              one: 'قبل يوم واحد',
              two: 'قبل يومين',
              few: 'قبل {0} أيام',
              many: 'قبل {0} يومًا',
              other: 'قبل {0} يوم',
            },
          },
        },
        hour: {
          displayName: 'الساعات',
          relative: {0: 'الساعة الحالية'},
          relativeTime: {
            future: {
              zero: 'خلال {0} ساعة',
              one: 'خلال ساعة واحدة',
              two: 'خلال ساعتين',
              few: 'خلال {0} ساعات',
              many: 'خلال {0} ساعة',
              other: 'خلال {0} ساعة',
            },
            past: {
              zero: 'قبل {0} ساعة',
              one: 'قبل ساعة واحدة',
              two: 'قبل ساعتين',
              few: 'قبل {0} ساعات',
              many: 'قبل {0} ساعة',
              other: 'قبل {0} ساعة',
            },
          },
        },
        minute: {
          displayName: 'الدقائق',
          relative: {0: 'هذه الدقيقة'},
          relativeTime: {
            future: {
              zero: 'خلال {0} دقيقة',
              one: 'خلال دقيقة واحدة',
              two: 'خلال دقيقتين',
              few: 'خلال {0} دقائق',
              many: 'خلال {0} دقيقة',
              other: 'خلال {0} دقيقة',
            },
            past: {
              zero: 'قبل {0} دقيقة',
              one: 'قبل دقيقة واحدة',
              two: 'قبل دقيقتين',
              few: 'قبل {0} دقائق',
              many: 'قبل {0} دقيقة',
              other: 'قبل {0} دقيقة',
            },
          },
        },
        second: {
          displayName: 'الثواني',
          relative: {0: 'الآن'},
          relativeTime: {
            future: {
              zero: 'خلال {0} ثانية',
              one: 'خلال ثانية واحدة',
              two: 'خلال ثانيتين',
              few: 'خلال {0} ثوانٍ',
              many: 'خلال {0} ثانية',
              other: 'خلال {0} ثانية',
            },
            past: {
              zero: 'قبل {0} ثانية',
              one: 'قبل ثانية واحدة',
              two: 'قبل ثانيتين',
              few: 'قبل {0} ثوانِ',
              many: 'قبل {0} ثانية',
              other: 'قبل {0} ثانية',
            },
          },
        },
      },
    },
    {locale: 'ar-BH', parentLocale: 'ar'},
    {locale: 'ar-DJ', parentLocale: 'ar'},
    {locale: 'ar-DZ', parentLocale: 'ar'},
    {locale: 'ar-EG', parentLocale: 'ar'},
    {locale: 'ar-EH', parentLocale: 'ar'},
    {locale: 'ar-ER', parentLocale: 'ar'},
    {locale: 'ar-IL', parentLocale: 'ar'},
    {locale: 'ar-IQ', parentLocale: 'ar'},
    {locale: 'ar-JO', parentLocale: 'ar'},
    {locale: 'ar-KM', parentLocale: 'ar'},
    {locale: 'ar-KW', parentLocale: 'ar'},
    {locale: 'ar-LB', parentLocale: 'ar'},
    {locale: 'ar-LY', parentLocale: 'ar'},
    {locale: 'ar-MA', parentLocale: 'ar'},
    {locale: 'ar-MR', parentLocale: 'ar'},
    {locale: 'ar-OM', parentLocale: 'ar'},
    {locale: 'ar-PS', parentLocale: 'ar'},
    {locale: 'ar-QA', parentLocale: 'ar'},
    {locale: 'ar-SA', parentLocale: 'ar'},
    {locale: 'ar-SD', parentLocale: 'ar'},
    {locale: 'ar-SO', parentLocale: 'ar'},
    {locale: 'ar-SS', parentLocale: 'ar'},
    {locale: 'ar-SY', parentLocale: 'ar'},
    {locale: 'ar-TD', parentLocale: 'ar'},
    {locale: 'ar-TN', parentLocale: 'ar'},
    {locale: 'ar-YE', parentLocale: 'ar'},
    {
      locale: 'ars',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e && a[0].slice(-2);
        return t
          ? 'other'
          : 0 == e
          ? 'zero'
          : 1 == e
          ? 'one'
          : 2 == e
          ? 'two'
          : r >= 3 && r <= 10
          ? 'few'
          : r >= 11 && r <= 99
          ? 'many'
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
    {
      locale: 'as',
      pluralRuleFunction: function(e, t) {
        return t
          ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e
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
          displayName: 'বছৰ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'মাহ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'দিন',
          relative: {
            0: 'আজি',
            1: 'কাইলৈ',
            2: 'পৰহিলৈ',
            '-2': 'পৰহি',
            '-1': 'কালি',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ঘণ্টা',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'মিনিট',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ছেকেণ্ড',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'asa',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mweji',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Thiku',
          relative: {0: 'Iyoo', 1: 'Yavo', '-1': 'Ighuo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Thaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Thekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ast',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'añu',
          relative: {0: 'esti añu', 1: 'l’añu viniente', '-1': 'l’añu pasáu'},
          relativeTime: {
            future: {one: 'en {0} añu', other: 'en {0} años'},
            past: {one: 'hai {0} añu', other: 'hai {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'esti mes', 1: 'el mes viniente', '-1': 'el mes pasáu'},
          relativeTime: {
            future: {one: 'en {0} mes', other: 'en {0} meses'},
            past: {one: 'hai {0} mes', other: 'hai {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'güei',
            1: 'mañana',
            2: 'pasao mañana',
            '-2': 'antayeri',
            '-1': 'ayeri',
          },
          relativeTime: {
            future: {one: 'en {0} día', other: 'en {0} díes'},
            past: {one: 'hai {0} día', other: 'hai {0} díes'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'en {0} hora', other: 'en {0} hores'},
            past: {one: 'hai {0} hora', other: 'hai {0} hores'},
          },
        },
        minute: {
          displayName: 'minutu',
          relative: {0: 'esti minutu'},
          relativeTime: {
            future: {one: 'en {0} minutu', other: 'en {0} minutos'},
            past: {one: 'hai {0} minutu', other: 'hai {0} minutos'},
          },
        },
        second: {
          displayName: 'segundu',
          relative: {0: 'agora'},
          relativeTime: {
            future: {one: 'en {0} segundu', other: 'en {0} segundos'},
            past: {one: 'hai {0} segundu', other: 'hai {0} segundos'},
          },
        },
      },
    },
    {
      locale: 'az',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.')[0],
          r = a.slice(-1),
          i = a.slice(-2),
          o = a.slice(-3);
        return t
          ? 1 == r ||
            2 == r ||
            5 == r ||
            7 == r ||
            8 == r ||
            20 == i ||
            50 == i ||
            70 == i ||
            80 == i
            ? 'one'
            : 3 == r ||
              4 == r ||
              100 == o ||
              200 == o ||
              300 == o ||
              400 == o ||
              500 == o ||
              600 == o ||
              700 == o ||
              800 == o ||
              900 == o
            ? 'few'
            : 0 == a || 6 == r || 40 == i || 60 == i || 90 == i
            ? 'many'
            : 'other'
          : 1 == e
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'İl',
          relative: {0: 'bu il', 1: 'gələn il', '-1': 'keçən il'},
          relativeTime: {
            future: {one: '{0} il ərzində', other: '{0} il ərzində'},
            past: {one: '{0} il öncə', other: '{0} il öncə'},
          },
        },
        month: {
          displayName: 'Ay',
          relative: {0: 'bu ay', 1: 'gələn ay', '-1': 'keçən ay'},
          relativeTime: {
            future: {one: '{0} ay ərzində', other: '{0} ay ərzində'},
            past: {one: '{0} ay öncə', other: '{0} ay öncə'},
          },
        },
        day: {
          displayName: 'Gün',
          relative: {0: 'bu gün', 1: 'sabah', '-1': 'dünən'},
          relativeTime: {
            future: {one: '{0} gün ərzində', other: '{0} gün ərzində'},
            past: {one: '{0} gün öncə', other: '{0} gün öncə'},
          },
        },
        hour: {
          displayName: 'Saat',
          relative: {0: 'bu saat'},
          relativeTime: {
            future: {one: '{0} saat ərzində', other: '{0} saat ərzində'},
            past: {one: '{0} saat öncə', other: '{0} saat öncə'},
          },
        },
        minute: {
          displayName: 'Dəqiqə',
          relative: {0: 'bu dəqiqə'},
          relativeTime: {
            future: {one: '{0} dəqiqə ərzində', other: '{0} dəqiqə ərzində'},
            past: {one: '{0} dəqiqə öncə', other: '{0} dəqiqə öncə'},
          },
        },
        second: {
          displayName: 'Saniyə',
          relative: {0: 'indi'},
          relativeTime: {
            future: {one: '{0} saniyə ərzində', other: '{0} saniyə ərzində'},
            past: {one: '{0} saniyə öncə', other: '{0} saniyə öncə'},
          },
        },
      },
    },
    {
      locale: 'az-Arab',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'az-Cyrl',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {locale: 'az-Latn', parentLocale: 'az'},
    {
      locale: 'bas',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ŋwìi',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'soŋ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'kɛl',
          relative: {0: 'lɛ̀n', 1: 'yàni', '-1': 'yààni'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ŋgɛŋ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ŋget',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'hìŋgeŋget',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'be',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e,
          i = r && a[0].slice(-1),
          o = r && a[0].slice(-2);
        return t
          ? (2 != i && 3 != i) || 12 == o || 13 == o
            ? 'other'
            : 'few'
          : 1 == i && 11 != o
          ? 'one'
          : i >= 2 && i <= 4 && (o < 12 || o > 14)
          ? 'few'
          : (r && 0 == i) || (i >= 5 && i <= 9) || (o >= 11 && o <= 14)
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'год',
          relative: {
            0: 'у гэтым годзе',
            1: 'у наступным годзе',
            '-1': 'у мінулым годзе',
          },
          relativeTime: {
            future: {
              one: 'праз {0} год',
              few: 'праз {0} гады',
              many: 'праз {0} гадоў',
              other: 'праз {0} года',
            },
            past: {
              one: '{0} год таму',
              few: '{0} гады таму',
              many: '{0} гадоў таму',
              other: '{0} года таму',
            },
          },
        },
        month: {
          displayName: 'месяц',
          relative: {
            0: 'у гэтым месяцы',
            1: 'у наступным месяцы',
            '-1': 'у мінулым месяцы',
          },
          relativeTime: {
            future: {
              one: 'праз {0} месяц',
              few: 'праз {0} месяцы',
              many: 'праз {0} месяцаў',
              other: 'праз {0} месяца',
            },
            past: {
              one: '{0} месяц таму',
              few: '{0} месяцы таму',
              many: '{0} месяцаў таму',
              other: '{0} месяца таму',
            },
          },
        },
        day: {
          displayName: 'дзень',
          relative: {
            0: 'сёння',
            1: 'заўтра',
            2: 'паслязаўтра',
            '-2': 'пазаўчора',
            '-1': 'учора',
          },
          relativeTime: {
            future: {
              one: 'праз {0} дзень',
              few: 'праз {0} дні',
              many: 'праз {0} дзён',
              other: 'праз {0} дня',
            },
            past: {
              one: '{0} дзень таму',
              few: '{0} дні таму',
              many: '{0} дзён таму',
              other: '{0} дня таму',
            },
          },
        },
        hour: {
          displayName: 'гадзіна',
          relative: {0: 'у гэту гадзіну'},
          relativeTime: {
            future: {
              one: 'праз {0} гадзіну',
              few: 'праз {0} гадзіны',
              many: 'праз {0} гадзін',
              other: 'праз {0} гадзіны',
            },
            past: {
              one: '{0} гадзіну таму',
              few: '{0} гадзіны таму',
              many: '{0} гадзін таму',
              other: '{0} гадзіны таму',
            },
          },
        },
        minute: {
          displayName: 'хвіліна',
          relative: {0: 'у гэту хвіліну'},
          relativeTime: {
            future: {
              one: 'праз {0} хвіліну',
              few: 'праз {0} хвіліны',
              many: 'праз {0} хвілін',
              other: 'праз {0} хвіліны',
            },
            past: {
              one: '{0} хвіліну таму',
              few: '{0} хвіліны таму',
              many: '{0} хвілін таму',
              other: '{0} хвіліны таму',
            },
          },
        },
        second: {
          displayName: 'секунда',
          relative: {0: 'цяпер'},
          relativeTime: {
            future: {
              one: 'праз {0} секунду',
              few: 'праз {0} секунды',
              many: 'праз {0} секунд',
              other: 'праз {0} секунды',
            },
            past: {
              one: '{0} секунду таму',
              few: '{0} секунды таму',
              many: '{0} секунд таму',
              other: '{0} секунды таму',
            },
          },
        },
      },
    },
    {
      locale: 'bem',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Umwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Umweshi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ubushiku',
          relative: {0: 'Lelo', 1: 'tomorrow', '-1': 'yesterday'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Insa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Mineti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekondi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'bez',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaha',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwedzi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Sihu',
          relative: {0: 'Neng’u ni', 1: 'Hilawu', '-1': 'Igolo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'bg',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'година',
          relative: {
            0: 'тази година',
            1: 'следващата година',
            '-1': 'миналата година',
          },
          relativeTime: {
            future: {one: 'след {0} година', other: 'след {0} години'},
            past: {one: 'преди {0} година', other: 'преди {0} години'},
          },
        },
        month: {
          displayName: 'месец',
          relative: {
            0: 'този месец',
            1: 'следващ месец',
            '-1': 'предходен месец',
          },
          relativeTime: {
            future: {one: 'след {0} месец', other: 'след {0} месеца'},
            past: {one: 'преди {0} месец', other: 'преди {0} месеца'},
          },
        },
        day: {
          displayName: 'ден',
          relative: {
            0: 'днес',
            1: 'утре',
            2: 'вдругиден',
            '-2': 'онзи ден',
            '-1': 'вчера',
          },
          relativeTime: {
            future: {one: 'след {0} ден', other: 'след {0} дни'},
            past: {one: 'преди {0} ден', other: 'преди {0} дни'},
          },
        },
        hour: {
          displayName: 'час',
          relative: {0: 'в този час'},
          relativeTime: {
            future: {one: 'след {0} час', other: 'след {0} часа'},
            past: {one: 'преди {0} час', other: 'преди {0} часа'},
          },
        },
        minute: {
          displayName: 'минута',
          relative: {0: 'в тази минута'},
          relativeTime: {
            future: {one: 'след {0} минута', other: 'след {0} минути'},
            past: {one: 'преди {0} минута', other: 'преди {0} минути'},
          },
        },
        second: {
          displayName: 'секунда',
          relative: {0: 'сега'},
          relativeTime: {
            future: {one: 'след {0} секунда', other: 'след {0} секунди'},
            past: {one: 'преди {0} секунда', other: 'преди {0} секунди'},
          },
        },
      },
    },
    {
      locale: 'bh',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
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
    {
      locale: 'bm',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'san',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'kalo',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'don',
          relative: {0: 'bi', 1: 'sini', '-1': 'kunu'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'lɛrɛ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'miniti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'sekondi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'bm-Nkoo',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'bn',
      pluralRuleFunction: function(e, t) {
        return t
          ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e
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
          displayName: 'বছর',
          relative: {0: 'এই বছর', 1: 'পরের বছর', '-1': 'গত বছর'},
          relativeTime: {
            future: {one: '{0} বছরে', other: '{0} বছরে'},
            past: {one: '{0} বছর পূর্বে', other: '{0} বছর পূর্বে'},
          },
        },
        month: {
          displayName: 'মাস',
          relative: {0: 'এই মাস', 1: 'পরের মাস', '-1': 'গত মাস'},
          relativeTime: {
            future: {one: '{0} মাসে', other: '{0} মাসে'},
            past: {one: '{0} মাস আগে', other: '{0} মাস আগে'},
          },
        },
        day: {
          displayName: 'দিন',
          relative: {
            0: 'আজ',
            1: 'আগামীকাল',
            2: 'আগামী পরশু',
            '-2': 'গত পরশু',
            '-1': 'গতকাল',
          },
          relativeTime: {
            future: {one: '{0} দিনের মধ্যে', other: '{0} দিনের মধ্যে'},
            past: {one: '{0} দিন আগে', other: '{0} দিন আগে'},
          },
        },
        hour: {
          displayName: 'ঘন্টা',
          relative: {0: 'এই ঘণ্টায়'},
          relativeTime: {
            future: {one: '{0} ঘন্টায়', other: '{0} ঘন্টায়'},
            past: {one: '{0} ঘন্টা আগে', other: '{0} ঘন্টা আগে'},
          },
        },
        minute: {
          displayName: 'মিনিট',
          relative: {0: 'এই মিনিট'},
          relativeTime: {
            future: {one: '{0} মিনিটে', other: '{0} মিনিটে'},
            past: {one: '{0} মিনিট আগে', other: '{0} মিনিট পূর্বে'},
          },
        },
        second: {
          displayName: 'সেকেন্ড',
          relative: {0: 'এখন'},
          relativeTime: {
            future: {one: '{0} সেকেন্ডে', other: '{0} সেকেন্ডে'},
            past: {one: '{0} সেকেন্ড পূর্বে', other: '{0} সেকেন্ড পূর্বে'},
          },
        },
      },
    },
    {locale: 'bn-IN', parentLocale: 'bn'},
    {
      locale: 'bo',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ལོ།',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ཟླ་བ་',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ཉིན།',
          relative: {
            0: 'དེ་རིང་',
            1: 'སང་ཉིན་',
            2: 'གནངས་ཉིན་',
            '-2': 'ཁས་ཉིན་',
            '-1': 'ཁས་ས་',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ཆུ་ཚོད་',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'སྐར་མ།',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'སྐར་ཆ།',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'bo-IN', parentLocale: 'bo'},
    {
      locale: 'br',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e,
          i = r && a[0].slice(-1),
          o = r && a[0].slice(-2),
          n = r && a[0].slice(-6);
        return t
          ? 'other'
          : 1 == i && 11 != o && 71 != o && 91 != o
          ? 'one'
          : 2 == i && 12 != o && 72 != o && 92 != o
          ? 'two'
          : (3 == i || 4 == i || 9 == i) &&
            (o < 10 || o > 19) &&
            (o < 70 || o > 79) &&
            (o < 90 || o > 99)
          ? 'few'
          : 0 != e && r && 0 == n
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'bloaz',
          relative: {0: 'hevlene', 1: 'ar bloaz a zeu', '-1': 'warlene'},
          relativeTime: {
            future: {
              one: 'a-benn {0} bloaz',
              two: 'a-benn {0} vloaz',
              few: 'a-benn {0} bloaz',
              many: 'a-benn {0} a vloazioù',
              other: 'a-benn {0} vloaz',
            },
            past: {
              one: '{0} bloaz zo',
              two: '{0} vloaz zo',
              few: '{0} bloaz zo',
              many: '{0} a vloazioù zo',
              other: '{0} vloaz zo',
            },
          },
        },
        month: {
          displayName: 'miz',
          relative: {
            0: 'ar miz-mañ',
            1: 'ar miz a zeu',
            '-1': 'ar miz diaraok',
          },
          relativeTime: {
            future: {
              one: 'a-benn {0} miz',
              two: 'a-benn {0} viz',
              few: 'a-benn {0} miz',
              many: 'a-benn {0} a vizioù',
              other: 'a-benn {0} miz',
            },
            past: {
              one: '{0} miz zo',
              two: '{0} viz zo',
              few: '{0} miz zo',
              many: '{0} a vizioù zo',
              other: '{0} miz zo',
            },
          },
        },
        day: {
          displayName: 'deiz',
          relative: {
            0: 'hiziv',
            1: 'warcʼhoazh',
            '-2': 'dercʼhent-decʼh',
            '-1': 'decʼh',
          },
          relativeTime: {
            future: {
              one: 'a-benn {0} deiz',
              two: 'a-benn {0} zeiz',
              few: 'a-benn {0} deiz',
              many: 'a-benn {0} a zeizioù',
              other: 'a-benn {0} deiz',
            },
            past: {
              one: '{0} deiz zo',
              two: '{0} zeiz zo',
              few: '{0} deiz zo',
              many: '{0} a zeizioù zo',
              other: '{0} deiz zo',
            },
          },
        },
        hour: {
          displayName: 'eur',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: 'a-benn {0} eur',
              two: 'a-benn {0} eur',
              few: 'a-benn {0} eur',
              many: 'a-benn {0} a eurioù',
              other: 'a-benn {0} eur',
            },
            past: {
              one: '{0} eur zo',
              two: '{0} eur zo',
              few: '{0} eur zo',
              many: '{0} a eurioù zo',
              other: '{0} eur zo',
            },
          },
        },
        minute: {
          displayName: 'munut',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: 'a-benn {0} munut',
              two: 'a-benn {0} vunut',
              few: 'a-benn {0} munut',
              many: 'a-benn {0} a vunutoù',
              other: 'a-benn {0} munut',
            },
            past: {
              one: '{0} munut zo',
              two: '{0} vunut zo',
              few: '{0} munut zo',
              many: '{0} a vunutoù zo',
              other: '{0} munut zo',
            },
          },
        },
        second: {
          displayName: 'eilenn',
          relative: {0: 'bremañ'},
          relativeTime: {
            future: {
              one: 'a-benn {0} eilenn',
              two: 'a-benn {0} eilenn',
              few: 'a-benn {0} eilenn',
              many: 'a-benn {0} a eilennoù',
              other: 'a-benn {0} eilenn',
            },
            past: {
              one: '{0} eilenn zo',
              two: '{0} eilenn zo',
              few: '{0} eilenn zo',
              many: '{0} eilenn zo',
              other: '{0} eilenn zo',
            },
          },
        },
      },
    },
    {
      locale: 'brx',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'बोसोर',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'दान',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'सान',
          relative: {0: 'दिनै', 1: 'गाबोन', '-1': 'मैया'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'रिंगा',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'मिनिथ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'सेखेन्द',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'bs',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-1),
          l = r.slice(-2),
          u = i.slice(-1),
          s = i.slice(-2);
        return t
          ? 'other'
          : (o && 1 == n && 11 != l) || (1 == u && 11 != s)
          ? 'one'
          : (o && n >= 2 && n <= 4 && (l < 12 || l > 14)) ||
            (u >= 2 && u <= 4 && (s < 12 || s > 14))
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'godina',
          relative: {
            0: 'ove godine',
            1: 'sljedeće godine',
            '-1': 'prošle godine',
          },
          relativeTime: {
            future: {
              one: 'za {0} godinu',
              few: 'za {0} godine',
              other: 'za {0} godina',
            },
            past: {
              one: 'prije {0} godinu',
              few: 'prije {0} godine',
              other: 'prije {0} godina',
            },
          },
        },
        month: {
          displayName: 'mjesec',
          relative: {
            0: 'ovaj mjesec',
            1: 'sljedeći mjesec',
            '-1': 'prošli mjesec',
          },
          relativeTime: {
            future: {
              one: 'za {0} mjesec',
              few: 'za {0} mjeseca',
              other: 'za {0} mjeseci',
            },
            past: {
              one: 'prije {0} mjesec',
              few: 'prije {0} mjeseca',
              other: 'prije {0} mjeseci',
            },
          },
        },
        day: {
          displayName: 'dan',
          relative: {
            0: 'danas',
            1: 'sutra',
            2: 'prekosutra',
            '-2': 'prekjučer',
            '-1': 'jučer',
          },
          relativeTime: {
            future: {
              one: 'za {0} dan',
              few: 'za {0} dana',
              other: 'za {0} dana',
            },
            past: {
              one: 'prije {0} dan',
              few: 'prije {0} dana',
              other: 'prije {0} dana',
            },
          },
        },
        hour: {
          displayName: 'sat',
          relative: {0: 'ovaj sat'},
          relativeTime: {
            future: {
              one: 'za {0} sat',
              few: 'za {0} sata',
              other: 'za {0} sati',
            },
            past: {
              one: 'prije {0} sat',
              few: 'prije {0} sata',
              other: 'prije {0} sati',
            },
          },
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'ova minuta'},
          relativeTime: {
            future: {
              one: 'za {0} minutu',
              few: 'za {0} minute',
              other: 'za {0} minuta',
            },
            past: {
              one: 'prije {0} minutu',
              few: 'prije {0} minute',
              other: 'prije {0} minuta',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'sada'},
          relativeTime: {
            future: {
              one: 'za {0} sekundu',
              few: 'za {0} sekunde',
              other: 'za {0} sekundi',
            },
            past: {
              one: 'prije {0} sekundu',
              few: 'prije {0} sekunde',
              other: 'prije {0} sekundi',
            },
          },
        },
      },
    },
    {
      locale: 'bs-Cyrl',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'година',
          relative: {
            0: 'Ове године',
            1: 'Следеће године',
            '-1': 'Прошле године',
          },
          relativeTime: {
            future: {
              one: 'за {0} годину',
              few: 'за {0} године',
              other: 'за {0} година',
            },
            past: {
              one: 'пре {0} годину',
              few: 'пре {0} године',
              other: 'пре {0} година',
            },
          },
        },
        month: {
          displayName: 'месец',
          relative: {
            0: 'Овог месеца',
            1: 'Следећег месеца',
            '-1': 'Прошлог месеца',
          },
          relativeTime: {
            future: {
              one: 'за {0} месец',
              few: 'за {0} месеца',
              other: 'за {0} месеци',
            },
            past: {
              one: 'пре {0} месец',
              few: 'пре {0} месеца',
              other: 'пре {0} месеци',
            },
          },
        },
        day: {
          displayName: 'дан',
          relative: {
            0: 'данас',
            1: 'сутра',
            2: 'прекосутра',
            '-2': 'прекјуче',
            '-1': 'јуче',
          },
          relativeTime: {
            future: {
              one: 'за {0} дан',
              few: 'за {0} дана',
              other: 'за {0} дана',
            },
            past: {
              one: 'пре {0} дан',
              few: 'пре {0} дана',
              other: 'пре {0} дана',
            },
          },
        },
        hour: {
          displayName: 'час',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: 'за {0} сат',
              few: 'за {0} сата',
              other: 'за {0} сати',
            },
            past: {
              one: 'пре {0} сат',
              few: 'пре {0} сата',
              other: 'пре {0} сати',
            },
          },
        },
        minute: {
          displayName: 'минут',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: 'за {0} минут',
              few: 'за {0} минута',
              other: 'за {0} минута',
            },
            past: {
              one: 'пре {0} минут',
              few: 'пре {0} минута',
              other: 'пре {0} минута',
            },
          },
        },
        second: {
          displayName: 'секунд',
          relative: {0: 'now'},
          relativeTime: {
            future: {
              one: 'за {0} секунд',
              few: 'за {0} секунде',
              other: 'за {0} секунди',
            },
            past: {
              one: 'пре {0} секунд',
              few: 'пре {0} секунде',
              other: 'пре {0} секунди',
            },
          },
        },
      },
    },
    {locale: 'bs-Latn', parentLocale: 'bs'},
    {
      locale: 'ca',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t
          ? 1 == e || 3 == e
            ? 'one'
            : 2 == e
            ? 'two'
            : 4 == e
            ? 'few'
            : 'other'
          : 1 == e && a
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'any',
          relative: {0: 'enguany', 1: 'l’any que ve', '-1': 'l’any passat'},
          relativeTime: {
            future: {one: 'd’aquí a {0} any', other: 'd’aquí a {0} anys'},
            past: {one: 'fa {0} any', other: 'fa {0} anys'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {
            0: 'aquest mes',
            1: 'el mes que ve',
            '-1': 'el mes passat',
          },
          relativeTime: {
            future: {one: 'd’aquí a {0} mes', other: 'd’aquí a {0} mesos'},
            past: {one: 'fa {0} mes', other: 'fa {0} mesos'},
          },
        },
        day: {
          displayName: 'dia',
          relative: {
            0: 'avui',
            1: 'demà',
            2: 'demà passat',
            '-2': 'abans-d’ahir',
            '-1': 'ahir',
          },
          relativeTime: {
            future: {one: 'd’aquí a {0} dia', other: 'd’aquí a {0} dies'},
            past: {one: 'fa {0} dia', other: 'fa {0} dies'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'aquesta hora'},
          relativeTime: {
            future: {one: 'd’aquí a {0} hora', other: 'd’aquí a {0} hores'},
            past: {one: 'fa {0} hora', other: 'fa {0} hores'},
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'aquest minut'},
          relativeTime: {
            future: {one: 'd’aquí a {0} minut', other: 'd’aquí a {0} minuts'},
            past: {one: 'fa {0} minut', other: 'fa {0} minuts'},
          },
        },
        second: {
          displayName: 'segon',
          relative: {0: 'ara'},
          relativeTime: {
            future: {one: 'd’aquí a {0} segon', other: 'd’aquí a {0} segons'},
            past: {one: 'fa {0} segon', other: 'fa {0} segons'},
          },
        },
      },
    },
    {locale: 'ca-AD', parentLocale: 'ca'},
    {
      locale: 'ca-ES-VALENCIA',
      parentLocale: 'ca-ES',
      fields: {
        year: {
          displayName: 'any',
          relative: {0: 'enguany', 1: 'l’any que ve', '-1': 'l’any passat'},
          relativeTime: {
            future: {one: 'd’aquí a {0} any', other: 'd’aquí a {0} anys'},
            past: {one: 'fa {0} any', other: 'fa {0} anys'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {
            0: 'aquest mes',
            1: 'el mes que ve',
            '-1': 'el mes passat',
          },
          relativeTime: {
            future: {one: 'd’aquí a {0} mes', other: 'd’aquí a {0} mesos'},
            past: {one: 'fa {0} mes', other: 'fa {0} mesos'},
          },
        },
        day: {
          displayName: 'dia',
          relative: {
            0: 'avui',
            1: 'demà',
            2: 'demà passat',
            '-2': 'abans-d’ahir',
            '-1': 'ahir',
          },
          relativeTime: {
            future: {one: 'd’aquí a {0} dia', other: 'd’aquí a {0} dies'},
            past: {one: 'fa {0} dia', other: 'fa {0} dies'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'aquesta hora'},
          relativeTime: {
            future: {one: 'd’aquí a {0} hora', other: 'd’aquí a {0} hores'},
            past: {one: 'fa {0} hora', other: 'fa {0} hores'},
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'aquest minut'},
          relativeTime: {
            future: {one: 'd’aquí a {0} minut', other: 'd’aquí a {0} minuts'},
            past: {one: 'fa {0} minut', other: 'fa {0} minuts'},
          },
        },
        second: {
          displayName: 'segon',
          relative: {0: 'ara'},
          relativeTime: {
            future: {one: 'd’aquí a {0} segon', other: 'd’aquí a {0} segons'},
            past: {one: 'fa {0} segon', other: 'fa {0} segons'},
          },
        },
      },
    },
    {locale: 'ca-ES', parentLocale: 'ca'},
    {locale: 'ca-FR', parentLocale: 'ca'},
    {locale: 'ca-IT', parentLocale: 'ca'},
    {
      locale: 'ce',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'шо',
          relative: {
            0: 'карарчу шарахь',
            1: 'рогӀерчу шарахь',
            '-1': 'даханчу шарахь',
          },
          relativeTime: {
            future: {one: '{0} шо даьлча', other: '{0} шо даьлча'},
            past: {one: '{0} шо хьалха', other: '{0} шо хьалха'},
          },
        },
        month: {
          displayName: 'бутт',
          relative: {
            0: 'карарчу баттахь',
            1: 'рогӀерчу баттахь',
            '-1': 'баханчу баттахь',
          },
          relativeTime: {
            future: {one: '{0} бутт баьлча', other: '{0} бутт баьлча'},
            past: {one: '{0} бутт хьалха', other: '{0} бутт хьалха'},
          },
        },
        day: {
          displayName: 'де',
          relative: {0: 'тахана', 1: 'кхана', '-1': 'селхана'},
          relativeTime: {
            future: {one: '{0} де даьлча', other: '{0} де даьлча'},
            past: {one: '{0} де хьалха', other: '{0} де хьалха'},
          },
        },
        hour: {
          displayName: 'сахьт',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: '{0} сахьт даьлча', other: '{0} сахьт даьлча'},
            past: {one: '{0} сахьт хьалха', other: '{0} сахьт хьалха'},
          },
        },
        minute: {
          displayName: 'минот',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: '{0} минот яьлча', other: '{0} минот яьлча'},
            past: {one: '{0} минот хьалха', other: '{0} минот хьалха'},
          },
        },
        second: {
          displayName: 'секунд',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: '{0} секунд яьлча', other: '{0} секунд яьлча'},
            past: {one: '{0} секунд хьалха', other: '{0} секунд хьалха'},
          },
        },
      },
    },
    {
      locale: 'cgg',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Omwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Omwezi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Eizooba',
          relative: {0: 'Erizooba', 1: 'Nyenkyakare', '-1': 'Nyomwabazyo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Shaaha',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Edakiika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Obucweka/Esekendi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'chr',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ᎤᏕᏘᏴᏌᏗᏒᎢ',
          relative: {0: 'ᎯᎠ ᏧᏕᏘᏴᏒᏘ', 1: 'ᎡᏘᏴᎢ', '-1': 'ᎡᏘ ᏥᎨᏒ'},
          relativeTime: {
            future: {one: 'ᎾᎿ {0} ᎤᏕᏘᏴᏌᏗᏒᎢ', other: 'ᎾᎿ {0} ᎢᏧᏕᏘᏴᏌᏗᏒᎢ'},
            past: {one: '{0} ᎤᏕᏘᏴᏌᏗᏒᎢ ᏥᎨᏒ', other: '{0} ᎢᏧᏕᏘᏴᏌᏗᏒᎢ ᏥᎨᏒ'},
          },
        },
        month: {
          displayName: 'ᎧᎸᎢ',
          relative: {0: 'ᎯᎠ ᎧᎸᎢ', 1: 'ᏔᎵᏁ ᎧᎸᎢ', '-1': 'ᎧᎸᎢ ᏥᎨᏒ'},
          relativeTime: {
            future: {one: 'ᎾᎿ {0} ᎧᎸᎢ', other: 'ᎾᎿ {0} ᏗᎧᎸᎢ'},
            past: {one: 'ᎾᎿ {0} ᎧᎸᎢ ᏥᎨᏒ', other: 'ᎾᎿ {0} ᏗᎧᎸᎢ ᏥᎨᏒ'},
          },
        },
        day: {
          displayName: 'ᎢᎦ',
          relative: {0: 'ᎪᎯ ᎢᎦ', 1: 'ᏌᎾᎴᎢ', '-1': 'ᏒᎯ'},
          relativeTime: {
            future: {one: 'ᎾᎿ {0} ᎢᎦ', other: 'ᎾᎿ {0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ'},
            past: {one: '{0} ᎢᎦ ᏥᎨᏒ', other: '{0} ᎯᎸᏍᎩ ᏧᏒᎯᏛ ᏥᎨᏒ'},
          },
        },
        hour: {
          displayName: 'ᏑᏟᎶᏓ',
          relative: {0: 'ᎯᎠ ᏑᏟᎶᏓ'},
          relativeTime: {
            future: {one: 'ᎾᎿ {0} ᏑᏟᎶᏓ', other: 'ᎾᎿ {0} ᎢᏳᏟᎶᏓ'},
            past: {one: '{0} ᏑᏟᎶᏓ ᏥᎨᏒ', other: '{0} ᎢᏳᏟᎶᏓ ᏥᎨᏒ'},
          },
        },
        minute: {
          displayName: 'ᎢᏯᏔᏬᏍᏔᏅ',
          relative: {0: 'ᎯᎠ ᎢᏯᏔᏬᏍᏔᏅ'},
          relativeTime: {
            future: {one: 'ᎾᎿ {0} ᎢᏯᏔᏬᏍᏔᏅ', other: 'ᎾᎿ {0} ᎢᏯᏔᏬᏍᏔᏅ'},
            past: {one: 'ᎾᎿ {0} ᎢᏯᏔᏬᏍᏔᏅ ᏥᎨᏒ', other: 'ᎾᎿ {0} ᎢᏯᏔᏬᏍᏔᏅ ᏥᎨᏒ'},
          },
        },
        second: {
          displayName: 'ᎠᏎᏢ',
          relative: {0: 'ᏃᏊ'},
          relativeTime: {
            future: {one: 'ᎾᎿ {0} ᎠᏎᏢ', other: 'ᎾᎿ {0} ᏓᏓᎾᏩᏍᎬ ᏥᎨᏒ'},
            past: {one: '{0} ᎠᏎᏢ ᏥᎨᏒ', other: '{0} ᏓᏓᎾᏩᏍᎬ ᏥᎨᏒ'},
          },
        },
      },
    },
    {
      locale: 'ckb',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {locale: 'ckb-IR', parentLocale: 'ckb'},
    {
      locale: 'cs',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1];
        return t
          ? 'other'
          : 1 == e && i
          ? 'one'
          : r >= 2 && r <= 4 && i
          ? 'few'
          : i
          ? 'other'
          : 'many';
      },
      fields: {
        year: {
          displayName: 'rok',
          relative: {0: 'tento rok', 1: 'příští rok', '-1': 'minulý rok'},
          relativeTime: {
            future: {
              one: 'za {0} rok',
              few: 'za {0} roky',
              many: 'za {0} roku',
              other: 'za {0} let',
            },
            past: {
              one: 'před {0} rokem',
              few: 'před {0} lety',
              many: 'před {0} roku',
              other: 'před {0} lety',
            },
          },
        },
        month: {
          displayName: 'měsíc',
          relative: {0: 'tento měsíc', 1: 'příští měsíc', '-1': 'minulý měsíc'},
          relativeTime: {
            future: {
              one: 'za {0} měsíc',
              few: 'za {0} měsíce',
              many: 'za {0} měsíce',
              other: 'za {0} měsíců',
            },
            past: {
              one: 'před {0} měsícem',
              few: 'před {0} měsíci',
              many: 'před {0} měsíce',
              other: 'před {0} měsíci',
            },
          },
        },
        day: {
          displayName: 'den',
          relative: {
            0: 'dnes',
            1: 'zítra',
            2: 'pozítří',
            '-2': 'předevčírem',
            '-1': 'včera',
          },
          relativeTime: {
            future: {
              one: 'za {0} den',
              few: 'za {0} dny',
              many: 'za {0} dne',
              other: 'za {0} dní',
            },
            past: {
              one: 'před {0} dnem',
              few: 'před {0} dny',
              many: 'před {0} dne',
              other: 'před {0} dny',
            },
          },
        },
        hour: {
          displayName: 'hodina',
          relative: {0: 'tuto hodinu'},
          relativeTime: {
            future: {
              one: 'za {0} hodinu',
              few: 'za {0} hodiny',
              many: 'za {0} hodiny',
              other: 'za {0} hodin',
            },
            past: {
              one: 'před {0} hodinou',
              few: 'před {0} hodinami',
              many: 'před {0} hodiny',
              other: 'před {0} hodinami',
            },
          },
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'tuto minutu'},
          relativeTime: {
            future: {
              one: 'za {0} minutu',
              few: 'za {0} minuty',
              many: 'za {0} minuty',
              other: 'za {0} minut',
            },
            past: {
              one: 'před {0} minutou',
              few: 'před {0} minutami',
              many: 'před {0} minuty',
              other: 'před {0} minutami',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'nyní'},
          relativeTime: {
            future: {
              one: 'za {0} sekundu',
              few: 'za {0} sekundy',
              many: 'za {0} sekundy',
              other: 'za {0} sekund',
            },
            past: {
              one: 'před {0} sekundou',
              few: 'před {0} sekundami',
              many: 'před {0} sekundy',
              other: 'před {0} sekundami',
            },
          },
        },
      },
    },
    {
      locale: 'cu',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'cy',
      pluralRuleFunction: function(e, t) {
        return t
          ? 0 == e || 7 == e || 8 == e || 9 == e
            ? 'zero'
            : 1 == e
            ? 'one'
            : 2 == e
            ? 'two'
            : 3 == e || 4 == e
            ? 'few'
            : 5 == e || 6 == e
            ? 'many'
            : 'other'
          : 0 == e
          ? 'zero'
          : 1 == e
          ? 'one'
          : 2 == e
          ? 'two'
          : 3 == e
          ? 'few'
          : 6 == e
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'blwyddyn',
          relative: {0: 'eleni', 1: 'blwyddyn nesaf', '-1': 'llynedd'},
          relativeTime: {
            future: {
              zero: 'ymhen {0} mlynedd',
              one: 'ymhen blwyddyn',
              two: 'ymhen {0} flynedd',
              few: 'ymhen {0} blynedd',
              many: 'ymhen {0} blynedd',
              other: 'ymhen {0} mlynedd',
            },
            past: {
              zero: '{0} o flynyddoedd yn ôl',
              one: 'blwyddyn yn ôl',
              two: '{0} flynedd yn ôl',
              few: '{0} blynedd yn ôl',
              many: '{0} blynedd yn ôl',
              other: '{0} o flynyddoedd yn ôl',
            },
          },
        },
        month: {
          displayName: 'mis',
          relative: {0: 'y mis hwn', 1: 'mis nesaf', '-1': 'mis diwethaf'},
          relativeTime: {
            future: {
              zero: 'ymhen {0} mis',
              one: 'ymhen mis',
              two: 'ymhen deufis',
              few: 'ymhen {0} mis',
              many: 'ymhen {0} mis',
              other: 'ymhen {0} mis',
            },
            past: {
              zero: '{0} mis yn ôl',
              one: '{0} mis yn ôl',
              two: '{0} fis yn ôl',
              few: '{0} mis yn ôl',
              many: '{0} mis yn ôl',
              other: '{0} mis yn ôl',
            },
          },
        },
        day: {
          displayName: 'dydd',
          relative: {
            0: 'heddiw',
            1: 'yfory',
            2: 'drennydd',
            '-2': 'echdoe',
            '-1': 'ddoe',
          },
          relativeTime: {
            future: {
              zero: 'ymhen {0} diwrnod',
              one: 'ymhen diwrnod',
              two: 'ymhen deuddydd',
              few: 'ymhen tridiau',
              many: 'ymhen {0} diwrnod',
              other: 'ymhen {0} diwrnod',
            },
            past: {
              zero: '{0} diwrnod yn ôl',
              one: '{0} diwrnod yn ôl',
              two: '{0} ddiwrnod yn ôl',
              few: '{0} diwrnod yn ôl',
              many: '{0} diwrnod yn ôl',
              other: '{0} diwrnod yn ôl',
            },
          },
        },
        hour: {
          displayName: 'awr',
          relative: {0: 'yr awr hon'},
          relativeTime: {
            future: {
              zero: 'ymhen {0} awr',
              one: 'ymhen awr',
              two: 'ymhen {0} awr',
              few: 'ymhen {0} awr',
              many: 'ymhen {0} awr',
              other: 'ymhen {0} awr',
            },
            past: {
              zero: '{0} awr yn ôl',
              one: 'awr yn ôl',
              two: '{0} awr yn ôl',
              few: '{0} awr yn ôl',
              many: '{0} awr yn ôl',
              other: '{0} awr yn ôl',
            },
          },
        },
        minute: {
          displayName: 'munud',
          relative: {0: 'y funud hon'},
          relativeTime: {
            future: {
              zero: 'ymhen {0} munud',
              one: 'ymhen munud',
              two: 'ymhen {0} funud',
              few: 'ymhen {0} munud',
              many: 'ymhen {0} munud',
              other: 'ymhen {0} munud',
            },
            past: {
              zero: '{0} munud yn ôl',
              one: '{0} munud yn ôl',
              two: '{0} funud yn ôl',
              few: '{0} munud yn ôl',
              many: '{0} munud yn ôl',
              other: '{0} munud yn ôl',
            },
          },
        },
        second: {
          displayName: 'eiliad',
          relative: {0: 'nawr'},
          relativeTime: {
            future: {
              zero: 'ymhen {0} eiliad',
              one: 'ymhen eiliad',
              two: 'ymhen {0} eiliad',
              few: 'ymhen {0} eiliad',
              many: 'ymhen {0} eiliad',
              other: 'ymhen {0} eiliad',
            },
            past: {
              zero: '{0} eiliad yn ôl',
              one: 'eiliad yn ôl',
              two: '{0} eiliad yn ôl',
              few: '{0} eiliad yn ôl',
              many: '{0} eiliad yn ôl',
              other: '{0} eiliad yn ôl',
            },
          },
        },
      },
    },
    {
      locale: 'da',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = Number(a[0]) == e;
        return t
          ? 'other'
          : 1 != e && (i || (0 != r && 1 != r))
          ? 'other'
          : 'one';
      },
      fields: {
        year: {
          displayName: 'år',
          relative: {0: 'i år', 1: 'næste år', '-1': 'sidste år'},
          relativeTime: {
            future: {one: 'om {0} år', other: 'om {0} år'},
            past: {one: 'for {0} år siden', other: 'for {0} år siden'},
          },
        },
        month: {
          displayName: 'måned',
          relative: {0: 'denne måned', 1: 'næste måned', '-1': 'sidste måned'},
          relativeTime: {
            future: {one: 'om {0} måned', other: 'om {0} måneder'},
            past: {one: 'for {0} måned siden', other: 'for {0} måneder siden'},
          },
        },
        day: {
          displayName: 'dag',
          relative: {
            0: 'i dag',
            1: 'i morgen',
            2: 'i overmorgen',
            '-2': 'i forgårs',
            '-1': 'i går',
          },
          relativeTime: {
            future: {one: 'om {0} dag', other: 'om {0} dage'},
            past: {one: 'for {0} dag siden', other: 'for {0} dage siden'},
          },
        },
        hour: {
          displayName: 'time',
          relative: {0: 'i den kommende time'},
          relativeTime: {
            future: {one: 'om {0} time', other: 'om {0} timer'},
            past: {one: 'for {0} time siden', other: 'for {0} timer siden'},
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'i det kommende minut'},
          relativeTime: {
            future: {one: 'om {0} minut', other: 'om {0} minutter'},
            past: {one: 'for {0} minut siden', other: 'for {0} minutter siden'},
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'nu'},
          relativeTime: {
            future: {one: 'om {0} sekund', other: 'om {0} sekunder'},
            past: {
              one: 'for {0} sekund siden',
              other: 'for {0} sekunder siden',
            },
          },
        },
      },
    },
    {locale: 'da-GL', parentLocale: 'da'},
    {
      locale: 'dav',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mori',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ituku',
          relative: {0: 'Idime', 1: 'Kesho', '-1': 'Iguo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'de',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
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
    {
      locale: 'dje',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Jiiri',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Handu',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Zaari',
          relative: {0: 'Hõo', 1: 'Suba', '-1': 'Bi'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Guuru',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Miniti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Miti',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'dsb',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-2),
          l = i.slice(-2);
        return t
          ? 'other'
          : (o && 1 == n) || 1 == l
          ? 'one'
          : (o && 2 == n) || 2 == l
          ? 'two'
          : (o && (3 == n || 4 == n)) || 3 == l || 4 == l
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'lěto',
          relative: {0: 'lětosa', 1: 'znowa', '-1': 'łoni'},
          relativeTime: {
            future: {
              one: 'za {0} lěto',
              two: 'za {0} lěśe',
              few: 'za {0} lěta',
              other: 'za {0} lět',
            },
            past: {
              one: 'pśed {0} lětom',
              two: 'pśed {0} lětoma',
              few: 'pśed {0} lětami',
              other: 'pśed {0} lětami',
            },
          },
        },
        month: {
          displayName: 'mjasec',
          relative: {
            0: 'ten mjasec',
            1: 'pśiducy mjasec',
            '-1': 'slědny mjasec',
          },
          relativeTime: {
            future: {
              one: 'za {0} mjasec',
              two: 'za {0} mjaseca',
              few: 'za {0} mjasecy',
              other: 'za {0} mjasecow',
            },
            past: {
              one: 'pśed {0} mjasecom',
              two: 'pśed {0} mjasecoma',
              few: 'pśed {0} mjasecami',
              other: 'pśed {0} mjasecami',
            },
          },
        },
        day: {
          displayName: 'źeń',
          relative: {0: 'źinsa', 1: 'witśe', '-1': 'cora'},
          relativeTime: {
            future: {
              one: 'za {0} źeń',
              two: 'za {0} dnja',
              few: 'za {0} dny',
              other: 'za {0} dnjow',
            },
            past: {
              one: 'pśed {0} dnjom',
              two: 'pśed {0} dnjoma',
              few: 'pśed {0} dnjami',
              other: 'pśed {0} dnjami',
            },
          },
        },
        hour: {
          displayName: 'góźina',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: 'za {0} góźinu',
              two: 'za {0} góźinje',
              few: 'za {0} góźiny',
              other: 'za {0} góźin',
            },
            past: {
              one: 'pśed {0} góźinu',
              two: 'pśed {0} góźinoma',
              few: 'pśed {0} góźinami',
              other: 'pśed {0} góźinami',
            },
          },
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: 'za {0} minutu',
              two: 'za {0} minuśe',
              few: 'za {0} minuty',
              other: 'za {0} minutow',
            },
            past: {
              one: 'pśed {0} minutu',
              two: 'pśed {0} minutoma',
              few: 'pśed {0} minutami',
              other: 'pśed {0} minutami',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'now'},
          relativeTime: {
            future: {
              one: 'za {0} sekundu',
              two: 'za {0} sekunźe',
              few: 'za {0} sekundy',
              other: 'za {0} sekundow',
            },
            past: {
              one: 'pśed {0} sekundu',
              two: 'pśed {0} sekundoma',
              few: 'pśed {0} sekundami',
              other: 'pśed {0} sekundami',
            },
          },
        },
      },
    },
    {
      locale: 'dua',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'mbú',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'mɔ́di',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'búnyá',
          relative: {0: 'wɛ́ŋgɛ̄', 1: 'kíɛlɛ', '-1': 'kíɛlɛ nítómb́í'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ŋgandɛ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ndɔkɔ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'píndí',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'dv',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'dyo',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Emit',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Fuleeŋ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Funak',
          relative: {0: 'Jaat', 1: 'Kajom', '-1': 'Fucen'},
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
    {
      locale: 'dz',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ལོ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {other: 'ལོ་འཁོར་ {0} ནང་'},
            past: {other: 'ལོ་འཁོར་ {0} ཧེ་མ་'},
          },
        },
        month: {
          displayName: 'ཟླ་ཝ་',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {other: 'ཟླཝ་ {0} ནང་'},
            past: {other: 'ཟླཝ་ {0} ཧེ་མ་'},
          },
        },
        day: {
          displayName: 'ཚེས་',
          relative: {
            0: 'ད་རིས་',
            1: 'ནངས་པ་',
            2: 'གནངས་ཚེ',
            '-2': 'ཁ་ཉིམ',
            '-1': 'ཁ་ཙ་',
          },
          relativeTime: {
            future: {other: 'ཉིནམ་ {0} ནང་'},
            past: {other: 'ཉིནམ་ {0} ཧེ་མ་'},
          },
        },
        hour: {
          displayName: 'ཆུ་ཚོད',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {other: 'ཆུ་ཚོད་ {0} ནང་'},
            past: {other: 'ཆུ་ཚོད་ {0} ཧེ་མ་'},
          },
        },
        minute: {
          displayName: 'སྐར་མ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: 'སྐར་མ་ {0} ནང་'},
            past: {other: 'སྐར་མ་ {0} ཧེ་མ་'},
          },
        },
        second: {
          displayName: 'སྐར་ཆཱ་',
          relative: {0: 'now'},
          relativeTime: {
            future: {other: 'སྐར་ཆ་ {0} ནང་'},
            past: {other: 'སྐར་ཆ་ {0} ཧེ་མ་'},
          },
        },
      },
    },
    {
      locale: 'ebu',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mweri',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mũthenya',
          relative: {0: 'Ũmũnthĩ', 1: 'Rũciũ', '-1': 'Ĩgoro'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ithaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Ndagĩka',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekondi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ee',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ƒe',
          relative: {0: 'ƒe sia', 1: 'ƒe si gbɔ na', '-1': 'ƒe si va yi'},
          relativeTime: {
            future: {one: 'le ƒe {0} me', other: 'le ƒe {0} me'},
            past: {one: 'ƒe {0} si va yi', other: 'ƒe {0} si wo va yi'},
          },
        },
        month: {
          displayName: 'ɣleti',
          relative: {
            0: 'ɣleti sia',
            1: 'ɣleti si gbɔ na',
            '-1': 'ɣleti si va yi',
          },
          relativeTime: {
            future: {one: 'le ɣleti {0} me', other: 'le ɣleti {0} wo me'},
            past: {one: 'ɣleti {0} si va yi', other: 'ɣleti {0} si wo va yi'},
          },
        },
        day: {
          displayName: 'ŋkeke',
          relative: {
            0: 'egbe',
            1: 'etsɔ si gbɔna',
            2: 'nyitsɔ si gbɔna',
            '-2': 'nyitsɔ si va yi',
            '-1': 'etsɔ si va yi',
          },
          relativeTime: {
            future: {one: 'le ŋkeke {0} me', other: 'le ŋkeke {0} wo me'},
            past: {one: 'ŋkeke {0} si va yi', other: 'ŋkeke {0} si wo va yi'},
          },
        },
        hour: {
          displayName: 'gaƒoƒo',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'le gaƒoƒo {0} me', other: 'le gaƒoƒo {0} wo me'},
            past: {one: 'gaƒoƒo {0} si va yi', other: 'gaƒoƒo {0} si wo va yi'},
          },
        },
        minute: {
          displayName: 'aɖabaƒoƒo',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: 'le aɖabaƒoƒo {0} me',
              other: 'le aɖabaƒoƒo {0} wo me',
            },
            past: {
              one: 'aɖabaƒoƒo {0} si va yi',
              other: 'aɖabaƒoƒo {0} si wo va yi',
            },
          },
        },
        second: {
          displayName: 'sekend',
          relative: {0: 'fifi'},
          relativeTime: {
            future: {one: 'le sekend {0} me', other: 'le sekend {0} wo me'},
            past: {one: 'sekend {0} si va yi', other: 'sekend {0} si wo va yi'},
          },
        },
      },
    },
    {locale: 'ee-TG', parentLocale: 'ee'},
    {
      locale: 'el',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'έτος',
          relative: {0: 'φέτος', 1: 'επόμενο έτος', '-1': 'πέρσι'},
          relativeTime: {
            future: {one: 'σε {0} έτος', other: 'σε {0} έτη'},
            past: {one: 'πριν από {0} έτος', other: 'πριν από {0} έτη'},
          },
        },
        month: {
          displayName: 'μήνας',
          relative: {
            0: 'τρέχων μήνας',
            1: 'επόμενος μήνας',
            '-1': 'προηγούμενος μήνας',
          },
          relativeTime: {
            future: {one: 'σε {0} μήνα', other: 'σε {0} μήνες'},
            past: {one: 'πριν από {0} μήνα', other: 'πριν από {0} μήνες'},
          },
        },
        day: {
          displayName: 'ημέρα',
          relative: {
            0: 'σήμερα',
            1: 'αύριο',
            2: 'μεθαύριο',
            '-2': 'προχθές',
            '-1': 'χθες',
          },
          relativeTime: {
            future: {one: 'σε {0} ημέρα', other: 'σε {0} ημέρες'},
            past: {one: 'πριν από {0} ημέρα', other: 'πριν από {0} ημέρες'},
          },
        },
        hour: {
          displayName: 'ώρα',
          relative: {0: 'αυτήν την ώρα'},
          relativeTime: {
            future: {one: 'σε {0} ώρα', other: 'σε {0} ώρες'},
            past: {one: 'πριν από {0} ώρα', other: 'πριν από {0} ώρες'},
          },
        },
        minute: {
          displayName: 'λεπτό',
          relative: {0: 'αυτό το λεπτό'},
          relativeTime: {
            future: {one: 'σε {0} λεπτό', other: 'σε {0} λεπτά'},
            past: {one: 'πριν από {0} λεπτό', other: 'πριν από {0} λεπτά'},
          },
        },
        second: {
          displayName: 'δευτερόλεπτο',
          relative: {0: 'τώρα'},
          relativeTime: {
            future: {one: 'σε {0} δευτερόλεπτο', other: 'σε {0} δευτερόλεπτα'},
            past: {
              one: 'πριν από {0} δευτερόλεπτο',
              other: 'πριν από {0} δευτερόλεπτα',
            },
          },
        },
      },
    },
    {locale: 'el-CY', parentLocale: 'el'},
    {
      locale: 'en',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = !a[1],
          i = Number(a[0]) == e,
          o = i && a[0].slice(-1),
          n = i && a[0].slice(-2);
        return t
          ? 1 == o && 11 != n
            ? 'one'
            : 2 == o && 12 != n
            ? 'two'
            : 3 == o && 13 != n
            ? 'few'
            : 'other'
          : 1 == e && r
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'year',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {one: 'in {0} year', other: 'in {0} years'},
            past: {one: '{0} year ago', other: '{0} years ago'},
          },
        },
        month: {
          displayName: 'month',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: 'in {0} month', other: 'in {0} months'},
            past: {one: '{0} month ago', other: '{0} months ago'},
          },
        },
        day: {
          displayName: 'day',
          relative: {0: 'today', 1: 'tomorrow', '-1': 'yesterday'},
          relativeTime: {
            future: {one: 'in {0} day', other: 'in {0} days'},
            past: {one: '{0} day ago', other: '{0} days ago'},
          },
        },
        hour: {
          displayName: 'hour',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'in {0} hour', other: 'in {0} hours'},
            past: {one: '{0} hour ago', other: '{0} hours ago'},
          },
        },
        minute: {
          displayName: 'minute',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'in {0} minute', other: 'in {0} minutes'},
            past: {one: '{0} minute ago', other: '{0} minutes ago'},
          },
        },
        second: {
          displayName: 'second',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: 'in {0} second', other: 'in {0} seconds'},
            past: {one: '{0} second ago', other: '{0} seconds ago'},
          },
        },
      },
    },
    {locale: 'en-001', parentLocale: 'en'},
    {locale: 'en-150', parentLocale: 'en-001'},
    {locale: 'en-AG', parentLocale: 'en-001'},
    {locale: 'en-AI', parentLocale: 'en-001'},
    {locale: 'en-AS', parentLocale: 'en'},
    {locale: 'en-AT', parentLocale: 'en-150'},
    {locale: 'en-AU', parentLocale: 'en-001'},
    {locale: 'en-BB', parentLocale: 'en-001'},
    {locale: 'en-BE', parentLocale: 'en-001'},
    {locale: 'en-BI', parentLocale: 'en'},
    {locale: 'en-BM', parentLocale: 'en-001'},
    {locale: 'en-BS', parentLocale: 'en-001'},
    {locale: 'en-BW', parentLocale: 'en-001'},
    {locale: 'en-BZ', parentLocale: 'en-001'},
    {locale: 'en-CA', parentLocale: 'en-001'},
    {locale: 'en-CC', parentLocale: 'en-001'},
    {locale: 'en-CH', parentLocale: 'en-150'},
    {locale: 'en-CK', parentLocale: 'en-001'},
    {locale: 'en-CM', parentLocale: 'en-001'},
    {locale: 'en-CX', parentLocale: 'en-001'},
    {locale: 'en-CY', parentLocale: 'en-001'},
    {locale: 'en-DE', parentLocale: 'en-150'},
    {locale: 'en-DG', parentLocale: 'en-001'},
    {locale: 'en-DK', parentLocale: 'en-150'},
    {locale: 'en-DM', parentLocale: 'en-001'},
    {
      locale: 'en-Dsrt',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {locale: 'en-ER', parentLocale: 'en-001'},
    {locale: 'en-FI', parentLocale: 'en-150'},
    {locale: 'en-FJ', parentLocale: 'en-001'},
    {locale: 'en-FK', parentLocale: 'en-001'},
    {locale: 'en-FM', parentLocale: 'en-001'},
    {locale: 'en-GB', parentLocale: 'en-001'},
    {locale: 'en-GD', parentLocale: 'en-001'},
    {locale: 'en-GG', parentLocale: 'en-001'},
    {locale: 'en-GH', parentLocale: 'en-001'},
    {locale: 'en-GI', parentLocale: 'en-001'},
    {locale: 'en-GM', parentLocale: 'en-001'},
    {locale: 'en-GU', parentLocale: 'en'},
    {locale: 'en-GY', parentLocale: 'en-001'},
    {locale: 'en-HK', parentLocale: 'en-001'},
    {locale: 'en-IE', parentLocale: 'en-001'},
    {locale: 'en-IL', parentLocale: 'en-001'},
    {locale: 'en-IM', parentLocale: 'en-001'},
    {locale: 'en-IN', parentLocale: 'en-001'},
    {locale: 'en-IO', parentLocale: 'en-001'},
    {locale: 'en-JE', parentLocale: 'en-001'},
    {locale: 'en-JM', parentLocale: 'en-001'},
    {locale: 'en-KE', parentLocale: 'en-001'},
    {locale: 'en-KI', parentLocale: 'en-001'},
    {locale: 'en-KN', parentLocale: 'en-001'},
    {locale: 'en-KY', parentLocale: 'en-001'},
    {locale: 'en-LC', parentLocale: 'en-001'},
    {locale: 'en-LR', parentLocale: 'en-001'},
    {locale: 'en-LS', parentLocale: 'en-001'},
    {locale: 'en-MG', parentLocale: 'en-001'},
    {locale: 'en-MH', parentLocale: 'en'},
    {locale: 'en-MO', parentLocale: 'en-001'},
    {locale: 'en-MP', parentLocale: 'en'},
    {locale: 'en-MS', parentLocale: 'en-001'},
    {locale: 'en-MT', parentLocale: 'en-001'},
    {locale: 'en-MU', parentLocale: 'en-001'},
    {locale: 'en-MW', parentLocale: 'en-001'},
    {locale: 'en-MY', parentLocale: 'en-001'},
    {locale: 'en-NA', parentLocale: 'en-001'},
    {locale: 'en-NF', parentLocale: 'en-001'},
    {locale: 'en-NG', parentLocale: 'en-001'},
    {locale: 'en-NL', parentLocale: 'en-150'},
    {locale: 'en-NR', parentLocale: 'en-001'},
    {locale: 'en-NU', parentLocale: 'en-001'},
    {locale: 'en-NZ', parentLocale: 'en-001'},
    {locale: 'en-PG', parentLocale: 'en-001'},
    {locale: 'en-PH', parentLocale: 'en-001'},
    {locale: 'en-PK', parentLocale: 'en-001'},
    {locale: 'en-PN', parentLocale: 'en-001'},
    {locale: 'en-PR', parentLocale: 'en'},
    {locale: 'en-PW', parentLocale: 'en-001'},
    {locale: 'en-RW', parentLocale: 'en-001'},
    {locale: 'en-SB', parentLocale: 'en-001'},
    {locale: 'en-SC', parentLocale: 'en-001'},
    {locale: 'en-SD', parentLocale: 'en-001'},
    {locale: 'en-SE', parentLocale: 'en-150'},
    {locale: 'en-SG', parentLocale: 'en-001'},
    {locale: 'en-SH', parentLocale: 'en-001'},
    {locale: 'en-SI', parentLocale: 'en-150'},
    {locale: 'en-SL', parentLocale: 'en-001'},
    {locale: 'en-SS', parentLocale: 'en-001'},
    {locale: 'en-SX', parentLocale: 'en-001'},
    {locale: 'en-SZ', parentLocale: 'en-001'},
    {
      locale: 'en-Shaw',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {locale: 'en-TC', parentLocale: 'en-001'},
    {locale: 'en-TK', parentLocale: 'en-001'},
    {locale: 'en-TO', parentLocale: 'en-001'},
    {locale: 'en-TT', parentLocale: 'en-001'},
    {locale: 'en-TV', parentLocale: 'en-001'},
    {locale: 'en-TZ', parentLocale: 'en-001'},
    {locale: 'en-UG', parentLocale: 'en-001'},
    {locale: 'en-UM', parentLocale: 'en'},
    {locale: 'en-US', parentLocale: 'en'},
    {locale: 'en-VC', parentLocale: 'en-001'},
    {locale: 'en-VG', parentLocale: 'en-001'},
    {locale: 'en-VI', parentLocale: 'en'},
    {locale: 'en-VU', parentLocale: 'en-001'},
    {locale: 'en-WS', parentLocale: 'en-001'},
    {locale: 'en-ZA', parentLocale: 'en-001'},
    {locale: 'en-ZM', parentLocale: 'en-001'},
    {locale: 'en-ZW', parentLocale: 'en-001'},
    {
      locale: 'eo',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'es',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'anteayer',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {locale: 'es-419', parentLocale: 'es'},
    {locale: 'es-AR', parentLocale: 'es-419'},
    {locale: 'es-BO', parentLocale: 'es-419'},
    {locale: 'es-BR', parentLocale: 'es-419'},
    {locale: 'es-BZ', parentLocale: 'es-419'},
    {locale: 'es-CL', parentLocale: 'es-419'},
    {locale: 'es-CO', parentLocale: 'es-419'},
    {
      locale: 'es-CR',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antier',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {locale: 'es-CU', parentLocale: 'es-419'},
    {
      locale: 'es-DO',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'Año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'Mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'Día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'anteayer',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'Minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'Segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {locale: 'es-EA', parentLocale: 'es'},
    {locale: 'es-EC', parentLocale: 'es-419'},
    {locale: 'es-GQ', parentLocale: 'es'},
    {
      locale: 'es-GT',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antier',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {
      locale: 'es-HN',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antier',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {locale: 'es-IC', parentLocale: 'es'},
    {
      locale: 'es-MX',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el año próximo', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el mes próximo', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'en {0} mes', other: 'en {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antier',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {
      locale: 'es-NI',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antier',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {
      locale: 'es-PA',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antier',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {locale: 'es-PE', parentLocale: 'es-419'},
    {locale: 'es-PH', parentLocale: 'es'},
    {locale: 'es-PR', parentLocale: 'es-419'},
    {
      locale: 'es-PY',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antes de ayer',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {
      locale: 'es-SV',
      parentLocale: 'es-419',
      fields: {
        year: {
          displayName: 'año',
          relative: {0: 'este año', 1: 'el próximo año', '-1': 'el año pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} año', other: 'dentro de {0} años'},
            past: {one: 'hace {0} año', other: 'hace {0} años'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'el próximo mes', '-1': 'el mes pasado'},
          relativeTime: {
            future: {one: 'dentro de {0} mes', other: 'dentro de {0} meses'},
            past: {one: 'hace {0} mes', other: 'hace {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoy',
            1: 'mañana',
            2: 'pasado mañana',
            '-2': 'antier',
            '-1': 'ayer',
          },
          relativeTime: {
            future: {one: 'dentro de {0} día', other: 'dentro de {0} días'},
            past: {one: 'hace {0} día', other: 'hace {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'hace {0} hora', other: 'hace {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'hace {0} minuto', other: 'hace {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ahora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'hace {0} segundo', other: 'hace {0} segundos'},
          },
        },
      },
    },
    {locale: 'es-US', parentLocale: 'es-419'},
    {locale: 'es-UY', parentLocale: 'es-419'},
    {locale: 'es-VE', parentLocale: 'es-419'},
    {
      locale: 'et',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'aasta',
          relative: {
            0: 'käesolev aasta',
            1: 'järgmine aasta',
            '-1': 'eelmine aasta',
          },
          relativeTime: {
            future: {one: '{0} aasta pärast', other: '{0} aasta pärast'},
            past: {one: '{0} aasta eest', other: '{0} aasta eest'},
          },
        },
        month: {
          displayName: 'kuu',
          relative: {0: 'käesolev kuu', 1: 'järgmine kuu', '-1': 'eelmine kuu'},
          relativeTime: {
            future: {one: '{0} kuu pärast', other: '{0} kuu pärast'},
            past: {one: '{0} kuu eest', other: '{0} kuu eest'},
          },
        },
        day: {
          displayName: 'päev',
          relative: {
            0: 'täna',
            1: 'homme',
            2: 'ülehomme',
            '-2': 'üleeile',
            '-1': 'eile',
          },
          relativeTime: {
            future: {one: '{0} päeva pärast', other: '{0} päeva pärast'},
            past: {one: '{0} päeva eest', other: '{0} päeva eest'},
          },
        },
        hour: {
          displayName: 'tund',
          relative: {0: 'praegusel tunnil'},
          relativeTime: {
            future: {one: '{0} tunni pärast', other: '{0} tunni pärast'},
            past: {one: '{0} tunni eest', other: '{0} tunni eest'},
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'praegusel minutil'},
          relativeTime: {
            future: {one: '{0} minuti pärast', other: '{0} minuti pärast'},
            past: {one: '{0} minuti eest', other: '{0} minuti eest'},
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'nüüd'},
          relativeTime: {
            future: {one: '{0} sekundi pärast', other: '{0} sekundi pärast'},
            past: {one: '{0} sekundi eest', other: '{0} sekundi eest'},
          },
        },
      },
    },
    {
      locale: 'eu',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'urtea',
          relative: {0: 'aurten', 1: 'hurrengo urtea', '-1': 'aurreko urtea'},
          relativeTime: {
            future: {one: '{0} urte barru', other: '{0} urte barru'},
            past: {one: 'Duela {0} urte', other: 'Duela {0} urte'},
          },
        },
        month: {
          displayName: 'hilabetea',
          relative: {
            0: 'hilabete hau',
            1: 'hurrengo hilabetea',
            '-1': 'aurreko hilabetea',
          },
          relativeTime: {
            future: {one: '{0} hilabete barru', other: '{0} hilabete barru'},
            past: {one: 'Duela {0} hilabete', other: 'Duela {0} hilabete'},
          },
        },
        day: {
          displayName: 'eguna',
          relative: {
            0: 'gaur',
            1: 'bihar',
            2: 'etzi',
            '-2': 'herenegun',
            '-1': 'atzo',
          },
          relativeTime: {
            future: {one: '{0} egun barru', other: '{0} egun barru'},
            past: {one: 'Duela {0} egun', other: 'Duela {0} egun'},
          },
        },
        hour: {
          displayName: 'ordua',
          relative: {0: 'ordu honetan'},
          relativeTime: {
            future: {one: '{0} ordu barru', other: '{0} ordu barru'},
            past: {one: 'Duela {0} ordu', other: 'Duela {0} ordu'},
          },
        },
        minute: {
          displayName: 'minutua',
          relative: {0: 'minutu honetan'},
          relativeTime: {
            future: {one: '{0} minutu barru', other: '{0} minutu barru'},
            past: {one: 'Duela {0} minutu', other: 'Duela {0} minutu'},
          },
        },
        second: {
          displayName: 'segundoa',
          relative: {0: 'orain'},
          relativeTime: {
            future: {one: '{0} segundo barru', other: '{0} segundo barru'},
            past: {one: 'Duela {0} segundo', other: 'Duela {0} segundo'},
          },
        },
      },
    },
    {
      locale: 'ewo',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'M̀bú',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ngɔn',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Amǒs',
          relative: {0: 'Aná', 1: 'Okírí', '-1': 'Angogé'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Awola',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Enútɛn',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Akábəga',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'fa',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'سال',
          relative: {0: 'امسال', 1: 'سال آینده', '-1': 'سال گذشته'},
          relativeTime: {
            future: {one: '{0} سال بعد', other: '{0} سال بعد'},
            past: {one: '{0} سال پیش', other: '{0} سال پیش'},
          },
        },
        month: {
          displayName: 'ماه',
          relative: {0: 'این ماه', 1: 'ماه آینده', '-1': 'ماه گذشته'},
          relativeTime: {
            future: {one: '{0} ماه بعد', other: '{0} ماه بعد'},
            past: {one: '{0} ماه پیش', other: '{0} ماه پیش'},
          },
        },
        day: {
          displayName: 'روز',
          relative: {
            0: 'امروز',
            1: 'فردا',
            2: 'پس‌فردا',
            '-2': 'پریروز',
            '-1': 'دیروز',
          },
          relativeTime: {
            future: {one: '{0} روز بعد', other: '{0} روز بعد'},
            past: {one: '{0} روز پیش', other: '{0} روز پیش'},
          },
        },
        hour: {
          displayName: 'ساعت',
          relative: {0: 'همین ساعت'},
          relativeTime: {
            future: {one: '{0} ساعت بعد', other: '{0} ساعت بعد'},
            past: {one: '{0} ساعت پیش', other: '{0} ساعت پیش'},
          },
        },
        minute: {
          displayName: 'دقیقه',
          relative: {0: 'همین دقیقه'},
          relativeTime: {
            future: {one: '{0} دقیقه بعد', other: '{0} دقیقه بعد'},
            past: {one: '{0} دقیقه پیش', other: '{0} دقیقه پیش'},
          },
        },
        second: {
          displayName: 'ثانیه',
          relative: {0: 'اکنون'},
          relativeTime: {
            future: {one: '{0} ثانیه بعد', other: '{0} ثانیه بعد'},
            past: {one: '{0} ثانیه پیش', other: '{0} ثانیه پیش'},
          },
        },
      },
    },
    {locale: 'fa-AF', parentLocale: 'fa'},
    {
      locale: 'ff',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : e >= 0 && e < 2 ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Hitaande',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Lewru',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ñalnde',
          relative: {0: 'Hannde', 1: 'Jaŋngo', '-1': 'Haŋki'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Waktu',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Hoƴom',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Majaango',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'ff-CM', parentLocale: 'ff'},
    {locale: 'ff-GN', parentLocale: 'ff'},
    {locale: 'ff-MR', parentLocale: 'ff'},
    {
      locale: 'fi',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'vuosi',
          relative: {0: 'tänä vuonna', 1: 'ensi vuonna', '-1': 'viime vuonna'},
          relativeTime: {
            future: {one: '{0} vuoden päästä', other: '{0} vuoden päästä'},
            past: {one: '{0} vuosi sitten', other: '{0} vuotta sitten'},
          },
        },
        month: {
          displayName: 'kuukausi',
          relative: {0: 'tässä kuussa', 1: 'ensi kuussa', '-1': 'viime kuussa'},
          relativeTime: {
            future: {
              one: '{0} kuukauden päästä',
              other: '{0} kuukauden päästä',
            },
            past: {one: '{0} kuukausi sitten', other: '{0} kuukautta sitten'},
          },
        },
        day: {
          displayName: 'päivä',
          relative: {
            0: 'tänään',
            1: 'huomenna',
            2: 'ylihuomenna',
            '-2': 'toissa päivänä',
            '-1': 'eilen',
          },
          relativeTime: {
            future: {one: '{0} päivän päästä', other: '{0} päivän päästä'},
            past: {one: '{0} päivä sitten', other: '{0} päivää sitten'},
          },
        },
        hour: {
          displayName: 'tunti',
          relative: {0: 'tämän tunnin aikana'},
          relativeTime: {
            future: {one: '{0} tunnin päästä', other: '{0} tunnin päästä'},
            past: {one: '{0} tunti sitten', other: '{0} tuntia sitten'},
          },
        },
        minute: {
          displayName: 'minuutti',
          relative: {0: 'tämän minuutin aikana'},
          relativeTime: {
            future: {one: '{0} minuutin päästä', other: '{0} minuutin päästä'},
            past: {one: '{0} minuutti sitten', other: '{0} minuuttia sitten'},
          },
        },
        second: {
          displayName: 'sekunti',
          relative: {0: 'nyt'},
          relativeTime: {
            future: {one: '{0} sekunnin päästä', other: '{0} sekunnin päästä'},
            past: {one: '{0} sekunti sitten', other: '{0} sekuntia sitten'},
          },
        },
      },
    },
    {
      locale: 'fil',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-1),
          l = i.slice(-1);
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : (o && (1 == r || 2 == r || 3 == r)) ||
            (o && 4 != n && 6 != n && 9 != n) ||
            (!o && 4 != l && 6 != l && 9 != l)
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'taon',
          relative: {
            0: 'ngayong taon',
            1: 'susunod na taon',
            '-1': 'nakaraang taon',
          },
          relativeTime: {
            future: {one: 'sa {0} taon', other: 'sa {0} (na) taon'},
            past: {
              one: '{0} taon ang nakalipas',
              other: '{0} (na) taon ang nakalipas',
            },
          },
        },
        month: {
          displayName: 'buwan',
          relative: {
            0: 'ngayong buwan',
            1: 'susunod na buwan',
            '-1': 'nakaraang buwan',
          },
          relativeTime: {
            future: {one: 'sa {0} buwan', other: 'sa {0} (na) buwan'},
            past: {
              one: '{0} buwan ang nakalipas',
              other: '{0} (na) buwan ang nakalipas',
            },
          },
        },
        day: {
          displayName: 'araw',
          relative: {
            0: 'ngayong araw',
            1: 'bukas',
            2: 'Samakalawa',
            '-2': 'Araw bago ang kahapon',
            '-1': 'kahapon',
          },
          relativeTime: {
            future: {one: 'sa {0} araw', other: 'sa {0} (na) araw'},
            past: {
              one: '{0} araw ang nakalipas',
              other: '{0} (na) araw ang nakalipas',
            },
          },
        },
        hour: {
          displayName: 'oras',
          relative: {0: 'ngayong oras'},
          relativeTime: {
            future: {one: 'sa {0} oras', other: 'sa {0} (na) oras'},
            past: {
              one: '{0} oras ang nakalipas',
              other: '{0} (na) oras ang nakalipas',
            },
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'sa minutong ito'},
          relativeTime: {
            future: {one: 'sa {0} minuto', other: 'sa {0} (na) minuto'},
            past: {
              one: '{0} minuto ang nakalipas',
              other: '{0} (na) minuto ang nakalipas',
            },
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'ngayon'},
          relativeTime: {
            future: {one: 'sa {0} segundo', other: 'sa {0} (na) segundo'},
            past: {
              one: '{0} segundo ang nakalipas',
              other: '{0} (na) segundo ang nakalipas',
            },
          },
        },
      },
    },
    {
      locale: 'fo',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ár',
          relative: {0: 'í ár', 1: 'næsta ár', '-1': 'í fjør'},
          relativeTime: {
            future: {one: 'um {0} ár', other: 'um {0} ár'},
            past: {one: '{0} ár síðan', other: '{0} ár síðan'},
          },
        },
        month: {
          displayName: 'mánaður',
          relative: {
            0: 'henda mánaðin',
            1: 'næsta mánað',
            '-1': 'seinasta mánað',
          },
          relativeTime: {
            future: {one: 'um {0} mánað', other: 'um {0} mánaðir'},
            past: {one: '{0} mánað síðan', other: '{0} mánaðir síðan'},
          },
        },
        day: {
          displayName: 'dagur',
          relative: {
            0: 'í dag',
            1: 'í morgin',
            2: 'í ovurmorgin',
            '-2': 'fyrradagin',
            '-1': 'í gjár',
          },
          relativeTime: {
            future: {one: 'um {0} dag', other: 'um {0} dagar'},
            past: {one: '{0} dagur síðan', other: '{0} dagar síðan'},
          },
        },
        hour: {
          displayName: 'tími',
          relative: {0: 'hendan tíman'},
          relativeTime: {
            future: {one: 'um {0} tíma', other: 'um {0} tímar'},
            past: {one: '{0} tími síðan', other: '{0} tímar síðan'},
          },
        },
        minute: {
          displayName: 'minuttur',
          relative: {0: 'hendan minuttin'},
          relativeTime: {
            future: {one: 'um {0} minutt', other: 'um {0} minuttir'},
            past: {one: '{0} minutt síðan', other: '{0} minuttir síðan'},
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'nú'},
          relativeTime: {
            future: {one: 'um {0} sekund', other: 'um {0} sekund'},
            past: {one: '{0} sekund síðan', other: '{0} sekund síðan'},
          },
        },
      },
    },
    {locale: 'fo-DK', parentLocale: 'fo'},
    {
      locale: 'fr',
      pluralRuleFunction: function(e, t) {
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : e >= 0 && e < 2
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'année',
          relative: {
            0: 'cette année',
            1: 'l’année prochaine',
            '-1': 'l’année dernière',
          },
          relativeTime: {
            future: {one: 'dans {0} an', other: 'dans {0} ans'},
            past: {one: 'il y a {0} an', other: 'il y a {0} ans'},
          },
        },
        month: {
          displayName: 'mois',
          relative: {
            0: 'ce mois-ci',
            1: 'le mois prochain',
            '-1': 'le mois dernier',
          },
          relativeTime: {
            future: {one: 'dans {0} mois', other: 'dans {0} mois'},
            past: {one: 'il y a {0} mois', other: 'il y a {0} mois'},
          },
        },
        day: {
          displayName: 'jour',
          relative: {
            0: 'aujourd’hui',
            1: 'demain',
            2: 'après-demain',
            '-2': 'avant-hier',
            '-1': 'hier',
          },
          relativeTime: {
            future: {one: 'dans {0} jour', other: 'dans {0} jours'},
            past: {one: 'il y a {0} jour', other: 'il y a {0} jours'},
          },
        },
        hour: {
          displayName: 'heure',
          relative: {0: 'cette heure-ci'},
          relativeTime: {
            future: {one: 'dans {0} heure', other: 'dans {0} heures'},
            past: {one: 'il y a {0} heure', other: 'il y a {0} heures'},
          },
        },
        minute: {
          displayName: 'minute',
          relative: {0: 'cette minute-ci'},
          relativeTime: {
            future: {one: 'dans {0} minute', other: 'dans {0} minutes'},
            past: {one: 'il y a {0} minute', other: 'il y a {0} minutes'},
          },
        },
        second: {
          displayName: 'seconde',
          relative: {0: 'maintenant'},
          relativeTime: {
            future: {one: 'dans {0} seconde', other: 'dans {0} secondes'},
            past: {one: 'il y a {0} seconde', other: 'il y a {0} secondes'},
          },
        },
      },
    },
    {locale: 'fr-BE', parentLocale: 'fr'},
    {locale: 'fr-BF', parentLocale: 'fr'},
    {locale: 'fr-BI', parentLocale: 'fr'},
    {locale: 'fr-BJ', parentLocale: 'fr'},
    {locale: 'fr-BL', parentLocale: 'fr'},
    {
      locale: 'fr-CA',
      parentLocale: 'fr',
      fields: {
        year: {
          displayName: 'année',
          relative: {
            0: 'cette année',
            1: 'l’année prochaine',
            '-1': 'l’année dernière',
          },
          relativeTime: {
            future: {one: 'Dans {0} an', other: 'Dans {0} ans'},
            past: {one: 'Il y a {0} an', other: 'Il y a {0} ans'},
          },
        },
        month: {
          displayName: 'mois',
          relative: {
            0: 'ce mois-ci',
            1: 'le mois prochain',
            '-1': 'le mois dernier',
          },
          relativeTime: {
            future: {one: 'dans {0} mois', other: 'dans {0} mois'},
            past: {one: 'il y a {0} mois', other: 'il y a {0} mois'},
          },
        },
        day: {
          displayName: 'jour',
          relative: {
            0: 'aujourd’hui',
            1: 'demain',
            2: 'après-demain',
            '-2': 'avant-hier',
            '-1': 'hier',
          },
          relativeTime: {
            future: {one: 'dans {0} jour', other: 'dans {0} jours'},
            past: {one: 'il y a {0} jour', other: 'il y a {0} jours'},
          },
        },
        hour: {
          displayName: 'heure',
          relative: {0: 'cette heure-ci'},
          relativeTime: {
            future: {one: 'dans {0} heure', other: 'dans {0} heures'},
            past: {one: 'il y a {0} heure', other: 'il y a {0} heures'},
          },
        },
        minute: {
          displayName: 'minute',
          relative: {0: 'cette minute-ci'},
          relativeTime: {
            future: {one: 'dans {0} minute', other: 'dans {0} minutes'},
            past: {one: 'il y a {0} minute', other: 'il y a {0} minutes'},
          },
        },
        second: {
          displayName: 'seconde',
          relative: {0: 'maintenant'},
          relativeTime: {
            future: {one: 'dans {0} seconde', other: 'dans {0} secondes'},
            past: {one: 'il y a {0} seconde', other: 'il y a {0} secondes'},
          },
        },
      },
    },
    {locale: 'fr-CD', parentLocale: 'fr'},
    {locale: 'fr-CF', parentLocale: 'fr'},
    {locale: 'fr-CG', parentLocale: 'fr'},
    {locale: 'fr-CH', parentLocale: 'fr'},
    {locale: 'fr-CI', parentLocale: 'fr'},
    {locale: 'fr-CM', parentLocale: 'fr'},
    {locale: 'fr-DJ', parentLocale: 'fr'},
    {locale: 'fr-DZ', parentLocale: 'fr'},
    {locale: 'fr-GA', parentLocale: 'fr'},
    {locale: 'fr-GF', parentLocale: 'fr'},
    {locale: 'fr-GN', parentLocale: 'fr'},
    {locale: 'fr-GP', parentLocale: 'fr'},
    {locale: 'fr-GQ', parentLocale: 'fr'},
    {locale: 'fr-HT', parentLocale: 'fr'},
    {locale: 'fr-KM', parentLocale: 'fr'},
    {locale: 'fr-LU', parentLocale: 'fr'},
    {locale: 'fr-MA', parentLocale: 'fr'},
    {locale: 'fr-MC', parentLocale: 'fr'},
    {locale: 'fr-MF', parentLocale: 'fr'},
    {locale: 'fr-MG', parentLocale: 'fr'},
    {locale: 'fr-ML', parentLocale: 'fr'},
    {locale: 'fr-MQ', parentLocale: 'fr'},
    {locale: 'fr-MR', parentLocale: 'fr'},
    {locale: 'fr-MU', parentLocale: 'fr'},
    {locale: 'fr-NC', parentLocale: 'fr'},
    {locale: 'fr-NE', parentLocale: 'fr'},
    {locale: 'fr-PF', parentLocale: 'fr'},
    {locale: 'fr-PM', parentLocale: 'fr'},
    {locale: 'fr-RE', parentLocale: 'fr'},
    {locale: 'fr-RW', parentLocale: 'fr'},
    {locale: 'fr-SC', parentLocale: 'fr'},
    {locale: 'fr-SN', parentLocale: 'fr'},
    {locale: 'fr-SY', parentLocale: 'fr'},
    {locale: 'fr-TD', parentLocale: 'fr'},
    {locale: 'fr-TG', parentLocale: 'fr'},
    {locale: 'fr-TN', parentLocale: 'fr'},
    {locale: 'fr-VU', parentLocale: 'fr'},
    {locale: 'fr-WF', parentLocale: 'fr'},
    {locale: 'fr-YT', parentLocale: 'fr'},
    {
      locale: 'fur',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'an',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {one: 'ca di {0} an', other: 'ca di {0} agns'},
            past: {one: '{0} an indaûr', other: '{0} agns indaûr'},
          },
        },
        month: {
          displayName: 'mês',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: 'ca di {0} mês', other: 'ca di {0} mês'},
            past: {one: '{0} mês indaûr', other: '{0} mês indaûr'},
          },
        },
        day: {
          displayName: 'dì',
          relative: {
            0: 'vuê',
            1: 'doman',
            2: 'passantdoman',
            '-2': 'îr l’altri',
            '-1': 'îr',
          },
          relativeTime: {
            future: {one: 'ca di {0} zornade', other: 'ca di {0} zornadis'},
            past: {one: '{0} zornade indaûr', other: '{0} zornadis indaûr'},
          },
        },
        hour: {
          displayName: 'ore',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'ca di {0} ore', other: 'ca di {0} oris'},
            past: {one: '{0} ore indaûr', other: '{0} oris indaûr'},
          },
        },
        minute: {
          displayName: 'minût',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'ca di {0} minût', other: 'ca di {0} minûts'},
            past: {one: '{0} minût indaûr', other: '{0} minûts indaûr'},
          },
        },
        second: {
          displayName: 'secont',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: 'ca di {0} secont', other: 'ca di {0} seconts'},
            past: {one: '{0} secont indaûr', other: '{0} seconts indaûr'},
          },
        },
      },
    },
    {
      locale: 'fy',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Jier',
          relative: {0: 'dit jier', 1: 'folgjend jier', '-1': 'foarich jier'},
          relativeTime: {
            future: {one: 'Oer {0} jier', other: 'Oer {0} jier'},
            past: {one: '{0} jier lyn', other: '{0} jier lyn'},
          },
        },
        month: {
          displayName: 'Moanne',
          relative: {
            0: 'dizze moanne',
            1: 'folgjende moanne',
            '-1': 'foarige moanne',
          },
          relativeTime: {
            future: {one: 'Oer {0} moanne', other: 'Oer {0} moannen'},
            past: {one: '{0} moanne lyn', other: '{0} moannen lyn'},
          },
        },
        day: {
          displayName: 'dei',
          relative: {
            0: 'vandaag',
            1: 'morgen',
            2: 'Oermorgen',
            '-2': 'eergisteren',
            '-1': 'gisteren',
          },
          relativeTime: {
            future: {one: 'Oer {0} dei', other: 'Oer {0} deien'},
            past: {one: '{0} dei lyn', other: '{0} deien lyn'},
          },
        },
        hour: {
          displayName: 'oere',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'Oer {0} oere', other: 'Oer {0} oere'},
            past: {one: '{0} oere lyn', other: '{0} oere lyn'},
          },
        },
        minute: {
          displayName: 'Minút',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'Oer {0} minút', other: 'Oer {0} minuten'},
            past: {one: '{0} minút lyn', other: '{0} minuten lyn'},
          },
        },
        second: {
          displayName: 'Sekonde',
          relative: {0: 'nu'},
          relativeTime: {
            future: {one: 'Oer {0} sekonde', other: 'Oer {0} sekonden'},
            past: {one: '{0} sekonde lyn', other: '{0} sekonden lyn'},
          },
        },
      },
    },
    {
      locale: 'ga',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e;
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : 1 == e
          ? 'one'
          : 2 == e
          ? 'two'
          : r && e >= 3 && e <= 6
          ? 'few'
          : r && e >= 7 && e <= 10
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'Bliain',
          relative: {
            0: 'an bhliain seo',
            1: 'an bhliain seo chugainn',
            '-1': 'anuraidh',
          },
          relativeTime: {
            future: {
              one: 'i gceann {0} bhliain',
              two: 'i gceann {0} bhliain',
              few: 'i gceann {0} bliana',
              many: 'i gceann {0} mbliana',
              other: 'i gceann {0} bliain',
            },
            past: {
              one: '{0} bhliain ó shin',
              two: '{0} bhliain ó shin',
              few: '{0} bliana ó shin',
              many: '{0} mbliana ó shin',
              other: '{0} bliain ó shin',
            },
          },
        },
        month: {
          displayName: 'Mí',
          relative: {
            0: 'an mhí seo',
            1: 'an mhí seo chugainn',
            '-1': 'an mhí seo caite',
          },
          relativeTime: {
            future: {
              one: 'i gceann {0} mhí',
              two: 'i gceann {0} mhí',
              few: 'i gceann {0} mhí',
              many: 'i gceann {0} mí',
              other: 'i gceann {0} mí',
            },
            past: {
              one: '{0} mhí ó shin',
              two: '{0} mhí ó shin',
              few: '{0} mhí ó shin',
              many: '{0} mí ó shin',
              other: '{0} mí ó shin',
            },
          },
        },
        day: {
          displayName: 'Lá',
          relative: {
            0: 'inniu',
            1: 'amárach',
            2: 'arú amárach',
            '-2': 'arú inné',
            '-1': 'inné',
          },
          relativeTime: {
            future: {
              one: 'i gceann {0} lá',
              two: 'i gceann {0} lá',
              few: 'i gceann {0} lá',
              many: 'i gceann {0} lá',
              other: 'i gceann {0} lá',
            },
            past: {
              one: '{0} lá ó shin',
              two: '{0} lá ó shin',
              few: '{0} lá ó shin',
              many: '{0} lá ó shin',
              other: '{0} lá ó shin',
            },
          },
        },
        hour: {
          displayName: 'Uair',
          relative: {0: 'an uair seo'},
          relativeTime: {
            future: {
              one: 'i gceann {0} uair an chloig',
              two: 'i gceann {0} uair an chloig',
              few: 'i gceann {0} huaire an chloig',
              many: 'i gceann {0} n-uaire an chloig',
              other: 'i gceann {0} uair an chloig',
            },
            past: {
              one: '{0} uair an chloig ó shin',
              two: '{0} uair an chloig ó shin',
              few: '{0} huaire an chloig ó shin',
              many: '{0} n-uaire an chloig ó shin',
              other: '{0} uair an chloig ó shin',
            },
          },
        },
        minute: {
          displayName: 'Nóiméad',
          relative: {0: 'an nóiméad seo'},
          relativeTime: {
            future: {
              one: 'i gceann {0} nóiméad',
              two: 'i gceann {0} nóiméad',
              few: 'i gceann {0} nóiméad',
              many: 'i gceann {0} nóiméad',
              other: 'i gceann {0} nóiméad',
            },
            past: {
              one: '{0} nóiméad ó shin',
              two: '{0} nóiméad ó shin',
              few: '{0} nóiméad ó shin',
              many: '{0} nóiméad ó shin',
              other: '{0} nóiméad ó shin',
            },
          },
        },
        second: {
          displayName: 'Soicind',
          relative: {0: 'anois'},
          relativeTime: {
            future: {
              one: 'i gceann {0} soicind',
              two: 'i gceann {0} shoicind',
              few: 'i gceann {0} shoicind',
              many: 'i gceann {0} soicind',
              other: 'i gceann {0} soicind',
            },
            past: {
              one: '{0} soicind ó shin',
              two: '{0} shoicind ó shin',
              few: '{0} shoicind ó shin',
              many: '{0} soicind ó shin',
              other: '{0} soicind ó shin',
            },
          },
        },
      },
    },
    {
      locale: 'gd',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e;
        return t
          ? 'other'
          : 1 == e || 11 == e
          ? 'one'
          : 2 == e || 12 == e
          ? 'two'
          : (r && e >= 3 && e <= 10) || (r && e >= 13 && e <= 19)
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'bliadhna',
          relative: {
            0: 'am bliadhna',
            1: 'an ath-bhliadhna',
            '-2': 'a-bhòn-uiridh',
            '-1': 'an-uiridh',
          },
          relativeTime: {
            future: {
              one: 'an ceann {0} bhliadhna',
              two: 'an ceann {0} bhliadhna',
              few: 'an ceann {0} bliadhnaichean',
              other: 'an ceann {0} bliadhna',
            },
            past: {
              one: '{0} bhliadhna air ais',
              two: '{0} bhliadhna air ais',
              few: '{0} bhliadhnaichean air ais',
              other: '{0} bliadhna air ais',
            },
          },
        },
        month: {
          displayName: 'mìos',
          relative: {
            0: 'am mìos seo',
            1: 'an ath-mhìos',
            '-1': 'am mìos seo chaidh',
          },
          relativeTime: {
            future: {
              one: 'an ceann {0} mhìosa',
              two: 'an ceann {0} mhìosa',
              few: 'an ceann {0} mìosan',
              other: 'an ceann {0} mìosa',
            },
            past: {
              one: '{0} mhìos air ais',
              two: '{0} mhìos air ais',
              few: '{0} mìosan air ais',
              other: '{0} mìos air ais',
            },
          },
        },
        day: {
          displayName: 'latha',
          relative: {
            0: 'an-diugh',
            1: 'a-màireach',
            2: 'an-earar',
            3: 'an-eararais',
            '-2': 'a-bhòin-dè',
            '-1': 'an-dè',
          },
          relativeTime: {
            future: {
              one: 'an ceann {0} latha',
              two: 'an ceann {0} latha',
              few: 'an ceann {0} làithean',
              other: 'an ceann {0} latha',
            },
            past: {
              one: '{0} latha air ais',
              two: '{0} latha air ais',
              few: '{0} làithean air ais',
              other: '{0} latha air ais',
            },
          },
        },
        hour: {
          displayName: 'uair a thìde',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: 'an ceann {0} uair a thìde',
              two: 'an ceann {0} uair a thìde',
              few: 'an ceann {0} uairean a thìde',
              other: 'an ceann {0} uair a thìde',
            },
            past: {
              one: '{0} uair a thìde air ais',
              two: '{0} uair a thìde air ais',
              few: '{0} uairean a thìde air ais',
              other: '{0} uair a thìde air ais',
            },
          },
        },
        minute: {
          displayName: 'mionaid',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: 'an ceann {0} mhionaid',
              two: 'an ceann {0} mhionaid',
              few: 'an ceann {0} mionaidean',
              other: 'an ceann {0} mionaid',
            },
            past: {
              one: '{0} mhionaid air ais',
              two: '{0} mhionaid air ais',
              few: '{0} mionaidean air ais',
              other: '{0} mionaid air ais',
            },
          },
        },
        second: {
          displayName: 'diog',
          relative: {0: 'an-dràsta'},
          relativeTime: {
            future: {
              one: 'an ceann {0} diog',
              two: 'an ceann {0} dhiog',
              few: 'an ceann {0} diogan',
              other: 'an ceann {0} diog',
            },
            past: {
              one: '{0} diog air ais',
              two: '{0} dhiog air ais',
              few: '{0} diogan air ais',
              other: '{0} diog air ais',
            },
          },
        },
      },
    },
    {
      locale: 'gl',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ano',
          relative: {0: 'este ano', 1: 'o próximo ano', '-1': 'o ano pasado'},
          relativeTime: {
            future: {one: 'en {0} ano', other: 'en {0} anos'},
            past: {one: 'hai {0} ano', other: 'hai {0} anos'},
          },
        },
        month: {
          displayName: 'mes',
          relative: {0: 'este mes', 1: 'o próximo mes', '-1': 'o mes pasado'},
          relativeTime: {
            future: {one: 'en {0} mes', other: 'en {0} meses'},
            past: {one: 'hai {0} mes', other: 'hai {0} meses'},
          },
        },
        day: {
          displayName: 'día',
          relative: {
            0: 'hoxe',
            1: 'mañá',
            2: 'pasadomañá',
            '-2': 'antonte',
            '-1': 'onte',
          },
          relativeTime: {
            future: {one: 'en {0} día', other: 'en {0} días'},
            past: {one: 'hai {0} día', other: 'hai {0} días'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'nesta hora'},
          relativeTime: {
            future: {one: 'en {0} hora', other: 'en {0} horas'},
            past: {one: 'hai {0} hora', other: 'hai {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'neste minuto'},
          relativeTime: {
            future: {one: 'en {0} minuto', other: 'en {0} minutos'},
            past: {one: 'hai {0} minuto', other: 'hai {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'agora'},
          relativeTime: {
            future: {one: 'en {0} segundo', other: 'en {0} segundos'},
            past: {one: 'hai {0} segundo', other: 'hai {0} segundos'},
          },
        },
      },
    },
    {
      locale: 'gsw',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Jaar',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Monet',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Tag',
          relative: {
            0: 'hüt',
            1: 'moorn',
            2: 'übermoorn',
            '-2': 'vorgeschter',
            '-1': 'geschter',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Schtund',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minuute',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'gsw-FR', parentLocale: 'gsw'},
    {locale: 'gsw-LI', parentLocale: 'gsw'},
    {
      locale: 'gu',
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
          displayName: 'વર્ષ',
          relative: {0: 'આ વર્ષે', 1: 'આવતા વર્ષે', '-1': 'ગયા વર્ષે'},
          relativeTime: {
            future: {one: '{0} વર્ષમાં', other: '{0} વર્ષમાં'},
            past: {one: '{0} વર્ષ પહેલાં', other: '{0} વર્ષ પહેલાં'},
          },
        },
        month: {
          displayName: 'મહિનો',
          relative: {0: 'આ મહિને', 1: 'આવતા મહિને', '-1': 'ગયા મહિને'},
          relativeTime: {
            future: {one: '{0} મહિનામાં', other: '{0} મહિનામાં'},
            past: {one: '{0} મહિના પહેલાં', other: '{0} મહિના પહેલાં'},
          },
        },
        day: {
          displayName: 'દિવસ',
          relative: {
            0: 'આજે',
            1: 'આવતીકાલે',
            2: 'પરમદિવસે',
            '-2': 'ગયા પરમદિવસે',
            '-1': 'ગઈકાલે',
          },
          relativeTime: {
            future: {one: '{0} દિવસમાં', other: '{0} દિવસમાં'},
            past: {one: '{0} દિવસ પહેલાં', other: '{0} દિવસ પહેલાં'},
          },
        },
        hour: {
          displayName: 'કલાક',
          relative: {0: 'આ કલાક'},
          relativeTime: {
            future: {one: '{0} કલાકમાં', other: '{0} કલાકમાં'},
            past: {one: '{0} કલાક પહેલાં', other: '{0} કલાક પહેલાં'},
          },
        },
        minute: {
          displayName: 'મિનિટ',
          relative: {0: 'આ મિનિટ'},
          relativeTime: {
            future: {one: '{0} મિનિટમાં', other: '{0} મિનિટમાં'},
            past: {one: '{0} મિનિટ પહેલાં', other: '{0} મિનિટ પહેલાં'},
          },
        },
        second: {
          displayName: 'સેકન્ડ',
          relative: {0: 'હમણાં'},
          relativeTime: {
            future: {one: '{0} સેકંડમાં', other: '{0} સેકંડમાં'},
            past: {one: '{0} સેકંડ પહેલાં', other: '{0} સેકંડ પહેલાં'},
          },
        },
      },
    },
    {
      locale: 'guw',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
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
    {
      locale: 'guz',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Omwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Omotienyi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Rituko',
          relative: {0: 'Rero', 1: 'Mambia', '-1': 'Igoro'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ensa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Edakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Esekendi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
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
    {
      locale: 'ha',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Shekara',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Wata',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Kwana',
          relative: {0: 'Yau', 1: 'Gobe', '-1': 'Jiya'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Awa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Daƙiƙa',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ha-Arab',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {locale: 'ha-GH', parentLocale: 'ha'},
    {locale: 'ha-NE', parentLocale: 'ha'},
    {
      locale: 'haw',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'he',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1],
          o = Number(a[0]) == e,
          n = o && a[0].slice(-1);
        return t
          ? 'other'
          : 1 == e && i
          ? 'one'
          : 2 == r && i
          ? 'two'
          : i && (e < 0 || e > 10) && o && 0 == n
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'שנה',
          relative: {0: 'השנה', 1: 'השנה הבאה', '-1': 'השנה שעברה'},
          relativeTime: {
            future: {
              one: 'בעוד שנה',
              two: 'בעוד שנתיים',
              many: 'בעוד {0} שנה',
              other: 'בעוד {0} שנים',
            },
            past: {
              one: 'לפני שנה',
              two: 'לפני שנתיים',
              many: 'לפני {0} שנה',
              other: 'לפני {0} שנים',
            },
          },
        },
        month: {
          displayName: 'חודש',
          relative: {0: 'החודש', 1: 'החודש הבא', '-1': 'החודש שעבר'},
          relativeTime: {
            future: {
              one: 'בעוד חודש',
              two: 'בעוד חודשיים',
              many: 'בעוד {0} חודשים',
              other: 'בעוד {0} חודשים',
            },
            past: {
              one: 'לפני חודש',
              two: 'לפני חודשיים',
              many: 'לפני {0} חודשים',
              other: 'לפני {0} חודשים',
            },
          },
        },
        day: {
          displayName: 'יום',
          relative: {
            0: 'היום',
            1: 'מחר',
            2: 'מחרתיים',
            '-2': 'שלשום',
            '-1': 'אתמול',
          },
          relativeTime: {
            future: {
              one: 'בעוד יום {0}',
              two: 'בעוד יומיים',
              many: 'בעוד {0} ימים',
              other: 'בעוד {0} ימים',
            },
            past: {
              one: 'לפני יום {0}',
              two: 'לפני יומיים',
              many: 'לפני {0} ימים',
              other: 'לפני {0} ימים',
            },
          },
        },
        hour: {
          displayName: 'שעה',
          relative: {0: 'בשעה זו'},
          relativeTime: {
            future: {
              one: 'בעוד שעה',
              two: 'בעוד שעתיים',
              many: 'בעוד {0} שעות',
              other: 'בעוד {0} שעות',
            },
            past: {
              one: 'לפני שעה',
              two: 'לפני שעתיים',
              many: 'לפני {0} שעות',
              other: 'לפני {0} שעות',
            },
          },
        },
        minute: {
          displayName: 'דקה',
          relative: {0: 'בדקה זו'},
          relativeTime: {
            future: {
              one: 'בעוד דקה',
              two: 'בעוד שתי דקות',
              many: 'בעוד {0} דקות',
              other: 'בעוד {0} דקות',
            },
            past: {
              one: 'לפני דקה',
              two: 'לפני שתי דקות',
              many: 'לפני {0} דקות',
              other: 'לפני {0} דקות',
            },
          },
        },
        second: {
          displayName: 'שנייה',
          relative: {0: 'עכשיו'},
          relativeTime: {
            future: {
              one: 'בעוד שנייה',
              two: 'בעוד שתי שניות',
              many: 'בעוד {0} שניות',
              other: 'בעוד {0} שניות',
            },
            past: {
              one: 'לפני שנייה',
              two: 'לפני שתי שניות',
              many: 'לפני {0} שניות',
              other: 'לפני {0} שניות',
            },
          },
        },
      },
    },
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
    {
      locale: 'hr',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-1),
          l = r.slice(-2),
          u = i.slice(-1),
          s = i.slice(-2);
        return t
          ? 'other'
          : (o && 1 == n && 11 != l) || (1 == u && 11 != s)
          ? 'one'
          : (o && n >= 2 && n <= 4 && (l < 12 || l > 14)) ||
            (u >= 2 && u <= 4 && (s < 12 || s > 14))
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'godina',
          relative: {
            0: 'ove godine',
            1: 'sljedeće godine',
            '-1': 'prošle godine',
          },
          relativeTime: {
            future: {
              one: 'za {0} godinu',
              few: 'za {0} godine',
              other: 'za {0} godina',
            },
            past: {
              one: 'prije {0} godinu',
              few: 'prije {0} godine',
              other: 'prije {0} godina',
            },
          },
        },
        month: {
          displayName: 'mjesec',
          relative: {
            0: 'ovaj mjesec',
            1: 'sljedeći mjesec',
            '-1': 'prošli mjesec',
          },
          relativeTime: {
            future: {
              one: 'za {0} mjesec',
              few: 'za {0} mjeseca',
              other: 'za {0} mjeseci',
            },
            past: {
              one: 'prije {0} mjesec',
              few: 'prije {0} mjeseca',
              other: 'prije {0} mjeseci',
            },
          },
        },
        day: {
          displayName: 'dan',
          relative: {
            0: 'danas',
            1: 'sutra',
            2: 'prekosutra',
            '-2': 'prekjučer',
            '-1': 'jučer',
          },
          relativeTime: {
            future: {
              one: 'za {0} dan',
              few: 'za {0} dana',
              other: 'za {0} dana',
            },
            past: {
              one: 'prije {0} dan',
              few: 'prije {0} dana',
              other: 'prije {0} dana',
            },
          },
        },
        hour: {
          displayName: 'sat',
          relative: {0: 'ovaj sat'},
          relativeTime: {
            future: {
              one: 'za {0} sat',
              few: 'za {0} sata',
              other: 'za {0} sati',
            },
            past: {
              one: 'prije {0} sat',
              few: 'prije {0} sata',
              other: 'prije {0} sati',
            },
          },
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'ova minuta'},
          relativeTime: {
            future: {
              one: 'za {0} minutu',
              few: 'za {0} minute',
              other: 'za {0} minuta',
            },
            past: {
              one: 'prije {0} minutu',
              few: 'prije {0} minute',
              other: 'prije {0} minuta',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'sad'},
          relativeTime: {
            future: {
              one: 'za {0} sekundu',
              few: 'za {0} sekunde',
              other: 'za {0} sekundi',
            },
            past: {
              one: 'prije {0} sekundu',
              few: 'prije {0} sekunde',
              other: 'prije {0} sekundi',
            },
          },
        },
      },
    },
    {locale: 'hr-BA', parentLocale: 'hr'},
    {
      locale: 'hsb',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-2),
          l = i.slice(-2);
        return t
          ? 'other'
          : (o && 1 == n) || 1 == l
          ? 'one'
          : (o && 2 == n) || 2 == l
          ? 'two'
          : (o && (3 == n || 4 == n)) || 3 == l || 4 == l
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'lěto',
          relative: {0: 'lětsa', 1: 'klětu', '-1': 'loni'},
          relativeTime: {
            future: {
              one: 'za {0} lěto',
              two: 'za {0} lěće',
              few: 'za {0} lěta',
              other: 'za {0} lět',
            },
            past: {
              one: 'před {0} lětom',
              two: 'před {0} lětomaj',
              few: 'před {0} lětami',
              other: 'před {0} lětami',
            },
          },
        },
        month: {
          displayName: 'měsac',
          relative: {
            0: 'tutón měsac',
            1: 'přichodny měsac',
            '-1': 'zašły měsac',
          },
          relativeTime: {
            future: {
              one: 'za {0} měsac',
              two: 'za {0} měsacaj',
              few: 'za {0} měsacy',
              other: 'za {0} měsacow',
            },
            past: {
              one: 'před {0} měsacom',
              two: 'před {0} měsacomaj',
              few: 'před {0} měsacami',
              other: 'před {0} měsacami',
            },
          },
        },
        day: {
          displayName: 'dźeń',
          relative: {0: 'dźensa', 1: 'jutře', '-1': 'wčera'},
          relativeTime: {
            future: {
              one: 'za {0} dźeń',
              two: 'za {0} dnjej',
              few: 'za {0} dny',
              other: 'za {0} dnjow',
            },
            past: {
              one: 'před {0} dnjom',
              two: 'před {0} dnjomaj',
              few: 'před {0} dnjemi',
              other: 'před {0} dnjemi',
            },
          },
        },
        hour: {
          displayName: 'hodźina',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: 'za {0} hodźinu',
              two: 'za {0} hodźinje',
              few: 'za {0} hodźiny',
              other: 'za {0} hodźin',
            },
            past: {
              one: 'před {0} hodźinu',
              two: 'před {0} hodźinomaj',
              few: 'před {0} hodźinami',
              other: 'před {0} hodźinami',
            },
          },
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: 'za {0} minutu',
              two: 'za {0} minuće',
              few: 'za {0} minuty',
              other: 'za {0} minutow',
            },
            past: {
              one: 'před {0} minutu',
              two: 'před {0} minutomaj',
              few: 'před {0} minutami',
              other: 'před {0} minutami',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'now'},
          relativeTime: {
            future: {
              one: 'za {0} sekundu',
              two: 'za {0} sekundźe',
              few: 'za {0} sekundy',
              other: 'za {0} sekundow',
            },
            past: {
              one: 'před {0} sekundu',
              two: 'před {0} sekundomaj',
              few: 'před {0} sekundami',
              other: 'před {0} sekundami',
            },
          },
        },
      },
    },
    {
      locale: 'hu',
      pluralRuleFunction: function(e, t) {
        return t
          ? 1 == e || 5 == e
            ? 'one'
            : 'other'
          : 1 == e
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'év',
          relative: {0: 'ez az év', 1: 'következő év', '-1': 'előző év'},
          relativeTime: {
            future: {one: '{0} év múlva', other: '{0} év múlva'},
            past: {one: '{0} évvel ezelőtt', other: '{0} évvel ezelőtt'},
          },
        },
        month: {
          displayName: 'hónap',
          relative: {
            0: 'ez a hónap',
            1: 'következő hónap',
            '-1': 'előző hónap',
          },
          relativeTime: {
            future: {one: '{0} hónap múlva', other: '{0} hónap múlva'},
            past: {one: '{0} hónappal ezelőtt', other: '{0} hónappal ezelőtt'},
          },
        },
        day: {
          displayName: 'nap',
          relative: {
            0: 'ma',
            1: 'holnap',
            2: 'holnapután',
            '-2': 'tegnapelőtt',
            '-1': 'tegnap',
          },
          relativeTime: {
            future: {one: '{0} nap múlva', other: '{0} nap múlva'},
            past: {one: '{0} nappal ezelőtt', other: '{0} nappal ezelőtt'},
          },
        },
        hour: {
          displayName: 'óra',
          relative: {0: 'ebben az órában'},
          relativeTime: {
            future: {one: '{0} óra múlva', other: '{0} óra múlva'},
            past: {one: '{0} órával ezelőtt', other: '{0} órával ezelőtt'},
          },
        },
        minute: {
          displayName: 'perc',
          relative: {0: 'ebben a percben'},
          relativeTime: {
            future: {one: '{0} perc múlva', other: '{0} perc múlva'},
            past: {one: '{0} perccel ezelőtt', other: '{0} perccel ezelőtt'},
          },
        },
        second: {
          displayName: 'másodperc',
          relative: {0: 'most'},
          relativeTime: {
            future: {one: '{0} másodperc múlva', other: '{0} másodperc múlva'},
            past: {
              one: '{0} másodperccel ezelőtt',
              other: '{0} másodperccel ezelőtt',
            },
          },
        },
      },
    },
    {
      locale: 'hy',
      pluralRuleFunction: function(e, t) {
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : e >= 0 && e < 2
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'տարի',
          relative: {0: 'այս տարի', 1: 'հաջորդ տարի', '-1': 'նախորդ տարի'},
          relativeTime: {
            future: {one: '{0} տարուց', other: '{0} տարուց'},
            past: {one: '{0} տարի առաջ', other: '{0} տարի առաջ'},
          },
        },
        month: {
          displayName: 'ամիս',
          relative: {0: 'այս ամիս', 1: 'հաջորդ ամիս', '-1': 'նախորդ ամիս'},
          relativeTime: {
            future: {one: '{0} ամսից', other: '{0} ամսից'},
            past: {one: '{0} ամիս առաջ', other: '{0} ամիս առաջ'},
          },
        },
        day: {
          displayName: 'օր',
          relative: {
            0: 'այսօր',
            1: 'վաղը',
            2: 'վաղը չէ մյուս օրը',
            '-2': 'երեկ չէ առաջի օրը',
            '-1': 'երեկ',
          },
          relativeTime: {
            future: {one: '{0} օրից', other: '{0} օրից'},
            past: {one: '{0} օր առաջ', other: '{0} օր առաջ'},
          },
        },
        hour: {
          displayName: 'ժամ',
          relative: {0: 'այս ժամին'},
          relativeTime: {
            future: {one: '{0} ժամից', other: '{0} ժամից'},
            past: {one: '{0} ժամ առաջ', other: '{0} ժամ առաջ'},
          },
        },
        minute: {
          displayName: 'րոպե',
          relative: {0: 'այս րոպեին'},
          relativeTime: {
            future: {one: '{0} րոպեից', other: '{0} րոպեից'},
            past: {one: '{0} րոպե առաջ', other: '{0} րոպե առաջ'},
          },
        },
        second: {
          displayName: 'վայրկյան',
          relative: {0: 'այժմ'},
          relativeTime: {
            future: {one: '{0} վայրկյանից', other: '{0} վայրկյանից'},
            past: {one: '{0} վայրկյան առաջ', other: '{0} վայրկյան առաջ'},
          },
        },
      },
    },
    {
      locale: 'id',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Tahun',
          relative: {0: 'tahun ini', 1: 'tahun depan', '-1': 'tahun lalu'},
          relativeTime: {
            future: {other: 'Dalam {0} tahun'},
            past: {other: '{0} tahun yang lalu'},
          },
        },
        month: {
          displayName: 'Bulan',
          relative: {0: 'bulan ini', 1: 'Bulan berikutnya', '-1': 'bulan lalu'},
          relativeTime: {
            future: {other: 'Dalam {0} bulan'},
            past: {other: '{0} bulan yang lalu'},
          },
        },
        day: {
          displayName: 'Hari',
          relative: {
            0: 'hari ini',
            1: 'besok',
            2: 'lusa',
            '-2': 'kemarin dulu',
            '-1': 'kemarin',
          },
          relativeTime: {
            future: {other: 'Dalam {0} hari'},
            past: {other: '{0} hari yang lalu'},
          },
        },
        hour: {
          displayName: 'Jam',
          relative: {0: 'jam ini'},
          relativeTime: {
            future: {other: 'Dalam {0} jam'},
            past: {other: '{0} jam yang lalu'},
          },
        },
        minute: {
          displayName: 'Menit',
          relative: {0: 'menit ini'},
          relativeTime: {
            future: {other: 'Dalam {0} menit'},
            past: {other: '{0} menit yang lalu'},
          },
        },
        second: {
          displayName: 'Detik',
          relative: {0: 'sekarang'},
          relativeTime: {
            future: {other: 'Dalam {0} detik'},
            past: {other: '{0} detik yang lalu'},
          },
        },
      },
    },
    {
      locale: 'ig',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Afọ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ọnwa',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ụbọchị',
          relative: {0: 'Taata', 1: 'Echi', '-1': 'Nnyaafụ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Elekere',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Nkeji',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Nkejinta',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ii',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ꈎ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ꆪ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ꑍ',
          relative: {
            0: 'ꀃꑍ',
            1: 'ꃆꏂꑍ',
            2: 'ꌕꀿꑍ',
            '-2': 'ꎴꂿꋍꑍ',
            '-1': 'ꀋꅔꉈ',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ꄮꈉ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ꃏ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ꇙ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'in',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'is',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = Number(a[0]) == e,
          o = r.slice(-1),
          n = r.slice(-2);
        return t ? 'other' : (i && 1 == o && 11 != n) || !i ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ár',
          relative: {0: 'á þessu ári', 1: 'á næsta ári', '-1': 'á síðasta ári'},
          relativeTime: {
            future: {one: 'eftir {0} ár', other: 'eftir {0} ár'},
            past: {one: 'fyrir {0} ári', other: 'fyrir {0} árum'},
          },
        },
        month: {
          displayName: 'mánuður',
          relative: {
            0: 'í þessum mánuði',
            1: 'í næsta mánuði',
            '-1': 'í síðasta mánuði',
          },
          relativeTime: {
            future: {one: 'eftir {0} mánuð', other: 'eftir {0} mánuði'},
            past: {one: 'fyrir {0} mánuði', other: 'fyrir {0} mánuðum'},
          },
        },
        day: {
          displayName: 'dagur',
          relative: {
            0: 'í dag',
            1: 'á morgun',
            2: 'eftir tvo daga',
            '-2': 'í fyrradag',
            '-1': 'í gær',
          },
          relativeTime: {
            future: {one: 'eftir {0} dag', other: 'eftir {0} daga'},
            past: {one: 'fyrir {0} degi', other: 'fyrir {0} dögum'},
          },
        },
        hour: {
          displayName: 'klukkustund',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: 'eftir {0} klukkustund',
              other: 'eftir {0} klukkustundir',
            },
            past: {
              one: 'fyrir {0} klukkustund',
              other: 'fyrir {0} klukkustundum',
            },
          },
        },
        minute: {
          displayName: 'mínúta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'eftir {0} mínútu', other: 'eftir {0} mínútur'},
            past: {one: 'fyrir {0} mínútu', other: 'fyrir {0} mínútum'},
          },
        },
        second: {
          displayName: 'sekúnda',
          relative: {0: 'núna'},
          relativeTime: {
            future: {one: 'eftir {0} sekúndu', other: 'eftir {0} sekúndur'},
            past: {one: 'fyrir {0} sekúndu', other: 'fyrir {0} sekúndum'},
          },
        },
      },
    },
    {
      locale: 'it',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t
          ? 11 == e || 8 == e || 80 == e || 800 == e
            ? 'many'
            : 'other'
          : 1 == e && a
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'anno',
          relative: {0: 'quest’anno', 1: 'anno prossimo', '-1': 'anno scorso'},
          relativeTime: {
            future: {one: 'tra {0} anno', other: 'tra {0} anni'},
            past: {one: '{0} anno fa', other: '{0} anni fa'},
          },
        },
        month: {
          displayName: 'mese',
          relative: {0: 'questo mese', 1: 'mese prossimo', '-1': 'mese scorso'},
          relativeTime: {
            future: {one: 'tra {0} mese', other: 'tra {0} mesi'},
            past: {one: '{0} mese fa', other: '{0} mesi fa'},
          },
        },
        day: {
          displayName: 'giorno',
          relative: {
            0: 'oggi',
            1: 'domani',
            2: 'dopodomani',
            '-2': 'l’altro ieri',
            '-1': 'ieri',
          },
          relativeTime: {
            future: {one: 'tra {0} giorno', other: 'tra {0} giorni'},
            past: {one: '{0} giorno fa', other: '{0} giorni fa'},
          },
        },
        hour: {
          displayName: 'ora',
          relative: {0: 'quest’ora'},
          relativeTime: {
            future: {one: 'tra {0} ora', other: 'tra {0} ore'},
            past: {one: '{0} ora fa', other: '{0} ore fa'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'questo minuto'},
          relativeTime: {
            future: {one: 'tra {0} minuto', other: 'tra {0} minuti'},
            past: {one: '{0} minuto fa', other: '{0} minuti fa'},
          },
        },
        second: {
          displayName: 'secondo',
          relative: {0: 'ora'},
          relativeTime: {
            future: {one: 'tra {0} secondo', other: 'tra {0} secondi'},
            past: {one: '{0} secondo fa', other: '{0} secondi fa'},
          },
        },
      },
    },
    {locale: 'it-CH', parentLocale: 'it'},
    {locale: 'it-SM', parentLocale: 'it'},
    {locale: 'it-VA', parentLocale: 'it'},
    {
      locale: 'iu',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
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
    {
      locale: 'iu-Latn',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'iw',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1],
          o = Number(a[0]) == e,
          n = o && a[0].slice(-1);
        return t
          ? 'other'
          : 1 == e && i
          ? 'one'
          : 2 == r && i
          ? 'two'
          : i && (e < 0 || e > 10) && o && 0 == n
          ? 'many'
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
    {
      locale: 'ja',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '翌年', '-1': '昨年'},
          relativeTime: {
            future: {other: '{0} 年後'},
            past: {other: '{0} 年前'},
          },
        },
        month: {
          displayName: '月',
          relative: {0: '今月', 1: '翌月', '-1': '先月'},
          relativeTime: {
            future: {other: '{0} か月後'},
            past: {other: '{0} か月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今日',
            1: '明日',
            2: '明後日',
            '-2': '一昨日',
            '-1': '昨日',
          },
          relativeTime: {
            future: {other: '{0} 日後'},
            past: {other: '{0} 日前'},
          },
        },
        hour: {
          displayName: '時',
          relative: {0: '1 時間以内'},
          relativeTime: {
            future: {other: '{0} 時間後'},
            past: {other: '{0} 時間前'},
          },
        },
        minute: {
          displayName: '分',
          relative: {0: '1 分以内'},
          relativeTime: {
            future: {other: '{0} 分後'},
            past: {other: '{0} 分前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '今'},
          relativeTime: {
            future: {other: '{0} 秒後'},
            past: {other: '{0} 秒前'},
          },
        },
      },
    },
    {
      locale: 'jbo',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'jgo',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Year',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {one: 'Nǔu ŋguꞋ {0}', other: 'Nǔu ŋguꞋ {0}'},
            past: {one: 'Ɛ́gɛ́ mɔ́ ŋguꞋ {0}', other: 'Ɛ́gɛ́ mɔ́ ŋguꞋ {0}'},
          },
        },
        month: {
          displayName: 'Month',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: 'Nǔu {0} saŋ', other: 'Nǔu {0} saŋ'},
            past: {one: 'ɛ́ gɛ́ mɔ́ pɛsaŋ {0}', other: 'ɛ́ gɛ́ mɔ́ pɛsaŋ {0}'},
          },
        },
        day: {
          displayName: 'Day',
          relative: {0: 'lɔꞋɔ', 1: 'tomorrow', '-1': 'yesterday'},
          relativeTime: {
            future: {one: 'Nǔu lɛ́Ꞌ {0}', other: 'Nǔu lɛ́Ꞌ {0}'},
            past: {one: 'Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}', other: 'Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}'},
          },
        },
        hour: {
          displayName: 'Hour',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'nǔu háwa {0}', other: 'nǔu háwa {0}'},
            past: {one: 'ɛ́ gɛ mɔ́ {0} háwa', other: 'ɛ́ gɛ mɔ́ {0} háwa'},
          },
        },
        minute: {
          displayName: 'Minute',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'nǔu {0} minút', other: 'nǔu {0} minút'},
            past: {one: 'ɛ́ gɛ́ mɔ́ minút {0}', other: 'ɛ́ gɛ́ mɔ́ minút {0}'},
          },
        },
        second: {
          displayName: 'Second',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ji',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
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
    {
      locale: 'jmc',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Maka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mori',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mfiri',
          relative: {0: 'Inu', 1: 'Ngama', '-1': 'Ukou'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakyika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'jv',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'jw',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'ka',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.')[0],
          r = a.slice(-2);
        return t
          ? 1 == a
            ? 'one'
            : 0 == a || (r >= 2 && r <= 20) || 40 == r || 60 == r || 80 == r
            ? 'many'
            : 'other'
          : 1 == e
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'წელი',
          relative: {0: 'ამ წელს', 1: 'მომავალ წელს', '-1': 'გასულ წელს'},
          relativeTime: {
            future: {one: '{0} წელიწადში', other: '{0} წელიწადში'},
            past: {one: '{0} წლის წინ', other: '{0} წლის წინ'},
          },
        },
        month: {
          displayName: 'თვე',
          relative: {0: 'ამ თვეში', 1: 'მომავალ თვეს', '-1': 'გასულ თვეს'},
          relativeTime: {
            future: {one: '{0} თვეში', other: '{0} თვეში'},
            past: {one: '{0} თვის წინ', other: '{0} თვის წინ'},
          },
        },
        day: {
          displayName: 'დღე',
          relative: {
            0: 'დღეს',
            1: 'ხვალ',
            2: 'ზეგ',
            '-2': 'გუშინწინ',
            '-1': 'გუშინ',
          },
          relativeTime: {
            future: {one: '{0} დღეში', other: '{0} დღეში'},
            past: {one: '{0} დღის წინ', other: '{0} დღის წინ'},
          },
        },
        hour: {
          displayName: 'საათი',
          relative: {0: 'ამ საათში'},
          relativeTime: {
            future: {one: '{0} საათში', other: '{0} საათში'},
            past: {one: '{0} საათის წინ', other: '{0} საათის წინ'},
          },
        },
        minute: {
          displayName: 'წუთი',
          relative: {0: 'ამ წუთში'},
          relativeTime: {
            future: {one: '{0} წუთში', other: '{0} წუთში'},
            past: {one: '{0} წუთის წინ', other: '{0} წუთის წინ'},
          },
        },
        second: {
          displayName: 'წამი',
          relative: {0: 'ახლა'},
          relativeTime: {
            future: {one: '{0} წამში', other: '{0} წამში'},
            past: {one: '{0} წამის წინ', other: '{0} წამის წინ'},
          },
        },
      },
    },
    {
      locale: 'kab',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : e >= 0 && e < 2 ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Aseggas',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Aggur',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ass',
          relative: {0: 'Ass-a', 1: 'Azekka', '-1': 'Iḍelli'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Tamert',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Tamrect',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Tasint',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'kaj',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'kam',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwai',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mũthenya',
          relative: {0: 'Ũmũnthĩ', 1: 'Ũnĩ', '-1': 'Ĩyoo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Ndatĩka',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'sekondi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'kcg',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'kde',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwedi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Lihiku',
          relative: {0: 'Nelo', 1: 'Nundu', '-1': 'Lido'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'kea',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Anu',
          relative: {0: 'es anu li', 1: 'prósimu anu', '-1': 'anu pasadu'},
          relativeTime: {
            future: {other: 'di li {0} anu'},
            past: {other: 'a ten {0} anu'},
          },
        },
        month: {
          displayName: 'Mes',
          relative: {0: 'es mes li', 1: 'prósimu mes', '-1': 'mes pasadu'},
          relativeTime: {
            future: {other: 'di li {0} mes'},
            past: {other: 'a ten {0} mes'},
          },
        },
        day: {
          displayName: 'Dia',
          relative: {0: 'oji', 1: 'manha', '-1': 'onti'},
          relativeTime: {
            future: {other: 'di li {0} dia'},
            past: {other: 'a ten {0} dia'},
          },
        },
        hour: {
          displayName: 'Ora',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {other: 'di li {0} ora'},
            past: {other: 'a ten {0} ora'},
          },
        },
        minute: {
          displayName: 'Minutu',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: 'di li {0} minutu'},
            past: {other: 'a ten {0} minutu'},
          },
        },
        second: {
          displayName: 'Sigundu',
          relative: {0: 'now'},
          relativeTime: {
            future: {other: 'di li {0} sigundu'},
            past: {other: 'a ten {0} sigundu'},
          },
        },
      },
    },
    {
      locale: 'khq',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Jiiri',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Handu',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Jaari',
          relative: {0: 'Hõo', 1: 'Suba', '-1': 'Bi'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Guuru',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Miniti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Miti',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ki',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mweri',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mũthenya',
          relative: {0: 'Ũmũthĩ', 1: 'Rũciũ', '-1': 'Ira'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ithaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Ndagĩka',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'kk',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e,
          i = r && a[0].slice(-1);
        return t
          ? 6 == i || 9 == i || (r && 0 == i && 0 != e)
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
    {
      locale: 'kkj',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
          relative: {0: 'muka', 1: 'nɛmɛnɔ', '-1': 'kwey'},
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
    {
      locale: 'kl',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Year',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {one: 'om {0} ukioq', other: 'om {0} ukioq'},
            past: {one: 'for {0} ukioq siden', other: 'for {0} ukioq siden'},
          },
        },
        month: {
          displayName: 'Month',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: 'om {0} qaammat', other: 'om {0} qaammat'},
            past: {
              one: 'for {0} qaammat siden',
              other: 'for {0} qaammat siden',
            },
          },
        },
        day: {
          displayName: 'Day',
          relative: {0: 'today', 1: 'tomorrow', '-1': 'yesterday'},
          relativeTime: {
            future: {
              one: 'om {0} ulloq unnuarlu',
              other: 'om {0} ulloq unnuarlu',
            },
            past: {
              one: 'for {0} ulloq unnuarlu siden',
              other: 'for {0} ulloq unnuarlu siden',
            },
          },
        },
        hour: {
          displayName: 'Hour',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: 'om {0} nalunaaquttap-akunnera',
              other: 'om {0} nalunaaquttap-akunnera',
            },
            past: {
              one: 'for {0} nalunaaquttap-akunnera siden',
              other: 'for {0} nalunaaquttap-akunnera siden',
            },
          },
        },
        minute: {
          displayName: 'Minute',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'om {0} minutsi', other: 'om {0} minutsi'},
            past: {
              one: 'for {0} minutsi siden',
              other: 'for {0} minutsi siden',
            },
          },
        },
        second: {
          displayName: 'Second',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: 'om {0} sekundi', other: 'om {0} sekundi'},
            past: {
              one: 'for {0} sekundi siden',
              other: 'for {0} sekundi siden',
            },
          },
        },
      },
    },
    {
      locale: 'kln',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Kenyit',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Arawet',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Betut',
          relative: {0: 'Raini', 1: 'Mutai', '-1': 'Amut'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Sait',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minitit',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekondit',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'km',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ឆ្នាំ',
          relative: {0: 'ឆ្នាំ​នេះ', 1: 'ឆ្នាំ​ក្រោយ', '-1': 'ឆ្នាំ​មុន'},
          relativeTime: {
            future: {other: '{0} ឆ្នាំទៀត'},
            past: {other: '{0} ឆ្នាំ​មុន'},
          },
        },
        month: {
          displayName: 'ខែ',
          relative: {0: 'ខែ​នេះ', 1: 'ខែ​ក្រោយ', '-1': 'ខែ​មុន'},
          relativeTime: {
            future: {other: '{0} ខែទៀត'},
            past: {other: '{0} ខែមុន'},
          },
        },
        day: {
          displayName: 'ថ្ងៃ',
          relative: {
            0: 'ថ្ងៃ​នេះ',
            1: 'ថ្ងៃ​ស្អែក',
            2: '​ខាន​ស្អែក',
            '-2': 'ម្សិល​ម៉្ងៃ',
            '-1': 'ម្សិលមិញ',
          },
          relativeTime: {
            future: {other: '{0} ថ្ងៃទៀត'},
            past: {other: '{0} ថ្ងៃ​មុន'},
          },
        },
        hour: {
          displayName: 'ម៉ោង',
          relative: {0: 'ម៉ោងនេះ'},
          relativeTime: {
            future: {other: 'ក្នុង​រយៈ​ពេល {0} ម៉ោង'},
            past: {other: '{0} ម៉ោង​មុន'},
          },
        },
        minute: {
          displayName: 'នាទី',
          relative: {0: 'នាទីនេះ'},
          relativeTime: {
            future: {other: '{0} នាទីទៀត'},
            past: {other: '{0} នាទី​មុន'},
          },
        },
        second: {
          displayName: 'វិនាទី',
          relative: {0: 'ឥឡូវ'},
          relativeTime: {
            future: {other: '{0} វិនាទីទៀត'},
            past: {other: '{0} វិនាទី​មុន'},
          },
        },
      },
    },
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
    {
      locale: 'ko',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: '년',
          relative: {0: '올해', 1: '내년', '-1': '작년'},
          relativeTime: {
            future: {other: '{0}년 후'},
            past: {other: '{0}년 전'},
          },
        },
        month: {
          displayName: '월',
          relative: {0: '이번 달', 1: '다음 달', '-1': '지난달'},
          relativeTime: {
            future: {other: '{0}개월 후'},
            past: {other: '{0}개월 전'},
          },
        },
        day: {
          displayName: '일',
          relative: {
            0: '오늘',
            1: '내일',
            2: '모레',
            '-2': '그저께',
            '-1': '어제',
          },
          relativeTime: {
            future: {other: '{0}일 후'},
            past: {other: '{0}일 전'},
          },
        },
        hour: {
          displayName: '시',
          relative: {0: '현재 시간'},
          relativeTime: {
            future: {other: '{0}시간 후'},
            past: {other: '{0}시간 전'},
          },
        },
        minute: {
          displayName: '분',
          relative: {0: '현재 분'},
          relativeTime: {
            future: {other: '{0}분 후'},
            past: {other: '{0}분 전'},
          },
        },
        second: {
          displayName: '초',
          relative: {0: '지금'},
          relativeTime: {
            future: {other: '{0}초 후'},
            past: {other: '{0}초 전'},
          },
        },
      },
    },
    {locale: 'ko-KP', parentLocale: 'ko'},
    {
      locale: 'kok',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'ks',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ؤری',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'رٮ۪تھ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'دۄہ',
          relative: {0: 'اَز', 1: 'پگاہ', '-1': 'راتھ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'گٲنٛٹہٕ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'مِنَٹ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'سٮ۪کَنڑ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ksb',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Ng’waka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ng’ezi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Siku',
          relative: {0: 'Evi eo', 1: 'Keloi', '-1': 'Ghuo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ksf',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Bǝk',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ŋwíí',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ŋwós',
          relative: {0: 'Gɛ́ɛnǝ', 1: 'Ridúrǝ́', '-1': 'Rinkɔɔ́'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Cámɛɛn',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Mǝnít',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Háu',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ksh',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e ? 'zero' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Johr',
          relative: {0: 'diß Johr', 1: 'näx Johr', '-1': 'läz Johr'},
          relativeTime: {
            future: {
              zero: 'en keinem Johr',
              one: 'en {0} Johr',
              other: 'en {0} Johre',
            },
            past: {
              zero: 'vör keijnem Johr',
              one: 'vör {0} Johr',
              other: 'vör {0} Johre',
            },
          },
        },
        month: {
          displayName: 'Mohnd',
          relative: {
            0: 'diese Mohnd',
            1: 'nächste Mohnd',
            '-1': 'lätzde Mohnd',
          },
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Daach',
          relative: {
            0: 'hück',
            1: 'morje',
            2: 'övvermorje',
            '-2': 'vörjestere',
            '-1': 'jestere',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Schtund',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Menutt',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekond',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ku',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'kw',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
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
    {
      locale: 'ky',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'жыл',
          relative: {0: 'быйыл', 1: 'эмдиги жылы', '-1': 'былтыр'},
          relativeTime: {
            future: {one: '{0} жылдан кийин', other: '{0} жылдан кийин'},
            past: {one: '{0} жыл мурун', other: '{0} жыл мурун'},
          },
        },
        month: {
          displayName: 'ай',
          relative: {0: 'бул айда', 1: 'эмдиги айда', '-1': 'өткөн айда'},
          relativeTime: {
            future: {one: '{0} айдан кийин', other: '{0} айдан кийин'},
            past: {one: '{0} ай мурун', other: '{0} ай мурун'},
          },
        },
        day: {
          displayName: 'күн',
          relative: {
            0: 'бүгүн',
            1: 'эртеӊ',
            2: 'бүрсүгүнү',
            '-2': 'мурдагы күнү',
            '-1': 'кечээ',
          },
          relativeTime: {
            future: {one: '{0} күндөн кийин', other: '{0} күндөн кийин'},
            past: {one: '{0} күн мурун', other: '{0} күн мурун'},
          },
        },
        hour: {
          displayName: 'саат',
          relative: {0: 'ушул саатта'},
          relativeTime: {
            future: {one: '{0} сааттан кийин', other: '{0} сааттан кийин'},
            past: {one: '{0} саат мурун', other: '{0} саат мурун'},
          },
        },
        minute: {
          displayName: 'мүнөт',
          relative: {0: 'ушул мүнөттө'},
          relativeTime: {
            future: {one: '{0} мүнөттөн кийин', other: '{0} мүнөттөн кийин'},
            past: {one: '{0} мүнөт мурун', other: '{0} мүнөт мурун'},
          },
        },
        second: {
          displayName: 'секунд',
          relative: {0: 'азыр'},
          relativeTime: {
            future: {one: '{0} секунддан кийин', other: '{0} секунддан кийин'},
            past: {one: '{0} секунд мурун', other: '{0} секунд мурун'},
          },
        },
      },
    },
    {
      locale: 'lag',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.')[0];
        return t
          ? 'other'
          : 0 == e
          ? 'zero'
          : (0 != a && 1 != a) || 0 == e
          ? 'other'
          : 'one';
      },
      fields: {
        year: {
          displayName: 'Mwaáka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mweéri',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Sikʉ',
          relative: {0: 'Isikʉ', 1: 'Lamʉtoondo', '-1': 'Niijo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Sáa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakíka',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekúunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'lb',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Joer',
          relative: {0: 'dëst Joer', 1: 'nächst Joer', '-1': 'lescht Joer'},
          relativeTime: {
            future: {one: 'an {0} Joer', other: 'a(n) {0} Joer'},
            past: {one: 'virun {0} Joer', other: 'viru(n) {0} Joer'},
          },
        },
        month: {
          displayName: 'Mount',
          relative: {
            0: 'dëse Mount',
            1: 'nächste Mount',
            '-1': 'leschte Mount',
          },
          relativeTime: {
            future: {one: 'an {0} Mount', other: 'a(n) {0} Méint'},
            past: {one: 'virun {0} Mount', other: 'viru(n) {0} Méint'},
          },
        },
        day: {
          displayName: 'Dag',
          relative: {0: 'haut', 1: 'muer', '-1': 'gëschter'},
          relativeTime: {
            future: {one: 'an {0} Dag', other: 'a(n) {0} Deeg'},
            past: {one: 'virun {0} Dag', other: 'viru(n) {0} Deeg'},
          },
        },
        hour: {
          displayName: 'Stonn',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'an {0} Stonn', other: 'a(n) {0} Stonnen'},
            past: {one: 'virun {0} Stonn', other: 'viru(n) {0} Stonnen'},
          },
        },
        minute: {
          displayName: 'Minutt',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'an {0} Minutt', other: 'a(n) {0} Minutten'},
            past: {one: 'virun {0} Minutt', other: 'viru(n) {0} Minutten'},
          },
        },
        second: {
          displayName: 'Sekonn',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: 'an {0} Sekonn', other: 'a(n) {0} Sekonnen'},
            past: {one: 'virun {0} Sekonn', other: 'viru(n) {0} Sekonnen'},
          },
        },
      },
    },
    {
      locale: 'lg',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwezi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Lunaku',
          relative: {0: 'Lwaleero', 1: 'Nkya', '-1': 'Ggulo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saawa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakiika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Kasikonda',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'lkt',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Ómakȟa',
          relative: {
            0: 'Lé ómakȟa kiŋ',
            1: 'Tȟokáta ómakȟa kiŋháŋ',
            '-1': 'Ómakȟa kʼuŋ héhaŋ',
          },
          relativeTime: {
            future: {other: 'Letáŋhaŋ ómakȟa {0} kiŋháŋ'},
            past: {other: 'Hékta ómakȟa {0} kʼuŋ héhaŋ'},
          },
        },
        month: {
          displayName: 'Wí',
          relative: {
            0: 'Lé wí kiŋ',
            1: 'Tȟokáta wí kiŋháŋ',
            '-1': 'Wí kʼuŋ héhaŋ',
          },
          relativeTime: {
            future: {other: 'Letáŋhaŋ wíyawapi {0} kiŋháŋ'},
            past: {other: 'Hékta wíyawapi {0} kʼuŋ héhaŋ'},
          },
        },
        day: {
          displayName: 'Aŋpétu',
          relative: {
            0: 'Lé aŋpétu kiŋ',
            1: 'Híŋhaŋni kiŋháŋ',
            '-1': 'Ȟtálehaŋ',
          },
          relativeTime: {
            future: {other: 'Letáŋhaŋ {0}-čháŋ kiŋháŋ'},
            past: {other: 'Hékta {0}-čháŋ k’uŋ héhaŋ'},
          },
        },
        hour: {
          displayName: 'Owápȟe',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {other: 'Letáŋhaŋ owápȟe {0} kiŋháŋ'},
            past: {other: 'Hékta owápȟe {0} kʼuŋ héhaŋ'},
          },
        },
        minute: {
          displayName: 'Owápȟe oȟʼáŋkȟo',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: 'Letáŋhaŋ oȟ’áŋkȟo {0} kiŋháŋ'},
            past: {other: 'Hékta oȟ’áŋkȟo {0} k’uŋ héhaŋ'},
          },
        },
        second: {
          displayName: 'Okpí',
          relative: {0: 'now'},
          relativeTime: {
            future: {other: 'Letáŋhaŋ okpí {0} kiŋháŋ'},
            past: {other: 'Hékta okpí {0} k’uŋ héhaŋ'},
          },
        },
      },
    },
    {
      locale: 'ln',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Mobú',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Sánzá',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mokɔlɔ',
          relative: {0: 'Lɛlɔ́', 1: 'Lóbi ekoyâ', '-1': 'Lóbi elékí'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ngonga',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Monúti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sɛkɔ́ndɛ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'ln-AO', parentLocale: 'ln'},
    {locale: 'ln-CF', parentLocale: 'ln'},
    {locale: 'ln-CG', parentLocale: 'ln'},
    {
      locale: 'lo',
      pluralRuleFunction: function(e, t) {
        return t && 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ປີ',
          relative: {0: 'ປີນີ້', 1: 'ປີໜ້າ', '-1': 'ປີກາຍ'},
          relativeTime: {
            future: {other: 'ໃນອີກ {0} ປີ'},
            past: {other: '{0} ປີກ່ອນ'},
          },
        },
        month: {
          displayName: 'ເດືອນ',
          relative: {0: 'ເດືອນນີ້', 1: 'ເດືອນໜ້າ', '-1': 'ເດືອນແລ້ວ'},
          relativeTime: {
            future: {other: 'ໃນອີກ {0} ເດືອນ'},
            past: {other: '{0} ເດືອນກ່ອນ'},
          },
        },
        day: {
          displayName: 'ມື້',
          relative: {
            0: 'ມື້ນີ້',
            1: 'ມື້ອື່ນ',
            2: 'ມື້ຮື',
            '-2': 'ມື້ກ່ອນ',
            '-1': 'ມື້ວານ',
          },
          relativeTime: {
            future: {other: 'ໃນອີກ {0} ມື້'},
            past: {other: '{0} ມື້ກ່ອນ'},
          },
        },
        hour: {
          displayName: 'ຊົ່ວໂມງ',
          relative: {0: 'ຊົ່ວໂມງນີ້'},
          relativeTime: {
            future: {other: 'ໃນອີກ {0} ຊົ່ວໂມງ'},
            past: {other: '{0} ຊົ່ວໂມງກ່ອນ'},
          },
        },
        minute: {
          displayName: 'ນາທີ',
          relative: {0: 'ນາທີນີ້'},
          relativeTime: {
            future: {other: '{0} ໃນອີກ 0 ນາທີ'},
            past: {other: '{0} ນາທີກ່ອນ'},
          },
        },
        second: {
          displayName: 'ວິນາທີ',
          relative: {0: 'ຕອນນີ້'},
          relativeTime: {
            future: {other: 'ໃນອີກ {0} ວິນາທີ'},
            past: {other: '{0} ວິນາທີກ່ອນ'},
          },
        },
      },
    },
    {
      locale: 'lrc',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'سال',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ما',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'روٙز',
          relative: {0: 'أمروٙ', 1: 'شوٙصوٙ', '-1': 'دیروٙز'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ساأت',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'دئیقە',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ثانیە',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'lrc-IQ', parentLocale: 'lrc'},
    {
      locale: 'lt',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[1] || '',
          i = Number(a[0]) == e,
          o = i && a[0].slice(-1),
          n = i && a[0].slice(-2);
        return t
          ? 'other'
          : 1 == o && (n < 11 || n > 19)
          ? 'one'
          : o >= 2 && o <= 9 && (n < 11 || n > 19)
          ? 'few'
          : 0 != r
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'metai',
          relative: {
            0: 'šiais metais',
            1: 'kitais metais',
            '-1': 'praėjusiais metais',
          },
          relativeTime: {
            future: {
              one: 'po {0} metų',
              few: 'po {0} metų',
              many: 'po {0} metų',
              other: 'po {0} metų',
            },
            past: {
              one: 'prieš {0} metus',
              few: 'prieš {0} metus',
              many: 'prieš {0} metų',
              other: 'prieš {0} metų',
            },
          },
        },
        month: {
          displayName: 'mėnuo',
          relative: {0: 'šį mėnesį', 1: 'kitą mėnesį', '-1': 'praėjusį mėnesį'},
          relativeTime: {
            future: {
              one: 'po {0} mėnesio',
              few: 'po {0} mėnesių',
              many: 'po {0} mėnesio',
              other: 'po {0} mėnesių',
            },
            past: {
              one: 'prieš {0} mėnesį',
              few: 'prieš {0} mėnesius',
              many: 'prieš {0} mėnesio',
              other: 'prieš {0} mėnesių',
            },
          },
        },
        day: {
          displayName: 'diena',
          relative: {
            0: 'šiandien',
            1: 'rytoj',
            2: 'poryt',
            '-2': 'užvakar',
            '-1': 'vakar',
          },
          relativeTime: {
            future: {
              one: 'po {0} dienos',
              few: 'po {0} dienų',
              many: 'po {0} dienos',
              other: 'po {0} dienų',
            },
            past: {
              one: 'prieš {0} dieną',
              few: 'prieš {0} dienas',
              many: 'prieš {0} dienos',
              other: 'prieš {0} dienų',
            },
          },
        },
        hour: {
          displayName: 'valanda',
          relative: {0: 'šią valandą'},
          relativeTime: {
            future: {
              one: 'po {0} valandos',
              few: 'po {0} valandų',
              many: 'po {0} valandos',
              other: 'po {0} valandų',
            },
            past: {
              one: 'prieš {0} valandą',
              few: 'prieš {0} valandas',
              many: 'prieš {0} valandos',
              other: 'prieš {0} valandų',
            },
          },
        },
        minute: {
          displayName: 'minutė',
          relative: {0: 'šią minutę'},
          relativeTime: {
            future: {
              one: 'po {0} minutės',
              few: 'po {0} minučių',
              many: 'po {0} minutės',
              other: 'po {0} minučių',
            },
            past: {
              one: 'prieš {0} minutę',
              few: 'prieš {0} minutes',
              many: 'prieš {0} minutės',
              other: 'prieš {0} minučių',
            },
          },
        },
        second: {
          displayName: 'sekundė',
          relative: {0: 'dabar'},
          relativeTime: {
            future: {
              one: 'po {0} sekundės',
              few: 'po {0} sekundžių',
              many: 'po {0} sekundės',
              other: 'po {0} sekundžių',
            },
            past: {
              one: 'prieš {0} sekundę',
              few: 'prieš {0} sekundes',
              many: 'prieš {0} sekundės',
              other: 'prieš {0} sekundžių',
            },
          },
        },
      },
    },
    {
      locale: 'lu',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Tshidimu',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ngondo',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Dituku',
          relative: {0: 'Lelu', 1: 'Malaba', '-1': 'Makelela'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Diba',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Kasunsu',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Kasunsukusu',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'luo',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'higa',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'dwe',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'chieng’',
          relative: {0: 'kawuono', 1: 'kiny', '-1': 'nyoro'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'dakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'nyiriri mar saa',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'luy',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Muhiga',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mweri',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ridiku',
          relative: {0: 'Lero', 1: 'Mgamba', '-1': 'Mgorova'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Isaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Idagika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'lv',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[1] || '',
          i = r.length,
          o = Number(a[0]) == e,
          n = o && a[0].slice(-1),
          l = o && a[0].slice(-2),
          u = r.slice(-2),
          s = r.slice(-1);
        return t
          ? 'other'
          : (o && 0 == n) ||
            (l >= 11 && l <= 19) ||
            (2 == i && u >= 11 && u <= 19)
          ? 'zero'
          : (1 == n && 11 != l) ||
            (2 == i && 1 == s && 11 != u) ||
            (2 != i && 1 == s)
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'gads',
          relative: {
            0: 'šajā gadā',
            1: 'nākamajā gadā',
            '-1': 'pagājušajā gadā',
          },
          relativeTime: {
            future: {
              zero: 'pēc {0} gadiem',
              one: 'pēc {0} gada',
              other: 'pēc {0} gadiem',
            },
            past: {
              zero: 'pirms {0} gadiem',
              one: 'pirms {0} gada',
              other: 'pirms {0} gadiem',
            },
          },
        },
        month: {
          displayName: 'mēnesis',
          relative: {
            0: 'šajā mēnesī',
            1: 'nākamajā mēnesī',
            '-1': 'pagājušajā mēnesī',
          },
          relativeTime: {
            future: {
              zero: 'pēc {0} mēnešiem',
              one: 'pēc {0} mēneša',
              other: 'pēc {0} mēnešiem',
            },
            past: {
              zero: 'pirms {0} mēnešiem',
              one: 'pirms {0} mēneša',
              other: 'pirms {0} mēnešiem',
            },
          },
        },
        day: {
          displayName: 'diena',
          relative: {
            0: 'šodien',
            1: 'rīt',
            2: 'parīt',
            '-2': 'aizvakar',
            '-1': 'vakar',
          },
          relativeTime: {
            future: {
              zero: 'pēc {0} dienām',
              one: 'pēc {0} dienas',
              other: 'pēc {0} dienām',
            },
            past: {
              zero: 'pirms {0} dienām',
              one: 'pirms {0} dienas',
              other: 'pirms {0} dienām',
            },
          },
        },
        hour: {
          displayName: 'stundas',
          relative: {0: 'šajā stundā'},
          relativeTime: {
            future: {
              zero: 'pēc {0} stundām',
              one: 'pēc {0} stundas',
              other: 'pēc {0} stundām',
            },
            past: {
              zero: 'pirms {0} stundām',
              one: 'pirms {0} stundas',
              other: 'pirms {0} stundām',
            },
          },
        },
        minute: {
          displayName: 'minūtes',
          relative: {0: 'šajā minūtē'},
          relativeTime: {
            future: {
              zero: 'pēc {0} minūtēm',
              one: 'pēc {0} minūtes',
              other: 'pēc {0} minūtēm',
            },
            past: {
              zero: 'pirms {0} minūtēm',
              one: 'pirms {0} minūtes',
              other: 'pirms {0} minūtēm',
            },
          },
        },
        second: {
          displayName: 'sekundes',
          relative: {0: 'tagad'},
          relativeTime: {
            future: {
              zero: 'pēc {0} sekundēm',
              one: 'pēc {0} sekundes',
              other: 'pēc {0} sekundēm',
            },
            past: {
              zero: 'pirms {0} sekundēm',
              one: 'pirms {0} sekundes',
              other: 'pirms {0} sekundēm',
            },
          },
        },
      },
    },
    {
      locale: 'mas',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Ɔlárì',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ɔlápà',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ɛnkɔlɔ́ŋ',
          relative: {0: 'Táatá', 1: 'Tááisérè', '-1': 'Ŋolé'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ɛ́sáâ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Oldákikaè',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'mas-TZ', parentLocale: 'mas'},
    {
      locale: 'mer',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mweri',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ntukũ',
          relative: {0: 'Narua', 1: 'Rũjũ', '-1': 'Ĩgoro'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ĩthaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Ndagika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekondi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'mfe',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Lane',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwa',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Zour',
          relative: {0: 'Zordi', 1: 'Demin', '-1': 'Yer'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ler',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minit',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Segonn',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'mg',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Taona',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Volana',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Andro',
          relative: {0: 'Anio', 1: 'Rahampitso', '-1': 'Omaly'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ora',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minitra',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Segondra',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'mgh',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'yaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'mweri',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'nihuku',
          relative: {0: 'lel’lo', 1: 'me’llo', '-1': 'n’chana'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'isaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'idakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'isekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'mgo',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'fituʼ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'iməg',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: '+{0} m', other: '+{0} m'},
            past: {one: '-{0} m', other: '-{0} m'},
          },
        },
        day: {
          displayName: 'anəg',
          relative: {0: 'tèchɔ̀ŋ', 1: 'isu', 2: 'isu ywi', '-1': 'ikwiri'},
          relativeTime: {
            future: {one: '+{0} d', other: '+{0} d'},
            past: {one: '-{0} d', other: '-{0} d'},
          },
        },
        hour: {
          displayName: 'Hour',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: '+{0} h', other: '+{0} h'},
            past: {one: '-{0} h', other: '-{0} h'},
          },
        },
        minute: {
          displayName: 'Minute',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: '+{0} min', other: '+{0} min'},
            past: {one: '-{0} min', other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Second',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: '+{0} s', other: '+{0} s'},
            past: {one: '-{0} s', other: '-{0} s'},
          },
        },
      },
    },
    {
      locale: 'mk',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-1),
          l = r.slice(-2),
          u = i.slice(-1);
        return t
          ? 1 == n && 11 != l
            ? 'one'
            : 2 == n && 12 != l
            ? 'two'
            : (7 != n && 8 != n) || 17 == l || 18 == l
            ? 'other'
            : 'many'
          : (o && 1 == n) || 1 == u
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'година',
          relative: {
            0: 'оваа година',
            1: 'следната година',
            '-1': 'минатата година',
          },
          relativeTime: {
            future: {one: 'за {0} година', other: 'за {0} години'},
            past: {one: 'пред {0} година', other: 'пред {0} години'},
          },
        },
        month: {
          displayName: 'месец',
          relative: {
            0: 'овој месец',
            1: 'следниот месец',
            '-1': 'минатиот месец',
          },
          relativeTime: {
            future: {one: 'за {0} месец', other: 'за {0} месеци'},
            past: {one: 'пред {0} месец', other: 'пред {0} месеци'},
          },
        },
        day: {
          displayName: 'ден',
          relative: {
            0: 'денес',
            1: 'утре',
            2: 'задутре',
            '-2': 'завчера',
            '-1': 'вчера',
          },
          relativeTime: {
            future: {one: 'за {0} ден', other: 'за {0} дена'},
            past: {one: 'пред {0} ден', other: 'пред {0} дена'},
          },
        },
        hour: {
          displayName: 'час',
          relative: {0: 'часов'},
          relativeTime: {
            future: {one: 'за {0} час', other: 'за {0} часа'},
            past: {one: 'пред {0} час', other: 'пред {0} часа'},
          },
        },
        minute: {
          displayName: 'минута',
          relative: {0: 'оваа минута'},
          relativeTime: {
            future: {one: 'за {0} минута', other: 'за {0} минути'},
            past: {one: 'пред {0} минута', other: 'пред {0} минути'},
          },
        },
        second: {
          displayName: 'секунда',
          relative: {0: 'сега'},
          relativeTime: {
            future: {one: 'за {0} секунда', other: 'за {0} секунди'},
            past: {one: 'пред {0} секунда', other: 'пред {0} секунди'},
          },
        },
      },
    },
    {
      locale: 'ml',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'വർഷം',
          relative: {0: 'ഈ വർ‌ഷം', 1: 'അടുത്തവർഷം', '-1': 'കഴിഞ്ഞ വർഷം'},
          relativeTime: {
            future: {one: '{0} വർഷത്തിൽ', other: '{0} വർഷത്തിൽ'},
            past: {one: '{0} വർഷം മുമ്പ്', other: '{0} വർഷം മുമ്പ്'},
          },
        },
        month: {
          displayName: 'മാസം',
          relative: {0: 'ഈ മാസം', 1: 'അടുത്ത മാസം', '-1': 'കഴിഞ്ഞ മാസം'},
          relativeTime: {
            future: {one: '{0} മാസത്തിൽ', other: '{0} മാസത്തിൽ'},
            past: {one: '{0} മാസം മുമ്പ്', other: '{0} മാസം മുമ്പ്'},
          },
        },
        day: {
          displayName: 'ദിവസം',
          relative: {
            0: 'ഇന്ന്',
            1: 'നാളെ',
            2: 'മറ്റന്നാൾ',
            '-2': 'മിനിഞ്ഞാന്ന്',
            '-1': 'ഇന്നലെ',
          },
          relativeTime: {
            future: {one: '{0} ദിവസത്തിൽ', other: '{0} ദിവസത്തിൽ'},
            past: {one: '{0} ദിവസം മുമ്പ്', other: '{0} ദിവസം മുമ്പ്'},
          },
        },
        hour: {
          displayName: 'മണിക്കൂർ',
          relative: {0: 'ഈ മണിക്കൂറിൽ'},
          relativeTime: {
            future: {one: '{0} മണിക്കൂറിൽ', other: '{0} മണിക്കൂറിൽ'},
            past: {one: '{0} മണിക്കൂർ മുമ്പ്', other: '{0} മണിക്കൂർ മുമ്പ്'},
          },
        },
        minute: {
          displayName: 'മിനിറ്റ്',
          relative: {0: 'ഈ മിനിറ്റിൽ'},
          relativeTime: {
            future: {one: '{0} മിനിറ്റിൽ', other: '{0} മിനിറ്റിൽ'},
            past: {one: '{0} മിനിറ്റ് മുമ്പ്', other: '{0} മിനിറ്റ് മുമ്പ്'},
          },
        },
        second: {
          displayName: 'സെക്കൻഡ്',
          relative: {0: 'ഇപ്പോൾ'},
          relativeTime: {
            future: {one: '{0} സെക്കൻഡിൽ', other: '{0} സെക്കൻഡിൽ'},
            past: {one: '{0} സെക്കൻഡ് മുമ്പ്', other: '{0} സെക്കൻഡ് മുമ്പ്'},
          },
        },
      },
    },
    {
      locale: 'mn',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'жил',
          relative: {0: 'энэ жил', 1: 'ирэх жил', '-1': 'өнгөрсөн жил'},
          relativeTime: {
            future: {one: '{0} жилийн дараа', other: '{0} жилийн дараа'},
            past: {one: '{0} жилийн өмнө', other: '{0} жилийн өмнө'},
          },
        },
        month: {
          displayName: 'сар',
          relative: {0: 'энэ сар', 1: 'ирэх сар', '-1': 'өнгөрсөн сар'},
          relativeTime: {
            future: {one: '{0} сарын дараа', other: '{0} сарын дараа'},
            past: {one: '{0} сарын өмнө', other: '{0} сарын өмнө'},
          },
        },
        day: {
          displayName: 'өдөр',
          relative: {
            0: 'өнөөдөр',
            1: 'маргааш',
            2: 'нөгөөдөр',
            '-2': 'уржигдар',
            '-1': 'өчигдөр',
          },
          relativeTime: {
            future: {one: '{0} өдрийн дараа', other: '{0} өдрийн дараа'},
            past: {one: '{0} өдрийн өмнө', other: '{0} өдрийн өмнө'},
          },
        },
        hour: {
          displayName: 'цаг',
          relative: {0: 'энэ цаг'},
          relativeTime: {
            future: {one: '{0} цагийн дараа', other: '{0} цагийн дараа'},
            past: {one: '{0} цагийн өмнө', other: '{0} цагийн өмнө'},
          },
        },
        minute: {
          displayName: 'минут',
          relative: {0: 'энэ минут'},
          relativeTime: {
            future: {one: '{0} минутын дараа', other: '{0} минутын дараа'},
            past: {one: '{0} минутын өмнө', other: '{0} минутын өмнө'},
          },
        },
        second: {
          displayName: 'секунд',
          relative: {0: 'одоо'},
          relativeTime: {
            future: {one: '{0} секундын дараа', other: '{0} секундын дараа'},
            past: {one: '{0} секундын өмнө', other: '{0} секундын өмнө'},
          },
        },
      },
    },
    {
      locale: 'mn-Mong',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'mo',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = !a[1],
          i = Number(a[0]) == e && a[0].slice(-2);
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : 1 == e && r
          ? 'one'
          : !r || 0 == e || (1 != e && i >= 1 && i <= 19)
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
    {
      locale: 'mr',
      pluralRuleFunction: function(e, t) {
        return t
          ? 1 == e
            ? 'one'
            : 2 == e || 3 == e
            ? 'two'
            : 4 == e
            ? 'few'
            : 'other'
          : e >= 0 && e <= 1
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'वर्ष',
          relative: {0: 'हे वर्ष', 1: 'पुढील वर्ष', '-1': 'मागील वर्ष'},
          relativeTime: {
            future: {one: '{0} वर्षामध्ये', other: '{0} वर्षांमध्ये'},
            past: {one: '{0} वर्षापूर्वी', other: '{0} वर्षांपूर्वी'},
          },
        },
        month: {
          displayName: 'महिना',
          relative: {0: 'हा महिना', 1: 'पुढील महिना', '-1': 'मागील महिना'},
          relativeTime: {
            future: {one: '{0} महिन्यामध्ये', other: '{0} महिन्यांमध्ये'},
            past: {one: '{0} महिन्यापूर्वी', other: '{0} महिन्यांपूर्वी'},
          },
        },
        day: {
          displayName: 'दिवस',
          relative: {0: 'आज', 1: 'उद्या', '-1': 'काल'},
          relativeTime: {
            future: {one: '{0} दिवसामध्ये', other: '{0} दिवसांमध्ये'},
            past: {one: '{0} दिवसापूर्वी', other: '{0} दिवसांपूर्वी'},
          },
        },
        hour: {
          displayName: 'तास',
          relative: {0: 'तासात'},
          relativeTime: {
            future: {one: '{0} तासामध्ये', other: '{0} तासांमध्ये'},
            past: {one: '{0} तासापूर्वी', other: '{0} तासांपूर्वी'},
          },
        },
        minute: {
          displayName: 'मिनिट',
          relative: {0: 'या मिनिटात'},
          relativeTime: {
            future: {one: '{0} मिनिटामध्ये', other: '{0} मिनिटांमध्ये'},
            past: {one: '{0} मिनिटापूर्वी', other: '{0} मिनिटांपूर्वी'},
          },
        },
        second: {
          displayName: 'सेकंद',
          relative: {0: 'आत्ता'},
          relativeTime: {
            future: {one: '{0} सेकंदामध्ये', other: '{0} सेकंदांमध्ये'},
            past: {one: '{0} सेकंदापूर्वी', other: '{0} सेकंदांपूर्वी'},
          },
        },
      },
    },
    {
      locale: 'ms',
      pluralRuleFunction: function(e, t) {
        return t && 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Tahun',
          relative: {0: 'tahun ini', 1: 'tahun depan', '-1': 'tahun lalu'},
          relativeTime: {
            future: {other: 'dalam {0} saat'},
            past: {other: '{0} tahun lalu'},
          },
        },
        month: {
          displayName: 'Bulan',
          relative: {0: 'bulan ini', 1: 'bulan depan', '-1': 'bulan lalu'},
          relativeTime: {
            future: {other: 'dalam {0} bulan'},
            past: {other: '{0} bulan lalu'},
          },
        },
        day: {
          displayName: 'Hari',
          relative: {
            0: 'hari ini',
            1: 'esok',
            2: 'lusa',
            '-2': 'kelmarin',
            '-1': 'semalam',
          },
          relativeTime: {
            future: {other: 'dalam {0} hari'},
            past: {other: '{0} hari lalu'},
          },
        },
        hour: {
          displayName: 'Jam',
          relative: {0: 'jam ini'},
          relativeTime: {
            future: {other: 'dalam {0} jam'},
            past: {other: '{0} jam lalu'},
          },
        },
        minute: {
          displayName: 'Minit',
          relative: {0: 'pada minit ini'},
          relativeTime: {
            future: {other: 'dalam {0} minit'},
            past: {other: '{0} minit lalu'},
          },
        },
        second: {
          displayName: 'Saat',
          relative: {0: 'sekarang'},
          relativeTime: {
            future: {other: 'dalam {0} saat'},
            past: {other: '{0} saat lalu'},
          },
        },
      },
    },
    {
      locale: 'ms-Arab',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {locale: 'ms-BN', parentLocale: 'ms'},
    {locale: 'ms-SG', parentLocale: 'ms'},
    {
      locale: 'mt',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e && a[0].slice(-2);
        return t
          ? 'other'
          : 1 == e
          ? 'one'
          : 0 == e || (r >= 2 && r <= 10)
          ? 'few'
          : r >= 11 && r <= 19
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
    {
      locale: 'mua',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Syii',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Fĩi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Zah’nane/ Comme',
          relative: {0: 'Tǝ’nahko', 1: 'Tǝ’nane', '-1': 'Tǝsoo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Cok comme',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Cok comme ma laŋne',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Cok comme ma laŋ tǝ biŋ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'my',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'နှစ်',
          relative: {0: 'ယခုနှစ်', 1: 'လာမည့်နှစ်', '-1': 'ယမန်နှစ်'},
          relativeTime: {
            future: {other: '{0} နှစ်အတွင်း'},
            past: {other: 'ပြီးခဲ့သည့် {0} နှစ်'},
          },
        },
        month: {
          displayName: 'လ',
          relative: {0: 'ယခုလ', 1: 'လာမည့်လ', '-1': 'ပြီးခဲ့သည့်လ'},
          relativeTime: {
            future: {other: '{0} လအတွင်း'},
            past: {other: 'ပြီးခဲ့သည့် {0} လ'},
          },
        },
        day: {
          displayName: 'ရက်',
          relative: {
            0: 'ယနေ့',
            1: 'မနက်ဖြန်',
            2: 'သန်ဘက်ခါ',
            '-2': 'တစ်နေ့က',
            '-1': 'မနေ့က',
          },
          relativeTime: {
            future: {other: '{0} ရက်အတွင်း'},
            past: {other: 'ပြီးခဲ့သည့် {0} ရက်'},
          },
        },
        hour: {
          displayName: 'နာရီ',
          relative: {0: 'ဤအချိန်'},
          relativeTime: {
            future: {other: '{0} နာရီအတွင်း'},
            past: {other: 'ပြီးခဲ့သည့် {0} နာရီ'},
          },
        },
        minute: {
          displayName: 'မိနစ်',
          relative: {0: 'ဤမိနစ်'},
          relativeTime: {
            future: {other: '{0} မိနစ်အတွင်း'},
            past: {other: 'ပြီးခဲ့သည့် {0} မိနစ်'},
          },
        },
        second: {
          displayName: 'စက္ကန့်',
          relative: {0: 'ယခု'},
          relativeTime: {
            future: {other: '{0} စက္ကန့်အတွင်း'},
            past: {other: 'ပြီးခဲ့သည့် {0} စက္ကန့်'},
          },
        },
      },
    },
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
    {
      locale: 'nah',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'naq',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
      },
      fields: {
        year: {
          displayName: 'Kurib',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ǁKhâb',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Tsees',
          relative: {0: 'Neetsee', 1: 'tomorrow', '-1': 'yesterday'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Iiri',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Haib',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ǀGâub',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'nb',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'år',
          relative: {0: 'i år', 1: 'neste år', '-1': 'i fjor'},
          relativeTime: {
            future: {one: 'om {0} år', other: 'om {0} år'},
            past: {one: 'for {0} år siden', other: 'for {0} år siden'},
          },
        },
        month: {
          displayName: 'måned',
          relative: {
            0: 'denne måneden',
            1: 'neste måned',
            '-1': 'forrige måned',
          },
          relativeTime: {
            future: {one: 'om {0} måned', other: 'om {0} måneder'},
            past: {one: 'for {0} måned siden', other: 'for {0} måneder siden'},
          },
        },
        day: {
          displayName: 'dag',
          relative: {
            0: 'i dag',
            1: 'i morgen',
            2: 'i overmorgen',
            '-2': 'i forgårs',
            '-1': 'i går',
          },
          relativeTime: {
            future: {one: 'om {0} døgn', other: 'om {0} døgn'},
            past: {one: 'for {0} døgn siden', other: 'for {0} døgn siden'},
          },
        },
        hour: {
          displayName: 'time',
          relative: {0: 'denne timen'},
          relativeTime: {
            future: {one: 'om {0} time', other: 'om {0} timer'},
            past: {one: 'for {0} time siden', other: 'for {0} timer siden'},
          },
        },
        minute: {
          displayName: 'minutt',
          relative: {0: 'dette minuttet'},
          relativeTime: {
            future: {one: 'om {0} minutt', other: 'om {0} minutter'},
            past: {
              one: 'for {0} minutt siden',
              other: 'for {0} minutter siden',
            },
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'nå'},
          relativeTime: {
            future: {one: 'om {0} sekund', other: 'om {0} sekunder'},
            past: {
              one: 'for {0} sekund siden',
              other: 'for {0} sekunder siden',
            },
          },
        },
      },
    },
    {locale: 'nb-SJ', parentLocale: 'nb'},
    {
      locale: 'nd',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Umnyaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Inyangacale',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ilanga',
          relative: {0: 'Lamuhla', 1: 'Kusasa', '-1': 'Izolo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ihola',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Umuzuzu',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Isekendi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'nds',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {locale: 'nds-NL', parentLocale: 'nds'},
    {
      locale: 'ne',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e;
        return t
          ? r && e >= 1 && e <= 4
            ? 'one'
            : 'other'
          : 1 == e
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'वर्ष',
          relative: {0: 'यो वर्ष', 1: 'अर्को वर्ष', '-1': 'गत वर्ष'},
          relativeTime: {
            future: {one: '{0} वर्षमा', other: '{0} वर्षमा'},
            past: {one: '{0} वर्ष अघि', other: '{0} वर्ष अघि'},
          },
        },
        month: {
          displayName: 'महिना',
          relative: {0: 'यो महिना', 1: 'अर्को महिना', '-1': 'गत महिना'},
          relativeTime: {
            future: {one: '{0} महिनामा', other: '{0} महिनामा'},
            past: {one: '{0} महिना पहिले', other: '{0} महिना पहिले'},
          },
        },
        day: {
          displayName: 'बार',
          relative: {
            0: 'आज',
            1: 'भोलि',
            2: 'पर्सि',
            '-2': 'अस्ति',
            '-1': 'हिजो',
          },
          relativeTime: {
            future: {one: '{0} दिनमा', other: '{0} दिनमा'},
            past: {one: '{0} दिन पहिले', other: '{0} दिन पहिले'},
          },
        },
        hour: {
          displayName: 'घण्टा',
          relative: {0: 'यो घडीमा'},
          relativeTime: {
            future: {one: '{0} घण्टामा', other: '{0} घण्टामा'},
            past: {one: '{0} घण्टा पहिले', other: '{0} घण्टा पहिले'},
          },
        },
        minute: {
          displayName: 'मिनेट',
          relative: {0: 'यही मिनेटमा'},
          relativeTime: {
            future: {one: '{0} मिनेटमा', other: '{0} मिनेटमा'},
            past: {one: '{0} मिनेट पहिले', other: '{0} मिनेट पहिले'},
          },
        },
        second: {
          displayName: 'सेकेन्ड',
          relative: {0: 'अब'},
          relativeTime: {
            future: {one: '{0} सेकेण्डमा', other: '{0} सेकेण्डमा'},
            past: {one: '{0} सेकेण्ड पहिले', other: '{0} सेकेण्ड पहिले'},
          },
        },
      },
    },
    {locale: 'ne-IN', parentLocale: 'ne'},
    {
      locale: 'nl',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'jaar',
          relative: {0: 'dit jaar', 1: 'volgend jaar', '-1': 'vorig jaar'},
          relativeTime: {
            future: {one: 'over {0} jaar', other: 'over {0} jaar'},
            past: {one: '{0} jaar geleden', other: '{0} jaar geleden'},
          },
        },
        month: {
          displayName: 'maand',
          relative: {
            0: 'deze maand',
            1: 'volgende maand',
            '-1': 'vorige maand',
          },
          relativeTime: {
            future: {one: 'over {0} maand', other: 'over {0} maanden'},
            past: {one: '{0} maand geleden', other: '{0} maanden geleden'},
          },
        },
        day: {
          displayName: 'dag',
          relative: {
            0: 'vandaag',
            1: 'morgen',
            2: 'overmorgen',
            '-2': 'eergisteren',
            '-1': 'gisteren',
          },
          relativeTime: {
            future: {one: 'over {0} dag', other: 'over {0} dagen'},
            past: {one: '{0} dag geleden', other: '{0} dagen geleden'},
          },
        },
        hour: {
          displayName: 'uur',
          relative: {0: 'binnen een uur'},
          relativeTime: {
            future: {one: 'over {0} uur', other: 'over {0} uur'},
            past: {one: '{0} uur geleden', other: '{0} uur geleden'},
          },
        },
        minute: {
          displayName: 'minuut',
          relative: {0: 'binnen een minuut'},
          relativeTime: {
            future: {one: 'over {0} minuut', other: 'over {0} minuten'},
            past: {one: '{0} minuut geleden', other: '{0} minuten geleden'},
          },
        },
        second: {
          displayName: 'seconde',
          relative: {0: 'nu'},
          relativeTime: {
            future: {one: 'over {0} seconde', other: 'over {0} seconden'},
            past: {one: '{0} seconde geleden', other: '{0} seconden geleden'},
          },
        },
      },
    },
    {locale: 'nl-AW', parentLocale: 'nl'},
    {locale: 'nl-BE', parentLocale: 'nl'},
    {locale: 'nl-BQ', parentLocale: 'nl'},
    {locale: 'nl-CW', parentLocale: 'nl'},
    {locale: 'nl-SR', parentLocale: 'nl'},
    {locale: 'nl-SX', parentLocale: 'nl'},
    {
      locale: 'nmg',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mbvu',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ngwɛn',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Duö',
          relative: {0: 'Dɔl', 1: 'Namáná', '-1': 'Nakugú'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Wulā',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Mpálâ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Nyiɛl',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'nn',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'år',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {one: 'om {0} år', other: 'om {0} år'},
            past: {one: 'for {0} år siden', other: 'for {0} år siden'},
          },
        },
        month: {
          displayName: 'månad',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: 'om {0} måned', other: 'om {0} måneder'},
            past: {one: 'for {0} måned siden', other: 'for {0} måneder siden'},
          },
        },
        day: {
          displayName: 'dag',
          relative: {
            0: 'i dag',
            1: 'i morgon',
            2: 'i overmorgon',
            '-2': 'i forgårs',
            '-1': 'i går',
          },
          relativeTime: {
            future: {one: 'om {0} døgn', other: 'om {0} døgn'},
            past: {one: 'for {0} døgn siden', other: 'for {0} døgn siden'},
          },
        },
        hour: {
          displayName: 'time',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'om {0} time', other: 'om {0} timer'},
            past: {one: 'for {0} time siden', other: 'for {0} timer siden'},
          },
        },
        minute: {
          displayName: 'minutt',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'om {0} minutt', other: 'om {0} minutter'},
            past: {
              one: 'for {0} minutt siden',
              other: 'for {0} minutter siden',
            },
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: 'om {0} sekund', other: 'om {0} sekunder'},
            past: {
              one: 'for {0} sekund siden',
              other: 'for {0} sekunder siden',
            },
          },
        },
      },
    },
    {
      locale: 'nnh',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ngùʼ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Month',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'lyɛ̌ʼ',
          relative: {
            0: 'lyɛ̌ʼɔɔn',
            1: 'jǔɔ gẅie à ne ntóo',
            '-1': 'jǔɔ gẅie à ka tɔ̌g',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'fʉ̀ʼ nèm',
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
    {
      locale: 'no',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'nqo',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'nr',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'nso',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
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
    {
      locale: 'nus',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Ruɔ̱n',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Pay',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Cäŋ',
          relative: {0: 'Walɛ', 1: 'Ruun', '-1': 'Pan'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Thaak',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minit',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Thɛkɛni',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ny',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'nyn',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Omwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Omwezi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Eizooba',
          relative: {0: 'Erizooba', 1: 'Nyenkyakare', '-1': 'Nyomwabazyo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Shaaha',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Edakiika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Obucweka/Esekendi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'om',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {locale: 'om-KE', parentLocale: 'om'},
    {
      locale: 'or',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'os',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Аз',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Мӕй',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Бон',
          relative: {
            0: 'Абон',
            1: 'Сом',
            2: 'Иннӕбон',
            '-2': 'Ӕндӕрӕбон',
            '-1': 'Знон',
          },
          relativeTime: {
            future: {one: '{0} боны фӕстӕ', other: '{0} боны фӕстӕ'},
            past: {one: '{0} бон раздӕр', other: '{0} боны размӕ'},
          },
        },
        hour: {
          displayName: 'Сахат',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: '{0} сахаты фӕстӕ', other: '{0} сахаты фӕстӕ'},
            past: {one: '{0} сахаты размӕ', other: '{0} сахаты размӕ'},
          },
        },
        minute: {
          displayName: 'Минут',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Секунд',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'os-RU', parentLocale: 'os'},
    {
      locale: 'pa',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ਸਾਲ',
          relative: {0: 'ਇਹ ਸਾਲ', 1: 'ਅਗਲਾ ਸਾਲ', '-1': 'ਪਿਛਲਾ ਸਾਲ'},
          relativeTime: {
            future: {one: '{0} ਸਾਲ ਵਿੱਚ', other: '{0} ਸਾਲਾਂ ਵਿੱਚ'},
            past: {one: '{0} ਸਾਲ ਪਹਿਲਾਂ', other: '{0} ਸਾਲ ਪਹਿਲਾਂ'},
          },
        },
        month: {
          displayName: 'ਮਹੀਨਾ',
          relative: {0: 'ਇਹ ਮਹੀਨਾ', 1: 'ਅਗਲਾ ਮਹੀਨਾ', '-1': 'ਪਿਛਲਾ ਮਹੀਨਾ'},
          relativeTime: {
            future: {one: '{0} ਮਹੀਨੇ ਵਿੱਚ', other: '{0} ਮਹੀਨਿਆਂ ਵਿੱਚ'},
            past: {one: '{0} ਮਹੀਨਾ ਪਹਿਲਾਂ', other: '{0} ਮਹੀਨੇ ਪਹਿਲਾਂ'},
          },
        },
        day: {
          displayName: 'ਦਿਨ',
          relative: {0: 'ਅੱਜ', 1: 'ਭਲਕੇ', '-1': 'ਬੀਤਿਆ ਕੱਲ੍ਹ'},
          relativeTime: {
            future: {one: '{0} ਦਿਨ ਵਿੱਚ', other: '{0} ਦਿਨਾਂ ਵਿੱਚ'},
            past: {one: '{0} ਦਿਨ ਪਹਿਲਾਂ', other: '{0} ਦਿਨ ਪਹਿਲਾਂ'},
          },
        },
        hour: {
          displayName: 'ਘੰਟਾ',
          relative: {0: 'ਇਸ ਘੰਟੇ'},
          relativeTime: {
            future: {one: '{0} ਘੰਟੇ ਵਿੱਚ', other: '{0} ਘੰਟਿਆਂ ਵਿੱਚ'},
            past: {one: '{0} ਘੰਟਾ ਪਹਿਲਾਂ', other: '{0} ਘੰਟੇ ਪਹਿਲਾਂ'},
          },
        },
        minute: {
          displayName: 'ਮਿੰਟ',
          relative: {0: 'ਇਸ ਮਿੰਟ'},
          relativeTime: {
            future: {one: '{0} ਮਿੰਟ ਵਿੱਚ', other: '{0} ਮਿੰਟਾਂ ਵਿੱਚ'},
            past: {one: '{0} ਮਿੰਟ ਪਹਿਲਾਂ', other: '{0} ਮਿੰਟ ਪਹਿਲਾਂ'},
          },
        },
        second: {
          displayName: 'ਸਕਿੰਟ',
          relative: {0: 'ਹੁਣ'},
          relativeTime: {
            future: {one: '{0} ਸਕਿੰਟ ਵਿੱਚ', other: '{0} ਸਕਿੰਟਾਂ ਵਿੱਚ'},
            past: {one: '{0} ਸਕਿੰਟ ਪਹਿਲਾਂ', other: '{0} ਸਕਿੰਟ ਪਹਿਲਾਂ'},
          },
        },
      },
    },
    {
      locale: 'pa-Arab',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ورھا',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'مہينا',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'دئن',
          relative: {0: 'today', 1: 'tomorrow', '-1': 'yesterday'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'گھنٹا',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'منٹ',
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
    {locale: 'pa-Guru', parentLocale: 'pa'},
    {
      locale: 'pap',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'pl',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1],
          o = r.slice(-1),
          n = r.slice(-2);
        return t
          ? 'other'
          : 1 == e && i
          ? 'one'
          : i && o >= 2 && o <= 4 && (n < 12 || n > 14)
          ? 'few'
          : (i && 1 != r && (0 == o || 1 == o)) ||
            (i && o >= 5 && o <= 9) ||
            (i && n >= 12 && n <= 14)
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'rok',
          relative: {
            0: 'w tym roku',
            1: 'w przyszłym roku',
            '-1': 'w zeszłym roku',
          },
          relativeTime: {
            future: {
              one: 'za {0} rok',
              few: 'za {0} lata',
              many: 'za {0} lat',
              other: 'za {0} roku',
            },
            past: {
              one: '{0} rok temu',
              few: '{0} lata temu',
              many: '{0} lat temu',
              other: '{0} roku temu',
            },
          },
        },
        month: {
          displayName: 'miesiąc',
          relative: {
            0: 'w tym miesiącu',
            1: 'w przyszłym miesiącu',
            '-1': 'w zeszłym miesiącu',
          },
          relativeTime: {
            future: {
              one: 'za {0} miesiąc',
              few: 'za {0} miesiące',
              many: 'za {0} miesięcy',
              other: 'za {0} miesiąca',
            },
            past: {
              one: '{0} miesiąc temu',
              few: '{0} miesiące temu',
              many: '{0} miesięcy temu',
              other: '{0} miesiąca temu',
            },
          },
        },
        day: {
          displayName: 'dzień',
          relative: {
            0: 'dzisiaj',
            1: 'jutro',
            2: 'pojutrze',
            '-2': 'przedwczoraj',
            '-1': 'wczoraj',
          },
          relativeTime: {
            future: {
              one: 'za {0} dzień',
              few: 'za {0} dni',
              many: 'za {0} dni',
              other: 'za {0} dnia',
            },
            past: {
              one: '{0} dzień temu',
              few: '{0} dni temu',
              many: '{0} dni temu',
              other: '{0} dnia temu',
            },
          },
        },
        hour: {
          displayName: 'godzina',
          relative: {0: 'ta godzina'},
          relativeTime: {
            future: {
              one: 'za {0} godzinę',
              few: 'za {0} godziny',
              many: 'za {0} godzin',
              other: 'za {0} godziny',
            },
            past: {
              one: '{0} godzinę temu',
              few: '{0} godziny temu',
              many: '{0} godzin temu',
              other: '{0} godziny temu',
            },
          },
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'ta minuta'},
          relativeTime: {
            future: {
              one: 'za {0} minutę',
              few: 'za {0} minuty',
              many: 'za {0} minut',
              other: 'za {0} minuty',
            },
            past: {
              one: '{0} minutę temu',
              few: '{0} minuty temu',
              many: '{0} minut temu',
              other: '{0} minuty temu',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'teraz'},
          relativeTime: {
            future: {
              one: 'za {0} sekundę',
              few: 'za {0} sekundy',
              many: 'za {0} sekund',
              other: 'za {0} sekundy',
            },
            past: {
              one: '{0} sekundę temu',
              few: '{0} sekundy temu',
              many: '{0} sekund temu',
              other: '{0} sekundy temu',
            },
          },
        },
      },
    },
    {
      locale: 'prg',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[1] || '',
          i = r.length,
          o = Number(a[0]) == e,
          n = o && a[0].slice(-1),
          l = o && a[0].slice(-2),
          u = r.slice(-2),
          s = r.slice(-1);
        return t
          ? 'other'
          : (o && 0 == n) ||
            (l >= 11 && l <= 19) ||
            (2 == i && u >= 11 && u <= 19)
          ? 'zero'
          : (1 == n && 11 != l) ||
            (2 == i && 1 == s && 11 != u) ||
            (2 != i && 1 == s)
          ? 'one'
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
    {
      locale: 'ps',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'pt',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.')[0];
        return t ? 'other' : 0 == a || 1 == a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ano',
          relative: {0: 'este ano', 1: 'próximo ano', '-1': 'ano passado'},
          relativeTime: {
            future: {one: 'em {0} ano', other: 'em {0} anos'},
            past: {one: 'há {0} ano', other: 'há {0} anos'},
          },
        },
        month: {
          displayName: 'mês',
          relative: {0: 'este mês', 1: 'próximo mês', '-1': 'mês passado'},
          relativeTime: {
            future: {one: 'em {0} mês', other: 'em {0} meses'},
            past: {one: 'há {0} mês', other: 'há {0} meses'},
          },
        },
        day: {
          displayName: 'dia',
          relative: {
            0: 'hoje',
            1: 'amanhã',
            2: 'depois de amanhã',
            '-2': 'anteontem',
            '-1': 'ontem',
          },
          relativeTime: {
            future: {one: 'em {0} dia', other: 'em {0} dias'},
            past: {one: 'há {0} dia', other: 'há {0} dias'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'em {0} hora', other: 'em {0} horas'},
            past: {one: 'há {0} hora', other: 'há {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {one: 'em {0} minuto', other: 'em {0} minutos'},
            past: {one: 'há {0} minuto', other: 'há {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'agora'},
          relativeTime: {
            future: {one: 'em {0} segundo', other: 'em {0} segundos'},
            past: {one: 'há {0} segundo', other: 'há {0} segundos'},
          },
        },
      },
    },
    {locale: 'pt-AO', parentLocale: 'pt-PT'},
    {
      locale: 'pt-PT',
      parentLocale: 'pt',
      fields: {
        year: {
          displayName: 'ano',
          relative: {0: 'este ano', 1: 'próximo ano', '-1': 'ano passado'},
          relativeTime: {
            future: {one: 'dentro de {0} ano', other: 'dentro de {0} anos'},
            past: {one: 'há {0} ano', other: 'há {0} anos'},
          },
        },
        month: {
          displayName: 'mês',
          relative: {0: 'este mês', 1: 'próximo mês', '-1': 'mês passado'},
          relativeTime: {
            future: {one: 'dentro de {0} mês', other: 'dentro de {0} meses'},
            past: {one: 'há {0} mês', other: 'há {0} meses'},
          },
        },
        day: {
          displayName: 'dia',
          relative: {
            0: 'hoje',
            1: 'amanhã',
            2: 'depois de amanhã',
            '-2': 'anteontem',
            '-1': 'ontem',
          },
          relativeTime: {
            future: {one: 'dentro de {0} dia', other: 'dentro de {0} dias'},
            past: {one: 'há {0} dia', other: 'há {0} dias'},
          },
        },
        hour: {
          displayName: 'hora',
          relative: {0: 'esta hora'},
          relativeTime: {
            future: {one: 'dentro de {0} hora', other: 'dentro de {0} horas'},
            past: {one: 'há {0} hora', other: 'há {0} horas'},
          },
        },
        minute: {
          displayName: 'minuto',
          relative: {0: 'este minuto'},
          relativeTime: {
            future: {
              one: 'dentro de {0} minuto',
              other: 'dentro de {0} minutos',
            },
            past: {one: 'há {0} minuto', other: 'há {0} minutos'},
          },
        },
        second: {
          displayName: 'segundo',
          relative: {0: 'agora'},
          relativeTime: {
            future: {
              one: 'dentro de {0} segundo',
              other: 'dentro de {0} segundos',
            },
            past: {one: 'há {0} segundo', other: 'há {0} segundos'},
          },
        },
      },
    },
    {locale: 'pt-CH', parentLocale: 'pt-PT'},
    {locale: 'pt-CV', parentLocale: 'pt-PT'},
    {locale: 'pt-GQ', parentLocale: 'pt-PT'},
    {locale: 'pt-GW', parentLocale: 'pt-PT'},
    {locale: 'pt-LU', parentLocale: 'pt-PT'},
    {locale: 'pt-MO', parentLocale: 'pt-PT'},
    {locale: 'pt-MZ', parentLocale: 'pt-PT'},
    {locale: 'pt-ST', parentLocale: 'pt-PT'},
    {locale: 'pt-TL', parentLocale: 'pt-PT'},
    {
      locale: 'qu',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {locale: 'qu-BO', parentLocale: 'qu'},
    {locale: 'qu-EC', parentLocale: 'qu'},
    {
      locale: 'rm',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'onn',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'mais',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Tag',
          relative: {
            0: 'oz',
            1: 'damaun',
            2: 'puschmaun',
            '-2': 'stersas',
            '-1': 'ier',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ura',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'secunda',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'rn',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Umwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ukwezi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Umusi',
          relative: {0: 'Uyu musi', 1: 'Ejo (hazoza)', '-1': 'Ejo (haheze)'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Isaha',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Umunota',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Isegonda',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ro',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = !a[1],
          i = Number(a[0]) == e && a[0].slice(-2);
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : 1 == e && r
          ? 'one'
          : !r || 0 == e || (1 != e && i >= 1 && i <= 19)
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'an',
          relative: {0: 'anul acesta', 1: 'anul viitor', '-1': 'anul trecut'},
          relativeTime: {
            future: {
              one: 'peste {0} an',
              few: 'peste {0} ani',
              other: 'peste {0} de ani',
            },
            past: {
              one: 'acum {0} an',
              few: 'acum {0} ani',
              other: 'acum {0} de ani',
            },
          },
        },
        month: {
          displayName: 'lună',
          relative: {
            0: 'luna aceasta',
            1: 'luna viitoare',
            '-1': 'luna trecută',
          },
          relativeTime: {
            future: {
              one: 'peste {0} lună',
              few: 'peste {0} luni',
              other: 'peste {0} de luni',
            },
            past: {
              one: 'acum {0} lună',
              few: 'acum {0} luni',
              other: 'acum {0} de luni',
            },
          },
        },
        day: {
          displayName: 'zi',
          relative: {
            0: 'azi',
            1: 'mâine',
            2: 'poimâine',
            '-2': 'alaltăieri',
            '-1': 'ieri',
          },
          relativeTime: {
            future: {
              one: 'peste {0} zi',
              few: 'peste {0} zile',
              other: 'peste {0} de zile',
            },
            past: {
              one: 'acum {0} zi',
              few: 'acum {0} zile',
              other: 'acum {0} de zile',
            },
          },
        },
        hour: {
          displayName: 'oră',
          relative: {0: 'ora aceasta'},
          relativeTime: {
            future: {
              one: 'peste {0} oră',
              few: 'peste {0} ore',
              other: 'peste {0} de ore',
            },
            past: {
              one: 'acum {0} oră',
              few: 'acum {0} ore',
              other: 'acum {0} de ore',
            },
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'minutul acesta'},
          relativeTime: {
            future: {
              one: 'peste {0} minut',
              few: 'peste {0} minute',
              other: 'peste {0} de minute',
            },
            past: {
              one: 'acum {0} minut',
              few: 'acum {0} minute',
              other: 'acum {0} de minute',
            },
          },
        },
        second: {
          displayName: 'secundă',
          relative: {0: 'acum'},
          relativeTime: {
            future: {
              one: 'peste {0} secundă',
              few: 'peste {0} secunde',
              other: 'peste {0} de secunde',
            },
            past: {
              one: 'acum {0} secundă',
              few: 'acum {0} secunde',
              other: 'acum {0} de secunde',
            },
          },
        },
      },
    },
    {locale: 'ro-MD', parentLocale: 'ro'},
    {
      locale: 'rof',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Muaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mweri',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mfiri',
          relative: {0: 'Linu', 1: 'Ng’ama', '-1': 'Hiyo'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Isaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ru',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1],
          o = r.slice(-1),
          n = r.slice(-2);
        return t
          ? 'other'
          : i && 1 == o && 11 != n
          ? 'one'
          : i && o >= 2 && o <= 4 && (n < 12 || n > 14)
          ? 'few'
          : (i && 0 == o) ||
            (i && o >= 5 && o <= 9) ||
            (i && n >= 11 && n <= 14)
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'год',
          relative: {
            0: 'в этом году',
            1: 'в следующем году',
            '-1': 'в прошлом году',
          },
          relativeTime: {
            future: {
              one: 'через {0} год',
              few: 'через {0} года',
              many: 'через {0} лет',
              other: 'через {0} года',
            },
            past: {
              one: '{0} год назад',
              few: '{0} года назад',
              many: '{0} лет назад',
              other: '{0} года назад',
            },
          },
        },
        month: {
          displayName: 'месяц',
          relative: {
            0: 'в этом месяце',
            1: 'в следующем месяце',
            '-1': 'в прошлом месяце',
          },
          relativeTime: {
            future: {
              one: 'через {0} месяц',
              few: 'через {0} месяца',
              many: 'через {0} месяцев',
              other: 'через {0} месяца',
            },
            past: {
              one: '{0} месяц назад',
              few: '{0} месяца назад',
              many: '{0} месяцев назад',
              other: '{0} месяца назад',
            },
          },
        },
        day: {
          displayName: 'день',
          relative: {
            0: 'сегодня',
            1: 'завтра',
            2: 'послезавтра',
            '-2': 'позавчера',
            '-1': 'вчера',
          },
          relativeTime: {
            future: {
              one: 'через {0} день',
              few: 'через {0} дня',
              many: 'через {0} дней',
              other: 'через {0} дня',
            },
            past: {
              one: '{0} день назад',
              few: '{0} дня назад',
              many: '{0} дней назад',
              other: '{0} дня назад',
            },
          },
        },
        hour: {
          displayName: 'час',
          relative: {0: 'в этом часе'},
          relativeTime: {
            future: {
              one: 'через {0} час',
              few: 'через {0} часа',
              many: 'через {0} часов',
              other: 'через {0} часа',
            },
            past: {
              one: '{0} час назад',
              few: '{0} часа назад',
              many: '{0} часов назад',
              other: '{0} часа назад',
            },
          },
        },
        minute: {
          displayName: 'минута',
          relative: {0: 'в эту минуту'},
          relativeTime: {
            future: {
              one: 'через {0} минуту',
              few: 'через {0} минуты',
              many: 'через {0} минут',
              other: 'через {0} минуты',
            },
            past: {
              one: '{0} минуту назад',
              few: '{0} минуты назад',
              many: '{0} минут назад',
              other: '{0} минуты назад',
            },
          },
        },
        second: {
          displayName: 'секунда',
          relative: {0: 'сейчас'},
          relativeTime: {
            future: {
              one: 'через {0} секунду',
              few: 'через {0} секунды',
              many: 'через {0} секунд',
              other: 'через {0} секунды',
            },
            past: {
              one: '{0} секунду назад',
              few: '{0} секунды назад',
              many: '{0} секунд назад',
              other: '{0} секунды назад',
            },
          },
        },
      },
    },
    {locale: 'ru-BY', parentLocale: 'ru'},
    {locale: 'ru-KG', parentLocale: 'ru'},
    {locale: 'ru-KZ', parentLocale: 'ru'},
    {locale: 'ru-MD', parentLocale: 'ru'},
    {locale: 'ru-UA', parentLocale: 'ru'},
    {
      locale: 'rw',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'rwk',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Maka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mori',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mfiri',
          relative: {0: 'Inu', 1: 'Ngama', '-1': 'Ukou'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakyika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
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
    {
      locale: 'saq',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Lari',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Lapa',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mpari',
          relative: {0: 'Duo', 1: 'Taisere', '-1': 'Ng’ole'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saai',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Idakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Isekondi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'sbp',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Mwakha',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwesi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Lusiku',
          relative: {0: 'Ineng’uni', 1: 'Pamulaawu', '-1': 'Imehe'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Ilisala',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Idakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Isekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'sdh',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'se',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
      },
      fields: {
        year: {
          displayName: 'jáhki',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {
              one: '{0} jahki maŋŋilit',
              two: '{0} jahkki maŋŋilit',
              other: '{0} jahkki maŋŋilit',
            },
            past: {
              one: '{0} jahki árat',
              two: '{0} jahkki árat',
              other: '{0} jahkki árat',
            },
          },
        },
        month: {
          displayName: 'mánnu',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {
              one: '{0} mánotbadji maŋŋilit',
              two: '{0} mánotbadji maŋŋilit',
              other: '{0} mánotbadji maŋŋilit',
            },
            past: {
              one: '{0} mánotbadji árat',
              two: '{0} mánotbadji árat',
              other: '{0} mánotbadji árat',
            },
          },
        },
        day: {
          displayName: 'beaivi',
          relative: {
            0: 'odne',
            1: 'ihttin',
            2: 'paijeelittáá',
            '-2': 'oovdebpeivvi',
            '-1': 'ikte',
          },
          relativeTime: {
            future: {
              one: '{0} jándor maŋŋilit',
              two: '{0} jándor amaŋŋilit',
              other: '{0} jándora maŋŋilit',
            },
            past: {
              one: '{0} jándor árat',
              two: '{0} jándora árat',
              other: '{0} jándora árat',
            },
          },
        },
        hour: {
          displayName: 'diibmu',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: '{0} diibmu maŋŋilit',
              two: '{0} diibmur maŋŋilit',
              other: '{0} diibmur maŋŋilit',
            },
            past: {
              one: '{0} diibmu árat',
              two: '{0} diibmur árat',
              other: '{0} diibmur árat',
            },
          },
        },
        minute: {
          displayName: 'minuhtta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: '{0} minuhta maŋŋilit',
              two: '{0} minuhtta maŋŋilit',
              other: '{0} minuhtta maŋŋilit',
            },
            past: {
              one: '{0} minuhta árat',
              two: '{0} minuhtta árat',
              other: '{0} minuhtta árat',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'now'},
          relativeTime: {
            future: {
              one: '{0} sekunda maŋŋilit',
              two: '{0} sekundda maŋŋilit',
              other: '{0} sekundda maŋŋilit',
            },
            past: {
              one: '{0} sekunda árat',
              two: '{0} sekundda árat',
              other: '{0} sekundda árat',
            },
          },
        },
      },
    },
    {
      locale: 'se-FI',
      parentLocale: 'se',
      fields: {
        year: {
          displayName: 'jahki',
          relative: {0: 'dán jagi', 1: 'boahtte jagi', '-1': 'mannan jagi'},
          relativeTime: {
            future: {
              one: '{0} jagi siste',
              two: '{0} jagi siste',
              other: '{0} jagi siste',
            },
            past: {
              one: '{0} jagi árat',
              two: '{0} jagi árat',
              other: '{0} jagi árat',
            },
          },
        },
        month: {
          displayName: 'mánnu',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {
              one: '{0} mánotbadji maŋŋilit',
              two: '{0} mánotbadji maŋŋilit',
              other: '{0} mánotbadji maŋŋilit',
            },
            past: {
              one: '{0} mánotbadji árat',
              two: '{0} mánotbadji árat',
              other: '{0} mánotbadji árat',
            },
          },
        },
        day: {
          displayName: 'beaivi',
          relative: {
            0: 'odne',
            1: 'ihttin',
            2: 'paijeelittáá',
            '-2': 'oovdebpeivvi',
            '-1': 'ikte',
          },
          relativeTime: {
            future: {
              one: '{0} jándor maŋŋilit',
              two: '{0} jándor amaŋŋilit',
              other: '{0} jándora maŋŋilit',
            },
            past: {
              one: '{0} jándor árat',
              two: '{0} jándora árat',
              other: '{0} jándora árat',
            },
          },
        },
        hour: {
          displayName: 'diibmu',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {
              one: '{0} diibmu maŋŋilit',
              two: '{0} diibmur maŋŋilit',
              other: '{0} diibmur maŋŋilit',
            },
            past: {
              one: '{0} diibmu árat',
              two: '{0} diibmur árat',
              other: '{0} diibmur árat',
            },
          },
        },
        minute: {
          displayName: 'minuhtta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {
              one: '{0} minuhta maŋŋilit',
              two: '{0} minuhtta maŋŋilit',
              other: '{0} minuhtta maŋŋilit',
            },
            past: {
              one: '{0} minuhta árat',
              two: '{0} minuhtta árat',
              other: '{0} minuhtta árat',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'now'},
          relativeTime: {
            future: {
              one: '{0} sekunda maŋŋilit',
              two: '{0} sekundda maŋŋilit',
              other: '{0} sekundda maŋŋilit',
            },
            past: {
              one: '{0} sekunda árat',
              two: '{0} sekundda árat',
              other: '{0} sekundda árat',
            },
          },
        },
      },
    },
    {locale: 'se-SE', parentLocale: 'se'},
    {
      locale: 'seh',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Chaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwezi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ntsiku',
          relative: {0: 'Lero', 1: 'Manguana', '-1': 'Zuro'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Hora',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Minuto',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Segundo',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ses',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Jiiri',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Handu',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Zaari',
          relative: {0: 'Hõo', 1: 'Suba', '-1': 'Bi'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Guuru',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Miniti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Miti',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
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
    {
      locale: 'sh',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-1),
          l = r.slice(-2),
          u = i.slice(-1),
          s = i.slice(-2);
        return t
          ? 'other'
          : (o && 1 == n && 11 != l) || (1 == u && 11 != s)
          ? 'one'
          : (o && n >= 2 && n <= 4 && (l < 12 || l > 14)) ||
            (u >= 2 && u <= 4 && (s < 12 || s > 14))
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
    {
      locale: 'shi',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e;
        return t
          ? 'other'
          : e >= 0 && e <= 1
          ? 'one'
          : r && e >= 2 && e <= 10
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'ⴰⵙⴳⴳⵯⴰⵙ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ⴰⵢⵢⵓⵔ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ⴰⵙⵙ',
          relative: {0: 'ⴰⵙⵙⴰ', 1: 'ⴰⵙⴽⴽⴰ', '-1': 'ⵉⴹⵍⵍⵉ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ⵜⴰⵙⵔⴰⴳⵜ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ⵜⵓⵙⴷⵉⴷⵜ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ⵜⴰⵙⵉⵏⵜ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'shi-Latn',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'asggʷas',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ayyur',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ass',
          relative: {0: 'assa', 1: 'askka', '-1': 'iḍlli'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'tasragt',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'tusdidt',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'tasint',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'shi-Tfng', parentLocale: 'shi'},
    {
      locale: 'si',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '';
        return t
          ? 'other'
          : 0 == e || 1 == e || (0 == r && 1 == i)
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'වර්ෂය',
          relative: {0: 'මෙම වසර', 1: 'ඊළඟ වසර', '-1': 'පසුගිය වසර'},
          relativeTime: {
            future: {one: 'වසර {0}කින්', other: 'වසර {0}කින්'},
            past: {one: 'වසර {0}කට පෙර', other: 'වසර {0}කට පෙර'},
          },
        },
        month: {
          displayName: 'මාසය',
          relative: {0: 'මෙම මාසය', 1: 'ඊළඟ මාසය', '-1': 'පසුගිය මාසය'},
          relativeTime: {
            future: {one: 'මාස {0}කින්', other: 'මාස {0}කින්'},
            past: {one: 'මාස {0}කට පෙර', other: 'මාස {0}කට පෙර'},
          },
        },
        day: {
          displayName: 'දිනය',
          relative: {
            0: 'අද',
            1: 'හෙට',
            2: 'අනිද්දා',
            '-2': 'පෙරේදා',
            '-1': 'ඊයේ',
          },
          relativeTime: {
            future: {one: 'දින {0}න්', other: 'දින {0}න්'},
            past: {one: 'දින {0}කට පෙර', other: 'දින {0}කට පෙර'},
          },
        },
        hour: {
          displayName: 'පැය',
          relative: {0: 'මෙම පැය'},
          relativeTime: {
            future: {one: 'පැය {0}කින්', other: 'පැය {0}කින්'},
            past: {one: 'පැය {0}කට පෙර', other: 'පැය {0}කට පෙර'},
          },
        },
        minute: {
          displayName: 'මිනිත්තුව',
          relative: {0: 'මෙම මිනිත්තුව'},
          relativeTime: {
            future: {one: 'මිනිත්තු {0}කින්', other: 'මිනිත්තු {0}කින්'},
            past: {one: 'මිනිත්තු {0}කට පෙර', other: 'මිනිත්තු {0}කට පෙර'},
          },
        },
        second: {
          displayName: 'තත්පරය',
          relative: {0: 'දැන්'},
          relativeTime: {
            future: {one: 'තත්පර {0}කින්', other: 'තත්පර {0}කින්'},
            past: {one: 'තත්පර {0}කට පෙර', other: 'තත්පර {0}කට පෙර'},
          },
        },
      },
    },
    {
      locale: 'sk',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1];
        return t
          ? 'other'
          : 1 == e && i
          ? 'one'
          : r >= 2 && r <= 4 && i
          ? 'few'
          : i
          ? 'other'
          : 'many';
      },
      fields: {
        year: {
          displayName: 'rok',
          relative: {0: 'tento rok', 1: 'budúci rok', '-1': 'minulý rok'},
          relativeTime: {
            future: {
              one: 'o {0} rok',
              few: 'o {0} roky',
              many: 'o {0} roka',
              other: 'o {0} rokov',
            },
            past: {
              one: 'pred {0} rokom',
              few: 'pred {0} rokmi',
              many: 'pred {0} roka',
              other: 'pred {0} rokmi',
            },
          },
        },
        month: {
          displayName: 'mesiac',
          relative: {
            0: 'tento mesiac',
            1: 'budúci mesiac',
            '-1': 'minulý mesiac',
          },
          relativeTime: {
            future: {
              one: 'o {0} mesiac',
              few: 'o {0} mesiace',
              many: 'o {0} mesiaca',
              other: 'o {0} mesiacov',
            },
            past: {
              one: 'pred {0} mesiacom',
              few: 'pred {0} mesiacmi',
              many: 'pred {0} mesiaca',
              other: 'pred {0} mesiacmi',
            },
          },
        },
        day: {
          displayName: 'deň',
          relative: {
            0: 'dnes',
            1: 'zajtra',
            2: 'pozajtra',
            '-2': 'predvčerom',
            '-1': 'včera',
          },
          relativeTime: {
            future: {
              one: 'o {0} deň',
              few: 'o {0} dni',
              many: 'o {0} dňa',
              other: 'o {0} dní',
            },
            past: {
              one: 'pred {0} dňom',
              few: 'pred {0} dňami',
              many: 'pred {0} dňa',
              other: 'pred {0} dňami',
            },
          },
        },
        hour: {
          displayName: 'hodina',
          relative: {0: 'v tejto hodine'},
          relativeTime: {
            future: {
              one: 'o {0} hodinu',
              few: 'o {0} hodiny',
              many: 'o {0} hodiny',
              other: 'o {0} hodín',
            },
            past: {
              one: 'pred {0} hodinou',
              few: 'pred {0} hodinami',
              many: 'pred {0} hodinou',
              other: 'pred {0} hodinami',
            },
          },
        },
        minute: {
          displayName: 'minúta',
          relative: {0: 'v tejto minúte'},
          relativeTime: {
            future: {
              one: 'o {0} minútu',
              few: 'o {0} minúty',
              many: 'o {0} minúty',
              other: 'o {0} minút',
            },
            past: {
              one: 'pred {0} minútou',
              few: 'pred {0} minútami',
              many: 'pred {0} minúty',
              other: 'pred {0} minútami',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'teraz'},
          relativeTime: {
            future: {
              one: 'o {0} sekundu',
              few: 'o {0} sekundy',
              many: 'o {0} sekundy',
              other: 'o {0} sekúnd',
            },
            past: {
              one: 'pred {0} sekundou',
              few: 'pred {0} sekundami',
              many: 'pred {0} sekundy',
              other: 'pred {0} sekundami',
            },
          },
        },
      },
    },
    {
      locale: 'sl',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1],
          o = r.slice(-2);
        return t
          ? 'other'
          : i && 1 == o
          ? 'one'
          : i && 2 == o
          ? 'two'
          : (i && (3 == o || 4 == o)) || !i
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'leto',
          relative: {0: 'letos', 1: 'naslednje leto', '-1': 'lani'},
          relativeTime: {
            future: {
              one: 'čez {0} leto',
              two: 'čez {0} leti',
              few: 'čez {0} leta',
              other: 'čez {0} let',
            },
            past: {
              one: 'pred {0} letom',
              two: 'pred {0} letoma',
              few: 'pred {0} leti',
              other: 'pred {0} leti',
            },
          },
        },
        month: {
          displayName: 'mesec',
          relative: {
            0: 'ta mesec',
            1: 'naslednji mesec',
            '-1': 'prejšnji mesec',
          },
          relativeTime: {
            future: {
              one: 'čez {0} mesec',
              two: 'čez {0} meseca',
              few: 'čez {0} mesece',
              other: 'čez {0} mesecev',
            },
            past: {
              one: 'pred {0} mesecem',
              two: 'pred {0} mesecema',
              few: 'pred {0} meseci',
              other: 'pred {0} meseci',
            },
          },
        },
        day: {
          displayName: 'dan',
          relative: {
            0: 'danes',
            1: 'jutri',
            2: 'pojutrišnjem',
            '-2': 'predvčerajšnjim',
            '-1': 'včeraj',
          },
          relativeTime: {
            future: {
              one: 'čez {0} dan',
              two: 'čez {0} dneva',
              few: 'čez {0} dni',
              other: 'čez {0} dni',
            },
            past: {
              one: 'pred {0} dnevom',
              two: 'pred {0} dnevoma',
              few: 'pred {0} dnevi',
              other: 'pred {0} dnevi',
            },
          },
        },
        hour: {
          displayName: 'ura',
          relative: {0: 'v tej uri'},
          relativeTime: {
            future: {
              one: 'čez {0} uro',
              two: 'čez {0} uri',
              few: 'čez {0} ure',
              other: 'čez {0} ur',
            },
            past: {
              one: 'pred {0} uro',
              two: 'pred {0} urama',
              few: 'pred {0} urami',
              other: 'pred {0} urami',
            },
          },
        },
        minute: {
          displayName: 'minuta',
          relative: {0: 'to minuto'},
          relativeTime: {
            future: {
              one: 'čez {0} minuto',
              two: 'čez {0} minuti',
              few: 'čez {0} minute',
              other: 'čez {0} minut',
            },
            past: {
              one: 'pred {0} minuto',
              two: 'pred {0} minutama',
              few: 'pred {0} minutami',
              other: 'pred {0} minutami',
            },
          },
        },
        second: {
          displayName: 'sekunda',
          relative: {0: 'zdaj'},
          relativeTime: {
            future: {
              one: 'čez {0} sekundo',
              two: 'čez {0} sekundi',
              few: 'čez {0} sekunde',
              other: 'čez {0} sekund',
            },
            past: {
              one: 'pred {0} sekundo',
              two: 'pred {0} sekundama',
              few: 'pred {0} sekundami',
              other: 'pred {0} sekundami',
            },
          },
        },
      },
    },
    {
      locale: 'sma',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
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
    {
      locale: 'smi',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
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
    {
      locale: 'smj',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
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
    {
      locale: 'smn',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
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
    {
      locale: 'sms',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 2 == e ? 'two' : 'other';
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
    {
      locale: 'sn',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Gore',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mwedzi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Zuva',
          relative: {0: 'Nhasi', 1: 'Mangwana', '-1': 'Nezuro'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Awa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Mineti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekondi',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'so',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Year',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {one: '+{0} y', other: '+{0} y'},
            past: {one: '-{0} y', other: '-{0} y'},
          },
        },
        month: {
          displayName: 'Month',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: '+{0} m', other: '+{0} m'},
            past: {one: '-{0} m', other: '-{0} m'},
          },
        },
        day: {
          displayName: 'Day',
          relative: {0: 'Maanta', 1: 'Berri', '-1': 'Shalay'},
          relativeTime: {
            future: {one: '+{0} d', other: '+{0} d'},
            past: {one: '-{0} d', other: '-{0} d'},
          },
        },
        hour: {
          displayName: 'Hour',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: '+{0} h', other: '+{0} h'},
            past: {one: '-{0} h', other: '-{0} h'},
          },
        },
        minute: {
          displayName: 'Minute',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: '+{0} min', other: '+{0} min'},
            past: {one: '-{0} min', other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Second',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: '+{0} s', other: '+{0} s'},
            past: {one: '-{0} s', other: '-{0} s'},
          },
        },
      },
    },
    {locale: 'so-DJ', parentLocale: 'so'},
    {locale: 'so-ET', parentLocale: 'so'},
    {locale: 'so-KE', parentLocale: 'so'},
    {
      locale: 'sq',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e,
          i = r && a[0].slice(-1),
          o = r && a[0].slice(-2);
        return t
          ? 1 == e
            ? 'one'
            : 4 == i && 14 != o
            ? 'many'
            : 'other'
          : 1 == e
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'vit',
          relative: {
            0: 'këtë vit',
            1: 'vitin e ardhshëm',
            '-1': 'vitin e kaluar',
          },
          relativeTime: {
            future: {one: 'pas {0} viti', other: 'pas {0} vjetësh'},
            past: {one: '{0} vit më parë', other: '{0} vjet më parë'},
          },
        },
        month: {
          displayName: 'muaj',
          relative: {
            0: 'këtë muaj',
            1: 'muajin e ardhshëm',
            '-1': 'muajin e kaluar',
          },
          relativeTime: {
            future: {one: 'pas {0} muaji', other: 'pas {0} muajsh'},
            past: {one: '{0} muaj më parë', other: '{0} muaj më parë'},
          },
        },
        day: {
          displayName: 'ditë',
          relative: {0: 'sot', 1: 'nesër', '-1': 'dje'},
          relativeTime: {
            future: {one: 'pas {0} dite', other: 'pas {0} ditësh'},
            past: {one: '{0} ditë më parë', other: '{0} ditë më parë'},
          },
        },
        hour: {
          displayName: 'orë',
          relative: {0: 'këtë orë'},
          relativeTime: {
            future: {one: 'pas {0} ore', other: 'pas {0} orësh'},
            past: {one: '{0} orë më parë', other: '{0} orë më parë'},
          },
        },
        minute: {
          displayName: 'minutë',
          relative: {0: 'këtë minutë'},
          relativeTime: {
            future: {one: 'pas {0} minute', other: 'pas {0} minutash'},
            past: {one: '{0} minutë më parë', other: '{0} minuta më parë'},
          },
        },
        second: {
          displayName: 'sekondë',
          relative: {0: 'tani'},
          relativeTime: {
            future: {one: 'pas {0} sekonde', other: 'pas {0} sekondash'},
            past: {one: '{0} sekondë më parë', other: '{0} sekonda më parë'},
          },
        },
      },
    },
    {locale: 'sq-MK', parentLocale: 'sq'},
    {locale: 'sq-XK', parentLocale: 'sq'},
    {
      locale: 'sr',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-1),
          l = r.slice(-2),
          u = i.slice(-1),
          s = i.slice(-2);
        return t
          ? 'other'
          : (o && 1 == n && 11 != l) || (1 == u && 11 != s)
          ? 'one'
          : (o && n >= 2 && n <= 4 && (l < 12 || l > 14)) ||
            (u >= 2 && u <= 4 && (s < 12 || s > 14))
          ? 'few'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'година',
          relative: {
            0: 'ове године',
            1: 'следеће године',
            '-1': 'прошле године',
          },
          relativeTime: {
            future: {
              one: 'за {0} годину',
              few: 'за {0} године',
              other: 'за {0} година',
            },
            past: {
              one: 'пре {0} године',
              few: 'пре {0} године',
              other: 'пре {0} година',
            },
          },
        },
        month: {
          displayName: 'месец',
          relative: {
            0: 'овог месеца',
            1: 'следећег месеца',
            '-1': 'прошлог месеца',
          },
          relativeTime: {
            future: {
              one: 'за {0} месец',
              few: 'за {0} месеца',
              other: 'за {0} месеци',
            },
            past: {
              one: 'пре {0} месеца',
              few: 'пре {0} месеца',
              other: 'пре {0} месеци',
            },
          },
        },
        day: {
          displayName: 'дан',
          relative: {
            0: 'данас',
            1: 'сутра',
            2: 'прекосутра',
            '-2': 'прекјуче',
            '-1': 'јуче',
          },
          relativeTime: {
            future: {
              one: 'за {0} дан',
              few: 'за {0} дана',
              other: 'за {0} дана',
            },
            past: {
              one: 'пре {0} дана',
              few: 'пре {0} дана',
              other: 'пре {0} дана',
            },
          },
        },
        hour: {
          displayName: 'сат',
          relative: {0: 'овог сата'},
          relativeTime: {
            future: {
              one: 'за {0} сат',
              few: 'за {0} сата',
              other: 'за {0} сати',
            },
            past: {
              one: 'пре {0} сата',
              few: 'пре {0} сата',
              other: 'пре {0} сати',
            },
          },
        },
        minute: {
          displayName: 'минут',
          relative: {0: 'овог минута'},
          relativeTime: {
            future: {
              one: 'за {0} минут',
              few: 'за {0} минута',
              other: 'за {0} минута',
            },
            past: {
              one: 'пре {0} минута',
              few: 'пре {0} минута',
              other: 'пре {0} минута',
            },
          },
        },
        second: {
          displayName: 'секунд',
          relative: {0: 'сада'},
          relativeTime: {
            future: {
              one: 'за {0} секунду',
              few: 'за {0} секунде',
              other: 'за {0} секунди',
            },
            past: {
              one: 'пре {0} секунде',
              few: 'пре {0} секунде',
              other: 'пре {0} секунди',
            },
          },
        },
      },
    },
    {locale: 'sr-Cyrl', parentLocale: 'sr'},
    {locale: 'sr-Cyrl-BA', parentLocale: 'sr-Cyrl'},
    {locale: 'sr-Cyrl-ME', parentLocale: 'sr-Cyrl'},
    {locale: 'sr-Cyrl-XK', parentLocale: 'sr-Cyrl'},
    {
      locale: 'sr-Latn',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'godina',
          relative: {
            0: 'ove godine',
            1: 'sledeće godine',
            '-1': 'prošle godine',
          },
          relativeTime: {
            future: {
              one: 'za {0} godinu',
              few: 'za {0} godine',
              other: 'za {0} godina',
            },
            past: {
              one: 'pre {0} godine',
              few: 'pre {0} godine',
              other: 'pre {0} godina',
            },
          },
        },
        month: {
          displayName: 'mesec',
          relative: {
            0: 'ovog meseca',
            1: 'sledećeg meseca',
            '-1': 'prošlog meseca',
          },
          relativeTime: {
            future: {
              one: 'za {0} mesec',
              few: 'za {0} meseca',
              other: 'za {0} meseci',
            },
            past: {
              one: 'pre {0} meseca',
              few: 'pre {0} meseca',
              other: 'pre {0} meseci',
            },
          },
        },
        day: {
          displayName: 'dan',
          relative: {
            0: 'danas',
            1: 'sutra',
            2: 'prekosutra',
            '-2': 'prekjuče',
            '-1': 'juče',
          },
          relativeTime: {
            future: {
              one: 'za {0} dan',
              few: 'za {0} dana',
              other: 'za {0} dana',
            },
            past: {
              one: 'pre {0} dana',
              few: 'pre {0} dana',
              other: 'pre {0} dana',
            },
          },
        },
        hour: {
          displayName: 'sat',
          relative: {0: 'ovog sata'},
          relativeTime: {
            future: {
              one: 'za {0} sat',
              few: 'za {0} sata',
              other: 'za {0} sati',
            },
            past: {
              one: 'pre {0} sata',
              few: 'pre {0} sata',
              other: 'pre {0} sati',
            },
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'ovog minuta'},
          relativeTime: {
            future: {
              one: 'za {0} minut',
              few: 'za {0} minuta',
              other: 'za {0} minuta',
            },
            past: {
              one: 'pre {0} minuta',
              few: 'pre {0} minuta',
              other: 'pre {0} minuta',
            },
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'sada'},
          relativeTime: {
            future: {
              one: 'za {0} sekundu',
              few: 'za {0} sekunde',
              other: 'za {0} sekundi',
            },
            past: {
              one: 'pre {0} sekunde',
              few: 'pre {0} sekunde',
              other: 'pre {0} sekundi',
            },
          },
        },
      },
    },
    {locale: 'sr-Latn-BA', parentLocale: 'sr-Latn'},
    {locale: 'sr-Latn-ME', parentLocale: 'sr-Latn'},
    {locale: 'sr-Latn-XK', parentLocale: 'sr-Latn'},
    {
      locale: 'ss',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'ssy',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'st',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'sv',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = !a[1],
          i = Number(a[0]) == e,
          o = i && a[0].slice(-1),
          n = i && a[0].slice(-2);
        return t
          ? (1 != o && 2 != o) || 11 == n || 12 == n
            ? 'other'
            : 'one'
          : 1 == e && r
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'år',
          relative: {0: 'i år', 1: 'nästa år', '-1': 'i fjol'},
          relativeTime: {
            future: {one: 'om {0} år', other: 'om {0} år'},
            past: {one: 'för {0} år sedan', other: 'för {0} år sedan'},
          },
        },
        month: {
          displayName: 'månad',
          relative: {0: 'denna månad', 1: 'nästa månad', '-1': 'förra månaden'},
          relativeTime: {
            future: {one: 'om {0} månad', other: 'om {0} månader'},
            past: {one: 'för {0} månad sedan', other: 'för {0} månader sedan'},
          },
        },
        day: {
          displayName: 'dag',
          relative: {
            0: 'i dag',
            1: 'i morgon',
            2: 'i övermorgon',
            '-2': 'i förrgår',
            '-1': 'i går',
          },
          relativeTime: {
            future: {one: 'om {0} dag', other: 'om {0} dagar'},
            past: {one: 'för {0} dag sedan', other: 'för {0} dagar sedan'},
          },
        },
        hour: {
          displayName: 'timme',
          relative: {0: 'denna timme'},
          relativeTime: {
            future: {one: 'om {0} timme', other: 'om {0} timmar'},
            past: {one: 'för {0} timme sedan', other: 'för {0} timmar sedan'},
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'denna minut'},
          relativeTime: {
            future: {one: 'om {0} minut', other: 'om {0} minuter'},
            past: {one: 'för {0} minut sedan', other: 'för {0} minuter sedan'},
          },
        },
        second: {
          displayName: 'sekund',
          relative: {0: 'nu'},
          relativeTime: {
            future: {one: 'om {0} sekund', other: 'om {0} sekunder'},
            past: {
              one: 'för {0} sekund sedan',
              other: 'för {0} sekunder sedan',
            },
          },
        },
      },
    },
    {locale: 'sv-AX', parentLocale: 'sv'},
    {locale: 'sv-FI', parentLocale: 'sv'},
    {
      locale: 'sw',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'mwaka',
          relative: {0: 'mwaka huu', 1: 'mwaka ujao', '-1': 'mwaka uliopita'},
          relativeTime: {
            future: {one: 'baada ya mwaka {0}', other: 'baada ya miaka {0}'},
            past: {one: 'mwaka {0} uliopita', other: 'miaka {0} iliyopita'},
          },
        },
        month: {
          displayName: 'mwezi',
          relative: {0: 'mwezi huu', 1: 'mwezi ujao', '-1': 'mwezi uliopita'},
          relativeTime: {
            future: {one: 'baada ya mwezi {0}', other: 'baada ya miezi {0}'},
            past: {one: 'mwezi {0} uliopita', other: 'miezi {0} iliyopita'},
          },
        },
        day: {
          displayName: 'siku',
          relative: {
            0: 'leo',
            1: 'kesho',
            2: 'kesho kutwa',
            '-2': 'juzi',
            '-1': 'jana',
          },
          relativeTime: {
            future: {one: 'baada ya siku {0}', other: 'baada ya siku {0}'},
            past: {one: 'siku {0} iliyopita', other: 'siku {0} zilizopita'},
          },
        },
        hour: {
          displayName: 'saa',
          relative: {0: 'saa hii'},
          relativeTime: {
            future: {one: 'baada ya saa {0}', other: 'baada ya saa {0}'},
            past: {one: 'saa {0} iliyopita', other: 'saa {0} zilizopita'},
          },
        },
        minute: {
          displayName: 'dakika',
          relative: {0: 'dakika hii'},
          relativeTime: {
            future: {one: 'baada ya dakika {0}', other: 'baada ya dakika {0}'},
            past: {one: 'dakika {0} iliyopita', other: 'dakika {0} zilizopita'},
          },
        },
        second: {
          displayName: 'sekunde',
          relative: {0: 'sasa hivi'},
          relativeTime: {
            future: {
              one: 'baada ya sekunde {0}',
              other: 'baada ya sekunde {0}',
            },
            past: {
              one: 'Sekunde {0} iliyopita',
              other: 'Sekunde {0} zilizopita',
            },
          },
        },
      },
    },
    {locale: 'sw-CD', parentLocale: 'sw'},
    {locale: 'sw-KE', parentLocale: 'sw'},
    {locale: 'sw-UG', parentLocale: 'sw'},
    {
      locale: 'syr',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'ta',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ஆண்டு',
          relative: {0: 'இந்த ஆண்டு', 1: 'அடுத்த ஆண்டு', '-1': 'கடந்த ஆண்டு'},
          relativeTime: {
            future: {one: '{0} ஆண்டில்', other: '{0} ஆண்டுகளில்'},
            past: {one: '{0} ஆண்டிற்கு முன்', other: '{0} ஆண்டுகளுக்கு முன்'},
          },
        },
        month: {
          displayName: 'மாதம்',
          relative: {0: 'இந்த மாதம்', 1: 'அடுத்த மாதம்', '-1': 'கடந்த மாதம்'},
          relativeTime: {
            future: {one: '{0} மாதத்தில்', other: '{0} மாதங்களில்'},
            past: {one: '{0} மாதத்துக்கு முன்', other: '{0} மாதங்களுக்கு முன்'},
          },
        },
        day: {
          displayName: 'நாள்',
          relative: {
            0: 'இன்று',
            1: 'நாளை',
            2: 'நாளை மறுநாள்',
            '-2': 'நேற்று முன் தினம்',
            '-1': 'நேற்று',
          },
          relativeTime: {
            future: {one: '{0} நாளில்', other: '{0} நாட்களில்'},
            past: {one: '{0} நாளுக்கு முன்', other: '{0} நாட்களுக்கு முன்'},
          },
        },
        hour: {
          displayName: 'மணி',
          relative: {0: 'இந்த ஒரு மணிநேரத்தில்'},
          relativeTime: {
            future: {one: '{0} மணிநேரத்தில்', other: '{0} மணிநேரத்தில்'},
            past: {one: '{0} மணிநேரம் முன்', other: '{0} மணிநேரம் முன்'},
          },
        },
        minute: {
          displayName: 'நிமிடம்',
          relative: {0: 'இந்த ஒரு நிமிடத்தில்'},
          relativeTime: {
            future: {one: '{0} நிமிடத்தில்', other: '{0} நிமிடங்களில்'},
            past: {
              one: '{0} நிமிடத்திற்கு முன்',
              other: '{0} நிமிடங்களுக்கு முன்',
            },
          },
        },
        second: {
          displayName: 'விநாடி',
          relative: {0: 'இப்போது'},
          relativeTime: {
            future: {one: '{0} விநாடியில்', other: '{0} விநாடிகளில்'},
            past: {one: '{0} விநாடிக்கு முன்', other: '{0} விநாடிகளுக்கு முன்'},
          },
        },
      },
    },
    {locale: 'ta-LK', parentLocale: 'ta'},
    {locale: 'ta-MY', parentLocale: 'ta'},
    {locale: 'ta-SG', parentLocale: 'ta'},
    {
      locale: 'te',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'సంవత్సరం',
          relative: {
            0: 'ఈ సంవత్సరం',
            1: 'తదుపరి సంవత్సరం',
            '-1': 'గత సంవత్సరం',
          },
          relativeTime: {
            future: {one: '{0} సంవత్సరంలో', other: '{0} సంవత్సరాల్లో'},
            past: {one: '{0} సంవత్సరం క్రితం', other: '{0} సంవత్సరాల క్రితం'},
          },
        },
        month: {
          displayName: 'నెల',
          relative: {0: 'ఈ నెల', 1: 'తదుపరి నెల', '-1': 'గత నెల'},
          relativeTime: {
            future: {one: '{0} నెలలో', other: '{0} నెలల్లో'},
            past: {one: '{0} నెల క్రితం', other: '{0} నెలల క్రితం'},
          },
        },
        day: {
          displayName: 'దినం',
          relative: {
            0: 'ఈ రోజు',
            1: 'రేపు',
            2: 'ఎల్లుండి',
            '-2': 'మొన్న',
            '-1': 'నిన్న',
          },
          relativeTime: {
            future: {one: '{0} రోజులో', other: '{0} రోజుల్లో'},
            past: {one: '{0} రోజు క్రితం', other: '{0} రోజుల క్రితం'},
          },
        },
        hour: {
          displayName: 'గంట',
          relative: {0: 'ఈ గంట'},
          relativeTime: {
            future: {one: '{0} గంటలో', other: '{0} గంటల్లో'},
            past: {one: '{0} గంట క్రితం', other: '{0} గంటల క్రితం'},
          },
        },
        minute: {
          displayName: 'నిమిషము',
          relative: {0: 'ఈ నిమిషం'},
          relativeTime: {
            future: {one: '{0} నిమిషంలో', other: '{0} నిమిషాల్లో'},
            past: {one: '{0} నిమిషం క్రితం', other: '{0} నిమిషాల క్రితం'},
          },
        },
        second: {
          displayName: 'సెకను',
          relative: {0: 'ప్రస్తుతం'},
          relativeTime: {
            future: {one: '{0} సెకనులో', other: '{0} సెకన్లలో'},
            past: {one: '{0} సెకను క్రితం', other: '{0} సెకన్ల క్రితం'},
          },
        },
      },
    },
    {
      locale: 'teo',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Ekan',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Elap',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Aparan',
          relative: {0: 'Lolo', 1: 'Moi', '-1': 'Jaan'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Esaa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Idakika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Isekonde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'teo-KE', parentLocale: 'teo'},
    {
      locale: 'th',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ปี',
          relative: {0: 'ปีนี้', 1: 'ปีหน้า', '-1': 'ปีที่แล้ว'},
          relativeTime: {
            future: {other: 'ในอีก {0} ปี'},
            past: {other: '{0} ปีที่แล้ว'},
          },
        },
        month: {
          displayName: 'เดือน',
          relative: {0: 'เดือนนี้', 1: 'เดือนหน้า', '-1': 'เดือนที่แล้ว'},
          relativeTime: {
            future: {other: 'ในอีก {0} เดือน'},
            past: {other: '{0} เดือนที่ผ่านมา'},
          },
        },
        day: {
          displayName: 'วัน',
          relative: {
            0: 'วันนี้',
            1: 'พรุ่งนี้',
            2: 'มะรืนนี้',
            '-2': 'เมื่อวานซืน',
            '-1': 'เมื่อวาน',
          },
          relativeTime: {
            future: {other: 'ในอีก {0} วัน'},
            past: {other: '{0} วันที่ผ่านมา'},
          },
        },
        hour: {
          displayName: 'ชั่วโมง',
          relative: {0: 'ชั่วโมงนี้'},
          relativeTime: {
            future: {other: 'ในอีก {0} ชั่วโมง'},
            past: {other: '{0} ชั่วโมงที่ผ่านมา'},
          },
        },
        minute: {
          displayName: 'นาที',
          relative: {0: 'นาทีนี้'},
          relativeTime: {
            future: {other: 'ในอีก {0} นาที'},
            past: {other: '{0} นาทีที่ผ่านมา'},
          },
        },
        second: {
          displayName: 'วินาที',
          relative: {0: 'ขณะนี้'},
          relativeTime: {
            future: {other: 'ในอีก {0} วินาที'},
            past: {other: '{0} วินาทีที่ผ่านมา'},
          },
        },
      },
    },
    {
      locale: 'ti',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
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
    {locale: 'ti-ER', parentLocale: 'ti'},
    {
      locale: 'tig',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'tk',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'ýyl',
          relative: {0: 'şu ýyl', 1: 'indiki ýyl', '-1': 'geçen ýyl'},
          relativeTime: {
            future: {one: '{0} ýyldan', other: '{0} ýyldan'},
            past: {one: '{0} ýyl öň', other: '{0} ýyl öň'},
          },
        },
        month: {
          displayName: 'aý',
          relative: {0: 'şu aý', 1: 'indiki aý', '-1': 'geçen aý'},
          relativeTime: {
            future: {one: '{0} aýdan', other: '{0} aýdan'},
            past: {one: '{0} aý öň', other: '{0} aý öň'},
          },
        },
        day: {
          displayName: 'gün',
          relative: {0: 'şu gün', 1: 'ertir', '-1': 'düýn'},
          relativeTime: {
            future: {one: '{0} günden', other: '{0} günden'},
            past: {one: '{0} gün öň', other: '{0} gün öň'},
          },
        },
        hour: {
          displayName: 'sagat',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: '{0} sagatdan', other: '{0} sagatdan'},
            past: {one: '{0} sagat öň', other: '{0} sagat öň'},
          },
        },
        minute: {
          displayName: 'minut',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: '{0} minutdan', other: '{0} minutdan'},
            past: {one: '{0} minut öň', other: '{0} minut öň'},
          },
        },
        second: {
          displayName: 'sekunt',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: '{0} sekuntdan', other: '{0} sekuntdan'},
            past: {one: '{0} sekunt öň', other: '{0} sekunt öň'},
          },
        },
      },
    },
    {
      locale: 'tl',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = a[1] || '',
          o = !a[1],
          n = r.slice(-1),
          l = i.slice(-1);
        return t
          ? 1 == e
            ? 'one'
            : 'other'
          : (o && (1 == r || 2 == r || 3 == r)) ||
            (o && 4 != n && 6 != n && 9 != n) ||
            (!o && 4 != l && 6 != l && 9 != l)
          ? 'one'
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
    {
      locale: 'tn',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'to',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'taʻu',
          relative: {0: 'taʻú ni', 1: 'taʻu kahaʻu', '-1': 'taʻu kuoʻosi'},
          relativeTime: {
            future: {other: 'ʻi he taʻu ʻe {0}'},
            past: {other: 'taʻu ʻe {0} kuoʻosi'},
          },
        },
        month: {
          displayName: 'māhina',
          relative: {
            0: 'māhiná ni',
            1: 'māhina kahaʻu',
            '-1': 'māhina kuoʻosi',
          },
          relativeTime: {
            future: {other: 'ʻi he māhina ʻe {0}'},
            past: {other: 'māhina ʻe {0} kuoʻosi'},
          },
        },
        day: {
          displayName: 'ʻaho',
          relative: {
            0: 'ʻahó ni',
            1: 'ʻapongipongi',
            2: 'ʻahepongipongi',
            '-2': 'ʻaneheafi',
            '-1': 'ʻaneafi',
          },
          relativeTime: {
            future: {other: 'ʻi he ʻaho ʻe {0}'},
            past: {other: 'ʻaho ʻe {0} kuoʻosi'},
          },
        },
        hour: {
          displayName: 'houa',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {other: 'ʻi he houa ʻe {0}'},
            past: {other: 'houa ʻe {0} kuoʻosi'},
          },
        },
        minute: {
          displayName: 'miniti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: 'ʻi he miniti ʻe {0}'},
            past: {other: 'miniti ʻe {0} kuoʻosi'},
          },
        },
        second: {
          displayName: 'sekoni',
          relative: {0: 'taimí ni'},
          relativeTime: {
            future: {other: 'ʻi he sekoni ʻe {0}'},
            past: {other: 'sekoni ʻe {0} kuoʻosi'},
          },
        },
      },
    },
    {
      locale: 'tr',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'yıl',
          relative: {0: 'bu yıl', 1: 'gelecek yıl', '-1': 'geçen yıl'},
          relativeTime: {
            future: {one: '{0} yıl sonra', other: '{0} yıl sonra'},
            past: {one: '{0} yıl önce', other: '{0} yıl önce'},
          },
        },
        month: {
          displayName: 'ay',
          relative: {0: 'bu ay', 1: 'gelecek ay', '-1': 'geçen ay'},
          relativeTime: {
            future: {one: '{0} ay sonra', other: '{0} ay sonra'},
            past: {one: '{0} ay önce', other: '{0} ay önce'},
          },
        },
        day: {
          displayName: 'gün',
          relative: {
            0: 'bugün',
            1: 'yarın',
            2: 'öbür gün',
            '-2': 'evvelsi gün',
            '-1': 'dün',
          },
          relativeTime: {
            future: {one: '{0} gün sonra', other: '{0} gün sonra'},
            past: {one: '{0} gün önce', other: '{0} gün önce'},
          },
        },
        hour: {
          displayName: 'saat',
          relative: {0: 'bu saat'},
          relativeTime: {
            future: {one: '{0} saat sonra', other: '{0} saat sonra'},
            past: {one: '{0} saat önce', other: '{0} saat önce'},
          },
        },
        minute: {
          displayName: 'dakika',
          relative: {0: 'bu dakika'},
          relativeTime: {
            future: {one: '{0} dakika sonra', other: '{0} dakika sonra'},
            past: {one: '{0} dakika önce', other: '{0} dakika önce'},
          },
        },
        second: {
          displayName: 'saniye',
          relative: {0: 'şimdi'},
          relativeTime: {
            future: {one: '{0} saniye sonra', other: '{0} saniye sonra'},
            past: {one: '{0} saniye önce', other: '{0} saniye önce'},
          },
        },
      },
    },
    {locale: 'tr-CY', parentLocale: 'tr'},
    {
      locale: 'ts',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'twq',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Jiiri',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Handu',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Zaari',
          relative: {0: 'Hõo', 1: 'Suba', '-1': 'Bi'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Guuru',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Miniti',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Miti',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'tzm',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = Number(a[0]) == e;
        return t
          ? 'other'
          : 0 == e || 1 == e || (r && e >= 11 && e <= 99)
          ? 'one'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'Asseggas',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Ayur',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ass',
          relative: {0: 'Assa', 1: 'Asekka', '-1': 'Assenaṭ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Tasragt',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Tusdat',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Tusnat',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'ug',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'يىل',
          relative: {0: 'بۇ يىل', 1: 'كېلەر يىل', '-1': 'ئۆتكەن يىل'},
          relativeTime: {
            future: {one: '{0} يىلدىن كېيىن', other: '{0} يىلدىن كېيىن'},
            past: {one: '{0} يىل ئىلگىرى', other: '{0} يىل ئىلگىرى'},
          },
        },
        month: {
          displayName: 'ئاي',
          relative: {0: 'بۇ ئاي', 1: 'كېلەر ئاي', '-1': 'ئۆتكەن ئاي'},
          relativeTime: {
            future: {one: '{0} ئايدىن كېيىن', other: '{0} ئايدىن كېيىن'},
            past: {one: '{0} ئاي ئىلگىرى', other: '{0} ئاي ئىلگىرى'},
          },
        },
        day: {
          displayName: 'كۈن',
          relative: {0: 'بۈگۈن', 1: 'ئەتە', '-1': 'تۈنۈگۈن'},
          relativeTime: {
            future: {one: '{0} كۈندىن كېيىن', other: '{0} كۈندىن كېيىن'},
            past: {one: '{0} كۈن ئىلگىرى', other: '{0} كۈن ئىلگىرى'},
          },
        },
        hour: {
          displayName: 'سائەت',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: '{0} سائەتتىن كېيىن', other: '{0} سائەتتىن كېيىن'},
            past: {one: '{0} سائەت ئىلگىرى', other: '{0} سائەت ئىلگىرى'},
          },
        },
        minute: {
          displayName: 'مىنۇت',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: '{0} مىنۇتتىن كېيىن', other: '{0} مىنۇتتىن كېيىن'},
            past: {one: '{0} مىنۇت ئىلگىرى', other: '{0} مىنۇت ئىلگىرى'},
          },
        },
        second: {
          displayName: 'سېكۇنت',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: '{0} سېكۇنتتىن كېيىن', other: '{0} سېكۇنتتىن كېيىن'},
            past: {one: '{0} سېكۇنت ئىلگىرى', other: '{0} سېكۇنت ئىلگىرى'},
          },
        },
      },
    },
    {
      locale: 'uk',
      pluralRuleFunction: function(e, t) {
        var a = String(e).split('.'),
          r = a[0],
          i = !a[1],
          o = Number(a[0]) == e,
          n = o && a[0].slice(-1),
          l = o && a[0].slice(-2),
          u = r.slice(-1),
          s = r.slice(-2);
        return t
          ? 3 == n && 13 != l
            ? 'few'
            : 'other'
          : i && 1 == u && 11 != s
          ? 'one'
          : i && u >= 2 && u <= 4 && (s < 12 || s > 14)
          ? 'few'
          : (i && 0 == u) ||
            (i && u >= 5 && u <= 9) ||
            (i && s >= 11 && s <= 14)
          ? 'many'
          : 'other';
      },
      fields: {
        year: {
          displayName: 'рік',
          relative: {0: 'цього року', 1: 'наступного року', '-1': 'торік'},
          relativeTime: {
            future: {
              one: 'через {0} рік',
              few: 'через {0} роки',
              many: 'через {0} років',
              other: 'через {0} року',
            },
            past: {
              one: '{0} рік тому',
              few: '{0} роки тому',
              many: '{0} років тому',
              other: '{0} року тому',
            },
          },
        },
        month: {
          displayName: 'місяць',
          relative: {
            0: 'цього місяця',
            1: 'наступного місяця',
            '-1': 'минулого місяця',
          },
          relativeTime: {
            future: {
              one: 'через {0} місяць',
              few: 'через {0} місяці',
              many: 'через {0} місяців',
              other: 'через {0} місяця',
            },
            past: {
              one: '{0} місяць тому',
              few: '{0} місяці тому',
              many: '{0} місяців тому',
              other: '{0} місяця тому',
            },
          },
        },
        day: {
          displayName: 'день',
          relative: {
            0: 'сьогодні',
            1: 'завтра',
            2: 'післязавтра',
            '-2': 'позавчора',
            '-1': 'учора',
          },
          relativeTime: {
            future: {
              one: 'через {0} день',
              few: 'через {0} дні',
              many: 'через {0} днів',
              other: 'через {0} дня',
            },
            past: {
              one: '{0} день тому',
              few: '{0} дні тому',
              many: '{0} днів тому',
              other: '{0} дня тому',
            },
          },
        },
        hour: {
          displayName: 'година',
          relative: {0: 'цієї години'},
          relativeTime: {
            future: {
              one: 'через {0} годину',
              few: 'через {0} години',
              many: 'через {0} годин',
              other: 'через {0} години',
            },
            past: {
              one: '{0} годину тому',
              few: '{0} години тому',
              many: '{0} годин тому',
              other: '{0} години тому',
            },
          },
        },
        minute: {
          displayName: 'хвилина',
          relative: {0: 'цієї хвилини'},
          relativeTime: {
            future: {
              one: 'через {0} хвилину',
              few: 'через {0} хвилини',
              many: 'через {0} хвилин',
              other: 'через {0} хвилини',
            },
            past: {
              one: '{0} хвилину тому',
              few: '{0} хвилини тому',
              many: '{0} хвилин тому',
              other: '{0} хвилини тому',
            },
          },
        },
        second: {
          displayName: 'секунда',
          relative: {0: 'зараз'},
          relativeTime: {
            future: {
              one: 'через {0} секунду',
              few: 'через {0} секунди',
              many: 'через {0} секунд',
              other: 'через {0} секунди',
            },
            past: {
              one: '{0} секунду тому',
              few: '{0} секунди тому',
              many: '{0} секунд тому',
              other: '{0} секунди тому',
            },
          },
        },
      },
    },
    {
      locale: 'ur',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'سال',
          relative: {0: 'اس سال', 1: 'اگلے سال', '-1': 'گزشتہ سال'},
          relativeTime: {
            future: {one: '{0} سال میں', other: '{0} سال میں'},
            past: {one: '{0} سال پہلے', other: '{0} سال پہلے'},
          },
        },
        month: {
          displayName: 'مہینہ',
          relative: {0: 'اس مہینہ', 1: 'اگلے مہینہ', '-1': 'پچھلے مہینہ'},
          relativeTime: {
            future: {one: '{0} مہینہ میں', other: '{0} مہینے میں'},
            past: {one: '{0} مہینہ پہلے', other: '{0} مہینے پہلے'},
          },
        },
        day: {
          displayName: 'دن',
          relative: {
            0: 'آج',
            1: 'آئندہ کل',
            2: 'آنے والا پرسوں',
            '-2': 'گزشتہ پرسوں',
            '-1': 'گزشتہ کل',
          },
          relativeTime: {
            future: {one: '{0} دن میں', other: '{0} دنوں میں'},
            past: {one: '{0} دن پہلے', other: '{0} دنوں پہلے'},
          },
        },
        hour: {
          displayName: 'گھنٹہ',
          relative: {0: 'اس گھنٹے'},
          relativeTime: {
            future: {one: '{0} گھنٹہ میں', other: '{0} گھنٹے میں'},
            past: {one: '{0} گھنٹہ پہلے', other: '{0} گھنٹے پہلے'},
          },
        },
        minute: {
          displayName: 'منٹ',
          relative: {0: 'اس منٹ'},
          relativeTime: {
            future: {one: '{0} منٹ میں', other: '{0} منٹ میں'},
            past: {one: '{0} منٹ پہلے', other: '{0} منٹ پہلے'},
          },
        },
        second: {
          displayName: 'سیکنڈ',
          relative: {0: 'اب'},
          relativeTime: {
            future: {one: '{0} سیکنڈ میں', other: '{0} سیکنڈ میں'},
            past: {one: '{0} سیکنڈ پہلے', other: '{0} سیکنڈ پہلے'},
          },
        },
      },
    },
    {
      locale: 'ur-IN',
      parentLocale: 'ur',
      fields: {
        year: {
          displayName: 'سال',
          relative: {0: 'اس سال', 1: 'اگلے سال', '-1': 'گزشتہ سال'},
          relativeTime: {
            future: {one: '{0} سال میں', other: '{0} سالوں میں'},
            past: {one: '{0} سال پہلے', other: '{0} سال پہلے'},
          },
        },
        month: {
          displayName: 'مہینہ',
          relative: {0: 'اس ماہ', 1: 'اگلے ماہ', '-1': 'گزشتہ ماہ'},
          relativeTime: {
            future: {one: '{0} ماہ میں', other: '{0} ماہ میں'},
            past: {one: '{0} ماہ قبل', other: '{0} ماہ قبل'},
          },
        },
        day: {
          displayName: 'دن',
          relative: {
            0: 'آج',
            1: 'آئندہ کل',
            2: 'آنے والا پرسوں',
            '-2': 'گزشتہ پرسوں',
            '-1': 'گزشتہ کل',
          },
          relativeTime: {
            future: {one: '{0} دن میں', other: '{0} دنوں میں'},
            past: {one: '{0} دن پہلے', other: '{0} دنوں پہلے'},
          },
        },
        hour: {
          displayName: 'گھنٹہ',
          relative: {0: 'اس گھنٹے'},
          relativeTime: {
            future: {one: '{0} گھنٹہ میں', other: '{0} گھنٹے میں'},
            past: {one: '{0} گھنٹہ پہلے', other: '{0} گھنٹے پہلے'},
          },
        },
        minute: {
          displayName: 'منٹ',
          relative: {0: 'اس منٹ'},
          relativeTime: {
            future: {one: '{0} منٹ میں', other: '{0} منٹ میں'},
            past: {one: '{0} منٹ قبل', other: '{0} منٹ قبل'},
          },
        },
        second: {
          displayName: 'سیکنڈ',
          relative: {0: 'اب'},
          relativeTime: {
            future: {one: '{0} سیکنڈ میں', other: '{0} سیکنڈ میں'},
            past: {one: '{0} سیکنڈ قبل', other: '{0} سیکنڈ قبل'},
          },
        },
      },
    },
    {
      locale: 'uz',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'yil',
          relative: {0: 'shu yil', 1: 'keyingi yil', '-1': 'o‘tgan yil'},
          relativeTime: {
            future: {one: '{0} yildan keyin', other: '{0} yildan keyin'},
            past: {one: '{0} yil oldin', other: '{0} yil oldin'},
          },
        },
        month: {
          displayName: 'oy',
          relative: {0: 'shu oy', 1: 'keyingi oy', '-1': 'o‘tgan oy'},
          relativeTime: {
            future: {one: '{0} oydan keyin', other: '{0} oydan keyin'},
            past: {one: '{0} oy oldin', other: '{0} oy oldin'},
          },
        },
        day: {
          displayName: 'kun',
          relative: {0: 'bugun', 1: 'ertaga', '-1': 'kecha'},
          relativeTime: {
            future: {one: '{0} kundan keyin', other: '{0} kundan keyin'},
            past: {one: '{0} kun oldin', other: '{0} kun oldin'},
          },
        },
        hour: {
          displayName: 'soat',
          relative: {0: 'shu soatda'},
          relativeTime: {
            future: {one: '{0} soatdan keyin', other: '{0} soatdan keyin'},
            past: {one: '{0} soat oldin', other: '{0} soat oldin'},
          },
        },
        minute: {
          displayName: 'daqiqa',
          relative: {0: 'shu daqiqada'},
          relativeTime: {
            future: {one: '{0} daqiqadan keyin', other: '{0} daqiqadan keyin'},
            past: {one: '{0} daqiqa oldin', other: '{0} daqiqa oldin'},
          },
        },
        second: {
          displayName: 'soniya',
          relative: {0: 'hozir'},
          relativeTime: {
            future: {one: '{0} soniyadan keyin', other: '{0} soniyadan keyin'},
            past: {one: '{0} soniya oldin', other: '{0} soniya oldin'},
          },
        },
      },
    },
    {
      locale: 'uz-Arab',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'uz-Cyrl',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Йил',
          relative: {0: 'бу йил', 1: 'кейинги йил', '-1': 'ўтган йил'},
          relativeTime: {
            future: {one: '{0} йилдан сўнг', other: '{0} йилдан сўнг'},
            past: {one: '{0} йил аввал', other: '{0} йил аввал'},
          },
        },
        month: {
          displayName: 'Ой',
          relative: {0: 'бу ой', 1: 'кейинги ой', '-1': 'ўтган ой'},
          relativeTime: {
            future: {one: '{0} ойдан сўнг', other: '{0} ойдан сўнг'},
            past: {one: '{0} ой аввал', other: '{0} ой аввал'},
          },
        },
        day: {
          displayName: 'Кун',
          relative: {0: 'бугун', 1: 'эртага', '-1': 'кеча'},
          relativeTime: {
            future: {one: '{0} кундан сўнг', other: '{0} кундан сўнг'},
            past: {one: '{0} кун олдин', other: '{0} кун олдин'},
          },
        },
        hour: {
          displayName: 'Соат',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: '{0} соатдан сўнг', other: '{0} соатдан сўнг'},
            past: {one: '{0} соат олдин', other: '{0} соат олдин'},
          },
        },
        minute: {
          displayName: 'Дақиқа',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: '{0} дақиқадан сўнг', other: '{0} дақиқадан сўнг'},
            past: {one: '{0} дақиқа олдин', other: '{0} дақиқа олдин'},
          },
        },
        second: {
          displayName: 'Сония',
          relative: {0: 'ҳозир'},
          relativeTime: {
            future: {one: '{0} сониядан сўнг', other: '{0} сониядан сўнг'},
            past: {one: '{0} сония олдин', other: '{0} сония олдин'},
          },
        },
      },
    },
    {locale: 'uz-Latn', parentLocale: 'uz'},
    {
      locale: 'vai',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ꕢꘋ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ꕪꖃ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ꔎꔒ',
          relative: {0: 'ꗦꗷ', 1: 'ꔻꕯ', '-1': 'ꖴꖸ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ꕌꕎ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ꕆꕇ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ꕧꕃꕧꕪ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'vai-Latn',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'saŋ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'kalo',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'tele',
          relative: {0: 'wɛlɛ', 1: 'sina', '-1': 'kunu'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'hawa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'mini',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'jaki-jaka',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {locale: 'vai-Vaii', parentLocale: 'vai'},
    {
      locale: 've',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'vi',
      pluralRuleFunction: function(e, t) {
        return t && 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Năm',
          relative: {0: 'năm nay', 1: 'năm sau', '-1': 'năm ngoái'},
          relativeTime: {
            future: {other: 'sau {0} năm nữa'},
            past: {other: '{0} năm trước'},
          },
        },
        month: {
          displayName: 'Tháng',
          relative: {0: 'tháng này', 1: 'tháng sau', '-1': 'tháng trước'},
          relativeTime: {
            future: {other: 'sau {0} tháng nữa'},
            past: {other: '{0} tháng trước'},
          },
        },
        day: {
          displayName: 'Ngày',
          relative: {
            0: 'Hôm nay',
            1: 'Ngày mai',
            2: 'Ngày kia',
            '-2': 'Hôm kia',
            '-1': 'Hôm qua',
          },
          relativeTime: {
            future: {other: 'sau {0} ngày nữa'},
            past: {other: '{0} ngày trước'},
          },
        },
        hour: {
          displayName: 'Giờ',
          relative: {0: 'giờ này'},
          relativeTime: {
            future: {other: 'sau {0} giờ nữa'},
            past: {other: '{0} giờ trước'},
          },
        },
        minute: {
          displayName: 'Phút',
          relative: {0: 'phút này'},
          relativeTime: {
            future: {other: 'sau {0} phút nữa'},
            past: {other: '{0} phút trước'},
          },
        },
        second: {
          displayName: 'Giây',
          relative: {0: 'bây giờ'},
          relativeTime: {
            future: {other: 'sau {0} giây nữa'},
            past: {other: '{0} giây trước'},
          },
        },
      },
    },
    {
      locale: 'vo',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'vun',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Maka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Mori',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Mfiri',
          relative: {0: 'Inu', 1: 'Ngama', '-1': 'Ukou'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Saa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Dakyika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Sekunde',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'wa',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 0 == e || 1 == e ? 'one' : 'other';
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
    {
      locale: 'wae',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Jár',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {
            future: {one: 'I {0} jár', other: 'I {0} jár'},
            past: {one: 'vor {0} jár', other: 'cor {0} jár'},
          },
        },
        month: {
          displayName: 'Mánet',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {
            future: {one: 'I {0} mánet', other: 'I {0} mánet'},
            past: {one: 'vor {0} mánet', other: 'vor {0} mánet'},
          },
        },
        day: {
          displayName: 'Tag',
          relative: {
            0: 'Hitte',
            1: 'Móre',
            2: 'Ubermóre',
            '-2': 'Vorgešter',
            '-1': 'Gešter',
          },
          relativeTime: {
            future: {one: 'i {0} tag', other: 'i {0} täg'},
            past: {one: 'vor {0} tag', other: 'vor {0} täg'},
          },
        },
        hour: {
          displayName: 'Schtund',
          relative: {0: 'this hour'},
          relativeTime: {
            future: {one: 'i {0} stund', other: 'i {0} stunde'},
            past: {one: 'vor {0} stund', other: 'vor {0} stunde'},
          },
        },
        minute: {
          displayName: 'Mínütta',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {one: 'i {0} minüta', other: 'i {0} minüte'},
            past: {one: 'vor {0} minüta', other: 'vor {0} minüte'},
          },
        },
        second: {
          displayName: 'Sekunda',
          relative: {0: 'now'},
          relativeTime: {
            future: {one: 'i {0} sekund', other: 'i {0} sekunde'},
            past: {one: 'vor {0} sekund', other: 'vor {0} sekunde'},
          },
        },
      },
    },
    {
      locale: 'wo',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'xh',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
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
    {
      locale: 'xog',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : 1 == e ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Omwaka',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Omwezi',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Olunaku',
          relative: {0: 'Olwaleelo (leelo)', 1: 'Enkyo', '-1': 'Edho'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'Essawa',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Edakiika',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Obutikitiki',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'yav',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'yɔɔŋ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'oóli',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'puɔ́sɛ́',
          relative: {0: 'ínaan', 1: 'nakinyám', '-1': 'púyoó'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'kisikɛl,',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'minít',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'síkɛn',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'yi',
      pluralRuleFunction: function(e, t) {
        var a = !String(e).split('.')[1];
        return t ? 'other' : 1 == e && a ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'יאָר',
          relative: {0: 'הײַ יאָר', 1: 'איבער א יאָר', '-1': 'פֿאַראַיאָר'},
          relativeTime: {
            future: {one: 'איבער {0} יאָר', other: 'איבער {0} יאָר'},
            past: {one: 'פֿאַר {0} יאָר', other: 'פֿאַר {0} יאָר'},
          },
        },
        month: {
          displayName: 'מאנאַט',
          relative: {
            0: 'דעם חודש',
            1: 'קומענדיקן חודש',
            '-1': 'פֿאַרגאנגענעם חודש',
          },
          relativeTime: {
            future: {one: 'איבער {0} חודש', other: 'איבער {0} חדשים'},
            past: {one: 'פֿאַר {0} חודש', other: 'פֿאַר {0} חדשים'},
          },
        },
        day: {
          displayName: 'טאָג',
          relative: {0: 'היינט', 1: 'מארגן', '-1': 'נעכטן'},
          relativeTime: {
            future: {one: 'אין {0} טאָג אַרום', other: 'אין {0} טעג אַרום'},
            past: {other: '-{0} d'},
          },
        },
        hour: {
          displayName: 'שעה',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'מינוט',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'סעקונדע',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'yo',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'Ọdún',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Osù',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ọjọ́',
          relative: {
            0: 'Òní',
            1: 'Ọ̀la',
            2: 'òtúùnla',
            '-2': 'íjẹta',
            '-1': 'Àná',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'wákàtí',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Ìsẹ́jú',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Ìsẹ́jú Ààyá',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'yo-BJ',
      parentLocale: 'yo',
      fields: {
        year: {
          displayName: 'Ɔdún',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'Osù',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'Ɔjɔ́',
          relative: {
            0: 'Òní',
            1: 'Ɔ̀la',
            2: 'òtúùnla',
            '-2': 'íjɛta',
            '-1': 'Àná',
          },
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'wákàtí',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'Ìsɛ́jú',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'Ìsɛ́jú Ààyá',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'yue',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '下年', '-1': '舊年'},
          relativeTime: {
            future: {other: '{0} 年後'},
            past: {other: '{0} 年前'},
          },
        },
        month: {
          displayName: '月',
          relative: {0: '今個月', 1: '下個月', '-1': '上個月'},
          relativeTime: {
            future: {other: '{0} 個月後'},
            past: {other: '{0} 個月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今日',
            1: '聽日',
            2: '後天',
            '-2': '前天',
            '-1': '尋日',
          },
          relativeTime: {
            future: {other: '{0} 日後'},
            past: {other: '{0} 日前'},
          },
        },
        hour: {
          displayName: '小時',
          relative: {0: '呢個小時'},
          relativeTime: {
            future: {other: '{0} 小時後'},
            past: {other: '{0} 小時前'},
          },
        },
        minute: {
          displayName: '分鐘',
          relative: {0: '呢分鐘'},
          relativeTime: {
            future: {other: '{0} 分鐘後'},
            past: {other: '{0} 分鐘前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '宜家'},
          relativeTime: {
            future: {other: '{0} 秒後'},
            past: {other: '{0} 秒前'},
          },
        },
      },
    },
    {
      locale: 'yue-Hans',
      pluralRuleFunction: function(e, t) {
        return 'other';
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
    {
      locale: 'zgh',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: 'ⴰⵙⴳⴳⵯⴰⵙ',
          relative: {0: 'this year', 1: 'next year', '-1': 'last year'},
          relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}},
        },
        month: {
          displayName: 'ⴰⵢⵢⵓⵔ',
          relative: {0: 'this month', 1: 'next month', '-1': 'last month'},
          relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}},
        },
        day: {
          displayName: 'ⴰⵙⵙ',
          relative: {0: 'ⴰⵙⵙⴰ', 1: 'ⴰⵙⴽⴽⴰ', '-1': 'ⵉⴹⵍⵍⵉ'},
          relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}},
        },
        hour: {
          displayName: 'ⵜⴰⵙⵔⴰⴳⵜ',
          relative: {0: 'this hour'},
          relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}},
        },
        minute: {
          displayName: 'ⵜⵓⵙⴷⵉⴷⵜ',
          relative: {0: 'this minute'},
          relativeTime: {
            future: {other: '+{0} min'},
            past: {other: '-{0} min'},
          },
        },
        second: {
          displayName: 'ⵜⴰⵙⵉⵏⵜ',
          relative: {0: 'now'},
          relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}},
        },
      },
    },
    {
      locale: 'zh',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '明年', '-1': '去年'},
          relativeTime: {future: {other: '{0}年后'}, past: {other: '{0}年前'}},
        },
        month: {
          displayName: '月',
          relative: {0: '本月', 1: '下个月', '-1': '上个月'},
          relativeTime: {
            future: {other: '{0}个月后'},
            past: {other: '{0}个月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今天',
            1: '明天',
            2: '后天',
            '-2': '前天',
            '-1': '昨天',
          },
          relativeTime: {future: {other: '{0}天后'}, past: {other: '{0}天前'}},
        },
        hour: {
          displayName: '小时',
          relative: {0: '这一时间 / 此时'},
          relativeTime: {
            future: {other: '{0}小时后'},
            past: {other: '{0}小时前'},
          },
        },
        minute: {
          displayName: '分钟',
          relative: {0: '此刻'},
          relativeTime: {
            future: {other: '{0}分钟后'},
            past: {other: '{0}分钟前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '现在'},
          relativeTime: {
            future: {other: '{0}秒钟后'},
            past: {other: '{0}秒钟前'},
          },
        },
      },
    },
    {locale: 'zh-Hans', parentLocale: 'zh'},
    {
      locale: 'zh-Hans-HK',
      parentLocale: 'zh-Hans',
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '明年', '-1': '去年'},
          relativeTime: {future: {other: '{0}年后'}, past: {other: '{0}年前'}},
        },
        month: {
          displayName: '月',
          relative: {0: '本月', 1: '下个月', '-1': '上个月'},
          relativeTime: {
            future: {other: '{0}个月后'},
            past: {other: '{0}个月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今天',
            1: '明天',
            2: '后天',
            '-2': '前天',
            '-1': '昨天',
          },
          relativeTime: {future: {other: '{0}天后'}, past: {other: '{0}天前'}},
        },
        hour: {
          displayName: '小时',
          relative: {0: '这一时间 / 此时'},
          relativeTime: {
            future: {other: '{0}小时后'},
            past: {other: '{0}小时前'},
          },
        },
        minute: {
          displayName: '分钟',
          relative: {0: '此刻'},
          relativeTime: {
            future: {other: '{0}分钟后'},
            past: {other: '{0}分钟前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '现在'},
          relativeTime: {future: {other: '{0}秒后'}, past: {other: '{0}秒前'}},
        },
      },
    },
    {
      locale: 'zh-Hans-MO',
      parentLocale: 'zh-Hans',
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '明年', '-1': '去年'},
          relativeTime: {future: {other: '{0}年后'}, past: {other: '{0}年前'}},
        },
        month: {
          displayName: '月',
          relative: {0: '本月', 1: '下个月', '-1': '上个月'},
          relativeTime: {
            future: {other: '{0}个月后'},
            past: {other: '{0}个月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今天',
            1: '明天',
            2: '后天',
            '-2': '前天',
            '-1': '昨天',
          },
          relativeTime: {future: {other: '{0}天后'}, past: {other: '{0}天前'}},
        },
        hour: {
          displayName: '小时',
          relative: {0: '这一时间 / 此时'},
          relativeTime: {
            future: {other: '{0}小时后'},
            past: {other: '{0}小时前'},
          },
        },
        minute: {
          displayName: '分钟',
          relative: {0: '此刻'},
          relativeTime: {
            future: {other: '{0}分钟后'},
            past: {other: '{0}分钟前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '现在'},
          relativeTime: {future: {other: '{0}秒后'}, past: {other: '{0}秒前'}},
        },
      },
    },
    {
      locale: 'zh-Hans-SG',
      parentLocale: 'zh-Hans',
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '明年', '-1': '去年'},
          relativeTime: {future: {other: '{0}年后'}, past: {other: '{0}年前'}},
        },
        month: {
          displayName: '月',
          relative: {0: '本月', 1: '下个月', '-1': '上个月'},
          relativeTime: {
            future: {other: '{0}个月后'},
            past: {other: '{0}个月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今天',
            1: '明天',
            2: '后天',
            '-2': '前天',
            '-1': '昨天',
          },
          relativeTime: {future: {other: '{0}天后'}, past: {other: '{0}天前'}},
        },
        hour: {
          displayName: '小时',
          relative: {0: '这一时间 / 此时'},
          relativeTime: {
            future: {other: '{0}小时后'},
            past: {other: '{0}小时前'},
          },
        },
        minute: {
          displayName: '分钟',
          relative: {0: '此刻'},
          relativeTime: {
            future: {other: '{0}分钟后'},
            past: {other: '{0}分钟前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '现在'},
          relativeTime: {future: {other: '{0}秒后'}, past: {other: '{0}秒前'}},
        },
      },
    },
    {
      locale: 'zh-Hant',
      pluralRuleFunction: function(e, t) {
        return 'other';
      },
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '明年', '-1': '去年'},
          relativeTime: {
            future: {other: '{0} 年後'},
            past: {other: '{0} 年前'},
          },
        },
        month: {
          displayName: '月',
          relative: {0: '本月', 1: '下個月', '-1': '上個月'},
          relativeTime: {
            future: {other: '{0} 個月後'},
            past: {other: '{0} 個月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今天',
            1: '明天',
            2: '後天',
            '-2': '前天',
            '-1': '昨天',
          },
          relativeTime: {
            future: {other: '{0} 天後'},
            past: {other: '{0} 天前'},
          },
        },
        hour: {
          displayName: '小時',
          relative: {0: '這一小時'},
          relativeTime: {
            future: {other: '{0} 小時後'},
            past: {other: '{0} 小時前'},
          },
        },
        minute: {
          displayName: '分鐘',
          relative: {0: '這一分鐘'},
          relativeTime: {
            future: {other: '{0} 分鐘後'},
            past: {other: '{0} 分鐘前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '現在'},
          relativeTime: {
            future: {other: '{0} 秒後'},
            past: {other: '{0} 秒前'},
          },
        },
      },
    },
    {
      locale: 'zh-Hant-HK',
      parentLocale: 'zh-Hant',
      fields: {
        year: {
          displayName: '年',
          relative: {0: '今年', 1: '下年', '-1': '上年'},
          relativeTime: {
            future: {other: '{0} 年後'},
            past: {other: '{0} 年前'},
          },
        },
        month: {
          displayName: '月',
          relative: {0: '本月', 1: '下個月', '-1': '上個月'},
          relativeTime: {
            future: {other: '{0} 個月後'},
            past: {other: '{0} 個月前'},
          },
        },
        day: {
          displayName: '日',
          relative: {
            0: '今日',
            1: '明日',
            2: '後日',
            '-2': '前日',
            '-1': '昨日',
          },
          relativeTime: {
            future: {other: '{0} 日後'},
            past: {other: '{0} 日前'},
          },
        },
        hour: {
          displayName: '小時',
          relative: {0: '這個小時'},
          relativeTime: {
            future: {other: '{0} 小時後'},
            past: {other: '{0} 小時前'},
          },
        },
        minute: {
          displayName: '分鐘',
          relative: {0: '這分鐘'},
          relativeTime: {
            future: {other: '{0} 分鐘後'},
            past: {other: '{0} 分鐘前'},
          },
        },
        second: {
          displayName: '秒',
          relative: {0: '現在'},
          relativeTime: {
            future: {other: '{0} 秒後'},
            past: {other: '{0} 秒前'},
          },
        },
      },
    },
    {locale: 'zh-Hant-MO', parentLocale: 'zh-Hant-HK'},
    {
      locale: 'zu',
      pluralRuleFunction: function(e, t) {
        return t ? 'other' : e >= 0 && e <= 1 ? 'one' : 'other';
      },
      fields: {
        year: {
          displayName: 'Unyaka',
          relative: {
            0: 'kulo nyaka',
            1: 'unyaka ozayo',
            '-1': 'onyakeni odlule',
          },
          relativeTime: {
            future: {
              one: 'onyakeni ongu-{0} ozayo',
              other: 'eminyakeni engu-{0} ezayo',
            },
            past: {one: '{0} unyaka odlule', other: '{0} iminyaka edlule'},
          },
        },
        month: {
          displayName: 'Inyanga',
          relative: {
            0: 'le nyanga',
            1: 'inyanga ezayo',
            '-1': 'inyanga edlule',
          },
          relativeTime: {
            future: {
              one: 'enyangeni engu-{0}',
              other: 'ezinyangeni ezingu-{0} ezizayo',
            },
            past: {one: '{0} inyanga edlule', other: '{0} izinyanga ezedlule'},
          },
        },
        day: {
          displayName: 'Usuku',
          relative: {
            0: 'namhlanje',
            1: 'kusasa',
            2: 'usuku olulandela olwakusasa',
            '-2': 'usuku olwandulela olwayizolo',
            '-1': 'izolo',
          },
          relativeTime: {
            future: {
              one: 'osukwini olungu-{0} oluzayo',
              other: 'ezinsukwini ezingu-{0} ezizayo',
            },
            past: {
              one: 'osukwini olungu-{0} olwedlule',
              other: 'ezinsukwini ezingu-{0} ezedlule.',
            },
          },
        },
        hour: {
          displayName: 'Ihora',
          relative: {0: 'leli hora'},
          relativeTime: {
            future: {
              one: 'ehoreni elingu-{0} elizayo',
              other: 'emahoreni angu-{0} ezayo',
            },
            past: {
              one: '{0} ihora eledlule',
              other: 'emahoreni angu-{0} edlule',
            },
          },
        },
        minute: {
          displayName: 'Iminithi',
          relative: {0: 'leli minithi'},
          relativeTime: {
            future: {
              one: 'kuminithi elingu-{0} elizayo',
              other: 'kumaminithi angu-{0} ezayo',
            },
            past: {
              one: '{0} iminithi eledlule',
              other: '{0} amaminithi edlule',
            },
          },
        },
        second: {
          displayName: 'Isekhondi',
          relative: {0: 'manje'},
          relativeTime: {
            future: {
              one: 'kusekhondi elingu-{0} elizayo',
              other: 'kumasekhondi angu-{0} ezayo',
            },
            past: {
              one: '{0} isekhondi eledlule',
              other: '{0} amasekhondi edlule',
            },
          },
        },
      },
    },
  ];
});
