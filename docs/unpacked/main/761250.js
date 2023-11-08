var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    msg: n
  } = e;
  const {
    title: a,
    subtitle: o
  } = (t = n.interactiveHeader) !== null && t !== undefined ? t : {};
  const s = (0, d.isTrusted)(n.unsafe());
  return p.default.createElement(i.FlexColumn, {
    xstyle: [f.uiMargin.end4, f.uiMargin.start6]
  }, a != null ? p.default.createElement(l.EmojiText, (0, r.default)({}, g(a), (0, u.enableHeaderAndFooterFormatting)((0, c.getHeaderLinks)(n.unsafe()), s), {
    text: a,
    xstyle: h.title,
    inferLinesDirection: true
  })) : null, o != null ? p.default.createElement(l.EmojiText, (0, r.default)({}, g(o), {
    selectable: s,
    text: o,
    xstyle: h.subtitle,
    inferLinesDirection: true
  })) : null);
};
var r = a(require("../vendor/967154.js"));
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
}(require("../app/12132.js"));
var l = require("../app/305521.js");
var i = require("../app/690495.js");
var u = require("./502360.js");
var s = a(require("../app/932325.js"));
var c = require("../app/44118.js");
var d = require("../app/435711.js");
var f = require("../app/676345.js");
var p = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  title: {
    fontSize: "bze30y65",
    fontWeight: "hnx8ox4h",
    overflowWrap: "fd365im1",
    whiteSpace: "bbv8nyr4",
    width: "ln8gz9je"
  },
  subtitle: {
    color: "hp667wtd"
  }
};
function g(e) {
  const t = o.dir(e);
  return {
    direction: t,
    dirMismatch: t === "rtl" !== s.default.isRTL()
  };
}