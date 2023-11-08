var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./2011.js");
var l = require("./662193.js");
var u = require("./999916.js");
function c(e) {
  switch (e.name) {
    case "NewsletterReportResponseError":
      {
        const t = parseInt(e.value.errorIQErrorInternalServerErrorOrBadRequestMixinGroup.value, 10);
        const n = e.value.errorIQErrorInternalServerErrorOrBadRequestMixinGroup.name;
        __LOG__(3)`parseNewsletterReportResponse: server response with ${t}, ${n}`;
        return {
          errorCode: t,
          errorText: n
        };
      }
    default:
      e.name;
      return e.value;
  }
}
function d() {
  return (d = (0, a.default)(function* (e, t, n) {
    let r = [];
    r = t != null ? [t] : (0, l.loadMsgsForSpamReport)(e, l.SPAM_REPORT_MESSAGE_COUNT, null);
    const a = [];
    let d;
    r.forEach(t => {
      const n = (0, u.getMessageMixinArgs)(t);
      if (n != null) {
        d = (0, i.default)({
          messageFrom: (0, o.toNewsletterJid)(e.id.toJid())
        }, n);
      }
      a.push(d);
    });
    const p = {
      spamListJid: (0, o.toNewsletterJid)(e.id.toJid()),
      spamListSpamFlow: n,
      spamListSubject: e.name,
      messageArgs: a
    };
    return c(yield (0, s.sendNewsletterReportRPC)(p));
  })).apply(this, arguments);
}