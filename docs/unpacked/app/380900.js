Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextStatus = function (e, t) {
  return (0, r.getTextStatus)(e, t).then(e => e.error ? (__LOG__(3)`getTextStatus: failed ${e.error.errorCode} : ${e.error.errorText}`, {
    id: e.id,
    error: e.error,
    text: ""
  }) : {
    id: e.id,
    text: e.text,
    emoji: e.emoji,
    lastUpdateTime: e.lastUpdateTime,
    ephemeralDurationSeconds: e.ephemeralDurationSeconds,
    error: e.error
  });
};
exports.setTextStatus = function (e, t, r, a) {
  return (0, require("./628905.js").getJobManager)().waitUntilCompleted(i.jobSerializers.setTextStatus(e, t, r, a));
};
var r = require("./375761.js");
var i = require("./323829.js");