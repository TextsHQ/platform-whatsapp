Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollVoteValidationErrorCode = exports.PollVoteValidationError = exports.PollUpdateValidationErrorCode = exports.PollUpdateValidationError = exports.PollCreationValidationWarningCode = exports.PollCreationValidationErrorCode = exports.PollCreationValidationError = undefined;
var r = require("./477689.js");
var i = require("./177205.js");
const a = require("../vendor/76672.js")({
  DUPLICATE_OPTIONS: "poll_creation_duplicate_options"
});
exports.PollCreationValidationWarningCode = a;
const o = require("../vendor/76672.js")({
  INVALID_MESSAGE_SECRET: "poll_creation_invalid_message_secret",
  INVALID_NAME: "poll_creation_invalid_name",
  INVALID_OPTIONS_COUNT: "poll_creation_invalid_options_count",
  INVALID_OPTION: "poll_creation_invalid_option",
  INVALID_SELECTABLE_OPTIONS_COUNT: "poll_creation_invalid_selectable_options_count",
  MISSING_MESSAGE_SECRET: "poll_creation_missing_message_secret",
  MISSING_NAME: "poll_creation_missing_name",
  MISSING_OPTIONS: "poll_creation_missing_options",
  MISSING_SELECTABLE_OPTIONS_COUNT: "poll_creation_missing_selectable_options_count"
});
exports.PollCreationValidationErrorCode = o;
class s extends i.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "PollCreationValidationError";
  }
}
exports.PollCreationValidationError = s;
const l = require("../vendor/76672.js")({
  INVALID_VOTE_ENC_IV: "poll_update_invalid_vote_enc_iv",
  MISSING_POLL_MESSAGE_KEY: "poll_update_missing_poll_message_key",
  MISSING_SENDER_TIMESTAMP: "poll_update_missing_sender_timestamp",
  MISSING_UPDATE: "poll_update_missing_update",
  MISSING_VOTE_ENC_IV: "poll_update_missing_vote_enc_iv",
  MISSING_VOTE_ENC_PAYLOAD: "poll_update_missing_vote_enc_payload",
  MESSAGE_STANZA_INVALID: "poll_update_message_stanza_invalid"
});
exports.PollUpdateValidationErrorCode = l;
class u extends i.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "PollUpdateValidationError";
  }
}
exports.PollUpdateValidationError = u;
const c = require("../vendor/76672.js")({
  INVALID_MESSAGE_SECRET: "poll_vote_invalid_message_secret",
  INVALID_OPTION: "poll_vote_invalid_option",
  INVALID_OPTIONS_COUNT: "poll_vote_invalid_options_count",
  OPTION_NOT_FOUND: "poll_vote_option_not_found"
});
exports.PollVoteValidationErrorCode = c;
class d extends (0, r.customError)("PollVoteValidationError") {
  constructor(e) {
    super(e);
    this.code = e;
  }
}
exports.PollVoteValidationError = d;