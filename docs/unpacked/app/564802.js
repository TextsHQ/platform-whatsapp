Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    reactionMessage: {
      key: (0, r.encodeKey)(t.reactionParentKey),
      text: t.reactionText,
      senderTimestampMs: t.reactionTimestamp
    }
  };
};
var r = require("./974637.js");