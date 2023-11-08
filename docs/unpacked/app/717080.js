var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMyAddOnsResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, u.flattenedChildWithTag)(e, "my_addons");
  if (!r.success) {
    return r;
  }
  const s = (0, o.parseIQResultResponseMixin)(e, t);
  if (!s.success) {
    return s;
  }
  const l = (0, u.mapChildrenWithTag)(r.value, "messages", 0, 5000, d);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, s.value), {}, {
    myAddonsMessages: l.value
  }));
};
exports.parseMyAddOnsResponseSuccessMyAddonsMessages = d;
exports.parseMyAddOnsResponseSuccessMyAddonsMessagesMessage = c;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./822591.js");
var s = require("./195293.js");
var l = require("./568113.js");
var u = require("./686310.js");
function c(e) {
  const t = (0, u.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, s.parseNewsletterMessageMyAddOnsMixin)(e);
  n.success;
  return n;
}
function d(e) {
  const t = (0, u.assertTag)(e, "messages");
  if (!t.success) {
    return t;
  }
  const n = (0, l.attrNewsletterJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, u.mapChildrenWithTag)(e, "message", 0, 5000, c);
  if (r.success) {
    return (0, a.makeResult)({
      jid: n.value,
      message: r.value
    });
  } else {
    return r;
  }
}