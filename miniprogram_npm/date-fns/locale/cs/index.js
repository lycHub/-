module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1535884263510, function(require, module, exports) {
var buildDistanceInWordsLocale = require('./build_distance_in_words_locale/index.js')
var buildFormatLocale = require('./build_format_locale/index.js')

/**
 * @category Locales
 * @summary Czech locale.
 * @author David Rus [@davidrus]{@link https://github.com/davidrus}
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}

}, function(modId) {var map = {"./build_distance_in_words_locale/index.js":1535884263511,"./build_format_locale/index.js":1535884263512}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263511, function(require, module, exports) {
function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  if (count >= 2 && count <= 4) {
    return scheme.twoFour
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other
}

function declension (scheme, count, time) {
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function extractPreposition (token) {
  var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
    return !!token.match(new RegExp('^' + preposition))
  })

  return result[0]
}

function prefixPreposition (preposition) {
  var translation = ''

  if (preposition === 'almost') {
    translation = 'skoro'
  }

  if (preposition === 'about') {
    translation = 'přibližně'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function suffixPreposition (preposition) {
  var translation = ''

  if (preposition === 'lessThan') {
    translation = 'méně než'
  }

  if (preposition === 'over') {
    translation = 'více než'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function lowercaseFirstLetter (string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    xSeconds: {
      one: {
        regular: 'vteřina',
        past: 'vteřinou',
        future: 'vteřinu'
      },
      twoFour: {
        regular: '{{count}} vteřiny',
        past: '{{count}} vteřinami',
        future: '{{count}} vteřiny'
      },
      other: {
        regular: '{{count}} vteřin',
        past: '{{count}} vteřinami',
        future: '{{count}} vteřin'
      }
    },

    halfAMinute: {
      other: {
        regular: 'půl minuty',
        past: 'půl minutou',
        future: 'půl minuty'
      }
    },

    xMinutes: {
      one: {
        regular: 'minuta',
        past: 'minutou',
        future: 'minutu'
      },
      twoFour: {
        regular: '{{count}} minuty',
        past: '{{count}} minutami',
        future: '{{count}} minuty'
      },
      other: {
        regular: '{{count}} minut',
        past: '{{count}} minutami',
        future: '{{count}} minut'
      }
    },

    xHours: {
      one: {
        regular: 'hodina',
        past: 'hodinou',
        future: 'hodinu'
      },
      twoFour: {
        regular: '{{count}} hodiny',
        past: '{{count}} hodinami',
        future: '{{count}} hodiny'
      },
      other: {
        regular: '{{count}} hodin',
        past: '{{count}} hodinami',
        future: '{{count}} hodin'
      }
    },

    xDays: {
      one: {
        regular: 'den',
        past: 'dnem',
        future: 'den'
      },
      twoFour: {
        regular: '{{count}} dni',
        past: '{{count}} dny',
        future: '{{count}} dni'
      },
      other: {
        regular: '{{count}} dní',
        past: '{{count}} dny',
        future: '{{count}} dní'
      }
    },

    xMonths: {
      one: {
        regular: 'měsíc',
        past: 'měsícem',
        future: 'měsíc'
      },
      twoFour: {
        regular: '{{count}} měsíce',
        past: '{{count}} měsíci',
        future: '{{count}} měsíce'
      },
      other: {
        regular: '{{count}} měsíců',
        past: '{{count}} měsíci',
        future: '{{count}} měsíců'
      }
    },

    xYears: {
      one: {
        regular: 'rok',
        past: 'rokem',
        future: 'rok'
      },
      twoFour: {
        regular: '{{count}} roky',
        past: '{{count}} roky',
        future: '{{count}} roky'
      },
      other: {
        regular: '{{count}} roků',
        past: '{{count}} roky',
        future: '{{count}} roků'
      }
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var preposition = extractPreposition(token) || ''
    var key = lowercaseFirstLetter(token.substring(preposition.length))
    var scheme = distanceInWordsLocale[key]

    if (!options.addSuffix) {
      return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
    }

    if (options.comparison > 0) {
      return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
    } else {
      return prefixPreposition(preposition) + 'před ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263512, function(require, module, exports) {
var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var months3char = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro']
  var monthsFull = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
  var weekdays2char = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
  var weekdays3char = ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob']
  var weekdaysFull = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
  var meridiemUppercase = ['DOP.', 'ODP.']
  var meridiemLowercase = ['dop.', 'odp.']
  var meridiemFull = ['dopoledne', 'odpoledne']

  var formatters = {
    // Month: led, úno, ..., pro
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: leden, únor, ..., prosinec
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: ne, po, ..., so
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: ned, pon, ..., sob
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: neděle, pondělí, ..., sobota
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // DOP., ODP.
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // dop., odp.
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // dopoledne, odpoledne
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

}, function(modId) { var map = {"../../_lib/build_formatting_tokens_reg_exp/index.js":1535884263513}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1535884263513, function(require, module, exports) {
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
return __REQUIRE__(1535884263510);
})()
//# sourceMappingURL=index.js.map