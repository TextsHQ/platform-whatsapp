Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeStanzas = o;
exports.optionalMerge = function (e, t, n, r) {
  if (n != null) {
    return e(t, n, r);
  }
  return t;
};
var r = require("./459617.js");
var i = require("./718682.js");
const a = "smax$any";
function o(e, t) {
  (function (e, t) {
    const n = e.tag;
    const r = t.tag;
    if (r === a) {
      return;
    }
    if (n !== r) {
      throw new Error(`tag mismatch: ${n} != ${r}`);
    }
  })(e, t);
  (function (e, t) {
    const n = e.attrs;
    const r = t.attrs;
    Object.keys(r).forEach(e => {
      const t = r[e];
      const a = n[e];
      if (t != null && a != null) {
        if (function (e, t) {
          if (typeof e == "string" && typeof t == "string") {
            return e === t;
          }
          if (e instanceof i.WapJid && t instanceof i.WapJid) {
            return e.toString() === t.toString();
          }
          return false;
        }(t, a)) {
          return;
        }
        throw new Error(`conflict for key: ${e}`);
      }
      n[e] = t;
    });
  })(e, t);
  if (t.content instanceof Uint8Array) {
    (function (e, t) {
      const n = e.content;
      if (n instanceof Uint8Array) {
        if (!(0, r.uint8ArraysEqualUNSAFE)(n, t)) {
          throw new Error("elementValue mismatch: bytes dose not equal");
        }
        return;
      }
      if (n != null) {
        throw new Error("elementValue mismatch: destination has children");
      }
      e.content = t;
    })(e, t.content);
  } else if (t.content != null) {
    (function (e, t) {
      const n = e.content;
      if (n instanceof Uint8Array) {
        throw new Error("children mismatch: destination has element value");
      }
      if (n == null || n.length === 0) {
        return void (e.content = t);
      }
      if (!function (e, t) {
        const n = s(t);
        const r = s(e);
        const i = Object.keys(n);
        for (let e = 0; e < i.length; e++) {
          const t = i[e];
          const a = n[t];
          const o = r[t];
          if (a != null && o != null && a !== o) {
            return false;
          }
        }
        return true;
      }(n, t)) {
        throw new Error("children mismatch: child counts are not compatible");
      }
      const r = [];
      const i = Array.from(n);
      t.forEach(e => {
        const t = i.findIndex(t => t.tag === e.tag);
        if (t === -1) {
          r.push(e);
        } else {
          const n = o(i.splice(t, 1)[0], e);
          r.push(n);
        }
      });
      i.forEach(e => r.push(e));
      e.content = r;
    })(e, t.content);
  }
  return e;
}
function s(e) {
  return e.reduce((e, t) => {
    const n = t.tag;
    const r = e[n];
    e[n] = r == null ? 1 : r + 1;
    return e;
  }, {});
}