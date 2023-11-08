var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logReceivedMessagesInWAM = function (e, t, n, r, i) {
  (function () {
    return C.apply(this, arguments);
  })(e).then(a => Promise.all([A(e, t, n, a, r, i), P(e, a), O(e), I(e)])).catch(e => {
    __LOG__(3)`error logging received messages: ${e}`;
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./359987.js");
var l = require("./698867.js");
var u = require("./257147.js");
var c = require("./656134.js");
var d = require("./482369.js");
var p = require("./853448.js");
var f = require("./787742.js");
var _ = require("./755985.js");
var g = require("./691195.js");
var m = require("./459857.js");
var h = require("./214579.js");
var y = require("./564066.js");
var E = require("./313556.js");
var S = require("./440401.js");
var v = require("./816793.js");
var T = require("./669050.js");
var M = require("./766187.js");
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t, n, r, s, l) {
    var u;
    const c = (0, a.unixTimeMs)();
    const d = (u = r.get((0, m.assertGetMeUser)().toJid())) === null || u === undefined ? undefined : u.ephemeralDuration;
    yield Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        const i = e.from;
        if (i == null) {
          return;
        }
        const a = new p.MessageReceiveWamEvent({
          messageType: (0, v.getWamMessageType)(e),
          messageMediaType: (0, v.getWamMediaType)(e),
          messageIsInternational: (0, f.getIsInternational)(e),
          messageIsOffline: t,
          isViewOnce: Boolean(e.isViewOnce),
          isForwardedForward: (0, f.getNumTimesForwarded)(e) > 1,
          isAReply: (0, f.getIsReply)(e),
          editType: (0, f.getWamEditType)(e)
        });
        if (!i.isGroup()) {
          var u;
          const e = (u = r.get(i.toJid())) === null || u === undefined ? undefined : u.ephemeralDuration;
          if (e != null) {
            a.senderDefaultDisappearingDuration = e;
          }
          if (d != null) {
            a.receiverDefaultDisappearingDuration = d;
          }
          a.isLid = i.isLid();
        }
        if ((0, f.getIsRevoke)(e)) {
          a.revokeType = e.subtype === "admin_revoke" ? y.REVOKE_TYPE.ADMIN : y.REVOKE_TYPE.SENDER;
        }
        if (s != null) {
          a.messageReceiveT0 = s - n;
          a.messageReceiveT1 = c - s;
          if (l != null) {
            a.messageQueueTime = l - s;
          }
        }
        if (e.ephemeralDuration != null && e.ephemeralDuration > 0) {
          a.ephemeralityDuration = e.ephemeralDuration;
        }
        const _ = (0, f.getWamDisappearingModeInitiator)(e);
        if (_ != null) {
          a.disappearingChatInitiator = _;
        }
        if ((0, o.getABPropConfigValue)("dm_initiator_trigger")) {
          const t = (0, f.getWamDisappearingModeTrigger)(e);
          if (t != null) {
            a.ephemeralityTriggerAction = t;
          }
          const n = (0, f.getWamDisappearingModeInitiatedByMe)(e);
          if (n != null) {
            a.ephemeralityInitiator = n;
          }
        }
        const g = (0, v.getWamAgentEngagementType)(e);
        if (g != null) {
          a.agentEngagementType = g;
        }
        const m = yield (0, E.getGroupTypeFromChatWid)(i);
        if (m != null) {
          a.typeOfGroup = m;
        }
        if (i == null ? undefined : i.isGroup()) {
          const t = yield (0, E.isCagIncognitoFromChatWid)(i);
          const n = (0, f.getIsReaction)(e);
          if (t != null && n != null) {
            a.isLid = t && n;
          }
          const r = yield (0, S.getGroupMetrics)(i);
          if ((r == null ? undefined : r.participantCount) != null) {
            a.participantCount = r.participantCount;
          }
          if ((r == null ? undefined : r.deviceCount) != null) {
            a.deviceCount = r.deviceCount;
          }
          if ((r == null ? undefined : r.deviceSizeBucket) != null) {
            a.deviceSizeBucket = r.deviceSizeBucket;
          }
        }
        a.commit();
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  })).apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    const t = new Set(e.filter(e => e.id.remote.isUser()).map(e => e.id.remote.toJid()));
    t.add((0, m.assertGetMeUser)().toJid());
    const n = Array.from(t);
    let r;
    if ((0, _.isWorker)()) {
      r = yield (0, g.getContactTable)().bulkGet(n);
      return new Map(r.map((e, t) => [n[t], {
        ephemeralDuration: (0, c.getEphemeralDurationForUser)(e),
        shouldBlockByCountry: () => false,
        shouldBlockByTos: () => false
      }]));
    } else {
      return (0, M.workerSafeSendAndReceive)("getContactData", {
        ids: n.map(T.createWid)
      });
    }
  })).apply(this, arguments);
}
function P(e, t) {
  for (const n of e) {
    const e = t.get(n.id.remote.toJid());
    if (e && !(0, f.getIsSentByMe)(n)) {
      if (e.shouldBlockByCountry()) {
        new d.GatedMessageReceivedWamEvent({
          chatGatedReason: h.CHAT_GATED_REASON.COUNTRY
        }).commit();
      } else if (e.shouldBlockByTos()) {
        new d.GatedMessageReceivedWamEvent({
          chatGatedReason: h.CHAT_GATED_REASON.TOS3
        }).commit();
      }
    }
  }
}
function O(e) {
  (0, l.handleActivitiesForChatThreadLogging)(e.filter(u.shouldIncrementMsgSendAndReceive).map(e => ({
    activityType: e.id.fromMe ? "msgSend" : "msgReceive",
    ts: e.t,
    chatId: e.id.remote,
    isViewOnce: e.isViewOnce === true,
    isReaction: (0, f.getIsReaction)(e),
    isForwarded: e.isForwarded === true,
    isCommerceMessage: (0, u.isCommerceMessage)(e),
    isReply: (0, f.getIsReply)(e),
    isEdit: (0, f.getIsEditProtocolMsg)(e),
    isBot: (0, f.getIsBotQuery)(e) || (0, f.getIsMetaBotResponse)(e)
  })));
}
function I(e) {
  e.filter(f.getIsAuthenticationMessage).forEach(e => {
    (0, s.frontendFireAndForget)("logOTPMessageReceivedActions", {
      msgData: e
    });
  });
}