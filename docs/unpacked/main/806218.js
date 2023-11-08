var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttCancelButton = undefined;
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
  pttCancelButton: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "mgp6u6um",
    height: "j8e73hjv",
    color: "r8quorc8",
    ":hover": {
      color: "mtber8f9"
    }
  },
  svg: {
    width: "i0x3nve6"
  }
};
const c = (0, l.forwardRef)((e, t) => {
  const {
    onConfirm: n,
    confirmOnMouseUp: a,
    disabled: u
  } = e;
  return l.default.createElement(r.PttButton, {
    ref: t,
    xstyle: s.pttCancelButton,
    testid: "ptt-cancel-btn",
    ariaLabel: o.fbt._("Cancel", null, {
      hk: "3jOaUM"
    }),
    confirmOnMouseUp: a,
    onConfirm: n,
    disabled: u
  }, l.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 22",
    className: (0, i.default)(s.svg)
  }, l.default.createElement("path", {
    d: "M5,0,3,2H0V4H16V2H13L11,0ZM15,5H1V19.5A2.5,2.5,0,0,0,3.5,22h9A2.5,2.5,0,0,0,15,19.5Z",
    fill: "currentColor"
  })));
});
exports.PttCancelButton = c;
c.displayName = "PttCancelButton";