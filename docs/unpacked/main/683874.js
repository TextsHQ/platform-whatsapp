var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/932325.js"));
var o = require("../app/572946.js");
var l = require("../vendor/548360.js");
var i = function (e, t) {
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
var u = a(require("../app/156720.js"));
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
  count: {
    display: "l7jjieqr",
    minWidth: "cfzgl7ar",
    minHeight: "ei5e7seu",
    paddingTop: "h0viaqh7",
    paddingEnd: "tpmajp1w",
    paddingBottom: "c0uhu3dl",
    paddingStart: "riy2oczp",
    fontSize: "dsh4tgtl",
    fontWeight: "sy6s5v3r",
    lineHeight: "gz7w46tb",
    color: "lyutrhe2",
    textAlign: "qfejxiq4",
    verticalAlign: "fewfhwl7",
    backgroundColor: "ovhn1urg",
    borderTopStartRadius: "ap18qm3b",
    borderTopEndRadius: "ikwl5qvt",
    borderBottomEndRadius: "j90th5db",
    borderBottomStartRadius: "aumms1qt"
  },
  countMac: {
    minWidth: "il1gyv3w",
    paddingTop: "h0viaqh7",
    paddingEnd: "tpmajp1w",
    paddingBottom: "k07a8sro",
    paddingStart: "riy2oczp",
    fontWeight: "hnx8ox4h"
  },
  transparentBg: {
    color: "io08vzmp",
    backgroundColor: "thr4l2wc"
  }
};
function d(e, t) {
  let {
    count: n,
    transparentBg: a = false,
    ariaLabel: s
  } = e;
  let d = "";
  if (n > 0) {
    d = l.fbt._({
      "*": "{count} unread messages",
      _1: "1 unread message"
    }, [l.fbt._plural(n, "count")], {
      hk: "SvDsm"
    });
  }
  if (s) {
    d = s;
  }
  if (!(s != null && s !== "")) {
    d = l.fbt._("Unread", null, {
      hk: "3F7gSI"
    });
  }
  return i.default.createElement("span", {
    ref: t,
    className: (0, u.default)(c.count, o.isOSMac && c.countMac, a && c.transparentBg),
    "aria-label": d
  }, n > 0 ? r.default.n(n) : null);
}
var f = (0, i.forwardRef)(d);
exports.default = f;