var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    text: t,
    isExpandedCaptionText: n,
    onExpandCaptionText: a
  } = e;
  const c = t.length > 120 && !n ? u.default.createElement(u.default.Fragment, null, u.default.createElement(r.EmojiText, {
    formatters: o.StatusV3Caption(),
    text: Array.from(t).slice(0, 119).join("")
  }), i.fbt._("…", null, {
    hk: "3C0fAV"
  }), u.default.createElement("strong", null, " ", i.fbt._("Read more", null, {
    hk: "2DvSvh"
  }))) : u.default.createElement(r.EmojiText, {
    formatters: o.StatusV3Caption(),
    text: t
  });
  return u.default.createElement("div", {
    className: (0, s.default)(d)
  }, u.default.createElement("div", {
    className: (0, s.default)(p)
  }, u.default.createElement(l.default, {
    onClick: a
  }, u.default.createElement("div", {
    className: (0, s.default)(f)
  }, " ", c, " "))));
};
var r = require("../app/305521.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
}(require("../app/675886.js"));
var l = a(require("../app/625903.js"));
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = {
  position: "g0rxnol2",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const f = {
  paddingTop: "tvsr5v2h",
  paddingBottom: "mz6luxmp",
  paddingEnd: "clw8hvz5",
  paddingStart: "p2tfx3a3",
  hyphens: "holukk2e",
  wordBreak: "cw3vfol9"
};
const p = {
  position: "lhggkp7q",
  width: "ln8gz9je",
  bottom: "jxacihee",
  zIndex: "jnl3jror",
  marginEnd: "k1jo73ug",
  marginStart: "isfiuinm",
  color: "lxozqee9",
  textAlign: "qfejxiq4",
  backgroundColor: "tp4bj0rl",
  cursor: "ajgl1lbb",
  fontSize: "cqiun4t2",
  lineHeight: "q6wg26sa"
};