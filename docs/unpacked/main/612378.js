var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const [n, a, b, M, S, T, w] = (0, C.useMsgValues)(t.id, [u.getRtl, u.getDir, p.getIsSentByMe, p.getIsGroupMsg, p.getIsPSA, u.getSenderObj, p.getPaymentNoteMsg]);
  let A;
  const P = w == null ? undefined : w.body;
  if (P) {
    const e = (0, i.Conversation)({
      mentions: t.mentionMap(),
      groupMentions: t.groupMentionMap(),
      links: (0, m.getLinksFromMsg)(t.unsafe()),
      phoneNumbers: (0, g.getPhoneNumbersFromMsg)(t.unsafe()),
      trusted: (0, h.isTrusted)(t.unsafe()),
      fromMe: t.id.fromMe
    });
    A = y.default.createElement(d.default, {
      msg: t.unsafe()
    }, y.default.createElement(l.EmojiText, {
      text: P,
      selectable: true,
      formatters: e,
      dirMismatch: n !== s.default.isRTL(),
      direction: a
    }));
  }
  let O;
  let k;
  if (e.quotedMsg) {
    const n = (0, o.classnamesConvertMeToStylexPlease)({
      [v.default.hasAuthor]: e.displayAuthor,
      [v.default.forwarded]: (0, E.showForwarded)(t),
      [v.default.quote]: true
    });
    O = y.default.createElement("div", {
      className: n
    }, e.quotedMsg);
  }
  let D = _.fbt._("Payment message • Amount unavailable", null, {
    hk: "3SAp3h"
  });
  if (e.placeholderText) {
    k = r.CiphertextIcon;
    D = e.placeholderText;
  }
  const I = (0, o.classnamesConvertMeToStylexPlease)({
    [v.default.hasText]: A,
    [v.default.noText]: !A
  });
  return y.default.createElement(f.default, {
    msg: t,
    displayAuthor: e.displayAuthor
  }, O, e.paymentInfo, y.default.createElement("div", {
    className: I
  }, y.default.createElement(c.default, {
    hasCaption: !!A,
    Icon: k,
    msg: t.unsafe()
  }, D)), A);
};
var r = require("./784121.js");
var o = require("../app/396574.js");
var l = require("../app/305521.js");
var i = require("../app/675886.js");
var u = require("../app/163755.js");
var s = a(require("../app/932325.js"));
var c = a(require("./530404.js"));
var d = a(require("./19805.js"));
var f = a(require("./398685.js"));
var p = require("../app/787742.js");
var m = require("../app/44118.js");
var h = require("../app/435711.js");
var g = require("./527530.js");
var E = require("./192071.js");
var v = a(require("./477043.js"));
var _ = require("../vendor/548360.js");
var y = a(require("../vendor/667294.js"));
var C = require("./871210.js");