var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "ack");
  if (!n.success) {
    return n;
  }
  const r = (0, s.optional)(s.attrIntRange, e, "server_id", 99, 2147476647);
  if (!r.success) {
    return r;
  }
  const l = (0, o.parseAckMixin)(e, t);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)((0, i.default)({
    serverId: r.value
  }, l.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./41217.js");
var s = require("./686310.js");