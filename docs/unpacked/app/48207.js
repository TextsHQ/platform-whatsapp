Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBizReportMixin = function (e, t) {
  const n = function (e) {
    const {
      bizApiReportKnownAccount: t,
      bizApiReportMessageReport: n
    } = e;
    return (0, r.smax)("spam_list", null, (0, r.smax)("biz_api_report", {
      known_account: (0, a.CUSTOM_STRING)(t),
      message_report: (0, a.CUSTOM_STRING)(n)
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");