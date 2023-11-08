var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBotListResponseSuccessV1 = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, u.flattenedChildWithTag)(e, "bot");
  if (!r.success) {
    return r;
  }
  const o = (0, u.optionalLiteral)(u.attrString, r.value, "v", "1");
  if (!o.success) {
    return o;
  }
  const l = (0, s.parseIQResultResponseMixin)(e, t);
  if (!l.success) {
    return l;
  }
  const d = (0, u.mapChildrenWithTag)(r.value, "bot", 1, 1 / 0, c);
  if (!d.success) {
    return d;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    botV: o.value
  }, l.value), {}, {
    botBot: d.value
  }));
};
exports.parseBotListResponseSuccessV1BotBot = c;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./738331.js");
var s = require("./864854.js");
var l = require("./568113.js");
var u = require("./686310.js");
function c(e) {
  const t = (0, u.assertTag)(e, "bot");
  if (!t.success) {
    return t;
  }
  const n = (0, l.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, u.optional)(u.attrStringEnum, e, "default", o.ENUM_FALSE_TRUE);
  if (r.success) {
    return (0, a.makeResult)({
      jid: n.value,
      default: r.value
    });
  } else {
    return r;
  }
}