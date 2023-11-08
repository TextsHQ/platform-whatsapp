Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    pinInChatMessage: {
      key: (0, r.encodeKey)(t.pinParentKey),
      type: t.pinMessageType,
      senderTimestampMs: t.pinSenderTimestampMs
    },
    messageContextInfo: {
      messageAddOnDurationInSecs: t.pinExpiryDuration
    }
  };
};
var r = require("./974637.js");