var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = require("./362874.js");
var l = require("../app/792522.js");
var i = require("../app/787827.js");
var u = require("./585110.js");
var s = require("../app/305521.js");
var c = a(require("../app/466770.js"));
var d = a(require("../app/932325.js"));
var f = require("./245309.js");
var p = require("./939041.js");
var m = require("../app/787742.js");
var h = require("../app/411342.js");
var g = require("../app/163139.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
var v = a(require("../app/156720.js"));
var _ = require("./871210.js");
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const C = {
  iconMissColor: {
    color: "mvxzr2tb"
  }
};
function b(e, t) {
  const {
    msg: n,
    contact: a,
    iconStyle: y
  } = e;
  const [b] = (0, _.useMsgValues)(e.msg.id, [m.getSubtype]);
  const M = (0, E.useRef)(null);
  const S = () => {
    var e;
    if (!((e = M.current) === null || e === undefined)) {
      e.click();
    }
  };
  (0, E.useImperativeHandle)(t, () => ({
    handleKeyActivation: S
  }));
  const T = (0, i.getUserDesktopOs)();
  const w = (0, l.useWAWebDesktopUpsellAbPropCheckMissedCalls)();
  const A = (0, l.useWAWebDesktopUpsellPlatformCheck)();
  const P = w && A;
  const O = E.default.createElement("div", {
    className: (0, v.default)(y)
  }, b === "miss_video" || b === "miss_group_video" ? E.default.createElement(p.MissVideoIcon, {
    xstyle: C.iconMissColor
  }) : E.default.createElement(f.MissIcon, {
    xstyle: C.iconMissColor
  }));
  const k = (0, c.default)((0, g.unproxy)(n.unsafe()), true);
  const D = E.default.createElement("span", null, O, E.default.createElement(s.EmojiText, {
    direction: d.default.isRTL() ? "rtl" : "ltr",
    text: k
  }));
  if (P === true) {
    return E.default.createElement("div", {
      role: "button",
      ref: M,
      onClick: null
    }, P === true ? E.default.createElement(u.Dropdown, {
      target: M,
      alignment: h.PopoverAlignment.Center,
      position: h.PopoverPosition.Top,
      buffer: 12
    }, E.default.createElement(o.WAWebDesktopUpsellCallingMissedCallPopover, {
      userDesktopOs: (0, r.default)(T, "userDesktopOs")
    })) : null, D);
  } else {
    return D;
  }
}
var M = (0, E.forwardRef)(b);
exports.default = M;