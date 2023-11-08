var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProductNode = undefined;
exports.productModelToNode = function (e) {
  var t;
  var n;
  const r = e.id ? (0, a.wap)("id", null, e.id.toString()) : undefined;
  const o = e.description ? (0, a.wap)("description", null, e.description) : undefined;
  const c = e.url ? (0, a.wap)("url", null, e.url) : undefined;
  const d = e.retailerId ? (0, a.wap)("retailer_id", null, e.retailerId) : undefined;
  const p = e.priceAmount1000 != null ? (0, a.wap)("currency", null, e.currency) : undefined;
  const f = e.priceAmount1000 != null ? (0, a.wap)("price", null, e.priceAmount1000.toString()) : undefined;
  const _ = [(0, a.wap)("image", null, (0, a.wap)("url", null, e.imageCdnUrl))].concat((t = e.additionalImageCdnUrl) === null || t === undefined ? undefined : t.map(e => (0, a.wap)("image", null, (0, a.wap)("url", null, e))));
  const g = function (e) {
    var t;
    var n;
    var r;
    var i;
    var o;
    var l;
    const {
      isExempt: u,
      hasCountryCodeOrigin: c,
      hasImporterName: d,
      hasImporterAddress: p
    } = (0, s.scanComplianceInfoForMissingData)(e);
    if (!u && (c || d || p)) {
      return (0, a.wap)("compliance_info", null, c ? (0, a.wap)("country_code_origin", null, e == null ? undefined : e.countryCodeOrigin) : undefined, d ? (0, a.wap)("importer_name", null, e == null ? undefined : e.importerName) : undefined, p ? (0, a.wap)("importer_address", null, (e == null || (t = e.importerAddress) === null || t === undefined ? undefined : t.street1) ? (0, a.wap)("street1", null, e.importerAddress.street1) : undefined, (e == null || (n = e.importerAddress) === null || n === undefined ? undefined : n.street2) ? (0, a.wap)("street2", null, e.importerAddress.street2) : undefined, (e == null || (r = e.importerAddress) === null || r === undefined ? undefined : r.city) ? (0, a.wap)("city", null, e.importerAddress.city) : undefined, (e == null || (i = e.importerAddress) === null || i === undefined ? undefined : i.region) ? (0, a.wap)("region", null, e.importerAddress.region) : undefined, (e == null || (o = e.importerAddress) === null || o === undefined ? undefined : o.postalCode) ? (0, a.wap)("postal_code", null, e.importerAddress.postalCode) : undefined, (e == null || (l = e.importerAddress) === null || l === undefined ? undefined : l.countryCode) ? (0, a.wap)("country_code", null, e.importerAddress.countryCode) : undefined) : undefined);
    } else {
      return undefined;
    }
  }(e.complianceInfo);
  const m = (0, i.default)({
    is_hidden: e.isHidden ? "true" : "false"
  }, ((n = e.complianceInfo) === null || n === undefined ? undefined : n.countryCodeOrigin) === String(u.SyntheticCountryCode.NotApplicable) ? {
    compliance_category: l.ProductComplianceCategory.CountryOriginExempt
  } : undefined);
  return (0, a.wap)("product", m, r, (0, a.wap)("name", null, e.name), o, c, d, (0, a.wap)("media", null, _), f, p, g);
};
var i = r(require("../vendor/81109.js"));
var a = require("./716358.js");
var o = require("./753958.js");
var s = require("./637842.js");
var l = require("./694630.js");
var u = require("./741703.js");
exports.parseProductNode = e => {
  var t;
  var n;
  var r;
  const a = e.child("id").contentString();
  const s = e.maybeChild("url");
  let c = "";
  if (s && s.hasContent()) {
    c = s.contentString();
  }
  const d = e.child("name").contentString();
  const p = (t = e.maybeAttrString("availability")) !== null && t !== undefined ? t : l.ProductAvailability.UNKNOWN;
  let f = o.CART_ITEM_MAX_QUANTITY;
  const _ = e.maybeAttrString("max_available");
  if (_ != null) {
    f = Number(_);
  }
  const g = e.maybeChild("max_available");
  const m = g == null ? undefined : g.contentString();
  if (m != null) {
    f = Number(m);
  }
  const h = e.maybeChild("description");
  const y = h ? h.contentString() : "";
  const E = e.maybeChild("belongs_to");
  const S = (E == null ? undefined : E.contentString()) === "true" || false;
  const v = [];
  const T = [];
  const M = [];
  const A = e.child("media");
  let b = true;
  A.forEachChildWithTag("image", e => {
    if (b) {
      b = false;
      v.push({
        key: "requested",
        value: e.child("request_image_url").contentString()
      });
      v.push({
        key: "full",
        value: e.child("original_image_url").contentString()
      });
      M.push(e.child("id").contentString());
    } else {
      const t = [];
      t.push({
        key: "requested",
        value: e.child("request_image_url").contentString()
      });
      t.push({
        key: "full",
        value: e.child("original_image_url").contentString()
      });
      T.push(t);
      M.push(e.child("id").contentString());
    }
  });
  const C = e.maybeChild("status_info");
  const P = (C == null ? undefined : C.child("status").contentString()) || "APPROVED";
  const O = C == null || (n = C.maybeChild("can_appeal")) === null || n === undefined ? undefined : n.contentString();
  const I = e.maybeChild("currency");
  const R = I ? I.contentString() : undefined;
  const N = e.maybeChild("price");
  const D = N == null ? undefined : N.contentString();
  const w = e.maybeChild("retailer_id");
  const L = w ? w.contentString() : "";
  const k = !!e.hasAttr("is_hidden") && e.attrString("is_hidden") === "true";
  const G = e.hasAttr("compliance_category") ? l.ProductComplianceCategory.cast(e.attrString("compliance_category")) : l.ProductComplianceCategory.Default;
  const U = e.maybeChild("sale_price");
  const x = U ? (0, i.default)({
    sale_price: (r = U.maybeChild("price")) === null || r === undefined ? undefined : r.contentString()
  }, U.hasChild("start_date") && U.hasChild("end_date") ? {
    sale_start_date: U.child("start_date").contentString(),
    sale_end_date: U.child("end_date").contentString()
  } : null) : null;
  const B = (0, i.default)({
    id: a,
    is_hidden: k,
    url: c,
    name: d,
    description: y,
    availability: p,
    max_available: f,
    additional_image_cdn_urls: T,
    image_cdn_urls: v,
    capability_to_review_status: [{
      key: "WHATSAPP",
      value: P
    }],
    whatsapp_product_can_appeal: O === "true",
    image_hashes_for_whatsapp: M,
    currency: R,
    price: D,
    retailer_id: L,
    checkmark: S
  }, x);
  const F = e.maybeChild("compliance_info");
  if (G === l.ProductComplianceCategory.CountryOriginExempt) {
    B.compliance_info = {
      country_code_origin: String(u.SyntheticCountryCode.NotApplicable)
    };
  } else if (F) {
    B.compliance_info = function (e) {
      var t;
      const n = e.child("country_code_origin").contentString();
      const r = (t = e.maybeChild("importer_name")) === null || t === undefined ? undefined : t.contentString();
      const i = e.maybeChild("importer_address");
      const a = {
        country_code_origin: n,
        importer_name: r
      };
      var o;
      var s;
      var l;
      if (i) {
        a.importer_address = {
          street1: i.child("street1").contentString(),
          street2: (o = i.maybeChild("street2")) === null || o === undefined ? undefined : o.contentString(),
          postal_code: (s = i.maybeChild("postal_code")) === null || s === undefined ? undefined : s.contentString(),
          city: i.child("city").contentString(),
          region: (l = i.maybeChild("region")) === null || l === undefined ? undefined : l.contentString(),
          country_code: i.child("country_code").contentString()
        };
      }
      return a;
    }(F);
  }
  return B;
};