Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDurationFromMediaOrProtobuf = function (e, t) {
  var n;
  if ((n = (0, a.getSafeDuration)(e)) !== null && n !== undefined) {
    return n;
  } else {
    return r(t);
  }
};
exports.getDurationFromProto = r;
var a = require("./515611.js");
function r(e) {
  const t = parseFloat(e.duration);
  if (Number.isFinite(t)) {
    return t;
  } else {
    return 0;
  }
}