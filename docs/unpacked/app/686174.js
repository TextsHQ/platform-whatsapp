Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeReportPayNodeMixin = function (e, t) {
  const n = function (e) {
    const {
      payType: t,
      payId: n,
      paySender: a,
      payReceiver: s
    } = e;
    return (0, i.smax)("pay", {
      type: (0, o.CUSTOM_STRING)(t),
      id: (0, r.OPTIONAL)(o.CUSTOM_STRING, n),
      sender: (0, r.OPTIONAL)(o.USER_JID, a),
      receiver: (0, r.OPTIONAL)(o.USER_JID, s)
    });
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");