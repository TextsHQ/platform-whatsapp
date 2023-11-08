var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNoListReset = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./229079.js");
var l = require("./232262.js");
var u = require("./403206.js");
var c = require("./715118.js");
var d = require("./999821.js");
var p = require("./76256.js");
var f = require("./669050.js");
var _ = r(require("./556869.js"));
var g = r(require("../vendor/441143.js"));
function m() {
  return (m = (0, a.default)(function* (e, t, n, r) {
    let a = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    let m = arguments.length > 5 ? arguments[5] : undefined;
    const {
      timestamp: h,
      keyIndex: y
    } = t;
    const E = (0, s.numberOrThrowIfTooLarge)(h);
    const S = e.device;
    (0, g.default)(S != null && S !== o.DEFAULT_DEVICE_ID, "handleADVDeviceIdentity: called for primary device");
    if (r.timestamp >= E && r.validIndexes && !r.validIndexes.includes(y)) {
      throw (0, _.default)("handleADVDeviceIdentity: out-of-order timestamp detected");
    }
    const v = new Map(r.devices.map(e => [e.id, e.keyIndex]));
    if (!v.has(S) || v.get(S) !== y) {
      v.set(S, y);
      const t = Array.from(v.entries()).map(e => {
        let [t, n] = e;
        return {
          id: t,
          keyIndex: n
        };
      });
      const o = (0, i.default)((0, i.default)({}, r), {}, {
        devices: t,
        deleted: false
      });
      const s = (0, l.computeExpectedTsForDeviceRecord)(E, o, m);
      o.expectedTs = s.expectedTs;
      o.expectedTsLastDeviceJobTs = s.expectedTsLastDeviceJobTs;
      o.expectedTsUpdateTs = s.expectedTsUpdateTs;
      yield (0, c.bulkApplyDeviceUpdate)([{
        wid: (0, f.toUserWid)(e),
        update: o,
        currentRecord: r
      }], a);
      yield (0, p.getSignalProtocolStore)().saveIdentity((0, d.createSignalAddress)(e).toString(), (0, u.toSignalCurvePubKey)(n));
    }
  })).apply(this, arguments);
}