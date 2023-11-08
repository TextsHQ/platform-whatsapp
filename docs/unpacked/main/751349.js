var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuspiciousLabel = function (e) {
  var t;
  const n = f(e);
  if (n == null) {
    return null;
  }
  return s.default.createElement("div", {
    className: (0, c.default)(d.container, i.uiPadding.horiz8, i.uiMargin.end6, i.uiMargin.bottom2, ((t = e.msg) === null || t === undefined ? undefined : t.ctwaContext) != null && i.uiMargin.bottom3, e.link && i.uiMargin.top3, e.link && i.uiMargin.bottom5)
  }, s.default.createElement(r.AlertIcon, {
    displayInline: true,
    xstyle: [d.icon, i.uiMargin.top4, i.uiMargin.end4]
  }), s.default.createElement("span", {
    className: (0, c.default)(d.text)
  }, n));
};
exports.getSuspiciousLabel = f;
var r = require("../app/39523.js");
var o = require("../app/356097.js");
var l = require("../app/44118.js");
var i = require("../app/676345.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
var c = a(require("../app/156720.js"));
const d = {
  icon: {
    color: "k17s6i4e"
  },
  text: {
    position: "g0rxnol2",
    bottom: "s7ynmu90",
    fontSize: "r8knbtme",
    fontWeight: "e1gr2w1z",
    color: "k17s6i4e",
    textTransform: "ofejerhi"
  },
  container: {
    display: "l7jjieqr",
    height: "qst3sjxx",
    marginStart: "heai6z19",
    backgroundColor: "m47yztnq",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9"
  }
};
function f(e) {
  var t;
  let n;
  let {
    msg: a,
    link: r,
    displayType: i
  } = e;
  if (a || r) {
    if ((a == null || (t = a.ctwaContext) === null || t === undefined ? undefined : t.isSuspiciousLink) === true) {
      n = u.fbt._("Suspicious link", null, {
        hk: "J2Yam"
      });
    } else if (r) {
      var s;
      if ((s = r.suspiciousCharacters) === null || s === undefined ? undefined : s.size) {
        n = u.fbt._("Suspicious link", null, {
          hk: "J2Yam"
        });
      }
    } else if (a) {
      const e = (0, l.getSuspiciousLinks)(a).length;
      if (e) {
        n = (0, l.getLinksFromMsg)(a).length === 1 || i === o.DISPLAY_TYPE.GALLERY ? u.fbt._("Suspicious link", null, {
          hk: "J2Yam"
        }) : u.fbt._({
          "*": "{count} suspicious links",
          _1: "1 suspicious link"
        }, [u.fbt._plural(e, "count")], {
          hk: "22yrvx"
        });
      }
    }
    return n;
  }
}