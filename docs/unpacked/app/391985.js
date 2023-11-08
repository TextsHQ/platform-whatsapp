var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forwardMessages = function () {
  return A.apply(this, arguments);
};
exports.getForwardedMessageFields = b;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/957557.js"));
var o = require("./632157.js");
var s = require("./402994.js");
var l = require("./738501.js");
var u = r(require("./235613.js"));
var c = require("./660666.js");
var d = require("./163755.js");
var p = require("./194788.js");
var f = require("./644234.js");
var _ = require("./787742.js");
var g = r(require("./565754.js"));
var m = require("./373070.js");
var h = require("./918602.js");
var y = require("./459857.js");
var E = r(require("./887927.js"));
var S = require("./669050.js");
function v(e) {
  return Boolean((0, d.getAsMms)(e) && !e.ctwaContext);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    let i = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    if (v(t)) {
      return void (yield (0, f.forwardMediaMsg)(t, e, r, i));
    }
    const a = b(t);
    const u = (0, y.getMaybeMeUser)();
    let c;
    if (n.isGroup()) {
      c = (0, S.toUserWid)(u);
    }
    const d = new g.default({
      from: u,
      to: n,
      id: yield g.default.newId(),
      participant: c,
      selfDir: "out"
    });
    if (t.ctwaContext) {
      a.body = t.ctwaContext.sourceUrl;
      a.type = m.MSG_TYPE.CHAT;
      a.mediaObject = undefined;
    }
    a.forwardedNewsletterMessageInfo = (0, p.getNewsletterContextForForwardedMsg)(t);
    if ((0, l.isEphemeralSettingOn)(e)) {
      a.ephemeralDuration = (0, l.getEphemeralSetting)(e);
    }
    const E = (0, l.getEphemeralSettingTimestamp)(e);
    if (E != null) {
      a.ephemeralSettingTimestamp = E;
    }
    const T = (0, l.getDisappearingModeInitiator)(e);
    if (T != null) {
      a.disappearingModeInitiator = T;
    }
    Object.assign(a, {
      id: d,
      from: u,
      t: (0, o.unixTime)(),
      to: n,
      ack: s.ACK.CLOCK,
      participant: undefined,
      local: true,
      self: "out",
      isNewMsg: true,
      star: false,
      isForwarded: (0, _.getShouldDisplayAsForwarded)(t),
      forwardedFromWeb: true,
      forwardingScore: t.getForwardingScoreWhenForwarded(),
      multicast: r
    });
    (0, h.addAndSendMsgToChat)(e, a);
    return Promise.resolve();
  })).apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    const i = e.id;
    const a = e.contact;
    if ((0, c.getIsUser)(a) && a.isContactBlocked) {
      throw new u.default("Forwarded to contact is blocked", a);
    }
    const o = [];
    for (const a of t) {
      const t = r || (0, _.getHasOriginatedFromNewsletter)(a);
      try {
        yield T(e, a, i, n, t);
      } catch (e) {
        if (v(a)) {
          o.push(a);
        }
      }
    }
    return o;
  })).apply(this, arguments);
}
function b(e) {
  var t;
  var n;
  var r;
  let i = ["buttons", "caption", "broadcast", "ephemeralDuration", "ephemeralSettingTimestamp", "ephemeralStartTimestamp", "ephemeralOutOfSync", "dynamicReplyButtons", "replyButtons", "isMdHistoryMsg", "bizPrivacyStatus", "kicState", "kicKey", "kicTimestampMs", "kicNotified", "rcat", "latestEditMsgKey", "latestEditSenderTimestampMs", "invokedBotWid", "botMessageSecret", "botEditType", "botFeedbackKind", "botFeedbackText", "botTargetSenderJid", "bizBotType", "botPersonaId", "botRespOrInvocationRevokeBotWid", "botResponseTargetId", "botPluginType", "botPluginReferenceIndex", "botPluginSearchProvider", "botPluginSearchUrl", "botEditTargetId", "lastBotEditBodyLength"];
  if (!(e.isDynamicReplyButtonsMsg === true && e.type === m.MSG_TYPE.CHAT)) {
    i = ["footer", ...i];
  }
  if (((t = e.quotedMsg) === null || t === undefined ? undefined : t.type) !== m.MSG_TYPE.PRODUCT) {
    i = ["quotedMsg", "quotedParticipant", "quotedRemoteJid", "quotedStanzaID", ...i];
  }
  const o = (0, d.getAsUrl)(e);
  if (!(o == null || o.mediaKeyTimestamp == null || (0, E.default)(o.mediaKeyTimestamp))) {
    i = ["mediaKey", "mediaKeyTimestamp", "thumbnailHQ", "thumbnailDirectPath", "thumbnailSha256", "thumbnailEncSha256", "thumbnailHeight", "thumbnailWidth", ...i];
  }
  if (((n = e.id.remote) === null || n === undefined ? undefined : n.isBot()) || ((r = e.mentionedJidList) === null || r === undefined ? undefined : r.find(e => e.isBot())) != null) {
    i = ["messageSecret", ...i];
  }
  return (0, a.default)(e.toJSON(), i);
}