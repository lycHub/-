module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263610, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Slovenian locale.
 * @author Adam Stradovnik [@Neoglyph]{@link https://github.com/Neoglyph}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263611,"./build_format_locale/index.js":1535884263612}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263611, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'manj kot sekunda',
      two: 'manj kot 2 sekundi',
      three: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    },

    xSeconds: {
      one: '1 sekunda',
      two: '2 sekundi',
      three: '{{count}} sekunde',
      other: '{{count}} sekund'
    },

    halfAMinute: 'pol minute',

    lessThanXMinutes: {
      one: 'manj kot minuta',
      two: 'manj kot 2 minuti',
      three: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    },

    xMinutes: {
      one: '1 minuta',
      two: '2 minuti',
      three: '{{count}} minute',
      other: '{{count}} minut'
    },

    aboutXHours: {
      one: 'približno 1 ura',
      two: 'približno 2 uri',
      three: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    },

    xHours: {
      one: '1 ura',
      two: '2 uri',
      three: '{{count}} ure',
      other: '{{count}} ur'
    },

    xDays: {
      one: '1 dan',
      two: '2 dni',
      three: '{{count}} dni',
      other: '{{count}} dni'
    },

    aboutXMonths: {
      one: 'približno 1 mesec',
      two: 'približno 2 meseca',
      three: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    },

    xMonths: {
      one: '1 mesec',
      two: '2 meseca',
      three: '{{count}} meseci',
      other: '{{count}} mesecev'
    },

    aboutXYears: {
      one: 'približno 1 leto',
      two: 'približno 2 leti',
      three: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    },

    xYears: {
      one: '1 leto',
      two: '2 leti',
      three: '{{count}} leta',
      other: '{{count}} let'
    },

    overXYears: {
      one: 'več kot 1 leto',
      two: 'več kot 2 leti',
      three: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    },

    almostXYears: {
      one: 'skoraj 1 leto',
      two: 'skoraj 2 leti',
      three: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else if (count === 2) {
      result = distanceInWordsLocale[token].two
    } else if (count === 3 || count === 4) {
      result = distanceInWordsLocale[token].three.replace('{{count}}', count)
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      result = result.replace(/(minut|sekund|ur)(a)/, '$1o')
      if (token === 'xMonths') {
        result = result.replace(/(mesec)(i)/, '$1e')
      }
      if (options.comparison > 0) {
        return 'čez ' + result
      } else {
        return result + ' nazaj'
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
__DEFINE__(1535884263612, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december']
  var weekdays2char = ['ne', 'po', 'to', 'sr', 'če', 'pe', 'so']
  var weekdays3char = ['ned', 'pon', 'tor', 'sre', 'čet', 'pet', 'sob']
  var weekdaysFull = ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota']
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

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263613}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263613, function(require, module, exports) {
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
return __REQUIRE__(1535884263610);
})()
//# sourceMappingURL=index.js.map