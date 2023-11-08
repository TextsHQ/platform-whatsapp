var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUtmToChat = function (e, t) {
  if (!(0, a.isUtmTrackingEnabled)()) {
    return;
  }
  const n = e.toString();
  (0, s.persistUtmtoLocalStorage)(n, t);
  o.default.deleteChatId(n);
};
exports.clearUtmAfterMessageSent = function (e) {
  const t = e.toString();
  (0, s.removeUtmFromLocalStorage)(t);
  o.default.read(t);
  (function (e) {
    var t;
    const n = e.isLid() ? (t = (0, i.getPhoneNumber)(e)) === null || t === undefined ? undefined : t.user : e.user;
    const r = parseInt(n != null ? n : "0", 10);
    new l.UtmMessageSendWamEvent({
      businessPhoneNumber: r
    }).commit();
  })(e);
};
exports.getUtmForChat = function (e) {
  if (!(0, a.isUtmTrackingEnabled)()) {
    return null;
  }
  const t = e.toString();
  if (o.default.hasRead(t)) {
    return null;
  }
  const n = (0, s.getUtmFromLocalStorage)(t);
  if (n == null) {
    o.default.read(t);
  }
  return n;
};
var i = require("./12643.js");
var a = require("./72696.js");
var o = r(require("./988439.js"));
var s = require("./59594.js");
var l = require("./191424.js");