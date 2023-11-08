var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/625903.js"));
var o = require("../app/561912.js");
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
  closeBtn: {
    flexShrink: "oq44ahr5",
    paddingTop: "fbgy3m38",
    paddingEnd: "ft2m32mm",
    paddingBottom: "oq31bsqd",
    paddingStart: "nu34rnf1",
    marginStart: "jwvfxh5v",
    color: "cs9t9or5"
  },
  subheaderContainer: {
    paddingTop: "emrlamx0",
    paddingEnd: "l9g3jx6n",
    paddingBottom: "aiput80m",
    paddingStart: "i8b31kl9",
    backgroundColor: "f6ipylw5",
    width: "ln8gz9je"
  },
  subheader: {
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  },
  main: {
    flexGrow: "ggj6brxn",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textAlign: "ljrqcn24"
  },
  defaultCursor: {
    cursor: "bx7g2weo"
  }
};
function c(e, t) {
  const {
    onClick: n,
    onClose: a,
    children: u,
    xstyle: c,
    onMouseEnter: d,
    onMouseLeave: f
  } = e;
  const p = a ? l.default.createElement(r.default, {
    xstyle: s.closeBtn,
    onClick: e => {
      e.stopPropagation();
      if (!(a == null)) {
        a();
      }
    },
    testid: "close-button"
  }, l.default.createElement(o.XIcon, null)) : null;
  return l.default.createElement(r.default, {
    ref: t,
    xstyle: [s.subheaderContainer, n == null && s.defaultCursor, c],
    onClick: n,
    onMouseEnter: d,
    onMouseLeave: f,
    testid: "conversation-subheader"
  }, l.default.createElement("div", {
    className: (0, i.default)(s.subheader)
  }, l.default.createElement("div", {
    className: (0, i.default)(s.main)
  }, u), p));
}
var d = (0, l.forwardRef)(c);
exports.default = d;