var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitialsProfilePicture = function (e) {
  let {
    initialsData: t,
    backgroundColor: n,
    theme: r = c.Default
  } = e;
  const u = t.firstInitial != null && t.secondInitial != null;
  const p = o.supportedAlphabetsMap.get(o.InitialsAlphabets.HAN);
  let f = false;
  if (p && t.secondInitial != null && p.test(t == null ? undefined : t.secondInitial)) {
    var _;
    const e = ((_ = t.secondInitial) === null || _ === undefined ? undefined : _.length) || 0;
    f = e > 1;
  }
  const g = t.firstInitial != null && i.dir(t.firstInitial) === "rtl" ? "rtl" : "ltr";
  return s.default.createElement("div", {
    className: (0, a.classnamesConvertMeToStylexPlease)(n, (0, l.default)(d.initialsBackground))
  }, s.default.createElement("div", {
    dir: g,
    className: (0, l.default)(r === c.Default && d.textSizeL, r === c.GroupChatProfilePicture && d.oneInitialTextGCPP, r === c.GroupChatProfilePicture && u && d.twoInitialsTextGCPP, f && d.twoInitialsSmallTextGCPP)
  }, s.default.createElement("div", {
    className: (0, l.default)(d.initialContainer)
  }, t.firstInitial), s.default.createElement("div", {
    className: (0, l.default)(d.initialContainer)
  }, t.secondInitial)));
};
exports.ThemeType = undefined;
var i = function (e, t) {
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
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./12132.js"));
var a = require("./396574.js");
var o = require("./937172.js");
var s = r(require("../vendor/667294.js"));
var l = r(require("./156720.js"));
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
const c = require("../vendor/76672.js").Mirrored(["Default", "GroupChatProfilePicture"]);
exports.ThemeType = c;
const d = {
  initialsBackground: {
    width: "ln8gz9je",
    height: "ppled2lx",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    color: "octy2vkd",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno"
  },
  textSizeL: {
    fontSize: "ctdnaqea"
  },
  initialContainer: {
    display: "l7jjieqr",
    fontWeight: "hnx8ox4h"
  },
  oneInitialTextGCPP: {
    fontSize: "f8jlpxt4"
  },
  twoInitialsTextGCPP: {
    fontSize: "ovllcyds"
  },
  twoInitialsSmallTextGCPP: {
    fontSize: "lak21jic"
  }
};