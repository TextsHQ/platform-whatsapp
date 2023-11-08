var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BASE64_DATA_URL_SCHEME = undefined;
exports.decodeB64 = function (e) {
  const t = u(e, 43, 47, 61);
  if (t) {
    return t.buffer;
  }
  throw (0, i.default)("Base64.decode given invalid string");
};
exports.decodeB64ToJsArray = function (e) {
  const t = e instanceof ArrayBuffer ? new Uint8Array(e) : u(e, 43, 47, 61);
  return t && Array.from(t);
};
exports.decodeB64UrlSafe = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = u(e, 45, 95, t ? 61 : -1);
  if (n) {
    return n.buffer;
  }
  throw (0, i.default)("Base64.decode given invalid string");
};
exports.encodeB64 = o;
exports.encodeB64UrlSafe = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return s(e, 45, 95, t);
};
exports.isBase64 = undefined;
exports.randomBase64 = function (e) {
  const t = new Uint8Array(e);
  self.crypto.getRandomValues(t);
  return o(t);
};
exports.sizeWhenB64Decoded = function (e) {
  return Math.floor(e.length * 3 / 4);
};
var i = r(require("./415227.js"));
const a = 3000;
exports.BASE64_DATA_URL_SCHEME = "data:image/jpeg;base64,";
function o(e) {
  return s(e, 43, 47, true);
}
function s(e, t, n, r) {
  const i = Array.isArray(e) || e instanceof ArrayBuffer ? new Uint8Array(e) : e;
  if (i.length <= a) {
    return l(i, t, n, r);
  }
  {
    const e = [];
    for (let o = 0; o < i.length; o += a) {
      e.push(l(i.subarray(o, o + a), t, n, r));
    }
    return e.join("");
  }
}
function l(e, t, n, r) {
  const i = Math.ceil(e.length * 4 / 3);
  const a = Math.ceil(e.length / 3) * 4;
  const o = new Array(a);
  for (let t = 0, n = 0; t < a; t += 4, n += 3) {
    const r = e[n] << 16 | e[n + 1] << 8 | e[n + 2];
    o[t] = r >> 18;
    o[t + 1] = r >> 12 & 63;
    o[t + 2] = r >> 6 & 63;
    o[t + 3] = r & 63;
  }
  for (let e = 0; e < i; e++) {
    const r = o[e];
    o[e] = r < 26 ? 65 + r : r < 52 ? 71 + r : r < 62 ? r - 4 : r === 62 ? t : n;
  }
  for (let e = i; e < a; e++) {
    o[e] = 61;
  }
  const s = String.fromCharCode.apply(String, o);
  if (r) {
    return s;
  } else {
    return s.substring(0, i);
  }
}
function u(e, t, n, r) {
  let i = e.length;
  const a = new Int32Array(i + i % 4);
  for (let o = 0; o < i; o++) {
    const s = e.charCodeAt(o);
    if (s >= 65 && s <= 90) {
      a[o] = s - 65;
    } else if (s >= 97 && s <= 122) {
      a[o] = s - 71;
    } else if (s >= 48 && s <= 57) {
      a[o] = s + 4;
    } else if (s === t) {
      a[o] = 62;
    } else {
      if (s !== n) {
        if (s === r) {
          i = o;
          break;
        }
        if (self.ERROR != null) {
          __LOG__(4, undefined, new Error())`Found unexpected character code while decoding B64 at index ${o}, length ${i}: ${s}`;
        }
        return null;
      }
      a[o] = 63;
    }
  }
  const o = a.length / 4;
  for (let e = 0, t = 0; e < o; e++, t += 4) {
    a[e] = a[t] << 18 | a[t + 1] << 12 | a[t + 2] << 6 | a[t + 3];
  }
  const s = Math.floor(i * 3 / 4);
  const l = new Uint8Array(s);
  let u = 0;
  let c = 0;
  for (; c + 3 <= s; u++, c += 3) {
    const e = a[u];
    l[c] = e >> 16;
    l[c + 1] = e >> 8 & 255;
    l[c + 2] = e & 255;
  }
  switch (s - c) {
    case 2:
      l[c] = a[u] >> 16;
      l[c + 1] = a[u] >> 8 & 255;
      break;
    case 1:
      l[c] = a[u] >> 16;
  }
  return l;
}
exports.isBase64 = e => typeof e == "string" && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);