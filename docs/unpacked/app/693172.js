Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendChatStateProtocol = function (e, t) {
  let n;
  __LOG__(2)`sendChatStateProtocol Sending ${t} to ${e}`;
  n = t === "idle" ? {
    isPaused: true
  } : {
    composing: {
      hasComposingMediaAudio: t === "recording_audio"
    }
  };
  return (0, r.sendClientNotificationRPC)({
    chatstateTo: e,
    composingOrPausedMixinGroupArgs: n
  });
};
var r = require("./9480.js");