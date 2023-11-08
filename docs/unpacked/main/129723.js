var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, o.useState)([]);
  (0, l.default)(e, e => {
    const t = e.filter(e => e.reactionByMe != null).map(e => {
      if (e.reactionByMe == null) {
        return;
      }
      const {
        senderUserJid: t,
        reactionText: n
      } = e.reactionByMe;
      const a = r.EmojiUtil.getEmojiAggregate(n);
      return e.getReactionSenderModel(a, t);
    }).filter(Boolean);
    n(t);
  });
  return t;
};
var r = require("../app/70354.js");
var o = require("../vendor/667294.js");
var l = a(require("./154731.js"));