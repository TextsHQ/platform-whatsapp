Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workerSafeFireAndForget = function (e, t) {
  (0, r.fireAndForgetInternalDoNotUse)("workerSafeEvent", e, t);
};
exports.workerSafeSendAndReceive = function (e, t) {
  return (0, r.sendAndReceiveInternalDoNotUse)("workerSafeEvent", e, t);
};
var r = require("./359987.js");