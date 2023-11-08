var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    amount: t,
    quantity: n,
    orderId: a,
    thumbnail: h,
    text: g,
    isSentByMe: E,
    xstyle: v,
    numberOfItems: _,
    orderPaymentStatusInfo: y
  } = e;
  return f.default.createElement(l.FlexColumn, {
    xstyle: [m.header, c.uiPadding.top6, c.uiPadding.bottom8, c.uiPadding.horiz8, E ? m.bubbleOut : m.bubbleIn, v]
  }, f.default.createElement(l.FlexRow, {
    xstyle: m.total,
    justify: "all"
  }, f.default.createElement(u.TextDiv, {
    color: "secondary",
    weight: "medium",
    xstyle: m.orderId,
    size: "10"
  }, (0, o.isOrderContentOptimizationEnabled)() ? d.fbt._("Charge #{order}", [d.fbt._param("order", a)], {
    hk: "1XgL6n"
  }) : d.fbt._("Order #{order}", [d.fbt._param("order", a)], {
    hk: "4hcfTo"
  })), (y == null ? undefined : y.paymentStatus) === i.OrderPaymentStatus.Captured && f.default.createElement(u.TextDiv, {
    testid: `order-header-payment-status-paid-${a}`,
    color: "secondary",
    weight: "medium",
    size: "10",
    xstyle: m.orderId
  }, f.default.createElement(r.ActionCheckCircleIcon, {
    width: 12,
    displayInline: true,
    xstyle: m.icon
  }), d.fbt._("Paid", null, {
    hk: "NEWkE"
  }))), f.default.createElement("div", {
    className: (0, p.default)(m.hr, c.uiMargin.top4, c.uiMargin.bottom8)
  }), f.default.createElement(l.FlexRow, {
    align: "center",
    className: (0, p.default)(m.orderInfoWrapper)
  }, h ? f.default.createElement("div", {
    className: (0, p.default)(m.media, c.uiMargin.end8),
    style: {
      backgroundImage: `url(${h})`
    }
  }) : null, f.default.createElement("div", {
    className: (0, p.default)(m.orderInfo)
  }, f.default.createElement(s.default, {
    maxLines: 1
  }, g), f.default.createElement(u.TextParagraph, {
    color: "secondary"
  }, function (e, t) {
    if (e != null && e > 1) {
      return d.fbt._({
        "*": "{number-of-items} items",
        _1: "1 item"
      }, [d.fbt._plural(e, "number-of-items")], {
        hk: "sLf0F"
      });
    }
    return d.fbt._("Quantity {item-quantity}", [d.fbt._param("item-quantity", t)], {
      hk: "102wGk"
    });
  }(_, n)))), f.default.createElement("div", {
    className: (0, p.default)(m.hr, c.uiMargin.vert8)
  }), f.default.createElement(l.FlexRow, {
    xstyle: m.total,
    justify: "all"
  }, f.default.createElement(u.TextParagraph, {
    size: "15"
  }, d.fbt._("Total", null, {
    hk: "1692RT"
  })), f.default.createElement(u.TextParagraph, {
    size: "15",
    weight: "medium"
  }, t)));
};
var r = require("./926813.js");
var o = require("../app/72696.js");
var l = require("../app/690495.js");
var i = require("../app/458103.js");
var u = require("../app/180519.js");
var s = a(require("./858327.js"));
var c = require("../app/676345.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));
var p = a(require("../app/156720.js"));
const m = {
  header: {
    boxSizing: "cm280p3y",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf"
  },
  bubbleIn: {
    backgroundColor: "rrq4r3yd"
  },
  bubbleOut: {
    backgroundColor: "s0eflmyh"
  },
  orderId: {
    textTransform: "ofejerhi",
    letterSpacing: "nlxcpvin",
    lineHeight: "hzeshm6i"
  },
  orderInfo: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  orderInfoWrapper: {
    width: "ln8gz9je"
  },
  hr: {
    width: "ln8gz9je",
    borderTop: "g0j88qvc"
  },
  media: {
    minWidth: "nucpke6t",
    height: "m3o1wsh7",
    maxHeight: "ibyb1pgl",
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  total: {
    width: "ln8gz9je"
  },
  icon: {
    paddingTop: "ppypbuwx",
    paddingEnd: "jfqm35v0",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  }
};