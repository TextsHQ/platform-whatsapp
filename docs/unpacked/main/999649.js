var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.READ_MORE_BUTTON_CLASSNAME = exports.ExpandableText = undefined;
var r = require("../app/370257.js");
var o = require("../app/396574.js");
var l = require("../app/950987.js");
var i = a(require("./592713.js"));
var u = require("../vendor/548360.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var c = a(require("../app/156720.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  color: "o0rubyzf",
  whiteSpace: "le5p0ye3",
  cursor: "ajgl1lbb",
  display: "l7jjieqr"
};
const p = "read-more-button";
exports.READ_MORE_BUTTON_CLASSNAME = p;
function m(e, t) {
  let {
    text: n,
    textLimit: a,
    children: r
  } = e;
  const d = (0, s.useRef)(n);
  const [m, g] = (0, s.useState)(() => h(n, a, a) ? a : 1 / 0);
  const E = (0, s.useContext)(i.default);
  const [v, _] = (0, s.useState)(false);
  (0, s.useImperativeHandle)(t, () => ({
    isExpanded: v
  }));
  if (d.current !== n) {
    d.current = n;
    g(h(n, a, a) ? a : 1 / 0);
    _(false);
  }
  return s.default.createElement(s.default.Fragment, null, r({
    textLimit: m
  }), m !== 1 / 0 ? s.default.createElement(l.Clickable, {
    className: (0, o.classnamesConvertMeToStylexPlease)((0, c.default)(f), p),
    dataTestId: "caption-read-more-button",
    preventDefaultKeyboard: true,
    onClick: () => {
      E();
      _(true);
      const e = m + 3072;
      g(h(n, e, 3072) ? e : 1 / 0);
    }
  }, " ", u.fbt._("Read more", null, {
    hk: "2DvSvh"
  })) : null);
}
function h(e, t, n) {
  return (0, r.numCodepoints)(e) - t > n * 0.1;
}
const g = (0, s.memo)((0, s.forwardRef)(m));
exports.ExpandableText = g;
g.displayName = "ExpandableText";