Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductComplianceCategory = exports.ProductAvailability = exports.PRODUCT_PAGE_SIZE = exports.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES = undefined;
exports.asProductReviewType = function (e) {
  if (e === "APPROVED" || e === "PENDING" || e === "REJECTED") {
    return e;
  }
};
const r = require("../vendor/76672.js")({
  IN_STOCK: "in stock",
  OUT_OF_STOCK: "out of stock",
  AVAILABLE_FOR_ANOTHER_POSTCODE: "available for another postcode",
  UNKNOWN: "unknown"
});
exports.ProductAvailability = r;
const i = [r.OUT_OF_STOCK, r.AVAILABLE_FOR_ANOTHER_POSTCODE];
exports.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES = i;
exports.PRODUCT_PAGE_SIZE = 6;
const a = require("../vendor/76672.js")({
  Default: "DEFAULT",
  CountryOriginExempt: "COUNTRY_ORIGIN_EXEMPT"
});
exports.ProductComplianceCategory = a;