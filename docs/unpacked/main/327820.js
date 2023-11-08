var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onClick: t,
    colorXStyle: n
  } = e;
  const a = {
    className: (0, s.default)(c, n),
    title: i.fbt._("Add to cart", null, {
      hk: "2qbS08"
    })
  };
  if (t != null) {
    return u.default.createElement(l.default, (0, r.default)({}, a, {
      Icon: o.AddShoppingCartIcon,
      "aria-label": i.fbt._("Add to cart", null, {
        hk: "2qbS08"
      }),
      onClick: t
    }));
  }
  return u.default.createElement(o.AddShoppingCartIcon, a);
};
var r = a(require("../vendor/967154.js"));
var o = require("./457322.js");
var l = a(require("../app/397778.js"));
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  color: "svlsagor",
  ":hover": {
    color: "kbf8aj4n"
  }
};