var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleADVSyncResult = function (e, t, n, r, a) {
  const {
    deviceList: l,
    keyIndex: u
  } = t;
  if (u == null || u.signedKeyIndexBytes == null) {
    if (l != null && l.some(e => e.id !== i.DEFAULT_DEVICE_ID)) {
      return void __LOG__(2)`processADVSyncResult: drop response with companion device but no keyIndexbytes`;
    } else {
      return (0, s.handleOmittedResult)(u == null ? undefined : u.ts, r, u == null ? undefined : u.expectedTs, a);
    }
  }
  const {
    ts: c,
    expectedTs: d,
    signedKeyIndexBytes: p
  } = u;
  return (0, o.handleKeyIndexResult)(e, l, c, p, n, r, a, d);
};
exports.handleDeviceNotification = function (e, t, n, r, i, o) {
  const {
    deviceList: s,
    keyIndex: u
  } = n;
  (0, l.default)(s != null, `handleDeviceNotification: device list should not be none for device ${t} notification`);
  (0, l.default)(u != null, `handleDeviceNotification: keyIndex should not be none for device ${t} notification`);
  const {
    ts: c,
    signedKeyIndexBytes: d
  } = u;
  if (t === "add") {
    (0, l.default)(d != null, `handleDeviceNotification: signedKeyIndexBytes should not be none for device ${t} notification`);
    return (0, a.handleDeviceAddNotification)(e, s, c, d, r, i, o);
  }
  if (t === "remove") {
    return (0, a.handleDeviceRemoveNotification)(s, u.ts, i);
  }
};
var i = require("./418987.js");
var a = require("./947226.js");
var o = require("./161744.js");
var s = require("./44991.js");
var l = r(require("../vendor/441143.js"));