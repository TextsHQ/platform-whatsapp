Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSalePriceActive = exports.isEmptyPrice = exports.getSavings = exports.getActivePrice = undefined;
const n = e => e.salePriceAmount1000 != null && (e.salePriceStartDate == null || e.salePriceStartDate <= Date.now()) && (e.salePriceEndDate == null || e.salePriceEndDate > Date.now());
exports.isSalePriceActive = n;
const r = e => n(e) ? e.salePriceAmount1000 : e.priceAmount1000;
exports.getActivePrice = r;
exports.getSavings = e => {
  var t;
  var r;
  if (n(e)) {
    return Math.max(0, ((t = e.priceAmount1000) !== null && t !== undefined ? t : 0) - ((r = e.salePriceAmount1000) !== null && r !== undefined ? r : 0));
  } else {
    return 0;
  }
};
exports.isEmptyPrice = e => {
  const {
    currency: t,
    priceAmount1000: n
  } = e;
  const i = r(e);
  return !t || n == null || i == null;
};