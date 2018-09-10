module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263538, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Finnish locale.
 * @author Pyry-Samuli Lahti [@Pyppe]{@link https://github.com/Pyppe}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263539,"./build_format_locale/index.js":1535884263540}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263539, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  function futureSeconds (text) {
    return text.replace(/sekuntia?/, 'sekunnin')
  }

  function futureMinutes (text) {
    return text.replace(/minuuttia?/, 'minuutin')
  }

  function futureHours (text) {
    return text.replace(/tuntia?/, 'tunnin')
  }

  function futureDays (text) {
    return text.replace(/päivää?/, 'päivän')
  }

  function futureMonths (text) {
    return text.replace(/(kuukausi|kuukautta)/, 'kuukauden')
  }

  function futureYears (text) {
    return text.replace(/(vuosi|vuotta)/, 'vuoden')
  }

  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'alle sekunti',
      other: 'alle {{count}} sekuntia',
      futureTense: futureSeconds
    },

    xSeconds: {
      one: 'sekunti',
      other: '{{count}} sekuntia',
      futureTense: futureSeconds
    },

    halfAMinute: {
      one: 'puoli minuuttia',
      other: 'puoli minuuttia',
      futureTense: function (text) {
        return 'puolen minuutin'
      }
    },

    lessThanXMinutes: {
      one: 'alle minuutti',
      other: 'alle {{count}} minuuttia',
      futureTense: futureMinutes
    },

    xMinutes: {
      one: 'minuutti',
      other: '{{count}} minuuttia',
      futureTense: futureMinutes
    },

    aboutXHours: {
      one: 'noin tunti',
      other: 'noin {{count}} tuntia',
      futureTense: futureHours
    },

    xHours: {
      one: 'tunti',
      other: '{{count}} tuntia',
      futureTense: futureHours
    },

    xDays: {
      one: 'päivä',
      other: '{{count}} päivää',
      futureTense: futureDays
    },

    aboutXMonths: {
      one: 'noin kuukausi',
      other: 'noin {{count}} kuukautta',
      futureTense: futureMonths
    },

    xMonths: {
      one: 'kuukausi',
      other: '{{count}} kuukautta',
      futureTense: futureMonths
    },

    aboutXYears: {
      one: 'noin vuosi',
      other: 'noin {{count}} vuotta',
      futureTense: futureYears
    },

    xYears: {
      one: 'vuosi',
      other: '{{count}} vuotta',
      futureTense: futureYears
    },

    overXYears: {
      one: 'yli vuosi',
      other: 'yli {{count}} vuotta',
      futureTense: futureYears
    },

    almostXYears: {
      one: 'lähes vuosi',
      other: 'lähes {{count}} vuotta',
      futureTense: futureYears
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var distance = distanceInWordsLocale[token]
    var result = count === 1 ? distance.one : distance.other.replace('{{count}}', count)

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return distance.futureTense(result) + ' kuluttua'
      } else {
        return result + ' sitten'
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
__DEFINE__(1535884263540, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu']
  var monthsFull = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
  var weekdays2char = ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
  var weekdaysFull = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']

  // In Finnish `a.m.` / `p.m.` are virtually never used, but it seems `AP` (aamupäivä) / `IP` (iltapäivä) are acknowleded terms:
  // https://fi.wikipedia.org/wiki/24_tunnin_kello
  function meridiem (date) {
    return date.getHours() < 12 ? 'AP' : 'IP'
  }

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
      // Finnish doesn't use two-char weekdays
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': meridiem,

    // am, pm
    'a': meridiem,

    // a.m., p.m.
    'aa': meridiem
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date).toString() + '.'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263541}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263541, function(require, module, exports) {
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
return __REQUIRE__(1535884263538);
})()
//# sourceMappingURL=index.js.map