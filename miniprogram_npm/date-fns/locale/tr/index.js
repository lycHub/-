module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263622, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Turkish locale.
 * @author Alpcan Aydın [@alpcanaydin]{@link https://github.com/alpcanaydin}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263623,"./build_format_locale/index.js":1535884263624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263623, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'bir saniyeden az',
      other: '{{count}} saniyeden az'
    },

    xSeconds: {
      one: '1 saniye',
      other: '{{count}} saniye'
    },

    halfAMinute: 'yarım dakika',

    lessThanXMinutes: {
      one: 'bir dakikadan az',
      other: '{{count}} dakikadan az'
    },

    xMinutes: {
      one: '1 dakika',
      other: '{{count}} dakika'
    },

    aboutXHours: {
      one: 'yaklaşık 1 saat',
      other: 'yaklaşık {{count}} saat'
    },

    xHours: {
      one: '1 saat',
      other: '{{count}} saat'
    },

    xDays: {
      one: '1 gün',
      other: '{{count}} gün'
    },

    aboutXMonths: {
      one: 'yaklaşık 1 ay',
      other: 'yaklaşık {{count}} ay'
    },

    xMonths: {
      one: '1 ay',
      other: '{{count}} ay'
    },

    aboutXYears: {
      one: 'yaklaşık 1 yıl',
      other: 'yaklaşık {{count}} yıl'
    },

    xYears: {
      one: '1 yıl',
      other: '{{count}} yıl'
    },

    overXYears: {
      one: '1 yıldan fazla',
      other: '{{count}} yıldan fazla'
    },

    almostXYears: {
      one: 'neredeyse 1 yıl',
      other: 'neredeyse {{count}} yıl'
    }
  }

  var extraWordTokens = [
    'lessThanXSeconds',
    'lessThanXMinutes',
    'overXYears'
  ]

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      var extraWord = ''
      if (extraWordTokens.indexOf(token) > -1) {
        extraWord = ' bir süre'
      }

      if (options.comparison > 0) {
        return result + extraWord + ' içinde'
      } else {
        return result + extraWord + ' önce'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263624, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  // Note: in Turkish, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
  var monthsFull = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  var weekdays2char = ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
  var weekdays3char = ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts']
  var weekdaysFull = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
  var meridiemUppercase = ['ÖÖ', 'ÖS']
  var meridiemLowercase = ['öö', 'ös']
  var meridiemFull = ['ö.ö.', 'ö.s.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var suffixes = {
    1: '\'inci',
    2: '\'inci',
    3: '\'üncü',
    4: '\'üncü',
    5: '\'inci',
    6: '\'ıncı',
    7: '\'inci',
    8: '\'inci',
    9: '\'uncu',
    10: '\'uncu',
    20: '\'inci',
    30: '\'uncu',
    50: '\'inci',
    60: '\'ıncı',
    70: '\'inci',
    80: '\'inci',
    90: '\'ıncı',
    100: '\'üncü'
  }

  if (number === 0) {
    return '0\'ıncı'
  }

  var x = number % 10
  var y = number % 100 - x
  var z = number >= 100 ? 100 : null

  return number + (suffixes[x] || suffixes[y] || suffixes[z])
}

module.exports = buildFormatLocale

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263625}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263625, function(require, module, exports) {
var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1535884263622);
})()
//# sourceMappingURL=index.js.map