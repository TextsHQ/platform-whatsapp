var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHOULD_USE_MOMENT_LOCALE_FORMAT = exports.MARK_TRANSLATIONS_ENABLED = exports.LOCALE_DATE_TIME_CUSTOMIZATIONS = exports.LOCALE_CUSTOMIZATIONS = exports.LOCALES_THAT_PREFER_24HOUR_TIME = exports.L10N_PRIORITY = exports.DEFAULT_MOMENT_LOCALE = exports.DEFAULT_LOCALE = undefined;
var i = r(require("../vendor/81109.js"));
exports.L10N_PRIORITY = {
  SAVED: 6,
  PHONE: 5,
  PREVIOUS: 4,
  URL: 3,
  BROWSER: 2,
  DEFAULT: 1
};
exports.DEFAULT_LOCALE = "en";
exports.DEFAULT_MOMENT_LOCALE = "en-US";
const a = new Set(["ur"]);
exports.SHOULD_USE_MOMENT_LOCALE_FORMAT = a;
const o = new Set(["af", "az", "ca", "cs", "da", "de", "el", "et", "fi", "fr", "he", "hr", "hu", "id", "it", "kk", "lt", "mk", "nb", "pl", "pt", "pt-BR", "ro", "ru", "sk", "sl", "sr", "sv", "th", "tr", "uk"]);
exports.LOCALES_THAT_PREFER_24HOUR_TIME = o;
const s = {
  "zh-tw": {
    longDateFormat: {
      LT: "Ah:mm",
      LTS: "Ah:m:s",
      L: "YYYY年MMMD日",
      LL: "YYYY年MMMD日",
      LLL: "YYYY年MMMD日LT",
      LLLL: "YYYY年MMMD日ddddLT",
      l: "YYYY年MMMD日",
      ll: "YYYY年MMMD日",
      lll: "YYYY年MMMD日LT",
      llll: "YYYY年MMMD日ddddLT"
    }
  },
  "zh-cn": {
    longDateFormat: {
      LT: "Ah:mm",
      LTS: "Ah:m:s",
      L: "YYYY-MM-DD",
      LL: "YYYY年MMMD日",
      LLL: "YYYY年MMMD日LT",
      LLLL: "YYYY年MMMD日ddddLT",
      l: "YYYY年MMMD日",
      ll: "YYYY年MMMD日",
      lll: "YYYY年MMMD日LT",
      llll: "YYYY年MMMD日ddddLT"
    }
  },
  ar: {
    longDateFormat: {
      LT: "h:mm A",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY LT",
      LLLL: "dddd D MMMM YYYY LT"
    }
  },
  ta: {
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY, h:mm A"
    },
    preparse: null,
    postformat: null,
    meridiem: null,
    meridiemHour: null
  },
  nl: {
    longDateFormat: {
      l: "DD-MM-YYYY",
      L: "DD-MM-YYYY"
    }
  },
  "en-ie": {
    longDateFormat: {
      l: "DD/MM/YYYY",
      L: "DD/MM/YYYY"
    }
  },
  hi: {
    preparse: e => e,
    postformat: e => e,
    longDateFormat: {
      LT: "A h:mm बजे",
      LTS: "A h:mm:ss बजे",
      LLL: "D MMMM YYYY A h:mm बजे",
      LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
    },
    meridiem: (e, t) => e === 0 && t === 0 ? "मध्यरात्रि" : e >= 20 || e < 4 ? "रात" : e >= 4 && e < 12 ? "सुबह" : e >= 12 && e < 16 ? "दोपहर" : "शाम"
  }
};
exports.LOCALE_DATE_TIME_CUSTOMIZATIONS = s;
const l = (0, i.default)((0, i.default)({}, s), {
  "pt-pt": {
    weekdays: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
  }
});
exports.LOCALE_CUSTOMIZATIONS = l;
exports.MARK_TRANSLATIONS_ENABLED = false;