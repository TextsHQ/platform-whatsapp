Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeMillisecondsToSeconds = function (e) {
  let t = e;
  try {
    if ((0, r.numberOrThrowIfTooLarge)(e) / (0, i.unixTime)() > 10) {
      t = (0, r.numberOrThrowIfTooLarge)(e) / 1000;
      __LOG__(2)`syncd: maybeMillisecondsToSeconds: adjusting future timestamp`;
    } else {
      __LOG__(2)`syncd: maybeMillisecondsToSeconds: no need to adjust timestamp`;
    }
  } catch (t) {
    __LOG__(3)`syncd: maybeMillisecondsToSeconds: messageTimestamp: ${e} too large to cast`;
  }
  return t;
};
var r = require("./229079.js");
var i = require("./632157.js");