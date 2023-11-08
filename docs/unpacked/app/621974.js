Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionEncValidationErrorCode = exports.ReactionEncMessageValidationError = undefined;
var r = require("./177205.js");
const i = require("../vendor/76672.js")({
  INVALID_ENC_IV: "enc_reaction_invalid_iv",
  INVALID_ENC_PAYLOAD: "enc_reaction_invalid_payload",
  MISSING_TARGET_MSG_KEY: "enc_reaction_missing_target_msg_key",
  MISSING_MESSAGE_SECRET: "enc_reaction_missing_message_secret",
  MISSING_SENDER: "enc_reaction_missing_sender",
  MISSING_PARENT_MESSAGE: "enc_reaction_missing_parent_message",
  MISSING_PARENT_MESSAGE_SENDER: "enc_reaction_missing_parent_message_sender"
});
exports.ReactionEncValidationErrorCode = i;
class a extends r.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "ReactionEncMessageValidationError";
  }
}
exports.ReactionEncMessageValidationError = a;