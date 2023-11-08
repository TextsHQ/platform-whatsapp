Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeviceUpdateLock = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  let i = ["participant", "device-list"];
  if (t) {
    i = [...i, "message"];
  }
  if (n) {
    i = [...i, "missing-keys"];
  }
  return (0, r.getStorage)().lock(i, () => e());
};
var r = require("./732011.js");