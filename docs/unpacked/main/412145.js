var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetReportedMessagesResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, u.flattenedChildWithTag)(e, "reports");
  if (!a.success) {
    return a;
  }
  const i = (0, l.parseIQResultResponseMixin)(e, t);
  if (!i.success) {
    return i;
  }
  const s = (0, u.mapChildrenWithTag)(a.value, "report", 0, 10000, c);
  if (!s.success) {
    return s;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, i.value), {}, {
    reportsReport: s.value
  }));
};
exports.parseGetReportedMessagesResponseSuccessReportsReport = c;
exports.parseGetReportedMessagesResponseSuccessReportsReportReporter = s;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("../app/568113.js");
var u = require("../app/686310.js");
function s(e) {
  const t = (0, u.assertTag)(e, "reporter");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const a = (0, u.attrIntRange)(e, "timestamp", 0, undefined);
  if (a.success) {
    return (0, o.makeResult)({
      jid: n.value,
      timestamp: a.value
    });
  } else {
    return a;
  }
}
function c(e) {
  const t = (0, u.assertTag)(e, "report");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrStanzaId)(e, "message_id");
  if (!n.success) {
    return n;
  }
  const a = (0, u.mapChildrenWithTag)(e, "reporter", 1, 19999, s);
  if (a.success) {
    return (0, o.makeResult)({
      messageId: n.value,
      reporter: a.value
    });
  } else {
    return a;
  }
}