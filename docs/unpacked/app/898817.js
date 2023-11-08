Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbortError = exports.ABORT_ERROR = undefined;
exports.catchAbort = function (e) {
  return t => {
    if (t.name === a) {
      return e(t);
    }
    throw t;
  };
};
var r = require("./477689.js");
class i extends (0, r.customError)("AbortError") {}
exports.AbortError = i;
const a = "AbortError";
exports.ABORT_ERROR = a;