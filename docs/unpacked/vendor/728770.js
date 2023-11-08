const r = 2147483647;
const i = 36;
const a = /^xn--/;
const o = /[^\0-\x7E]/;
const s = /[\x2E\u3002\uFF0E\uFF61]/g;
const u = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
const l = Math.floor;
const c = String.fromCharCode;
function f(e) {
  throw new RangeError(u[e]);
}
function d(e, t) {
  const n = e.split("@");
  let r = "";
  if (n.length > 1) {
    r = n[0] + "@";
    e = n[1];
  }
  const i = function (e, t) {
    const n = [];
    let r = e.length;
    for (; r--;) {
      n[r] = t(e[r]);
    }
    return n;
  }((e = e.replace(s, ".")).split("."), t).join(".");
  return r + i;
}
export function ucs2decode(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r;) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const r = e.charCodeAt(n++);
      if ((r & 64512) == 56320) {
        t.push(((i & 1023) << 10) + (r & 1023) + 65536);
      } else {
        t.push(i);
        n--;
      }
    } else {
      t.push(i);
    }
  }
  return t;
}
export const ucs2encode = e => String.fromCodePoint(...e);
const m = function (e, t) {
  return e + 22 + (e < 26) * 75 - ((t != 0) << 5);
};
const v = function (e, t, n) {
  let r = 0;
  e = n ? l(e / 700) : e >> 1;
  e += l(e / t);
  for (; e > 455; r += i) {
    e = l(e / 35);
  }
  return l(r + e * 36 / (e + 38));
};
export const decode = function (e) {
  const t = [];
  const n = e.length;
  let a = 0;
  let o = 128;
  let s = 72;
  let u = e.lastIndexOf("-");
  if (u < 0) {
    u = 0;
  }
  for (let n = 0; n < u; ++n) {
    if (e.charCodeAt(n) >= 128) {
      f("not-basic");
    }
    t.push(e.charCodeAt(n));
  }
  for (let d = u > 0 ? u + 1 : 0; d < n;) {
    let u = a;
    for (let t = 1, o = i;; o += i) {
      if (d >= n) {
        f("invalid-input");
      }
      const u = (c = e.charCodeAt(d++)) - 48 < 10 ? c - 22 : c - 65 < 26 ? c - 65 : c - 97 < 26 ? c - 97 : i;
      if (u >= i || u > l((r - a) / t)) {
        f("overflow");
      }
      a += u * t;
      const h = o <= s ? 1 : o >= s + 26 ? 26 : o - s;
      if (u < h) {
        break;
      }
      const p = i - h;
      if (t > l(r / p)) {
        f("overflow");
      }
      t *= p;
    }
    const h = t.length + 1;
    s = v(a - u, h, u == 0);
    if (l(a / h) > r - o) {
      f("overflow");
    }
    o += l(a / h);
    a %= h;
    t.splice(a++, 0, o);
  }
  var c;
  return String.fromCodePoint(...t);
};
export const encode = function (e) {
  const t = [];
  let n = (e = ucs2decode(e)).length;
  let a = 128;
  let o = 0;
  let s = 72;
  for (const n of e) {
    if (n < 128) {
      t.push(c(n));
    }
  }
  let u = t.length;
  let d = u;
  for (u && t.push("-"); d < n;) {
    let n = r;
    for (const t of e) {
      if (t >= a && t < n) {
        n = t;
      }
    }
    const h = d + 1;
    if (n - a > l((r - o) / h)) {
      f("overflow");
    }
    o += (n - a) * h;
    a = n;
    for (const n of e) {
      if (n < a && ++o > r) {
        f("overflow");
      }
      if (n == a) {
        let e = o;
        for (let n = i;; n += i) {
          const r = n <= s ? 1 : n >= s + 26 ? 26 : n - s;
          if (e < r) {
            break;
          }
          const a = e - r;
          const o = i - r;
          t.push(c(m(r + a % o, 0)));
          e = l(a / o);
        }
        t.push(c(m(e, 0)));
        s = v(o, h, d == u);
        o = 0;
        ++d;
      }
    }
    ++o;
    ++a;
  }
  return t.join("");
};
export const toUnicode = function (e) {
  return d(e, function (e) {
    if (a.test(e)) {
      return decode(e.slice(4).toLowerCase());
    } else {
      return e;
    }
  });
};
export const toASCII = function (e) {
  return d(e, function (e) {
    if (o.test(e)) {
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