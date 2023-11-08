Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Offline = exports.MaxRetries = exports.Disconnected = exports.BufferTooLargeError = undefined;
var r = require("./477689.js");
const i = (0, r.customError)("BufferTooLarge", false);
exports.BufferTooLargeError = i;
const a = (0, r.customError)("Disconnected", false);
exports.Disconnected = a;
const o = (0, r.customError)("Offline", false, a);
exports.Offline = o;
const s = (0, r.customError)("MaxRetries", false);
exports.MaxRetries = s;