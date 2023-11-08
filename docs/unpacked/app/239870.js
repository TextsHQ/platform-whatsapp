Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIEW_ONCE_EXPIRE_AFTER = undefined;
exports.isExpired = c;
exports.isUnviewed = function (e) {
  return !u(e) && !c(e);
};
exports.isViewed = u;
exports.setViewOnceTestExpire_INTERNAL = function () {};
var r = require("./632157.js");
var i = require("./402994.js");
var a = require("./163755.js");
var o = require("./163139.js");
let s = 1209600;
function l(e) {
  const t = (0, o.unproxy)(e);
  if (t != null) {
    return (0, a.getAsViewOnce)(t.unsafe());
  } else {
    return null;
  }
}
function u(e) {
  var t;
  return ((t = l(e)) === null || t === undefined ? undefined : t.ack) === i.ACK.PLAYED;
}
function c(e) {
  const t = l(e);
  if (t == null) {
    return false;
  }
  const n = (0, r.unixTime)() - (0, o.unproxy)(t).t;
  return !u(t) && n >= s;
}
exports.VIEW_ONCE_EXPIRE_AFTER = s;