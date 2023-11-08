Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBizOptOutBizOptOut = l;
exports.mergeBizOptOutMixin = function (e, t) {
  const n = function (e) {
    const {
      bizOptOutArgs: t
    } = e;
    return (0, a.smax)("spam_list", null, (0, i.OPTIONAL_CHILD)(l, t));
  }(t);
  return (0, o.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./770006.js");
var s = require("./716358.js");
function l(e) {
  const {
    bizOptOutReason: t,
    bizOptOutBusinessDiscoveryEntryPoint: n,
    bizOptOutBusinessDiscoveryTimestamp: i,
    bizOptOutFirstMessage: o,
    bizOptOutBusinessDiscoveryId: l
  } = e;
  return (0, a.smax)("biz_opt_out", {
    reason: (0, r.OPTIONAL)(s.CUSTOM_STRING, t),
    business_discovery_entry_point: (0, r.OPTIONAL)(s.CUSTOM_STRING, n),
    business_discovery_timestamp: (0, r.OPTIONAL)(s.INT, i),
    first_message: (0, r.OPTIONAL)(s.CUSTOM_STRING, o),
    business_discovery_id: (0, r.OPTIONAL)(s.CUSTOM_STRING, l)
  });
}