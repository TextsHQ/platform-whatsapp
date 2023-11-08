var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  let n;
  let {
    msg: a,
    displayAuthor: C,
    displayType: b
  } = e;
  if (a.nativeFlowName === u.default.ORDER_DETAILS) {
    const e = (0, p.getOrderInfo)(a);
    const r = e != null && (0, m.findOrderStatus)((0, o.getChat)(a), e == null ? undefined : e.referenceId) === m.OrderStatus.Pending;
    t = v.default.createElement("div", {
      className: (0, _.default)(y.headerSpacing)
    }, v.default.createElement(s.default, {
      msg: a,
      displayType: b
    }));
    n = [{
      label: r ? E.fbt._("Review and Pay", null, {
        hk: "aJwEg"
      }) : E.fbt._("View details", null, {
        hk: "4Ah4bt"
      }),
      onClick: () => (0, h.default)({
        title: E.fbt._("Orders can't be viewed on WhatsApp Web", null, {
          hk: "2OPqXz"
        }),
        body: E.fbt._("Use WhatsApp on your mobile device to view this order.", null, {
          hk: "2FMFfW"
        })
      })
    }];
    if (!(0, d.getIsSentByMe)(a)) {
      const t = (0, l.getQuickPayAction)(a, e == null ? undefined : e.type, !r);
      if (t) {
        n.push(t);
      }
    }
  } else if (a.nativeFlowName === u.default.ORDER_STATUS) {
    t = v.default.createElement("div", {
      className: (0, _.default)(y.headerSpacing)
    }, v.default.createElement(s.default, {
      msg: a,
      displayType: b
    }));
  } else {
    var M;
    t = a.title ? v.default.createElement(r.EmojiText, {
      text: a.title,
      selectable: (0, f.isTrusted)(a.unsafe()),
      direction: (0, o.getDir)(a),
      dirMismatch: (0, o.getRtl)(a) !== c.default.isRTL(),
      inferLinesDirection: true,
      xstyle: [g.uiMargin.bottom6, y.headerTitle]
    }) : null;
    n = (M = a.nativeFlowButtons) === null || M === undefined ? undefined : M.map(e => {
      var t;
      var n;
      return {
        label: (t = (n = e.buttonText) === null || n === undefined ? undefined : n.displayText) !== null && t !== undefined ? t : "",
        onClick: () => (0, h.default)()
      };
    });
  }
  return v.default.createElement(i.default, {
    msg: a,
    displayAuthor: C,
    displayFooter: a.nativeFlowName !== u.default.ORDER_STATUS,
    header: t,
    displayType: b,
    actions: n
  });
};
var r = require("../app/305521.js");
var o = require("../app/163755.js");
var l = require("./141748.js");
var i = a(require("./346167.js"));
var u = a(require("../app/753110.js"));
var s = a(require("./941185.js"));
var c = a(require("../app/932325.js"));
var d = require("../app/787742.js");
var f = require("../app/435711.js");
var p = require("../app/706197.js");
var m = require("../app/620982.js");
var h = a(require("./655210.js"));
var g = require("../app/676345.js");
var E = require("../vendor/548360.js");
var v = a(require("../vendor/667294.js"));
var _ = a(require("../app/156720.js"));
const y = {
  headerSpacing: {
    marginTop: "if44n927",
    marginEnd: "isg5rw3j",
    marginBottom: "ngycyvoj",
    marginStart: "heai6z19"
  },
  headerTitle: {
    fontSize: "bze30y65",
    fontWeight: "hnx8ox4h"
  }
};