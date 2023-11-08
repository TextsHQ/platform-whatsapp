Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetLinkedAccountsRequest = function (e) {
  return (0, r.mergeHackBaseIQGetRequestMixin)((0, a.smax)("iq", {
    xmlns: "fb:thrift_iq",
    smax_id: (0, o.INT)(42)
  }, (0, a.smax)("linked_accounts", null)), e);
};
var a = require("../app/758616.js");
var r = require("./777263.js");
var o = require("../app/716358.js");