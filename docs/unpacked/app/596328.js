Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT_STATUS_NOT_FETCHED = exports.TEXT_STATUS_DURATION_UNSET = exports.SUGGESTIONS_MAX_COUNT = exports.CLEAR_TEXT_STATUS_STRING_VAL = exports.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = exports.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = exports.CLEAR_TEXT_STATUS_EMOJI_VAL = undefined;
exports.hasTextStatusSet = a;
exports.shouldDisplayTextStatus = function (e, t, n, r) {
  if (!(0, i.receiveTextStatusEnabled)()) {
    return false;
  }
  if (n === -1) {
    return false;
  }
  if (!a(e, t, n, r)) {
    return false;
  }
  return true;
};
var r = require("./632157.js");
var i = require("./491805.js");
exports.TEXT_STATUS_DURATION_UNSET = 0;
exports.TEXT_STATUS_NOT_FETCHED = -1;
exports.SUGGESTIONS_MAX_COUNT = 5;
exports.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = 0;
exports.CLEAR_TEXT_STATUS_STRING_VAL = null;
exports.CLEAR_TEXT_STATUS_EMOJI_VAL = null;
function a(e, t, n, i) {
  const a = i != null && (0, r.unixTime)() < i;
  const o = Boolean(e) || Boolean(t);
  return n !== 0 && a && o;
}
exports.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = null;