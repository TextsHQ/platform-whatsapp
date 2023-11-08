var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAppStateSyncKeyShare = function (e, t) {
  if (!(0, m.isMeAccountNonLid)(t)) {
    __LOG__(4, undefined, new Error(), true)`syncd: key share wid error`;
    SEND_LOGS("syncd: key share wid error");
    return Promise.resolve();
  }
  return E(e, t);
};
exports.setAppStateSyncKeyShareHandler = function (e) {};
var r = a(require("../vendor/348926.js"));
var o = require("../app/418987.js");
var l = require("../app/229079.js");
var i = require("../app/405057.js");
var u = require("./413928.js");
var s = require("../app/840266.js");
var c = require("../app/347197.js");
var d = require("../app/916260.js");
var f = require("../app/485995.js");
var p = require("../app/22383.js");
var m = require("../app/459857.js");
var h = require("../app/25942.js");
var g = require("../app/845972.js");
let E = function () {
  var e = (0, r.default)(function* (e, t) {
    (0, d.logCriticalBootstrapStageIfNecessary)(h.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_RECEIVED);
    const n = t.getDeviceId();
    __LOG__(2)`syncd: handling key share from device ${n} with ${e.keys.length} keys`;
    const a = [];
    const r = e.keys;
    if (r) {
      yield Promise.all(r.map(e => {
        var t;
        const r = (t = e.keyId) === null || t === undefined ? undefined : t.keyId;
        const o = e.keyData;
        const u = o == null ? undefined : o.keyData;
        const d = u == null ? null : (0, c.toSyncKeyData)(u);
        if (!r) {
          return void __LOG__(2)`syncd: received key with missing keyID from device ${n}`;
        }
        const m = (0, c.toSyncKeyId)(r);
        const h = (0, i.syncKeyIdToHex)(m);
        __LOG__(2)`syncd: received key share key id ${h} from device ${n} ${u != null ? "with" : "without"} keyData`;
        if (r.byteLength !== 6) {
          (0, p.uploadFatalErrorMetric)(g.MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_ID, null);
          __LOG__(4, undefined, new Error(), true)`syncd: fatal error: key share key id has invalid bytelength of ${r.byteLength}`;
          SEND_LOGS(`syncd: fatal error: key share key id has invalid bytelength of ${r.byteLength}`);
          return (0, f.handleFatalError)();
        }
        if (o) {
          var E;
          var v;
          var _;
          const e = o.timestamp;
          const t = (E = o.fingerprint) === null || E === undefined ? undefined : E.currentIndex;
          const r = (v = o.fingerprint) === null || v === undefined ? undefined : v.rawId;
          const i = (_ = o.fingerprint) === null || _ === undefined ? undefined : _.deviceIndexes;
          if (!d || e == null || t == null || r == null || !i) {
            if (n !== 0) {
              __LOG__(4, undefined, new Error(), true)`syncd: fatal error: invalid key share key data (from companion)`;
              return void SEND_LOGS("syncd: fatal error: invalid key share key data (from companion)");
            } else {
              (0, p.uploadFatalErrorMetric)(g.MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_DATA, null);
              __LOG__(4, undefined, new Error(), true)`syncd: fatal error: invalid key share key data`;
              SEND_LOGS("syncd: fatal error: invalid key share key data");
              return (0, f.handleFatalError)();
            }
          }
          const u = {
            keyId: m,
            keyEpoch: (0, s.getKeyEpoch)(m),
            keyData: d,
            timestamp: (0, l.numberOrThrowIfTooLarge)(e),
            fingerprint: {
              rawId: r,
              currentIndex: t,
              deviceIndexes: i
            }
          };
          a.push({
            keyId: m,
            fullKey: u
          });
        } else {
          a.push({
            keyId: m,
            fullKey: null
          });
        }
      }));
      return (0, u.handleKeyShare)((0, o.interpretAsDeviceId)(n), a);
    } else {
      return Promise.resolve();
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();