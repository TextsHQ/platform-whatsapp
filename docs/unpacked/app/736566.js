Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeToEncType = function (e) {
  if (e & a.PACKED) {
    return l.BINARY;
  }
  const t = e & s;
  if (t <= o.ENUM) {
    return l.VARINT;
  } else if (t <= o.DOUBLE) {
    return l.BIT64;
  } else if (t <= o.MESSAGE) {
    return l.BINARY;
  } else {
    return l.BIT32;
  }
};
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, o, s);
      } else {
        r[o] = e[o];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./751206.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const {
  FLAGS: a,
  TYPES: o,
  TYPE_MASK: s,
  ENC: l
} = r;