Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBaseReportMixin = function (e, t) {
  const n = function (e) {
    const {
      spamListSpamFlow: t
    } = e;
    return (0, r.smax)("iq", {
      to: a.S_WHATSAPP_NET,
      xmlns: "spam"
    }, (0, r.smax)("spam_list", {
      spam_flow: (0, a.CUSTOM_STRING)(t)
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");