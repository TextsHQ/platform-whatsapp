var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseWebMsgInfoReaction = function (e, t) {
  const n = [];
  try {
    if (e == null || e.reactions == null) {
      return n;
    }
    if (t == null || t.reactions == null) {
      return n;
    }
    t.reactions.forEach(e => {
      const {
        key: r,
        senderTimestampMs: l,
        text: u,
        unread: c
      } = e;
      const d = (0, i.convertToTextWithoutSpecialEmojis)(u != null ? u : "");
      const p = !!r.fromMe;
      const f = (0, i.decodeJid)(r.remoteJid);
      let _;
      if (r.fromMe) {
        if (!f.isUser()) {
          _ = (0, o.getMeUser)();
        }
      } else {
        _ = (0, i.decodeJid)(r.participant);
      }
      const g = new a.default({
        id: r.id,
        fromMe: p,
        remote: f,
        participant: _
      });
      const m = (0, o.getMeUser)();
      const h = p === true ? m : _ || f;
      if (h != null && h instanceof s.default) {
        if (d == null) {
          __LOG__(4, undefined, new Error())`parseWebMsgInfoReaction:convertToTextWithoutSpecialEmojis reaction text is null.`;
        } else {
          n.push({
            id: g,
            reactionTimestamp: l,
            reactionText: d,
            reactionParentKey: t.id,
            sender: h,
            unread: Boolean(c)
          });
        }
      } else {
        __LOG__(4, undefined, new Error())`parseWebMsgInfoReaction: reaction sender should be a wid.`;
      }
    });
  } catch (e) {
    __LOG__(4, undefined, new Error())`[history sync] parseWebMsgInfoReaction failed with error ${e == null ? undefined : e.name} and stack ${e == null ? undefined : e.stack}`;
  }
  return n;
};
var i = require("./974637.js");
var a = r(require("./565754.js"));
var o = require("./459857.js");
var s = r(require("./124928.js"));