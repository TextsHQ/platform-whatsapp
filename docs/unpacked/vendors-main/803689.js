const n = 2147483647;
const a = 36;
const o = /^xn--/;
const i = /[^\0-\x7E]/;
const u = /[\x2E\u3002\uFF0E\uFF61]/g;
const c = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
const s = Math.floor;
const l = String.fromCharCode;
function f(e) {
  throw new RangeError(c[e]);
}
function d(e, t) {
  const r = e.split("@");
  let n = "";
  if (r.length > 1) {
    n = r[0] + "@";
    e = r[1];
  }
  const a = function (e, t) {
    const r = [];
    let n = e.length;
    for (; n--;) {
      r[n] = t(e[n]);
    }
    return r;
  }((e = e.replace(u, ".")).split("."), t).join(".");
  return n + a;
}
export function ucs2decode(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n;) {
    const a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      const n = e.charCodeAt(r++);
      if ((n & 64512) == 56320) {
        t.push(((a & 1023) << 10) + (n & 1023) + 65536);
      } else {
        t.push(a);
        r--;
      }
    } else {
      t.push(a);
    }
  }
  return t;
}
export const ucs2encode = e => String.fromCodePoint(...e);
const h = function (e, t) {
  return e + 22 + (e < 26) * 75 - ((t != 0) << 5);
};
const y = function (e, t, r) {
  let n = 0;
  e = r ? s(e / 700) : e >> 1;
  e += s(e / t);
  for (; e > 455; n += a) {
    e = s(e / 35);
  }
  return s(n + e * 36 / (e + 38));
};
export const decode = function (e) {
  const t = [];
  const r = e.length;
  let o = 0;
  let i = 128;
  let u = 72;
  let c = e.lastIndexOf("-");
  if (c < 0) {
    c = 0;
  }
  for (let r = 0; r < c; ++r) {
    if (e.charCodeAt(r) >= 128) {
      f("not-basic");
    }
    t.push(e.charCodeAt(r));
  }
  for (let d = c > 0 ? c + 1 : 0; d < r;) {
    let c = o;
    for (let t = 1, i = a;; i += a) {
      if (d >= r) {
        f("invalid-input");
      }
      const c = (l = e.charCodeAt(d++)) - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : a;
      if (c >= a || c > s((n - o) / t)) {
        f("overflow");
      }
      o += c * t;
      const p = i <= u ? 1 : i >= u + 26 ? 26 : i - u;
      if (c < p) {
        break;
      }
      const v = a - p;
      if (t > s(n / v)) {
        f("overflow");
      }
      t *= v;
    }
    const p = t.length + 1;
    u = y(o - c, p, c == 0);
    if (s(o / p) > n - i) {
      f("overflow");
    }
    i += s(o / p);
    o %= p;
    t.splice(o++, 0, i);
  }
  var l;
  return String.fromCodePoint(...t);
};
export const encode = function (e) {
  const t = [];
  let r = (e = ucs2decode(e)).length;
  let o = 128;
  let i = 0;
  let u = 72;
  for (const r of e) {
    if (r < 128) {
      t.push(l(r));
    }
  }
  let c = t.length;
  let d = c;
  for (c && t.push("-"); d < r;) {
    let r = n;
    for (const t of e) {
      if (t >= o && t < r) {
        r = t;
      }
    }
    const p = d + 1;
    if (r - o > s((n - i) / p)) {
      f("overflow");
    }
    i += (r - o) * p;
    o = r;
    for (const r of e) {
      if (r < o && ++i > n) {
        f("overflow");
      }
      if (r == o) {
        let e = i;
        for (let r = a;; r += a) {
          const n = r <= u ? 1 : r >= u + 26 ? 26 : r - u;
          if (e < n) {
            break;
          }
          const o = e - n;
          const i = a - n;
          t.push(l(h(n + o % i, 0)));
          e = s(o / i);
        }
        t.push(l(h(e, 0)));
        u = y(i, p, d == c);
        i = 0;
        ++d;
      }
    }
    ++i;
    ++o;
  }
  return t.join("");
};
export const toUnicode = function (e) {
  return d(e, function (e) {
    if (o.test(e)) {
      return decode(e.slice(4).toLowerCase());
    } else {
      return e;
    }
  });
};
export const toASCII = function (e) {
  return d(e, function (e) {
    if (i.test(e)) {
      return "xn--" + encode(e);
    } else {
      return e;
    }
  });
};
export default {
  version: "2.1.0",
  ucs2: {
    decode: ucs2decode,
    encode: ucs2encode
  },
  decode: decode,
  encode: encode,
  toASCII: toASCII,
  toUnicode: toUnicode
};