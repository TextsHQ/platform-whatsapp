Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeReportMessagesRequest = function (e) {
  const {
    reportMessageId: t,
    reportAuthorJid: n
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("reports", null, (0, r.smax)("report", {
    message_id: (0, l.STANZA_ID)(t),
    author_jid: (0, a.OPTIONAL)(l.USER_JID, n)
  }))), e);
};
var a = require("../app/93864.js");
var r = require("../app/758616.js");
var o = require("../app/667149.js");
var l = require("../app/716358.js");