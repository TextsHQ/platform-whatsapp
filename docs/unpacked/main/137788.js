var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/72696.js");
var o = require("./603960.js");
var l = require("./435595.js");
var i = require("../vendor/548360.js");
var u = function (e, t) {
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
}(require("../vendor/667294.js"));
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
  color: "qcuzhokb"
};
var f = (0, u.forwardRef)(function (e, t) {
  let {
    msg: n,
    showButton: a,
    onToggleReactionTray: c
  } = e;
  const f = a ? u.default.createElement(l.Round, {
    testid: "reaction-entry-point",
    label: i.fbt._("React", null, {
      hk: "1D8oyr"
    }),
    title: (0, r.messageQuickReplyEnabled)() ? i.fbt._("React", null, {
      hk: "r6u1E"
    }) : null,
    theme: l.RoundTheme.QuickAction,
    onClick: () => c(n)
  }, u.default.createElement(o.ReactIcon, {
    className: (0, s.default)(d),
    width: 15
  })) : null;
  return u.default.createElement("div", {
    ref: t
  }, f);
});
exports.default = f;