var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revoke = U;
exports.sendRevoke = function (e, t, n) {
  return function () {
    return x.apply(this, arguments);
  }((0, R.unproxy)(e), t, n);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/604788.js"));
var o = require("./775593.js");
var s = require("./632157.js");
var l = require("./35234.js");
var u = require("./354458.js");
var c = require("./780549.js");
var d = require("./488300.js");
var p = require("./767777.js");
var f = require("./163755.js");
var _ = require("./110567.js");
var g = G(require("./644234.js"));
var m = require("./566509.js");
var h = require("./420213.js");
var y = require("./939716.js");
var E = require("./787742.js");
var S = r(require("./565754.js"));
var v = require("./772358.js");
var T = G(require("./430231.js"));
var M = require("./373070.js");
var A = require("./899137.js");
var b = require("./323829.js");
var C = require("./140661.js");
var P = require("./387183.js");
var O = require("./693741.js");
var I = require("./967737.js");
var R = require("./163139.js");
var N = require("./251444.js");
var D = require("./459857.js");
var w = r(require("./124928.js"));
var L = r(require("./556869.js"));
function k(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (k = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function G(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = k(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}
function U(e, t) {
  return function (e, t) {
    var r;
    var i;
    const o = (0, f.getMaybeChat)(e);
    const u = (o == null ? undefined : o.isNewsletter) ? C.NEWSLETTER_REVOKE_WINDOW : C.REVOKE_WINDOW;
    if (!((0, s.unixTime)() - e.t <= u + C.REVOKE_WINDOW_RECEIVER_MARGIN)) {
      return void __LOG__(2)`revoke: outside of revoke window, ${e.id.toString()} has not been revoked`;
    }
    require("./856311.js").LabelCollection.removeAllLabelsMD(e);
    if (T.typeIsMms(e)) {
      g.deregisterMsg(e);
    }
    if (!(o == null)) {
      o.removeFromCollection(e);
    }
    e.trigger("revoked");
    (0, E.clearMsgGetterCacheFor)(e);
    (0, f.clearFrontendMsgGetterCacheFor)(e);
    const c = e.getCollection();
    const d = e.id;
    if (e.msgChunk) {
      e.msgChunk.replaceId(d, t.msgKey);
    }
    c.replaceId(d, t.msgKey);
    const m = (r = o == null ? undefined : o.isUnreadMsg(e)) !== null && r !== undefined && r;
    const h = (i = o == null ? undefined : o.isActiveUnreadMsg(e)) !== null && i !== undefined && i;
    const y = {
      isOverwrittenByRevoke: true,
      id: t.msgKey,
      type: M.MSG_TYPE.REVOKED,
      subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
      revokeSender: t.sender,
      revokeTimestamp: t.revokeTimestamp,
      body: undefined,
      caption: undefined,
      clientUrl: undefined,
      deprecatedMms3Url: undefined,
      loc: undefined,
      lat: undefined,
      lng: undefined,
      isLive: undefined,
      accuracy: undefined,
      speed: undefined,
      degrees: undefined,
      comment: undefined,
      sequence: undefined,
      shareDuration: undefined,
      finalLat: undefined,
      finalLng: undefined,
      finalAccuracy: undefined,
      finalThumbnail: undefined,
      finalSpeed: undefined,
      finalDegrees: undefined,
      finalTimeOffset: undefined,
      title: undefined,
      description: undefined,
      canonicalUrl: undefined,
      matchedText: undefined,
      thumbnail: undefined,
      richPreviewType: undefined,
      doNotPlayInline: undefined,
      quotedMsg: undefined,
      quotedStanzaID: undefined,
      quotedRemoteJid: undefined,
      quotedParticipant: undefined,
      mediaData: undefined,
      mentionedJidList: undefined,
      groupMentions: undefined,
      vcardList: undefined,
      star: false,
      kicState: undefined,
      kicTimestampMs: undefined,
      kicKey: undefined,
      errorCode: p.SendFailureErrorCode.NoError,
      isSendFailure: false
    };
    e.set(y);
    e.trigger("change:msgKey", {
      newKey: t.msgKey,
      oldKey: d
    });
    if (o) {
      if (d.equals(o.lastReceivedKey)) {
        o.lastReceivedKey = t.msgKey;
      }
      if (o.composeQuotedMsg === e) {
        o.composeQuotedMsg = null;
      }
      if (m) {
        o.unreadCount = Math.max(o.unreadCount - 1, 0);
        o.unreadDividerOffset += 1;
        (0, l.reduceChatUnreadCount)(o.id.toString());
      }
      if (h) {
        o.activeUnreadCount = Math.max(o.activeUnreadCount - 1, 0);
      }
    }
    if (w.default.isBroadcast(d.remote)) {
      const r = T.getBroadcastFanoutKeys(d);
      const i = T.getBroadcastFanoutKeys(t.msgKey);
      if (!r || !i || r.length !== i.length) {
        return void __LOG__(2)`cannot fanout revoke: ${String(r)} ${String(i)}`;
      }
      (0, a.default)(r, i).forEach(e => {
        const n = c.get(e[0]);
        if (n) {
          U(n, {
            msgKey: e[1],
            subtype: t.subtype,
            sender: t.sender
          });
        }
      });
      _.ftsClient.purge([String(e.rowId)]).catch(() => {});
      const s = require("./628905.js").getJobManager;
      const l = o ? o.id.toString() : e.id.remote.toString();
      (0, N.deleteModelsForLastAddOnPreview)([d.toString()]);
      s().fireAndForget(b.jobSerializers.deleteAddOns(l.toString(), [d.toString()]));
    }
  }((0, R.unproxy)(e), t);
}
function x() {
  return (x = (0, i.default)(function* (e, t, r) {
    var a;
    if (t === c.Revoke.Sender && !e.id.fromMe && !(0, y.canBotResponseBeRevokeByInvoker)(e)) {
      return Promise.reject((0, L.default)("revoking received message"));
    }
    const l = e.id.remote.isGroup() && ((a = (0, f.getChat)(e).groupMetadata) === null || a === undefined ? undefined : a.isLidAddressingMode);
    let p;
    if (e.id.remote.isGroup()) {
      p = l === true ? (0, D.getMeLidUser)() : (0, D.getMeUser)();
    }
    const _ = new S.default({
      id: yield S.default.newId(),
      remote: e.id.remote,
      fromMe: true,
      participant: p
    });
    const g = B(t);
    const T = (0, s.unixTime)();
    const C = {
      id: _,
      from: l === true ? (0, D.getMeLidUser)() : (0, D.getMeUser)(),
      to: e.id.remote,
      t: T,
      type: M.MSG_TYPE.PROTOCOL,
      subtype: g,
      protocolMessageKey: e.id,
      clearMedia: !!r,
      local: true,
      revokeDuration: T - e.t,
      revokeTimestamp: T
    };
    if ((0, u.isBotEnabled)()) {
      var R;
      let t = null;
      const n = (R = e.mentionedJidList) === null || R === undefined ? undefined : R.find(e => e.isBot());
      const r = (0, E.getSender)(e);
      if (r && r.isBot()) {
        t = r;
      } else if (n != null) {
        t = n;
      }
      C.botRespOrInvocationRevokeBotWid = t;
      if (e.botTargetSenderJid instanceof w.default) {
        C.botTargetSenderJid = e.botTargetSenderJid;
      }
    }
    const k = new v.Msg(C);
    k.wamMessageSendPerfReporter = new m.MessageSendPerfReporter({
      chatWid: k.to,
      mediaType: k.getWamMediaType(),
      messageType: k.getWamMessageType()
    });
    k.wamMessageSendPerfReporter.setIsRevokeMessage(true);
    return (0, A.createNonPersistedJob)("sendMessage", (0, i.default)(function* () {
      try {
        var t;
        var r;
        if (!((t = k.wamMessageSendPerfReporter) === null || t === undefined)) {
          t.startSavedStage();
        }
        yield (0, h.storeMessages)([C], (0, f.getChat)(e).id);
        if (!((r = k.wamMessageSendPerfReporter) === null || r === undefined)) {
          r.postSavedStage();
        }
      } catch (e) {
        __LOG__(4, true, new Error(), true)`_sendRevoke: failed to storeMessages into storage`;
        SEND_LOGS("storeMessages failed");
        throw e;
      }
      const {
        messageSendResult: a
      } = yield (0, P.sendMsgRecord)(k);
      if (a === O.SendMsgResult.OK) {
        new I.SendRevokeMessageWamEvent({
          messageType: e.getWamMessageType(),
          messageMediaType: e.getWamMediaType(),
          revokeSendDelay: k.revokeDuration
        }).commit();
        return (0, d.processRevokeMsgs)([{
          revokeMsgKey: e.id,
          newMsgKey: _,
          timestamp: e.t,
          revokeTimestamp: T,
          subtype: g,
          sender: (0, D.getMeUser)(),
          disappearingModeInitiator: e.disappearingModeInitiator,
          ephemeralDuration: e.ephemeralDuration,
          ephemeralSettingTimestamp: e.ephemeralSettingTimestamp
        }]).then((0, i.default)(function* () {
          const t = require("./628905.js").getJobManager;
          (0, N.deleteModelsForLastAddOnPreview)([e.id.toString()]);
          yield t().waitUntilPersisted(b.jobSerializers.deleteAddOns((0, f.getChat)(e).id.toString(), [e.id.toString()]));
          U(e, {
            msgKey: _,
            subtype: g,
            sender: (0, D.getMeUser)(),
            revokeTimestamp: T
          });
          return {
            messageSendResult: O.SendMsgResult.OK
          };
        }));
      } else {
        return Promise.resolve({
          messageSendResult: O.SendMsgResult.ERROR_UNKNOWN
        });
      }
    }), {
      priority: o.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}
function B(e) {
  switch (e) {
    case c.Revoke.Sender:
      return "sender_revoke";
    case c.Revoke.Admin:
      return "admin_revoke";
  }
}