var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
r(require("../vendor/435161.js"));
var a = require("./250655.js");
var o = require("./8304.js");
var s = require("./904086.js");
var l = require("./966944.js");
r(require("./349488.js"));
var u = r(require("./97359.js"));
var c = require("./256354.js");
var d = require("./4061.js");
var p = require("./448376.js");
var f = require("./464175.js");
var _ = r(require("./953113.js"));
var g = require("./755985.js");
var m = require("./368170.js");
var h = require("../vendor/548360.js");
var y = r(require("../vendor/730381.js"));
var E = r(require("./627162.js"));
const S = self.location.href;
if (S && S.includes("/%F0%9F%8C%90/")) {
  Promise.resolve().then(require.bind(require, 79291)).then(e => {
    let {
      default: t
    } = e;
    if (t.canMuckHistory()) {
      window.history.replaceState({}, "", "/");
    }
  });
}
const v = "en-GB";
const T = {
  LTR: "LTR",
  RTL: "RTL"
};
const M = {
  LTR: "style",
  RTL: "style_rtl"
};
const A = c.L10N_PRIORITY;
class b extends l.L10n {
  constructor() {
    super({
      l: c.DEFAULT_LOCALE,
      priority: A.DEFAULT,
      loc: c.DEFAULT_LOCALE
    }, (0, u.default)(require("./159715.js")), E.default ? E.default.getMarkTranslations() : c.MARK_TRANSLATIONS_ENABLED);
    {
      if ((0, g.isWorker)()) {
        return void __LOG__(3)`l10n should not be included in worker!`;
      }
      const e = function () {
        const e = document.querySelector("html");
        if (e == null) {
          return undefined;
        } else {
          return e.getAttribute("loc");
        }
      }();
      const t = {};
      if (this._considerLocale(t, e, A.PREVIOUS)) {
        this.downloadAndSetTranslation(t);
      }
    }
  }
  getLocale() {
    return this._locale.l;
  }
  getFbtTranslations() {
    return this.fbtStrings[this._locale.l];
  }
  getFullLocale() {
    return this._locale.loc.replace("_", "-");
  }
  _getFBTLocale() {
    return (0, p.normalizeLocaleToFBTLocale)(this.getLocale());
  }
  getLanguage() {
    return (0, d.getLanguageCodeFromLocale)(this.getFullLocale());
  }
  getRegion() {
    return (0, d.getRegionCodeFromLocale)(this.getFullLocale());
  }
  normalizeForm() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (!m.UA.isTrident) {
      return e.normalize("NFKD");
    }
    try {
      return e.normalize("NFKD");
    } catch (t) {
      return e;
    }
  }
  setLocale(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = {
        l: n._locale.l,
        priority: n._locale.priority,
        loc: n._locale.l
      };
      if (n._considerLocale(r, e, t)) {
        return n.downloadAndSetTranslation(r);
      } else {
        return Promise.resolve();
      }
    })();
  }
  isLocaleSupported(e) {
    try {
      return super.isLocaleSupported(e) && (!self.Intl || Array.isArray(self.Intl.Collator.supportedLocalesOf(e)));
    } catch (e) {
      return false;
    }
  }
  init(e) {
    var t;
    this._initFbt();
    const n = {
      l: c.DEFAULT_LOCALE,
      priority: A.DEFAULT,
      loc: c.DEFAULT_LOCALE
    };
    this._considerLocale(n, e, A.PREVIOUS);
    this._considerLocale(n, function () {
      let e = (S || self.location.href || "").split("/%F0%9F%8C%90/");
      if (e.length > 1) {
        return e[1].split("/")[0];
      } else {
        return undefined;
      }
    }(), A.URL);
    this._considerLocale(n, navigator.language, A.BROWSER);
    if ((t = navigator.languages) === null || t === undefined ? undefined : t.length) {
      for (let e = 0; e < navigator.languages.length && !this._considerLocale(n, navigator.languages[e], A.BROWSER); e++);
    }
    return this.downloadAndSetTranslation(n);
  }
  _initFbt() {
    const e = this.markTranslations ? e => this.getLocale() === c.DEFAULT_LOCALE ? new h.FbtResult(["{", ...e.contents, "}"]) : new h.FbtResult(e.contents) : undefined;
    (0, h.init)({
      translations: this.getFbtTranslations(),
      hooks: {
        getViewerContext: () => ({
          locale: this._getFBTLocale()
        }),
        getFbsResult: e,
        getFbtResult: e,
        getNumberFormatConfigOverride: () => this.getLocale() === "ar" ? {
          decimalSeparator: ".",
          numberDelimiter: ",",
          minDigitsForThousandsSeparator: 4,
          standardDecimalPatternInfo: {
            primaryGroupSize: 3,
            secondaryGroupSize: 3
          },
          numberingSystemData: null
        } : null
      }
    });
  }
  _considerLocale(e, t, n) {
    if (e.priority != null && n < e.priority) {
      return;
    }
    if (t == null || t === this.getLocale()) {
      return;
    }
    const r = this.normalizeLocale(t);
    if (r) {
      e.l = r;
      e.priority = n;
      e.loc = t;
      return e;
    } else {
      return undefined;
    }
  }
  downloadAppLocale(e) {
    if (this.localeStrings[e]) {
      return Promise.resolve(this.localeStrings[e]);
    } else {
      return (0, s.promiseLoop)(function () {
        var t = (0, i.default)(function* (t, n, r) {
          const i = (0, o.delayMs)((0, a.expBackoff)(r, 120000, 1000, 0.1));
          const s = yield (0, f.getLangModule)(e);
          try {
            const e = (0, u.default)(s);
            const [n] = yield e();
            return t(n);
          } catch (t) {
            if (r === 10) {
              __LOG__(4, undefined, new Error(), true)`${r} times, locale is ${e}`;
              SEND_LOGS("downadAppLocale failure");
            }
            return i;
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      }());
    }
  }
  downloadFbtLocaleAndSetCache(e) {
    var t = this;
    if (this.fbtStrings[e]) {
      return Promise.resolve(this.fbtStrings[e]);
    } else {
      return (0, s.promiseLoop)(function () {
        var n = (0, i.default)(function* (n, r, i) {
          const s = (0, o.delayMs)((0, a.expBackoff)(i, 120000, 1000, 0.1));
          const l = yield (0, f.getLangModule)(e);
          const c = (0, u.default)(l);
          try {
            const [, r] = yield c();
            t.fbtStrings[e] = r;
            return n(r);
          } catch (t) {
            if (i === 10) {
              __LOG__(4, undefined, new Error(), true)`${i} times, locale is ${e}`;
              SEND_LOGS("downadAppLocale failure");
            }
            return s;
          }
        });
        return function () {
          return n.apply(this, arguments);
        };
      }());
    }
  }
  _downloadMomentResourceFile(e) {
    return (0, i.default)(function* () {
      try {
        const t = yield (0, f.getMomentLocaleModule)(e);
        return (0, u.default)(t);
      } catch (t) {
        __LOG__(2)`l10n:_downloadMomentResourceFile failed to download resource ${e}`;
      }
    })();
  }
  downloadMomentLocale(e) {
    var t = this;
    const {
      l: n,
      loc: r
    } = e;
    if (y.default.locale() === r) {
      return Promise.resolve();
    } else {
      return (0, s.promiseLoop)(function () {
        var e = (0, i.default)(function* (e, i, s) {
          const l = (0, o.delayMs)((0, a.expBackoff)(s, 120000, 1000, 0.1));
          const u = r.replace(/_/g, "-");
          let d;
          let p;
          if (u === c.DEFAULT_MOMENT_LOCALE) {
            d = () => Promise.resolve();
            p = c.DEFAULT_MOMENT_LOCALE;
          } else {
            const e = [];
            e.push(u);
            if (n === c.DEFAULT_LOCALE) {
              e.push(v);
            } else {
              const t = n.replace(/_/g, "-");
              e.push(t);
              if (_.default[t] != null) {
                e.push(_.default[t]);
              }
            }
            e.push(v);
            for (let n = 0; n < e.length; ++n) {
              d = yield t._downloadMomentResourceFile(e[n]);
              if (d != null) {
                p = e[n];
                break;
              }
            }
            if (d == null) {
              __LOG__(3)`Could not fetch moment locales, using default en-US`;
              d = () => Promise.resolve();
              p = c.DEFAULT_MOMENT_LOCALE;
            }
          }
          try {
            yield d();
            return e(p);
          } catch (e) {
            if (s === 10) {
              __LOG__(4, undefined, new Error(), true)`${s} times, locale is (${n}, ${r})`;
              SEND_LOGS("downloadMomentLocale failure");
            }
            return l;
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
    }
  }
  updateFbtContext(e) {
    if (e != null) {
      h.FbtTranslations.registerTranslations(e);
    }
  }
  downloadAndSetTranslation(e) {
    const {
      l: t,
      loc: r
    } = this._locale;
    const {
      l: i,
      loc: a
    } = e;
    const o = this.isRTL(i);
    const s = o ? T.RTL : T.LTR;
    if (document.getElementById(M[s]) && a === r) {
      return Promise.resolve();
    }
    const l = self.performance.now();
    let d;
    let p;
    return this._fetchPromise = Promise.all([this.downloadAppLocale(i), this.downloadFbtLocaleAndSetCache(i), this.downloadMomentLocale(e)]).then(t => {
      let [n, r, o] = t;
      d = self.performance.now();
      this.localeStrings[i] = n;
      this._locale = e;
      this.trigger("set_collator", i);
      if (o) {
        y.default.locale(o);
        __LOG__(2)`l10n:moment locale updated to: ${o}`;
      }
      this.customizeMomentLocale(y.default.locale());
      if (document.documentElement) {
        document.documentElement.setAttribute("lang", e.l);
      }
      if (document.documentElement) {
        document.documentElement.setAttribute("dir", s);
      }
      this.updateFbtContext(r);
      this.trigger("locale_change", {
        l: i,
        loc: a
      });
    }).then(() => {
      p = self.performance.now();
      __LOG__(2)`l10n:locale updated: (${t}, ${r}) > (${i}, ${a}), Fetch: ${d - l}ms, Apply: ${p - d}ms`;
      if ((0, u.default)(require("./478885.js")).supported) {
        var e;
        const t = (0, u.default)(require("./537152.js"));
        const r = (0, u.default)(require("./647349.js"));
        if ((e = navigator.serviceWorker) === null || e === undefined ? undefined : e.controller) {
          t.request(navigator.serviceWorker.controller, r.SET_L10N, {
            isRTL: o,
            locale: i
          }).catch(() => {});
        }
      }
    }).catch(() => {
      __LOG__(2)`l10n:locale update error: (${t}, ${r}) > (${i}, ${a})`;
      return this.downloadAndSetTranslation({
        l: c.DEFAULT_LOCALE,
        priority: A.DEFAULT,
        loc: c.DEFAULT_LOCALE
      });
    });
  }
  _updateSpellChecker() {}
  _updateElectronMain() {}
  customizeMomentLocale(e) {
    const t = c.LOCALE_CUSTOMIZATIONS[e];
    if (t) {
      y.default.locale(e, t);
    }
  }
}
b.Dir = T;
var C = new b();
exports.default = C;