Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerErrorReceiptSpec = exports.MediaRetryNotificationSpec = exports.MediaRetryNotification$ResultType = undefined;
var r = require("./751206.js");
const i = require("../vendor/76672.js")({
  GENERAL_ERROR: 0,
  SUCCESS: 1,
  NOT_FOUND: 2,
  DECRYPTION_ERROR: 3
});
exports.MediaRetryNotification$ResultType = i;
const a = {};
exports.MediaRetryNotificationSpec = a;
const o = {};
exports.ServerErrorReceiptSpec = o;
a.internalSpec = {
  stanzaId: [1, r.TYPES.STRING],
  directPath: [2, r.TYPES.STRING],
  result: [3, r.TYPES.ENUM, i]
};
o.internalSpec = {
  stanzaId: [1, r.TYPES.STRING]
};