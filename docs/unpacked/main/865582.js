var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMultiVcardText = g;
exports.formatProductText = v;
exports.formatQuotedMsg = function (e) {
  switch (e.type) {
    case u.MSG_TYPE.DOCUMENT:
      if (e.isVcardOverMmsDocument) {
        return E(e);
      } else {
        return (0, l.default)(e.unsafe());
      }
    case u.MSG_TYPE.MULTI_VCARD:
      return g(e);
    case u.MSG_TYPE.PRODUCT:
      return v(e);
    case u.MSG_TYPE.NATIVE_FLOW:
    case u.MSG_TYPE.INTERACTIVE:
      if (e.nativeFlowName === i.default.ORDER_DETAILS) {
        return function (e) {
          const t = (0, c.getOrderInfo)(e);
          if (t == null) {
            return "";
          }
          return (0, s.getOrderDetailProductLabel)(t.items) + "\n" + m.fbt._("Quantity {order_items_quantity} • {order_total_price}", [m.fbt._param("order_items_quantity", t.quantity), m.fbt._param("order_total_price", o.formatAmount(t.currency, t.totalAmount))], {
            hk: "1x9ZOx"
          }).toString();
        }(e);
      } else {
        return (0, l.default)(e.unsafe());
      }
    default:
      return (0, l.default)(e.unsafe());
  }
};
exports.formatVcardOverMmsText = E;
var r = a(require("../vendor/339138.js"));
var o = function (e, t) {
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
var l = a(require("./353033.js"));
var i = a(require("../app/753110.js"));
var u = require("../app/373070.js");
var s = require("./507148.js");
var c = require("../app/706197.js");
var d = require("../app/899841.js");
var f = require("../app/517660.js");
var p = a(require("../app/286816.js"));
var m = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
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
function g(e) {
  const t = e.vcardList.length;
  if (t > 0) {
    return m.fbt._({
      "*": "{count} contacts",
      _1: "1 contact"
    }, [m.fbt._plural(t, "count")], {
      hk: "13EUBn"
    });
  } else {
    return m.fbt._("No contacts", null, {
      hk: "1p56oN"
    });
  }
}
function E(e) {
  var t;
  if (e.mediaData.parsedVcards) {
    const {
      parsedVcards: t
    } = e.mediaData;
    if (t.length > 1) {
      return m.fbt._({
        "*": "{count} contacts",
        _1: "1 contact"
      }, [m.fbt._plural(t.length, "count")], {
        hk: "13EUBn"
      }).toString();
    } else {
      return (0, f.vcardGetNameFromParsed)(t[0]) || p.default._("Contact", null, {
        hk: "23Gpbk"
      }).toString();
    }
  }
  if (e.pageCount != null) {
    return m.fbt._({
      "*": "{count} contacts",
      _1: "1 contact"
    }, [m.fbt._plural(e.pageCount, "count")], {
      hk: "13EUBn"
    }).toString();
  } else {
    return ((t = e.mediaData) === null || t === undefined ? undefined : t.filename) || p.default._("Document", null, {
      hk: "p3EXI"
    }).toString();
  }
}
function v(e) {
  let t;
  let {
    title: n,
    description: a,
    currencyCode: l,
    priceAmount1000: i,
    salePriceAmount1000: u
  } = e;
  if (l != null && i != null) {
    const e = e => o.formatAmount1000(l, e);
    t = u != null ? `${e(u)} ~${e(i)}~` : e(i);
  } else if (a) {
    t = (0, r.default)(a, {
      length: d.MAX_REPLY_PRODUCT_DESC_LENGTH
    });
  }
  return [(0, r.default)(n, {
    length: d.MAX_REPLY_PRODUCT_TITLE_LENGTH
  }), t].filter(Boolean).join("\n");
}