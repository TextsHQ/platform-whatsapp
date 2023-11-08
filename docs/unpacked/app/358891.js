var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeIdentityHash = S;
exports.getICDCMeta = function () {
  return h.apply(this, arguments);
};
exports.getICDCMetaFromDeviceRecord = y;
var i = r(require("../vendor/348926.js"));
var a = require("./517301.js");
var o = require("./418987.js");
var s = r(require("./670983.js"));
var l = require("./513611.js");
var u = require("./632157.js");
var c = require("./287461.js");
var d = require("./275909.js");
var p = require("./403206.js");
var f = require("./469422.js");
var _ = require("./76256.js");
var g = require("./459857.js");
var m = require("./669050.js");
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = yield (0, d.getDeviceRecord)(e);
    if (!t || t.deleted) {
      return null;
    } else {
      return y(e, t);
    }
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    if (!t || t.deleted) {
      return null;
    }
    const n = {
      keyHash: undefined,
      timestamp: undefined
    };
    const {
      timestamp: r,
      devices: i,
      id: a
    } = t;
    const l = i.some(e => e.id !== o.DEFAULT_DEVICE_ID);
    if (l) {
      const t = i.map(e => [e.keyIndex, (0, m.createDeviceWidFromDeviceListPk)(a, e.id, e.isHosted)]);
      const r = [];
      let o = null;
      t.forEach(e => {
        let [t, n] = e;
        if ((0, g.isMeDevice)(n)) {
          o = t;
        } else {
          r.push([t, n]);
        }
      });
      const l = yield (0, f.getAllIdentityKeysBytes)(r.map(e => {
        let [, t] = e;
        return t;
      }));
      const u = [];
      const c = [];
      l.forEach((e, t) => {
        if (e != null) {
          u.push(e);
          c.push(r[t][0]);
        }
      });
      if ((0, g.isMeAccount)(e)) {
        const e = yield (0, _.getSignalProtocolStore)().getIdentityKeyPair();
        if (!e) {
          return null;
        }
        u.push(new Uint8Array(e.pubKey));
        c.push((0, s.default)(o, "myKeyIndex"));
      }
      const d = T();
      n.keyHash = yield S(u.map(e => new Uint8Array((0, p.toCurveKeyPubKey)(e.buffer))), d);
      if (c.length !== i.length) {
        n.keyIndexes = c;
      }
    }
    if (l || M(r)) {
      n.timestamp = r;
    }
    return n;
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e, t) {
    const n = (0, f.identityKeysToBinary)(e);
    const r = yield (0, a.sha256)(n);
    const i = new Uint8Array(r);
    return (0, l.sliceBytes)(i, 0, t);
  })).apply(this, arguments);
}
function T() {
  const e = (0, c.getABPropConfigValue)("md_icdc_hash_length");
  return Math.max(e, 8);
}
function M(e) {
  return (0, u.unixTime)() - e < 2592000;
}