var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n, a] = (0, f.useMsgValues)(t.id, [l.getInteractiveType, l.getNativeFlowName]);
  if (n === o.default.SHOPS_STOREFRONT) {
    return d.default.createElement(u.ShopFilledIcon, {
      xstyle: [p.container, c.uiMargin.top2],
      width: 13,
      height: 14
    });
  }
  if (n === o.default.NATIVE_FLOW && a === r.default.ORDER_DETAILS) {
    return d.default.createElement(i.ReceiptIcon, {
      xstyle: [p.container, c.uiMargin.top2],
      width: 13,
      height: 14
    });
  }
  return d.default.createElement(s.StatusUnknownIcon, null);
};
var r = a(require("../app/753110.js"));
var o = a(require("../app/182394.js"));
var l = require("../app/787742.js");
var i = require("../app/462937.js");
var u = require("./337951.js");
var s = require("./333856.js");
var c = require("../app/676345.js");
var d = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var f = require("./871210.js");
const p = {
  container: {
    display: "l7jjieqr",
    marginEnd: "hjr9v96k"
  }
};