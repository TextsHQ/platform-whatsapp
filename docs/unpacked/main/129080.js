var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateAudioProgress = function (e, t) {
  const {
    currentTime: n
  } = e;
  const a = t ? (0, o.getDurationFromMediaOrProtobuf)(e, t) : (0, l.getSafeDuration)(e);
  if (a == null || a === 0) {
    return 0;
  }
  return (0, r.default)(n / a, 0, 1);
};
var r = a(require("../vendors-main/974691.js"));
var o = require("./606993.js");
var l = require("./515611.js");