var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleICDCData = function (e, t, n) {
  if (n == null) {
    return Promise.resolve();
  }
  return g.enqueue(() => function () {
    return m.apply(this, arguments);
  }(e, t, n));
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./229079.js");
var l = require("./652204.js");
var u = require("./632157.js");
var c = require("./232262.js");
var d = require("./275909.js");
var p = require("./644753.js");
var f = require("./681349.js");
var _ = require("./459857.js");
const g = new l.PromiseQueue();
function m() {
  return (m = (0, a.default)(function* (e, t, n) {
    const {
      deviceListMetadata: r
    } = n;
    if (r == null) {
      return void __LOG__(2, undefined, undefined, undefined, ["handleICDCData"])`get empty device list metadata`;
    }
    if ((e.device == null || e.device === o.DEFAULT_DEVICE_ID) && r.senderTimestamp != null && r.senderKeyHash == null) {
      const t = (0, s.numberOrThrowIfTooLarge)(r.senderTimestamp) + 1;
      return void (0, p.handleADVSyncResult)(e, {
        deviceList: [{
          id: o.DEFAULT_DEVICE_ID,
          keyIndex: 0
        }],
        keyIndex: {
          ts: (0, u.castToUnixTime)(t),
          signedKeyIndexBytes: null
        }
      }, null, null);
    }
    const a = [];
    const l = e.user === (0, _.getMeUser)().user;
    a.push({
      id: e,
      ts: r.senderTimestamp
    });
    if (l && t != null) {
      a.push({
        id: t,
        ts: r.recipientTimestamp
      });
    }
    const g = yield (0, f.getLastADVDeviceInfoCheckTime)();
    const m = yield (0, d.bulkGetDeviceRecord)(a.map(e => e.id));
    const h = [];
    m.forEach((e, t) => {
      const n = a[t].ts;
      if (e == null || e.deleted || n == null) {
        return;
      }
      const r = (0, c.computeExpectedTsForDeviceRecord)((0, s.numberOrThrowIfTooLarge)(n), e, g);
      if (!(r.expectedTs === e.expectedTs && r.expectedTsLastDeviceJobTs === e.expectedTsLastDeviceJobTs && e.expectedTsUpdateTs == e.expectedTsUpdateTs)) {
        __LOG__(2)`handleICDCData: update expectd timestamp for ${e.id}`;
        h.push((0, i.default)((0, i.default)({}, e), r));
      }
    });
    if (h.length > 0) {
      return (0, d.bulkCreateOrReplaceDeviceRecord)(h);
    } else {
      return undefined;
    }
  })).apply(this, arguments);
}