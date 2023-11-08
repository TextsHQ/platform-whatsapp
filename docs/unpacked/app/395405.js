Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinInChatValidationErrorCode = exports.PinInChatValidationError = undefined;
var r = require("./177205.js");
const i = require("../vendor/76672.js")({
  INVALID_PIN_IN_CHAT_EXPIRY_DURATION: "pin_in_chat_invalid_expiry_duration",
  INVALID_PIN_IN_CHAT_MSG_REMOTE: "pin_in_chat_invalid_msg_remote",
  MISSING_TYPE: "pin_in_chat_missing_type",
  MISSING_SENDER_TIMESTAMP: "pin_in_chat_missing_timestamp"
});
exports.PinInChatValidationErrorCode = i;
class a extends r.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "PinInChatValidationError";
  }
}
exports.PinInChatValidationError = a;