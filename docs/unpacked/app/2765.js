var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./632157.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./287461.js");
var c = require("./518567.js");
var d = require("./887107.js");
var p = require("./698867.js");
var f = require("./293056.js");
var _ = require("./854379.js");
var g = require("./700846.js");
var m = r(require("./565754.js"));
var h = require("./223556.js");
var y = require("./459857.js");
var E = require("./410615.js");
const S = {
  contacts: "contacts",
  "w:growth": "w:growth"
};
const v = new l.WapParser("incomingGrowthNotificationParser", e => {
  e.assertTag("notification");
  const t = {
    stanzaId: e.attrString("id"),
    from: e.attrWapJid("from"),
    type: e.attrEnum("type", S)
  };
  if (e.hasChild("invite")) {
    const n = e.child("invite");
    if (n.hasChild("receiver")) {
      const e = n.child("receiver");
      return (0, a.default)({
        receiverId: e.hasAttr("user") ? e.attrUserJid("user") : null,
        reason: e.hasAttr("reason") ? e.attrString("reason") : ""
      }, t);
    }
  }
  return t;
});
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = v.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const n = t.success;
    const r = n.type;
    if ((0, u.getABPropConfigValue)("chat_upsell_for_1on1_invites") && r === "contacts") {
      if (!("receiverId" in n) || n.receiverId == null) {
        return void __LOG__(4, undefined, new Error())`Invalid receiver id`;
      }
      const e = (0, _.userJidToUserWid)(n.receiverId);
      const t = "reason" in n && n.reason === "clicked_invite_link";
      yield M(e, t);
    }
    return (0, s.wap)("ack", {
      id: (0, s.CUSTOM_STRING)(n.stanzaId),
      class: "notification",
      type: r,
      to: n.from
    });
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    if ((yield (0, c.findLocal)(e.toString())) == null) {
      yield (0, f.createChat)(e, "createChatOnInviteAccept");
      const n = yield (0, c.findLocal)(e.toString());
      if (n == null) {
        return void __LOG__(4, undefined, new Error())`Unable to create new chat thread with receiver - {receiverId}`;
      }
      const r = n.id;
      const i = yield b(r, t);
      const a = yield (0, p.getChatThreadID)(n.id.toJid());
      new h.NotificationDeliveryWamEvent({
        threadId: a,
        uiNotificationType: E.NOTIFICATION_TYPE_ENUM.INVITE_JOINED
      }).commit();
      yield (0, g.handleSingleMsg)(r, i);
      new d.ChatMessageCountsWamEvent({
        isInviteCreatedThread: true
      }).commit();
    }
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t) {
    return {
      id: new m.default({
        remote: e,
        fromMe: false,
        id: yield m.default.newId()
      }),
      from: e,
      subtype: "sender_invite",
      to: (0, y.getMeUser)(),
      type: "notification_template",
      t: (0, o.unixTime)(),
      templateParams: [t.toString()]
    };
  })).apply(this, arguments);
}