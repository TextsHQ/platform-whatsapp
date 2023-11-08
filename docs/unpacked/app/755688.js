var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLink = M;
exports.findLinks = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (!v.test(e)) {
    return [];
  }
  S.lastIndex = 0;
  const n = [];
  let r;
  for (; r = T(e);) {
    const e = A(r, t);
    if (e) {
      n.push(e);
    }
  }
  return n;
};
exports.validateEmail = function (e) {
  const t = M(e);
  if (!t || t.url !== e || t.scheme !== "mailto:" || t.username == null || t.username === "" || t.params != null && t.params !== "" || t.anchor != null && t.anchor !== "") {
    return null;
  } else {
    return t;
  }
};
var i = require("./233479.js");
var a = r(require("../vendor/728770.js"));
const o = Array.from(i.TLD).join("|");
const s = /^https?:\/\/$/gi;
const l = "\\w|[^\\s\0-«»‘’“”]|%[0-9a-f][0-9a-f]";
const u = `${o}|xn--(?:${l})+`;
const c = `(?:${l})|(?:${l})(?:${l}|-)*(?:${l})`;
const d = `(?:${l}|[^\\s%])`;
const p = `[@!.?,(\\[{<«‘“:]*(?!${d}|#)`;
const f = "0-9a-z!#$%&'*+/=?^_`{|}~\\-";
const _ = `(^|\\W\\.|[^/\\w.]|_)((?:http|https)://|mailto:)?(${`\\b\\w[${f}]*(?:\\.[${f}]+)*`}@)?(${`(?!_)(?:(?:${c})\\.)+(${u})(?!\\.${c})`})(?:(?!${c})|(?=_))(?:(?=[^:/?#])|(:\\d{1,5})?(${`/${d}*?`})?(${`\\?(?!${p})${d}*?`})?(${`#${d}*?`})?(?=${p}))`;
const g = 7;
const m = 8;
const h = 9;
const y = new Map([[34, 34], [41, 40], [62, 60], [93, 91], [125, 123], [187, 171], [8217, 8216], [8221, 8220]]);
const E = new Map([[34, 34], [40, 41], [60, 62], [91, 93], [123, 125], [171, 187], [8216, 8217], [8220, 8221]]);
const S = new RegExp(`${_}`, "ig");
const v = new RegExp(`\\.(?:${u})`, "i");
function T(e) {
  try {
    return S.exec(e);
  } catch (t) {
    __LOG__(4, undefined, new Error(), true)`text size: ${e.length}, error: ${String(t)}`;
    SEND_LOGS("linkify-regex-error");
    return null;
  }
}
function M(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (v.test(e)) {
    S.lastIndex = 0;
    return A(T(e), t);
  } else {
    return null;
  }
}
function A(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (!e) {
    return null;
  }
  const n = e[1].length;
  let r = e[0];
  const o = e.index + n;
  const {
    index: l
  } = e;
  const u = e[1] === "_";
  if (u && l - 1 && /\S/.test(e.input[l - 1])) {
    return null;
  }
  const c = e[5];
  if (c && c.startsWith("xn--") && !i.TLD.has(a.default.toUnicode(c))) {
    return null;
  }
  if (e[6]) {
    const t = parseInt(e[6].slice(1), 10);
    if (e[6][1] === "0" || !(t > 0 && t < 65536)) {
      return null;
    }
  }
  const d = [h, m, g].find(t => e && e[t]) || 0;
  if (d) {
    const t = [];
    let i = e[d];
    if (i.slice(-1) === "_" && r[o - 1] === "_") {
      r = r.slice(0, -1);
      e[d] = i = i.slice(0, -1);
    }
    let a = 0;
    let s = 0;
    for (let e = 0; e < i.length; e++) {
      const n = i.charCodeAt(e);
      if (n === s) {
        s = t.pop() || 0;
        if (s === 0) {
          a = e;
        }
      } else if (E.has(n)) {
        if (s !== 0) {
          t.push(s);
        }
        s = E.get(n);
      } else if (!y.has(n)) {
        if (s === 0) {
          a = e;
        }
      }
    }
    if (a !== i.length - 1) {
      const t = e.slice(2, d);
      t.splice(3, 1);
      r = t.filter(e => e).join("") + i.slice(0, a + 1);
      S.lastIndex = o + r.length;
    } else {
      r = r.slice(n);
    }
  } else {
    r = r.slice(n);
  }
  let p = r;
  let f = e[2];
  const _ = Boolean(f && f.match(s));
  if (t && !_) {
    return null;
  }
  if (f) {
    f = f.toLowerCase();
  } else {
    f = p.toLowerCase().indexOf("irc.") === 0 ? "irc://" : p.toLowerCase().indexOf("ftp.") === 0 ? "ftp://" : e[3] ? "mailto:" : "http://";
    p = f + p;
  }
  const v = e[4];
  return {
    href: p,
    url: r,
    index: o,
    input: e.input,
    scheme: f,
    username: e[3],
    domain: v,
    port: e[6],
    path: e[g],
    params: e[m],
    anchor: e[h],
    isHttp: _
  };
}