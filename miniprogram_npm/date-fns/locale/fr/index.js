module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263546, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary French locale.
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263547,"./build_format_locale/index.js":1535884263548}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263547, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'moins d’une seconde',
      other: 'moins de {{count}} secondes'
    },

    xSeconds: {
      one: '1 seconde',
      other: '{{count}} secondes'
    },

    halfAMinute: '30 secondes',

    lessThanXMinutes: {
      one: 'moins d’une minute',
      other: 'moins de {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'environ 1 heure',
      other: 'environ {{count}} heures'
    },

    xHours: {
      one: '1 heure',
      other: '{{count}} heures'
    },

    xDays: {
      one: '1 jour',
      other: '{{count}} jours'
    },

    aboutXMonths: {
      one: 'environ 1 mois',
      other: 'environ {{count}} mois'
    },

    xMonths: {
      one: '1 mois',
      other: '{{count}} mois'
    },

    aboutXYears: {
      one: 'environ 1 an',
      other: 'environ {{count}} ans'
    },

    xYears: {
      one: '1 an',
      other: '{{count}} ans'
    },

    overXYears: {
      one: 'plus d’un an',
      other: 'plus de {{count}} ans'
    },

    almostXYears: {
      one: 'presqu’un an',
      other: 'presque {{count}} ans'
    }
  }

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
      if (options.comparison > 0) {
        return 'dans ' + result
      } else {
        return 'il y a ' + result
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
__DEFINE__(1535884263548, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
  var monthsFull = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa']
  var weekdays3char = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.']
  var weekdaysFull = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['du matin', 'de l’après-midi', 'du soir']

  var formatters = {
    // Month: Jan, Feb, …, Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, …, December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, …, Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, …, Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, …, Saturday
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
      var hours = date.getHours()

      if (hours <= 12) {
        return meridiemFull[0]
      }

      if (hours <= 16) {
        return meridiemFull[1]
      }

      return meridiemFull[2]
    },

    // ISO week, ordinal version: 1st, 2nd, …, 53rd
    // NOTE: Week has feminine grammatical gender in French: semaine
    'Wo': function (date, formatters) {
      return feminineOrdinal(formatters.W(date))
    }
  }

  // Generate ordinal version of formatters: M → Mo, D → Do, etc.
  // NOTE: For words with masculine grammatical gender in French: mois, jour, trimestre
  var formatterTokens = ['M', 'D', 'DDD', 'd', 'Q']
  formatterTokens.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return masculineOrdinal(formatters[formatterToken](date))
    }
  })

  // Special case for day of month ordinals in long date format context:
  // 1er mars, 2 mars, 3 mars, …
  // See https://github.com/date-fns/date-fns/issues/437
  //
  // NOTE: The below implementation works because parsing of tokens inside a
  // format string is done by a greedy regular expression, i.e. longer tokens
  // have priority. E.g. formatter for "Do MMMM" has priority over individual
  // formatters for "Do" and "MMMM".
  var monthsTokens = ['MMM', 'MMMM']
  monthsTokens.forEach(function (monthToken) {
    formatters['Do ' + monthToken] = function (date, commonFormatters) {
      var dayOfMonthToken = date.getDate() === 1
        ? 'Do'
        : 'D'
      var dayOfMonthFormatter = formatters[dayOfMonthToken] || commonFormatters[dayOfMonthToken]

      return dayOfMonthFormatter(date, commonFormatters) + ' ' + formatters[monthToken](date)
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function masculineOrdinal (number) {
  if (number === 1) {
    return '1er'
  }

  return number + 'e'
}

function feminineOrdinal (number) {
  if (number === 1) {
    return '1re'
  }

  return number + 'e'
}

module.exports = buildFormatLocale

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263549}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263549, function(require, module, exports) {
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
return __REQUIRE__(1535884263546);
})()
//# sourceMappingURL=index.js.map