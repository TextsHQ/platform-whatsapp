var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (e === i) {
    return;
  }
  i = e;
  const [t, o, s] = e === a.EMOJI_TYPE.APPLE ? [(0, l.default)(require("./28193.js")), (0, l.default)(require("./23424.js")), (0, l.default)(require("./639154.js"))] : [(0, l.default)(require("./568412.js")), (0, l.default)(require("./846355.js")), (0, l.default)(require("./738779.js"))];
  r.EmojiUtil.configure({
    emojiType: e,
    orderedEmojis: t,
    legacyToEmoji: o,
    categorizedEmojis: s
  });
};
var r = require("../app/70354.js");
var a = require("../app/708733.js");
var l = o(require("../app/97359.js"));
let i;