var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAMsgNotification = undefined;
exports.getNotificationParts = T;
exports.shouldReplaceMsgNotificationManually = M;
r(require("../vendor/348926.js"));
var i = r(require("../vendor/81109.js"));
var a = require("./287461.js");
var o = require("./583759.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
}(require("./374660.js"));
require("./698867.js");
var l = require("./235630.js");
var u = require("./163755.js");
var c = require("./266162.js");
var d = require("./787187.js");
var p = require("./787742.js");
var f = require("./373070.js");
var _ = require("./971804.js");
var g = require("./14346.js");
require("./433727.js");
var m = require("./545413.js");
var h = require("./368170.js");
var y = r(require("./124928.js"));
var E = require("../vendor/548360.js");
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
class v extends o.WABaseNotification {
  constructor(e) {
    let {
      msg: t
    } = e;
    super();
    this.msg = t;
  }
  shouldPlaySound() {
    return super.shouldPlaySound() && !(0, p.getIsEdited)(this.msg);
  }
  shouldMute() {
    const e = (0, u.getChat)(this.msg);
    return !!_.MuteCollection.globalMute().isMuted || !!((0, a.getABPropConfigValue)("web_abprop_mute_notifications_on_app_focus") ? (0, m.appIsActive)() : (0, m.chatIsActive)(e)) || !!(0, m.isMutedAndNotMentioned)(this.msg) || !!(0, m.isArchivedAndNotMentioned)(this.msg) || !!(0, m.isCommunityHomeAdd)(this.msg) || !!(0, p.getIsFutureproof)(this.msg) || !!(0, m.isOfflineResumeInProgress)() || this.msg.type === f.MSG_TYPE.CALL_LOG && this.msg.subtype === "silence";
  }
  shouldSquelch() {
    return (!g.WANotificationController.notificationExists(this.buildKey()) || !(0, p.getIsEdited)(this.msg)) && (0, m.shouldSquelch)((0, u.getChat)(this.msg));
  }
  buildKey() {
    var e;
    var t;
    return `msg:${(e = (t = this.msg.latestEditMsgKey) === null || t === undefined ? undefined : t.toString()) !== null && e !== undefined ? e : this.msg.id.toString()}`;
  }
  matchesChat(e) {
    var t;
    return y.default.equals((t = (0, u.getMaybeChat)(this.msg)) === null || t === undefined ? undefined : t.id, e);
  }
  getChatKind() {
    return (0, u.getChat)(this.msg).kind;
  }
  getDefaultIcon() {
    if ((0, p.getIsProductListMessage)(this.msg)) {
      return (0, d.convertToDataURI)((0, p.getProductListHeaderImage)(this.msg));
    } else {
      return (0, m.getNotificationIcon)((0, u.getChat)(this.msg));
    }
  }
  getBannerOptions() {
    const e = this.msg;
    const t = (0, c.getNotificationBody)((0, i.default)((0, i.default)({}, T(e)), {}, {
      msgDir: (0, u.getDir)(e)
    }));
    const n = (0, u.getChat)(this.msg);
    return {
      wid: n.id,
      msgId: this.msg.id.toString(),
      tag: M() ? this.msg.id.toString() : n.id.toString(),
      title: (0, m.getNotificationTitle)(n),
      body: t,
      canReply: n.canSend && !s.isSuspendedGroup(n),
      canBlock: n.canBlockFromNotification(),
      onClick: () => {},
      renotify: !(0, p.getIsEdited)(this.msg)
    };
  }
}
function T(e) {
  let t = null;
  const n = (0, u.getChat)(e);
  const r = (0, l.elevatedPushNamesM2Enabled)(n);
  let i = (0, p.getIsGroupMsg)(e) || (0, p.getIsMetaBotInvokeResponse)(e) ? e.displayName({
    withPushName: r,
    withPushNameOnly: r,
    newPushNameFormatting: r,
    showVerifiedName: r
  }) : undefined;
  if (e.type !== f.MSG_TYPE.CHAT || e.shouldShowNotificationPreview()) {
    t = e.type === f.MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "sender_invite" ? e.templateParams && e.templateParams[0] === "true" ? E.fbt._("Say hello on WhatsApp!", null, {
      hk: "2GBlbZ"
    }) : E.fbt._("Say hello!", null, {
      hk: "3dUxLI"
    }) : (0, c.getNotificationMessageBody)(e);
  } else if ((0, p.getIsGroupMsg)(e)) {
    if (i != null) {
      t = E.fbt._("Message from {name}", [E.fbt._param("name", i)], {
        hk: "30vkIQ"
      });
      i = undefined;
    } else {
      t = E.fbt._("New Message", null, {
        hk: "1Eismf"
      });
    }
  } else {
    t = E.fbt._({
      "*": "{newMessageCount} New Messages",
      _1: "1 New Message"
    }, [E.fbt._plural((0, u.getChat)(e).unreadCount, "newMessageCount")], {
      hk: "2a9Bds"
    });
  }
  return {
    body: t.toString(),
    author: i
  };
}
function M() {
  return h.UA.isBlink && h.UA.os === h.OS_TYPE.MAC && !h.UA.isElectron;
}
exports.WAMsgNotification = v;