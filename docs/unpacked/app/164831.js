var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._sendEphemeralSyncResponse = undefined;
exports.processEphemeralSyncResponse = function () {
  return L.apply(this, arguments);
};
exports.syncEphemeralSetting = function () {
  return j.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./551648.js");
var u = require("./738501.js");
var c = require("./698867.js");
var d = require("./147980.js");
var p = require("./177938.js");
var f = require("./933915.js");
var _ = require("./840089.js");
var g = require("./891244.js");
var m = require("./90377.js");
var h = require("./308688.js");
var y = require("./656134.js");
var E = require("./712354.js");
var S = require("./16054.js");
var v = require("./448628.js");
var T = r(require("./565754.js"));
var M = require("./772358.js");
var A = require("./373070.js");
var b = require("./899137.js");
var C = require("./387183.js");
var P = require("./452935.js");
var O = require("./459857.js");
var I = require("./546703.js");
var R = r(require("./556869.js"));
function N() {
  return (0, s.getABPropConfigValue)("ephemeral_sync_response");
}
function D() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* (e) {
    __LOG__(2)`[DMResolve] setting ephemeralOutOfSync on msg`;
    const t = {
      ephemeralOutOfSync: true
    };
    if (N()) {
      yield (0, g.updateMessageTable)(e.id, t);
    }
    e.ephemeralOutOfSync = true;
    const r = require("./61113.js").MsgCollection.get(e.id);
    if (r) {
      r.set(t);
    }
  })).apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* (e) {
    const t = require("./351053.js").ChatCollection.get(e.id.remote);
    if (!t) {
      throw (0, R.default)("[DMResolve] chat model not found for ESR message");
    }
    if (t.isGroup) {
      __LOG__(4, undefined, new Error(), true)`[DMResolve] EPHEMERAL_SYNC_RESPONSE should not be processed for group chats ${t.id.toLogString()}`;
      return void SEND_LOGS("handle-ephemeral-sync-response");
    }
    if (!N()) {
      return void (0, S.sendEphemeralSyncResponseReceiveWamEvent)({
        chat: t,
        failureReason: I.ESR_FAILURE_REASON_TYPE.ESR_ABPROP_OFF
      });
    }
    if (t.contact.isEnterprise) {
      return void __LOG__(2)`[DMResolve] cannot process EPHEMERAL_SYNC_RESPONSE for enterprise contact ${t.id.toLogString()}`;
    }
    __LOG__(2)`[DMResolve] processing EPHEMERAL_SYNC_RESPONSE`;
    const r = {
      id: e.id,
      type: e.type,
      ephemeralDuration: e.ephemeralDuration,
      ephemeralSettingTimestamp: e.ephemeralSettingTimestamp,
      disappearingModeInitiator: e.disappearingModeInitiator,
      disappearingModeTrigger: e.disappearingModeTrigger,
      disappearingModeInitiatedByMe: e.disappearingModeInitiatedByMe
    };
    const i = (0, v.getMsgEphemeralitySettings)(r);
    if (i != null) {
      if (!(0, h.isEphemeralDurationAllowed)(i.duration)) {
        __LOG__(2)`[DMResolve] processEphemeralSyncResponse called with invalid setting ${i.duration} seconds for chat ${t.id.toLogString()}`;
        return void (0, S.sendEphemeralSyncResponseReceiveWamEvent)({
          chat: t,
          failureReason: I.ESR_FAILURE_REASON_TYPE.INVALID_EPHEMERAL_DURATION
        });
      }
      const e = (0, u.getChatEphemeralityFields)(t);
      if ((0, y.compareEphemeralityFields)(e, i)) {
        return void __LOG__(2)`[DMResolve] Received ESR, but chat and msg settings are already the same`;
      }
      __LOG__(2)`[DMResolve] Updating chat due to EPHEMERAL_SYNC_RESPONSE`;
      t.ephemeralDuration = i.duration;
      t.ephemeralSettingTimestamp = (0, y.resolveSettingTimestamp)(i.settingTimestamp);
      const n = (0, y.resolveDisappearingModeTrigger)(i.disappearingModeTrigger);
      const r = (0, y.resolveDisappearingModeInitiator)(i.initiator);
      t.disappearingModeInitiator = r;
      t.disappearingModeTrigger = n;
      t.disappearingModeInitiatedByMe = (0, y.resolveDisappearingModeInitiatedByMe)(i.initiatedByMe, i.initiator);
      yield (0, _.updateChatTable)(t.id, {
        ephemeralDuration: t.ephemeralDuration,
        ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
        disappearingModeInitiator: r,
        disappearingModeTrigger: n,
        disappearingModeInitiatedByMe: t.disappearingModeInitiatedByMe
      });
      (0, f.updateEphemeralDurationCache)(t.id, t.ephemeralDuration);
      if ((0, y.resolveEphermalityDuration)(e == null ? undefined : e.duration) !== (0, y.resolveEphermalityDuration)(i == null ? undefined : i.duration)) {
        yield (0, m.generateEphemeralNotificationTemplateSystemMessage)(t, i.duration, null);
      }
      (0, S.sendEphemeralSyncResponseReceiveWamEvent)({
        chat: t,
        incomingESRSettings: i,
        localChatSettings: e
      });
    }
  })).apply(this, arguments);
}
const k = new l.BackoffCache([180000, 900000, 1 / 0]);
function G() {
  return U.apply(this, arguments);
}
function U() {
  return (U = (0, i.default)(function* (e, t, n, r) {
    var i;
    if (!N() || e.isPSA()) {
      return;
    }
    const s = e.toString();
    var l;
    if (k.test(s)) {
      __LOG__(2)`[DMResolve] Not sending ESR to ${e} due to back off limit`;
      return void (0, S.sendEphemeralSyncResponseSendErrorWamEvent)({
        to: e,
        error: I.ESR_FAILURE_REASON_TYPE.ATTEMPTS_EXHAUSTED,
        attempts: (l = k.get(s)) === null || l === undefined ? undefined : l.attempts
      });
    }
    const {
      duration: u,
      settingTimestamp: c,
      initiator: d
    } = t;
    const p = (0, O.assertGetMeUser)();
    const f = {
      id: new T.default({
        fromMe: true,
        remote: e,
        id: yield T.default.newId(),
        participant: undefined
      }),
      from: p,
      to: e,
      t: (0, o.unixTime)(),
      type: A.MSG_TYPE.PROTOCOL,
      subtype: "ephemeral_sync_response",
      ephemeralDuration: u,
      ephemeralSettingTimestamp: c,
      disappearingModeInitiator: d
    };
    const _ = new M.Msg(f);
    __LOG__(2)`[DMResolve] Sending out EPHEMERAL_SYNC_RESPONSE`;
    (0, S.sendEphemeralSyncResponseSendWamEvent)({
      to: e,
      changes: t,
      incomingMsgSettings: n,
      localChatSettings: r,
      attempts: (i = k.get(s)) === null || i === undefined ? undefined : i.attempts
    });
    return new b.createNonPersistedJob("sendMessage", () => (0, C.sendMsgRecord)(_), {
      priority: a.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}
function x(e, t) {
  return !(!t.isUser || t.contact.isEnterprise || e.id.fromMe || !(0, v.messageSupportsEphemerality)(e.type));
}
function B() {
  return F.apply(this, arguments);
}
function F() {
  return (F = (0, i.default)(function* (e, t) {
    var n;
    if (!(0, s.getABPropConfigValue)("out_of_sync_disappearing_messages_logging")) {
      return;
    }
    const r = (n = (0, u.getEphemeralSetting)(t)) !== null && n !== undefined ? n : 0;
    const i = (0, y.getEphemeralDurationForUser)(p.ContactCollection.getMeContact());
    const a = (0, y.getEphemeralDurationForUser)(t.contact);
    new E.EphemeralOutOfSyncInfoWamEvent({
      incomingMessageEphemeralityDuration: e != null ? e : 0,
      isAGroup: t.isGroup,
      threadEphemeralityDuration: r,
      otherDefaultModeDuration: a != null ? a : 0,
      userDefaultModeDuration: i != null ? i : 0,
      threadId: yield (0, c.getChatThreadID)(t.id.toJid()),
      isNewThreadForUser: t.msgs.length === 0
    }).commit();
  })).apply(this, arguments);
}
function j() {
  return (j = (0, i.default)(function* (e, t) {
    const n = e.type === A.MSG_TYPE.PROTOCOL && e.subtype === "ephemeral_setting";
    if (!x(e, t) && !n) {
      return void __LOG__(2)`[DMResolve] dropping msg from ephemeral sync`;
    }
    const r = (0, v.getMsgEphemeralitySettings)(e);
    const i = (0, u.getChatEphemeralityFields)(t);
    __LOG__(2)`[DMResolve] resolving ephemerality using existing chat DM settings:`;
    const a = (0, y.resolveExistingChatDMSettings)(r, i);
    const o = (0, y.compareEphemeralityFields)(i, a);
    const s = (0, y.compareEphemeralityFields)(r, a);
    if (a == null || o && s) {
      __LOG__(2)`[DMResolve] neither party is out-of-sync`;
      k.remove(t.id.toString());
    } else {
      var l;
      __LOG__(2)`[DMResolve] ESR resolution details: ${JSON.stringify({
        msgId: e.id.toString(),
        resolution: a,
        incomingMsgSettings: r,
        localChatSettings: i
      })}`;
      if (!o) {
        __LOG__(2)`[DMResolve] local is out-of-sync, updating local chat DM settings`;
        yield (0, P.updateChatEphemeralSettings)(t, {
          ephemeralSettingTimestamp: a.settingTimestamp,
          ephemeralDuration: a.duration,
          disappearingModeInitiator: a.initiator,
          disappearingModeTrigger: a.disappearingModeTrigger,
          disappearingModeInitiatedByMe: a.initiatedByMe
        });
        if (!(n || a.duration === ((l = i == null ? undefined : i.duration) !== null && l !== undefined ? l : 0))) {
          __LOG__(2)`[DMResolve] rendering DM system message as duration has changed`;
          yield (0, m.generateEphemeralNotificationTemplateSystemMessage)(t, a.duration, null);
        }
      }
      if (!s && (__LOG__(2)`[DMResolve] other party is out-of-sync, sending EPHEMERAL_SYNC_RESPONSE`, !(0, d.isNotificationType)(e.type, e.subtype))) {
        var c;
        const n = (c = r == null ? undefined : r.duration) !== null && c !== undefined ? c : 0;
        if (a.duration !== n) {
          D(e);
          B(r == null ? undefined : r.duration, t);
        }
        G(e.from, a, r, i);
      }
    }
  })).apply(this, arguments);
}
const Y = G;
exports._sendEphemeralSyncResponse = Y;