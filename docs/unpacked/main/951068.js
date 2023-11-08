var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t] = (0, f.useMsgValues)(e.msg.id, [i.getAck]);
  let n;
  let a;
  if (t < r.ACK.SENT) {
    n = d.default.createElement(c.StatusTimeIcon, null);
  } else if (t === r.ACK.SENT) {
    n = d.default.createElement(u.StatusCheckIcon, null);
  } else if (t === r.ACK.RECEIVED) {
    n = d.default.createElement(s.StatusDblcheckIcon, null);
  } else {
    n = d.default.createElement(s.StatusDblcheckIcon, null);
    a = o.default.ackBlue;
  }
  return d.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)(o.default.ack, a)
  }, n);
};
var r = require("../app/402994.js");
var o = a(require("./137799.js"));
var l = require("../app/396574.js");
var i = require("../app/787742.js");
var u = require("./688036.js");
var s = require("./503297.js");
var c = require("./66483.js");
var d = a(require("../vendor/667294.js"));
var f = require("./871210.js");