var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttStatus = function (e) {
  const t = (0, r.classnamesConvertMeToStylexPlease)(u.icon, function (e) {
    let {
      played: t,
      isOutgoingMsg: n
    } = e;
    if (t) {
      return u.blue;
    }
    if (n) {
      return u.gray;
    }
    return u.green;
  }(e), {
    [u.outgoing]: e.isOutgoingMsg,
    [u.incoming]: !e.isOutgoingMsg
  });
  return i.default.createElement("div", {
    className: o.default.wrapper
  }, i.default.createElement("div", {
    className: t
  }, i.default.createElement(l.PttStatusIcon, null)));
};
var r = require("../app/396574.js");
var o = a(require("./817850.js"));
var l = require("./473044.js");
var i = a(require("../vendor/667294.js"));
const u = {
  incoming: o.default.incoming,
  outgoing: o.default.outgoing,
  green: o.default.green,
  blue: o.default.blue,
  gray: o.default.gray,
  icon: o.default.icon
};