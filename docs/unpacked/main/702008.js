var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Poll = function (e) {
  const [t] = (0, s.useMsgValues)(e.msg.id, [o.getIsNewsletterMsg]);
  if (t) {
    return u.default.createElement(f, e);
  }
  return u.default.createElement(d, e);
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/787742.js");
var l = require("./559156.js");
var i = require("./620283.js");
var u = a(require("../vendor/667294.js"));
var s = require("./871210.js");
var c = require("./964034.js");
function d(e) {
  const t = (0, i.useResults)(e.msg);
  return u.default.createElement(l.PollMessageComponentView, (0, r.default)({}, e, {
    optionsToResults: t
  }));
}
function f(e) {
  const t = (0, c.useNewsletterPollsResults)(e.msg);
  return u.default.createElement(l.PollMessageComponentView, (0, r.default)({}, e, {
    optionsToResults: t
  }));
}