var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptBizBotTos = function () {
  return y.apply(this, arguments);
};
exports.dismissBizBotTos = function () {
  E((0, a.unixTime)());
};
exports.hasAcceptedBizBotTos = g;
exports.hasSeenAgentTos = f;
exports.hasSeenBizBotTos = function (e) {
  if (e === l.BizBotType.BIZ_1P && !(0, o.isBizBotConsentRequired)() || g()) {
    return true;
  }
  const t = d.default.getUser(p);
  if (typeof t != "number") {
    return false;
  }
  const n = (0, o.bizBotConsentDismissalCooldown)();
  if (n < 0) {
    return true;
  }
  if (n === 0) {
    return false;
  }
  return (0, a.unixTime)() - t < n;
};
exports.hasSeenBotTos = function () {
  return f() || _();
};
exports.hasSeenInvokeTos = _;
exports.markSeenAgentTos = function () {
  return m.apply(this, arguments);
};
exports.markSeenInvokeTos = function () {
  return h.apply(this, arguments);
};
exports.setBizBotTosDismissalTime = E;
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./354458.js");
var s = require("./67988.js");
var l = require("./37237.js");
var u = require("./231731.js");
var c = require("./87429.js");
var d = r(require("./53575.js"));
const p = "BIZ_BOT_TOS_DISMISSED_AT";
function f() {
  return c.TosManager.getState(s.BOT_AGENT_TOS_ID) === "ACCEPTED";
}
function _() {
  return c.TosManager.getState(s.BOT_INVOKE_TOS_ID) === "ACCEPTED";
}
function g() {
  return c.TosManager.getState(s.BIZ_BOT_TOS_ID) === "ACCEPTED";
}
function m() {
  return (m = (0, i.default)(function* () {
    yield (0, u.acceptUserDisclosureAction)(Number(s.BOT_AGENT_TOS_ID));
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    yield (0, u.acceptUserDisclosureAction)(Number(s.BOT_INVOKE_TOS_ID));
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* () {
    yield (0, u.acceptUserDisclosureAction)(Number(s.BIZ_BOT_TOS_ID));
  })).apply(this, arguments);
}
function E(e) {
  d.default.setUser(p, e);
}