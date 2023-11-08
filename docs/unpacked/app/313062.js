var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleADVDeviceUpdateForMessage = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./275909.js");
var s = require("./475002.js");
var l = require("./322939.js");
var u = require("./999821.js");
var c = require("./669050.js");
var d = r(require("../vendor/441143.js"));
function p() {
  return (p = (0, i.default)(function* (e, t, n, r, i) {
    let p = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
    let f = arguments.length > 6 ? arguments[6] : undefined;
    let _ = arguments.length > 7 ? arguments[7] : undefined;
    const {
      rawId: g,
      timestamp: m,
      keyIndex: h
    } = t;
    (0, d.default)(g != null, "handleADVDeviceIdentity: rawId of deviceIdentity should not be null");
    (0, d.default)(m != null, "handleADVDeviceIdentity: timestamp of deviceIdentity should not be null");
    (0, d.default)(h != null, "handleADVDeviceIdentity: keyIndex of deviceIdentity should not be null");
    const y = {
      rawId: g,
      timestamp: m,
      keyIndex: h
    };
    const E = e.device;
    (0, d.default)(E != null && E !== a.DEFAULT_DEVICE_ID, "handleADVDeviceIdentity: called for primary device");
    const S = (0, c.toUserWid)(e);
    const v = yield (0, o.getDeviceRecord)(S);
    const T = n == null || r != null && !(0, u.bufferEqual)(n, r);
    if (!v || v.deleted || v.rawId !== g || T) {
      return (0, s.handleListReset)(e, y, T ? r : null, i, v, p, f, _);
    } else {
      return (0, l.handleNoListReset)(e, y, i, v, p, f, _);
    }
  })).apply(this, arguments);
}