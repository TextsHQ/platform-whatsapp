Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasUtmExpired = o;
exports.isUtmValid = function (e, t) {
  return e.contact.isEnterprise && !o(t) && !function (e, t) {
    const n = function (e) {
      const t = (0, a.unproxy)(e);
      for (let e = t.msgs.length - 1; e >= 0; e--) {
        const n = t.msgs.at(e);
        if (n && !(0, i.getIsSentByMe)(n)) {
          return n;
        }
      }
      return;
    }(e);
    if (n == null || n.t == null) {
      return false;
    }
    return n.t * 1000 > t.addedTime;
  }(e, t);
};
var r = require("./72696.js");
var i = require("./787742.js");
var a = require("./163139.js");
function o(e) {
  const t = Date.now();
  const n = (0, r.utmTrackingExpirationInHours)() * 60 * 60 * 1000;
  return e.addedTime + n <= t;
}