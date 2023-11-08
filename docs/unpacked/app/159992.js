var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSyncdKeyRotation = exports.sendSyncdKeyRequest = exports.getDeviceFingerprint = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./275909.js");
var o = require("./201283.js");
var s = require("./927517.js");
var l = r(require("./556869.js"));
const u = function () {
  var e = (0, i.default)(function* () {
    const {
      currentIndex: e,
      devices: t,
      rawId: n
    } = yield (0, a.getMyDeviceList)();
    if (e == null) {
      throw (0, l.default)("syncd: missing current index for own device");
    }
    return {
      currentIndex: e,
      deviceIndexes: t.map(e => e.keyIndex),
      rawId: n
    };
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.getDeviceFingerprint = u;
const c = o.sendAppStateSyncKeyRequest;
exports.sendSyncdKeyRequest = c;
exports.sendSyncdKeyRotation = e => (0, s.sendAppStateSyncKeyShare)({
  type: "key_rotation",
  keys: e
});