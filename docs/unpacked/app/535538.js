Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDER_MESSAGES_IN_CHAT = undefined;
exports.handlePlaceholderMsgsSeen = function (e, t) {
  if (!(0, l.isPlaceholderMessageResendEnabled)() || !t) {
    return;
  }
  const n = [];
  const c = (0, r.unixTime)();
  const d = (0, i.getABPropConfigValue)("placeholder_message_resend_maximum_days_limit") * r.DAY_SECONDS;
  e.forEach(e => {
    if (e.type === a.MSG_TYPE.CIPHERTEXT && !u.has(e.id) && c - e.t <= d && !e.unsafe().isMdHistoryMsg && e.subtype !== "bot_unavailable_fanout") {
      u.add(e.id);
      n.push(e.id);
    }
  });
  if (n.length > 0) {
    for (let e = 0; e < n.length; e += 32) {
      const t = n.slice(e, e + 32);
      (0, s.sendPeerDataOperationRequest)(o.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, {
        msgKeys: t
      });
    }
  }
};
exports.inFlightPlaceholderResendRequests = undefined;
var r = require("./632157.js");
var i = require("./287461.js");
var a = require("./373070.js");
var o = require("./533494.js");
var s = require("./437911.js");
var l = require("./142601.js");
const u = new Set();
exports.PLACEHOLDER_MESSAGES_IN_CHAT = u;
const c = new Set();
exports.inFlightPlaceholderResendRequests = c;