var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REACTIONS_DEFAULT_SENDING_TRAY = undefined;
exports.SendReactionsTrayNewsletterContainer = function (e) {
  let {
    selectedCallback: t,
    msg: n,
    onMouseEnter: a,
    onMouseOver: f,
    onMouseLeave: m
  } = e;
  const [h] = (0, d.default)([n.id]);
  const [g] = h;
  const [E, v] = (0, c.useState)(null);
  (0, c.useEffect)(() => {
    const e = g == null ? undefined : g.myReaction;
    v(e != null ? (0, u.getReactionsForTray)(p, e).indexOf(e) : null);
  }, [g == null ? undefined : g.myReaction]);
  const _ = (0, u.getReactionsForTray)(p, g == null ? undefined : g.myReaction);
  const y = (0, r.getChat)(n);
  return c.default.createElement("div", {
    onMouseEnter: a,
    onMouseOver: f,
    onMouseLeave: m
  }, c.default.createElement(s.SendReactionsTray, {
    selectedIndex: E,
    selectedCallback: e => {
      if (e === (g == null ? undefined : g.myReaction)) {
        v(null);
        return t(i.REVOKED_REACTION_TEXT);
      }
      v((0, u.getReactionsForTray)(p, g == null ? undefined : g.myReaction).indexOf(e));
      t(e);
    },
    reactions: _,
    showMoreOption: (0, l.shouldShowAllReactionsForNewsletter)(y),
    isParentMsgSentByMe: (0, o.getIsSentByMe)(n)
  }));
};
var r = require("../app/163755.js");
var o = require("../app/787742.js");
var l = require("../app/73225.js");
var i = require("../app/911600.js");
var u = require("./474474.js");
var s = require("./948101.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var d = a(require("./410794.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = ["👍", "❤️", "😂", "😮", "😢", "🙏"];
exports.REACTIONS_DEFAULT_SENDING_TRAY = p;