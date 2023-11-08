var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    uimContext: n,
    canCompose: a
  } = e;
  const {
    interactiveType: b,
    interactivePayload: M,
    nativeFlowName: S
  } = t;
  if (!M) {
    return null;
  }
  const T = [];
  switch (b) {
    case m.default.SHOPS_STOREFRONT:
      T.push(function (e) {
        let {
          id: t
        } = e;
        return {
          label: C.fbt._("View Shop", null, {
            hk: "KjKGP"
          }),
          onClick() {
            if (t != null) {
              (0, i.openShopStorefront)(t);
            } else {
              (0, _.default)();
            }
          }
        };
      }(M));
      break;
    case m.default.NATIVE_FLOW:
      if (typeof a == "boolean" && a) {
        if (S === p.default.ORDER_DETAILS) {
          const e = (0, g.getOrderInfo)(t);
          if (!e) {
            return null;
          }
          const a = (0, u.getChat)(t.unsafe());
          const i = (0, v.findOrderStatus)(a, e.referenceId);
          const s = (0, E.getOrderUpdateStatusAction)(t, i, n, a);
          if (s) {
            T.push(s);
          }
          const c = i === v.OrderStatus.Pending;
          T.push(function (e, t, n) {
            return {
              label: (0, h.getIsSentByMe)(e) || n ? C.fbt._("View Details", null, {
                hk: "2m8BsL"
              }) : (0, o.isWidInPaymentsCountry)((0, h.getSender)(e)) && (0, o.isWidInPaymentsCountry)((0, y.getMaybeMeUser)()) ? C.fbt._("Review and Pay", null, {
                hk: "4wxtk2"
              }) : C.fbt._("View Details", null, {
                hk: "2G040H"
              }),
              onClick() {
                if ((0, h.getIsSentByMe)(e) || (0, o.getConsumerOrdersExpansionAllowedCountries)()) {
                  (0, l.openOrderDetailDrawer)(e, t, r.default.FROM_CHAT);
                } else {
                  (0, _.default)({
                    title: C.fbt._("Orders can't be viewed on WhatsApp Web", null, {
                      hk: "3imGKi"
                    }),
                    body: C.fbt._("Use WhatsApp on your mobile device to view this order.", null, {
                      hk: "2lA6Ep"
                    })
                  });
                }
              }
            };
          }(t, n, !c));
          if (!(0, h.getIsSentByMe)(t)) {
            const n = (0, f.getQuickPayAction)(t, e.type, !c);
            if (n) {
              T.push(n);
            }
          }
        } else if (S === p.default.MESSAGE_WITH_LINK) {
          const e = (0, d.getOpenMessageWithLinkAction)(t);
          if (e) {
            T.push(e);
          }
        }
        if (S === p.default.CTA_CALL || S === p.default.CTA_URL || S === p.default.QUICK_REPLY || S === p.default.CTA_CATALOG) {
          const e = (0, c.getNativeFlowCtasFromInteractiveMsg)(t);
          if (e != null) {
            T.push(...(0, s.default)(e, t));
          }
        }
      }
      break;
    case m.default.CAROUSEL:
  }
  return T;
};
var r = a(require("./120162.js"));
var o = require("../app/72696.js");
var l = require("./686526.js");
var i = require("./885945.js");
var u = require("../app/163755.js");
var s = a(require("./460654.js"));
var c = require("../app/729605.js");
var d = require("../app/960063.js");
var f = require("./141748.js");
var p = a(require("../app/753110.js"));
var m = a(require("../app/182394.js"));
var h = require("../app/787742.js");
var g = require("../app/706197.js");
var E = require("./573100.js");
var v = require("../app/620982.js");
var _ = a(require("./655210.js"));
var y = require("../app/459857.js");
var C = require("../vendor/548360.js");