module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263550, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Croatian locale.
 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263551,"./build_format_locale/index.js":1535884263552}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263551, function(require, module, exports) {
function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: {
        standalone: 'manje od 1 sekunde',
        withPrepositionAgo: 'manje od 1 sekunde',
        withPrepositionIn: 'manje od 1 sekundu'
      },
      dual: 'manje od {{count}} sekunde',
      other: 'manje od {{count}} sekundi'
    },

    xSeconds: {
      one: {
        standalone: '1 sekunda',
        withPrepositionAgo: '1 sekunde',
        withPrepositionIn: '1 sekundu'
      },
      dual: '{{count}} sekunde',
      other: '{{count}} sekundi'
    },

    halfAMinute: 'pola minute',

    lessThanXMinutes: {
      one: {
        standalone: 'manje od 1 minute',
        withPrepositionAgo: 'manje od 1 minute',
        withPrepositionIn: 'manje od 1 minutu'
      },
      dual: 'manje od {{count}} minute',
      other: 'manje od {{count}} minuta'
    },

    xMinutes: {
      one: {
        standalone: '1 minuta',
        withPrepositionAgo: '1 minute',
        withPrepositionIn: '1 minutu'
      },
      dual: '{{count}} minute',
      other: '{{count}} minuta'
    },

    aboutXHours: {
      one: {
        standalone: 'oko 1 sat',
        withPrepositionAgo: 'oko 1 sat',
        withPrepositionIn: 'oko 1 sat'
      },
      dual: 'oko {{count}} sata',
      other: 'oko {{count}} sati'
    },

    xHours: {
      one: {
        standalone: '1 sat',
        withPrepositionAgo: '1 sat',
        withPrepositionIn: '1 sat'
      },
      dual: '{{count}} sata',
      other: '{{count}} sati'
    },

    xDays: {
      one: {
        standalone: '1 dan',
        withPrepositionAgo: '1 dan',
        withPrepositionIn: '1 dan'
      },
      dual: '{{count}} dana',
      other: '{{count}} dana'
    },

    aboutXMonths: {
      one: {
        standalone: 'oko 1 mjesec',
        withPrepositionAgo: 'oko 1 mjesec',
        withPrepositionIn: 'oko 1 mjesec'
      },
      dual: 'oko {{count}} mjeseca',
      other: 'oko {{count}} mjeseci'
    },

    xMonths: {
      one: {
        standalone: '1 mjesec',
        withPrepositionAgo: '1 mjesec',
        withPrepositionIn: '1 mjesec'
      },
      dual: '{{count}} mjeseca',
      other: '{{count}} mjeseci'
    },

    aboutXYears: {
      one: {
        standalone: 'oko 1 godinu',
        withPrepositionAgo: 'oko 1 godinu',
        withPrepositionIn: 'oko 1 godinu'
      },
      dual: 'oko {{count}} godine',
      other: 'oko {{count}} godina'
    },

    xYears: {
      one: {
        standalone: '1 godina',
        withPrepositionAgo: '1 godine',
        withPrepositionIn: '1 godinu'
      },
      dual: '{{count}} godine',
      other: '{{count}} godina'
    },

    overXYears: {
      one: {
        standalone: 'preko 1 godinu',
        withPrepositionAgo: 'preko 1 godinu',
        withPrepositionIn: 'preko 1 godinu'
      },
      dual: 'preko {{count}} godine',
      other: 'preko {{count}} godina'
    },

    almostXYears: {
      one: {
        standalone: 'gotovo 1 godinu',
        withPrepositionAgo: 'gotovo 1 godinu',
        withPrepositionIn: 'gotovo 1 godinu'
      },
      dual: 'gotovo {{count}} godine',
      other: 'gotovo {{count}} godina'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result

    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      if (options.addSuffix) {
        if (options.comparison > 0) {
          result = distanceInWordsLocale[token].one.withPrepositionIn
        } else {
          result = distanceInWordsLocale[token].one.withPrepositionAgo
        }
      } else {
        result = distanceInWordsLocale[token].one.standalone
      }
    } else if (
      count % 10 > 1 && count % 10 < 5 && // if last digit is between 2 and 4
      String(count).substr(-2, 1) !== '1' // unless the 2nd to last digit is "1"
    ) {
      result = distanceInWordsLocale[token].dual.replace('{{count}}', count)
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'za ' + result
      } else {
        return 'prije ' + result
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
__DEFINE__(1535884263552, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro']
  var monthsFull = ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac']
  var monthsGenitive = ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenog', 'prosinca']
  var weekdays2char = ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su']
  var weekdays3char = ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']
  var weekdaysFull = ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota']
  var meridiemUppercase = ['ujutro', 'popodne']
  var meridiemLowercase = ['ujutro', 'popodne']
  var meridiemFull = ['ujutro', 'popodne']

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

  // Generate formatters like 'D MMMM', where the month is in the genitive case
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
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

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263553}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263553, function(require, module, exports) {
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
return __REQUIRE__(1535884263550);
})()
//# sourceMappingURL=index.js.map