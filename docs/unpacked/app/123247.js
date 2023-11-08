Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeviceIdentityMixin = function (e) {
  const t = (0, i.flattenedChildWithTag)(e, "device-identity");
  if (!t.success) {
    return t;
  }
  const n = (0, i.contentBytes)(t.value);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    deviceIdentityElementValue: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");