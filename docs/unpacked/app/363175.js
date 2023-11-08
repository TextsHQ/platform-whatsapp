Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageWithPaymentReportMixin = function (e, t) {
  const n = function (e) {
    const {
      reportPayNodeMixinArgs: t
    } = e;
    return (0, a.mergeContentTypePayMixin)((0, r.smax)("message", null, (0, o.mergeReportPayNodeMixin)((0, r.smax)("pay", null), t)));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./981358.js");
var o = require("./686174.js");