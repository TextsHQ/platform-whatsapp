var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrFromReference = s;
exports.attrStringFromReference = l;
exports.contentStringFromReference = function (e, t) {
  const n = u(e, t);
  if (!n.success) {
    return d(n);
  }
  const r = (0, o.contentString)(n.value);
  if (!r.success) {
    return d(r);
  }
  return r;
};
exports.optionalAttrFromReference = function (e, t, n, r, i) {
  if (c(t, n)) {
    return s(e, t, n, r, i);
  } else {
    return o.voidSuccess;
  }
};
exports.optionalAttrStringFromReference = function (e, t) {
  if (c(e, t)) {
    return l(e, t);
  } else {
    return o.voidSuccess;
  }
};
var i = r(require("./380815.js"));
var a = require("./135781.js");
var o = require("./686310.js");
function s(e, t, n, r, i) {
  const a = u(t, n);
  if (!a.success) {
    return d(a);
  }
  const o = e(a.value, n[n.length - 1], r, i);
  if (o.success) {
    return o;
  } else {
    return d(o);
  }
}
function l(e, t) {
  return s(o.attrString, e, t);
}
function u(e, t) {
  const n = t.length;
  let r = e;
  for (let e = 0; e < n - 1; e++) {
    const n = t[e];
    const i = (0, o.flattenedChildWithTag)(r, n);
    if (!i.success) {
      return i;
    }
    r = i.value;
  }
  return (0, a.makeResult)(r);
}
function c(e, t) {
  const n = u(e, t);
  return n.success && (0, i.default)(n.value.attrs, t[t.length - 1]);
}
function d(e) {
  return (0, a.makeError)(`in the reference, ${e.error}`);
}