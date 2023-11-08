var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = function (e, t, n) {
  const {
    newCount: a,
    status: s,
    totalCartCount: c
  } = (0, r.addProductToCart)(e);
  switch (s) {
    case r.AddToCartStatus.SUCCESS:
      if ((0, o.isQuantityControlsFeatureEnabled)() === false) {
        (0, u.default)(e, t);
      }
      if (c === 1) {
        (0, l.logCreateNewCart)(e, t, n, c);
      }
      (0, l.logAddProductToCart)(e, t, a, n);
      break;
    case r.AddToCartStatus.QUANTITY_LIMIT_REACHED:
      (0, i.default)();
  }
};
var r = require("./550234.js");
var o = require("../app/72696.js");
var l = require("./957256.js");
var i = a(require("./273179.js"));
var u = a(require("./89461.js"));