Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventType = undefined;
exports.isFutureproofMsg = function (e) {
  return e === r.MSG_TYPE.UNKNOWN;
};
exports.isNotificationType = function (e, t) {
  switch (e) {
    case r.MSG_TYPE.GP2:
    case r.MSG_TYPE.BROADCAST_NOTIFICATION:
    case r.MSG_TYPE.NOTIFICATION:
    case r.MSG_TYPE.NOTIFICATION_TEMPLATE:
    case r.MSG_TYPE.E2E_NOTIFICATION:
    case r.MSG_TYPE.CALL_LOG:
    case r.MSG_TYPE.PINNED_MESSAGE:
    case r.MSG_TYPE.NEWSLETTER_NOTIFICATION:
      return true;
    case r.MSG_TYPE.PROTOCOL:
      return t === "ephemeral_setting" || t === "share_phone_number";
    default:
      return false;
  }
};
exports.isPlaceholderMsg = function (e) {
  return e === r.MSG_TYPE.CIPHERTEXT;
};
var r = require("./373070.js");
const i = require("../vendor/76672.js")({
  DEFAULT: "d",
  SIGNIFICANT: "s",
  AMBIENT: "a",
  NOTEWORTHY: "n",
  IGNORE: "i"
});
exports.EventType = i;