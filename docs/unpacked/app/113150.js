var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySubscriptions = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
const u = new s.WapParser("subscriptionsParser", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("subscriptions");
  const n = [];
  t.forEachChildWithTag("subscription", e => {
    const t = e.attrString("status");
    const r = e.maybeAttrInt("subscription_end_time");
    const i = e.attrString("id");
    n.push({
      id: i,
      status: t,
      expirationDate: r
    });
  });
  return n;
});
function c() {
  return (c = (0, i.default)(function* () {
    const e = (0, o.wap)("iq", {
      xmlns: "fb:thrift_iq",
      id: (0, o.generateId)(),
      type: "get",
      smax_id: "90",
      to: o.S_WHATSAPP_NET
    });
    const t = yield (0, a.deprecatedSendIq)(e, u);
    if (t.success) {
      return t.result;
    }
    throw new l.ServerStatusCodeError(t.errorCode, t.errorText);
  })).apply(this, arguments);
}