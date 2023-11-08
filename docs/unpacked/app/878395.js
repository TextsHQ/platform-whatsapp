var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._resendGroupMsgImpl = I;
exports.encryptAndSendGroupDirectMsg = function () {
  return P.apply(this, arguments);
};
exports.resendGroupMsg = O;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/170735.js"));
var o = require("./250281.js");
var s = require("./632157.js");
var l = require("./287461.js");
var u = require("./707065.js");
var c = require("./83672.js");
var d = require("./271221.js");
var p = require("./226430.js");
var f = require("./853441.js");
var _ = require("./883310.js");
var g = require("./31526.js");
var m = require("./97858.js");
var h = require("./733694.js");
var y = require("./204412.js");
var E = require("./608182.js");
var S = require("./312469.js");
var v = require("./76256.js");
var T = require("./510607.js");
var M = require("./243703.js");
var A = require("./804974.js");
var b = require("./669050.js");
var C = r(require("./556869.js"));
function P() {
  return (P = (0, i.default)(function* (e, t, n, r, i, a) {
    const o = t.to;
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupDirectMsg: sending ${t.id} with group ${o.toLogString()}`;
    const l = yield N(e, t, n, r, {
      fanoutType: S.FANOUT_TYPE.GROUP_DIRECT
    }, i, a);
    const {
      phash: u
    } = l;
    if (u) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupDirectMsg: phash mismatch, got server phash ${u}`;
      O({
        isDirect: true,
        msgRecord: e,
        baseMsgData: t,
        msgProtobuf: n,
        oldList: r,
        ackTime: (0, s.unixTime)(),
        groupData: i,
        phash: u,
        metricReporter: a
      });
    }
    return l;
  })).apply(this, arguments);
}
function O(e) {
  Promise.resolve().then(() => I(e));
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* (e) {
    let {
      isDirect: t,
      msgRecord: n,
      baseMsgData: r,
      msgProtobuf: i,
      oldList: o,
      ackTime: l,
      groupData: u,
      phash: _,
      metricReporter: g
    } = e;
    const v = r.id.id;
    const M = r.to;
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendGroupMsg: ${v} to ${r.to.toString()}`;
    (0, y.postMdDeviceSyncAckMetric)(M, i, u);
    g.sendReporter = g.createSendReporter({
      isResend: true,
      groupData: u
    });
    const C = Array.from(new Set(o.map(e => (0, b.toUserWid)(e).toString()))).map(e => (0, b.createUserWid)(e));
    if ((0, m.prekeyFetchForMessageResendEnabled)() && (0, p.isCagAddon)(n.data, u)) {
      try {
        yield (0, d.fetchResendMissingKeys)(o);
      } catch (e) {
        __LOG__(3, undefined, undefined, true)`fetchResendMissingKeys: failed`;
        SEND_LOGS("fetchResendMissingKeys-sync-error");
      }
    }
    if (t) {
      yield (0, T.syncDeviceListJob)(o, "message", _);
    } else {
      try {
        yield (0, f.sendQueryGroup)(M);
        L(u, M, i, C.map(b.createWidFromWidLike)).catch(e => {
          __LOG__(3, undefined, undefined, undefined, ["messaging"])`postGroupParticipantSyncMetric: ${v}: failed for postGroupParticipantSyncMetric ${e}`;
        });
      } catch (e) {
        __LOG__(3, undefined, undefined, undefined, ["messaging"])`resendGroupMsg: ${v}: sendQueryGroup failed for message resend: ${e}`;
        w(g);
        throw e;
      }
    }
    const P = (0, E.getResendTimeoutInSeconds)();
    var O;
    if ((0, s.unixTime)() - l > P) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendUserMsg: ${v}: skip group resending due to ${P / 60} min timeout`;
      if (!((O = g.sendReporter) === null || O === undefined)) {
        O.postFailure({
          result: A.MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
          isTerminal: false
        });
      }
      return void (g.sendReporter = null);
    }
    try {
      const e = yield (0, c.getFanOutList)({
        wids: C
      });
      const t = (0, a.default)(e, o, String);
      if (t.length === 0) {
        return void __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendGroupMsg: ${v}: skip resending to the empty list`;
      }
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendGroupMsg: ${v}: resending to devices: ${t.join(",")}`;
      if (n.data.isOverwrittenByRevoke === true) {
        return void __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendGroupMsg: ${v}: skip resending because this message has been overwritten by a revoke`;
      }
      yield N(n, r, i, t, {
        fanoutType: S.FANOUT_TYPE.GROUP_DIRECT,
        isResendingMsg: true
      }, u, g);
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendGroupMsg: ${v}: done`;
    } catch (e) {
      var I;
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendGroupMsg: failed to resend ${v} message: ${e}`;
      if (!((I = g.sendReporter) === null || I === undefined)) {
        I.postFailure({
          result: A.MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
          isTerminal: false
        });
      }
      g.sendReporter = null;
      throw e;
    }
    yield (0, h.logMessageSendForChatThreadLogging)(n.data);
  })).apply(this, arguments);
}
function N() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, i.default)(function* (e, t, n, r, i, a, s) {
    var c;
    var d;
    var p;
    var f;
    var g;
    const {
      id: m,
      to: h
    } = t;
    let y;
    if (a != null && (0, l.getABPropConfigValue)("lid_groups_outgoing_explicit_address_mode")) {
      y = Boolean(a == null ? undefined : a.isLidAddressingMode) === true ? _.STANZA_MSG_ADDRESSING_MODE.lid : _.STANZA_MSG_ADDRESSING_MODE.pn;
    }
    const T = yield (0, S.createFanoutMsgStanza)(e, t, n, r, i, s, y);
    yield (0, v.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
    if (!((c = s.sendPerfReporter) === null || c === undefined)) {
      c.postReadyToSendStage();
    }
    if (!((d = s.sendPerfReporter) === null || d === undefined)) {
      d.startWrittenWireStage();
    }
    const A = yield (0, o.deprecatedSendStanzaAndReturnAck)(T, (0, u.toCoreAckTemplate)({
      id: m.id,
      class: "message",
      from: h,
      participant: null
    }));
    const b = E.sendMsgAckSyncParser.parse(A);
    if (b.error) {
      return Promise.reject((0, C.default)("[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server"));
    } else {
      if (!((p = s.sendReporter) === null || p === undefined)) {
        p.setMessageDistributionType(M.MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE);
      }
      if (!((f = s.sendPerfReporter) === null || f === undefined)) {
        f.postWrittenWireStage();
      }
      s.sendPerfReporter = null;
      if (!((g = s.sendReporter) === null || g === undefined)) {
        g.postSuccess();
      }
      s.sendReporter = null;
      return b.success;
    }
  })).apply(this, arguments);
}
function w(e) {
  var t;
  if (!((t = e.sendReporter) === null || t === undefined)) {
    t.postFailure({
      result: A.MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
      isTerminal: false
    });
  }
  e.sendReporter = null;
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, i.default)(function* (e, t, n, r) {
    __LOG__(2)`postGroupParticipantSyncMetric: start`;
    const i = yield (0, p.getParticipantRecord)(String(t));
    if (!i) {
      return void __LOG__(2)`postGroupParticipantSyncMetric: failed to find participant record for group ${String(t)}`;
    }
    const a = i.participants.map(b.createWid);
    (0, g.maybePostGroupSyncMetrics)(r, a, n, e);
  })).apply(this, arguments);
}