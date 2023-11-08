Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageWithPaymentReportDeprecatedMixin = function (e, t) {
  const n = function (e) {
    const {
      contentTypePayOrMessageWithTypeMixinGroupArgs: t,
      reportPayNodeMixinArgs: n
    } = e;
    return (0, a.mergeContentTypePayOrMessageWithTypeMixinGroup)((0, r.smax)("message", null, (0, o.mergeReportPayNodeMixin)((0, r.smax)("pay", null), n)), t);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./388656.js");
var o = require("./686174.js");