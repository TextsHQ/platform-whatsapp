var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttCloseButton = undefined;
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
  var n = i(t);
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
a(require("../app/156720.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = {
  base: {
    width: "i0x3nve6",
    height: "hpdpob1j"
  },
  outOfChat: {
    width: "mgp6u6um",
    height: "j8e73hjv",
    marginStart: "p3lsiedt",
    marginTop: "b9l0eqez",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    color: "bsd0t79a"
  },
  outOfChatEnabled: {
    ":hover": {
      opacity: "gnd3v8n5"
    }
  }
};
const s = (0, l.forwardRef)((e, t) => {
  const {
    onConfirm: n,
    dataTab: a,
    theme: i,
    disabled: s = false
  } = e;
  const c = i === "out-of-chat-playback";
  return l.default.createElement(r.PttButton, {
    ref: t,
    xstyle: [u.base, c && u.outOfChat, c && !s && u.outOfChatEnabled],
    testid: "ptt-player-close-button",
    onConfirm: n,
    confirmOnMouseUp: false,
    dataTab: a,
    disabled: s,
    ariaLabel: o.fbt._("Close", null, {
      hk: "2TV3vP"
    })
  }, l.default.createElement("svg", {
    width: "15.6",
    height: "15.6",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, l.default.createElement("path", {
    d: "M15.8002 1.80001L14.2002 0.200012L8.0002 6.40001L1.8002 0.200012L0.200195 1.80001L6.4002 8.00001L0.200195 14.2L1.8002 15.8L8.0002 9.60001L14.2002 15.8L15.8002 14.2L9.6002 8.00001L15.8002 1.80001Z",
    fill: "white"
  })));
});
exports.PttCloseButton = s;
s.displayName = "PttCloseButton";