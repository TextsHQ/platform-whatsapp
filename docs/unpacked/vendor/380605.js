function t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? Object(arguments[t]) : {};
    var i = Object.keys(r);
    if (typeof Object.getOwnPropertySymbols == "function") {
      i = i.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
      }));
    }
    i.forEach(function (t) {
      n(e, t, r[t]);
    });
  }
  return e;
}
function n(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
var r = {
  en_GB: {
    meta: {},
    patterns: {
      "/(.*)('|&#039;)s(?:'|&#039;)s(.*)/": "$1$2s$3"
    }
  },
  en_IN: {
    meta: {},
    patterns: {
      "/(.*)('|&#039;)s(?:'|&#039;)s(.*)/": "$1$2s$3"
    }
  },
  en_PI: {
    meta: {},
    patterns: {
      "/(.*)('|&#039;)s(?:'|&#039;)s(.*)/": "$1$2s$3"
    }
  },
  en_US: {
    meta: {},
    patterns: {
      "/(.*)('|&#039;)s(?:'|&#039;)s(.*)/": "$1$2s$3"
    }
  },
  tr_TR: {
    meta: {
      "/_C/": "(ş|ç|b|c|d|f|g|ğ|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|Ğ|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z)",
      "/_T/": "(ş|ç|p|t|k|s)",
      "/_V/": "(a|e|i|o|u|A|E|I|O|U|ä|ö|y|Ä|Ö|Y)"
    },
    patterns: {
      "/&#039;/": "'",
      "/(‘|’)/": "'",
      "/((a|ı|A|I|u|o|U|O)_C*) de\\/da_E/": "$1 da$4",
      "/((e|i|E|İ|ö|ü|Ö|Ü)_C*) de\\/da_E/": "$1 de$4",
      "/((a|ı|A|I|u|o|U|O)_C*_T)'Da(ki|n|)_E/": "$1'ta$5$6",
      "/((e|i|E|İ|ö|ü|Ö|Ü)_C*_T)'Da(ki|n|)_E/": "$1'te$5$6",
      "/((a|ı|A|I|u|o|U|O)_C*)'Da(ki|n|)_E/": "$1'da$4$5",
      "/((e|i|E|İ|ö|ü|Ö|Ü)_C*)'Da(ki|n|)_E/": "$1'de$4$5",
      "/(e|i|E|İ)'\\(n\\)in_E/": "$1'nin$2",
      "/(a|ı|A|I)'\\(n\\)in_E/": "$1'nın$2",
      "/(ö|ü|Ö|Ü)'\\(n\\)in_E/": "$1'nün$2",
      "/([uoUO])'\\(n\\)in_E/": "$1'nun$2",
      "/(_Cy)'\\(n\\)in_E/": "$1'nin$3",
      "/((e|i|E|İ)_C+)'\\(n\\)in_E/": "$1'in$4",
      "/((a|ı|A|I)_C+)'\\(n\\)in_E/": "$1'ın$4",
      "/((ö|ü|Ö|Ü)_C+)'\\(n\\)in_E/": "$1'ün$4",
      "/([uoUO]_C+)'\\(n\\)in_E/": "$1'un$3",
      "/(e|i|E|İ)'\\(y\\)e_E/": "$1'ye$2",
      "/(a|ı|A|I)'\\(y\\)e_E/": "$1'ya$2",
      "/(ö|ü|Ö|Ü)'\\(y\\)e_E/": "$1'ye$2",
      "/([uoUO])'\\(y\\)e_E/": "$1'ya$2",
      "/(_Cy)'\\(y\\)e_E/": "$1'ye$3",
      "/((e|i|E|İ)_C+)'\\(y\\)e_E/": "$1'e$4",
      "/((a|ı|A|I)_C+)'\\(y\\)e_E/": "$1'a$4",
      "/((ö|ü|Ö|Ü)_C+)'\\(y\\)e_E/": "$1'e$4",
      "/([uoUO]_C+)'\\(y\\)e_E/": "$1'a$3",
      "/(e|i|E|İ)'\\(y\\)i_E/": "$1'yi$2",
      "/(a|ı|A|I)'\\(y\\)i_E/": "$1'yı$2",
      "/(ö|ü|Ö|Ü)'\\(y\\)i_E/": "$1'yü$2",
      "/([uoUO])'\\(y\\)i_E/": "$1'yu$2",
      "/(_Cy)'\\(y\\)i_E/": "$1'yi$3",
      "/((e|i|E|İ)_C+)'\\(y\\)i_E/": "$1'i$4",
      "/((a|ı|A|I)_C+)'\\(y\\)i_E/": "$1'ı$4",
      "/((ö|ü|Ö|Ü)_C+)'\\(y\\)i_E/": "$1'ü$4",
      "/([uoUO]_C+)'\\(y\\)i_E/": "$1'u$3",
      "/'Da(ki|n|)_E/": "'da$1$2",
      "/'\\(n\\)in_E/": "'in$1",
      "/'\\(y\\)e_E/": "'e$1",
      "/'\\(y\\)i_E/": "'i$1",
      "/ de\\/da_E/": " de$1"
    }
  },
  sv_SE: {
    meta: {},
    patterns: {
      "/([szx])s_E/": "$1$2"
    }
  },
  de_DE: {
    meta: {},
    patterns: {
      "/(ß|s|z|x)s_E/": "$1$2"
    }
  },
  nb_NO: {
    meta: {},
    patterns: {
      "/([szx])s_E/": "$1'$2"
    }
  },
  da_DK: {
    meta: {
      "/_U/": "(Ø|Å|Æ)"
    },
    patterns: {
      "/([szxSZX])s_E/": "$1'$2",
      "/([A-Z]|[0-9]|_U)s_E/": "$1's$3"
    }
  },
  ar_AR: {
    meta: {
      "/_RTL/": "(([֐-ֿ]|[׀-߿]))",
      "/_Delim/": "(‏)"
    },
    patterns: {
      "/ة_Delim_RTL/": "ت$2",
      "/_RTL_Delim(\\s*)_RTL/": "$1$4$5"
    }
  },
  ca_ES: {
    meta: {
      "/_C/": "[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z]",
      "/_V/": "[a|e|i|o|u|A|E|I|O|U]"
    },
    patterns: {
      "/_By ([Ii]|[Hh]i[^e])/": "$1e $2",
      "/_Bo ([Oo]|[Hh]o)/": "$1u $2"
    },
    male: {
      "/(.)(_C.*)/": "$1el $2",
      "/(.)(_V.*)/": "$1l'$2",
      "/^(_C.*)/": "El $1",
      "/^(_V.*)/": "L'$1"
    },
    female: {
      "/(.)(_C.*)/": "$1la $2",
      "/(.)(_V.*)/": "$1l'$2",
      "/^(_C.*)/": "La $1",
      "/^(_V.*)/": "L'$1"
    },
    unknown: {
      "/(.)(_C.*)/": "$1el $2",
      "/(.)(_V.*)/": "$1l'$2",
      "/^(_C.*)/": "El $1",
      "/^(_V.*)/": "L'$1"
    }
  },
  es_LA: {
    meta: {},
    patterns: {
      "/_By ([Ii]|[Hh]i[^e])/": "$1e $2",
      "/_Bo ([Oo]|[Hh]o)/": "$1u $2"
    }
  },
  es_CL: {
    meta: {},
    patterns: {
      "/_By ([Ii]|[Hh]i[^e])/": "$1e $2",
      "/_Bo ([Oo]|[Hh]o)/": "$1u $2"
    }
  },
  es_CO: {
    meta: {},
    patterns: {
      "/_By ([Ii]|[Hh]i[^e])/": "$1e $2",
      "/_Bo ([Oo]|[Hh]o)/": "$1u $2"
    }
  },
  es_ES: {
    meta: {},
    patterns: {
      "/_By ([Ii]|[Hh]i[^e])/": "$1e $2",
      "/_Bo ([Oo]|[Hh]o)/": "$1u $2"
    }
  },
  es_MX: {
    meta: {},
    patterns: {
      "/_By ([Ii]|[Hh]i[^e])/": "$1e $2",
      "/_Bo ([Oo]|[Hh]o)/": "$1u $2"
    }
  },
  es_VE: {
    meta: {},
    patterns: {
      "/_By ([Ii]|[Hh]i[^e])/": "$1e $2",
      "/_Bo ([Oo]|[Hh]o)/": "$1u $2"
    }
  },
  sk_SK: {
    meta: {},
    patterns: {
      "/_B(s|z|S|Z) (s|š|z|ž|S|Š|Z|Ž)/": "$1$2o $3",
      "/_B(v|V) (f|v|F|V)/": "$1$2o $3",
      "/_B(k|K) (g|k|G|K)/": "$1$2u $3"
    }
  },
  bg_BG: {
    meta: {},
    patterns: {
      "/_B(с|С) (с|С|з|З)/": "$1$2ъс $3",
      "/_B(в|В) (в|В|ф|Ф)/": "$1$2ъв $3"
    }
  },
  fb_HX: {
    meta: {
      "/_C/": "[ş|ç|b|c|d|f|g|ğ|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|Ğ|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z]",
      "/_T/": "[ş|ç|p|t|k|s]",
      "/_V/": "[a|e|i|o|u|A|E|I|O|U|ä|ö|y|Ä|Ö|Y]"
    },
    patterns: {
      "/_By _C/": "$1i $2",
      "/_By _V/": "$1e $2",
      "/(_C[^\\s]*)/": "el $1",
      "/(_C[^\\s]*)/": "la $1",
      "/(_V[^\\s]*)/": "l'$1"
    }
  }
};
var i = {
  "/_B/": "([.,!?\\s]|^)",
  "/_E/": "([.,!?\\s]|$)"
};
var a = {
  "/_([^]*)/": "javascript"
};
var o = {
  meta: {},
  patterns: {}
};
var s = {
  get: function (e) {
    var n = r[e == null ? "en_US" : e] || o;
    return {
      meta: t({}, n.meta, i),
      patterns: t({}, n.patterns, a)
    };
  }
};
module.exports = s;