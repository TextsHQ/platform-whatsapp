var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REACTIONS_DEFAULT_SENDING_TRAY = undefined;
exports.SendReactionsTrayContainer = function (e) {
  if ((0, o.getChat)(e.msg).isNewsletter) {
    if ((0, i.isNewsletterReactionEnabled)()) {
      return m.default.createElement(f.SendReactionsTrayNewsletterContainer, e);
    } else {
      return null;
    }
  }
  return m.default.createElement(_, e);
};
var r = require("../app/702206.js");
var o = require("../app/163755.js");
var l = require("../app/787742.js");
var i = require("../app/73225.js");
var u = require("./705545.js");
var s = require("../app/911600.js");
var c = require("./474474.js");
var d = require("./948101.js");
var f = require("./348538.js");
var p = require("./959245.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var h = require("./462708.js");
var g = a(require("./154731.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = ["👍", "❤️", "😂", "😮", "😢", "🙏"];
function _(e) {
  var t;
  var n;
  let {
    selectedCallback: a,
    msg: o,
    onMouseEnter: i,
    onMouseOver: f,
    onMouseLeave: E
  } = e;
  (0, m.useEffect)(() => {
    new u.ReactionActionsWamEvent({
      mediaType: o.getWamMediaType(),
      messageType: o.getWamMessageType(),
      reactionAction: p.REACTION_ACTION_TYPE.OPEN_TRAY
    }).commit();
  }, [o]);
  const [_, y] = (0, m.useState)(null);
  const {
    reactionsModels: C
  } = (0, g.default)([o.id.toString()], e => {
    var t;
    var n;
    var a;
    const r = e[0];
    if (!r) {
      return void y(null);
    }
    const o = (t = (n = r.reactionByMe) === null || n === undefined ? undefined : n.reactionText) !== null && t !== undefined ? t : "";
    const l = (0, c.getReactionsForTray)(v, (a = r.reactionByMe) === null || a === undefined ? undefined : a.reactionText).indexOf(o);
    y(l !== -1 ? l : null);
  });
  const b = (0, h.useReactionbyParentKey)(o.id);
  const M = (0, c.getReactionsForTray)(v, (0, r.isFlattenedReactionsEnabled)() ? b == null ? undefined : b.reactionText : (t = C[0]) === null || t === undefined || (n = t.reactionByMe) === null || n === undefined ? undefined : n.reactionText);
  const S = M.length > v.length;
  return m.default.createElement("div", {
    onMouseEnter: i,
    onMouseOver: f,
    onMouseLeave: E
  }, m.default.createElement(d.SendReactionsTray, {
    selectedIndex: (0, r.isFlattenedReactionsEnabled)() ? (() => {
      const e = b;
      let t = -1;
      if (e) {
        var n;
        const a = (n = e == null ? undefined : e.reactionText) !== null && n !== undefined ? n : "";
        t = (0, c.getReactionsForTray)(v, e == null ? undefined : e.reactionText).indexOf(a);
      }
      return t;
    })() : _,
    selectedCallback: e => {
      var t;
      if ((0, r.isFlattenedReactionsEnabled)()) {
        if (b && e === b.reactionText) {
          return void a(s.REVOKED_REACTION_TEXT);
        }
      } else if (C[0] && e === ((t = C[0].reactionByMe) === null || t === undefined ? undefined : t.reactionText)) {
        return void a(s.REVOKED_REACTION_TEXT);
      }
      a(e);
    },
    reactions: M,
    showMoreOption: !S,
    isParentMsgSentByMe: (0, l.getIsSentByMe)(o)
  }));
}
exports.REACTIONS_DEFAULT_SENDING_TRAY = v;