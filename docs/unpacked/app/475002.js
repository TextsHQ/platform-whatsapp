var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleListReset = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./229079.js");
var s = require("./632157.js");
var l = require("./287461.js");
var u = require("./232262.js");
var c = require("./403206.js");
var d = require("./459387.js");
var p = require("./715118.js");
var f = require("./999821.js");
var _ = require("./76256.js");
var g = require("./669050.js");
var m = r(require("./556869.js"));
var h = r(require("../vendor/441143.js"));
function y() {
  return (y = (0, i.default)(function* (e, t, n, r, i) {
    var y;
    let E = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
    let S = arguments.length > 6 ? arguments[6] : undefined;
    const {
      rawId: v,
      timestamp: T,
      keyIndex: M
    } = t;
    const A = (0, o.numberOrThrowIfTooLarge)(T);
    const b = e.device;
    (0, h.default)(b != null && b !== a.DEFAULT_DEVICE_ID, "handleADVDeviceIdentity: called for primary device");
    const C = (0, g.toUserWid)(e);
    let P = 0;
    P = (y = i == null ? undefined : i.timestamp) !== null && y !== undefined ? y : (0, s.pastUnixTime)(((0, l.getABPropConfigValue)("num_days_key_index_list_expiration") - 1) * s.DAY_SECONDS);
    if (i != null && !i.deleted) {
      if (i.timestamp > A) {
        throw (0, m.default)("handleADVDeviceIdentity: out-of-order timestamp detected");
      }
      yield (0, p.clearDeviceRecord)(C, i.devices, E);
    }
    if (n) {
      yield (0, _.getSignalProtocolStore)().saveIdentity((0, f.createSignalAddress)(C).toString(), (0, c.toSignalCurvePubKey)(n));
    }
    const O = {
      id: (0, d.createDeviceListPK)(e),
      rawId: v,
      timestamp: P,
      devices: [{
        id: b,
        keyIndex: M
      }, {
        id: a.DEFAULT_DEVICE_ID,
        keyIndex: 0
      }],
      validIndexes: null,
      currentIndex: null,
      deleted: false
    };
    const I = (0, u.computeExpectedTsForDeviceRecord)(A, O, S);
    O.expectedTs = I.expectedTs;
    O.expectedTsLastDeviceJobTs = I.expectedTsLastDeviceJobTs;
    O.expectedTsUpdateTs = I.expectedTsUpdateTs;
    yield (0, p.bulkApplyDeviceUpdate)([{
      wid: C,
      update: O,
      currentRecord: null
    }], E);
    yield (0, _.getSignalProtocolStore)().saveIdentity((0, f.createSignalAddress)(e).toString(), (0, c.toSignalCurvePubKey)(r));
  })).apply(this, arguments);
}