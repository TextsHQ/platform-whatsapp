var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReportedMsgs = function () {
  return d.apply(this, arguments);
};
exports.sendForAdminReview = function () {
  return c.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./794568.js");
var l = require("./756038.js");
var i = require("../app/757585.js");
var u = require("../app/984330.js");
var s = require("../app/574819.js");
function c() {
  return (c = (0, r.default)(function* (e, t) {
    const n = {
      iqTo: (0, s.widToGroupJid)(t),
      reportMessageId: (0, i.toStanzaId)(e.id.id),
      reportAuthorJid: (0, s.widToUserJid)(e.author)
    };
    const a = yield (0, l.sendReportMessagesRPC)(n);
    switch (a.name) {
      case "ReportMessagesResponseSuccess":
        return Promise.resolve();
      case "ReportMessagesResponseServerError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorServerErrors.value;
          __LOG__(3)`Error while sending a message for admin review`;
          return Promise.reject(new u.ServerStatusCodeError(Number(e), t));
        }
      case "ReportMessagesResponseClientError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorReportMessagesClientErrors.value;
          __LOG__(3)`Error while sending a message for admin review`;
          return Promise.reject(new u.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}
function d() {
  return (d = (0, r.default)(function* (e) {
    const t = {
      iqTo: (0, s.widToGroupJid)(e)
    };
    const n = yield (0, o.sendGetReportedMessagesRPC)(t);
    switch (n.name) {
      case "GetReportedMessagesResponseSuccess":
        return Promise.resolve(n.value);
      case "GetReportedMessagesResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorGetReportedMessagesClientErrors.value;
          __LOG__(3)`Error while getting reported message to admin for group`;
          return Promise.reject(new u.ServerStatusCodeError(Number(e), t));
        }
      case "GetReportedMessagesResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(3)`Error while getting reported message to admin for group`;
          return Promise.reject(new u.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}