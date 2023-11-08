var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    className: t,
    xstyle: n
  } = e;
  const [a, _, y, C] = (0, g.useMsgValues)(e.msg.id, [s.getIsForwarded, s.getForwardingScore, s.getNumTimesForwarded, s.getIsFrequentlyForwarded]);
  if (!(0, c.showForwarded)(e.msg)) {
    return null;
  }
  const b = C;
  const M = b ? m.default.createElement(i.HighlyForwardedV2Icon, {
    className: (0, h.default)(E)
  }) : m.default.createElement(o.ForwardedIcon, {
    className: (0, h.default)(E)
  });
  const S = p.fbt._("Forwarded many times", null, {
    hk: "3LRhTn"
  });
  const T = p.fbt._("Forwarded", null, {
    hk: "VlL2I"
  });
  const w = b ? S : T;
  const A = e.msg.forwardedNewsletterMessageInfo;
  const P = (0, d.isNewsletterMessageForwardReceivingEnabled)() && A != null ? m.default.createElement("div", {
    className: (0, h.default)(f.uiPadding.vert3)
  }, m.default.createElement(l.ForwardedNewsletterMessageInfoHeader, {
    newsletterForwardedMessageInfo: A
  })) : null;
  return m.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)((0, h.default)(v, n), t)
  }, M, m.default.createElement(u.MessageTopIndicatorText, null, w), P);
};
var r = require("../app/396574.js");
var o = require("./749946.js");
var l = require("./952492.js");
var i = require("./907132.js");
var u = require("./767448.js");
var s = require("../app/787742.js");
var c = require("./192071.js");
var d = require("../app/73225.js");
var f = require("../app/676345.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
var h = a(require("../app/156720.js"));
var g = require("./871210.js");
const E = {
  display: "l7jjieqr",
  verticalAlign: "fewfhwl7",
  color: "s4k44ver"
};
const v = {
  marginStart: "bx0vhl82"
};