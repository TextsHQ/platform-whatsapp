var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = function () {
    var n = (0, r.default)(function* () {
      (0, s.qplStartCartView)("Toast");
      yield (0, o.default)(e.catalogWid.toString(), undefined, t);
      (0, l.logCartToastClick)(e.catalogWid.toString(), t);
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  u.ToastManager.open(d.default.createElement(i.Toast, {
    action: {
      actionText: c.fbt._("View cart", null, {
        hk: "FzP7d"
      }),
      onAction: () => {
        n();
      }
    },
    duration: 6000,
    msg: c.fbt._("Item added to cart", null, {
      hk: "3cSc2w"
    })
  }));
};
var r = a(require("../vendor/348926.js"));
var o = a(require("./55423.js"));
var l = require("./957256.js");
var i = require("../app/625786.js");
var u = require("../app/390737.js");
var s = require("./887222.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));