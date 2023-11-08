var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/932325.js"));
var o = function (e, t) {
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
var l = a(require("../app/156720.js"));
var i = a(require("../app/637660.js"));
var u = a(require("../app/49710.js"));
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
  menuTabsMarker: {
    position: "lhggkp7q",
    bottom: "jxacihee",
    left: "tukmaf4q",
    backgroundColor: "futycye9",
    opacity: "bs7a17vp",
    transition: "lfg8udxz"
  },
  animate: {
    transitionProperty: "ej4zaygv",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "k46w8fxw"
  },
  animateWithTransform: {
    transitionProperty: "c8hu6guh",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "k46w8fxw"
  },
  hide: {
    opacity: "axi1ht8l",
    visibility: "kojwoqec"
  }
};
function d(e) {
  const t = (0, i.default)(() => r.default.isRTL() ? -1 : 1);
  const n = (0, u.default)(e.selectedTabIndex);
  let a;
  let s;
  let d;
  d = (n !== -1 || e.selectedTabIndex === n) && Boolean(e.animate);
  if (e.selectedTabIndex !== -1) {
    s = `translateX(${e.selectedTabIndex * 100 * t.current}%)`;
    a = "4px";
  } else if (n !== -1 && e.selectedTabIndex === -1) {
    a = "0px";
  }
  return o.default.createElement("div", {
    className: (0, l.default)(e.hide === true && c.hide, !d && e.animate === true && c.animate, d && c.animateWithTransform, c.menuTabsMarker),
    style: {
      width: 100 / e.numTabs + "%",
      transform: s,
      height: a
    }
  });
}
var f = (0, o.memo)(d);
exports.default = f;