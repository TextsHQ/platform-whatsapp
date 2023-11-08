var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrderMD = function () {
  return p.apply(this, arguments);
};
exports.createOrderResponse = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./355813.js");
const c = new s.WapParser("createOrderResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("order");
  const n = t.attrString("id");
  const r = t.attrString("token");
  const i = t.maybeChild("price");
  const a = {};
  const o = i == null ? undefined : i.maybeChild("subtotal");
  if (o) {
    a.subtotal = o.contentString();
  }
  const s = i == null ? undefined : i.maybeChild("total");
  if (s) {
    a.total = s.contentString();
  }
  const l = i == null ? undefined : i.maybeChild("currency");
  if (l) {
    a.currency = l.contentString();
  }
  const u = i == null ? undefined : i.maybeChild("price_status");
  if (u) {
    a.price_status = u.contentString();
  }
  return {
    id: n,
    token: r,
    price: a
  };
});
function d(e) {
  const t = e.priceAmount1000 != null ? (0, o.wap)("price", null, e.priceAmount1000.toString()) : undefined;
  const n = e.currency ? (0, o.wap)("currency", null, e.currency) : undefined;
  return (0, o.wap)("product", null, (0, o.wap)("id", null, e.id), (0, o.wap)("name", null, e.name), t, n, (0, o.wap)("quantity", null, e.quantity.toString()));
}
function p() {
  return (p = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const r = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      smax_id: "10",
      xmlns: "fb:thrift_iq",
      id: (0, o.generateId)(),
      type: "set"
    }, (0, o.wap)("order", {
      op: (0, o.CUSTOM_STRING)("create"),
      biz_jid: (0, u.USER_JID)(e)
    }, t.map(e => d(e)).concat(n ? (0, o.wap)("direct_connection_encrypted_info", null, n) : [])));
    const i = yield (0, a.deprecatedSendIq)(r, c);
    if (i.success) {
      return i.result;
    }
    if (i.errorCode === 451) {
      throw new l.E451();
    }
    throw new l.ServerStatusCodeError(i.errorCode);
  })).apply(this, arguments);
}
exports.createOrderResponse = c;