Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeExpectedTsForDeviceRecord = function (e, t, n) {
  const r = t == null ? undefined : t.timestamp;
  if (r == null) {
    return {
      expectedTs: undefined,
      expectedTsLastDeviceJobTs: undefined,
      expectedTsUpdateTs: undefined
    };
  }
  let a;
  let o;
  let s;
  if (!(t == null || t.deleted)) {
    a = t.expectedTs;
    o = t.expectedTsLastDeviceJobTs;
    s = t.expectedTsUpdateTs;
  }
  return i(e, r, n, a, o, s);
};
exports.computeNewExpectedTs = i;
exports.shouldClearExpectedTs = function (e, t, n, r) {
  if (n == null || n.deleted) {
    return false;
  }
  if (n.expectedTs == null) {
    return false;
  }
  if (e >= n.expectedTs) {
    return true;
  }
  if (e < n.expectedTs && t === n.expectedTs && r != null && (n.expectedTsLastDeviceJobTs == null || r > n.expectedTsLastDeviceJobTs)) {
    return true;
  }
  return false;
};
var r = require("./632157.js");
function i(e, t, n, i, a, o) {
  const s = {
    expectedTs: i,
    expectedTsLastDeviceJobTs: a,
    expectedTsUpdateTs: o
  };
  if (!(t >= e || i != null && i >= e)) {
    s.expectedTs = e;
    s.expectedTsLastDeviceJobTs = n != null ? n : undefined;
    if (i == null || t >= i) {
      s.expectedTsUpdateTs = (0, r.unixTimeWithoutClockSkewCorrection)();
    }
  }
  return s;
}