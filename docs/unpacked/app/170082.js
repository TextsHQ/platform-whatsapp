var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  var r;
  const v = (0, E.useContext)(y.default);
  const M = (0, E.useContext)(p.default);
  const A = (t = (n = e.theme) === null || n === undefined ? undefined : n.quoted) !== null && t !== undefined && t;
  const b = d.default.get((r = M == null ? undefined : M.parentGroup) !== null && r !== undefined ? r : "");
  const C = b != null && (b.joinedSubgroups.some(t => t.toString() === e.groupJid) || b.unjoinedSubgroups.some(t => t.toString() === e.groupJid));
  const P = e.clickable === true && C === true && A === false;
  const O = P ? () => {
    const {
      fromChatWid: t
    } = e;
    if (t) {
      new l.CommunityGroupJourneyEvent({
        action: m.CHAT_FILTER_ACTION_TYPES.SUBGROUP_MENTION_CLICK,
        surface: h.SURFACE_TYPE.CHAT,
        chat: a.ChatCollection.get(t)
      }).commit();
    }
    const n = g.default.get(e.groupJid);
    if (n) {
      return void s.Cmd.openCommunitySubgroupJoinModal(n, "group_mention");
    }
    const r = d.default.get(e.groupJid);
    if (r) {
      (0, c.findChat)(r.id, "groupMentionWrapper").then(t => {
        s.Cmd.openChatBottom(t).then(t => {
          if (t) {
            new l.CommunityGroupJourneyEvent({
              action: m.CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
              surface: h.SURFACE_TYPE.CHAT,
              chat: a.ChatCollection.get(e.groupJid)
            }).commit();
          }
        });
      }).catch(() => __LOG__(4, undefined, new Error())`Failed to find chat from group mention even though we have gmd for it`);
    } else {
      __LOG__(4, undefined, new Error())`No local model found for given group mention JID`;
    }
  } : undefined;
  const I = {
    text: e.groupSubject,
    jid: e.groupJid,
    theme: e.theme,
    selectable: e.selectable,
    lastMessage: e.lastMessage
  };
  if (P && (0, _.messageListA11yRedesignEnabled)() && (v === u.DISPLAY_TYPE.CONVERSATION || v === u.DISPLAY_TYPE.ANNOUNCEMENT || v === u.DISPLAY_TYPE.NEWSLETTER)) {
    return E.default.createElement(o.Clickable, {
      className: (0, S.default)(T),
      onClick: O
    }, E.default.createElement(f.MentionBase, I));
  }
  return E.default.createElement(f.MentionBase, (0, i.default)({}, I, {
    onClick: O
  }));
};
var i = r(require("../vendor/967154.js"));
var a = require("./351053.js");
var o = require("./950987.js");
var s = require("./780549.js");
var l = require("./359198.js");
var u = require("./356097.js");
var c = require("./581354.js");
var d = r(require("./667845.js"));
var p = r(require("./462824.js"));
var f = require("./868391.js");
var _ = require("./97858.js");
var g = r(require("./22368.js"));
var m = require("./571444.js");
var h = require("./965927.js");
var y = r(require("./328861.js"));
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
}(require("../vendor/667294.js"));
var S = r(require("./156720.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = {
  display: "l7jjieqr",
  color: "o0rubyzf"
};