var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleOmittedResult = function (e, t, n, r) {
  if (!t || t.deleted) {
    return null;
  }
  if (e != null && e < t.timestamp) {
    return null;
  }
  const s = (0, i.default)({}, t);
  if (e != null) {
    s.timestamp = e;
    if ((0, o.shouldClearExpectedTs)(e, n, t, r)) {
      s.expectedTs = undefined;
      s.expectedTsLastDeviceJobTs = undefined;
      s.expectedTsUpdateTs = undefined;
    }
  }
  s.devices = [{
    id: a.DEFAULT_DEVICE_ID,
    keyIndex: 0
  }];
  return {
    update: s,
    clearRecord: false
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./418987.js");
var o = require("./232262.js");