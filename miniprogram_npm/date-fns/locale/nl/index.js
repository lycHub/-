module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263586, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Dutch locale.
 * @author Jorik Tangelder [@jtangelder]{@link https://github.com/jtangelder}
 * @author Ruben Stolk [@rubenstolk]{@link https://github.com/rubenstolk}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263587,"./build_format_locale/index.js":1535884263588}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263587, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'minder dan een seconde',
      other: 'minder dan {{count}} seconden'
    },

    xSeconds: {
      one: '1 seconde',
      other: '{{count}} seconden'
    },

    halfAMinute: 'een halve minuut',

    lessThanXMinutes: {
      one: 'minder dan een minuut',
      other: 'minder dan {{count}} minuten'
    },

    xMinutes: {
      one: 'een minuut',
      other: '{{count}} minuten'
    },

    aboutXHours: {
      one: 'ongeveer 1 uur',
      other: 'ongeveer {{count}} uur'
    },

    xHours: {
      one: '1 uur',
      other: '{{count}} uur'
    },

    xDays: {
      one: '1 dag',
      other: '{{count}} dagen'
    },

    aboutXMonths: {
      one: 'ongeveer 1 maand',
      other: 'ongeveer {{count}} maanden'
    },

    xMonths: {
      one: '1 maand',
      other: '{{count}} maanden'
    },

    aboutXYears: {
      one: 'ongeveer 1 jaar',
      other: 'ongeveer {{count}} jaar'
    },

    xYears: {
      one: '1 jaar',
      other: '{{count}} jaar'
    },

    overXYears: {
      one: 'meer dan 1 jaar',
      other: 'meer dan {{count}} jaar'
    },

    almostXYears: {
      one: 'bijna 1 jaar',
      other: 'bijna {{count}} jaar'
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
        return 'over ' + result
      } else {
        return result + ' geleden'
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
__DEFINE__(1535884263588, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
  var weekdays3char = ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat']
  var weekdaysFull = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
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
  return number + 'e'
}

module.exports = buildFormatLocale

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263589}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263589, function(require, module, exports) {
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
return __REQUIRE__(1535884263586);
})()
//# sourceMappingURL=index.js.map