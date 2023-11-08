Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    keepInChatMessage: {
      key: (0, r.encodeKey)(t.keptMessageKey),
      keepType: t.keepType,
      timestampMs: t.senderTimestampMs
    }
  };
};
var r = require("./974637.js");