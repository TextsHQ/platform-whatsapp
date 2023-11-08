var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.L10n = undefined;
var i = r(require("./395654.js"));
var a = require("./256354.js");
var o = require("./4061.js");
var s = require("./141729.js");
var l = r(require("./295313.js"));
var u = r(require("./717429.js"));
var c = r(require("./99281.js"));
var d = r(require("./556869.js"));
var p = r(require("./286816.js"));
var f = r(require("../vendor/156755.js"));
var _ = r(require("../vendor/997331.js"));
var g = r(require("../vendor/730381.js"));
const m = new Set(["⁦", "‪"]);
const h = new Set(["ar", "ar-XB", "fa", "ur", "he", "dv", "ku"]);
const y = new Set(["fa"]);
const E = "٠١٢٣٤٥٦٧٨٩".split("");
function S(e) {
  return E[parseInt(e, 10)];
}
const v = (0, d.default)("Unimplemented method");
class T extends i.default {
  constructor(e, t, n) {
    super();
    if (!e || !t) {
      throw v;
    }
    this._locale = e;
    this.localeStrings = {};
    this.localeStrings[a.DEFAULT_LOCALE] = t;
    this.fbtStrings = {};
    this.fbtStrings[a.DEFAULT_LOCALE] = {
      en_GB: {}
    };
    this.markTranslations = n;
    this.customizeMoment();
  }
  getLocale() {
    throw v;
  }
  getFullLocale() {
    throw v;
  }
  getFbtTranslations() {
    throw v;
  }
  setLocale() {
    throw v;
  }
  normalizeLocale(e) {
    const t = e.replace(/-/g, "_").toLowerCase();
    const n = this._getTranslationFilename(t);
    if (n) {
      return n;
    }
    let r = t;
    for (; r;) {
      r = r.split("_").slice(0, -1).join("_");
      const e = r && this._getTranslationFilename(r);
      if (e) {
        return e;
      }
    }
  }
  isLocaleSupported(e) {
    return !!e && !!this.normalizeLocale(e);
  }
  _getTranslationFilename(e) {
    const t = u.default[e] || e;
    return c.default[t];
  }
  isRTL() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLocale();
    return h.has(e);
  }
  LR(e, t) {
    if (this.isRTL()) {
      return t;
    } else {
      return e;
    }
  }
  embedDir(e) {
    if (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.isRTL()) {
      return this.embedRTL(e);
    } else {
      return this.embedLTR(e);
    }
  }
  embedLTR(e) {
    return "‪" + e + "‬";
  }
  embedRTL(e) {
    return "‫" + e + "‬";
  }
  isolateLTR(e) {
    return "⁦" + e + "⁩";
  }
  isolateRTL(e) {
    return "⁧" + e + "⁩";
  }
  forceLTR(e) {
    return "‎" + e;
  }
  forceRTL(e) {
    return "‏" + e;
  }
  t_DO_NOT_USE(e, t, n) {
    return this.t(e, t, n);
  }
  t(e, t, n) {
    if (typeof e != "number") {
      __LOG__(3)`l10n.t was called with an unprocessed id (${e}). If you just added a string on local, restarting your build may address the issue.`;
    }
    const r = e;
    const i = t != null ? t._plural : null;
    let o = n || this.getLocale();
    if (!this.localeStrings[o]) {
      o = a.DEFAULT_LOCALE;
    }
    let s = this._getString(r, o, i);
    if (this.markTranslations) {
      if (s) {
        if (o === a.DEFAULT_LOCALE) {
          s = "[" + s + "]";
        }
      } else {
        s = "!!" + r + "!!";
        __LOG__(2)`l10n:t string key "${r}" not found`;
      }
    }
    if (!s) {
      s = this._getString(r, a.DEFAULT_LOCALE, i);
    }
    if (!s) {
      __LOG__(2)`l10n:t string key "${r}" fallback failed`;
    }
    for (const e in t) {
      if (!t.hasOwnProperty(e) || e === "_plural") {
        continue;
      }
      const n = new RegExp("__" + e + "__", "g");
      let r;
      r = typeof t[e] == "string" && m.has(t[e].slice(0, 1)) ? t[e] : this.n(t[e], o);
      s = s.replace(n, r);
    }
    return s;
  }
  _getString(e, t, n) {
    const r = this.localeStrings[t] || this.localeStrings[a.DEFAULT_LOCALE];
    if (r == null) {
      throw (0, d.default)(`Couldn't find translations for locale ${t} or default (${a.DEFAULT_LOCALE})`);
    }
    if (!Array.isArray(r)) {
      throw (0, d.default)("Unexpected locale format.");
    }
    const [i, o] = r;
    const s = i[e] || "";
    if (n == null) {
      return s;
    }
    const u = l.default[t];
    if (u == null) {
      return s;
    }
    const c = u.numbers[u.plurals(n)];
    if (c === 1) {
      return s;
    }
    return o[u.numbers.length === 2 && c === 2 ? e.toString() : `${e}_${c}`] || s;
  }
  useArabicScriptDigits(e) {
    return y.has(e || this.getLocale());
  }
  isLatinAlphabetLanguage(e) {
    return _.default.isLatin(this.removeAccents(e));
  }
  d(e, t) {
    const n = s.l10nNumberFormattersRegister.get(this.getFullLocale());
    if (n != null && typeof e == "number") {
      return n.format(e, this.getFullLocale());
    }
    const r = typeof e == "number" && (e >= 1000000 || e >= 1000 && e < 10000) ? 1 : 0;
    return this.n(e, t, {
      notation: "compact",
      roundingMode: "trunc",
      trailingZeroDisplay: "stripIfInteger",
      minimumFractionDigits: r,
      maximumFractionDigits: r
    });
  }
  n(e, t, n) {
    const r = e;
    if (typeof r == "number") {
      return Intl.NumberFormat(this.getLocale(), n).format(r);
    } else if (this.useArabicScriptDigits(t)) {
      return r.toString().replace(/[0-9]/g, S);
    } else {
      return r;
    }
  }
  filesize(e) {
    const t = e > 1073741824 ? 1 : 0;
    const n = this.getLocale();
    return this.n((0, f.default)(e, {
      base: 2,
      round: t,
      locale: n,
      symbols: {
        B: p.default._("B", null, {
          hk: "3AYnmR"
        }).toString(),
        KB: p.default._("kB", null, {
          hk: "2B2zId"
        }).toString(),
        MB: p.default._("MB", null, {
          hk: "2L5p7U"
        }).toString(),
        GB: p.default._("GB", null, {
          hk: "3iL2vp"
        }).toString(),
        KiB: p.default._("kB", null, {
          hk: "2B2zId"
        }).toString(),
        MiB: p.default._("MB", null, {
          hk: "2L5p7U"
        }).toString(),
        GiB: p.default._("GB", null, {
          hk: "3iL2vp"
        }).toString()
      }
    }));
  }
  normalizeForm() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return (0, o.normalizeForm)(e);
  }
  removeAccents() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return (0, o.removeAccents)(e);
  }
  accentFold() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return this.removeAccents(e).toLowerCase();
  }
  customizeMoment() {
    g.default.relativeTimeRounding(Math.floor);
    g.default.relativeTimeThreshold("s", 60);
    g.default.relativeTimeThreshold("m", 60);
    g.default.relativeTimeThreshold("h", 24);
  }
}
exports.L10n = T;