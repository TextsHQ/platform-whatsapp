var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    highlightSurface: n
  } = e;
  (0, f.useEffect)(() => {
    if ((0, i.isPrivacyNarrativeV1Enabled)() && n != null) {
      (0, u.incrementPrinaDailyCount)(n, o.PrinaDailyActionType.NARRATIVE_APPEAR);
    }
  }, []);
  const {
    onClick: a,
    text: p,
    spaced: m
  } = e;
  const h = f.default.createElement(c.TextSpan, {
    theme: "title"
  }, (t = e.title) !== null && t !== undefined ? t : d.fbt._("Encryption", null, {
    hk: "a7CfR"
  }));
  const g = f.default.createElement(c.TextDiv, {
    theme: "muted"
  }, p);
  const E = f.default.createElement(l.LockIcon, {
    color: s.SvgColorProp.SECONDARY,
    height: 20
  });
  return f.default.createElement(r.default, {
    onClick: a,
    icon: E,
    title: h,
    secondaryTitle: g,
    spaced: m
  });
};
var r = a(require("./306007.js"));
var o = require("../app/510337.js");
var l = require("./821063.js");
var i = require("../app/97858.js");
var u = require("./24578.js");
var s = require("../app/220584.js");
var c = require("../app/180519.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}