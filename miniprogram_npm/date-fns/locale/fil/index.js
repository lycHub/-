module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263542, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Filipino locale.
 * @author Ian De La Cruz [@RIanDeLaCruz]{@link https://github.com/RIanDeLaCruz}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263543,"./build_format_locale/index.js":1535884263544}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263543, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'mas maliit sa isang segundo',
      other: 'mas maliit sa {{count}} segundo'
    },

    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundo'
    },

    halfAMinute: 'kalahating minuto',

    lessThanXMinutes: {
      one: 'mas maliit sa isang minuto',
      other: 'mas maliit sa {{count}} minuto'
    },

    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minuto'
    },

    aboutXHours: {
      one: 'mga 1 oras',
      other: 'mga {{count}} oras'
    },

    xHours: {
      one: '1 oras',
      other: '{{count}} oras'
    },

    xDays: {
      one: '1 araw',
      other: '{{count}} araw'
    },

    aboutXMonths: {
      one: 'mga 1 buwan',
      other: 'mga {{count}} buwan'
    },

    xMonths: {
      one: '1 buwan',
      other: '{{count}} buwan'
    },

    aboutXYears: {
      one: 'mga 1 taon',
      other: 'mga {{count}} taon'
    },

    xYears: {
      one: '1 taon',
      other: '{{count}} taon'
    },

    overXYears: {
      one: 'higit sa 1 taon',
      other: 'higit sa {{count}} taon'
    },

    almostXYears: {
      one: 'halos 1 taon',
      other: 'halos {{count}} taon'
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
        return 'sa loob ng ' + result
      } else {
        return result + ' ang nakalipas'
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
__DEFINE__(1535884263544, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis']
  var monthsFull = ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre']
  var weekdays2char = ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa']
  var weekdays3char = ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab']
  var weekdaysFull = ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado']
  var meridiemUppercase = ['NU', 'NT', 'NH', 'NG']
  var meridiemLowercase = ['nu', 'nt', 'nh', 'ng']
  var meridiemFull = ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi']

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
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemUppercase[2]
        } else {
          return meridiemUppercase[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemUppercase[0]
      } else {
        return meridiemUppercase[1]
      }
    },

    // am, pm
    'a': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemLowercase[2]
        } else {
          return meridiemLowercase[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemLowercase[0]
      } else {
        return meridiemLowercase[1]
      }
    },

    // a.m., p.m.
    'aa': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return meridiemFull[2]
        } else {
          return meridiemFull[3]
        }
      } else if (date.getHours() < 12) {
        return meridiemFull[0]
      } else {
        return meridiemFull[1]
      }
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
  return 'ika-' + number
}

module.exports = buildFormatLocale

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263545}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263545, function(require, module, exports) {
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
return __REQUIRE__(1535884263542);
})()
//# sourceMappingURL=index.js.map