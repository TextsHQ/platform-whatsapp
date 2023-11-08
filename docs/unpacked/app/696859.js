var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkGetChatLastAddOnPreviewMap = d;
exports.filterChatsWithAddOnPreviewUpdates = function () {
  return g.apply(this, arguments);
};
exports.isAddOnPreviewUpdateCandidate = c;
var i = r(require("../vendor/348926.js"));
var a = require("./928563.js");
var o = r(require("./565754.js"));
var s = require("./911600.js");
var l = require("./61229.js");
var u = require("./459857.js");
function c(e) {
  const t = o.default.fromString(e.parentMsgKey);
  return ((0, u.isSerializedWidMe)(e.sender) || t.fromMe) && !e.isOrphan;
}
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    const t = new Map();
    (yield (0, l.getChatTable)().bulkGet(e)).forEach(e => {
      var n;
      if (e != null) {
        t.set(e.id.toString(), (n = e.chatlistPreview) !== null && n !== undefined ? n : e.lastReactionPreview);
      }
    });
    return t;
  })).apply(this, arguments);
}
function f(e) {
  return o.default.fromString(e.parentMsgKey).remote.toString();
}
function _(e, t) {
  return !!m(e) && e.sender === t.sender && e.parentMsgKey === t.parentMsgKey && e.timestamp >= t.timestamp;
}
function g() {
  return (g = (0, i.default)(function* (e) {
    const t = e.filter(e => c(e));
    const n = new Map();
    if (!t.length) {
      return n;
    }
    const r = new Set(t.map(e => o.default.fromString(e.parentMsgKey).remote.toString()));
    const i = yield d(Array.from(r));
    t.forEach(e => {
      const t = f(e);
      const r = i.get(t);
      const o = n.get(t);
      const s = o != null ? o : r;
      if (m(e)) {
        if (s && _(e, s) && e.timestamp >= s.timestamp) {
          n.set(t, undefined);
        }
      } else if (s) {
        if (e.timestamp >= s.timestamp) {
          n.set(t, (0, a.lastAddOnPreviewFromCandidate)(e));
        }
      } else {
        n.set(t, (0, a.lastAddOnPreviewFromCandidate)(e));
      }
    });
    return n;
  })).apply(this, arguments);
}
function m(e) {
  switch (e.type) {
    case "poll_vote":
      return e.selectedOptionsCount === 0;
    case "reaction":
    default:
      return e.reactionText === s.REVOKED_REACTION_TEXT;
  }
}