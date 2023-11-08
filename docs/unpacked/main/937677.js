var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubscribeToLiveUpdatesResponseSuccess = function (e, t) {
  const n = (0, i.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, i.flattenedChildWithTag)(e, "live_updates");
  if (!a.success) {
    return a;
  }
  const u = (0, i.attrIntRange)(a.value, "duration", 30, 600);
  if (!u.success) {
    return u;
  }
  const s = (0, l.parseIQResultResponseMixin)(e, t);
  if (!s.success) {
    return s;
  }
  return (0, o.makeResult)((0, r.default)({
    liveUpdatesDuration: u.value
  }, s.value));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/822591.js");
var i = require("../app/686310.js");