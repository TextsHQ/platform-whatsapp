var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAddonRecord = function () {
  return U.apply(this, arguments);
};
exports.sendMsgRecord = function () {
  return G.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./34113.js");
var o = require("./122583.js");
var s = r(require("./670983.js"));
var l = require("./402994.js");
var u = require("./218198.js");
var c = require("./31162.js");
var d = require("./984330.js");
var p = require("./474596.js");
var f = require("./354458.js");
var _ = require("./169571.js");
var g = r(require("./846870.js"));
var m = r(require("./235613.js"));
var h = require("./177938.js");
var y = r(require("./97359.js"));
var E = require("./177205.js");
var S = require("./787742.js");
var v = require("./373070.js");
var T = require("./733694.js");
var M = require("./911600.js");
var A = require("./20749.js");
var b = require("./813257.js");
var C = require("./693741.js");
var P = require("./383296.js");
var O = require("./397516.js");
var I = require("./7184.js");
var R = require("./459857.js");
var N = require("./529085.js");
var D = require("./804974.js");
var w = require("./816793.js");
var L = require("./732403.js");
var k = r(require("./124928.js"));
function G() {
  return (G = (0, i.default)(function* (e) {
    var t;
    const r = (0, A.createMsgModelMetricReporter)(e);
    r.sendReporter = (t = r.sendReporter) !== null && t !== undefined ? t : r.createSendReporter();
    const i = require("./581354.js").findChat;
    const a = e.id.remote;
    const o = yield i(a, "sendMsgRecord");
    if (o.contact.isEnterprise && !(0, S.getIsGroupMsg)(e)) {
      const t = (0, I.getUtmForChat)(a);
      if (t != null && (0, N.isUtmValid)(o, t)) {
        e.utm = t;
      }
    }
    e.isNewMsg = true;
    return x({
      type: "message",
      record: e
    }, o, r);
  })).apply(this, arguments);
}
function U() {
  return (U = (0, i.default)(function* (e) {
    const t = (0, A.createAddonMetricReporter)(e);
    const r = require("./581354.js").findChat;
    return x({
      type: "addon",
      record: e
    }, yield r(e.id.remote, "sendMsgRecord"), t);
  })).apply(this, arguments);
}
function x() {
  return B.apply(this, arguments);
}
function B() {
  return (B = (0, i.default)(function* (e, t, r) {
    const {
      record: f
    } = e;
    const A = (0, s.default)(f.to, "record.to");
    const N = f.id;
    const G = N.remote;
    if (k.default.isGroup(A)) {
      yield (0, y.default)(require("./667845.js")).find(A);
    }
    if (!t.isTrusted()) {
      (0, P.sendNotSpam)(t).catch(() => {});
    }
    const U = f.type === v.MSG_TYPE.PROTOCOL && ["sender_revoke", "admin_revoke"].includes(f.subtype);
    const x = (0, S.getIsReaction)(f) && f.reactionText === M.REVOKED_REACTION_TEXT;
    if (!(0, S.getIsGroupMsg)(f) && !U && !x && p.BlocklistCollection.get(A)) {
      return Promise.reject(new m.default("Contact is blocked", h.ContactCollection.assertGet(A)));
    }
    let B;
    if (!U) {
      B = new L.WebcMessageSendWamEvent({
        messageType: (0, w.getWamMessageType)(f),
        messageMediaType: (0, w.getWamMediaType)(f),
        messageIsForward: Boolean(f.isForwarded)
      });
    }
    const j = require("./61113.js").MsgCollection;
    (0, O.sendSeen)(t);
    if (!(f.type === v.MSG_TYPE.REACTION || f.type === v.MSG_TYPE.REACTION_ENC || f.type === v.MSG_TYPE.KEEP_IN_CHAT || f.type === v.MSG_TYPE.POLL_UPDATE || U)) {
      j.trigger(g.default.NEW_MSG_SENT);
    }
    return Promise.resolve().then(() => e.type === "message" ? (0, b.sendMsgRecord)(e.record, r) : (0, u.sendAddonMsgData)(e.record, r)).then(function () {
      var n = (0, i.default)(function* (n) {
        const r = N.fromMe && (0, R.isMePrimary)(G) ? l.ACK.READ : l.ACK.SENT;
        if (e.type === "message") {
          e.record.updateAck(r);
          (0, c.maybeUpdateAddOnAckForMsgAction)(e.record, r);
        }
        if (F(t, f)) {
          (0, _.genBotTypingIndicatorMessage)(t);
        }
        if (B) {
          B.markMessageSendT();
          B.commit();
        }
        if (f.utm != null) {
          (0, I.clearUtmAfterMessageSent)(G);
        }
        yield (0, T.logMessageSendForChatThreadLogging)(f);
        if (![v.MSG_TYPE.PROTOCOL, v.MSG_TYPE.REACTION, v.MSG_TYPE.KEEP_IN_CHAT].includes(f.type)) {
          t.lastReceivedKey = N;
        }
        return {
          messageSendResult: C.SendMsgResult.OK,
          t: n.t,
          count: n.count
        };
      });
      return function () {
        return n.apply(this, arguments);
      };
    }()).catch((0, o.filteredCatch)(d.ServerStatusCodeError, e => {
      var t;
      if (e.status !== 408) {
        __LOG__(4, undefined, new Error(), true)`Phone responded ${e.status}`;
        SEND_LOGS("send-not-200");
      }
      if (!((t = r.sendReporter) === null || t === undefined)) {
        t.postFailure({
          result: D.MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
          isTerminal: false
        });
      }
      r.sendReporter = null;
      return {
        messageSendResult: C.SendMsgResult.ERROR_NETWORK
      };
    })).catch((0, o.filteredCatch)(a.BufferTooLargeError, () => {
      var e;
      if (!((e = r.sendReporter) === null || e === undefined)) {
        e.postFailure({
          result: D.MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG,
          isTerminal: true
        });
      }
      r.sendReporter = null;
      return {
        messageSendResult: C.SendMsgResult.ERROR_UNKNOWN
      };
    })).catch((0, o.filteredCatch)(E.MessageValidationError, () => {
      var e;
      if (!((e = r.sendReporter) === null || e === undefined)) {
        e.postFailure({
          result: D.MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF,
          isTerminal: true
        });
      }
      r.sendReporter = null;
      return {
        messageSendResult: C.SendMsgResult.ERROR_UNKNOWN
      };
    })).catch((0, o.filteredCatch)(E.MessageSentAckError, e => {
      var t;
      __LOG__(3)`model:msg:createRecord dropped msg: ${f.id.toString()}`;
      __LOG__(4, undefined, new Error(), true)`Got error ${String(e)}`;
      SEND_LOGS("send-msg-server-nack-error");
      if (!((t = r.sendReporter) === null || t === undefined)) {
        t.postFailure({
          result: D.MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
          isTerminal: true
        });
      }
      r.sendReporter = null;
      return {
        messageSendResult: C.SendMsgResult.ERROR_UNKNOWN
      };
    })).catch(e => {
      var t;
      __LOG__(3)`model:msg:createRecord dropped msg: ${f.id.toString()}`;
      __LOG__(4, undefined, new Error(), true)`Got error ${String(e)}`;
      SEND_LOGS("send-msg-error");
      if (!((t = r.sendReporter) === null || t === undefined)) {
        t.postFailure({
          result: D.MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
          isTerminal: true
        });
      }
      r.sendReporter = null;
      return {
        messageSendResult: C.SendMsgResult.ERROR_UNKNOWN
      };
    });
  })).apply(this, arguments);
}
function F(e, t) {
  var n;
  const r = (0, f.isBotEnabled)() && e.id instanceof k.default && e.id.isBot();
  const i = (0, f.isBizBot3pEnabled)() && ((n = e.contact.businessProfile) === null || n === undefined ? undefined : n.isBizBot3p) === true;
  return (r || i) && t.type !== v.MSG_TYPE.PROTOCOL && t.type === v.MSG_TYPE.CHAT;
}