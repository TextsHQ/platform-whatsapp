Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentMessageValidationErrorCode = exports.CommentMessageValidationError = undefined;
var r = require("./177205.js");
const i = require("../vendor/76672.js")({
  MISSING_COMMENT_ENC_IV: "comment_missing_enc_iv",
  MISSING_COMMENT_ENC_PAYLOAD: "comment_missing_enc_payload",
  MISSING_COMMENT_MESSAGE_KEY: "comment_missing_target_message_key",
  INVALID_COMMENT_ENC_IV: "comment_invalid_enc_iv",
  MISSING_COMMENT_SENDER: "comment_missing_sender",
  MISSING_MESSAGE_SECRET: "comment_missing_message_secret",
  MISSING_ORIGINAL_MESSAGE_SENDER: "comment_missing_original_message_sender"
});
exports.CommentMessageValidationErrorCode = i;
class a extends r.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "CommentMessageValidationError";
  }
}
exports.CommentMessageValidationError = a;