var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    spacer: n,
    trusted: a,
    testId: g
  } = e;
  const [E, v, _, y, C, b, M, S] = (0, h.useMsgValues)(e.msg.id, [d.getT, d.getId, u.getDir, u.getRtl, u.getText, d.getInitialPageSize, d.getFooter, d.getCtwaContext]);
  if (!C) {
    return null;
  }
  const T = !(!_ || y === s.default.isRTL());
  return m.default.createElement(m.default.Fragment, null, !S && m.default.createElement(r.SuspiciousLabel, {
    msg: t
  }), m.default.createElement(c.default, {
    msg: t,
    "data-id": v,
    spacer: n
  }, m.default.createElement(l.ExpandableText, {
    text: C,
    textLimit: b
  }, e => {
    let {
      textLimit: n
    } = e;
    const r = (0, i.Conversation)({
      mentions: t.mentionMap(),
      groupMentions: t.groupMentionMap(),
      links: (0, f.getLinksFromMsg)(t, n),
      phoneNumbers: (0, p.getPhoneNumbersFromMsg)(t),
      selectable: true,
      trusted: a === true,
      fromMe: v.fromMe,
      fromChatWid: v.remote
    });
    return m.default.createElement(o.EmojiText, {
      testid: g,
      direction: _,
      dirMismatch: T,
      formatters: r,
      inferLinesDirection: true,
      selectable: true,
      text: C,
      textLimit: n
    });
  })));
};
var r = require("./751349.js");
var o = require("../app/305521.js");
var l = require("./999649.js");
var i = require("../app/675886.js");
var u = require("../app/163755.js");
var s = a(require("../app/932325.js"));
var c = a(require("./19805.js"));
var d = require("../app/787742.js");
var f = require("../app/44118.js");
var p = require("./527530.js");
var m = a(require("../vendor/667294.js"));
var h = require("./871210.js");