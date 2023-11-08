var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNegativeAckMixin = function (e, t) {
  const n = (0, l.assertTag)(e, "ack");
  if (!n.success) {
    return n;
  }
  const r = (0, l.attrString)(e, "error");
  if (!r.success) {
    return r;
  }
  const u = (0, o.parseAckMixin)(e, t);
  if (!u.success) {
    return u;
  }
  const c = (0, s.parseApplicationNegativeAckMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    error: r.value
  }, u.value), {}, {
    applicationNegativeAckMixin: c.success ? c.value : null
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./41217.js");
var s = require("./223806.js");
var l = require("./686310.js");