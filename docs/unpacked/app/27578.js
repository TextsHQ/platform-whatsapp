var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currencyForCountryShortcode = function (e) {
  const t = a.REGION_TO_CURRENCY[e.toUpperCase()];
  if ((t == null ? undefined : t.length) > 0) {
    return t[0];
  } else {
    return a.DEFAULT_CURRENCY;
  }
};
exports.formatAmount1000 = exports.formatAmount = undefined;
exports.formatAmount1000ToParts = function (e, t) {
  const n = c();
  const r = f(n);
  const i = _(n, e);
  const a = p(e, t).replace(i, "").trim();
  const o = a.indexOf(r);
  const s = o === -1 ? a : a.substring(0, o);
  const l = o === -1 ? "" : a.substring(o);
  return {
    symbol: i,
    integer: s,
    decimal: l
  };
};
exports.formatLocalSymbol = function (e) {
  return _(s[e], e);
};
exports.isSupportedCurrency = function (e) {
  return l.has(e);
};
exports.parseValueFromString = m;
exports.validatePriceString = function (e, t, n, r) {
  const i = c();
  const o = a.CURRENCY_DIGITS[e] !== undefined ? a.CURRENCY_DIGITS[e] : a.DEFAULT_DIGITS;
  const s = g(e, t);
  if (n != null && s < n) {
    return false;
  }
  if (r != null && s > r) {
    return false;
  }
  const l = t.replace(/\D+$/g, "");
  const u = f(i);
  if (Number.isNaN(s) || l !== t || (t.split(u)[1] || "").length > o) {
    return false;
  }
  return true;
};
exports.valueFromString = g;
var i = r(require("../vendor/81109.js"));
var a = require("./511190.js");
var o = r(require("./932325.js"));
const s = {
  IDR: "in-ID",
  MXN: "es-MX",
  INR: "en-IN"
};
const l = new Set(["DZD", "ARS", "AUD", "BDT", "BOB", "BRL", "GBP", "CAD", "CLP", "CNY", "COP", "CRC", "CZK", "DKK", "EGP", "EUR", "GTQ", "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "ILS", "JPY", "KES", "KRW", "MOP", "MYR", "MXN", "NZD", "NIO", "NGN", "NOK", "PKR", "PYG", "PEN", "PHP", "PLN", "QAR", "RON", "RUB", "SAR", "SGD", "ZAR", "SEK", "CHF", "TWD", "THB", "TRY", "AED", "USD", "UYU", "VEF", "VND"]);
const u = ["es-ES", "pt-BR"];
const c = () => [o.default.getFullLocale(), o.default.getLocale()].filter(Boolean);
const d = function (e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : c();
  let a = "symbol";
  if (u.includes(Array.isArray(r) ? r[0] : r)) {
    a = "code";
  }
  return new Intl.NumberFormat(r, (0, i.default)({
    style: "currency",
    currency: e,
    currencyDisplay: a
  }, n)).format(t);
};
exports.formatAmount = d;
const p = (e, t, n, r) => d(e, t / 1000, n, r);
function f(e) {
  return new Intl.NumberFormat(e).format(1.1).substring(1, 2);
}
function _(e, t) {
  return p(t, 0, {}, e).replace(/\d+([,.]\d+)?/g, "").trim();
}
function g(e, t) {
  const n = c();
  const r = _(n, e);
  const i = function (e) {
    return new Intl.NumberFormat(e).format(10000).substring(2, 3);
  }(n);
  return m(t, r, f(n), i);
}
function m(e, t, n, r) {
  const i = e.replace(t, "").trim().split(r).join("");
  const a = parseFloat(i.replace(n, ".") || "0");
  return Math.round(a * 1000);
}
exports.formatAmount1000 = p;