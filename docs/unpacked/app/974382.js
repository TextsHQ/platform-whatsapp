var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgType = undefined;
exports.createGroupDeviceMsgStanza = function () {
  return C.apply(this, arguments);
};
exports.createUserDeviceMsgStanza = function () {
  return b.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./716358.js");
var o = require("./287461.js");
var s = require("./678002.js");
var l = require("./303754.js");
var u = require("./973776.js");
var c = require("./355813.js");
var d = require("./185212.js");
var p = require("./588733.js");
var f = require("./974637.js");
var _ = require("./309029.js");
var g = require("./883310.js");
var m = require("./116170.js");
var h = require("./917504.js");
var y = require("./608182.js");
require("./604538.js");
var E = require("./76256.js");
var S = require("./459857.js");
var v = require("./669050.js");
var T = r(require("./556869.js"));
var M = r(require("../vendor/441143.js"));
const A = require("../vendor/76672.js").Mirrored(["Retry", "AppStateSync"]);
function b() {
  return (b = (0, i.default)(function* (e, t, n, r, i) {
    let a = r;
    yield (0, h.ensureE2ESessions)([e]);
    if ((0, S.isMeAccount)(e) && i.type !== A.AppStateSync) {
      (0, M.default)(t != null, "[messaging] createDeviceMsgStanza: no recipient for peer device message");
      a = (0, p.wrapDeviceSentMessage)(r, t);
      yield (0, m.populateICDCMeta)((0, v.toUserWid)(t), a);
    } else {
      yield (0, m.populateICDCMeta)((0, v.toUserWid)(e), a);
    }
    return P(e, null, t, n, a, i);
  })).apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t, n, r, i) {
    yield (0, h.ensureE2ESessions)([t]);
    if (i.type === A.AppStateSync) {
      return Promise.reject((0, T.default)("[messaging] createGroupDeviceMsgStanza: not expect for App State Sync message"));
    }
    const a = (0, S.isMeAccount)(t) ? (0, p.wrapDeviceSentMessage)(r, e) : r;
    yield (0, m.populateICDCMeta)((0, v.toUserWid)(t), a);
    return P(e, t, null, n, a, i);
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e, t, n, r, i, p) {
    var m;
    const h = r.data;
    const S = t || e;
    const v = (m = p.retryCount) !== null && m !== undefined ? m : 0;
    const T = (0, u.mediaTypeFromProtobuf)(i);
    const M = h.id;
    const b = (0, u.getMetricEditTypeFromMsg)(i, h);
    const {
      type: C,
      ciphertext: P
    } = yield (0, _.encryptMsgProtobuf)(S, v, i, h, b);
    let O = null;
    if (C === l.CiphertextType.Pkmsg) {
      const e = yield (0, s.getADVEncodedIdentity)();
      O = (0, a.wap)("device-identity", null, e);
    }
    if (p.type !== A.Retry) {
      yield (0, y.updateIdentityRange)(r, [S]);
    }
    yield (0, E.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
    const I = (0, f.pollTypeAttributeFromProtobuf)(i);
    const R = I == null ? null : (0, a.wap)("meta", {
      polltype: I
    });
    let N;
    N = p.pushPriority != null ? (0, a.CUSTOM_STRING)(p.pushPriority) : p.type === A.AppStateSync ? (0, a.CUSTOM_STRING)("high") : a.DROP_ATTR;
    let D = null;
    if (e.isGroup() && (0, o.getABPropConfigValue)("lid_groups_outgoing_explicit_address_mode")) {
      const t = yield (0, d.getGroupMetadata)(e);
      D = (t == null ? undefined : t.isLidAddressingMode) === true ? g.STANZA_MSG_ADDRESSING_MODE.lid : g.STANZA_MSG_ADDRESSING_MODE.pn;
    }
    return (0, a.wap)("message", {
      id: (0, a.CUSTOM_STRING)(M.id),
      to: (0, c.JID)(e),
      participant: t ? (0, c.DEVICE_JID)(t) : a.DROP_ATTR,
      recipient: n ? (0, c.USER_JID)(n) : a.DROP_ATTR,
      type: (0, f.typeAttributeFromProtobuf)(i),
      edit: (0, y.editAttribute)(i, h.subtype),
      category: p.type === A.AppStateSync ? (0, a.CUSTOM_STRING)("peer") : a.DROP_ATTR,
      push_priority: N,
      addressing_mode: D != null ? (0, a.CUSTOM_STRING)(D) : a.DROP_ATTR
    }, (0, a.wap)("enc", {
      v: (0, a.CUSTOM_STRING)(u.CIPHERTEXT_VERSION.toString()),
      type: (0, a.CUSTOM_STRING)(C),
      count: v === 0 ? a.DROP_ATTR : (0, a.INT)(v),
      mediatype: (0, u.encodeMaybeMediaType)(T),
      "decrypt-fail": (0, u.encodeMaybeDecryptFail)((0, f.decryptFailAttributeFromProtobuf)(i))
    }, P), O, R);
  })).apply(this, arguments);
}
exports.MsgType = A;