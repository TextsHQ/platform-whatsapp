var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNoviTransaction = c;
exports.parseTransactionNode = f;
exports.paymentNotificationParser = exports.paymentInviteNotificationParser = undefined;
var i = require("./347387.js");
var a = require("./855765.js");
var o = require("./854379.js");
var s = r(require("./565754.js"));
var l = require("./186679.js");
var u = require("./459857.js");
function c(e) {
  return !(!e || !e.hasAttr("service") || e.attrString("service").toUpperCase() !== "NOVI");
}
const d = new i.WapParser("paymentNotificationParser", e => {
  if (e.hasChild("transaction")) {
    return f(e.child("transaction"));
  }
  __LOG__(2)`No transaction node in the payment notification`;
  return null;
});
exports.paymentNotificationParser = d;
const p = new i.WapParser("paymentInviteNotificationParser", e => {
  if (e.hasChild("invite")) {
    const t = e.child("invite");
    return {
      type: t.maybeAttrString("type"),
      service: t.maybeAttrString("service"),
      inviteUsed: t.hasAttr("invite-used") ? t.attrString("invite-used") === "1" : null,
      from: (0, o.chatJidToChatWid)(e.attrChatJid("from")),
      timestamp: e.attrTime("t")
    };
  }
  __LOG__(2)`No invite node in the payment invite notification`;
  return null;
});
function f(e) {
  if (c(e)) {
    __LOG__(2)`Payment notification from Novi not supported`;
    return null;
  }
  let t;
  let n;
  const r = (0, u.getMeUser)();
  const i = (0, o.jidWithTypeToWid)(e.attrJidWithType("sender"));
  const d = (0, o.jidWithTypeToWid)(e.attrJidWithType("receiver"));
  const p = r.equals(i);
  if (e.hasAttr("group")) {
    t = (0, o.jidWithTypeToWid)(e.attrJidWithType("group"));
    n = (0, o.jidWithTypeToWid)(e.attrJidWithType("sender"));
  } else {
    t = p ? d : i;
  }
  const f = new s.default({
    id: e.attrString("message-id"),
    fromMe: p,
    remote: t,
    participant: n
  });
  const _ = (0, l.getPaymentTransactionType)(e.attrString("transaction-type"), f.fromMe);
  const {
    amount1000: g,
    currency: m
  } = (0, a.getAmount1000AndCurrency)(e);
  return {
    receiver: d,
    currency: m,
    amount1000: g,
    status: (0, l.getNotificationTransactionStatus)(_, e.attrString("status")),
    ts: e.attrInt("ts"),
    type: _,
    msgKey: f
  };
}
exports.paymentInviteNotificationParser = p;