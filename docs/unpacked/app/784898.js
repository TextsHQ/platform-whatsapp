var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitDeviceLinkEvent = S;
exports.initDeviceLinkEvent = function () {
  return m.apply(this, arguments);
};
exports.setDeviceLinkPairStage = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./517301.js");
var l = require("./950376.js");
var u = require("./632157.js");
var c = require("./736299.js");
var d = require("./72687.js");
let p = null;
let f = null;
let _ = null;
let g = null;
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    p = new c.MdLinkDeviceCompanionWamEvent();
    const r = yield y(e, t);
    f = {
      regStartTime: n,
      sessionId: r
    };
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    var t;
    if (p) {
      yield (t = g) === null || t === undefined ? undefined : t.promise;
      g = new l.Resolvable();
      _ = e;
      yield S();
    }
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    const n = new o.Binary();
    n.writeBuffer(e);
    n.write("_".charCodeAt(0));
    n.writeBuffer(t);
    const r = n.readByteArray();
    const i = yield (0, s.sha256)(r);
    return (0, a.encodeB64)(i);
  })).apply(this, arguments);
}
function S(e) {
  var t;
  if (!p || !f) {
    return;
  }
  const n = f;
  const r = (0, u.unixTimeWithoutClockSkewCorrection)() - n.regStartTime;
  if (_ == null) {
    return;
  }
  p = new c.MdLinkDeviceCompanionWamEvent({
    mdDurationS: r,
    mdSessionId: n.sessionId,
    mdTimestampS: n.regStartTime,
    mdLinkDeviceCompanionErrorCode: e == null ? 0 : e,
    mdLinkDeviceCompanionStage: _
  });
  const i = p;
  i.commitAndWaitForFlush(true);
  if (!((t = g) === null || t === undefined)) {
    t.resolve();
  }
  if (!(e == null && i.mdLinkDeviceCompanionStage !== d.MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE)) {
    p = null;
    f = null;
    _ = null;
  }
}