Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickLogMarkerType = exports.QuickLogActionType = exports.QplServerStatusCodeError = exports.QplInstanceKeyOptions = exports.QPLDataEventLevel = undefined;
const r = require("../vendor/654302.js")({
  SUCCESS: 2,
  FAIL: 3,
  CANCEL: 4,
  ABORTED: 105
});
exports.QuickLogActionType = r;
const i = require("../vendor/654302.js")({
  REGULAR: 1,
  USER_FLOW: 2
});
exports.QuickLogMarkerType = i;
const a = require("../vendor/654302.js").Mirrored(["AUTO_INCREMENT", "MANUAL_INCREMENT", "REUSE_INSTANCE"]);
exports.QplInstanceKeyOptions = a;
const o = require("../vendor/654302.js")({
  FATAL: 1,
  ERROR: 3,
  CRITICAL: 4,
  WARN: 5,
  INFO: 7,
  DEBUG: 9
});
exports.QPLDataEventLevel = o;
class s extends Error {
  constructor(e, t) {
    super(t);
    this.name = "QplServerStatusCodeError";
    this.name = "QplServerStatusCodeError";
    this.status = e;
    this.statusCode = e;
  }
}
exports.QplServerStatusCodeError = s;