var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("../vendor/506479.js"));
var s = require("./396574.js");
var l = require("./791429.js");
var u = r(require("./373251.js"));
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
const d = ["canCut", "children", "className", "testid"];
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function f(e, t) {
  let {
    canCut: n,
    children: r,
    className: l,
    testid: p
  } = e;
  let f = (0, o.default)(e, d);
  const _ = (0, a.default)((0, a.default)({}, f), {}, {
    className: (0, s.classnamesConvertMeToStylexPlease)(l, u.default.noop, "copyable-area"),
    onCopy: m,
    onCut: n ? h : undefined
  });
  return c.default.createElement("div", (0, i.default)({}, _, {
    ref: t
  }), r);
}
var _ = (0, c.forwardRef)(f);
function g(e) {
  const t = e.currentTarget;
  if (!(t instanceof HTMLElement)) {
    return false;
  }
  const n = l.Clipboard.fromSelection(t, window.getSelection());
  e.clipboardData.setData("text/plain", n.toPlainString());
  try {
    e.clipboardData.setData(l.APP_TEXT_MIMETYPE, n.toAppString());
  } catch (e) {}
  return true;
}
function m(e) {
  if (g(e, window.getSelection())) {
    e.stopPropagation();
    e.preventDefault();
  }
}
function h(e) {
  const t = window.getSelection();
  if (g(e)) {
    t.deleteFromDocument();
    e.stopPropagation();
    e.preventDefault();
    e.target.dispatchEvent(new Event("input", {
      bubbles: true,
      cancelable: true
    }));
  }
}
exports.default = _;