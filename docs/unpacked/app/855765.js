var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAmount1000AndCurrency = function (e) {
  return function (e) {
    if (e.hasChild("amount")) {
      return function (e) {
        e.assertTag("money");
        const t = parseFloat(e.attrString("value"));
        const n = e.attrString("currency");
        const r = e.maybeAttrInt("offset");
        return {
          currency: n,
          amount1000: t * a / (r != null && r !== 0 ? r : a)
        };
      }(e.child("amount").child("money"));
    }
    if (e.hasAttr("amount")) {
      return {
        amount1000: parseFloat(e.attrString("amount")) * a,
        currency: e.attrString("currency")
      };
    }
    __LOG__(3)`Amount missing in pay or transaction node`;
    throw (0, i.default)("Amount missing in pay or transaction node");
  }(e);
};
var i = r(require("./556869.js"));
const a = 1000;