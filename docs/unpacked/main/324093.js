var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = a(require("./964223.js"));
var i = require("../app/667738.js");
var u = function (e, t) {
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
var s = a(require("../app/156720.js"));
const c = ["overflow", "flatListControllers", "children", "theme"];
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
  container: {
    position: "g0rxnol2",
    zIndex: "thghmljt",
    display: "p357zi0d",
    flexBasis: "rjo8vgbg",
    flexGrow: "ggj6brxn",
    flexDirection: "f8m0rgwh",
    overflowX: "gfz4du6o",
    overflowY: "ag5g9lrv",
    opacity: "bs7a17vp"
  },
  noscroll: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  centerItem: {
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno"
  },
  padding: {
    marginTop: "opp68qpq",
    marginBottom: "brac1wpa"
  },
  centerColumn: {
    width: "tcisnlar",
    paddingTop: "gq7nj7y3",
    paddingEnd: "f9ovudaz",
    paddingBottom: "eynyaxvo",
    paddingStart: "gx1rr48f",
    marginTop: "tt8xd2xn",
    marginEnd: "k1jo73ug",
    marginBottom: "mpdn4nr2",
    marginStart: "isfiuinm",
    backgroundColor: "ihvf49ua"
  },
  darkMode: {
    "::-webkit-scrollbar-track": {
      backgroundColor: "ov67bkzj"
    }
  }
};
function p(e, t) {
  const n = (0, i.useIsDarkTheme)();
  const {
    overflow: a,
    flatListControllers: d,
    children: p,
    theme: m
  } = e;
  const h = (0, o.default)(e, c);
  const g = (0, s.default)([f.container, a === "hidden" && f.noscroll, m === "center-content" && f.centerItem, m === "padding" && f.padding, m === "center-column" && f.centerColumn, n && f.darkMode]);
  if (d && d.length > 0) {
    return u.default.createElement(l.default, (0, r.default)({
      ref: t,
      flatListControllers: d,
      className: g
    }, h), p);
  } else {
    return u.default.createElement("div", (0, r.default)({
      className: g,
      ref: t
    }, h), p);
  }
}
var m = (0, u.forwardRef)(p);
exports.default = m;