Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.l10nNumberFormattersRegister = exports.M = exports.K = undefined;
const n = 1000;
exports.K = n;
const r = 10 ** 6;
function i(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  const [i, a] = (e / 10 ** t).toString(10).split(".");
  if (a == null || a.startsWith("0".repeat(r)) || Number.parseInt(i, 10) >= 100) {
    return parseInt(i, 10);
  } else {
    return parseFloat(`${i}${n}${a.slice(0, r)}`);
  }
}
function a(e, t) {
  return Intl.NumberFormat(t, {
    notation: "compact"
  }).format(e);
}
exports.M = r;
const o = [{
  locales: ["de", "de-AT", "de-CH", "de-DE", "de-LI", "de-LU"],
  format: (e, t) => e > n && e < r ? `${i(e, 3)} Tsd.` : a(e, t)
}, {
  locales: ["fr", "fr-BE", "fr-CA", "fr-CH", "fr-FR"],
  format: (e, t) => a(e, t).toLocaleUpperCase(t)
}, {
  locales: ["it", "it-CH", "it-IT"],
  format: (e, t) => e < n ? e.toLocaleString(t) : e < r ? `${i(e, 3)} mila` : `${i(e, 6)} mln`
}, {
  locales: ["he", "he-IL"],
  format: (e, t) => e < n ? e.toLocaleString(t) : e < r ? `${i(e, 3)} אלף` : `${i(e, 6)} מיליון`
}, {
  locales: ["ja"],
  format: (e, t) => e < n ? e.toLocaleString(t) : e < 10000 ? `${i(e, 3)}千` : a(e, t)
}, {
  locales: ["pt", "pt-BR", "pt-PT"],
  format: (e, t) => e < n ? e.toLocaleString(t) : e < r ? a(e, t) : `${i(e, 6)} M`
}, {
  locales: ["ro", "ro-RO"],
  format: (e, t) => e < n ? e.toLocaleString(t) : e === n ? "1 mie" : e < r ? `${i(e, 3)} mii` : `${i(e, 6)} mil.`
}, {
  locales: ["zh-TW", "zh-MO", "zh-HK"],
  format: (e, t) => e < n ? e.toLocaleString(t) : e < 10000 ? `${i(e, 3)}千` : a(e, "zh-TW")
}, {
  locales: ["zh-SG", "zh-CN"],
  format: (e, t) => e < n ? e.toLocaleString(t) : e < 10000 ? `${i(e, 3)}千` : a(e, t)
}];
const s = function () {
  const e = new Map();
  for (const t of o) {
    t.locales.forEach(n => e.set(n, t));
  }
  return e;
}();
exports.l10nNumberFormattersRegister = s;