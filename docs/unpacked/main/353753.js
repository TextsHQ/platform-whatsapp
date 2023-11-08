var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshCartMD = function () {
  return m.apply(this, arguments);
};
exports.refreshCartResponse = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/250281.js");
var l = require("../app/716358.js");
var i = require("../app/347387.js");
var u = require("../app/984330.js");
var s = require("../app/753958.js");
var c = require("../app/72696.js");
var d = require("../app/355813.js");
var f = a(require("../app/170872.js"));
const p = new i.WapParser("refreshCartResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("cart");
  const n = t.maybeChild("price");
  const a = {};
  const r = n == null ? undefined : n.maybeChild("subtotal");
  if (r) {
    a.subtotal = r.contentString();
  }
  const o = n == null ? undefined : n.maybeChild("total");
  if (o) {
    a.total = o.contentString();
  }
  const l = n == null ? undefined : n.maybeChild("currency");
  if (l) {
    a.currency = l.contentString();
  }
  const i = n == null ? undefined : n.maybeChild("price_status");
  if (i) {
    a.price_status = i.contentString();
  }
  const u = [];
  t.forEachChildWithTag("product", e => {
    var t;
    const n = e.child("id").contentString();
    const a = e.maybeChild("name");
    const r = a ? a.contentString() : null;
    const o = e.maybeChild("max_available");
    const l = (t = o == null ? undefined : o.contentString()) !== null && t !== undefined ? t : s.CART_ITEM_MAX_QUANTITY;
    const i = e.maybeChild("price");
    const c = i ? i.contentString() : null;
    const d = e.maybeChild("currency");
    const f = d ? d.contentString() : null;
    let p;
    const m = e.maybeChild("media");
    const h = m ? m.maybeChild("image") : null;
    if (h != null) {
      p = {
        image: {}
      };
      const e = h.maybeChild("id");
      if (e && e.hasContent()) {
        p.image.id = e.contentString();
      }
      const t = h.maybeChild("request_image_url");
      if (t && t.hasContent()) {
        p.image.request_image_url = t.contentString();
      }
    }
    const g = {
      id: n,
      name: r,
      price: c,
      currency: f,
      media: p,
      max_available: Number(l)
    };
    const E = e.maybeChild("sale_price");
    var v;
    var _;
    if (E) {
      g.sale_price = {
        price: E.child("price").contentString(),
        start_date: (v = E.maybeChild("start_date")) === null || v === undefined ? undefined : v.contentString(),
        end_date: (_ = E.maybeChild("end_date")) === null || _ === undefined ? undefined : _.contentString()
      };
    }
    const y = e.maybeChild("status");
    if (y) {
      g.status = y.contentString();
    }
    u.push(g);
  });
  return {
    price: a,
    products: u
  };
});
function m() {
  return (m = (0, r.default)(function* (e, t, n, a) {
    let r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    if ((0, c.commerceFeaturesDisabledBySanctions)()) {
      return Promise.reject(new u.E451());
    }
    const i = (0, l.wap)("iq", {
      to: l.S_WHATSAPP_NET,
      smax_id: "11",
      xmlns: "fb:thrift_iq",
      id: (0, l.generateId)(),
      type: "get"
    }, (0, l.wap)("cart", {
      op: (0, l.CUSTOM_STRING)("refresh"),
      biz_jid: (0, d.USER_JID)(e)
    }, t.map(e => (0, l.wap)("product", null, (0, l.wap)("id", null, e))).concat((0, f.default)([(0, l.wap)("image_dimensions", null, (0, l.wap)("width", null, n.toString()), (0, l.wap)("height", null, a.toString())), r ? (0, l.wap)("direct_connection_encrypted_info", null, r) : null]))));
    const s = yield (0, o.deprecatedSendIq)(i, p);
    if (s.success) {
      return s.result;
    }
    if (s.errorCode === 451) {
      throw new u.E451();
    }
    throw new u.ServerStatusCodeError(s.errorCode);
  })).apply(this, arguments);
}
exports.refreshCartResponse = p;