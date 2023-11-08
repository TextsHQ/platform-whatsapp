(module = require.nmd(module)).exports = function () {
  "use strict";

  var t;
  var n;
  function r() {
    return t.apply(null, arguments);
  }
  function i(e) {
    t = e;
  }
  function a(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
  }
  function o(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function s(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function u(e) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(e).length === 0;
    }
    var t;
    for (t in e) {
      if (s(e, t)) {
        return false;
      }
    }
    return true;
  }
  function l(e) {
    return e === undefined;
  }
  function c(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
  }
  function f(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function d(e, t) {
    var n;
    var r = [];
    var i = e.length;
    for (n = 0; n < i; ++n) {
      r.push(t(e[n], n));
    }
    return r;
  }
  function h(e, t) {
    for (var n in t) {
      if (s(t, n)) {
        e[n] = t[n];
      }
    }
    if (s(t, "toString")) {
      e.toString = t.toString;
    }
    if (s(t, "valueOf")) {
      e.valueOf = t.valueOf;
    }
    return e;
  }
  function p(e, t, n, r) {
    return qn(e, t, n, r, true).utc();
  }
  function m() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function v(e) {
    if (e._pf == null) {
      e._pf = m();
    }
    return e._pf;
  }
  function g(e) {
    if (e._isValid == null) {
      var t = v(e);
      var r = n.call(t.parsedDateParts, function (e) {
        return e != null;
      });
      var i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
      if (e._strict) {
        i = i && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined;
      }
      if (Object.isFrozen != null && Object.isFrozen(e)) {
        return i;
      }
      e._isValid = i;
    }
    return e._isValid;
  }
  function y(e) {
    var t = p(NaN);
    if (e != null) {
      h(v(t), e);
    } else {
      v(t).userInvalidated = true;
    }
    return t;
  }
  n = Array.prototype.some ? Array.prototype.some : function (e) {
    var t;
    var n = Object(this);
    var r = n.length >>> 0;
    for (t = 0; t < r; t++) {
      if (t in n && e.call(this, n[t], t, n)) {
        return true;
      }
    }
    return false;
  };
  var b = r.momentProperties = [];
  var w = false;
  function _(e, t) {
    var n;
    var r;
    var i;
    var a = b.length;
    if (!l(t._isAMomentObject)) {
      e._isAMomentObject = t._isAMomentObject;
    }
    if (!l(t._i)) {
      e._i = t._i;
    }
    if (!l(t._f)) {
      e._f = t._f;
    }
    if (!l(t._l)) {
      e._l = t._l;
    }
    if (!l(t._strict)) {
      e._strict = t._strict;
    }
    if (!l(t._tzm)) {
      e._tzm = t._tzm;
    }
    if (!l(t._isUTC)) {
      e._isUTC = t._isUTC;
    }
    if (!l(t._offset)) {
      e._offset = t._offset;
    }
    if (!l(t._pf)) {
      e._pf = v(t);
    }
    if (!l(t._locale)) {
      e._locale = t._locale;
    }
    if (a > 0) {
      for (n = 0; n < a; n++) {
        if (!l(i = t[r = b[n]])) {
          e[r] = i;
        }
      }
    }
    return e;
  }
  function x(e) {
    _(this, e);
    this._d = new Date(e._d != null ? e._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    if (w === false) {
      w = true;
      r.updateOffset(this);
      w = false;
    }
  }
  function S(e) {
    return e instanceof x || e != null && e._isAMomentObject != null;
  }
  function E(e) {
    if (r.suppressDeprecationWarnings === false && typeof console != "undefined" && console.warn) {
      console.warn("Deprecation warning: " + e);
    }
  }
  function k(e, t) {
    var n = true;
    return h(function () {
      if (r.deprecationHandler != null) {
        r.deprecationHandler(null, e);
      }
      if (n) {
        var i;
        var a;
        var o;
        var u = [];
        var l = arguments.length;
        for (a = 0; a < l; a++) {
          i = "";
          if (typeof arguments[a] == "object") {
            i += "\n[" + a + "] ";
            for (o in arguments[0]) {
              if (s(arguments[0], o)) {
                i += o + ": " + arguments[0][o] + ", ";
              }
            }
            i = i.slice(0, -2);
          } else {
            i = arguments[a];
          }
          u.push(i);
        }
        E(e + "\nArguments: " + Array.prototype.slice.call(u).join("") + "\n" + new Error().stack);
        n = false;
      }
      return t.apply(this, arguments);
    }, t);
  }
  var O;
  var N = {};
  function T(e, t) {
    if (r.deprecationHandler != null) {
      r.deprecationHandler(e, t);
    }
    if (!N[e]) {
      E(t);
      N[e] = true;
    }
  }
  function M(e) {
    return typeof Function != "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
  }
  function R(e) {
    var t;
    var n;
    for (n in e) {
      if (s(e, n)) {
        if (M(t = e[n])) {
          this[n] = t;
        } else {
          this["_" + n] = t;
        }
      }
    }
    this._config = e;
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }
  function A(e, t) {
    var n;
    var r = h({}, e);
    for (n in t) {
      if (s(t, n)) {
        if (o(e[n]) && o(t[n])) {
          r[n] = {};
          h(r[n], e[n]);
          h(r[n], t[n]);
        } else if (t[n] != null) {
          r[n] = t[n];
        } else {
          delete r[n];
        }
      }
    }
    for (n in e) {
      if (s(e, n) && !s(t, n) && o(e[n])) {
        r[n] = h({}, r[n]);
      }
    }
    return r;
  }
  function P(e) {
    if (e != null) {
      this.set(e);
    }
  }
  r.suppressDeprecationWarnings = false;
  r.deprecationHandler = null;
  O = Object.keys ? Object.keys : function (e) {
    var t;
    var n = [];
    for (t in e) {
      if (s(e, t)) {
        n.push(t);
      }
    }
    return n;
  };
  var C = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function D(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    if (M(r)) {
      return r.call(t, n);
    } else {
      return r;
    }
  }
  function U(e, t, n) {
    var r = "" + Math.abs(e);
    var i = t - r.length;
    return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
  }
  var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var L = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var j = {};
  var F = {};
  function z(e, t, n, r) {
    var i = r;
    if (typeof r == "string") {
      i = function () {
        return this[r]();
      };
    }
    if (e) {
      F[e] = i;
    }
    if (t) {
      F[t[0]] = function () {
        return U(i.apply(this, arguments), t[1], t[2]);
      };
    }
    if (n) {
      F[n] = function () {
        return this.localeData().ordinal(i.apply(this, arguments), e);
      };
    }
  }
  function B(e) {
    if (e.match(/\[[\s\S]/)) {
      return e.replace(/^\[|\]$/g, "");
    } else {
      return e.replace(/\\/g, "");
    }
  }
  function V(e) {
    var t;
    var n;
    var r = e.match(I);
    t = 0;
    n = r.length;
    for (; t < n; t++) {
      if (F[r[t]]) {
        r[t] = F[r[t]];
      } else {
        r[t] = B(r[t]);
      }
    }
    return function (t) {
      var i;
      var a = "";
      for (i = 0; i < n; i++) {
        a += M(r[i]) ? r[i].call(t, e) : r[i];
      }
      return a;
    };
  }
  function Y(e, t) {
    if (e.isValid()) {
      t = H(t, e.localeData());
      j[t] = j[t] || V(t);
      return j[t](e);
    } else {
      return e.localeData().invalidDate();
    }
  }
  function H(e, t) {
    var n = 5;
    function r(e) {
      return t.longDateFormat(e) || e;
    }
    for (L.lastIndex = 0; n >= 0 && L.test(e);) {
      e = e.replace(L, r);
      L.lastIndex = 0;
      n -= 1;
    }
    return e;
  }
  var $ = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function W(e) {
    var t = this._longDateFormat[e];
    var n = this._longDateFormat[e.toUpperCase()];
    if (t || !n) {
      return t;
    } else {
      this._longDateFormat[e] = n.match(I).map(function (e) {
        if (e === "MMMM" || e === "MM" || e === "DD" || e === "dddd") {
          return e.slice(1);
        } else {
          return e;
        }
      }).join("");
      return this._longDateFormat[e];
    }
  }
  var G = "Invalid date";
  function q() {
    return this._invalidDate;
  }
  var K = "%d";
  var X = /\d{1,2}/;
  function Z(e) {
    return this._ordinal.replace("%d", e);
  }
  var Q = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function J(e, t, n, r) {
    var i = this._relativeTime[n];
    if (M(i)) {
      return i(e, t, n, r);
    } else {
      return i.replace(/%d/i, e);
    }
  }
  function ee(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    if (M(n)) {
      return n(t);
    } else {
      return n.replace(/%s/i, t);
    }
  }
  var te = {};
  function ne(e, t) {
    var n = e.toLowerCase();
    te[n] = te[n + "s"] = te[t] = e;
  }
  function re(e) {
    if (typeof e == "string") {
      return te[e] || te[e.toLowerCase()];
    } else {
      return undefined;
    }
  }
  function ie(e) {
    var t;
    var n;
    var r = {};
    for (n in e) {
      if (s(e, n) && (t = re(n))) {
        r[t] = e[n];
      }
    }
    return r;
  }
  var ae = {};
  function oe(e, t) {
    ae[e] = t;
  }
  function se(e) {
    var t;
    var n = [];
    for (t in e) {
      if (s(e, t)) {
        n.push({
          unit: t,
          priority: ae[t]
        });
      }
    }
    n.sort(function (e, t) {
      return e.priority - t.priority;
    });
    return n;
  }
  function ue(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }
  function le(e) {
    if (e < 0) {
      return Math.ceil(e) || 0;
    } else {
      return Math.floor(e);
    }
  }
  function ce(e) {
    var t = +e;
    var n = 0;
    if (t !== 0 && isFinite(t)) {
      n = le(t);
    }
    return n;
  }
  function fe(e, t) {
    return function (n) {
      if (n != null) {
        he(this, e, n);
        r.updateOffset(this, t);
        return this;
      } else {
        return de(this, e);
      }
    };
  }
  function de(e, t) {
    if (e.isValid()) {
      return e._d["get" + (e._isUTC ? "UTC" : "") + t]();
    } else {
      return NaN;
    }
  }
  function he(e, t, n) {
    if (e.isValid() && !isNaN(n)) {
      if (t === "FullYear" && ue(e.year()) && e.month() === 1 && e.date() === 29) {
        n = ce(n);
        e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Je(n, e.month()));
      } else {
        e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
      }
    }
  }
  function pe(e) {
    if (M(this[e = re(e)])) {
      return this[e]();
    } else {
      return this;
    }
  }
  function me(e, t) {
    if (typeof e == "object") {
      var n;
      var r = se(e = ie(e));
      var i = r.length;
      for (n = 0; n < i; n++) {
        this[r[n].unit](e[r[n].unit]);
      }
    } else if (M(this[e = re(e)])) {
      return this[e](t);
    }
    return this;
  }
  var ve;
  var ge = /\d/;
  var ye = /\d\d/;
  var be = /\d{3}/;
  var we = /\d{4}/;
  var _e = /[+-]?\d{6}/;
  var xe = /\d\d?/;
  var Se = /\d\d\d\d?/;
  var Ee = /\d\d\d\d\d\d?/;
  var ke = /\d{1,3}/;
  var Oe = /\d{1,4}/;
  var Ne = /[+-]?\d{1,6}/;
  var Te = /\d+/;
  var Me = /[+-]?\d+/;
  var Re = /Z|[+-]\d\d:?\d\d/gi;
  var Ae = /Z|[+-]\d\d(?::?\d\d)?/gi;
  var Pe = /[+-]?\d+(\.\d{1,3})?/;
  var Ce = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  function De(e, t, n) {
    ve[e] = M(t) ? t : function (e, r) {
      if (e && n) {
        return n;
      } else {
        return t;
      }
    };
  }
  function Ue(e, t) {
    if (s(ve, e)) {
      return ve[e](t._strict, t._locale);
    } else {
      return new RegExp(Ie(e));
    }
  }
  function Ie(e) {
    return Le(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, i) {
      return t || n || r || i;
    }));
  }
  function Le(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  ve = {};
  var je = {};
  function Fe(e, t) {
    var n;
    var r;
    var i = t;
    if (typeof e == "string") {
      e = [e];
    }
    if (c(t)) {
      i = function (e, n) {
        n[t] = ce(e);
      };
    }
    r = e.length;
    n = 0;
    for (; n < r; n++) {
      je[e[n]] = i;
    }
  }
  function ze(e, t) {
    Fe(e, function (e, n, r, i) {
      r._w = r._w || {};
      t(e, r._w, r, i);
    });
  }
  function Be(e, t, n) {
    if (t != null && s(je, e)) {
      je[e](t, n._a, n, e);
    }
  }
  var Ve;
  var Ye = 0;
  var He = 1;
  var $e = 2;
  var We = 3;
  var Ge = 4;
  var qe = 5;
  var Ke = 6;
  var Xe = 7;
  var Ze = 8;
  function Qe(e, t) {
    return (e % t + t) % t;
  }
  function Je(e, t) {
    if (isNaN(e) || isNaN(t)) {
      return NaN;
    }
    var n = Qe(t, 12);
    e += (t - n) / 12;
    if (n === 1) {
      if (ue(e)) {
        return 29;
      } else {
        return 28;
      }
    } else {
      return 31 - n % 7 % 2;
    }
  }
  Ve = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var t;
    for (t = 0; t < this.length; ++t) {
      if (this[t] === e) {
        return t;
      }
    }
    return -1;
  };
  z("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  z("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  });
  z("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  });
  ne("month", "M");
  oe("month", 8);
  De("M", xe);
  De("MM", xe, ye);
  De("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  });
  De("MMMM", function (e, t) {
    return t.monthsRegex(e);
  });
  Fe(["M", "MM"], function (e, t) {
    t[He] = ce(e) - 1;
  });
  Fe(["MMM", "MMMM"], function (e, t, n, r) {
    var i = n._locale.monthsParse(e, r, n._strict);
    if (i != null) {
      t[He] = i;
    } else {
      v(n).invalidMonth = e;
    }
  });
  var et = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  var tt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  var nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var rt = Ce;
  var it = Ce;
  function at(e, t) {
    if (e) {
      if (a(this._months)) {
        return this._months[e.month()];
      } else {
        return this._months[(this._months.isFormat || nt).test(t) ? "format" : "standalone"][e.month()];
      }
    } else if (a(this._months)) {
      return this._months;
    } else {
      return this._months.standalone;
    }
  }
  function ot(e, t) {
    if (e) {
      if (a(this._monthsShort)) {
        return this._monthsShort[e.month()];
      } else {
        return this._monthsShort[nt.test(t) ? "format" : "standalone"][e.month()];
      }
    } else if (a(this._monthsShort)) {
      return this._monthsShort;
    } else {
      return this._monthsShort.standalone;
    }
  }
  function st(e, t, n) {
    var r;
    var i;
    var a;
    var o = e.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      r = 0;
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      r = 0;
      for (; r < 12; ++r) {
        a = p([2000, r]);
        this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase();
        this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
      }
    }
    if (n) {
      if (t === "MMM") {
        if ((i = Ve.call(this._shortMonthsParse, o)) !== -1) {
          return i;
        } else {
          return null;
        }
      } else if ((i = Ve.call(this._longMonthsParse, o)) !== -1) {
        return i;
      } else {
        return null;
      }
    } else if (t === "MMM") {
      if ((i = Ve.call(this._shortMonthsParse, o)) !== -1 || (i = Ve.call(this._longMonthsParse, o)) !== -1) {
        return i;
      } else {
        return null;
      }
    } else if ((i = Ve.call(this._longMonthsParse, o)) !== -1 || (i = Ve.call(this._shortMonthsParse, o)) !== -1) {
      return i;
    } else {
      return null;
    }
  }
  function ut(e, t, n) {
    var r;
    var i;
    var a;
    if (this._monthsParseExact) {
      return st.call(this, e, t, n);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    r = 0;
    for (; r < 12; r++) {
      i = p([2000, r]);
      if (n && !this._longMonthsParse[r]) {
        this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i");
        this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i");
      }
      if (!(n || this._monthsParse[r])) {
        a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "");
        this._monthsParse[r] = new RegExp(a.replace(".", ""), "i");
      }
      if (n && t === "MMMM" && this._longMonthsParse[r].test(e)) {
        return r;
      }
      if (n && t === "MMM" && this._shortMonthsParse[r].test(e)) {
        return r;
      }
      if (!n && this._monthsParse[r].test(e)) {
        return r;
      }
    }
  }
  function lt(e, t) {
    var n;
    if (!e.isValid()) {
      return e;
    }
    if (typeof t == "string") {
      if (/^\d+$/.test(t)) {
        t = ce(t);
      } else if (!c(t = e.localeData().monthsParse(t))) {
        return e;
      }
    }
    n = Math.min(e.date(), Je(e.year(), t));
    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
    return e;
  }
  function ct(e) {
    if (e != null) {
      lt(this, e);
      r.updateOffset(this, true);
      return this;
    } else {
      return de(this, "Month");
    }
  }
  function ft() {
    return Je(this.year(), this.month());
  }
  function dt(e) {
    if (this._monthsParseExact) {
      if (!s(this, "_monthsRegex")) {
        pt.call(this);
      }
      if (e) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!s(this, "_monthsShortRegex")) {
        this._monthsShortRegex = rt;
      }
      if (this._monthsShortStrictRegex && e) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    }
  }
  function ht(e) {
    if (this._monthsParseExact) {
      if (!s(this, "_monthsRegex")) {
        pt.call(this);
      }
      if (e) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!s(this, "_monthsRegex")) {
        this._monthsRegex = it;
      }
      if (this._monthsStrictRegex && e) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    }
  }
  function pt() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t;
    var n;
    var r = [];
    var i = [];
    var a = [];
    for (t = 0; t < 12; t++) {
      n = p([2000, t]);
      r.push(this.monthsShort(n, ""));
      i.push(this.months(n, ""));
      a.push(this.months(n, ""));
      a.push(this.monthsShort(n, ""));
    }
    r.sort(e);
    i.sort(e);
    a.sort(e);
    t = 0;
    for (; t < 12; t++) {
      r[t] = Le(r[t]);
      i[t] = Le(i[t]);
    }
    for (t = 0; t < 24; t++) {
      a[t] = Le(a[t]);
    }
    this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
    this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
  }
  function mt(e) {
    if (ue(e)) {
      return 366;
    } else {
      return 365;
    }
  }
  z("Y", 0, 0, function () {
    var e = this.year();
    if (e <= 9999) {
      return U(e, 4);
    } else {
      return "+" + e;
    }
  });
  z(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  z(0, ["YYYY", 4], 0, "year");
  z(0, ["YYYYY", 5], 0, "year");
  z(0, ["YYYYYY", 6, true], 0, "year");
  ne("year", "y");
  oe("year", 1);
  De("Y", Me);
  De("YY", xe, ye);
  De("YYYY", Oe, we);
  De("YYYYY", Ne, _e);
  De("YYYYYY", Ne, _e);
  Fe(["YYYYY", "YYYYYY"], Ye);
  Fe("YYYY", function (e, t) {
    t[Ye] = e.length === 2 ? r.parseTwoDigitYear(e) : ce(e);
  });
  Fe("YY", function (e, t) {
    t[Ye] = r.parseTwoDigitYear(e);
  });
  Fe("Y", function (e, t) {
    t[Ye] = parseInt(e, 10);
  });
  r.parseTwoDigitYear = function (e) {
    return ce(e) + (ce(e) > 68 ? 1900 : 2000);
  };
  var vt = fe("FullYear", true);
  function gt() {
    return ue(this.year());
  }
  function yt(e, t, n, r, i, a, o) {
    var s;
    if (e < 100 && e >= 0) {
      s = new Date(e + 400, t, n, r, i, a, o);
      if (isFinite(s.getFullYear())) {
        s.setFullYear(e);
      }
    } else {
      s = new Date(e, t, n, r, i, a, o);
    }
    return s;
  }
  function bt(e) {
    var t;
    var n;
    if (e < 100 && e >= 0) {
      (n = Array.prototype.slice.call(arguments))[0] = e + 400;
      t = new Date(Date.UTC.apply(null, n));
      if (isFinite(t.getUTCFullYear())) {
        t.setUTCFullYear(e);
      }
    } else {
      t = new Date(Date.UTC.apply(null, arguments));
    }
    return t;
  }
  function wt(e, t, n) {
    var r = 7 + t - n;
    return -(7 + bt(e, 0, r).getUTCDay() - t) % 7 + r - 1;
  }
  function _t(e, t, n, r, i) {
    var a;
    var o;
    var s = 1 + (t - 1) * 7 + (7 + n - r) % 7 + wt(e, r, i);
    if (s <= 0) {
      o = mt(a = e - 1) + s;
    } else if (s > mt(e)) {
      a = e + 1;
      o = s - mt(e);
    } else {
      a = e;
      o = s;
    }
    return {
      year: a,
      dayOfYear: o
    };
  }
  function xt(e, t, n) {
    var r;
    var i;
    var a = wt(e.year(), t, n);
    var o = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
    if (o < 1) {
      r = o + St(i = e.year() - 1, t, n);
    } else if (o > St(e.year(), t, n)) {
      r = o - St(e.year(), t, n);
      i = e.year() + 1;
    } else {
      i = e.year();
      r = o;
    }
    return {
      week: r,
      year: i
    };
  }
  function St(e, t, n) {
    var r = wt(e, t, n);
    var i = wt(e + 1, t, n);
    return (mt(e) - r + i) / 7;
  }
  function Et(e) {
    return xt(e, this._week.dow, this._week.doy).week;
  }
  z("w", ["ww", 2], "wo", "week");
  z("W", ["WW", 2], "Wo", "isoWeek");
  ne("week", "w");
  ne("isoWeek", "W");
  oe("week", 5);
  oe("isoWeek", 5);
  De("w", xe);
  De("ww", xe, ye);
  De("W", xe);
  De("WW", xe, ye);
  ze(["w", "ww", "W", "WW"], function (e, t, n, r) {
    t[r.substr(0, 1)] = ce(e);
  });
  var kt = {
    dow: 0,
    doy: 6
  };
  function Ot() {
    return this._week.dow;
  }
  function Nt() {
    return this._week.doy;
  }
  function Tt(e) {
    var t = this.localeData().week(this);
    if (e == null) {
      return t;
    } else {
      return this.add((e - t) * 7, "d");
    }
  }
  function Mt(e) {
    var t = xt(this, 1, 4).week;
    if (e == null) {
      return t;
    } else {
      return this.add((e - t) * 7, "d");
    }
  }
  function Rt(e, t) {
    if (typeof e != "string") {
      return e;
    } else if (isNaN(e)) {
      if (typeof (e = t.weekdaysParse(e)) == "number") {
        return e;
      } else {
        return null;
      }
    } else {
      return parseInt(e, 10);
    }
  }
  function At(e, t) {
    if (typeof e == "string") {
      return t.weekdaysParse(e) % 7 || 7;
    } else if (isNaN(e)) {
      return null;
    } else {
      return e;
    }
  }
  function Pt(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  z("d", 0, "do", "day");
  z("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  });
  z("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  });
  z("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  });
  z("e", 0, 0, "weekday");
  z("E", 0, 0, "isoWeekday");
  ne("day", "d");
  ne("weekday", "e");
  ne("isoWeekday", "E");
  oe("day", 11);
  oe("weekday", 11);
  oe("isoWeekday", 11);
  De("d", xe);
  De("e", xe);
  De("E", xe);
  De("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  });
  De("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  });
  De("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  });
  ze(["dd", "ddd", "dddd"], function (e, t, n, r) {
    var i = n._locale.weekdaysParse(e, r, n._strict);
    if (i != null) {
      t.d = i;
    } else {
      v(n).invalidWeekday = e;
    }
  });
  ze(["d", "e", "E"], function (e, t, n, r) {
    t[r] = ce(e);
  });
  var Ct = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var Dt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var Ut = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var It = Ce;
  var Lt = Ce;
  var jt = Ce;
  function Ft(e, t) {
    var n = a(this._weekdays) ? this._weekdays : this._weekdays[e && e !== true && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    if (e === true) {
      return Pt(n, this._week.dow);
    } else if (e) {
      return n[e.day()];
    } else {
      return n;
    }
  }
  function zt(e) {
    if (e === true) {
      return Pt(this._weekdaysShort, this._week.dow);
    } else if (e) {
      return this._weekdaysShort[e.day()];
    } else {
      return this._weekdaysShort;
    }
  }
  function Bt(e) {
    if (e === true) {
      return Pt(this._weekdaysMin, this._week.dow);
    } else if (e) {
      return this._weekdaysMin[e.day()];
    } else {
      return this._weekdaysMin;
    }
  }
  function Vt(e, t, n) {
    var r;
    var i;
    var a;
    var o = e.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      r = 0;
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      r = 0;
      for (; r < 7; ++r) {
        a = p([2000, 1]).day(r);
        this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase();
        this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase();
        this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
      }
    }
    if (n) {
      if (t === "dddd") {
        if ((i = Ve.call(this._weekdaysParse, o)) !== -1) {
          return i;
        } else {
          return null;
        }
      } else if (t === "ddd") {
        if ((i = Ve.call(this._shortWeekdaysParse, o)) !== -1) {
          return i;
        } else {
          return null;
        }
      } else if ((i = Ve.call(this._minWeekdaysParse, o)) !== -1) {
        return i;
      } else {
        return null;
      }
    } else if (t === "dddd") {
      if ((i = Ve.call(this._weekdaysParse, o)) !== -1 || (i = Ve.call(this._shortWeekdaysParse, o)) !== -1 || (i = Ve.call(this._minWeekdaysParse, o)) !== -1) {
        return i;
      } else {
        return null;
      }
    } else if (t === "ddd") {
      if ((i = Ve.call(this._shortWeekdaysParse, o)) !== -1 || (i = Ve.call(this._weekdaysParse, o)) !== -1 || (i = Ve.call(this._minWeekdaysParse, o)) !== -1) {
        return i;
      } else {
        return null;
      }
    } else if ((i = Ve.call(this._minWeekdaysParse, o)) !== -1 || (i = Ve.call(this._weekdaysParse, o)) !== -1 || (i = Ve.call(this._shortWeekdaysParse, o)) !== -1) {
      return i;
    } else {
      return null;
    }
  }
  function Yt(e, t, n) {
    var r;
    var i;
    var a;
    if (this._weekdaysParseExact) {
      return Vt.call(this, e, t, n);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    r = 0;
    for (; r < 7; r++) {
      i = p([2000, 1]).day(r);
      if (n && !this._fullWeekdaysParse[r]) {
        this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i");
        this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i");
        this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i");
      }
      if (!this._weekdaysParse[r]) {
        a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, "");
        this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i");
      }
      if (n && t === "dddd" && this._fullWeekdaysParse[r].test(e)) {
        return r;
      }
      if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e)) {
        return r;
      }
      if (n && t === "dd" && this._minWeekdaysParse[r].test(e)) {
        return r;
      }
      if (!n && this._weekdaysParse[r].test(e)) {
        return r;
      }
    }
  }
  function Ht(e) {
    if (!this.isValid()) {
      if (e != null) {
        return this;
      } else {
        return NaN;
      }
    }
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (e != null) {
      e = Rt(e, this.localeData());
      return this.add(e - t, "d");
    } else {
      return t;
    }
  }
  function $t(e) {
    if (!this.isValid()) {
      if (e != null) {
        return this;
      } else {
        return NaN;
      }
    }
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    if (e == null) {
      return t;
    } else {
      return this.add(e - t, "d");
    }
  }
  function Wt(e) {
    if (!this.isValid()) {
      if (e != null) {
        return this;
      } else {
        return NaN;
      }
    }
    if (e != null) {
      var t = At(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    }
    return this.day() || 7;
  }
  function Gt(e) {
    if (this._weekdaysParseExact) {
      if (!s(this, "_weekdaysRegex")) {
        Xt.call(this);
      }
      if (e) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!s(this, "_weekdaysRegex")) {
        this._weekdaysRegex = It;
      }
      if (this._weekdaysStrictRegex && e) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    }
  }
  function qt(e) {
    if (this._weekdaysParseExact) {
      if (!s(this, "_weekdaysRegex")) {
        Xt.call(this);
      }
      if (e) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!s(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = Lt;
      }
      if (this._weekdaysShortStrictRegex && e) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    }
  }
  function Kt(e) {
    if (this._weekdaysParseExact) {
      if (!s(this, "_weekdaysRegex")) {
        Xt.call(this);
      }
      if (e) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!s(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = jt;
      }
      if (this._weekdaysMinStrictRegex && e) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    }
  }
  function Xt() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t;
    var n;
    var r;
    var i;
    var a;
    var o = [];
    var s = [];
    var u = [];
    var l = [];
    for (t = 0; t < 7; t++) {
      n = p([2000, 1]).day(t);
      r = Le(this.weekdaysMin(n, ""));
      i = Le(this.weekdaysShort(n, ""));
      a = Le(this.weekdays(n, ""));
      o.push(r);
      s.push(i);
      u.push(a);
      l.push(r);
      l.push(i);
      l.push(a);
    }
    o.sort(e);
    s.sort(e);
    u.sort(e);
    l.sort(e);
    this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
    this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
    this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
  }
  function Zt() {
    return this.hours() % 12 || 12;
  }
  function Qt() {
    return this.hours() || 24;
  }
  function Jt(e, t) {
    z(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function en(e, t) {
    return t._meridiemParse;
  }
  function tn(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  z("H", ["HH", 2], 0, "hour");
  z("h", ["hh", 2], 0, Zt);
  z("k", ["kk", 2], 0, Qt);
  z("hmm", 0, 0, function () {
    return "" + Zt.apply(this) + U(this.minutes(), 2);
  });
  z("hmmss", 0, 0, function () {
    return "" + Zt.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2);
  });
  z("Hmm", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2);
  });
  z("Hmmss", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2);
  });
  Jt("a", true);
  Jt("A", false);
  ne("hour", "h");
  oe("hour", 13);
  De("a", en);
  De("A", en);
  De("H", xe);
  De("h", xe);
  De("k", xe);
  De("HH", xe, ye);
  De("hh", xe, ye);
  De("kk", xe, ye);
  De("hmm", Se);
  De("hmmss", Ee);
  De("Hmm", Se);
  De("Hmmss", Ee);
  Fe(["H", "HH"], We);
  Fe(["k", "kk"], function (e, t, n) {
    var r = ce(e);
    t[We] = r === 24 ? 0 : r;
  });
  Fe(["a", "A"], function (e, t, n) {
    n._isPm = n._locale.isPM(e);
    n._meridiem = e;
  });
  Fe(["h", "hh"], function (e, t, n) {
    t[We] = ce(e);
    v(n).bigHour = true;
  });
  Fe("hmm", function (e, t, n) {
    var r = e.length - 2;
    t[We] = ce(e.substr(0, r));
    t[Ge] = ce(e.substr(r));
    v(n).bigHour = true;
  });
  Fe("hmmss", function (e, t, n) {
    var r = e.length - 4;
    var i = e.length - 2;
    t[We] = ce(e.substr(0, r));
    t[Ge] = ce(e.substr(r, 2));
    t[qe] = ce(e.substr(i));
    v(n).bigHour = true;
  });
  Fe("Hmm", function (e, t, n) {
    var r = e.length - 2;
    t[We] = ce(e.substr(0, r));
    t[Ge] = ce(e.substr(r));
  });
  Fe("Hmmss", function (e, t, n) {
    var r = e.length - 4;
    var i = e.length - 2;
    t[We] = ce(e.substr(0, r));
    t[Ge] = ce(e.substr(r, 2));
    t[qe] = ce(e.substr(i));
  });
  var nn = /[ap]\.?m?\.?/i;
  var rn = fe("Hours", true);
  function an(e, t, n) {
    if (e > 11) {
      if (n) {
        return "pm";
      } else {
        return "PM";
      }
    } else if (n) {
      return "am";
    } else {
      return "AM";
    }
  }
  var on;
  var sn = {
    calendar: C,
    longDateFormat: $,
    invalidDate: G,
    ordinal: K,
    dayOfMonthOrdinalParse: X,
    relativeTime: Q,
    months: et,
    monthsShort: tt,
    week: kt,
    weekdays: Ct,
    weekdaysMin: Ut,
    weekdaysShort: Dt,
    meridiemParse: nn
  };
  var un = {};
  var ln = {};
  function cn(e, t) {
    var n;
    var r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1) {
      if (e[n] !== t[n]) {
        return n;
      }
    }
    return r;
  }
  function fn(e) {
    if (e) {
      return e.toLowerCase().replace("_", "-");
    } else {
      return e;
    }
  }
  function dn(e) {
    for (var t, n, r, i, a = 0; a < e.length;) {
      t = (i = fn(e[a]).split("-")).length;
      n = (n = fn(e[a + 1])) ? n.split("-") : null;
      for (; t > 0;) {
        if (r = pn(i.slice(0, t).join("-"))) {
          return r;
        }
        if (n && n.length >= t && cn(i, n) >= t - 1) {
          break;
        }
        t--;
      }
      a++;
    }
    return on;
  }
  function hn(e) {
    return e.match("^[^/\\\\]*$") != null;
  }
  function pn(t) {
    var n = null;
    if (un[t] === undefined && module && module.exports && hn(t)) {
      try {
        n = on._abbr;
        Object(function () {
          var e = new Error("Cannot find module 'undefined'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        }());
        mn(n);
      } catch (e) {
        un[t] = null;
      }
    }
    return un[t];
  }
  function mn(e, t) {
    var n;
    if (e) {
      if (n = l(t) ? yn(e) : vn(e, t)) {
        on = n;
      } else if (typeof console != "undefined" && console.warn) {
        console.warn("Locale " + e + " not found. Did you forget to load it?");
      }
    }
    return on._abbr;
  }
  function vn(e, t) {
    if (t !== null) {
      var n;
      var r = sn;
      t.abbr = e;
      if (un[e] != null) {
        T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
        r = un[e]._config;
      } else if (t.parentLocale != null) {
        if (un[t.parentLocale] != null) {
          r = un[t.parentLocale]._config;
        } else {
          if ((n = pn(t.parentLocale)) == null) {
            if (!ln[t.parentLocale]) {
              ln[t.parentLocale] = [];
            }
            ln[t.parentLocale].push({
              name: e,
              config: t
            });
            return null;
          }
          r = n._config;
        }
      }
      un[e] = new P(A(r, t));
      if (ln[e]) {
        ln[e].forEach(function (e) {
          vn(e.name, e.config);
        });
      }
      mn(e);
      return un[e];
    }
    delete un[e];
    return null;
  }
  function gn(e, t) {
    if (t != null) {
      var n;
      var r;
      var i = sn;
      if (un[e] != null && un[e].parentLocale != null) {
        un[e].set(A(un[e]._config, t));
      } else {
        if ((r = pn(e)) != null) {
          i = r._config;
        }
        t = A(i, t);
        if (r == null) {
          t.abbr = e;
        }
        (n = new P(t)).parentLocale = un[e];
        un[e] = n;
      }
      mn(e);
    } else if (un[e] != null) {
      if (un[e].parentLocale != null) {
        un[e] = un[e].parentLocale;
        if (e === mn()) {
          mn(e);
        }
      } else if (un[e] != null) {
        delete un[e];
      }
    }
    return un[e];
  }
  function yn(e) {
    var t;
    if (e && e._locale && e._locale._abbr) {
      e = e._locale._abbr;
    }
    if (!e) {
      return on;
    }
    if (!a(e)) {
      if (t = pn(e)) {
        return t;
      }
      e = [e];
    }
    return dn(e);
  }
  function bn() {
    return O(un);
  }
  function wn(e) {
    var t;
    var n = e._a;
    if (n && v(e).overflow === -2) {
      t = n[He] < 0 || n[He] > 11 ? He : n[$e] < 1 || n[$e] > Je(n[Ye], n[He]) ? $e : n[We] < 0 || n[We] > 24 || n[We] === 24 && (n[Ge] !== 0 || n[qe] !== 0 || n[Ke] !== 0) ? We : n[Ge] < 0 || n[Ge] > 59 ? Ge : n[qe] < 0 || n[qe] > 59 ? qe : n[Ke] < 0 || n[Ke] > 999 ? Ke : -1;
      if (v(e)._overflowDayOfYear && (t < Ye || t > $e)) {
        t = $e;
      }
      if (v(e)._overflowWeeks && t === -1) {
        t = Xe;
      }
      if (v(e)._overflowWeekday && t === -1) {
        t = Ze;
      }
      v(e).overflow = t;
    }
    return e;
  }
  var _n = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var xn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var Sn = /Z|[+-]\d\d(?::?\d\d)?/;
  var En = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, false], ["YYYY", /\d{4}/, false]];
  var kn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]];
  var On = /^\/?Date\((-?\d+)/i;
  var Nn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  var Tn = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };
  function Mn(e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s = e._i;
    var u = _n.exec(s) || xn.exec(s);
    var l = En.length;
    var c = kn.length;
    if (u) {
      v(e).iso = true;
      t = 0;
      n = l;
      for (; t < n; t++) {
        if (En[t][1].exec(u[1])) {
          i = En[t][0];
          r = En[t][2] !== false;
          break;
        }
      }
      if (i == null) {
        return void (e._isValid = false);
      }
      if (u[3]) {
        t = 0;
        n = c;
        for (; t < n; t++) {
          if (kn[t][1].exec(u[3])) {
            a = (u[2] || " ") + kn[t][0];
            break;
          }
        }
        if (a == null) {
          return void (e._isValid = false);
        }
      }
      if (!r && a != null) {
        return void (e._isValid = false);
      }
      if (u[4]) {
        if (!Sn.exec(u[4])) {
          return void (e._isValid = false);
        }
        o = "Z";
      }
      e._f = i + (a || "") + (o || "");
      Bn(e);
    } else {
      e._isValid = false;
    }
  }
  function Rn(e, t, n, r, i, a) {
    var o = [An(e), tt.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
    if (a) {
      o.push(parseInt(a, 10));
    }
    return o;
  }
  function An(e) {
    var t = parseInt(e, 10);
    if (t <= 49) {
      return 2000 + t;
    } else if (t <= 999) {
      return 1900 + t;
    } else {
      return t;
    }
  }
  function Pn(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function Cn(e, t, n) {
    return !e || Dt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (v(n).weekdayMismatch = true, n._isValid = false, false);
  }
  function Dn(e, t, n) {
    if (e) {
      return Tn[e];
    }
    if (t) {
      return 0;
    }
    var r = parseInt(n, 10);
    var i = r % 100;
    return (r - i) / 100 * 60 + i;
  }
  function Un(e) {
    var t;
    var n = Nn.exec(Pn(e._i));
    if (n) {
      t = Rn(n[4], n[3], n[2], n[5], n[6], n[7]);
      if (!Cn(n[1], t, e)) {
        return;
      }
      e._a = t;
      e._tzm = Dn(n[8], n[9], n[10]);
      e._d = bt.apply(null, e._a);
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
      v(e).rfc2822 = true;
    } else {
      e._isValid = false;
    }
  }
  function In(e) {
    var t = On.exec(e._i);
    if (t === null) {
      Mn(e);
      if (e._isValid === false) {
        delete e._isValid;
        Un(e);
        if (e._isValid === false) {
          delete e._isValid;
          if (e._strict) {
            e._isValid = false;
          } else {
            r.createFromInputFallback(e);
          }
        }
      }
    } else {
      e._d = new Date(+t[1]);
    }
  }
  function Ln(e, t, n) {
    if (e != null) {
      return e;
    } else if (t != null) {
      return t;
    } else {
      return n;
    }
  }
  function jn(e) {
    var t = new Date(r.now());
    if (e._useUTC) {
      return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()];
    } else {
      return [t.getFullYear(), t.getMonth(), t.getDate()];
    }
  }
  function Fn(e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o = [];
    if (!e._d) {
      r = jn(e);
      if (e._w && e._a[$e] == null && e._a[He] == null) {
        zn(e);
      }
      if (e._dayOfYear != null) {
        a = Ln(e._a[Ye], r[Ye]);
        if (e._dayOfYear > mt(a) || e._dayOfYear === 0) {
          v(e)._overflowDayOfYear = true;
        }
        n = bt(a, 0, e._dayOfYear);
        e._a[He] = n.getUTCMonth();
        e._a[$e] = n.getUTCDate();
      }
      t = 0;
      for (; t < 3 && e._a[t] == null; ++t) {
        e._a[t] = o[t] = r[t];
      }
      for (; t < 7; t++) {
        e._a[t] = o[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
      }
      if (e._a[We] === 24 && e._a[Ge] === 0 && e._a[qe] === 0 && e._a[Ke] === 0) {
        e._nextDay = true;
        e._a[We] = 0;
      }
      e._d = (e._useUTC ? bt : yt).apply(null, o);
      i = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
      if (e._tzm != null) {
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
      }
      if (e._nextDay) {
        e._a[We] = 24;
      }
      if (e._w && e._w.d !== undefined && e._w.d !== i) {
        v(e).weekdayMismatch = true;
      }
    }
  }
  function zn(e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var u;
    var l;
    if ((t = e._w).GG != null || t.W != null || t.E != null) {
      a = 1;
      o = 4;
      n = Ln(t.GG, e._a[Ye], xt(Kn(), 1, 4).year);
      r = Ln(t.W, 1);
      if ((i = Ln(t.E, 1)) < 1 || i > 7) {
        u = true;
      }
    } else {
      a = e._locale._week.dow;
      o = e._locale._week.doy;
      l = xt(Kn(), a, o);
      n = Ln(t.gg, e._a[Ye], l.year);
      r = Ln(t.w, l.week);
      if (t.d != null) {
        if ((i = t.d) < 0 || i > 6) {
          u = true;
        }
      } else if (t.e != null) {
        i = t.e + a;
        if (t.e < 0 || t.e > 6) {
          u = true;
        }
      } else {
        i = a;
      }
    }
    if (r < 1 || r > St(n, a, o)) {
      v(e)._overflowWeeks = true;
    } else if (u != null) {
      v(e)._overflowWeekday = true;
    } else {
      s = _t(n, r, i, a, o);
      e._a[Ye] = s.year;
      e._dayOfYear = s.dayOfYear;
    }
  }
  function Bn(e) {
    if (e._f !== r.ISO_8601) {
      if (e._f !== r.RFC_2822) {
        e._a = [];
        v(e).empty = true;
        var t;
        var n;
        var i;
        var a;
        var o;
        var s;
        var u;
        var l = "" + e._i;
        var c = l.length;
        var f = 0;
        u = (i = H(e._f, e._locale).match(I) || []).length;
        t = 0;
        for (; t < u; t++) {
          a = i[t];
          if (n = (l.match(Ue(a, e)) || [])[0]) {
            if ((o = l.substr(0, l.indexOf(n))).length > 0) {
              v(e).unusedInput.push(o);
            }
            l = l.slice(l.indexOf(n) + n.length);
            f += n.length;
          }
          if (F[a]) {
            if (n) {
              v(e).empty = false;
            } else {
              v(e).unusedTokens.push(a);
            }
            Be(a, n, e);
          } else if (e._strict && !n) {
            v(e).unusedTokens.push(a);
          }
        }
        v(e).charsLeftOver = c - f;
        if (l.length > 0) {
          v(e).unusedInput.push(l);
        }
        if (e._a[We] <= 12 && v(e).bigHour === true && e._a[We] > 0) {
          v(e).bigHour = undefined;
        }
        v(e).parsedDateParts = e._a.slice(0);
        v(e).meridiem = e._meridiem;
        e._a[We] = Vn(e._locale, e._a[We], e._meridiem);
        if ((s = v(e).era) !== null) {
          e._a[Ye] = e._locale.erasConvertYear(s, e._a[Ye]);
        }
        Fn(e);
        wn(e);
      } else {
        Un(e);
      }
    } else {
      Mn(e);
    }
  }
  function Vn(e, t, n) {
    var r;
    if (n == null) {
      return t;
    } else if (e.meridiemHour != null) {
      return e.meridiemHour(t, n);
    } else if (e.isPM != null) {
      if ((r = e.isPM(n)) && t < 12) {
        t += 12;
      }
      if (!(r || t !== 12)) {
        t = 0;
      }
      return t;
    } else {
      return t;
    }
  }
  function Yn(e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s = false;
    var u = e._f.length;
    if (u === 0) {
      v(e).invalidFormat = true;
      return void (e._d = new Date(NaN));
    }
    for (i = 0; i < u; i++) {
      a = 0;
      o = false;
      t = _({}, e);
      if (e._useUTC != null) {
        t._useUTC = e._useUTC;
      }
      t._f = e._f[i];
      Bn(t);
      if (g(t)) {
        o = true;
      }
      a += v(t).charsLeftOver;
      a += v(t).unusedTokens.length * 10;
      v(t).score = a;
      if (s) {
        if (a < r) {
          r = a;
          n = t;
        }
      } else if (r == null || a < r || o) {
        r = a;
        n = t;
        if (o) {
          s = true;
        }
      }
    }
    h(e, n || t);
  }
  function Hn(e) {
    if (!e._d) {
      var t = ie(e._i);
      var n = t.day === undefined ? t.date : t.day;
      e._a = d([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) {
        return e && parseInt(e, 10);
      });
      Fn(e);
    }
  }
  function $n(e) {
    var t = new x(wn(Wn(e)));
    if (t._nextDay) {
      t.add(1, "d");
      t._nextDay = undefined;
    }
    return t;
  }
  function Wn(e) {
    var t = e._i;
    var n = e._f;
    e._locale = e._locale || yn(e._l);
    if (t === null || n === undefined && t === "") {
      return y({
        nullInput: true
      });
    } else {
      if (typeof t == "string") {
        e._i = t = e._locale.preparse(t);
      }
      if (S(t)) {
        return new x(wn(t));
      } else {
        if (f(t)) {
          e._d = t;
        } else if (a(n)) {
          Yn(e);
        } else if (n) {
          Bn(e);
        } else {
          Gn(e);
        }
        if (!g(e)) {
          e._d = null;
        }
        return e;
      }
    }
  }
  function Gn(e) {
    var t = e._i;
    if (l(t)) {
      e._d = new Date(r.now());
    } else if (f(t)) {
      e._d = new Date(t.valueOf());
    } else if (typeof t == "string") {
      In(e);
    } else if (a(t)) {
      e._a = d(t.slice(0), function (e) {
        return parseInt(e, 10);
      });
      Fn(e);
    } else if (o(t)) {
      Hn(e);
    } else if (c(t)) {
      e._d = new Date(t);
    } else {
      r.createFromInputFallback(e);
    }
  }
  function qn(e, t, n, r, i) {
    var s = {};
    if (!(t !== true && t !== false)) {
      r = t;
      t = undefined;
    }
    if (!(n !== true && n !== false)) {
      r = n;
      n = undefined;
    }
    if (o(e) && u(e) || a(e) && e.length === 0) {
      e = undefined;
    }
    s._isAMomentObject = true;
    s._useUTC = s._isUTC = i;
    s._l = n;
    s._i = e;
    s._f = t;
    s._strict = r;
    return $n(s);
  }
  function Kn(e, t, n, r) {
    return qn(e, t, n, r, false);
  }
  r.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  });
  r.ISO_8601 = function () {};
  r.RFC_2822 = function () {};
  var Xn = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Kn.apply(null, arguments);
    if (this.isValid() && e.isValid()) {
      if (e < this) {
        return this;
      } else {
        return e;
      }
    } else {
      return y();
    }
  });
  var Zn = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Kn.apply(null, arguments);
    if (this.isValid() && e.isValid()) {
      if (e > this) {
        return this;
      } else {
        return e;
      }
    } else {
      return y();
    }
  });
  function Qn(e, t) {
    var n;
    var r;
    if (t.length === 1 && a(t[0])) {
      t = t[0];
    }
    if (!t.length) {
      return Kn();
    }
    n = t[0];
    r = 1;
    for (; r < t.length; ++r) {
      if (!(t[r].isValid() && !t[r][e](n))) {
        n = t[r];
      }
    }
    return n;
  }
  function Jn() {
    return Qn("isBefore", [].slice.call(arguments, 0));
  }
  function er() {
    return Qn("isAfter", [].slice.call(arguments, 0));
  }
  var tr = function () {
    if (Date.now) {
      return Date.now();
    } else {
      return +new Date();
    }
  };
  var nr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
  function rr(e) {
    var t;
    var n;
    var r = false;
    var i = nr.length;
    for (t in e) {
      if (s(e, t) && (Ve.call(nr, t) === -1 || e[t] != null && isNaN(e[t]))) {
        return false;
      }
    }
    for (n = 0; n < i; ++n) {
      if (e[nr[n]]) {
        if (r) {
          return false;
        }
        if (parseFloat(e[nr[n]]) !== ce(e[nr[n]])) {
          r = true;
        }
      }
    }
    return true;
  }
  function ir() {
    return this._isValid;
  }
  function ar() {
    return Tr(NaN);
  }
  function or(e) {
    var t = ie(e);
    var n = t.year || 0;
    var r = t.quarter || 0;
    var i = t.month || 0;
    var a = t.week || t.isoWeek || 0;
    var o = t.day || 0;
    var s = t.hour || 0;
    var u = t.minute || 0;
    var l = t.second || 0;
    var c = t.millisecond || 0;
    this._isValid = rr(t);
    this._milliseconds = +c + l * 1000 + u * 60000 + s * 1000 * 60 * 60;
    this._days = +o + a * 7;
    this._months = +i + r * 3 + n * 12;
    this._data = {};
    this._locale = yn();
    this._bubble();
  }
  function sr(e) {
    return e instanceof or;
  }
  function ur(e) {
    if (e < 0) {
      return Math.round(e * -1) * -1;
    } else {
      return Math.round(e);
    }
  }
  function lr(e, t, n) {
    var r;
    var i = Math.min(e.length, t.length);
    var a = Math.abs(e.length - t.length);
    var o = 0;
    for (r = 0; r < i; r++) {
      if (n && e[r] !== t[r] || !n && ce(e[r]) !== ce(t[r])) {
        o++;
      }
    }
    return o + a;
  }
  function cr(e, t) {
    z(e, 0, 0, function () {
      var e = this.utcOffset();
      var n = "+";
      if (e < 0) {
        e = -e;
        n = "-";
      }
      return n + U(~~(e / 60), 2) + t + U(~~e % 60, 2);
    });
  }
  cr("Z", ":");
  cr("ZZ", "");
  De("Z", Ae);
  De("ZZ", Ae);
  Fe(["Z", "ZZ"], function (e, t, n) {
    n._useUTC = true;
    n._tzm = dr(Ae, e);
  });
  var fr = /([\+\-]|\d\d)/gi;
  function dr(e, t) {
    var n;
    var r;
    var i = (t || "").match(e);
    if (i === null) {
      return null;
    } else if ((r = (n = ((i[i.length - 1] || []) + "").match(fr) || ["-", 0, 0])[1] * 60 + ce(n[2])) === 0) {
      return 0;
    } else if (n[0] === "+") {
      return r;
    } else {
      return -r;
    }
  }
  function hr(e, t) {
    var n;
    var i;
    if (t._isUTC) {
      n = t.clone();
      i = (S(e) || f(e) ? e.valueOf() : Kn(e).valueOf()) - n.valueOf();
      n._d.setTime(n._d.valueOf() + i);
      r.updateOffset(n, false);
      return n;
    } else {
      return Kn(e).local();
    }
  }
  function pr(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  function mr(e, t, n) {
    var i;
    var a = this._offset || 0;
    if (!this.isValid()) {
      if (e != null) {
        return this;
      } else {
        return NaN;
      }
    }
    if (e != null) {
      if (typeof e == "string") {
        if ((e = dr(Ae, e)) === null) {
          return this;
        }
      } else if (Math.abs(e) < 16 && !n) {
        e *= 60;
      }
      if (!this._isUTC && t) {
        i = pr(this);
      }
      this._offset = e;
      this._isUTC = true;
      if (i != null) {
        this.add(i, "m");
      }
      if (a !== e) {
        if (!t || this._changeInProgress) {
          Cr(this, Tr(e - a, "m"), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          r.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    }
    if (this._isUTC) {
      return a;
    } else {
      return pr(this);
    }
  }
  function vr(e, t) {
    if (e != null) {
      if (typeof e != "string") {
        e = -e;
      }
      this.utcOffset(e, t);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function gr(e) {
    return this.utcOffset(0, e);
  }
  function yr(e) {
    if (this._isUTC) {
      this.utcOffset(0, e);
      this._isUTC = false;
      if (e) {
        this.subtract(pr(this), "m");
      }
    }
    return this;
  }
  function br() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i == "string") {
      var e = dr(Re, this._i);
      if (e != null) {
        this.utcOffset(e);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function wr(e) {
    return !!this.isValid() && (e = e ? Kn(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }
  function _r() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function xr() {
    if (!l(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var e;
    var t = {};
    _(t, this);
    if ((t = Wn(t))._a) {
      e = t._isUTC ? p(t._a) : Kn(t._a);
      this._isDSTShifted = this.isValid() && lr(t._a, e.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function Sr() {
    return !!this.isValid() && !this._isUTC;
  }
  function Er() {
    return !!this.isValid() && this._isUTC;
  }
  function kr() {
    return !!this.isValid() && this._isUTC && this._offset === 0;
  }
  r.updateOffset = function () {};
  var Or = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/;
  var Nr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function Tr(e, t) {
    var n;
    var r;
    var i;
    var a = e;
    var o = null;
    if (sr(e)) {
      a = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
      };
    } else if (c(e) || !isNaN(+e)) {
      a = {};
      if (t) {
        a[t] = +e;
      } else {
        a.milliseconds = +e;
      }
    } else if (o = Or.exec(e)) {
      n = o[1] === "-" ? -1 : 1;
      a = {
        y: 0,
        d: ce(o[$e]) * n,
        h: ce(o[We]) * n,
        m: ce(o[Ge]) * n,
        s: ce(o[qe]) * n,
        ms: ce(ur(o[Ke] * 1000)) * n
      };
    } else if (o = Nr.exec(e)) {
      n = o[1] === "-" ? -1 : 1;
      a = {
        y: Mr(o[2], n),
        M: Mr(o[3], n),
        w: Mr(o[4], n),
        d: Mr(o[5], n),
        h: Mr(o[6], n),
        m: Mr(o[7], n),
        s: Mr(o[8], n)
      };
    } else if (a == null) {
      a = {};
    } else if (typeof a == "object" && ("from" in a || "to" in a)) {
      i = Ar(Kn(a.from), Kn(a.to));
      (a = {}).ms = i.milliseconds;
      a.M = i.months;
    }
    r = new or(a);
    if (sr(e) && s(e, "_locale")) {
      r._locale = e._locale;
    }
    if (sr(e) && s(e, "_isValid")) {
      r._isValid = e._isValid;
    }
    return r;
  }
  function Mr(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function Rr(e, t) {
    var n = {};
    n.months = t.month() - e.month() + (t.year() - e.year()) * 12;
    if (e.clone().add(n.months, "M").isAfter(t)) {
      --n.months;
    }
    n.milliseconds = +t - +e.clone().add(n.months, "M");
    return n;
  }
  function Ar(e, t) {
    var n;
    if (e.isValid() && t.isValid()) {
      t = hr(t, e);
      if (e.isBefore(t)) {
        n = Rr(e, t);
      } else {
        (n = Rr(t, e)).milliseconds = -n.milliseconds;
        n.months = -n.months;
      }
      return n;
    } else {
      return {
        milliseconds: 0,
        months: 0
      };
    }
  }
  function Pr(e, t) {
    return function (n, r) {
      var i;
      if (!(r === null || isNaN(+r))) {
        T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
        i = n;
        n = r;
        r = i;
      }
      Cr(this, Tr(n, r), e);
      return this;
    };
  }
  function Cr(e, t, n, i) {
    var a = t._milliseconds;
    var o = ur(t._days);
    var s = ur(t._months);
    if (e.isValid()) {
      i = i == null || i;
      if (s) {
        lt(e, de(e, "Month") + s * n);
      }
      if (o) {
        he(e, "Date", de(e, "Date") + o * n);
      }
      if (a) {
        e._d.setTime(e._d.valueOf() + a * n);
      }
      if (i) {
        r.updateOffset(e, o || s);
      }
    }
  }
  Tr.fn = or.prototype;
  Tr.invalid = ar;
  var Dr = Pr(1, "add");
  var Ur = Pr(-1, "subtract");
  function Ir(e) {
    return typeof e == "string" || e instanceof String;
  }
  function Lr(e) {
    return S(e) || f(e) || Ir(e) || c(e) || Fr(e) || jr(e) || e == null;
  }
  function jr(e) {
    var t;
    var n;
    var r = o(e) && !u(e);
    var i = false;
    var a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
    var l = a.length;
    for (t = 0; t < l; t += 1) {
      n = a[t];
      i = i || s(e, n);
    }
    return r && i;
  }
  function Fr(e) {
    var t = a(e);
    var n = false;
    if (t) {
      n = e.filter(function (t) {
        return !c(t) && Ir(e);
      }).length === 0;
    }
    return t && n;
  }
  function zr(e) {
    var t;
    var n;
    var r = o(e) && !u(e);
    var i = false;
    var a = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
    for (t = 0; t < a.length; t += 1) {
      n = a[t];
      i = i || s(e, n);
    }
    return r && i;
  }
  function Br(e, t) {
    var n = e.diff(t, "days", true);
    if (n < -6) {
      return "sameElse";
    } else if (n < -1) {
      return "lastWeek";
    } else if (n < 0) {
      return "lastDay";
    } else if (n < 1) {
      return "sameDay";
    } else if (n < 2) {
      return "nextDay";
    } else if (n < 7) {
      return "nextWeek";
    } else {
      return "sameElse";
    }
  }
  function Vr(e, t) {
    if (arguments.length === 1) {
      if (arguments[0]) {
        if (Lr(arguments[0])) {
          e = arguments[0];
          t = undefined;
        } else if (zr(arguments[0])) {
          t = arguments[0];
          e = undefined;
        }
      } else {
        e = undefined;
        t = undefined;
      }
    }
    var n = e || Kn();
    var i = hr(n, this).startOf("day");
    var a = r.calendarFormat(this, i) || "sameElse";
    var o = t && (M(t[a]) ? t[a].call(this, n) : t[a]);
    return this.format(o || this.localeData().calendar(a, this, Kn(n)));
  }
  function Yr() {
    return new x(this);
  }
  function Hr(e, t) {
    var n = S(e) ? e : Kn(e);
    return !(!this.isValid() || !n.isValid()) && ((t = re(t) || "millisecond") === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
  }
  function $r(e, t) {
    var n = S(e) ? e : Kn(e);
    return !(!this.isValid() || !n.isValid()) && ((t = re(t) || "millisecond") === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
  }
  function Wr(e, t, n, r) {
    var i = S(e) ? e : Kn(e);
    var a = S(t) ? t : Kn(t);
    return !!(this.isValid() && i.isValid() && a.isValid()) && ((r = r || "()")[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) && (r[1] === ")" ? this.isBefore(a, n) : !this.isAfter(a, n));
  }
  function Gr(e, t) {
    var n;
    var r = S(e) ? e : Kn(e);
    return !(!this.isValid() || !r.isValid()) && ((t = re(t) || "millisecond") === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
  }
  function qr(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function Kr(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function Xr(e, t, n) {
    var r;
    var i;
    var a;
    if (!this.isValid()) {
      return NaN;
    }
    if (!(r = hr(e, this)).isValid()) {
      return NaN;
    }
    i = (r.utcOffset() - this.utcOffset()) * 60000;
    switch (t = re(t)) {
      case "year":
        a = Zr(this, r) / 12;
        break;
      case "month":
        a = Zr(this, r);
        break;
      case "quarter":
        a = Zr(this, r) / 3;
        break;
      case "second":
        a = (this - r) / 1000;
        break;
      case "minute":
        a = (this - r) / 60000;
        break;
      case "hour":
        a = (this - r) / 3600000;
        break;
      case "day":
        a = (this - r - i) / 86400000;
        break;
      case "week":
        a = (this - r - i) / 604800000;
        break;
      default:
        a = this - r;
    }
    if (n) {
      return a;
    } else {
      return le(a);
    }
  }
  function Zr(e, t) {
    if (e.date() < t.date()) {
      return -Zr(t, e);
    }
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month());
    var r = e.clone().add(n, "months");
    return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0;
  }
  function Qr() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function Jr(e) {
    if (!this.isValid()) {
      return null;
    }
    var t = e !== true;
    var n = t ? this.clone().utc() : this;
    if (n.year() < 0 || n.year() > 9999) {
      return Y(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
    } else if (M(Date.prototype.toISOString)) {
      if (t) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace("Z", Y(n, "Z"));
      }
    } else {
      return Y(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }
  }
  function ei() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var e;
    var t;
    var n;
    var r;
    var i = "moment";
    var a = "";
    if (!this.isLocal()) {
      i = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      a = "Z";
    }
    e = "[" + i + "(\"]";
    t = this.year() >= 0 && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    n = "-MM-DD[T]HH:mm:ss.SSS";
    r = a + "[\")]";
    return this.format(e + t + n + r);
  }
  function ti(e) {
    if (!e) {
      e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat;
    }
    var t = Y(this, e);
    return this.localeData().postformat(t);
  }
  function ni(e, t) {
    if (this.isValid() && (S(e) && e.isValid() || Kn(e).isValid())) {
      return Tr({
        to: this,
        from: e
      }).locale(this.locale()).humanize(!t);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function ri(e) {
    return this.from(Kn(), e);
  }
  function ii(e, t) {
    if (this.isValid() && (S(e) && e.isValid() || Kn(e).isValid())) {
      return Tr({
        from: this,
        to: e
      }).locale(this.locale()).humanize(!t);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function ai(e) {
    return this.to(Kn(), e);
  }
  function oi(e) {
    var t;
    if (e === undefined) {
      return this._locale._abbr;
    } else {
      if ((t = yn(e)) != null) {
        this._locale = t;
      }
      return this;
    }
  }
  r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var si = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    if (e === undefined) {
      return this.localeData();
    } else {
      return this.locale(e);
    }
  });
  function ui() {
    return this._locale;
  }
  var li = 1000;
  var ci = li * 60;
  var fi = ci * 60;
  var di = fi * 3506328;
  function hi(e, t) {
    return (e % t + t) % t;
  }
  function pi(e, t, n) {
    if (e < 100 && e >= 0) {
      return new Date(e + 400, t, n) - di;
    } else {
      return new Date(e, t, n).valueOf();
    }
  }
  function mi(e, t, n) {
    if (e < 100 && e >= 0) {
      return Date.UTC(e + 400, t, n) - di;
    } else {
      return Date.UTC(e, t, n);
    }
  }
  function vi(e) {
    var t;
    var n;
    if ((e = re(e)) === undefined || e === "millisecond" || !this.isValid()) {
      return this;
    }
    n = this._isUTC ? mi : pi;
    switch (e) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(this.year(), this.month() - this.month() % 3, 1);
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        t = this._d.valueOf();
        t -= hi(t + (this._isUTC ? 0 : this.utcOffset() * ci), fi);
        break;
      case "minute":
        t = this._d.valueOf();
        t -= hi(t, ci);
        break;
      case "second":
        t = this._d.valueOf();
        t -= hi(t, li);
    }
    this._d.setTime(t);
    r.updateOffset(this, true);
    return this;
  }
  function gi(e) {
    var t;
    var n;
    if ((e = re(e)) === undefined || e === "millisecond" || !this.isValid()) {
      return this;
    }
    n = this._isUTC ? mi : pi;
    switch (e) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        t = this._d.valueOf();
        t += fi - hi(t + (this._isUTC ? 0 : this.utcOffset() * ci), fi) - 1;
        break;
      case "minute":
        t = this._d.valueOf();
        t += ci - hi(t, ci) - 1;
        break;
      case "second":
        t = this._d.valueOf();
        t += li - hi(t, li) - 1;
    }
    this._d.setTime(t);
    r.updateOffset(this, true);
    return this;
  }
  function yi() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }
  function bi() {
    return Math.floor(this.valueOf() / 1000);
  }
  function wi() {
    return new Date(this.valueOf());
  }
  function _i() {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }
  function xi() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    };
  }
  function Si() {
    if (this.isValid()) {
      return this.toISOString();
    } else {
      return null;
    }
  }
  function Ei() {
    return g(this);
  }
  function ki() {
    return h({}, v(this));
  }
  function Oi() {
    return v(this).overflow;
  }
  function Ni() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  function Ti(e, t) {
    var n;
    var i;
    var a;
    var o = this._eras || yn("en")._eras;
    n = 0;
    i = o.length;
    for (; n < i; ++n) {
      switch (typeof o[n].since) {
        case "string":
          a = r(o[n].since).startOf("day");
          o[n].since = a.valueOf();
      }
      switch (typeof o[n].until) {
        case "undefined":
          o[n].until = 1 / 0;
          break;
        case "string":
          a = r(o[n].until).startOf("day").valueOf();
          o[n].until = a.valueOf();
      }
    }
    return o;
  }
  function Mi(e, t, n) {
    var r;
    var i;
    var a;
    var o;
    var s;
    var u = this.eras();
    e = e.toUpperCase();
    r = 0;
    i = u.length;
    for (; r < i; ++r) {
      a = u[r].name.toUpperCase();
      o = u[r].abbr.toUpperCase();
      s = u[r].narrow.toUpperCase();
      if (n) {
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (o === e) {
              return u[r];
            }
            break;
          case "NNNN":
            if (a === e) {
              return u[r];
            }
            break;
          case "NNNNN":
            if (s === e) {
              return u[r];
            }
        }
      } else if ([a, o, s].indexOf(e) >= 0) {
        return u[r];
      }
    }
  }
  function Ri(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    if (t === undefined) {
      return r(e.since).year();
    } else {
      return r(e.since).year() + (t - e.offset) * n;
    }
  }
  function Ai() {
    var e;
    var t;
    var n;
    var r = this.localeData().eras();
    e = 0;
    t = r.length;
    for (; e < t; ++e) {
      n = this.clone().startOf("day").valueOf();
      if (r[e].since <= n && n <= r[e].until) {
        return r[e].name;
      }
      if (r[e].until <= n && n <= r[e].since) {
        return r[e].name;
      }
    }
    return "";
  }
  function Pi() {
    var e;
    var t;
    var n;
    var r = this.localeData().eras();
    e = 0;
    t = r.length;
    for (; e < t; ++e) {
      n = this.clone().startOf("day").valueOf();
      if (r[e].since <= n && n <= r[e].until) {
        return r[e].narrow;
      }
      if (r[e].until <= n && n <= r[e].since) {
        return r[e].narrow;
      }
    }
    return "";
  }
  function Ci() {
    var e;
    var t;
    var n;
    var r = this.localeData().eras();
    e = 0;
    t = r.length;
    for (; e < t; ++e) {
      n = this.clone().startOf("day").valueOf();
      if (r[e].since <= n && n <= r[e].until) {
        return r[e].abbr;
      }
      if (r[e].until <= n && n <= r[e].since) {
        return r[e].abbr;
      }
    }
    return "";
  }
  function Di() {
    var e;
    var t;
    var n;
    var i;
    var a = this.localeData().eras();
    e = 0;
    t = a.length;
    for (; e < t; ++e) {
      n = a[e].since <= a[e].until ? 1 : -1;
      i = this.clone().startOf("day").valueOf();
      if (a[e].since <= i && i <= a[e].until || a[e].until <= i && i <= a[e].since) {
        return (this.year() - r(a[e].since).year()) * n + a[e].offset;
      }
    }
    return this.year();
  }
  function Ui(e) {
    if (!s(this, "_erasNameRegex")) {
      Vi.call(this);
    }
    if (e) {
      return this._erasNameRegex;
    } else {
      return this._erasRegex;
    }
  }
  function Ii(e) {
    if (!s(this, "_erasAbbrRegex")) {
      Vi.call(this);
    }
    if (e) {
      return this._erasAbbrRegex;
    } else {
      return this._erasRegex;
    }
  }
  function Li(e) {
    if (!s(this, "_erasNarrowRegex")) {
      Vi.call(this);
    }
    if (e) {
      return this._erasNarrowRegex;
    } else {
      return this._erasRegex;
    }
  }
  function ji(e, t) {
    return t.erasAbbrRegex(e);
  }
  function Fi(e, t) {
    return t.erasNameRegex(e);
  }
  function zi(e, t) {
    return t.erasNarrowRegex(e);
  }
  function Bi(e, t) {
    return t._eraYearOrdinalRegex || Te;
  }
  function Vi() {
    var e;
    var t;
    var n = [];
    var r = [];
    var i = [];
    var a = [];
    var o = this.eras();
    e = 0;
    t = o.length;
    for (; e < t; ++e) {
      r.push(Le(o[e].name));
      n.push(Le(o[e].abbr));
      i.push(Le(o[e].narrow));
      a.push(Le(o[e].name));
      a.push(Le(o[e].abbr));
      a.push(Le(o[e].narrow));
    }
    this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")", "i");
  }
  function Yi(e, t) {
    z(0, [e, e.length], 0, t);
  }
  function Hi(e) {
    return Xi.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function $i(e) {
    return Xi.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function Wi() {
    return St(this.year(), 1, 4);
  }
  function Gi() {
    return St(this.isoWeekYear(), 1, 4);
  }
  function qi() {
    var e = this.localeData()._week;
    return St(this.year(), e.dow, e.doy);
  }
  function Ki() {
    var e = this.localeData()._week;
    return St(this.weekYear(), e.dow, e.doy);
  }
  function Xi(e, t, n, r, i) {
    var a;
    if (e == null) {
      return xt(this, r, i).year;
    } else {
      if (t > (a = St(e, r, i))) {
        t = a;
      }
      return Zi.call(this, e, t, n, r, i);
    }
  }
  function Zi(e, t, n, r, i) {
    var a = _t(e, t, n, r, i);
    var o = bt(a.year, 0, a.dayOfYear);
    this.year(o.getUTCFullYear());
    this.month(o.getUTCMonth());
    this.date(o.getUTCDate());
    return this;
  }
  function Qi(e) {
    if (e == null) {
      return Math.ceil((this.month() + 1) / 3);
    } else {
      return this.month((e - 1) * 3 + this.month() % 3);
    }
  }
  z("N", 0, 0, "eraAbbr");
  z("NN", 0, 0, "eraAbbr");
  z("NNN", 0, 0, "eraAbbr");
  z("NNNN", 0, 0, "eraName");
  z("NNNNN", 0, 0, "eraNarrow");
  z("y", ["y", 1], "yo", "eraYear");
  z("y", ["yy", 2], 0, "eraYear");
  z("y", ["yyy", 3], 0, "eraYear");
  z("y", ["yyyy", 4], 0, "eraYear");
  De("N", ji);
  De("NN", ji);
  De("NNN", ji);
  De("NNNN", Fi);
  De("NNNNN", zi);
  Fe(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
    var i = n._locale.erasParse(e, r, n._strict);
    if (i) {
      v(n).era = i;
    } else {
      v(n).invalidEra = e;
    }
  });
  De("y", Te);
  De("yy", Te);
  De("yyy", Te);
  De("yyyy", Te);
  De("yo", Bi);
  Fe(["y", "yy", "yyy", "yyyy"], Ye);
  Fe(["yo"], function (e, t, n, r) {
    var i;
    if (n._locale._eraYearOrdinalRegex) {
      i = e.match(n._locale._eraYearOrdinalRegex);
    }
    if (n._locale.eraYearOrdinalParse) {
      t[Ye] = n._locale.eraYearOrdinalParse(e, i);
    } else {
      t[Ye] = parseInt(e, 10);
    }
  });
  z(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  z(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  Yi("gggg", "weekYear");
  Yi("ggggg", "weekYear");
  Yi("GGGG", "isoWeekYear");
  Yi("GGGGG", "isoWeekYear");
  ne("weekYear", "gg");
  ne("isoWeekYear", "GG");
  oe("weekYear", 1);
  oe("isoWeekYear", 1);
  De("G", Me);
  De("g", Me);
  De("GG", xe, ye);
  De("gg", xe, ye);
  De("GGGG", Oe, we);
  De("gggg", Oe, we);
  De("GGGGG", Ne, _e);
  De("ggggg", Ne, _e);
  ze(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
    t[r.substr(0, 2)] = ce(e);
  });
  ze(["gg", "GG"], function (e, t, n, i) {
    t[i] = r.parseTwoDigitYear(e);
  });
  z("Q", 0, "Qo", "quarter");
  ne("quarter", "Q");
  oe("quarter", 7);
  De("Q", ge);
  Fe("Q", function (e, t) {
    t[He] = (ce(e) - 1) * 3;
  });
  z("D", ["DD", 2], "Do", "date");
  ne("date", "D");
  oe("date", 9);
  De("D", xe);
  De("DD", xe, ye);
  De("Do", function (e, t) {
    if (e) {
      return t._dayOfMonthOrdinalParse || t._ordinalParse;
    } else {
      return t._dayOfMonthOrdinalParseLenient;
    }
  });
  Fe(["D", "DD"], $e);
  Fe("Do", function (e, t) {
    t[$e] = ce(e.match(xe)[0]);
  });
  var Ji = fe("Date", true);
  function ea(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 86400000) + 1;
    if (e == null) {
      return t;
    } else {
      return this.add(e - t, "d");
    }
  }
  z("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  ne("dayOfYear", "DDD");
  oe("dayOfYear", 4);
  De("DDD", ke);
  De("DDDD", be);
  Fe(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = ce(e);
  });
  z("m", ["mm", 2], 0, "minute");
  ne("minute", "m");
  oe("minute", 14);
  De("m", xe);
  De("mm", xe, ye);
  Fe(["m", "mm"], Ge);
  var ta = fe("Minutes", false);
  z("s", ["ss", 2], 0, "second");
  ne("second", "s");
  oe("second", 15);
  De("s", xe);
  De("ss", xe, ye);
  Fe(["s", "ss"], qe);
  var na;
  var ra;
  var ia = fe("Seconds", false);
  z("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  z(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  z(0, ["SSS", 3], 0, "millisecond");
  z(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });
  z(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });
  z(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1000;
  });
  z(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 10000;
  });
  z(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 100000;
  });
  z(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1000000;
  });
  ne("millisecond", "ms");
  oe("millisecond", 16);
  De("S", ke, ge);
  De("SS", ke, ye);
  De("SSS", ke, be);
  na = "SSSS";
  for (; na.length <= 9; na += "S") {
    De(na, Te);
  }
  function aa(e, t) {
    t[Ke] = ce(("0." + e) * 1000);
  }
  for (na = "S"; na.length <= 9; na += "S") {
    Fe(na, aa);
  }
  function oa() {
    if (this._isUTC) {
      return "UTC";
    } else {
      return "";
    }
  }
  function sa() {
    if (this._isUTC) {
      return "Coordinated Universal Time";
    } else {
      return "";
    }
  }
  ra = fe("Milliseconds", false);
  z("z", 0, 0, "zoneAbbr");
  z("zz", 0, 0, "zoneName");
  var ua = x.prototype;
  function la(e) {
    return Kn(e * 1000);
  }
  function ca() {
    return Kn.apply(null, arguments).parseZone();
  }
  function fa(e) {
    return e;
  }
  ua.add = Dr;
  ua.calendar = Vr;
  ua.clone = Yr;
  ua.diff = Xr;
  ua.endOf = gi;
  ua.format = ti;
  ua.from = ni;
  ua.fromNow = ri;
  ua.to = ii;
  ua.toNow = ai;
  ua.get = pe;
  ua.invalidAt = Oi;
  ua.isAfter = Hr;
  ua.isBefore = $r;
  ua.isBetween = Wr;
  ua.isSame = Gr;
  ua.isSameOrAfter = qr;
  ua.isSameOrBefore = Kr;
  ua.isValid = Ei;
  ua.lang = si;
  ua.locale = oi;
  ua.localeData = ui;
  ua.max = Zn;
  ua.min = Xn;
  ua.parsingFlags = ki;
  ua.set = me;
  ua.startOf = vi;
  ua.subtract = Ur;
  ua.toArray = _i;
  ua.toObject = xi;
  ua.toDate = wi;
  ua.toISOString = Jr;
  ua.inspect = ei;
  if (typeof Symbol != "undefined" && Symbol.for != null) {
    ua[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment<" + this.format() + ">";
    };
  }
  ua.toJSON = Si;
  ua.toString = Qr;
  ua.unix = bi;
  ua.valueOf = yi;
  ua.creationData = Ni;
  ua.eraName = Ai;
  ua.eraNarrow = Pi;
  ua.eraAbbr = Ci;
  ua.eraYear = Di;
  ua.year = vt;
  ua.isLeapYear = gt;
  ua.weekYear = Hi;
  ua.isoWeekYear = $i;
  ua.quarter = ua.quarters = Qi;
  ua.month = ct;
  ua.daysInMonth = ft;
  ua.week = ua.weeks = Tt;
  ua.isoWeek = ua.isoWeeks = Mt;
  ua.weeksInYear = qi;
  ua.weeksInWeekYear = Ki;
  ua.isoWeeksInYear = Wi;
  ua.isoWeeksInISOWeekYear = Gi;
  ua.date = Ji;
  ua.day = ua.days = Ht;
  ua.weekday = $t;
  ua.isoWeekday = Wt;
  ua.dayOfYear = ea;
  ua.hour = ua.hours = rn;
  ua.minute = ua.minutes = ta;
  ua.second = ua.seconds = ia;
  ua.millisecond = ua.milliseconds = ra;
  ua.utcOffset = mr;
  ua.utc = gr;
  ua.local = yr;
  ua.parseZone = br;
  ua.hasAlignedHourOffset = wr;
  ua.isDST = _r;
  ua.isLocal = Sr;
  ua.isUtcOffset = Er;
  ua.isUtc = kr;
  ua.isUTC = kr;
  ua.zoneAbbr = oa;
  ua.zoneName = sa;
  ua.dates = k("dates accessor is deprecated. Use date instead.", Ji);
  ua.months = k("months accessor is deprecated. Use month instead", ct);
  ua.years = k("years accessor is deprecated. Use year instead", vt);
  ua.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", vr);
  ua.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", xr);
  var da = P.prototype;
  function ha(e, t, n, r) {
    var i = yn();
    var a = p().set(r, t);
    return i[n](a, e);
  }
  function pa(e, t, n) {
    if (c(e)) {
      t = e;
      e = undefined;
    }
    e = e || "";
    if (t != null) {
      return ha(e, t, n, "month");
    }
    var r;
    var i = [];
    for (r = 0; r < 12; r++) {
      i[r] = ha(e, r, n, "month");
    }
    return i;
  }
  function ma(e, t, n, r) {
    if (typeof e == "boolean") {
      if (c(t)) {
        n = t;
        t = undefined;
      }
      t = t || "";
    } else {
      n = t = e;
      e = false;
      if (c(t)) {
        n = t;
        t = undefined;
      }
      t = t || "";
    }
    var i;
    var a = yn();
    var o = e ? a._week.dow : 0;
    var s = [];
    if (n != null) {
      return ha(t, (n + o) % 7, r, "day");
    }
    for (i = 0; i < 7; i++) {
      s[i] = ha(t, (i + o) % 7, r, "day");
    }
    return s;
  }
  function va(e, t) {
    return pa(e, t, "months");
  }
  function ga(e, t) {
    return pa(e, t, "monthsShort");
  }
  function ya(e, t, n) {
    return ma(e, t, n, "weekdays");
  }
  function ba(e, t, n) {
    return ma(e, t, n, "weekdaysShort");
  }
  function wa(e, t, n) {
    return ma(e, t, n, "weekdaysMin");
  }
  da.calendar = D;
  da.longDateFormat = W;
  da.invalidDate = q;
  da.ordinal = Z;
  da.preparse = fa;
  da.postformat = fa;
  da.relativeTime = J;
  da.pastFuture = ee;
  da.set = R;
  da.eras = Ti;
  da.erasParse = Mi;
  da.erasConvertYear = Ri;
  da.erasAbbrRegex = Ii;
  da.erasNameRegex = Ui;
  da.erasNarrowRegex = Li;
  da.months = at;
  da.monthsShort = ot;
  da.monthsParse = ut;
  da.monthsRegex = ht;
  da.monthsShortRegex = dt;
  da.week = Et;
  da.firstDayOfYear = Nt;
  da.firstDayOfWeek = Ot;
  da.weekdays = Ft;
  da.weekdaysMin = Bt;
  da.weekdaysShort = zt;
  da.weekdaysParse = Yt;
  da.weekdaysRegex = Gt;
  da.weekdaysShortRegex = qt;
  da.weekdaysMinRegex = Kt;
  da.isPM = tn;
  da.meridiem = an;
  mn("en", {
    eras: [{
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    }, {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (ce(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th");
    }
  });
  r.lang = k("moment.lang is deprecated. Use moment.locale instead.", mn);
  r.langData = k("moment.langData is deprecated. Use moment.localeData instead.", yn);
  var _a = Math.abs;
  function xa() {
    var e = this._data;
    this._milliseconds = _a(this._milliseconds);
    this._days = _a(this._days);
    this._months = _a(this._months);
    e.milliseconds = _a(e.milliseconds);
    e.seconds = _a(e.seconds);
    e.minutes = _a(e.minutes);
    e.hours = _a(e.hours);
    e.months = _a(e.months);
    e.years = _a(e.years);
    return this;
  }
  function Sa(e, t, n, r) {
    var i = Tr(t, n);
    e._milliseconds += r * i._milliseconds;
    e._days += r * i._days;
    e._months += r * i._months;
    return e._bubble();
  }
  function Ea(e, t) {
    return Sa(this, e, t, 1);
  }
  function ka(e, t) {
    return Sa(this, e, t, -1);
  }
  function Oa(e) {
    if (e < 0) {
      return Math.floor(e);
    } else {
      return Math.ceil(e);
    }
  }
  function Na() {
    var e;
    var t;
    var n;
    var r;
    var i;
    var a = this._milliseconds;
    var o = this._days;
    var s = this._months;
    var u = this._data;
    if (!(a >= 0 && o >= 0 && s >= 0 || a <= 0 && o <= 0 && s <= 0)) {
      a += Oa(Ma(s) + o) * 86400000;
      o = 0;
      s = 0;
    }
    u.milliseconds = a % 1000;
    e = le(a / 1000);
    u.seconds = e % 60;
    t = le(e / 60);
    u.minutes = t % 60;
    n = le(t / 60);
    u.hours = n % 24;
    o += le(n / 24);
    s += i = le(Ta(o));
    o -= Oa(Ma(i));
    r = le(s / 12);
    s %= 12;
    u.days = o;
    u.months = s;
    u.years = r;
    return this;
  }
  function Ta(e) {
    return e * 4800 / 146097;
  }
  function Ma(e) {
    return e * 146097 / 4800;
  }
  function Ra(e) {
    if (!this.isValid()) {
      return NaN;
    }
    var t;
    var n;
    var r = this._milliseconds;
    if ((e = re(e)) === "month" || e === "quarter" || e === "year") {
      t = this._days + r / 86400000;
      n = this._months + Ta(t);
      switch (e) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
    } else {
      t = this._days + Math.round(Ma(this._months));
      switch (e) {
        case "week":
          return t / 7 + r / 604800000;
        case "day":
          return t + r / 86400000;
        case "hour":
          return t * 24 + r / 3600000;
        case "minute":
          return t * 1440 + r / 60000;
        case "second":
          return t * 86400 + r / 1000;
        case "millisecond":
          return Math.floor(t * 86400000) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
    }
  }
  function Aa() {
    if (this.isValid()) {
      return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + ce(this._months / 12) * 31536000000;
    } else {
      return NaN;
    }
  }
  function Pa(e) {
    return function () {
      return this.as(e);
    };
  }
  var Ca = Pa("ms");
  var Da = Pa("s");
  var Ua = Pa("m");
  var Ia = Pa("h");
  var La = Pa("d");
  var ja = Pa("w");
  var Fa = Pa("M");
  var za = Pa("Q");
  var Ba = Pa("y");
  function Va() {
    return Tr(this);
  }
  function Ya(e) {
    e = re(e);
    if (this.isValid()) {
      return this[e + "s"]();
    } else {
      return NaN;
    }
  }
  function Ha(e) {
    return function () {
      if (this.isValid()) {
        return this._data[e];
      } else {
        return NaN;
      }
    };
  }
  var $a = Ha("milliseconds");
  var Wa = Ha("seconds");
  var Ga = Ha("minutes");
  var qa = Ha("hours");
  var Ka = Ha("days");
  var Xa = Ha("months");
  var Za = Ha("years");
  function Qa() {
    return le(this.days() / 7);
  }
  var Ja = Math.round;
  var eo = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  };
  function to(e, t, n, r, i) {
    return i.relativeTime(t || 1, !!n, e, r);
  }
  function no(e, t, n, r) {
    var i = Tr(e).abs();
    var a = Ja(i.as("s"));
    var o = Ja(i.as("m"));
    var s = Ja(i.as("h"));
    var u = Ja(i.as("d"));
    var l = Ja(i.as("M"));
    var c = Ja(i.as("w"));
    var f = Ja(i.as("y"));
    var d = a <= n.ss && ["s", a] || a < n.s && ["ss", a] || o <= 1 && ["m"] || o < n.m && ["mm", o] || s <= 1 && ["h"] || s < n.h && ["hh", s] || u <= 1 && ["d"] || u < n.d && ["dd", u];
    if (n.w != null) {
      d = d || c <= 1 && ["w"] || c < n.w && ["ww", c];
    }
    (d = d || l <= 1 && ["M"] || l < n.M && ["MM", l] || f <= 1 && ["y"] || ["yy", f])[2] = t;
    d[3] = +e > 0;
    d[4] = r;
    return to.apply(null, d);
  }
  function ro(e) {
    if (e === undefined) {
      return Ja;
    } else {
      return typeof e == "function" && (Ja = e, true);
    }
  }
  function io(e, t) {
    return eo[e] !== undefined && (t === undefined ? eo[e] : (eo[e] = t, e === "s" && (eo.ss = t - 1), true));
  }
  function ao(e, t) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var n;
    var r;
    var i = false;
    var a = eo;
    if (typeof e == "object") {
      t = e;
      e = false;
    }
    if (typeof e == "boolean") {
      i = e;
    }
    if (typeof t == "object") {
      a = Object.assign({}, eo, t);
      if (t.s != null && t.ss == null) {
        a.ss = t.s - 1;
      }
    }
    r = no(this, !i, a, n = this.localeData());
    if (i) {
      r = n.pastFuture(+this, r);
    }
    return n.postformat(r);
  }
  var oo = Math.abs;
  function so(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function uo() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var e;
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var u = oo(this._milliseconds) / 1000;
    var l = oo(this._days);
    var c = oo(this._months);
    var f = this.asSeconds();
    if (f) {
      e = le(u / 60);
      t = le(e / 60);
      u %= 60;
      e %= 60;
      n = le(c / 12);
      c %= 12;
      r = u ? u.toFixed(3).replace(/\.?0+$/, "") : "";
      i = f < 0 ? "-" : "";
      a = so(this._months) !== so(f) ? "-" : "";
      o = so(this._days) !== so(f) ? "-" : "";
      s = so(this._milliseconds) !== so(f) ? "-" : "";
      return i + "P" + (n ? a + n + "Y" : "") + (c ? a + c + "M" : "") + (l ? o + l + "D" : "") + (t || e || u ? "T" : "") + (t ? s + t + "H" : "") + (e ? s + e + "M" : "") + (u ? s + r + "S" : "");
    } else {
      return "P0D";
    }
  }
  var lo = or.prototype;
  lo.isValid = ir;
  lo.abs = xa;
  lo.add = Ea;
  lo.subtract = ka;
  lo.as = Ra;
  lo.asMilliseconds = Ca;
  lo.asSeconds = Da;
  lo.asMinutes = Ua;
  lo.asHours = Ia;
  lo.asDays = La;
  lo.asWeeks = ja;
  lo.asMonths = Fa;
  lo.asQuarters = za;
  lo.asYears = Ba;
  lo.valueOf = Aa;
  lo._bubble = Na;
  lo.clone = Va;
  lo.get = Ya;
  lo.milliseconds = $a;
  lo.seconds = Wa;
  lo.minutes = Ga;
  lo.hours = qa;
  lo.days = Ka;
  lo.weeks = Qa;
  lo.months = Xa;
  lo.years = Za;
  lo.humanize = ao;
  lo.toISOString = uo;
  lo.toString = uo;
  lo.toJSON = uo;
  lo.locale = oi;
  lo.localeData = ui;
  lo.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", uo);
  lo.lang = si;
  z("X", 0, 0, "unix");
  z("x", 0, 0, "valueOf");
  De("x", Me);
  De("X", Pe);
  Fe("X", function (e, t, n) {
    n._d = new Date(parseFloat(e) * 1000);
  });
  Fe("x", function (e, t, n) {
    n._d = new Date(ce(e));
  });
  //! moment.js
  r.version = "2.29.4";
  i(Kn);
  r.fn = ua;
  r.min = Jn;
  r.max = er;
  r.now = tr;
  r.utc = p;
  r.unix = la;
  r.months = va;
  r.isDate = f;
  r.locale = mn;
  r.invalid = y;
  r.duration = Tr;
  r.isMoment = S;
  r.weekdays = ya;
  r.parseZone = ca;
  r.localeData = yn;
  r.isDuration = sr;
  r.monthsShort = ga;
  r.weekdaysMin = wa;
  r.defineLocale = vn;
  r.updateLocale = gn;
  r.locales = bn;
  r.weekdaysShort = ba;
  r.normalizeUnits = re;
  r.relativeTimeRounding = ro;
  r.relativeTimeThreshold = io;
  r.calendarFormat = Br;
  r.prototype = ua;
  r.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  };
  return r;
}();