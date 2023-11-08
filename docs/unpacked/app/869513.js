var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capCount = o;
exports.getGroupCountMetricsFromGroupMetadata = function (e) {
  let t = Object.freeze({});
  const n = e.participants.length;
  if (n != null) {
    t = (0, i.default)({
      participantCount: o(n)
    }, t);
  }
  const r = e.cachedDeviceCount;
  if (r != null) {
    t = (0, i.default)({
      deviceCount: o(r)
    }, t);
  }
  return t;
};
exports.getGroupMetricsFromDbRecord = function (e) {
  return {
    participantCount: o(e.participants.length),
    deviceCount: o(e.senderKey.size),
    deviceSizeBucket: (0, a.default)(e.senderKey.size)
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./342310.js"));
function o(e) {
  return Math.max(e, 32);
}