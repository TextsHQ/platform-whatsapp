var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendPrefilledMsg = _;
exports.appendPrefilledOrderPaymentMethodMsg = m;
exports.appendPrefilledOrderPaymentMsg = g;
exports.formatInteractive = function (e) {
  var t;
  var n;
  let {
    formatAsSearchResult: r = false
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i;
  if (e.interactiveType === o.default.SHOPS_STOREFRONT) {
    return e.caption || ((i = e.interactiveHeader) === null || i === undefined ? undefined : i.title) || "";
  }
  if (e.nativeFlowName === a.default.ORDER_DETAILS) {
    const t = f(e);
    if (t != null) {
      return t;
    }
  }
  if (e.nativeFlowName === a.default.ORDER_STATUS) {
    const t = p(e);
    if (t != null) {
      return t;
    }
  }
  return [(t = e.interactiveHeader) === null || t === undefined ? undefined : t.title, r ? (n = e.interactiveHeader) === null || n === undefined ? undefined : n.subtitle : null, e.caption, e.footer].filter(Boolean).join("\n");
};
exports.formatOrderDetailsMessagePreview = f;
exports.formatOrderPaymentMethodMessage = function (e) {
  const t = (0, l.getOrderPaymentStatusInfoFromNativeFlow)(e);
  if (t == null) {
    return null;
  }
  return m(t == null ? undefined : t.paymentMethod);
};
exports.formatOrderPaymentStatusMessage = function (e) {
  const t = (0, l.getOrderPaymentStatusInfoFromNativeFlow)(e);
  if (t == null) {
    return null;
  }
  return g(e.caption, t == null ? undefined : t.paymentStatus).toString();
};
exports.formatOrderStatusMessage = p;
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./27578.js"));
var a = r(require("./753110.js"));
var o = r(require("./182394.js"));
var s = require("./706197.js");
var l = require("./458103.js");
var u = require("./620982.js");
var c = require("../vendor/548360.js");
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function p(e) {
  const t = (0, u.getOrderStatusInfo)(e);
  if (t == null) {
    return null;
  } else {
    return _(e.caption, t == null ? undefined : t.status).toString();
  }
}
function f(e) {
  const t = (0, s.getOrderInfo)(e);
  if (t == null) {
    return null;
  }
  const {
    items: n,
    totalAmount: r,
    currency: a
  } = t;
  const o = i.formatAmount(a, r);
  return n[0].name + " · " + o;
}
function _(e, t) {
  let n = "";
  switch (t) {
    case u.OrderStatus.Pending:
      n = c.fbt._("Status: Pending", null, {
        hk: "RHRUA"
      });
      break;
    case u.OrderStatus.Canceled:
      n = c.fbt._("Status: Canceled", null, {
        hk: "1ge2QI"
      });
      break;
    case u.OrderStatus.PartiallyShipped:
      n = c.fbt._("Status: Partially shipped", null, {
        hk: "165Lxj"
      });
      break;
    case u.OrderStatus.Complete:
      n = c.fbt._("Status: Complete", null, {
        hk: "1kCG7V"
      });
      break;
    case u.OrderStatus.Shipped:
      n = c.fbt._("Status: Shipped", null, {
        hk: "4wVEuu"
      });
      break;
    case u.OrderStatus.Processing:
      n = c.fbt._("Status: Processing", null, {
        hk: "43Pj3w"
      });
      break;
    case u.OrderStatus.PaymentRequested:
      n = c.fbt._("Status: Payment requested", null, {
        hk: "1hfm9A"
      });
      break;
    case u.OrderStatus.PreparingToShip:
      n = c.fbt._("Status: Preparing to ship", null, {
        hk: "cnaVC"
      });
      break;
    case u.OrderStatus.Delivered:
      n = c.fbt._("Status: Delivered", null, {
        hk: "1Ttmt7"
      });
  }
  if (e == null ? undefined : e.toLowerCase().includes(n.toString().toLowerCase())) {
    return e || "";
  } else {
    return (n.toString() + "\n" + (e || "")).trim();
  }
}
function g(e, t) {
  let n = "";
  switch (t) {
    case l.OrderPaymentStatus.Captured:
      n = c.fbt._("Payment: Paid", null, {
        hk: "HqbOr"
      });
      break;
    case l.OrderPaymentStatus.Pending:
      n = c.fbt._("Payment: Pending", null, {
        hk: "3nfhy1"
      });
  }
  return (n.toString() + "\n" + (e != null ? e : "")).trim();
}
function m(e) {
  let t = "";
  switch (e) {
    case l.OrderPaymentMethod.PaymentInstruction:
      t = c.fbt._("Paying outside WhatsApp", null, {
        hk: "4bVvFI"
      });
      break;
    case l.OrderPaymentMethod.Confirm:
      t = c.fbt._("Order confirmed", null, {
        hk: "FENCD"
      });
  }
  return t.toString();
}