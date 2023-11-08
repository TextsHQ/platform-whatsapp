var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttStopButton = undefined;
var r = require("./377902.js");
var o = require("../vendor/548360.js");
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
  pttStopButton: {
    width: "tknnhhou",
    height: "sai7fuui",
    color: "odoy9p39"
  },
  pttStopButtonEnabled: {
    ":hover": {
      color: "qpj2ed6z"
    }
  },
  growOnHover: {
    transition: "iwt3stqw",
    transformOrigin: "s79hpmcy"
  },
  growOnHoverEnabled: {
    ":hover": {
      transform: "ksz6vod1"
    }
  }
};
const c = (0, l.forwardRef)((e, t) => {
  const {
    onConfirm: n,
    confirmOnMouseUp: a,
    disabled: u = false
  } = e;
  return l.default.createElement(r.PttButton, {
    ref: t,
    xstyle: [s.pttStopButton, !u && s.pttStopButtonEnabled],
    testid: "ptt-stop-button",
    ariaLabel: o.fbt._("Stop", null, {
      hk: "3e89E3"
    }),
    confirmOnMouseUp: a,
    onConfirm: n,
    disabled: u
  }, l.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2 s14,6.3,14,14S23.7,30,16,30z"
  }), l.default.createElement("path", {
    className: (0, i.default)(s.growOnHover, !u && s.growOnHoverEnabled),
    fill: "currentColor",
    d: "M13,11c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2v-6c0-1.1-0.9-2-2-2H13z"
  })));
});
exports.PttStopButton = c;
c.displayName = "PttStopButton";