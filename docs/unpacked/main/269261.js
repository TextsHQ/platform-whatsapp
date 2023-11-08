var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    product: t,
    fallback: n = null,
    showAvailabilityNotice: a = false,
    showTotalPrice: h = false
  } = e;
  let g = (0, o.default)(e, m);
  const {
    currency: E,
    priceAmount1000: v
  } = t;
  const _ = (0, c.getActivePrice)(t);
  if (!E || v == null || _ == null) {
    return n;
  }
  let y = 1;
  const {
    id: C,
    catalogWid: b
  } = t;
  if (h && C != null && b) {
    y = (0, l.default)(C.toString(), b);
  }
  const M = e => i.formatAmount1000(E, e);
  const S = M(_ * y);
  const T = M(v * y);
  let w = (0, c.isSalePriceActive)(t) ? `${S} ~${T}~` : S;
  const A = (e => {
    if (e === d.ProductAvailability.OUT_OF_STOCK) {
      return f.fbt._("Out of Stock", null, {
        hk: "3YosHQ"
      });
    }
    if (e === d.ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE) {
      return f.fbt._("Not available in your postcode", null, {
        hk: "43JEsD"
      });
    }
    return null;
  })(t.availability);
  if (a && A != null) {
    w += " • " + A.toString();
  }
  return p.default.createElement(u.EmojiText, (0, r.default)({}, g, {
    text: w,
    formatters: [[[s.Strikethrough, {
      selectable: g.selectable
    }]]],
    ellipsify: true
  }));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = a(require("./539925.js"));
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/27578.js"));
var u = require("../app/305521.js");
var s = require("../app/233985.js");
var c = require("../app/607592.js");
var d = require("../app/694630.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
const m = ["product", "fallback", "showAvailabilityNotice", "showTotalPrice"];
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}