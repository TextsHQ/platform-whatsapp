Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateNewKeyEpoch = function (e) {
  return i(e) + 1;
};
exports.getKeyDeviceId = function (e) {
  return new DataView((0, r.fromSyncKeyId)(e)).getUint16(0);
};
exports.getKeyEpoch = i;
var r = require("./347197.js");
function i(e) {
  return new DataView((0, r.fromSyncKeyId)(e)).getUint32(2);
}