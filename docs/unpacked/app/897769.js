var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryOrder = function () {
  return d.apply(this, arguments);
};
exports.queryOrderResponse = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./72696.js");
const c = new s.WapParser("queryOrderResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("order");
  const n = t.hasAttr("creation_ts") ? t.attrTime("creation_ts") : null;
  const r = t.maybeChild("price");
  const i = r == null ? undefined : r.maybeChild("subtotal");
  const a = i ? parseInt(i.contentString(), 10) : null;
  const o = r == null ? undefined : r.maybeChild("currency");
  const s = o ? o.contentString() : null;
  const l = r == null ? undefined : r.maybeChild("tax");
  const u = l ? parseInt(l.contentString(), 10) : null;
  const c = r == null ? undefined : r.maybeChild("total");
  const d = c ? parseInt(c.contentString(), 10) : null;
  const p = [];
  t.forEachChildWithTag("product", e => {
    const t = e.child("id").contentString();
    const n = e.child("name").contentString();
    const r = e.maybeChild("price");
    const i = r ? parseInt(r.contentString(), 10) : null;
    const a = e.maybeChild("quantity");
    const o = a ? parseInt(a.contentString(), 10) : null;
    const s = e.maybeChild("currency");
    const l = s ? s.contentString() : null;
    let u = null;
    let c = null;
    const d = e.maybeChild("image");
    if (d != null) {
      const e = d.maybeChild("url");
      c = e && e.hasContent() ? e.contentString() : null;
      const t = d.maybeChild("id");
      u = t && t.hasContent() ? t.contentString() : null;
    }
    p.push({
      id: t,
      price: i,
      thumbnailId: u,
      thumbnailUrl: c,
      currency: l,
      name: n,
      quantity: o
    });
  });
  return {
    currency: s,
    createdAt: n,
    products: p,
    subtotal: a,
    total: d,
    tax: u
  };
});
function d() {
  return (d = (0, i.default)(function* (e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    if ((0, u.commerceFeaturesDisabledBySanctions)()) {
      return Promise.reject(new l.E451());
    }
    const s = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      smax_id: "5",
      xmlns: "fb:thrift_iq",
      id: (0, o.generateId)(),
      type: "get"
    }, (0, o.wap)("order", {
      op: (0, o.CUSTOM_STRING)("get"),
      id: (0, o.CUSTOM_STRING)(e)
    }, (0, o.wap)("image_dimensions", null, (0, o.wap)("width", null, t.toString()), (0, o.wap)("height", null, n.toString())), (0, o.wap)("token", null, r), i ? (0, o.wap)("direct_connection_encrypted_info", null, i) : null));
    const d = yield (0, a.deprecatedSendIq)(s, c);
    if (d.success) {
      return d.result;
    }
    if (d.errorCode === 451) {
      throw new l.E451();
    }
    throw new l.ServerStatusCodeError(d.errorCode);
  })).apply(this, arguments);
}
exports.queryOrderResponse = c;