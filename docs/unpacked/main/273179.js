var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : r.CART_ITEM_MAX_QUANTITY;
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = (0, o.isQuantityControlsFeatureEnabled)() || t ? null : {
    onAction: () => {},
    actionText: (0, l.default)("GOT IT"),
    dismiss: true,
    theme: "success"
  };
  const a = c.fbt._({
    "*": "Only {max-quantity} of these items are currently available.",
    _1: "Only {max-quantity} of these items is currently available."
  }, [c.fbt._plural(e), c.fbt._param("max-quantity", i.default.n(e))], {
    hk: "MxY1J"
  });
  s.ToastManager.open(d.default.createElement(u.Toast, {
    action: n,
    duration: 6000,
    msg: a
  }));
};
var r = require("../app/753958.js");
var o = require("../app/72696.js");
var l = a(require("../app/395767.js"));
var i = a(require("../app/932325.js"));
var u = require("../app/625786.js");
var s = require("../app/390737.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));