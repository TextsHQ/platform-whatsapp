Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinExpiryDurationOption = exports.PIN_STATE = undefined;
exports.PIN_STATE = {
  INVALID: 0,
  PIN: 1,
  UNPIN: 2
};
const r = require("../vendor/76672.js").Mirrored(["FiveSeconds", "FifteenSeconds", "OneMinute", "OneDay", "SevenDays", "ThirtyDays"]);
exports.PinExpiryDurationOption = r;