var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuickPayAction = function (e, t, n) {
  const a = r.QUICK_PAY_PRODUCT_TYPE_GATING.cast(t);
  if (a && (0, r.isOrderDetailsQuickPayEnabled)(a)) {
    i = n;
    return {
      label: l.fbt._("Pay now on WhatsApp", null, {
        hk: "4iHG5p"
      }),
      disabled: i,
      onClick: () => (0, o.default)({
        title: l.fbt._("Complete payment on your phone", null, {
          hk: "1Q6orH"
        }),
        body: ""
      })
    };
  }
  var i;
  return null;
};
var r = require("../app/72696.js");
var o = a(require("./655210.js"));
var l = require("../vendor/548360.js");