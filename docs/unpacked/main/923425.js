var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttPlayPauseButton = undefined;
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
  base: {
    width: "i0x3nve6",
    height: "hpdpob1j"
  },
  composeBox: {
    color: "a95u9rhs"
  },
  composeBoxEnabled: {
    ":hover": {
      color: "sao4npu1"
    }
  },
  outOfChat: {
    width: "mgp6u6um",
    height: "j8e73hjv",
    marginStart: "pmmx02fg",
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
const c = {
  transform: "d7dzraxg"
};
const d = (0, l.forwardRef)((e, t) => {
  const {
    paused: n,
    onConfirm: a,
    disabled: u = false,
    theme: d,
    dataTab: f
  } = e;
  const p = n ? l.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16px",
    height: "18px",
    viewBox: "0 0 16 18",
    className: (0, i.default)(c)
  }, l.default.createElement("path", {
    d: "M15.05,8.39,2,.32a1,1,0,0,0-1.53.85V16.83A1,1,0,0,0,2,17.7L15,10.1A1,1,0,0,0,15.05,8.39Z",
    fill: "currentColor"
  })) : l.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16px",
    height: "18px",
    viewBox: "0 0 16 18"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M1.9,1c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1H5c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1H1.9z"
  }), l.default.createElement("path", {
    fill: "currentColor",
    d: "M10.9,1c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1H10.9z"
  }));
  return l.default.createElement(r.PttButton, {
    ref: t,
    xstyle: [s.base, d === "compose-box" && s.composeBox, d === "compose-box" && !u && s.composeBoxEnabled, d === "out-of-chat-playback" && s.outOfChat, d === "out-of-chat-playback" && !u && s.outOfChatEnabled],
    testid: "ptt-play-pause-button",
    onConfirm: a,
    confirmOnMouseUp: false,
    disabled: u,
    dataTab: f,
    ariaLabel: n ? o.fbt._("Play", null, {
      hk: "4CjEWt"
    }) : o.fbt._("Pause", null, {
      hk: "1kvbzt"
    })
  }, p);
});
exports.PttPlayPauseButton = d;
d.displayName = "PttPlayPauseButton";