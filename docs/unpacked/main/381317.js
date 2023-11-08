var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n, a, h, g, E, v, _] = (0, p.useMsgValues)(t.id, [i.getAck, i.getIsMedia, i.getIsViewOnce, i.getCaption, i.getType, i.getLoc, i.getIsLive]);
  const y = a && !g && !h && E !== s.MSG_TYPE.AUDIO || E === s.MSG_TYPE.LOCATION && !v && !_;
  const C = (0, c.getMessageStatusLabel)(n);
  let b;
  let M;
  if (n < r.ACK.SENT) {
    b = u.MsgTimeIcon;
  } else if (n === r.ACK.SENT) {
    b = o.MsgCheckIcon;
  } else if (n === r.ACK.RECEIVED) {
    b = l.MsgDblcheckIcon;
  } else {
    b = l.MsgDblcheckIcon;
    M = m.ackBlue;
  }
  return d.default.createElement(b, {
    "aria-label": ` ${C.toString()} `,
    height: b === u.MsgTimeIcon ? undefined : 11,
    width: 16,
    className: (0, f.default)(y && m.light, M)
  });
};
var r = require("../app/402994.js");
var o = require("./90400.js");
var l = require("./523658.js");
var i = require("../app/787742.js");
var u = require("./470577.js");
var s = require("../app/373070.js");
var c = require("./270254.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
var p = require("./871210.js");
const m = {
  light: {
    color: "k17s6i4e"
  },
  ackBlue: {
    color: "ajgik1ph"
  }
};