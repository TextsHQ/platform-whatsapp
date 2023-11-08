var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n, a, p, E, v, _, y, C, b, M] = (0, h.useMsgValues)(e.msg.id, [i.getRtl, i.getDir, d.getIsSentByMe, d.getPaymentInviteServiceType, d.getIsGroupMsg, d.getIsPSA, i.getSenderObj, d.getPaymentNoteMsg, d.getId, d.getTo, d.getFrom]);
  const S = (0, r.classnamesConvertMeToStylexPlease)({
    [f.default.bubbleOut]: a,
    [f.default.bubbleIn]: !a
  });
  const T = m.default.createElement("div", {
    className: f.default.caption
  }, m.default.createElement(c.default, {
    msg: e.msg.unsafe()
  }, m.default.createElement(o.EmojiText, {
    text: (0, l.formatPaymentInviteMessageText)(C),
    selectable: true,
    dirMismatch: t !== u.default.isRTL(),
    direction: n
  })));
  return m.default.createElement(s.default, {
    displayAuthor: e.displayAuthor,
    displayType: e.displayType,
    hasCaption: !!T,
    msg: e.msg
  }, m.default.createElement("div", {
    className: S
  }, m.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)(f.default.inviteBackground, "bg-payments")
  }, m.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)(f.default.inviteImage, g(p))
  })), m.default.createElement("div", {
    className: f.default.body
  }, m.default.createElement("div", {
    className: f.default.bodyText
  }, T))));
};
var r = require("../app/396574.js");
var o = require("../app/305521.js");
var l = require("../app/498362.js");
var i = require("../app/163755.js");
var u = a(require("../app/932325.js"));
var s = a(require("./342246.js"));
var c = a(require("./19805.js"));
var d = require("../app/787742.js");
var f = a(require("./76429.js"));
var p = require("../app/533494.js");
var m = a(require("../vendor/667294.js"));
var h = require("./871210.js");
const g = e => {
  if (e == null) {
    return "";
  }
  switch (e) {
    case p.Message$PaymentInviteMessage$ServiceType.UPI:
      return "payments-invite-upi";
    default:
      return "";
  }
};