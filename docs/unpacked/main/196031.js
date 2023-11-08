var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, o.formatAmount1000ToParts)(e.currency, e.amount1000);
  return i.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [l.default.isQuoted]: e.isQuoted,
      [l.default.amount]: true
    })
  }, i.default.createElement("span", {
    className: l.default.amountCurrency
  }, t.symbol), i.default.createElement("span", {
    className: l.default.amountInteger
  }, t.integer), i.default.createElement("span", {
    className: l.default.amountDecimal
  }, t.decimal));
};
var r = require("../app/396574.js");
var o = require("../app/27578.js");
var l = a(require("./591610.js"));
var i = a(require("../vendor/667294.js"));