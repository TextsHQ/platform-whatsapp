Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    pollUpdateMessage: {
      pollCreationMessageKey: (0, r.encodeKey)(t.pollUpdateParentKey),
      vote: t.encPollVote,
      senderTimestampMs: t.senderTimestampMs
    }
  };
};
var r = require("./974637.js");