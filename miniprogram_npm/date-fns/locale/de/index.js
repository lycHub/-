module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263518, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary German locale.
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Asia [@asia-t]{@link https://github.com/asia-t}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263519,"./build_format_locale/index.js":1535884263520}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263519, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      standalone: {
        one: 'weniger als eine Sekunde',
        other: 'weniger als {{count}} Sekunden'
      },
      withPreposition: {
        one: 'weniger als einer Sekunde',
        other: 'weniger als {{count}} Sekunden'
      }
    },

    xSeconds: {
      standalone: {
        one: 'eine Sekunde',
        other: '{{count}} Sekunden'
      },
      withPreposition: {
        one: 'einer Sekunde',
        other: '{{count}} Sekunden'
      }
    },

    halfAMinute: {
      standalone: 'eine halbe Minute',
      withPreposition: 'einer halben Minute'
    },

    lessThanXMinutes: {
      standalone: {
        one: 'weniger als eine Minute',
        other: 'weniger als {{count}} Minuten'
      },
      withPreposition: {
        one: 'weniger als einer Minute',
        other: 'weniger als {{count}} Minuten'
      }
    },

    xMinutes: {
      standalone: {
        one: 'eine Minute',
        other: '{{count}} Minuten'
      },
      withPreposition: {
        one: 'einer Minute',
        other: '{{count}} Minuten'
      }
    },

    aboutXHours: {
      standalone: {
        one: 'etwa eine Stunde',
        other: 'etwa {{count}} Stunden'
      },
      withPreposition: {
        one: 'etwa einer Stunde',
        other: 'etwa {{count}} Stunden'
      }
    },

    xHours: {
      standalone: {
        one: 'eine Stunde',
        other: '{{count}} Stunden'
      },
      withPreposition: {
        one: 'einer Stunde',
        other: '{{count}} Stunden'
      }
    },

    xDays: {
      standalone: {
        one: 'ein Tag',
        other: '{{count}} Tage'
      },
      withPreposition: {
        one: 'einem Tag',
        other: '{{count}} Tagen'
      }

    },

    aboutXMonths: {
      standalone: {
        one: 'etwa ein Monat',
        other: 'etwa {{count}} Monate'
      },
      withPreposition: {
        one: 'etwa einem Monat',
        other: 'etwa {{count}} Monaten'
      }
    },

    xMonths: {
      standalone: {
        one: 'ein Monat',
        other: '{{count}} Monate'
      },
      withPreposition: {
        one: 'einem Monat',
        other: '{{count}} Monaten'
      }
    },

    aboutXYears: {
      standalone: {
        one: 'etwa ein Jahr',
        other: 'etwa {{count}} Jahre'
      },
      withPreposition: {
        one: 'etwa einem Jahr',
        other: 'etwa {{count}} Jahren'
      }
    },

    xYears: {
      standalone: {
        one: 'ein Jahr',
        other: '{{count}} Jahre'
      },
      withPreposition: {
        one: 'einem Jahr',
        other: '{{count}} Jahren'
      }
    },

    overXYears: {
      standalone: {
        one: 'mehr als ein Jahr',
        other: 'mehr als {{count}} Jahre'
      },
      withPreposition: {
        one: 'mehr als einem Jahr',
        other: 'mehr als {{count}} Jahren'
      }
    },

    almostXYears: {
      standalone: {
        one: 'fast ein Jahr',
        other: 'fast {{count}} Jahre'
      },
      withPreposition: {
        one: 'fast einem Jahr',
        other: 'fast {{count}} Jahren'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var usageGroup = options.addSuffix
      ? distanceInWordsLocale[token].withPreposition
      : distanceInWordsLocale[token].standalone

    var result
    if (typeof usageGroup === 'string') {
      result = usageGroup
    } else if (count === 1) {
      result = usageGroup.one
    } else {
      result = usageGroup.other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return 'vor ' + result
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
__DEFINE__(1535884263520, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  // Note: in German, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  var monthsFull = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  var weekdays2char = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  var weekdays3char = ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam']
  var weekdaysFull = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

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
  return number + '.'
}

module.exports = buildFormatLocale

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263521}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263521, function(require, module, exports) {
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
return __REQUIRE__(1535884263518);
})()
//# sourceMappingURL=index.js.map