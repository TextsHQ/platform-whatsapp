var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttButton = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/396574.js");
var l = a(require("../app/335540.js"));
var i = a(require("./887563.js"));
var u = require("../main-chunk/931109.js");
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
const f = (0, s.forwardRef)((e, t) => {
  const {
    testid: n,
    ariaLabel: a,
    children: d,
    xstyle: f,
    confirmOnMouseUp: p,
    disabled: m,
    onConfirm: h,
    dataTab: g
  } = e;
  const E = (0, s.useRef)(null);
  (0, s.useImperativeHandle)(t, () => ({
    focus: () => l.default.focus((0, r.default)(E.current, "buttonRef.current"))
  }));
  const v = (0, s.useRef)(false);
  let _;
  let y;
  let C;
  if (!m) {
    y = () => {
      v.current = true;
      window.addEventListener("mouseup", () => {
        v.current = false;
      }, {
        once: true
      });
    };
    _ = e => {
      if (p) {
        if (!v.current) {
          if (e.button === 0) {
            h(e);
          }
        }
      }
    };
    C = h;
  }
  return s.default.createElement("button", {
    ref: E,
    "data-tab": g != null ? g : u.TAB_ORDER.PTT_BUTTON,
    className: (0, o.classnamesConvertMeToStylexPlease)((0, c.default)(f), i.default.clipFix),
    onClick: C,
    onMouseUp: _,
    onMouseDown: y,
    "aria-label": a,
    "aria-disabled": m
  }, d);
});
exports.PttButton = f;
f.displayName = "PttButton";