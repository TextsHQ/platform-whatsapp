var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./46650.js"));
var o = a(require("../app/625903.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
var i = a(require("../app/156720.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = {
  visibilityOption: {
    display: "f804f6gw",
    paddingTop: "a71rq12o",
    paddingEnd: "f9ovudaz",
    paddingBottom: "pcbmd69e",
    paddingStart: "gx1rr48f",
    textAlign: "ml4r5409"
  },
  visibilityOptionText: {
    fontSize: "enbbiyaj",
    lineHeight: "r5qsrrlp",
    display: "l7jjieqr"
  },
  visibilityOptionSpace: {
    display: "l7jjieqr",
    width: "m0s4cjtr"
  }
};
function c(e, t) {
  let {
    text: n,
    selected: a,
    onClick: u,
    testid: c
  } = e;
  return l.default.createElement(o.default, {
    tabIndex: -1,
    ref: t,
    xstyle: s.visibilityOption,
    onClick: u,
    testid: c
  }, l.default.createElement(r.default, {
    checked: a,
    radio: true,
    hover: false,
    systemUncheckedColor: true,
    onChange: u,
    ariaLabel: n
  }), l.default.createElement("span", {
    className: (0, i.default)(s.visibilityOptionSpace)
  }), l.default.createElement("span", {
    className: (0, i.default)(s.visibilityOptionText)
  }, n));
}
var d = (0, l.forwardRef)(c);
exports.default = d;