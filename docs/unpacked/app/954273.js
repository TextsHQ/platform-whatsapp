Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markerEnded = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const i = `${e}|${t}`;
  n.delete(i);
  r.delete(i);
};
exports.validateAnnotations = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let r = arguments.length > 2 ? arguments[2] : undefined;
  let i = arguments.length > 3 ? arguments[3] : undefined;
  const a = `${e}|${t}`;
  const o = n.get(a) || 0;
  let s = 0;
  function l(n, r) {
    s += r;
    return !(s + o > 1000) || (i == null || i.annotationSizeLimitExceeded(e, t, n), false);
  }
  function u(n) {
    for (let r = 0; r < n.length; r++) {
      return !(n[r].length > 50) || (i == null || i.annotationKeyTooLong(e, t, n[r]), false);
    }
  }
  if (r == null ? undefined : r.bool) {
    const e = Object.keys(r.bool);
    if (!l("bool", e.length) || !u(e)) {
      return false;
    }
  }
  if (r == null ? undefined : r.int) {
    const e = Object.keys(r.int);
    if (!l("int", e.length) || !u(e)) {
      return false;
    }
  }
  if (r == null ? undefined : r.double) {
    const e = Object.keys(r.double);
    if (!l("double", e.length) || !u(e)) {
      return false;
    }
  }
  if (r == null ? undefined : r.bool_array) {
    const e = r.bool_array;
    const t = Object.keys(e);
    for (let n = 0; n < t.length; n++) {
      const r = e[t[n]];
      if (r && !l(t[n], r.length)) {
        return false;
      }
    }
    if (!u(t)) {
      return false;
    }
  }
  if (r == null ? undefined : r.int_array) {
    const e = r.int_array;
    const t = Object.keys(e);
    for (let n = 0; n < t.length; n++) {
      const r = e[t[n]];
      if (r && !l(t[n], r.length)) {
        return false;
      }
    }
    if (!u(t)) {
      return false;
    }
  }
  if (r == null ? undefined : r.double_array) {
    const e = r.double_array;
    const t = Object.keys(e);
    for (let n = 0; n < t.length && r.double_array; n++) {
      const r = e[t[n]];
      if (r && !l(t[n], r.length)) {
        return false;
      }
    }
    if (!u(t)) {
      return false;
    }
  }
  if (r == null ? undefined : r.string) {
    const e = r.string;
    const t = Object.keys(e);
    for (let n = 0; n < t.length && r.string; n++) {
      const r = e[t[n]];
      if (r != null && !l(t[n], r.length)) {
        return false;
      }
    }
    if (!u(t)) {
      return false;
    }
  }
  if (r == null ? undefined : r.string_array) {
    const e = r.string_array;
    const t = Object.keys(e);
    for (let n = 0; n < t.length && r.string_array; n++) {
      const r = e[t[n]];
      if (r) {
        for (let e = 0; e < r.length; e++) {
          if (!l(t[n], r[e].length)) {
            return false;
          }
        }
      }
    }
    if (!u(t)) {
      return false;
    }
  }
  n.set(a, o + s);
  return true;
};
exports.validatePoints = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  let i = arguments.length > 3 ? arguments[3] : undefined;
  if (n.length > 50) {
    if (!(i == null)) {
      i.pointNameTooLong(e, t, n);
    }
    return false;
  }
  const a = `${e}|${t}`;
  const o = r.get(a) || 0;
  if (o + 1 > 1000) {
    if (!(i == null)) {
      i.maxPointCountExceeded(e, t);
    }
    return false;
  }
  r.set(a, o + 1);
  return true;
};
const n = new Map();
const r = new Map();