var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFromKnownDevice = function () {
  return h.apply(this, arguments);
};
exports.renderableMessagesValidation = function (e) {
  let {
    renderableMsgs: t,
    msgMeta: n,
    info: r,
    proto: i,
    bizInfo: a
  } = e;
  if (t.length > 0 && !y(i, a)) {
    throw new u.BizNodeValidationError("[messaging] Biz node validation failed due to absence of biz node in SMAX");
  }
  const s = t[0];
  if ((0, c.isReactionMsgMeta)(n) && s != null && s.type !== p.MSG_TYPE.REACTION && s.type !== p.MSG_TYPE.REACTION_ENC) {
    throw new u.MessageProtobufMismatchError(u.MessageProtobufMismatchErrorCode.INVALID_REACTION_STANZA);
  }
  if ((0, c.isPollVoteMsgMeta)(n) && s != null) {
    const e = s.type === p.MSG_TYPE.UNKNOWN && s.futureproofType === p.MSG_TYPE.POLL_UPDATE;
    const t = s.type === p.MSG_TYPE.POLL_UPDATE && s.subtype === "poll_vote";
    if (!e && !t) {
      throw new u.MessageProtobufMismatchError(u.MessageProtobufMismatchErrorCode.INVALID_POLL_UPDATE_STANZA);
    }
  }
  if (r.edit === o.EDIT_ATTR.PIN_IN_CHAT && s != null) {
    const e = s.type === p.MSG_TYPE.UNKNOWN && s.futureproofType === p.MSG_TYPE.PIN_MESSAGE;
    if (s.type !== p.MSG_TYPE.PIN_MESSAGE && !e) {
      throw new u.MessageProtobufMismatchError(u.MessageProtobufMismatchErrorCode.INVALID_PIN_IN_CHAT_STANZA);
    }
  }
  const f = (0, l.typeAttributeFromProtobuf)(i);
  if (s != null && (n == null ? undefined : n.type) !== f && (0, d.isMsgTypeValidationEnabled)()) {
    __LOG__(4, undefined, new Error(), true, ["messaging", "wa-ice", "report-token"])`Type in stanza [${n == null ? undefined : n.type}] is different from the one derived from protobuf [${f}]. Message type: ${s.type}`;
    SEND_LOGS("report-token-stanza-protobuf-type-mismatched", 1, "messaging", "wa-ice", "report-token");
  }
};
exports.validateBclHash = function () {
  return m.apply(this, arguments);
};
exports.validateBizNode = y;
exports.validateMsgDestination = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./402994.js");
var s = require("./275909.js");
var l = require("./974637.js");
var u = require("./177205.js");
var c = require("./138082.js");
var d = require("./790215.js");
var p = require("./373070.js");
var f = require("./848624.js");
var _ = require("./459857.js");
function g() {
  return (g = (0, i.default)(function* (e, t) {
    var n;
    const r = t.chat;
    if (!e.equals(r)) {
      __LOG__(4, undefined, new Error(), true)`encDestination: ${String(e)}, destination: ${r.toString()}`;
      SEND_LOGS("validateMsgDestination: drop due to the deviceSentMessage meta mismatch.");
      return false;
    }
    const i = t.author;
    if (!(0, _.isMeAccount)(i)) {
      __LOG__(4, undefined, new Error(), true)`sender: ${i.toString()}`;
      SEND_LOGS("validateMsgDestination: drop due to msg is not sent from your own device.");
      return false;
    }
    const a = yield (0, s.hasDevice)(i, (n = i.device) !== null && n !== undefined ? n : 0);
    if (!a) {
      __LOG__(4, undefined, new Error(), true)`no record found for sender: ${i.toString()}`;
      SEND_LOGS("validateMsgDestination:drop due to invalid device");
    }
    return a;
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t) {
    var n;
    const r = (n = t.bclParticipants) !== null && n !== undefined ? n : [];
    const i = yield (0, f.phashV2)(r);
    if (i !== e) {
      __LOG__(4, undefined, new Error(), true)`expected: ${e}, got: ${i}`;
      SEND_LOGS("validateBclHash: drop due to invalid hash.");
      return false;
    } else {
      t.bclHashValidated = true;
      return true;
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = e.device == null ? a.DEFAULT_DEVICE_ID : e.device;
    if (t === a.DEFAULT_DEVICE_ID) {
      return true;
    }
    const [n] = yield (0, s.getDeviceIds)([e]);
    return n != null && n.devices.some(e => e.id === t);
  })).apply(this, arguments);
}
function y(e, t) {
  const {
    listMessage: n,
    buttonsMessage: r,
    highlyStructuredMessage: i
  } = e;
  if (n && (t == null ? undefined : t.verifiedListEnvelope) !== true) {
    __LOG__(4, undefined, new Error(), true)`no biz node found in list message`;
    SEND_LOGS("validateBizNode:drop due to missing biz node in invalid SMAX in list message");
    return false;
  }
  if (r) {
    var a;
    var o;
    const e = (t == null ? undefined : t.verifiedButtonsEnvelope) === true || (t == null ? undefined : t.nativeFlowName) != null || ((a = r.contextInfo) === null || a === undefined ? undefined : a.isForwarded) === true && (r == null || (o = r.buttons) === null || o === undefined ? undefined : o.length) === 0;
    if (!e) {
      __LOG__(4, undefined, new Error(), true)`button message is invalid`;
      SEND_LOGS("validateBizNode:drop due to invalid SMAX for buttons message");
    }
    return e;
  }
  return !i || (t == null ? undefined : t.verifiedHsmEnvelope) === true || (__LOG__(4, undefined, new Error(), true)`no biz node found in HSM`, SEND_LOGS("validateBizNode:drop due to missing biz node in invalid SMAX in HSM"), false);
}