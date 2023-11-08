Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageWithPaymentReportOrPaymentReportDeprecatedOrTypeOrPollMixinGroup = function (e, t) {
  if (t.messageWithPaymentReport) {
    return (0, a.mergeMessageWithPaymentReportMixin)(e, t.messageWithPaymentReport);
  }
  if (t.messageWithPaymentReportDeprecated) {
    return (0, i.mergeMessageWithPaymentReportDeprecatedMixin)(e, t.messageWithPaymentReportDeprecated);
  }
  if (t.messageWithType) {
    return (0, s.mergeMessageWithTypeMixin)(e, t.messageWithType);
  }
  if (t.messageWithPoll) {
    return (0, o.mergeMessageWithPollMixin)(e, t.messageWithPoll);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./646226.js");
var a = require("./363175.js");
var o = require("./180743.js");
var s = require("./763492.js");