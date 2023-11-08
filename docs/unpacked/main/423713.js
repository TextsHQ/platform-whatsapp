var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = function (e, t) {
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
var o = a(require("../app/156720.js"));
var l = a(require("../app/49710.js"));
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
  menuTabsMarker: {
    position: "lhggkp7q",
    bottom: "jxacihee",
    left: "tukmaf4q",
    backgroundColor: "futycye9",
    opacity: "bs7a17vp",
    transitionProperty: "p3nha244",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "ijehb8ro"
  },
  animate: {
    transitionProperty: "ej4zaygv",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "ijehb8ro"
  },
  animateWithTransform: {
    transitionProperty: "egl74e4l",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "ijehb8ro"
  },
  hide: {
    opacity: "axi1ht8l"
  }
};
function s(e) {
  const {
    hide: t,
    selectedTabIndex: n,
    width: a,
    offsetPx: i,
    animate: s
  } = e;
  const c = (0, l.default)(n);
  let d;
  let f;
  let p;
  p = (c !== -1 || n === c) && Boolean(s);
  if (n !== -1) {
    f = `translateX(${i}px)`;
    d = "2px";
  } else if (c !== -1 && n === -1) {
    d = "0px";
  }
  return r.default.createElement("div", {
    className: (0, o.default)(u.menuTabsMarker, t && u.hide, !p && s && u.animate, p && u.animateWithTransform),
    style: {
      width: a,
      transform: f,
      height: d
    }
  });
}
var c = (0, r.memo)(s);
exports.default = c;