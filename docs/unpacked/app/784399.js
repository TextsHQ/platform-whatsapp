var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptAndSendUserMsg = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/170735.js"));
var o = require("./250281.js");
var s = require("./632157.js");
var l = require("./354458.js");
var u = require("./707065.js");
var c = require("./83672.js");
var d = require("./271221.js");
var p = require("./97858.js");
var f = require("./787742.js");
var _ = require("./733694.js");
var g = require("./204412.js");
var m = require("./608182.js");
var h = require("./312469.js");
var y = require("./510607.js");
var E = require("./459857.js");
var S = require("./804974.js");
var v = r(require("./556869.js"));
function T() {
  return (T = (0, i.default)(function* (e, t, n, r) {
    var i;
    const {
      id: a,
      to: o
    } = t;
    const {
      invokedBotWid: u,
      protocolMessageKey: _,
      subtype: m,
      botRespOrInvocationRevokeBotWid: S
    } = e.data;
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendUserMsg: sending ${a}`;
    const v = o.isLid() && (i = (0, E.getMaybeMeLid)()) !== null && i !== undefined ? i : (0, E.assertGetMe)();
    let T = yield (0, c.getFanOutList)({
      wids: [o, v],
      includeHostedDevice: false
    });
    if ((0, l.isBotEnabled)()) {
      if ((0, f.getIsBotFeedbackMessage)(e.data) && _ != null) {
        let t;
        t = o.isBot() || _.participant == null ? e.data.bizBotType != null ? o : _.remote : _.participant;
        T = [t];
      } else if (u && (u == null ? undefined : u.isBot())) {
        T = [...T, u];
      } else if (S && (S == null ? undefined : S.isBot())) {
        if (!(m !== "sender_revoke" && m !== "admin_revoke")) {
          T = [...T, S];
        }
      }
    }
    const A = yield b(e, t, n, T, {
      fanoutType: h.FANOUT_TYPE.CHAT
    }, r);
    const {
      phash: C
    } = A;
    if (C) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendUserMsg: phash mismatch, got server phash ${C}`;
      const i = (0, s.unixTime)();
      (0, g.postMdDeviceSyncAckMetric)(o, n);
      r.sendReporter = r.createSendReporter({
        isResend: true
      });
      Promise.resolve().then(() => {
        if ((0, p.prekeyFetchForMessageResendEnabled)() && !o.isLid()) {
          return (0, d.fetchResendMissingKeys)([o, v]).catch(() => {
            __LOG__(3, undefined, undefined, true)`fetchResendMissingKeys: failed`;
            SEND_LOGS("fetchResendMissingKeys-sync-error");
          });
        }
      }).then(() => (0, y.syncDeviceListJob)([o, v], "message", C)).then(() => M(e, t, n, T, i, r));
    }
    return A;
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t, n, r, i, o) {
    const {
      to: l
    } = t;
    const u = t.id.id;
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendUserMsg: ${u} to ${t.to.toString()}`;
    const d = (0, m.getResendTimeoutInSeconds)();
    var p;
    if ((0, s.unixTime)() - i > d) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendUserMsg: ${u}: skip resending due to ${d / 60} min timeout`;
      if (!((p = o.sendReporter) === null || p === undefined)) {
        p.postFailure({
          result: S.MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
          isTerminal: false
        });
      }
      return void (o.sendReporter = null);
    }
    try {
      var f;
      const i = l.isLid() && (f = (0, E.getMaybeMeLid)()) !== null && f !== undefined ? f : (0, E.assertGetMe)();
      const s = yield (0, c.getFanOutList)({
        wids: [l, i]
      });
      const d = (0, a.default)(s, r, String);
      var g;
      if (d.length === 0) {
        __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendUserMsg: ${u}: skip resending to the empty list`;
        if (!((g = o.sendReporter) === null || g === undefined)) {
          g.postFailure({
            result: S.MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
            isTerminal: false
          });
        }
        return void (o.sendReporter = null);
      }
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendUserMsg: ${u}: resending to devices: ${d.join(",")}`;
      if (e.data.isOverwrittenByRevoke === true) {
        return void __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendUserMsg: ${u}: skip resending because this message has been overwritten by a revoke`;
      }
      const {
        phash: p
      } = yield b(e, t, n, d, {
        fanoutType: h.FANOUT_TYPE.CHAT,
        isResendingMsg: true
      }, o);
      if (p) {
        (0, y.syncDeviceListJob)([l, i], "message", p);
      }
    } catch (e) {
      var v;
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`resendUserMsg: failed to resend ${u} message: ${e}`;
      if (!((v = o.sendReporter) === null || v === undefined)) {
        v.postFailure({
          result: S.MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
          isTerminal: false
        });
      }
      o.sendReporter = null;
      throw e;
    }
    yield (0, _.logMessageSendForChatThreadLogging)(e.data);
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t, n, r, i, a) {
    var s;
    var l;
    var c;
    var d;
    var p;
    if (!((s = a.sendPerfReporter) === null || s === undefined)) {
      s.startReadyToSendStage();
    }
    const {
      id: f,
      to: _
    } = t;
    const g = yield (0, h.createFanoutMsgStanza)(e, t, n, r, i, a);
    if (!((l = a.sendPerfReporter) === null || l === undefined)) {
      l.postReadyToSendStage();
    }
    if (!((c = a.sendPerfReporter) === null || c === undefined)) {
      c.startWrittenWireStage();
    }
    const y = yield (0, o.deprecatedSendStanzaAndReturnAck)(g, (0, u.toCoreAckTemplate)({
      id: f.id,
      class: "message",
      from: _,
      participant: null
    }));
    const E = m.sendMsgAckSyncParser.parse(y);
    if (E.error) {
      throw (0, v.default)("[messaging] sendMsgToDeviceList: Invalid ack from server");
    }
    if (!((d = a.sendPerfReporter) === null || d === undefined)) {
      d.postWrittenWireStage();
    }
    a.sendPerfReporter = null;
    if (!((p = a.sendReporter) === null || p === undefined)) {
      p.postSuccess();
    }
    a.sendReporter = null;
    return E.success;
  })).apply(this, arguments);
}