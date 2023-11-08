Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignalMessageCounterError = exports.SignalDecryptionError = undefined;
var r = require("./477689.js");
class i extends (0, r.customError)("SignalDecryptionError") {}
exports.SignalDecryptionError = i;
class a extends (0, r.customError)("SignalMessageCounterError") {}
exports.SignalMessageCounterError = a;