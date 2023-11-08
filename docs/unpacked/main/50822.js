var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, d.default)(o.NUX.TOOLTIP_AD_CREATION);
  const {
    tooltip: a,
    showTooltip: p,
    hideTooltip: h,
    tooltipIsVisible: g
  } = (0, l.useTooltip)({
    target: e.refAnchorElement,
    element: s.default.createElement("div", {
      className: (0, c.default)(m)
    }, u.fbt._("Reach new customers by advertising on Facebook & Instagram", null, {
      hk: "16X8jK"
    })),
    position: l.PopoverPosition.Bottom,
    alignment: l.PopoverAlignment.Center
  });
  const E = e.refAnchorElement.current;
  (0, f.useOnOutsideClick)(e.refAnchorElement, (0, s.useCallback)((e, t) => {
    if (g) {
      (0, r.logAdCreationIconTooltip)(i.TOOLTIP_ACTION.DISMISS);
      n();
      h();
    }
    t();
  }, [n, h, g]));
  (0, s.useEffect)(() => {
    if (!t) {
      return;
    }
    const e = () => {
      (0, r.logAdCreationIconTooltip)(i.TOOLTIP_ACTION.ENTER_AD_CREATION_FLOW);
      n();
      h();
    };
    if (!(E == null)) {
      E.addEventListener("mousedown", e);
    }
    return () => {
      if (!(E == null)) {
        E.removeEventListener("mousedown", e);
      }
    };
  }, [E, t, n, h]);
  (0, s.useEffect)(() => {
    if (t && E != null && a == null) {
      p();
    }
  }, [n, t, a, E, p, h]);
  (0, s.useEffect)(() => {
    if (t && g) {
      const e = self.setTimeout(() => {
        if (g) {
          n();
          h();
          (0, r.logAdCreationIconTooltip)(i.TOOLTIP_ACTION.IGNORE);
        }
      }, 5000);
      return () => {
        self.clearTimeout(e);
      };
    }
  }, [t, g, n, h]);
  return a;
};
var r = require("./445693.js");
var o = require("../app/95589.js");
var l = require("../app/258290.js");
var i = require("./567897.js");
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
  var n = p(t);
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
var d = a(require("./157558.js"));
var f = require("./667100.js");
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
const m = {
  width: "oj0qj1ob"
};