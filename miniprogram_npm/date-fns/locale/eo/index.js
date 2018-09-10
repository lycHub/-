module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263530, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Esperanto locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263531,"./build_format_locale/index.js":1535884263532}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263531, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'malpli ol sekundo',
      other: 'malpli ol {{count}} sekundoj'
    },

    xSeconds: {
      one: '1 sekundo',
      other: '{{count}} sekundoj'
    },

    halfAMinute: 'duonminuto',

    lessThanXMinutes: {
      one: 'malpli ol minuto',
      other: 'malpli ol {{count}} minutoj'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutoj'
    },

    aboutXHours: {
      one: 'proksimume 1 horo',
      other: 'proksimume {{count}} horoj'
    },

    xHours: {
      one: '1 horo',
      other: '{{count}} horoj'
    },

    xDays: {
      one: '1 tago',
      other: '{{count}} tagoj'
    },

    aboutXMonths: {
      one: 'proksimume 1 monato',
      other: 'proksimume {{count}} monatoj'
    },

    xMonths: {
      one: '1 monato',
      other: '{{count}} monatoj'
    },

    aboutXYears: {
      one: 'proksimume 1 jaro',
      other: 'proksimume {{count}} jaroj'
    },

    xYears: {
      one: '1 jaro',
      other: '{{count}} jaroj'
    },

    overXYears: {
      one: 'pli ol 1 jaro',
      other: 'pli ol {{count}} jaroj'
    },

    almostXYears: {
      one: 'preskaŭ 1 jaro',
      other: 'preskaŭ {{count}} jaroj'
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
        return 'post ' + result
      } else {
        return 'antaŭ ' + result
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
__DEFINE__(1535884263532, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa']
  var weekdays3char = ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab']
  var weekdaysFull = ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
  var meridiemUppercase = ['A.T.M.', 'P.T.M.']
  var meridiemLowercase = ['a.t.m.', 'p.t.m.']
  var meridiemFull = ['antaŭtagmeze', 'posttagmeze']

  var formatters = {
    // Month: jan, feb, ..., deс
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: januaro, februaro, ..., decembro
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: di, lu, ..., sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: dim, lun, ..., sab
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: dimanĉo, lundo, ..., sabato
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // A.T.M., P.T.M.
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // a.t.m., p.t.m.
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // antaŭtagmeze, posttagmeze
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-a'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263533}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263533, function(require, module, exports) {
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
return __REQUIRE__(1535884263530);
})()
//# sourceMappingURL=index.js.map