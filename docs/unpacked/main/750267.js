var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttPauseAndResumeRecordingButton = undefined;
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
  pttPauseAndResumeRecordingButton: {
    position: "g0rxnol2",
    width: "tknnhhou",
    height: "sai7fuui",
    color: "odoy9p39"
  },
  pttPauseAndResumeRecordingButtonEnabled: {
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
  },
  icon: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    opacity: "axi1ht8l",
    transition: "odkvbdo1",
    transform: "sqzaidt6"
  },
  iconActive: {
    opacity: "bs7a17vp",
    transform: "b4xm8rjh"
  }
};
const c = (0, l.forwardRef)((e, t) => {
  const {
    recording: n,
    onConfirm: a,
    confirmOnMouseUp: u,
    disabled: c = false
  } = e;
  const d = n ? o.fbt._("Pause recording", null, {
    hk: "2x8PGf"
  }) : o.fbt._("Resume recording", null, {
    hk: "4nMHh3"
  });
  const f = (0, i.default)(s.growOnHover, !c && s.growOnHoverEnabled);
  return l.default.createElement(r.PttButton, {
    ref: t,
    xstyle: [s.pttPauseAndResumeRecordingButton, !c && s.pttPauseAndResumeRecordingButtonEnabled],
    testid: "ptt-pause-and-resume-recording-button",
    ariaLabel: d,
    confirmOnMouseUp: u,
    onConfirm: a,
    disabled: c
  }, l.default.createElement("div", {
    className: (0, i.default)(s.icon, n && s.iconActive)
  }, l.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, l.default.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "14.75",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }), l.default.createElement("path", {
    className: f,
    d: "M20.65,21.69V10.25H17.31V21.69Zm-9.3-11.44V21.69h3.34V10.25Z",
    fill: "currentColor"
  }))), l.default.createElement("div", {
    className: (0, i.default)(s.icon, !n && s.iconActive)
  }, l.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    className: f
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M16,4c1.9,0,3.4,1.4,3.4,3.1v8.6c0,1.7-1.5,3.1-3.4,3.1 c-1.9,0-3.4-1.4-3.4-3.1V7.1C12.6,5.4,14.1,4,16,4"
  }), l.default.createElement("path", {
    fill: "currentColor",
    d: "M16.3,23.4c-0.2,0-0.6,0-0.9,0l-0.3,0c-3.7-0.4-6.6-3.7-7.1-7.8 L8,15.2c0-0.5,0.3-0.9,0.8-0.9h0.4c0.5,0,0.8,0.4,0.9,0.9l0.1,0.4c0.5,3.1,3,5.5,5.9,5.5c2.9,0,5.3-2.3,5.9-5.4l0.1-0.4 c0-0.5,0.4-0.9,0.9-0.9h0.4c0.4,0,0.8,0.4,0.8,0.9c0,0,0,0.1-0.1,0.6c-0.6,4.1-3.7,7.3-7.4,7.6L16.3,23.4z"
  }), l.default.createElement("path", {
    fill: "currentColor",
    d: "M17.1,27.3c0,0.4-0.4,0.7-0.9,0.7h-0.5c-0.5,0-0.9-0.3-0.9-0.7V23 c0-0.4,0.4-0.7,0.9-0.7h0.5c0.5,0,0.9,0.3,0.9,0.7V27.3z"
  }))));
});
exports.PttPauseAndResumeRecordingButton = c;
c.displayName = "PttPauseAndResumeRecordingButton";
c.displayName = "PttPauseAndResumeRecordingButton";