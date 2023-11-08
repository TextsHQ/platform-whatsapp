var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttSendButton = undefined;
var r = a(require("../app/932325.js"));
var o = require("./377902.js");
var l = require("../vendor/548360.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  pttSendButton: {
    width: "mgp6u6um",
    minWidth: "c59meja3",
    height: "j8e73hjv",
    color: "i8t1ujht"
  },
  pttSendButtonEnabled: {
    ":hover": {
      color: "fiyt298h"
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
  },
  pttSendButtonIconRTL: {
    transform: "n4o0o7gj"
  }
};
const d = (0, i.forwardRef)((e, t) => {
  const {
    disabled: n = false,
    confirmOnMouseUp: a,
    onConfirm: s
  } = e;
  return i.default.createElement(o.PttButton, {
    ref: t,
    xstyle: [c.pttSendButton, !n && c.pttSendButtonEnabled],
    testid: "ptt-send-btn",
    ariaLabel: l.fbt._("Send", null, {
      hk: "4xIWBB"
    }),
    confirmOnMouseUp: a,
    onConfirm: s,
    disabled: n
  }, i.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 35 35",
    className: (0, u.default)(r.default.isRTL() && c.pttSendButtonIconRTL)
  }, i.default.createElement("path", {
    d: "M17.5,0h0A17.51,17.51,0,0,1,35,17.5h0A17.51,17.51,0,0,1,17.5,35h0A17.51,17.51,0,0,1,0,17.5H0A17.51,17.51,0,0,1,17.5,0Z",
    fill: "currentColor"
  }), i.default.createElement("path", {
    className: (0, u.default)(c.growOnHover, !n && c.growOnHoverEnabled),
    d: "M25.64,18.55,11.2,24.93a.86.86,0,0,1-1.13-.44.83.83,0,0,1-.06-.44l.48-4.11a1.36,1.36,0,0,1,1.24-1.19l7.51-.6a.16.16,0,0,0,.14-.16.16.16,0,0,0-.14-.14l-7.51-.6a1.36,1.36,0,0,1-1.24-1.19L10,12a.84.84,0,0,1,.74-.94.87.87,0,0,1,.45.06l14.44,6.38a.61.61,0,0,1,.31.79A.59.59,0,0,1,25.64,18.55Z",
    fill: "#fff"
  })));
});
exports.PttSendButton = d;
d.displayName = "PttSendButton";