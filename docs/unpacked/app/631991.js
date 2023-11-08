var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProductGraphQL = function (e) {
  var t;
  var n;
  var r;
  var p;
  var f;
  var _;
  var g;
  var m;
  var h;
  let {
    status_info: y,
    sale_price: E,
    product_availability: S,
    compliance_info: v
  } = e;
  let T = (0, a.default)(e, c);
  const [M, ...A] = (t = (n = T.media) === null || n === undefined ? undefined : n.images) !== null && t !== undefined ? t : [];
  const b = (0, i.default)((0, i.default)({
    id: (0, o.default)(T.id, "product.id"),
    retailer_id: (r = T.retailer_id) !== null && r !== undefined ? r : "",
    name: (0, o.default)(T.name, "product.name"),
    description: (p = T.description) !== null && p !== undefined ? p : "",
    url: (f = T.url) !== null && f !== undefined ? f : "",
    currency: T.currency,
    price: T.price,
    is_hidden: T.is_hidden === "ISHIDDEN_TRUE",
    max_available: (_ = T.max_available) !== null && _ !== undefined ? _ : s.CART_ITEM_MAX_QUANTITY,
    availability: S && S in d ? d[S] : l.ProductAvailability.UNKNOWN
  }, (E == null ? undefined : E.price) != null ? (0, i.default)({
    sale_price: E.price
  }, E.start_date != null && E.end_date != null ? {
    sale_start_date: E.start_date,
    sale_end_date: E.end_date
  } : null) : null), {}, {
    checkmark: T.belongs_to === "true",
    image_hashes_for_whatsapp: ((g = (m = T.media) === null || m === undefined ? undefined : m.images) !== null && g !== undefined ? g : []).map(e => (0, o.default)(e.id, "img.id")),
    image_cdn_urls: M ? [{
      key: "requested",
      value: (0, o.default)(M.request_image_url, "firstImage.request_image_url")
    }, {
      key: "full",
      value: (0, o.default)(M.original_image_url, "firstImage.original_image_url")
    }] : [],
    additional_image_cdn_urls: A.map(e => [{
      key: "requested",
      value: (0, o.default)(e.request_image_url, "img.request_image_url")
    }, {
      key: "full",
      value: (0, o.default)(e.original_image_url, "img.original_image_url")
    }]),
    whatsapp_product_can_appeal: (y == null ? undefined : y.can_appeal) === "true",
    capability_to_review_status: [{
      key: "WHATSAPP",
      value: (h = y == null ? undefined : y.status) !== null && h !== undefined ? h : "APPROVED"
    }]
  });
  if (v != null) {
    var C;
    var P;
    var O;
    var I;
    var R;
    const {
      importer_address: e
    } = v;
    b.compliance_info = T.compliance_category === "COMPLIANCECATEGORY_COUNTRYORIGINEXEMPT" ? {
      country_code_origin: u.SyntheticCountryCode.NotApplicable
    } : {
      country_code_origin: (C = v.country_code_origin) !== null && C !== undefined ? C : undefined,
      importer_name: (P = v.importer_name) !== null && P !== undefined ? P : undefined,
      importer_address: {
        street1: (0, o.default)(e == null ? undefined : e.street1, "importerAddress?.street1"),
        street2: (O = e == null ? undefined : e.street2) !== null && O !== undefined ? O : undefined,
        postal_code: (I = e == null ? undefined : e.postal_code) !== null && I !== undefined ? I : undefined,
        city: (0, o.default)(e == null ? undefined : e.city, "importerAddress?.city"),
        region: (R = e == null ? undefined : e.region) !== null && R !== undefined ? R : undefined,
        country_code: (0, o.default)(e == null ? undefined : e.country_code, "importerAddress?.country_code")
      }
    };
  }
  return b;
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("./670983.js"));
var s = require("./753958.js");
var l = require("./694630.js");
require("./270658.js");
var u = require("./741703.js");
const c = ["status_info", "sale_price", "product_availability", "compliance_info"];
const d = {
  AVAILABLE_FOR_ANOTHER_POSTCODE: l.ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE,
  IN_STOCK: l.ProductAvailability.IN_STOCK,
  OUT_OF_STOCK: l.ProductAvailability.OUT_OF_STOCK
};