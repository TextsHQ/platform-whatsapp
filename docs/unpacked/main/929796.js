var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/396574.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
var s = a(require("./695841.js"));
var c = a(require("../app/38085.js"));
var d = a(require("../app/49710.js"));
var f = a(require("../app/17533.js"));
const p = ["children", "className", "onResize"];
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  position: "g0rxnol2"
};
function g(e, t) {
  const {
    children: n,
    className: a,
    onResize: m
  } = e;
  const g = (0, o.default)(e, p);
  const E = (0, f.default)(m);
  const [v, _] = (0, s.default)();
  const y = (0, c.default)(v, t);
  const C = (0, d.default)(_);
  (0, i.useEffect)(() => {
    if (C != null && (_.width !== C.width || _.height !== C.height)) {
      const {
        width: e,
        height: t
      } = _;
      E({
        width: e,
        height: t
      });
    }
  }, [_, C, E]);
  return i.default.createElement("div", (0, r.default)({
    className: (0, l.classnamesConvertMeToStylexPlease)((0, u.default)(h), a),
    ref: y
  }, g), n);
}
var E = (0, i.forwardRef)(g);
exports.default = E;