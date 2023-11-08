var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndUpdateStatus = B;
exports.getDeviceSyncInputs = K;
exports.handleAccountSyncNotification = function () {
  return V.apply(this, arguments);
};
exports.updateMyTextStatusFromServer = j;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./418987.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./696155.js");
var c = require("./798440.js");
var d = require("./853670.js");
var p = require("./354458.js");
var f = require("./780549.js");
var _ = require("./355813.js");
var g = require("./380900.js");
var m = require("./515309.js");
var h = require("./256905.js");
var y = require("./854379.js");
var E = require("./280464.js");
var S = require("./359484.js");
var v = require("./359099.js");
var T = require("./60370.js");
var M = require("./755985.js");
var A = require("./139374.js");
var b = require("./999821.js");
var C = require("./326314.js");
var P = require("./476473.js");
var O = require("./491805.js");
var I = require("./574892.js");
var R = require("./622868.js");
var N = require("./557883.js");
var D = require("./967910.js");
var w = require("./129417.js");
var L = require("./819539.js");
var k = require("./459857.js");
var G = require("./669050.js");
const U = e => {
  const t = e.maybeChild("key-index-list");
  const n = t == null ? null : {
    ts: t.attrTime("ts"),
    signedKeyIndexBytes: t.hasContent() ? t.contentBytes() : null,
    expectedTs: t.hasAttr("expected_ts") ? t.attrTime("expected_ts") : undefined
  };
  const r = e.mapChildrenWithTag("device", e => {
    var t;
    e.attrDeviceJid("jid");
    return {
      id: (t = (0, G.createWid)(e.attrDeviceJid("jid")).device) !== null && t !== undefined ? t : o.DEFAULT_DEVICE_ID,
      keyIndex: e.hasAttr("key-index") ? e.attrInt("key-index") : null
    };
  });
  if (r.length === 0) {
    return null;
  } else {
    return {
      deviceList: r,
      keyIndex: n
    };
  }
};
const x = new l.WapParser("incomingAccountSyncNotification", e => {
  e.assertTag("notification");
  const t = {
    stanzaId: e.attrString("id"),
    ts: e.attrTime("t"),
    from: (0, y.deviceJidToDeviceWid)(e.attrDeviceJid("from"))
  };
  if (e.hasChild("status")) {
    const n = e.child("status");
    const r = n.hasAttr("action") ? n.attrString("action") : undefined;
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.STATUS,
      action: r
    }, t);
  }
  if (e.hasChild("text_status")) {
    const n = e.child("text_status");
    const r = n.hasAttr("action") ? n.attrString("action") : undefined;
    const i = n.hasAttr("text") ? n.attrString("text") : undefined;
    const o = n.hasChild("emoji") ? n.child("emoji") : undefined;
    const s = (o == null ? undefined : o.hasAttr("content")) ? o == null ? undefined : o.attrString("content") : undefined;
    const l = n.hasAttr("ephemeral_duration_sec") ? n.attrInt("ephemeral_duration_sec") : undefined;
    const c = n.hasAttr("last_update_time") ? n.attrString("last_update_time") : undefined;
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.TEXT_STATUS,
      action: r,
      text: i,
      emoji: s,
      ephemeralDurationSeconds: l,
      lastUpdateTime: c
    }, t);
  }
  if (e.hasChild("privacy")) {
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.PRIVACY
    }, t);
  }
  if (e.hasChild("devices")) {
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.DEVICES,
      devices: U(e.child("devices"))
    }, t);
  }
  if (e.hasChild("blocklist")) {
    const n = e.child("blocklist");
    const r = [];
    if ((0, w.usernameDisplayedEnabled)()) {
      n.forEachChildWithTag("item", e => {
        const t = e.maybeAttrString("username");
        const n = (0, y.userJidToUserWid)(e.attrUserJid("jid"));
        if (t != null) {
          r.push({
            userId: n,
            username: t
          });
        }
      });
    }
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.BLOCKLIST,
      usernames: r
    }, t);
  }
  if (e.hasChild("picture")) {
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.PICTURE
    }, t);
  }
  if (e.hasChild("tos")) {
    const n = e.child("tos");
    const r = [];
    n.forEachChildWithTag("notice", e => {
      const t = e.maybeAttrString("state") !== "false";
      const n = e.attrString("id");
      r.push({
        id: n,
        state: t
      });
    });
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.TOS,
      notices: r
    }, t);
  }
  if (e.hasChild("disappearing_mode")) {
    const n = e.child("disappearing_mode");
    let r;
    let i;
    let o;
    if (n.hasAttr("action")) {
      r = n.attrString("action");
    } else {
      i = n.attrInt("duration");
      o = n.attrInt("t");
    }
    return (0, a.default)((0, a.default)({}, t), {}, {
      type: u.ACCOUNT_SYNC_TYPE.DISAPPEARING_MODE,
      action: r,
      disappearingModeDuration: i,
      disappearingModeSettingTimestamp: o
    });
  }
  if (e.hasChild("notice")) {
    const n = e.child("notice");
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.NOTICE,
      noticeId: n.attrString("id"),
      noticeStage: n.maybeAttrString("stage"),
      noticeVersion: n.maybeAttrString("version")
    }, t);
  }
  if (e.hasChild("user")) {
    const n = e.child("user").maybeAttrString("state") === "AI available";
    return (0, a.default)({
      type: u.ACCOUNT_SYNC_TYPE.USER,
      isAiAvailable: n
    }, t);
  }
  throw e.createParseError("notification type not supported");
});
function B() {
  return F.apply(this, arguments);
}
function F() {
  return (F = (0, i.default)(function* () {
    const e = (0, k.assertGetMe)();
    const t = yield (0, m.getAbout)(e);
    if (t.error) {
      __LOG__(3)`getStatus failed for ${e}: failed ${t.error.errorCode} : ${t.error.errorText}`;
      return Promise.reject(t.error.errorText);
    }
    const n = t.status;
    if (n != null && n !== "") {
      P.StatusCollection.assertGet((0, G.toUserWid)(e)).status = n;
    }
  })).apply(this, arguments);
}
function j() {
  return Y.apply(this, arguments);
}
function Y() {
  return (Y = (0, i.default)(function* () {
    const e = (0, k.assertGetMe)();
    const t = yield (0, g.getTextStatus)(e);
    if (t.error) {
      __LOG__(3)`getStatus failed for ${e}: failed ${t.error.errorCode} : ${t.error.errorText}`;
      return Promise.reject(t.error.errorText);
    }
    const {
      id: n,
      text: r,
      emoji: i,
      ephemeralDurationSeconds: a,
      lastUpdateTime: o
    } = t;
    const s = (0, I.parseTextStatusServerResponse)({
      text: r,
      emoji: i != null ? {
        content: i
      } : null,
      ephemeral_duration_sec: a,
      last_update_time: o == null ? undefined : o.toString(),
      jid: n.toJid()
    });
    return (0, N.updateTextStatusForContact)(s.id, s.textStatusString, s.textStatusEmoji, s.textStatusEphemeralDuration, s.textStatusLastUpdateTime);
  })).apply(this, arguments);
}
function K() {
  return W.apply(this, arguments);
}
function W() {
  return (W = (0, i.default)(function* (e) {
    let {
      wid: t,
      devices: n
    } = e;
    const r = (0, k.getMaybeMeLidUser)();
    const i = {
      wid: t,
      devices: n
    };
    if (r == null) {
      return [i];
    }
    const a = (0, k.getMeUser)();
    if (!t.isSameAccount(a)) {
      __LOG__(4, undefined, new Error(), true)`wid-is-not-self`;
      SEND_LOGS("wid-is-not-self");
      return [i];
    }
    const [o, s] = yield C.waSignalStore.bulkGetIdentity([(0, b.createSignalAddress)(a).toString(), (0, b.createSignalAddress)(r).toString()]);
    if (s == null && o != null) {
      yield C.waSignalStore.putIdentity((0, b.createSignalAddress)(r).toString(), o);
    }
    return [i, {
      wid: r,
      devices: n
    }];
  })).apply(this, arguments);
}
function V() {
  return (V = (0, i.default)(function* (e) {
    const t = x.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      return Promise.reject(t.error);
    }
    const n = t.success;
    const r = (0, s.wap)("ack", {
      id: (0, s.CUSTOM_STRING)(n.stanzaId),
      to: (0, _.JID)(n.from),
      class: "notification",
      type: "account_sync"
    });
    switch (n.type) {
      case u.ACCOUNT_SYNC_TYPE.STATUS:
        yield B();
        break;
      case u.ACCOUNT_SYNC_TYPE.TEXT_STATUS:
        if (!(0, O.receiveTextStatusEnabled)()) {
          break;
        }
        if (n.action === "modify") {
          yield j();
        } else {
          const {
            text: e,
            emoji: t,
            ephemeralDurationSeconds: r,
            lastUpdateTime: i
          } = n;
          const a = (0, G.toUserWid)(n.from);
          yield (0, N.updateTextStatusForContact)(a, e, t, r, i != null ? Number(i) : undefined);
        }
        break;
      case u.ACCOUNT_SYNC_TYPE.DEVICES:
        {
          if (!S.OfflineMessageHandler.isResumeFromRestartComplete()) {
            E.OfflinePendingDeviceCache.addOfflinePendingDevice(n.from.toString(), r);
            return "NO_ACK";
          }
          if (S.OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()) {
            yield (0, d.addUserToPendingDeviceSync)([n.from.toString()]);
            return r;
          }
          const e = n.devices;
          if (e) {
            const t = yield K({
              wid: (0, G.toUserWid)(n.from),
              devices: e
            });
            yield (0, c.handleADVDeviceSyncResult)(t);
          } else {
            yield (0, u.getDevices)("notification");
          }
          break;
        }
      case u.ACCOUNT_SYNC_TYPE.PICTURE:
        yield (0, u.getAndUpdateProfilePicture)();
        break;
      case u.ACCOUNT_SYNC_TYPE.PRIVACY:
        f.Cmd.onAccountSyncForPrivacy(yield (0, u.updatePrivacySettings)());
        break;
      case u.ACCOUNT_SYNC_TYPE.BLOCKLIST:
        if ((0, w.usernameDisplayedEnabled)() && n.usernames != null) {
          yield (0, A.setUsernamesJob)(n.usernames);
        }
        (0, u.updateBlocklist)();
        break;
      case u.ACCOUNT_SYNC_TYPE.TOS:
        if (n.notices) {
          (0, u.updateTosState)(n.notices);
        }
        break;
      case u.ACCOUNT_SYNC_TYPE.DISAPPEARING_MODE:
        {
          const {
            action: e,
            from: t
          } = n;
          let r = n.disappearingModeDuration;
          let i = n.disappearingModeSettingTimestamp;
          if (e === "modify") {
            const e = yield (0, h.getDisappearingMode)(t);
            if (e.error == null && e.disappearingModeDuration != null && e.disappearingModeSettingTimestamp != null) {
              r = e.disappearingModeDuration;
              i = e.disappearingModeSettingTimestamp;
            }
          }
          if (r != null && i != null) {
            yield (0, R.updateDisappearingModeForContact)(t, r, i);
          }
          break;
        }
      case u.ACCOUNT_SYNC_TYPE.NOTICE:
        {
          const {
            noticeId: e,
            noticeStage: t,
            noticeVersion: r
          } = n;
          if (e != null && e !== "" && t != null && r != null) {
            yield D.UserDisclosureCollection.updateNoticeStage(e, t === v.NOTICE_STAGES.PDFN_ACCEPTED, r);
          }
          break;
        }
      case u.ACCOUNT_SYNC_TYPE.USER:
        if (n.isAiAvailable === true) {
          __LOG__(2)`Receieved account sync notification for Ai Available`;
          yield (0, L.setBotWaitlistState)(T.HistorySync$BotAIWaitListState.AI_AVAILABLE);
          if (!(0, M.isWorker)() && (0, p.isBotEnabled)()) {
            __LOG__(2)`Trigger waitlist state update from account sync notification`;
            f.Cmd.botWaitlistStateUpdated();
          }
        }
    }
    return r;
  })).apply(this, arguments);
}