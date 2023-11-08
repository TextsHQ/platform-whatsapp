var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    isGeosuspended: t
  } = e;
  const [n, a] = (0, s.useState)(u.fbt._("This channel is no longer available", null, {
    hk: "YgVdB"
  }));
  (0, s.useEffect)(() => {
    function e() {
      return (e = (0, r.default)(function* () {
        if (!t) {
          return;
        }
        const e = yield (0, o.getGeosuspendedInYourCountryString)();
        a(e);
      })).apply(this, arguments);
    }
    !function () {
      e.apply(this, arguments);
    }();
  }, [t]);
  return s.default.createElement("span", {
    title: n,
    className: (0, c.default)(f)
  }, s.default.createElement(l.SettingsBlockedIcon, {
    width: 14,
    height: 14,
    displayInline: true,
    directional: true,
    xstyle: [i.uiMargin.top3, i.uiMargin.end3]
  }), n);
};
var r = a(require("../vendor/348926.js"));
var o = require("./949359.js");
var l = require("./290562.js");
var i = require("../app/676345.js");
var u = require("../vendor/548360.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var c = a(require("../app/156720.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  fontStyle: "h432zind"
};