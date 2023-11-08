var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const [n, a, v, _, y, C, b] = (0, E.useMsgValues)(t.id, [l.getRtl, l.getDir, d.getIsGroupMsg, d.getIsPSA, d.getIsSentByMe, l.getSenderObj, d.getPaymentNoteMsg]);
  const M = b == null ? undefined : b.body;
  let S;
  let T = null;
  if (M) {
    const e = (0, o.Conversation)({
      mentions: t.mentionMap(),
      groupMentions: t.groupMentionMap(),
      phoneNumbers: (0, m.getPhoneNumbersFromMsg)(t.unsafe()),
      links: (0, f.getLinksFromMsg)(t.unsafe()),
      trusted: (0, p.isTrusted)(t.unsafe()),
      fromMe: t.id.fromMe
    });
    T = g.default.createElement("div", {
      className: h.default.caption
    }, g.default.createElement(c.default, {
      msg: t.unsafe()
    }, g.default.createElement(r.EmojiText, {
      text: M,
      selectable: true,
      formatters: e,
      dirMismatch: n !== i.default.isRTL(),
      direction: a
    })));
  } else {
    S = g.default.createElement("div", {
      className: h.default.meta
    }, g.default.createElement(s.Meta, {
      msg: t
    }));
  }
  return g.default.createElement(u.default, {
    displayAuthor: e.displayAuthor,
    displayType: e.displayType,
    hasCaption: !!T,
    msg: t,
    quotedMsg: e.quotedMsg,
    hideMeta: !M
  }, e.paymentInfo, S, T);
};
var r = require("../app/305521.js");
var o = require("../app/675886.js");
var l = require("../app/163755.js");
var i = a(require("../app/932325.js"));
var u = a(require("./342246.js"));
var s = require("./789955.js");
var c = a(require("./19805.js"));
var d = require("../app/787742.js");
var f = require("../app/44118.js");
var p = require("../app/435711.js");
var m = require("./527530.js");
var h = a(require("./831714.js"));
var g = a(require("../vendor/667294.js"));
var E = require("./871210.js");