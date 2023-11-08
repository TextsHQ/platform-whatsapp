var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n] = (0, c.useMsgValues)(t.id, [o.getNativeFlowName]);
  if (n === r.default.ORDER_DETAILS) {
    return s.default.createElement(l.ReceiptIcon, {
      xstyle: [d.container, u.uiMargin.top2],
      width: 13,
      height: 14
    });
  }
  return s.default.createElement(i.StatusUnknownIcon, null);
};
var r = a(require("../app/753110.js"));
var o = require("../app/787742.js");
var l = require("../app/462937.js");
var i = require("./333856.js");
var u = require("../app/676345.js");
var s = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var c = require("./871210.js");
const d = {
  container: {
    display: "l7jjieqr",
    marginEnd: "hjr9v96k"
  }
};