var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    options: n
  } = e;
  const [a, f, p] = (0, d.useMsgValues)(t.id, [r.getAck, r.getIsViewOnce, r.getIsGif]);
  if (f) {
    if (n.viewOnceStatic !== true && (0, u.isViewed)(t.safe())) {
      return c.default.createElement(s.ViewOnceViewedIcon, {
        width: 20,
        height: 20
      });
    } else {
      return c.default.createElement(i.ViewOnceIcon, {
        width: 20,
        height: 20
      });
    }
  }
  if (p) {
    return c.default.createElement(o.StatusGifIcon, null);
  }
  return c.default.createElement(l.StatusVideoIcon, null);
};
var r = require("../app/787742.js");
var o = require("./121044.js");
var l = require("./988708.js");
var i = require("./171221.js");
var u = require("../app/239870.js");
var s = require("./562732.js");
var c = a(require("../vendor/667294.js"));
var d = require("./871210.js");