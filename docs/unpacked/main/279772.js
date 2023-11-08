var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenuItem = function (e) {
  const {
    children: t
  } = e;
  const n = (0, o.default)(e, d);
  const {
    activeItemId: a
  } = (0, u.useMenu)();
  const f = (0, c.useRef)(null);
  const p = (0, c.useRef)();
  const m = a === e.optionId;
  (0, c.useEffect)(() => {
    if (p.current != null) {
      if (m) {
        p.current.showPopover();
      } else {
        p.current.hidePopover();
      }
    }
  }, [m]);
  return c.default.createElement(s.WDSMenuItem, (0, r.default)({
    ref: f
  }, n, {
    type: "submenu",
    onSelect: () => {
      if (p.current != null) {
        if (p.current.popoverIsVisible) {
          p.current.hidePopover();
        } else {
          p.current.showPopover();
        }
      }
    },
    detailRight: c.default.createElement(l.ChevronRightIcon, {
      width: 20
    })
  }), c.default.createElement(i.DropdownMenu, {
    controllerRef: p,
    buffer: -8,
    target: f,
    position: i.PopoverPosition.End,
    alignment: i.PopoverAlignment.Start,
    initHandling: "hover-popover"
  }, t));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("./397454.js");
var i = require("./585110.js");
var u = require("./268541.js");
var s = require("./957533.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
const d = ["children"];
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}