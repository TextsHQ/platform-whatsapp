var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    children: t = "",
    inline: n = false,
    selectable: r,
    text: i,
    symbol: s
  } = e;
  if (n) {
    return l.default.createElement(a.SelectableSpan, {
      selectable: r
    }, "•", t);
  }
  return l.default.createElement("li", {
    dir: "auto",
    className: (0, u.default)(d.container, p(i) && d.dirMismatch)
  }, l.default.createElement(a.SelectableSpan, {
    selectable: r,
    prePlainText: `${s} `
  }, (0, o.removeFirstLeadingSpace)(t)));
};
var i = function (e, t) {
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
var a = require("./306703.js");
var o = require("./266696.js");
var s = r(require("./932325.js"));
var l = r(require("../vendor/667294.js"));
var u = r(require("./156720.js"));
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
  container: {
    paddingStart: "nqtxkp62",
    textIndent: "nirfx0j2",
    "::before": {
      content: "s8gevp1y",
      marginEnd: "qxgpk8xi",
      fontSize: "l6n90272",
      verticalAlign: "kyf3mdpm",
      lineHeight: "c9j2cm7k"
    }
  },
  dirMismatch: {
    textAlign: "e65innqk",
    paddingStart: "gx1rr48f",
    paddingEnd: "btzf6ewn",
    "::before": {
      marginEnd: "cu48yi1y",
      marginStart: "ei0r3txs"
    }
  }
};
function p(e) {
  return function (e) {
    if (e != null && e !== "") {
      return i.dir(e);
    }
  }(e) === "rtl" !== s.default.isRTL();
}