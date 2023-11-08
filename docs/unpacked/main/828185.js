var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n, a] = (0, u.useMsgValues)(t.id, [o.getAck, o.getIsSentByMe]);
  let d;
  if (n === r.ACK.PLAYED) {
    d = s;
  } else if (!a) {
    d = c;
  }
  return i.default.createElement(l.StatusPttIcon, {
    iconXstyle: d
  });
};
var r = require("../app/402994.js");
var o = require("../app/787742.js");
var l = require("./771692.js");
var i = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var u = require("./871210.js");
const s = {
  color: "sunvlxxz"
};
const c = {
  color: "egb23ua2"
};