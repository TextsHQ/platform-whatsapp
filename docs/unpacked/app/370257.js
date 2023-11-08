Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codePointAt = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (e.codePointAt) {
    return e.codePointAt(t);
  }
  let n = e.charCodeAt(t);
  if (n >= 55296 && n <= 56319) {
    const r = e.charCodeAt(t + 1);
    if (r >= 56320 && r <= 57343) {
      n = 65536 + (n - 55296 << 10) + (r - 56320);
    }
  }
  return n;
};
exports.firstNCodepoints = function (e, t) {
  return i(e || "", 0, t);
};
exports.firstNEncodedBytes = function (e, t) {
  if (t == null) {
    return e;
  }
  if (encodeURI(e).length <= t) {
    return e;
  }
  let n = 0;
  const r = a(e);
  const o = r.length;
  for (let a = 0; a < o; a++) {
    const o = r[a];
    const s = encodeURI(o).length;
    if (n + s > t) {
      return i(e, 0, a);
    }
    n += s;
  }
  return e;
};
exports.numCodepoints = function (e) {
  return (0, r.length)(e || "");
};
exports.substring = i;
exports.toArray = a;
var r = require("./849360.js");
function i(e, t, n) {
  if (e == null || e === "") {
    return "";
  }
  const i = t || 0;
  const a = n == null ? 1 / 0 : n;
  if (i === 0 && a === 1 / 0) {
    return e;
  } else if (e.length >= 5000 && a / e.length <= 0.5) {
    return function (e, t, n) {
      const i = new RegExp(r.astralRange);
      let a;
      let o = "";
      let s = 0;
      do {
        a = i.exec(e);
        if (a) {
          o += a[0];
        }
        s++;
      } while (a && s < n);
      return o;
    }(e, 0, a);
  } else {
    return (0, r.substring)(e, i, a);
  }
}
function a(e, t, n) {
  const i = e || "";
  const a = t || 0;
  const o = n == null ? 1 / 0 : n;
  if (i.length >= 5000 && o / i.length <= 0.5) {
    return function (e, t, n) {
      const i = new RegExp(r.astralRange);
      const a = [];
      let o;
      do {
        o = i.exec(e);
        if (o) {
          a.push(o[0]);
        }
      } while (o && a.length < n);
      return a;
    }(i, 0, o);
  } else {
    return (0, r.toArray)(i).slice(a, o);
  }
}