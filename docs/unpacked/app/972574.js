Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionValidationErrorCode = exports.ReactionValidationError = undefined;
var r = require("./177205.js");
const i = require("../vendor/76672.js")({
  INVALID_REACTION_TEXT_LENGTH: "reaction_invalid_text_length",
  MISSING_PARENT_MSG_KEY: "reaction_missing_parent_msg_key",
  MISSING_TIMESTAMP: "reaction_missing_timestamp"
});
exports.ReactionValidationErrorCode = i;
class a extends r.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "ReactionValidationError";
  }
}
exports.ReactionValidationError = a;