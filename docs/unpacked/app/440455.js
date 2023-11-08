Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUpdateBlockListRequest = function (e) {
  const {
    bizOptOutArgs: t,
    updateBlockListReportBlockEntryPointMixinArgs: n,
    itemAction: c,
    itemJid: d,
    itemDhash: p
  } = e;
  return (0, o.optionalMerge)(s.mergeUpdateBlockListReportBlockEntryPointMixin, (0, a.smax)("iq", {
    to: l.S_WHATSAPP_NET,
    xmlns: "blocklist",
    type: "set",
    id: (0, l.generateId)()
  }, (0, a.smax)("item", {
    action: (0, l.CUSTOM_STRING)(c),
    jid: (0, l.USER_JID)(d),
    dhash: (0, r.OPTIONAL)(l.CUSTOM_STRING, p)
  }, (0, i.OPTIONAL_CHILD)(u, t))), n);
};
exports.makeUpdateBlockListRequestItemBizOptOut = u;
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./770006.js");
var s = require("./759061.js");
var l = require("./716358.js");
function u(e) {
  const {
    bizOptOutReason: t,
    bizOptOutReasonDescription: n,
    bizOptOutEntryPoint: i,
    bizOptOutFirstMessage: o,
    bizOptOutBusinessDiscoveryEntryPoint: s,
    bizOptOutBusinessDiscoveryTimestamp: u,
    bizOptOutBusinessDiscoveryId: c
  } = e;
  return (0, a.smax)("biz_opt_out", {
    reason: (0, r.OPTIONAL)(l.CUSTOM_STRING, t),
    reason_description: (0, r.OPTIONAL)(l.CUSTOM_STRING, n),
    entry_point: (0, r.OPTIONAL)(l.CUSTOM_STRING, i),
    first_message: (0, r.OPTIONAL)(l.CUSTOM_STRING, o),
    business_discovery_entry_point: (0, r.OPTIONAL)(l.CUSTOM_STRING, s),
    business_discovery_timestamp: (0, r.OPTIONAL)(l.INT, u),
    business_discovery_id: (0, r.OPTIONAL)(l.CUSTOM_STRING, c)
  });
}