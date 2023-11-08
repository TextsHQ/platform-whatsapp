var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    options: n
  } = e;
  const [a, d] = (0, c.useMsgValues)(t.id, [r.getAck, r.getIsViewOnce]);
  if (d) {
    if (n.viewOnceStatic !== true && (0, i.isViewed)(t.safe())) {
      return s.default.createElement(u.ViewOnceViewedIcon, {
        width: 20,
        height: 20
      });
    } else {
      return s.default.createElement(l.ViewOnceIcon, {
        width: 20,
        height: 20
      });
    }
  }
  return s.default.createElement(o.StatusImageIcon, null);
};
var r = require("../app/787742.js");
var o = require("./269237.js");
var l = require("./171221.js");
var i = require("../app/239870.js");
var u = require("./562732.js");
var s = a(require("../vendor/667294.js"));
var c = require("./871210.js");